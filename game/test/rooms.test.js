// Uji room privat, room latihan, laporan klien, dan catatan pertandingan.
// Server: PORT=8097 KILL_LIMIT=1 END_TIME=2 DATA_DIR=/tmp/x node server/server.js
import fs from 'node:fs';
import path from 'node:path';
import WebSocket from 'ws';
import { los } from '../shared/sim.js';

const URL = process.env.WS_URL || 'ws://localhost:8097/ws';
const DATA = process.env.DATA_DIR;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fail = (m) => { console.error('GAGAL:', m); process.exit(1); };
function client(join) {
  const c = { ws: new WebSocket(URL), id: 0, w: null, err: null, snap: null, roster: [], shots: [], kills: [], seq: 0, closed: false };
  c.ws.on('open', () => c.ws.send(JSON.stringify({ t: 'join', name: join.name, cls: join.cls || 'ranger', mode: join.mode, code: join.code })));
  c.ws.on('close', () => { c.closed = true; });
  c.ws.on('message', (raw) => {
    const m = JSON.parse(raw);
    if (m.t === 'w') { c.w = m; c.id = m.id; } else if (m.t === 'e') c.err = m.m;
    else if (m.t === 'r') c.roster = m.l;
    else if (m.t === 's') { c.snap = m; for (const e of m.e) { if (e[0] === 's') c.shots.push(e[2]); if (e[0] === 'k') c.kills.push([e[1], e[2]]); } }
  });
  return c;
}

// 1. room privat
const host = client({ name: 'Tuan', mode: 'create' });
await sleep(500);
const code = host.w?.code;
if (!/^[A-HJ-NP-Z]{4}$/.test(code || '')) fail(`kode room tidak valid: ${code}`);
const guest = client({ name: 'Tamu', mode: 'join', code: code.toLowerCase() });
const stranger = client({ name: 'Asing', mode: 'public' });
await sleep(600);
if (!guest.w || guest.w.code !== code) fail('tamu tidak masuk ke room privat lewat kode (huruf kecil)');
const names = host.roster.map((r) => r[1]);
if (!names.includes('Tamu')) fail('tamu tidak terlihat di roster tuan rumah');
if (names.includes('Asing')) fail('pemain publik masuk ke room privat');
if (!stranger.w || stranger.w.code) fail('pemain publik tidak mendapat room publik');
console.log(`OK room privat ${code}: tamu masuk, pemain publik terpisah.`);

const bad = client({ name: 'Salah', mode: 'join', code: 'QQQQ' });
await sleep(500);
if (!bad.err || !bad.closed) fail('kode salah tidak ditolak');
console.log(`OK kode salah ditolak: "${bad.err}"`);

// 2. room latihan: 2 bot boneka yang tidak menembak
const pr = client({ name: 'Murid', mode: 'practice', cls: 'ranger' });
await sleep(600);
if (!pr.w?.practice) fail('room latihan tidak dibuat');
if (pr.roster.length !== 3) fail(`room latihan seharusnya 1 pemain + 2 bot, dapat ${pr.roster.length}`);
if (pr.roster.some((r) => r[1] === 'Tuan' || r[1] === 'Asing')) fail('room latihan tercampur pemain lain');
const t0 = Date.now();
const tick = setInterval(() => {
  const me = pr.snap?.p.find((p) => p[0] === pr.id);
  if (!me) return;
  let best = null, bd = 1e9;
  for (const p of pr.snap.p) { if (p[0] === pr.id || (p[7] & 1)) continue; const d = Math.hypot(p[1] - me[1], p[2] - me[2]); if (d < bd) { bd = d; best = p; } }
  if (!best) return;
  const dx = best[1] - me[1], dz = best[2] - me[2], d = Math.hypot(dx, dz), clear = los(me[1], me[2], best[1], best[2]);
  let mx = d > 6 ? dx / d : 0, mz = d > 6 ? dz / d : 0;
  if (!clear) { const s = Math.floor((Date.now() - t0) / 2500) % 2 ? 1 : -1; mx = -dz / d * s; mz = dx / d * s; }
  pr.ws.send(JSON.stringify({ t: 'in', s: ++pr.seq, mx, mz, y: Math.atan2(dx, dz), f: clear ? 1 : 0, k: 0 }));
}, 1000 / 30);
// laporan klien (ping/fps) diterima tanpa memutus koneksi
for (const c of [host, guest]) c.ws.send(JSON.stringify({ t: 'st', p: 42, f: 58 }));
pr.ws.send(JSON.stringify({ t: 'st', p: 'x', f: -1 }));
while (Date.now() - t0 < 40000 && !pr.kills.some(([k]) => k === pr.id)) await sleep(200);
clearInterval(tick);
const botShots = pr.shots.filter((id) => id !== pr.id).length;
if (botShots) fail(`bot boneka menembak ${botShots} kali`);
if (!pr.kills.some(([k]) => k === pr.id)) fail('tidak berhasil menumbangkan bot boneka dalam 40 detik');
if (pr.closed) fail('koneksi latihan putus');
console.log('OK room latihan: 2 bot boneka, tidak menembak, bisa ditumbangkan.');
if (DATA && fs.existsSync(path.join(DATA, 'matches.jsonl'))) {
  const lines = fs.readFileSync(path.join(DATA, 'matches.jsonl'), 'utf8').trim().split('\n');
  if (lines.some((l) => JSON.parse(l).players.some((p) => p.name === 'Murid'))) fail('ronde latihan ikut tercatat');
}

// 3. catatan pertandingan: tamu menumbangkan seseorang di room privat (KILL_LIMIT=1)
if (DATA) {
  const t1 = Date.now();
  const iv = setInterval(() => {
    const me = guest.snap?.p.find((p) => p[0] === guest.id);
    if (!me) return;
    let best = null, bd = 1e9;
    for (const p of guest.snap.p) { if (p[0] === guest.id || (p[7] & 1)) continue; const d = Math.hypot(p[1] - me[1], p[2] - me[2]); if (d < bd) { bd = d; best = p; } }
    if (!best) return;
    const dx = best[1] - me[1], dz = best[2] - me[2], d = Math.hypot(dx, dz), clear = los(me[1], me[2], best[1], best[2]);
    let mx = d > 6 ? dx / d : 0, mz = d > 6 ? dz / d : 0;
    if (!clear) { const s = Math.floor((Date.now() - t1) / 2500) % 2 ? 1 : -1; mx = -dz / d * s; mz = dx / d * s; }
    guest.ws.send(JSON.stringify({ t: 'in', s: ++guest.seq, mx, mz, y: Math.atan2(dx, dz), f: clear ? 1 : 0, k: 0 }));
  }, 1000 / 30);
  const file = path.join(DATA, 'matches.jsonl');
  const has = () => fs.existsSync(file) && fs.readFileSync(file, 'utf8').includes(`"room":"privat"`);
  while (Date.now() - t1 < 45000 && !has()) await sleep(300);
  clearInterval(iv);
  if (!has()) fail('ronde privat tidak tercatat di matches.jsonl');
  const rec = fs.readFileSync(file, 'utf8').trim().split('\n').map((l) => JSON.parse(l)).find((r) => r.room === 'privat');
  const tamu = rec.players.find((p) => p.name === 'Tamu');
  if (!tamu || tamu.ping !== 42 || tamu.fps !== 58) fail(`ping/fps tamu tidak tercatat benar: ${JSON.stringify(tamu)}`);
  if (!(rec.players.reduce((s, p) => s + p.dmg, 0) > 0)) fail('damage tidak tercatat');
  console.log(`OK catatan pertandingan: pemenang ${rec.winner}, ${rec.players.length} pemain, ping/fps tamu 42/58.`);
}
for (const c of [host, guest, stranger, pr]) c.ws.close();
await sleep(200);
console.log('SEMUA UJI ROOM LULUS');
process.exit(0);
