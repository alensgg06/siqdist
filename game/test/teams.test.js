// Uji mode tim: Tim (dua regu seimbang) dan Lawan Bot.
// Butuh tiga server tanpa bot:
//   PORT=8095 BOTS=0 KOTH_LIMIT=5 END_TIME=2 DATA_DIR=... node server/server.js
//   PORT=8094 BOTS=0 LAGCOMP=1 node server/server.js
//   PORT=8093 BOTS=0 LAGCOMP=0 node server/server.js
import fs from 'node:fs';
import path from 'node:path';
import WebSocket from 'ws';
import { los, blocked } from '../shared/sim.js';
import { RUNES, INTERP, ARENA, PLAYER_R } from '../shared/config.js';

const HOST = process.env.HOST || 'ws://localhost';
const DATA = process.env.DATA_DIR;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fail = (m) => { console.error('GAGAL:', m); process.exit(1); };

// Klien uji. lat = latensi buatan satu arah (ms) untuk kirim dan terima.
function client(port, join, lat = 0) {
  const c = { ws: new WebSocket(`${HOST}:${port}/ws`), id: 0, w: null, snap: null, roster: [], ev: [], seq: 0, buf: new Map(), lat };
  const send = (o) => { const s = JSON.stringify(o); if (lat) setTimeout(() => c.ws.readyState === 1 && c.ws.send(s), lat); else c.ws.send(s); };
  c.send = send;
  const handle = (m) => {
    if (m.t === 'sp') return send({ t: 'spr', c: m.c });
    if (m.t === 'w') { c.w = m; c.id = m.id; } else if (m.t === 'r') { c.roster = m.l; c.ts = m.ts; }
    else if (m.t === 's') {
      c.snap = m; c.ev.push(...m.e);
      const now = Date.now();
      for (const p of m.p) { const b = c.buf.get(p[0]) || []; b.push([now, p[1], p[2], m.k]); if (b.length > 40) b.shift(); c.buf.set(p[0], b); }
    }
  };
  c.ws.on('open', () => c.ws.send(JSON.stringify({ t: 'join', name: join.name, cls: join.cls || 'ranger', mode: join.mode, code: join.code, gm: join.gm })));
  c.ws.on('message', (raw) => { const m = JSON.parse(raw); if (lat) setTimeout(() => handle(m), lat); else handle(m); });
  c.me = () => c.snap?.p.find((p) => p[0] === c.id);
  c.of = (id) => c.snap?.p.find((p) => p[0] === id);
  // posisi lawan seperti yang dilihat klien sungguhan: interpolasi INTERP detik di belakang
  c.seen = (id) => {
    const b = c.buf.get(id); if (!b?.length) return null;
    const t = Date.now() - INTERP * 1000;
    for (let i = b.length - 1; i > 0; i--) if (b[i - 1][0] <= t) { const [t0, x0, z0, k0] = b[i - 1], [t1, x1, z1, k1] = b[i]; const f = Math.min(1, (t - t0) / (t1 - t0 || 1)); return [x0 + (x1 - x0) * f, z0 + (z1 - z0) * f, k0 + (k1 - k0) * f]; }
    return [b[0][1], b[0][2], b[0][3]];
  };
  return c;
}
// Navigasi uji: BFS di grid 1 langkah yang menghindari penghalang, lalu memotong jalur selama garis lurus bebas.
const G = 1, N = Math.floor(ARENA / G);
const free = (x, z) => !blocked(x, z, PLAYER_R + 0.25);
function route(sx, sz, tx, tz) {
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
  const path = []; let cur = [ti, tj];
  if (!prev.has(key(ti, tj))) return [[tx, tz]];
  while (cur) { path.unshift([cur[0] * G, cur[1] * G]); cur = prev.get(key(cur[0], cur[1])); }
  path[path.length - 1] = [tx, tz];
  return path;
}
const clear = (x0, z0, x1, z1) => { const d = Math.hypot(x1 - x0, z1 - z0), n = Math.ceil(d / 0.4); for (let i = 1; i <= n; i++) if (!free(x0 + (x1 - x0) * i / n, z0 + (z1 - z0) * i / n)) return false; return true; };
function steer(c, tx, tz, t0, extra = {}) {
  const me = c.me(); if (!me) return 1e9;
  if (!c.nav || Math.hypot(c.nav.tx - tx, c.nav.tz - tz) > 2 || Date.now() - c.nav.at > 2500) c.nav = { tx, tz, at: Date.now(), path: route(me[1], me[2], tx, tz) };
  const path = c.nav.path;
  while (path.length > 1 && clear(me[1], me[2], path[1][0], path[1][1])) path.shift();
  if (path.length > 1 && Math.hypot(path[0][0] - me[1], path[0][1] - me[2]) < 0.5) path.shift();
  const [wx, wz] = path[0], dx = wx - me[1], dz = wz - me[2], d = Math.hypot(dx, dz) || 1;
  const left = Math.hypot(tx - me[1], tz - me[2]);
  const mx = left < 0.6 ? 0 : dx / d, mz = left < 0.6 ? 0 : dz / d;
  c.send({ t: 'in', s: ++c.seq, mx, mz, y: extra.y ?? Math.atan2(dx, dz), f: extra.f || 0, k: 0 });
  return left;
}
async function until(fn, ms, step = 1000 / 30) { const t = Date.now(); while (Date.now() - t < ms) { if (fn()) return true; await sleep(step); } return false; }


const PORT = Number(process.env.TEAM_PORT || 8094);
// ---------- Tim ----------
{
  const A = client(PORT, { name: 'Satu', mode: 'create', gm: 'tdm' });
  await until(() => A.w && A.snap, 3000);
  if (A.w.gm !== 'tdm') fail('room tim tidak dibuat');
  const B = client(PORT, { name: 'Dua', mode: 'join', code: A.w.code });
  const C = client(PORT, { name: 'Tiga', mode: 'join', code: A.w.code, cls: 'ranger' });
  await until(() => B.w && C.w && A.roster.length >= 3, 3000);
  const team = (id) => A.roster.find((r) => r[0] === id)?.[7];
  const tA = team(A.id), tB = team(B.id), tC = team(C.id);
  if (tA === tB) fail(`dua manusia pertama tidak dipisah ke regu berbeda (${tA}, ${tB})`);
  const sizes = [0, 1].map((t) => A.roster.filter((r) => r[7] === t).length);
  if (sizes[0] !== sizes[1]) fail(`ukuran regu tidak sama: ${sizes}`);
  console.log(`OK regu: Satu=${tA}, Dua=${tB}, Tiga=${tC}; ukuran regu ${sizes.join(' vs ')} (dengan bot pengisi).`);
  const mate = tC === tA ? A : B, foe = tC === tA ? B : A;
  // C menembak kawan seregu dari dekat: tidak boleh ada damage
  const t0 = Date.now(), n0 = C.ev.length;
  const hold = (c) => setInterval(() => c.send({ t: 'in', s: ++c.seq, mx: 0, mz: 0, y: 0, f: 0, k: 0 }), 1000 / 30);
  const hm = hold(mate), hf = hold(foe);
  const shootAt = (target) => setInterval(() => {
    const me = C.me(), o = C.of(target.id); if (!me || !o) return;
    const d = Math.hypot(o[1] - me[1], o[2] - me[2]);
    if (d > 7 || !los(me[1], me[2], o[1], o[2])) steer(C, o[1], o[2], t0);
    else C.send({ t: 'in', s: ++C.seq, mx: 0, mz: 0, y: Math.atan2(o[1] - me[1], o[2] - me[2]), f: 1, k: 0 });
  }, 1000 / 30);
  let iv = shootAt(mate);
  const near = () => { const me = C.me(), o = C.of(mate.id); return me && o && Math.hypot(o[1] - me[1], o[2] - me[2]) <= 7 && los(me[1], me[2], o[1], o[2]); };
  if (!await until(near, 40000)) fail('Tiga tidak berhasil mendekati kawan seregu');
  const shots0 = C.ev.length;
  await sleep(2500);
  clearInterval(iv);
  const shots = C.ev.slice(shots0).filter((e) => e[0] === 's' && e[2] === C.id).length;
  const ff = C.ev.slice(n0).filter((e) => e[0] === 'd' && e[1] === mate.id && e[2] === C.id).length;
  if (!shots) fail('Tiga tidak menembak saat uji tembak kawan');
  if (ff) fail(`tembakan ke kawan seregu memberi damage (${ff} kali)`);
  console.log(`OK tanpa tembak kawan: ${shots} peluru ke kawan seregu, 0 damage.`);
  // C menembak lawan sampai tumbang: skor regu bertambah
  iv = shootAt(foe);
  const killed = await until(() => C.ev.some((e) => e[0] === 'k' && e[1] === C.id && e[2] === foe.id), 45000);
  clearInterval(iv); clearInterval(hm); clearInterval(hf);
  if (!killed) fail('Tiga tidak berhasil menumbangkan lawan');
  await sleep(300);
  // skor regu dikirim lewat pesan roster (ts)
  if (!C.ts || C.ts[tC] < 1) fail(`skor regu tidak bertambah: ${JSON.stringify(C.ts)}`);
  console.log(`OK lawan tumbang: skor regu ${C.ts.join(' - ')}.`);
  for (const c of [A, B, C]) c.ws.close();
}
// ---------- Lawan Bot ----------
{
  const A = client(PORT, { name: 'Kawan1', mode: 'create', gm: 'coop' });
  await until(() => A.w && A.roster.length >= 4, 3000);
  const B = client(PORT, { name: 'Kawan2', mode: 'join', code: A.w.code });
  await until(() => B.w && A.roster.length >= 6, 3000);
  const humans = A.roster.filter((r) => !r[5]), bots = A.roster.filter((r) => r[5]);
  if (humans.some((r) => r[7] !== 0)) fail('manusia tidak satu regu di Lawan Bot');
  if (bots.some((r) => r[7] !== 1)) fail('bot tidak di regu lawan');
  if (bots.length !== 4) fail(`jumlah bot seharusnya manusia + 2 = 4, dapat ${bots.length}`);
  console.log(`OK Lawan Bot: ${humans.length} manusia di regu Fajar, ${bots.length} bot di regu Senja.`);
  B.ws.close();
  await until(() => A.roster.length === 4, 3000);
  if (A.roster.filter((r) => r[5]).length !== 3) fail('bot tidak dikurangi saat teman keluar');
  console.log('OK teman keluar: bot berkurang menjadi 3.');
  A.ws.close();
}
console.log('SEMUA UJI TIM LULUS');
process.exit(0);
