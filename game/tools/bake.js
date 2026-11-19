// Memanggang cahaya lantai tiap peta menjadi gambar (dijalankan saat pengembangan, hasilnya di-commit):
//   node tools/bake.js
// Merah  = gelap-sudut (ambient occlusion): seberapa terbuka titik lantai itu ke langit di sekitarnya.
// Hijau  = terlihat-tidaknya sumber cahaya utama (matahari/bulan) dari titik itu, dengan tepi lembut.
// Dihitung di CPU dengan menembakkan sinar ke penghalang peta (kotak dan silinder dari shared/config.js).
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { MAPS } from '../shared/config.js';

import { ARENA } from '../shared/config.js';
export const EXT = ARENA + 8, SIZE = 512;        // gambar mencakup -EXT..EXT pada x dan z
const LIGHT = { ruins: [-0.62, 0.4, -0.68], harbor: [0.55, 0.5, -0.67] }; // sama dengan SUN_DIR dan MOON_DIR di klien
const AO_N = 40, AO_DIST = 7, SUN_N = 28, SUN_SPREAD = 0.07;
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'client', 'bake');

function rng(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646; }
const norm = (v) => { const l = Math.hypot(...v); return v.map((x) => x / l); };

// jarak tembus sinar (asal o di lantai, arah d, d[1] > 0) ke satu penghalang; Infinity bila meleset
function hit(ob, ox, oz, d) {
  if (ob.t === 'box') {
    let t0 = 0, t1 = Infinity;
    for (const [o, dir, c, half] of [[ox, d[0], ob.x, ob.w / 2], [oz, d[2], ob.z, ob.d / 2]]) {
      if (Math.abs(dir) < 1e-9) { if (Math.abs(o - c) > half) return Infinity; continue; }
      let a = (c - half - o) / dir, b = (c + half - o) / dir; if (a > b) [a, b] = [b, a];
      t0 = Math.max(t0, a); t1 = Math.min(t1, b); if (t0 > t1) return Infinity;
    }
    t1 = Math.min(t1, ob.h / d[1]); // sinar keluar lewat atas
    return t0 <= t1 ? t0 : Infinity;
  }
  const fx = ox - ob.x, fz = oz - ob.z, a = d[0] * d[0] + d[2] * d[2];
  if (a < 1e-12) return fx * fx + fz * fz <= ob.r * ob.r ? 0 : Infinity;
  const b = fx * d[0] + fz * d[2], c = fx * fx + fz * fz - ob.r * ob.r, disc = b * b - a * c;
  if (disc < 0) return Infinity;
  const sq = Math.sqrt(disc), t0 = Math.max(0, (-b - sq) / a), t1 = Math.min((-b + sq) / a, ob.h / d[1]);
  return t0 <= t1 ? t0 : Infinity;
}
const inside = (ob, x, z) => (ob.t === 'box' ? Math.abs(x - ob.x) < ob.w / 2 && Math.abs(z - ob.z) < ob.d / 2 : Math.hypot(x - ob.x, z - ob.z) < ob.r);

export function bake(id) {
  const obst = MAPS[id].obst, L = norm(LIGHT[id]), R = rng(977);
  // arah contoh dibuat sekali; tiap titik memutarnya dengan sudut acak supaya polanya tidak bergaris
  const ao = Array.from({ length: AO_N }, (_, i) => { const u = (i + 0.5) / AO_N, r = Math.sqrt(u), a = i * 2.39996; return [r * Math.cos(a), Math.sqrt(1 - u), r * Math.sin(a)]; });
  const up = Math.abs(L[1]) < 0.99 ? [0, 1, 0] : [1, 0, 0];
  const tx = norm([up[1] * L[2] - up[2] * L[1], up[2] * L[0] - up[0] * L[2], up[0] * L[1] - up[1] * L[0]]);
  const ty = [L[1] * tx[2] - L[2] * tx[1], L[2] * tx[0] - L[0] * tx[2], L[0] * tx[1] - L[1] * tx[0]];
  const sun = Array.from({ length: SUN_N }, (_, i) => { const r = Math.sqrt((i + 0.5) / SUN_N) * SUN_SPREAD, a = i * 2.39996; return norm([L[0] + (tx[0] * Math.cos(a) + ty[0] * Math.sin(a)) * r, L[1] + (tx[1] * Math.cos(a) + ty[1] * Math.sin(a)) * r, L[2] + (tx[2] * Math.cos(a) + ty[2] * Math.sin(a)) * r]); });
  const reach = Math.max(...obst.map((o) => o.h)) / L[1] * Math.hypot(L[0], L[2]) + 4; // bayangan terpanjang di lantai
  const A = new Float32Array(SIZE * SIZE), S = new Float32Array(SIZE * SIZE);
  for (let j = 0; j < SIZE; j++) for (let i = 0; i < SIZE; i++) {
    const x = ((i + 0.5) / SIZE * 2 - 1) * EXT, z = ((j + 0.5) / SIZE * 2 - 1) * EXT, k = j * SIZE + i;
    const near = obst.filter((o) => Math.hypot(x - o.x, z - o.z) < reach + (o.t === 'box' ? Math.hypot(o.w, o.d) / 2 : o.r));
    if (near.some((o) => inside(o, x, z))) { A[k] = -1; continue; } // di bawah penghalang: diisi dari tetangga nanti
    const rot = R() * 6.2832, cs = Math.cos(rot), sn = Math.sin(rot);
    let occ = 0;
    for (const d of ao) {
      const dir = [d[0] * cs - d[2] * sn, Math.max(d[1], 0.05), d[0] * sn + d[2] * cs];
      let t = Infinity; for (const o of near) t = Math.min(t, hit(o, x, z, dir));
      if (t < AO_DIST) occ += 1 - t / AO_DIST; // yang dekat menggelapkan lebih kuat
    }
    A[k] = 1 - occ / AO_N;
    let vis = 0;
    for (const d of sun) { let free = true; for (const o of near) if (hit(o, x, z, d) < Infinity) { free = false; break; } if (free) vis++; }
    S[k] = vis / SUN_N;
  }
  // isi titik di bawah penghalang dengan rata-rata tetangga yang sah, lalu haluskan sekali
  const fill = (M, mask) => { for (let k = 0; k < M.length; k++) if (mask[k] < 0) { let s = 0, n = 0; const i = k % SIZE, j = (k / SIZE) | 0; for (let r = 1; r < 6 && !n; r++) for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) { const ii = i + di, jj = j + dj; if (ii < 0 || jj < 0 || ii >= SIZE || jj >= SIZE || mask[jj * SIZE + ii] < 0) continue; s += M[jj * SIZE + ii]; n++; } M[k] = n ? s / n : 0.6; } };
  const mask = Float32Array.from(A); fill(S, mask); fill(A, mask);
  const blur = (M) => { const o = new Float32Array(M.length); for (let j = 0; j < SIZE; j++) for (let i = 0; i < SIZE; i++) { let s = 0, n = 0; for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) { const ii = i + di, jj = j + dj; if (ii < 0 || jj < 0 || ii >= SIZE || jj >= SIZE) continue; const w = di || dj ? 1 : 2; s += M[jj * SIZE + ii] * w; n += w; } o[j * SIZE + i] = s / n; } return o; };
  return { ao: blur(A), sun: blur(S) };
}

// penulis PNG RGB 8-bit tanpa pustaka
function png(w, h, rgb) {
  const crcT = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
  const crc = (buf) => { let c = 0xffffffff; for (const b of buf) c = crcT[(c ^ b) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
  const chunk = (type, data) => { const len = Buffer.alloc(4); len.writeUInt32BE(data.length); const td = Buffer.concat([Buffer.from(type), data]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([len, td, c]); };
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 2;
  const raw = Buffer.alloc((w * 3 + 1) * h);
  for (let y = 0; y < h; y++) rgb.copy(raw, y * (w * 3 + 1) + 1, y * w * 3, (y + 1) * w * 3);
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  fs.mkdirSync(OUT, { recursive: true });
  for (const id of Object.keys(MAPS)) {
    const t0 = Date.now(), { ao, sun } = bake(id), rgb = Buffer.alloc(SIZE * SIZE * 3);
    let aoMin = 1, lit = 0;
    for (let k = 0; k < SIZE * SIZE; k++) { rgb[k * 3] = Math.round(Math.max(0, Math.min(1, ao[k])) * 255); rgb[k * 3 + 1] = Math.round(Math.max(0, Math.min(1, sun[k])) * 255); rgb[k * 3 + 2] = 255; aoMin = Math.min(aoMin, ao[k]); lit += sun[k]; }
    const file = path.join(OUT, `${id}.png`); fs.writeFileSync(file, png(SIZE, SIZE, rgb));
    console.log(`${id}: ${SIZE}x${SIZE}, ${(fs.statSync(file).size / 1024).toFixed(0)} KB, ${((Date.now() - t0) / 1000).toFixed(1)} dtk, gelap-sudut terdalam ${aoMin.toFixed(2)}, lantai terkena cahaya ${(lit / (SIZE * SIZE) * 100).toFixed(0)}%`);
  }
}
