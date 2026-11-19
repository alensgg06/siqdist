// Uji D2: Haji Toriq (Doa), isyarat cepat, tong meledak, mode akhir pekan, dan peringkat gelombang.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import WebSocket from 'ws';
import { fileURLToPath } from 'node:url';
import { setMap, los } from '../shared/sim.js';
import { MAPS } from '../shared/config.js';
import { navStep } from './nav.js';
import { Stats } from '../server/stats.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), 'arkana-d2-'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const srvs = [];
const fail = (m) => { console.error('GAGAL:', m); for (const p of srvs) p.kill(); process.exit(1); };
async function server(port, env) {
  const p = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...process.env, ARKANA_AUTH: 'off', PORT: String(port), BOTS: '0', DATA_DIR: `${DATA}/${port}`, EVENT_FIRST: '999', ...env }, stdio: ['ignore', 'ignore', 'inherit'] });
  srvs.push(p);
  for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${port}/health`)).ok) return; } catch { /* belum */ } await sleep(100); }
  fail('server tidak menyala');
}
const until = async (fn, ms) => { const t = Date.now(); while (Date.now() - t < ms) { if (fn()) return true; await sleep(40); } return false; };
function client(port, join) {
  const c = { ws: new WebSocket(`ws://localhost:${port}/ws`), id: 0, w: null, snap: null, roster: [], ev: [], seq: 0, inp: { mx: 0, mz: 0, y: 0, f: 0, k: 0 } };
  c.ws.on('open', () => c.ws.send(JSON.stringify({ t: 'join', cls: 'ranger', ...join })));
  c.ws.on('message', (raw) => { const m = JSON.parse(raw); if (m.t === 'w') { c.w = m; c.id = m.id; } else if (m.t === 'r') c.roster = m.l; else if (m.t === 's') { c.snap = m; c.ev.push(...m.e); } });
  c.me = () => c.snap?.p.find((p) => p[0] === c.id);
  c.iv = setInterval(() => { if (c.ws.readyState === 1) { c.ws.send(JSON.stringify({ t: 'in', s: ++c.seq, ...c.inp })); c.inp.k = 0; } }, 33);
  return c;
}
await server(8085, { MUTATOR: 'none', PVE_BREAK: '999', PVE_ALLIES: '0' });
await server(8084, { MUTATOR: 'giant' });
await server(8083, { MUTATOR: 'mage' });

// ---------- tong meledak + Doa Pendeta (room Bertahan di Pelabuhan, tanpa gelombang) ----------
setMap('harbor');
const A = client(8085, { name: 'Pendeta', cls: 'priest', mode: 'create', gm: 'pve', map: 'harbor' });
await until(() => A.w && A.me(), 3000);
if (A.w.cls !== 'priest') fail('kelas Haji Toriq tidak diterima');
const B = client(8085, { name: 'Rekan', mode: 'join', code: A.w.code });
await until(() => B.w, 3000);
const [bx, bz] = MAPS.harbor.barrels[0], nav = {};
// berjalan sampai ~3,5 langkah dari tong dengan garis tembak, lalu menembaknya
const ok = await until(() => {
  const m = A.me(), d = Math.hypot(bx - m[1], bz - m[2]);
  if (d < 3.8 && los(m[1], m[2], bx, bz)) { A.inp = { mx: 0, mz: 0, y: Math.atan2(bx - m[1], bz - m[2]), f: 1, k: 0 }; return A.ev.some((e) => e[0] === 'X' && e[1] === 0); }
  const [mx, mz] = navStep(nav, m[1], m[2], bx, bz); A.inp = { mx, mz, y: 0, f: 0, k: 0 }; return false;
}, 40000);
if (!ok) fail('tong tidak meledak saat ditembak');
A.inp.f = 0;
await sleep(120);
const hurt = A.me()[4];
if (!(hurt < 95)) fail(`ledakan tong tidak melukai penembak di dekatnya: HP ${hurt}`);
if (A.snap.bm & 1) fail('tong masih ditandai ada setelah meledak');
if (B.ev.some((e) => e[0] === 'd' && e[1] === B.id)) fail('ledakan tong melukai rekan seregu');
console.log(`OK tong meledak: HP penembak 95 -> ${hurt}, tong hilang dari peta.`);
A.inp.k = 1;
if (!await until(() => A.ev.some((e) => e[0] === 'H' && e[1] === A.id), 2000)) fail('Doa tidak terpicu');
await sleep(150);
const healed = A.me()[4];
if (healed !== Math.min(95, hurt + 35)) fail(`Doa tidak memulihkan dengan benar: ${hurt} -> ${healed}`);
console.log(`OK Doa Pendeta: HP ${hurt} -> ${healed}.`);

// ---------- isyarat cepat ----------
A.ws.send(JSON.stringify({ t: 'ping', k: 1 })); A.ws.send(JSON.stringify({ t: 'ping', k: 2 }));
if (!await until(() => B.ev.some((e) => e[0] === 'q' && e[1] === A.id && e[2] === 1), 2000)) fail('isyarat tidak sampai ke rekan');
await sleep(300);
if (B.ev.filter((e) => e[0] === 'q').length !== 1) fail('isyarat beruntun tidak dibatasi');
console.log('OK isyarat cepat: sampai ke rekan, yang beruntun dibatasi.');
A.ws.close(); B.ws.close();

// ---------- mode akhir pekan ----------
const Gt = client(8084, { name: 'Besar', mode: 'public' });
await until(() => Gt.w && Gt.me(), 3000);
if (Gt.w.mut !== 'giant' || Gt.me()[5] !== 160) fail(`mode Raksasa: mut=${Gt.w.mut}, HP maks ${Gt.me()[5]} (seharusnya 160)`);
const Gp = client(8084, { name: 'Privat', mode: 'create' });
await until(() => Gp.w && Gp.me(), 3000);
if (Gp.w.mut || Gp.me()[5] !== 100) fail('mode akhir pekan ikut berlaku di room privat');
const Mg = client(8083, { name: 'Sihir', cls: 'guardian', mode: 'public' });
await until(() => Mg.w && Mg.roster.length, 3000);
if (Mg.w.cls !== 'mage' || Mg.roster.some((r) => r[2] !== 'mage')) fail('mode Hanya Penyihir tidak memaksa kelas');
console.log('OK mode akhir pekan: Raksasa (HP 160) dan Hanya Penyihir di room publik; room privat tidak terpengaruh.');
for (const c of [Gt, Gp, Mg]) c.ws.close();

// ---------- peringkat gelombang ----------
const st = new Stats(`${DATA}/unit`);
st.wave('aaaaaaaaaaaaaaaaaaaa1', 'Ayu', 6); st.wave('aaaaaaaaaaaaaaaaaaaa1', 'Ayu', 4); st.wave('bbbbbbbbbbbbbbbbbbbb1', 'Budi', 9); st.bump('aaaaaaaaaaaaaaaaaaaa1', 'Ayu', 'revives');
const top = st.top();
if (top.waves[0].name !== 'Budi' || top.waves[1].wave !== 6 || st.get('aaaaaaaaaaaaaaaaaaaa1').revives !== 1) fail(`peringkat gelombang salah: ${JSON.stringify(top.waves)}`);
clearTimeout(st.timer);
console.log('OK peringkat gelombang mingguan: gelombang terbaik per pemain, urut menurun.');
for (const p of srvs) p.kill('SIGTERM');
await Promise.all(srvs.map((p) => new Promise((r) => p.once('exit', r))));
fs.rmSync(DATA, { recursive: true, force: true });
console.log('SEMUA UJI D2 LULUS');
process.exit(0);
