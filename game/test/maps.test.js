// Uji peta: tiap room memakai petanya sendiri walau berjalan bersamaan, dan room "bergantian" berganti peta tiap ronde.
import { spawn } from 'node:child_process';
import path from 'node:path';
import WebSocket from 'ws';
import { fileURLToPath } from 'node:url';
import { setMap } from '../shared/sim.js';
import { navStep } from './nav.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const srvs = [];
const fail = (m) => { console.error('GAGAL:', m); for (const p of srvs) p.kill(); process.exit(1); };
// dua server: ronde normal untuk uji tabrakan, ronde 6 detik untuk uji rotasi peta
async function server(port, env) {
  const p = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...process.env, PORT: String(port), BOTS: '0', DATA_DIR: '/tmp/arkana-maps-test', ...env }, stdio: 'ignore' });
  srvs.push(p);
  for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${port}/health`)).ok) return; } catch { /* belum */ } await sleep(100); }
  fail('server tidak menyala');
}
await server(8091, {});
await server(8090, { MATCH_TIME: '6', END_TIME: '1' });
let PORT = 8091;
function client(join) {
  const c = { ws: new WebSocket(`ws://localhost:${PORT}/ws`), w: null, snap: null, maps: new Set(), seq: 0 };
  c.ws.on('open', () => c.ws.send(JSON.stringify({ t: 'join', name: join.name, mode: 'create', cls: 'ranger', map: join.map })));
  c.ws.on('message', (raw) => { const m = JSON.parse(raw); if (m.t === 'w') c.w = m; else if (m.t === 's') { c.snap = m; c.maps.add(m.mp); } });
  c.me = () => c.snap?.p.find((p) => p[0] === c.w?.id);
  return c;
}
const until = async (fn, ms) => { const t = Date.now(); while (Date.now() - t < ms) { if (fn()) return true; await sleep(50); } return false; };

// Titik (13,13) adalah pilar di Reruntuhan tetapi lantai terbuka di Pelabuhan.
const H = client({ name: 'Pelaut', map: 'harbor' }), R = client({ name: 'Peziarah', map: 'ruins' });
await until(() => H.snap && R.snap, 3000);
if (H.w.map !== 'harbor' || R.w.map !== 'ruins') fail(`peta room salah: ${H.w.map}, ${R.w.map}`);
const navH = {}, navR = {};
// Pelabuhan: berjalan ke (13,13). Reruntuhan: (13,13) ada di dalam pilar, jadi berjalan ke sisinya (13; 10,5) dulu,
// lalu didorong lurus ke pusat pilar; tabrakan harus menahannya di jarak 2,0 (jari-jari pilar + pemain).
const drive = (c, nav, mapId) => setInterval(() => {
  const me = c.me(); if (!me) return;
  setMap(mapId);
  let mx, mz;
  if (mapId === 'ruins' && (nav.push || Math.hypot(me[1] - 13, me[2] - 10.5) < 0.8)) { nav.push = true; const dx = 13 - me[1], dz = 13 - me[2], d = Math.hypot(dx, dz) || 1; mx = dx / d; mz = dz / d; }
  else [mx, mz] = navStep(nav, me[1], me[2], 13, mapId === 'ruins' ? 10.5 : 13);
  c.ws.send(JSON.stringify({ t: 'in', s: ++c.seq, mx, mz, y: 0, f: 0, k: 0 }));
}, 33);
const ivH = drive(H, navH, 'harbor'), ivR = drive(R, navR, 'ruins');
const dist = (c) => { const m = c.me(); return m ? Math.hypot(m[1] - 13, m[2] - 13) : 99; };
// keduanya diberi waktu cukup untuk berjalan dari spawn terjauh; jarak terdekat Reruntuhan dipantau sepanjang uji
let minR = 99; const trail = [];
const tr = setInterval(() => { const m = R.me(); if (m) trail.push(`${m[1].toFixed(1)},${m[2].toFixed(1)}${navR.push ? '*' : ''}`); }, 1000);
const watch = setInterval(() => { minR = Math.min(minR, dist(R)); }, 30);
const reached = await until(() => dist(H) < 0.8, 20000);
const approached = await until(() => navR.push && dist(R) < 2.6, 15000); // terbukti sudah menekan sisi pilar
await sleep(1500);
clearInterval(watch); clearInterval(ivH); clearInterval(ivR);
if (!reached) fail(`pemain di Pelabuhan tidak bisa berdiri di (13,13): jarak ${dist(H).toFixed(2)}`);
clearInterval(tr);
if (!approached) fail(`pemain di Reruntuhan tidak sampai ke sisi pilar (jarak ${dist(R).toFixed(2)}); uji tidak sah; jejak ${trail.join(' ')}`);
if (minR < 1.9) fail(`pemain di Reruntuhan menembus pilar: jarak ${minR.toFixed(2)}`);
console.log(`OK peta per room: di Pelabuhan sampai ke (13,13), di Reruntuhan tertahan pilar (jarak terdekat ${minR.toFixed(2)}).`);
H.ws.close(); R.ws.close();

// Room "bergantian": ronde 6 detik, peta harus berganti setelah ronde berakhir.
PORT = 8090;
const Z = client({ name: 'Pengembara', map: 'rotate' });
if (!await until(() => Z.maps.size >= 2, 15000)) fail(`peta tidak berganti antar ronde: ${[...Z.maps]}`);
const fixed = client({ name: 'Setia', map: 'harbor' });
await until(() => fixed.snap, 2000);
await sleep(9000);
if (fixed.maps.size !== 1) fail(`room dengan peta tetap ikut berganti: ${[...fixed.maps]}`);
console.log(`OK rotasi: room bergantian memakai ${[...Z.maps].join(' lalu ')}; room berpeta tetap tidak berganti.`);
Z.ws.close(); fixed.ws.close();
for (const p of srvs) p.kill();
console.log('SEMUA UJI PETA LULUS');
process.exit(0);
