// Navigasi untuk klien uji: BFS di grid 1 langkah yang menghindari penghalang peta aktif,
// lalu memotong jalur selama garis lurus bebas.
import { blocked } from '../shared/sim.js';
import { ARENA, PLAYER_R } from '../shared/config.js';

const G = 1, N = Math.floor(ARENA / G);
const free = (x, z) => !blocked(x, z, PLAYER_R + 0.25);
export function route(sx, sz, tx, tz) {
  const key = (i, j) => (i + N) * (2 * N + 1) + (j + N);
  const si = Math.round(sx / G), sj = Math.round(sz / G), ti = Math.round(tx / G), tj = Math.round(tz / G);
  const prev = new Map([[key(si, sj), null]]), q = [[si, sj]];
  while (q.length) {
    const [i, j] = q.shift();
    if (i === ti && j === tj) break;
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) {
      const ni = i + di, nj = j + dj, k = key(ni, nj);
      if (Math.abs(ni) > N || Math.abs(nj) > N || prev.has(k) || !free(ni * G, nj * G)) continue;
      prev.set(k, [i, j]); q.push([ni, nj]);
    }
  }
  if (!prev.has(key(ti, tj))) return [[tx, tz]];
  const path = []; let cur = [ti, tj];
  while (cur) { path.unshift([cur[0] * G, cur[1] * G]); cur = prev.get(key(cur[0], cur[1])); }
  path[path.length - 1] = [tx, tz];
  return path;
}
const clear = (x0, z0, x1, z1) => { const d = Math.hypot(x1 - x0, z1 - z0), n = Math.ceil(d / 0.4); for (let i = 1; i <= n; i++) if (!free(x0 + ((x1 - x0) * i) / n, z0 + ((z1 - z0) * i) / n)) return false; return true; };
// Mengembalikan arah gerak [mx, mz] dari posisi (x,z) menuju (tx,tz); state disimpan di objek nav.
export function navStep(nav, x, z, tx, tz) {
  // macet (tersangkut di sudut): bergerak ke samping sebentar, lalu hitung ulang jalur
  const now = Date.now();
  if (!nav.chk || now - nav.chk.t > 700) {
    if (nav.chk && Math.hypot(x - nav.chk.x, z - nav.chk.z) < 0.6 && Math.hypot(tx - x, tz - z) > 1) { nav.unstick = now + 450; nav.side = nav.side === 1 ? -1 : 1; nav.path = null; }
    nav.chk = { t: now, x, z };
  }
  if (nav.unstick > now) { const a = Math.atan2(tx - x, tz - z) + (Math.PI / 2) * nav.side; return [Math.sin(a), Math.cos(a)]; }
  if (!nav.path || Math.hypot(nav.tx - tx, nav.tz - tz) > 2 || Date.now() - nav.at > 2500) Object.assign(nav, { tx, tz, at: Date.now(), path: route(x, z, tx, tz) });
  const p = nav.path;
  while (p.length > 1 && clear(x, z, p[1][0], p[1][1])) p.shift();
  if (p.length > 1 && Math.hypot(p[0][0] - x, p[0][1] - z) < 0.5) p.shift();
  const dx = p[0][0] - x, dz = p[0][1] - z, d = Math.hypot(dx, dz) || 1;
  return Math.hypot(tx - x, tz - z) < 0.6 ? [0, 0] : [dx / d, dz / d];
}
