"""Membuat tekstur resolusi tinggi untuk Arkana dengan model gambar (SDXL) di GPU.

Hasil ditulis ke $OUT/assets/ beserta manifest.json; game memakainya otomatis dan kembali ke
tekstur bawaan bila folder itu dihapus. Jalankan lewat Docker (lihat README bagian "Tekstur dari GPU").

  GFX_ONLY=stone,ground   hanya membuat tekstur tertentu
  GFX_SEED=7              mengganti benih acak (hasil berbeda)
  GFX_FAKE=1              tanpa model: gambar derau, hanya untuk menguji alur
"""
import json, os, sys, time
from pathlib import Path

import numpy as np
from PIL import Image

OUT = Path(os.environ.get("OUT", "/out")) / "assets"
SIZE = int(os.environ.get("GFX_SIZE", "1024"))
SEED = int(os.environ.get("GFX_SEED", "1"))
MODEL = os.environ.get("GFX_MODEL", "stabilityai/stable-diffusion-xl-base-1.0")
NEG = "text, watermark, logo, people, perspective, horizon, sky, frame, border, vignette, blurry, low quality, 3d render of an object"
# nama: (deskripsi, menyambung di tepi?)
TEXTURES = {
    "stone": ("seamless texture of an ancient ruin wall, large weathered grey-violet stone blocks with thin mortar lines, patches of moss, flat even lighting, top-down orthographic, game texture, highly detailed", True),
    "ground": ("seamless texture of a forest clearing floor, flat cobblestones half buried in dark earth, short grass and moss between stones, flat even lighting, top-down orthographic, game texture, highly detailed", True),
    "planks": ("seamless texture of old harbor dock planks, long weathered dark wooden boards running horizontally, iron nails, damp, flat even lighting, top-down orthographic, game texture, highly detailed", True),
    "crate": ("front face of a wooden shipping crate, square, thick plank frame around the edge with a diagonal brace, weathered wood, iron corner brackets, flat even lighting, orthographic, game texture, highly detailed", False),
}


def edge_gap(img):
    """Selisih rata-rata antara tepi kiri-kanan dan atas-bawah (0..255). Kecil berarti menyambung."""
    a = np.asarray(img.convert("RGB"), dtype=np.float32)
    inner = (np.abs(a[:, 1:] - a[:, :-1]).mean() + np.abs(a[1:] - a[:-1]).mean()) / 2  # selisih wajar antar piksel bertetangga
    seam = (np.abs(a[:, 0] - a[:, -1]).mean() + np.abs(a[0] - a[-1]).mean()) / 2
    return seam, inner


def fake(name, tile):
    rng = np.random.default_rng(abs(hash(name)) % 2**32)
    base = rng.integers(60, 200, (8, 8, 3), dtype=np.uint8)
    return Image.fromarray(base).resize((SIZE, SIZE), Image.BICUBIC if not tile else Image.NEAREST)


def load_pipe():
    import torch
    from diffusers import AutoencoderKL, StableDiffusionXLPipeline

    if not torch.cuda.is_available():
        sys.exit("GPU tidak terlihat dari dalam container. Periksa runtime nvidia (docker info | grep -i runtime).")
    free, total = torch.cuda.mem_get_info()
    print(f"GPU: {torch.cuda.get_device_name(0)}, bebas {free / 2**30:.1f} dari {total / 2**30:.1f} GB", flush=True)
    if free < 6 * 2**30:
        sys.exit("Memori GPU bebas kurang dari 6 GB. Hentikan dulu proses lain yang memakai GPU.")
    # VAE khusus: VAE bawaan SDXL bisa menghasilkan gambar hitam pada presisi setengah
    vae = AutoencoderKL.from_pretrained("madebyollin/sdxl-vae-fp16-fix", torch_dtype=torch.float16)
    pipe = StableDiffusionXLPipeline.from_pretrained(MODEL, vae=vae, torch_dtype=torch.float16, variant="fp16", use_safetensors=True)
    pipe.enable_model_cpu_offload()  # hanya bagian yang sedang bekerja yang berada di GPU: aman bila GPU dipakai proses lain
    pipe.enable_vae_slicing()
    pipe.set_progress_bar_config(disable=True)
    return pipe, torch


def set_tiling(pipe, torch, on):
    """Konvolusi berpadding melingkar membuat gambar menyambung di keempat tepinya."""
    for model in (pipe.unet, pipe.vae):
        for m in model.modules():
            if isinstance(m, torch.nn.Conv2d):
                m.padding_mode = "circular" if on else "zeros"


def main():
    only = [s for s in os.environ.get("GFX_ONLY", "").split(",") if s]
    unknown = [n for n in only if n not in TEXTURES]
    if unknown:
        sys.exit(f"Tekstur tidak dikenal: {', '.join(unknown)}. Pilihan: {', '.join(TEXTURES)}")
    names = only or list(TEXTURES)
    OUT.mkdir(parents=True, exist_ok=True)
    is_fake = os.environ.get("GFX_FAKE") == "1"
    pipe = torch = None
    if not is_fake:
        print(f"Memuat model {MODEL} (unduhan pertama beberapa GB)...", flush=True)
        pipe, torch = load_pipe()
    manifest_file = OUT / "manifest.json"
    manifest = {"tex": {}}
    if manifest_file.exists():
        try:
            manifest = json.loads(manifest_file.read_text())
        except ValueError:
            pass
    manifest.setdefault("tex", {})
    for name in names:
        prompt, tile = TEXTURES[name]
        t0 = time.time()
        if is_fake:
            img = fake(name, tile)
        else:
            set_tiling(pipe, torch, tile)
            gen = torch.Generator("cpu").manual_seed(SEED * 1000 + list(TEXTURES).index(name))
            img = pipe(prompt=prompt, negative_prompt=NEG, width=SIZE, height=SIZE, num_inference_steps=30, guidance_scale=6.5, generator=gen).images[0]
        seam, inner = edge_gap(img)
        file = f"{name}.webp"
        img.save(OUT / file, "WEBP", quality=88, method=6)
        manifest["tex"][name] = file
        note = "" if not tile else (" (menyambung)" if seam < inner * 2.5 + 2 else " (PERINGATAN: tepi tidak menyambung, coba GFX_SEED lain)")
        print(f"{name}: {file}, {(OUT / file).stat().st_size // 1024} KB, {time.time() - t0:.0f} dtk, selisih tepi {seam:.1f} vs dalam {inner:.1f}{note}", flush=True)
    manifest["v"] = int(time.time())
    manifest["model"] = "uji" if is_fake else MODEL
    manifest_file.write_text(json.dumps(manifest))
    print(f"Selesai. {len(manifest['tex'])} tekstur di {OUT}. Muat ulang game untuk melihatnya.")


if __name__ == "__main__":
    main()
