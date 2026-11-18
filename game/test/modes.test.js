// Uji Paket B: Rebut Altar, rune, dan kompensasi lag (perbandingan A/B).
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
    if (m.t === 'w') { c.w = m; c.id = m.id; } else if (m.t === 'r') c.roster = m.l;
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

// ---------- 1. Rebut Altar ----------
{
  const A = client(8095, { name: 'Raja', mode: 'create', gm: 'koth' });
  await until(() => A.w && A.snap, 3000);
  if (A.w?.gm !== 'koth') fail('room tidak dibuat dengan mode Rebut Altar');
  const t0 = Date.now();
  const tgt = () => { const m = A.me(); const a = Math.atan2(m[1], m[2]); return [Math.sin(a) * 5, Math.cos(a) * 5]; };
  const T = tgt();
  const iv = setInterval(() => steer(A, T[0], T[1], t0), 1000 / 30);
  if (!await until(() => A.snap?.z === A.id, 30000)) fail('pemain sendirian di lingkaran altar tidak tercatat menguasai');
  await sleep(2300);
  const pts1 = A.roster.find((r) => r[0] === A.id)?.[6];
  if (!(pts1 >= 1)) fail(`poin altar tidak bertambah: ${pts1}`);
  console.log(`OK altar dikuasai sendirian: poin ${pts1} setelah ~2 dtk.`);

  const B = client(8095, { name: 'Penantang', mode: 'join', code: A.w.code });
  await until(() => B.snap, 3000);
  const ivB = setInterval(() => steer(B, -T[0], -T[1], t0), 1000 / 30);
  if (!await until(() => A.snap?.z === -1, 30000)) { const b = B.me(); fail(`altar tidak berstatus diperebutkan; jarak penantang ke pusat ${b && Math.hypot(b[1], b[2]).toFixed(1)}`); }
  const pc = A.roster.find((r) => r[0] === A.id)[6];
  await sleep(1600);
  if (A.roster.find((r) => r[0] === A.id)[6] !== pc) fail('poin tetap bertambah saat altar diperebutkan');
  console.log('OK altar diperebutkan: poin berhenti.');
  clearInterval(ivB); B.ws.close();
  if (!await until(() => A.snap?.st === 1, 15000)) fail('ronde tidak berakhir saat batas poin tercapai');
  clearInterval(iv);
  if (DATA) {
    await sleep(200);
    const rec = fs.readFileSync(path.join(DATA, 'matches.jsonl'), 'utf8').trim().split('\n').map((l) => JSON.parse(l)).pop();
    if (rec.mode !== 'koth' || rec.winner !== 'Raja') fail(`catatan ronde altar salah: ${rec.mode} ${rec.winner}`);
  }
  console.log('OK batas poin tercapai: ronde berakhir, pemenang dicatat dengan mode koth.');
  A.ws.close();
}

// ---------- 2. Rune ----------
{
  const A = client(8094, { name: 'Pemburu', mode: 'create', gm: 'dm' });
  await until(() => A.w && A.snap, 3000);
  const B = client(8094, { name: 'Sasaran', mode: 'join', code: A.w.code, cls: 'guardian' });
  await until(() => B.snap, 3000);
  const me = A.me();
  const ri = RUNES.map((r, i) => [i, Math.hypot(r.x - me[1], r.z - me[2])]).filter(([i]) => RUNES[i].type === 'dmg').sort((a, b) => a[1] - b[1])[0][0];
  const R = RUNES[ri], t0 = Date.now();
  let iv = setInterval(() => steer(A, R.x, R.z, t0), 1000 / 30);
  const ivB = setInterval(() => B.send({ t: 'in', s: ++B.seq, mx: 0, mz: 0, y: 0, f: 0, k: 0 }), 1000 / 30);
  if (!await until(() => A.ev.some((e) => e[0] === 'u' && e[1] === ri && e[2] === A.id), 40000)) fail('rune amarah tidak terambil');
  await sleep(100);
  if (!(A.me()[7] & 16) || !(A.snap.me[8] > 8)) fail('efek rune amarah tidak aktif');
  if (A.snap.u & (1 << ri)) fail('rune masih tampil tersedia setelah diambil');
  console.log(`OK rune amarah terambil: flag aktif, sisa ${A.snap.me[8]} dtk, rune hilang dari peta.`);
  clearInterval(iv);
  // B mendekat, A menembak: damage per peluru harus ~1,5x (9 -> 14)
  const t1 = Date.now(), n0 = A.ev.length;
  clearInterval(ivB);
  const ivB2 = setInterval(() => { const a = A.me(); if (a) steer(B, a[1], a[2], t1); }, 1000 / 30);
  // keduanya saling mendekat; A menembak begitu ada garis tembak
  iv = setInterval(() => { const a = A.me(), b = A.of(B.id); if (!a || !b) return; const ok = los(a[1], a[2], b[1], b[2]); if (ok) A.send({ t: 'in', s: ++A.seq, mx: 0, mz: 0, y: Math.atan2(b[1] - a[1], b[2] - a[2]), f: 1, k: 0 }); else steer(A, b[1], b[2], t1); }, 1000 / 30);
  const dmgs = () => A.ev.slice(n0).filter((e) => e[0] === 'd' && e[1] === B.id && e[2] === A.id).map((e) => e[3]);
  await until(() => dmgs().length >= 3 || A.snap.me[8] < 1.5, 9000);
  clearInterval(iv); clearInterval(ivB2);
  const ds = dmgs().filter((v, i) => i < 3);
  if (!ds.length) { const x = A.me(), y = A.of(B.id); fail(`tidak ada tembakan yang mengenai selama efek rune; jarak ${Math.round(Math.hypot(x[1] - y[1], x[2] - y[2]))}, garis tembak ${los(x[1], x[2], y[1], y[2])}`); }
  if (ds.some((v) => v < 13)) fail(`damage tidak berlipat: ${ds}`);
  console.log(`OK damage dengan rune amarah: ${ds.join(', ')} (normal 9).`);
  A.ws.close(); B.ws.close();
}

// ---------- 3. Kompensasi lag: perbandingan dengan dan tanpa ----------
async function hitRate(port, label) {
  const LAT = 150;
  const A = client(port, { name: 'Penembak', mode: 'create', gm: 'dm' }, LAT);
  await until(() => A.w && A.snap, 4000);
  const B = client(port, { name: 'Pelari', mode: 'join', code: A.w.code, cls: 'guardian' });
  await until(() => B.snap && B.me() && B.of(A.id), 4000);
  if (!B.of(A.id)) fail(`${label}: pemain tidak bertemu di room`);
  // tahap 1: B mendekat sampai ~9 langkah; A diam. Lalu B bergerak menyamping bolak-balik.
  const t0 = Date.now();
  let phase = 1, flipT = 0, dir = 1;
  const ivB = setInterval(() => {
    const a = B.of(A.id), b = B.me(); if (!a || !b) return;
    const dx = a[1] - b[1], dz = a[2] - b[2], d = Math.hypot(dx, dz) || 1;
    if (phase === 1) { if (d < 9 && los(a[1], a[2], b[1], b[2])) phase = 2; else return steer(B, a[1], a[2], t0); }
    if (Date.now() > flipT) { flipT = Date.now() + 550 + Math.random() * 300; dir = -dir; }
    B.send({ t: 'in', s: ++B.seq, mx: (-dz / d) * dir, mz: (dx / d) * dir, y: 0, f: 0, k: 0 });
  }, 1000 / 30);
  await until(() => phase === 2, 15000);
  await sleep(1800); // biarkan rtt terukur dan perlindungan spawn habis
  const shotIds = new Set();
  const ivA = setInterval(() => {
    const me = A.me(), seen = A.seen(B.id); if (!me || !seen) return;
    A.send({ t: 'in', s: ++A.seq, mx: 0, mz: 0, y: Math.atan2(seen[0] - me[1], seen[1] - me[2]), f: 1, k: 0, vt: Math.round(seen[2] * 10) / 10 });
  }, 1000 / 30);
  const n0 = B.ev.length;
  const stat = () => {
    let shots = 0, hits = 0, resolved = 0;
    for (const e of B.ev.slice(n0)) {
      if (e[0] === 's' && e[2] === A.id) { shotIds.add(e[1]); shots++; }
      if (e[0] === 'h' && shotIds.has(e[1])) { resolved++; if (e[4] === B.id) hits++; }
    }
    return { shots, hits, resolved };
  };
  await until(() => stat().resolved >= 30 || (B.me()?.[7] & 1), 15000);
  clearInterval(ivA); clearInterval(ivB);
  const s = stat();
  A.ws.close(); B.ws.close();
  const rate = s.resolved ? s.hits / s.resolved : 0;
  console.log(`   ${label}: ${s.hits}/${s.resolved} peluru mengenai (${Math.round(rate * 100)}%), latensi buatan ${LAT} ms satu arah`);
  return rate;
}
const off = await hitRate(8093, 'tanpa kompensasi');
const on = await hitRate(8094, 'dengan kompensasi');
if (!(on >= 0.5)) fail(`tingkat kena dengan kompensasi terlalu rendah: ${on}`);
if (!(on - off >= 0.2)) fail(`kompensasi lag tidak memperbaiki tingkat kena cukup jelas (${off} -> ${on})`);
console.log('OK kompensasi lag menaikkan tingkat kena pada lawan yang bergerak menyamping.');
console.log('SEMUA UJI MODE LULUS');
process.exit(0);
