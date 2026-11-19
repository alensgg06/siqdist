"""Membuat ikon aplikasi (layar utama iPhone dan Android) ke client/icons/.  python3 tools/icons.py"""
import math, os
from PIL import Image, ImageDraw, ImageFilter

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'client', 'icons')

def icon(size, pad=0.0):
    """pad: ruang kosong di tepi (ikon 'maskable' Android dipotong bundar, jadi isinya harus lebih ke tengah)."""
    S = size * 4  # digambar besar lalu dikecilkan supaya tepinya halus
    img = Image.new('RGB', (S, S), (18, 10, 28))
    px = img.load()
    for y in range(S):  # latar: senja ungu dengan pusat hangat
        for x in range(0, S, 1):
            d = math.hypot(x - S / 2, y - S * 0.46) / (S * 0.72)
            t = max(0.0, 1 - d)
            px[x, y] = (int(18 + 70 * t * t), int(10 + 26 * t * t), int(28 + 62 * t))
    c, r = S / 2, S * (0.5 - pad)
    glow = Image.new('RGBA', (S, S), (0, 0, 0, 0)); g = ImageDraw.Draw(glow)
    g.ellipse([c - r * 0.62, c - r * 0.62, c + r * 0.62, c + r * 0.62], fill=(255, 190, 90, 110))
    img.paste(glow.filter(ImageFilter.GaussianBlur(S * 0.07)), (0, 0), glow.filter(ImageFilter.GaussianBlur(S * 0.07)))
    d = ImageDraw.Draw(img, 'RGBA')
    # lingkaran rune
    for rad, w, a in [(0.74, 0.022, 230), (0.64, 0.010, 150)]:
        d.ellipse([c - r * rad, c - r * rad, c + r * rad, c + r * rad], outline=(242, 198, 109, a), width=max(1, int(S * w)))
    for i in range(8):
        a = i * math.pi / 4 + math.pi / 8
        d.line([c + math.cos(a) * r * 0.64, c + math.sin(a) * r * 0.64, c + math.cos(a) * r * 0.74, c + math.sin(a) * r * 0.74], fill=(242, 198, 109, 200), width=max(1, int(S * 0.012)))
    # kristal: belah ketupat bersegi dengan sisi terang dan gelap
    top, bot, lft, rgt, mid = (c, c - r * 0.50), (c, c + r * 0.50), (c - r * 0.27, c - r * 0.04), (c + r * 0.27, c - r * 0.04), (c, c - r * 0.04)
    d.polygon([top, lft, mid], fill=(190, 245, 255, 255)); d.polygon([top, rgt, mid], fill=(120, 215, 250, 255))
    d.polygon([bot, lft, mid], fill=(90, 170, 235, 255)); d.polygon([bot, rgt, mid], fill=(52, 110, 200, 255))
    d.line([top, bot], fill=(235, 252, 255, 160), width=max(1, int(S * 0.006)))
    return img.resize((size, size), Image.LANCZOS)

os.makedirs(OUT, exist_ok=True)
for name, size, pad in [('apple-touch-icon.png', 180, 0.04), ('icon-192.png', 192, 0.04), ('icon-512.png', 512, 0.04), ('maskable-512.png', 512, 0.14), ('favicon-32.png', 32, 0.0)]:
    icon(size, pad).save(os.path.join(OUT, name), optimize=True)
    print(name, os.path.getsize(os.path.join(OUT, name)) // 1024, 'KB')
