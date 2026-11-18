// Fisika deterministik yang dipakai server (otoritatif) dan klien (prediksi).
import { ARENA, PLAYER_R, OBST, DASH_SPEED, DASH_TIME } from './config.js';

export function collide(p, r) {
  for (let it = 0; it < 2; it++) {
    const lim = ARENA - r;
    if (p.x > lim) p.x = lim; else if (p.x < -lim) p.x = -lim;
    if (p.z > lim) p.z = lim; else if (p.z < -lim) p.z = -lim;
    for (let i = 0; i < OBST.length; i++) {
      const o = OBST[i];
      if (o.t === 'cyl') {
        let dx = p.x - o.x, dz = p.z - o.z;
        const min = o.r + r, d2 = dx * dx + dz * dz;
        if (d2 < min * min) {
          let d = Math.sqrt(d2);
          if (d < 1e-6) { dx = 1; dz = 0; d = 1; }
          p.x = o.x + (dx / d) * min; p.z = o.z + (dz / d) * min;
        }
      } else {
        const hw = o.w / 2, hd = o.d / 2;
        const cx = Math.max(o.x - hw, Math.min(p.x, o.x + hw));
        const cz = Math.max(o.z - hd, Math.min(p.z, o.z + hd));
        let dx = p.x - cx, dz = p.z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 < r * r) {
          if (d2 > 1e-10) {
            const d = Math.sqrt(d2);
            p.x = cx + (dx / d) * r; p.z = cz + (dz / d) * r;
          } else {
            // pusat berada di dalam kotak: dorong lewat sisi terdekat
            const px = hw - Math.abs(p.x - o.x), pz = hd - Math.abs(p.z - o.z);
            if (px < pz) p.x = o.x + Math.sign(p.x - o.x || 1) * (hw + r);
            else p.z = o.z + Math.sign(p.z - o.z || 1) * (hd + r);
          }
        }
      }
    }
  }
}

// p: {x,z,yaw,dashT,dx,dz,skillCd}; inp: {mx,mz,y,k}. Mengembalikan true bila skill terpicu.
export function stepPlayer(p, inp, cls, dt) {
  p.yaw = inp.y;
  let mx = inp.mx, mz = inp.mz;
  const l = Math.hypot(mx, mz);
  if (l > 1) { mx /= l; mz /= l; }
  if (p.skillCd > 0) p.skillCd = Math.max(0, p.skillCd - dt);
  let fired = false;
  if (inp.k && p.skillCd <= 0) {
    p.skillCd = cls.skillCd; fired = true;
    if (cls.skill === 'dash') {
      p.dashT = DASH_TIME;
      if (l > 0.2) { p.dx = inp.mx / l; p.dz = inp.mz / l; }
      else { p.dx = Math.sin(p.yaw); p.dz = Math.cos(p.yaw); }
    }
  }
  if (p.dashT > 0) {
    p.x += p.dx * DASH_SPEED * dt; p.z += p.dz * DASH_SPEED * dt;
    p.dashT = Math.max(0, p.dashT - dt);
  } else {
    const sp = cls.speed * (p.spd || 1); // p.spd: pengali kecepatan dari Rune Angin
    p.x += mx * sp * dt; p.z += mz * sp * dt;
  }
  collide(p, PLAYER_R);
  return fired;
}

export function blocked(x, z, r) {
  const lim = ARENA - r;
  if (x > lim || x < -lim || z > lim || z < -lim) return true;
  for (let i = 0; i < OBST.length; i++) {
    const o = OBST[i];
    if (o.t === 'cyl') {
      const dx = x - o.x, dz = z - o.z, m = o.r + r;
      if (dx * dx + dz * dz < m * m) return true;
    } else if (Math.abs(x - o.x) < o.w / 2 + r && Math.abs(z - o.z) < o.d / 2 + r) return true;
  }
  return false;
}

export function los(x0, z0, x1, z1) {
  const dx = x1 - x0, dz = z1 - z0, d = Math.hypot(dx, dz);
  const n = Math.ceil(d / 0.7);
  for (let i = 1; i < n; i++) {
    const t = i / n;
    if (blocked(x0 + dx * t, z0 + dz * t, 0.1)) return false;
  }
  return true;
}

export function angDiff(a, b) {
  let d = (a - b) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2; else if (d < -Math.PI) d += Math.PI * 2;
  return d;
}
