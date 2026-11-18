// Uji integrasi: dua klien tanpa grafis bergabung; A menembak B sampai B gugur.
// Jalankan server dulu (PORT=8099 node server/server.js), lalu: node test/net.test.js
import WebSocket from 'ws';
import { los } from '../shared/sim.js';

const URL = process.env.WS_URL || 'ws://localhost:8099/ws';
function client(name, cls) {
  const c = { ws: new WebSocket(URL), id: 0, snap: null, roster: [], dmgTo: {}, kills: [], seq: 0 };
  c.ws.on('open', () => c.ws.send(JSON.stringify({ t: 'join', name, cls })));
  c.ws.on('message', (raw) => {
    const m = JSON.parse(raw);
    if (m.t === 'w') c.id = m.id;
    else if (m.t === 'r') c.roster = m.l;
    else if (m.t === 's') {
      c.snap = m;
      for (const e of m.e) {
        if (e[0] === 'd') c.dmgTo[e[1]] = (c.dmgTo[e[1]] || 0) + e[3];
        if (e[0] === 'k') c.kills.push([e[1], e[2]]);
      }
    }
  });
  return c;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fail = (msg) => { console.error('GAGAL:', msg); process.exit(1); };

const a = client('UjiA', 'ranger');
const b = client('UjiB', 'mage');
await sleep(800);
if (!a.id || !b.id) fail('klien tidak menerima id');
if (a.roster.length !== 6) fail(`roster seharusnya 6 (2 manusia + 4 bot), dapat ${a.roster.length}`);
console.log(`OK gabung: A=${a.id} B=${b.id}, roster ${a.roster.length} pemain`);

const pos = (c, id) => c.snap.p.find((p) => p[0] === id);
let ackOk = false, moved = false;
const start = pos(a, a.id).slice(1, 3);
const t0 = Date.now();
const timer = setInterval(() => {
  const me = pos(a, a.id), tg = pos(a, b.id);
  if (!me || !tg) return;
  const dx = tg[1] - me[1], dz = tg[2] - me[2], d = Math.hypot(dx, dz);
  const clear = los(me[1], me[2], tg[1], tg[2]);
  // dekati B; bila terhalang tembok, menyamping
  let mx = d > 6 ? dx / d : 0, mz = d > 6 ? dz / d : 0;
  if (!clear) { const s = Math.floor((Date.now() - t0) / 2500) % 2 ? 1 : -1; mx = -dz / d * s; mz = dx / d * s; }
  a.ws.send(JSON.stringify({ t: 'in', s: ++a.seq, mx, mz, y: Math.atan2(dx, dz), f: clear ? 1 : 0, k: 0 }));
  b.ws.send(JSON.stringify({ t: 'in', s: ++b.seq, mx: 0, mz: 0, y: 0, f: 0, k: 0 }));
  if (a.snap.a > 0) ackOk = true;
  if (Math.hypot(me[1] - start[0], me[2] - start[1]) > 3) moved = true;
}, 1000 / 30);

let killed = false;
while (Date.now() - t0 < 40000) {
  await sleep(200);
  if (a.kills.some(([k, v]) => k === a.id && v === b.id)) { killed = true; break; }
}
clearInterval(timer);
if (!ackOk) fail('server tidak meng-ack input');
if (!moved) fail('pemain A tidak bergerak');
console.log(`OK gerak & ack; damage A→B tercatat server: ${a.dmgTo[b.id] || 0}`);
if (!(a.dmgTo[b.id] > 0)) fail('tidak ada damage tercatat');
if (!killed) fail(`B tidak gugur di tangan A dalam 40 detik; B gugur oleh: ${JSON.stringify(a.kills.filter(([, v]) => v === b.id))}, A=${a.id}`);
const row = a.roster.find((r) => r[0] === a.id);
if (!row || row[3] < 1) fail('skor kill A tidak bertambah di roster');
// server harus menolak input ngawur tanpa crash
a.ws.send('bukan json'); a.ws.send(JSON.stringify({ t: 'in', s: 'x', mx: 1e99, mz: null, y: NaN }));
await sleep(300);
if (a.ws.readyState !== 1) fail('koneksi putus setelah input tidak valid');
console.log(`OK kill: A membunuh B, skor A = ${row[3]} kill. Input tidak valid ditoleransi.`);
if (process.env.EXPECT_END) {
  if (a.snap.st !== 1) fail('ronde seharusnya berakhir setelah batas kill tercapai');
  await sleep(2600);
  if (a.ws.readyState !== 1) fail('server mati/putus saat ronde berakhir');
  if (a.snap.st !== 0) fail('ronde baru tidak dimulai');
  const r2 = a.roster.find((r) => r[0] === a.id);
  if (r2[3] !== 0) fail('skor tidak direset di ronde baru');
  console.log('OK akhir ronde: server tetap hidup, ronde baru dimulai, skor direset.');
}
a.ws.close(); b.ws.close();
await sleep(200);
console.log('SEMUA UJI LULUS');
process.exit(0);
