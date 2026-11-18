// Uji statistik tetap, papan peringkat, dan jubah. Server diatur oleh uji ini sendiri.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import WebSocket from 'ws';
import { fileURLToPath } from 'node:url';
import { los } from '../shared/sim.js';
import { navStep } from './nav.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), 'arkana-stats-'));
const PORT = 8092;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let srv;
const fail = (m) => { console.error('GAGAL:', m); srv?.kill(); process.exit(1); };
async function startServer() {
  srv = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT), DATA_DIR: DATA, BOTS: '0', KILL_LIMIT: '1', END_TIME: '2' }, stdio: ['ignore', 'ignore', 'inherit'] });
  for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${PORT}/health`)).ok) return; } catch { /* belum siap */ } await sleep(100); }
  fail('server tidak menyala');
}
async function stopServer() { srv.kill('SIGTERM'); await new Promise((r) => srv.once('exit', r)); }
const api = async (p) => (await fetch(`http://localhost:${PORT}${p}`)).json();
function client(join) {
  const c = { ws: new WebSocket(`ws://localhost:${PORT}/ws`), id: 0, w: null, snap: null, roster: [], ev: [], seq: 0 };
  c.ws.on('open', () => c.ws.send(JSON.stringify({ t: 'join', mode: 'create', cls: 'ranger', ...join })));
  c.ws.on('message', (raw) => {
    const m = JSON.parse(raw);
    if (m.t === 'w') { c.w = m; c.id = m.id; } else if (m.t === 'r') c.roster = m.l; else if (m.t === 's') { c.snap = m; c.ev.push(...m.e); }
  });
  c.me = () => c.snap?.p.find((p) => p[0] === c.id); c.of = (id) => c.snap?.p.find((p) => p[0] === id);
  return c;
}
const until = async (fn, ms) => { const t = Date.now(); while (Date.now() - t < ms) { if (fn()) return true; await sleep(50); } return false; };
const PA = 'aaaaaaaaaaaaaaaaaaaa1', PB = 'bbbbbbbbbbbbbbbbbbbb2', PR = 'rrrrrrrrrrrrrrrrrrrr3';

// pemain PR sudah punya 10 kemenangan (jubah Emas Raja terbuka)
fs.writeFileSync(path.join(DATA, 'players.json'), JSON.stringify({ [PR]: { name: 'Juara', kills: 50, deaths: 5, wins: 10, matches: 12, dmg: 0, cls: {}, week: 'lama', wk: { kills: 9, wins: 9 } } }));
await startServer();

// 1. jubah: yang terkunci ditolak, yang terbuka diterima
{
  const L = client({ name: 'Baru', pid: 'cccccccccccccccccccc4', skin: 'raja' });
  const J = client({ name: 'Juara', pid: PR, skin: 'raja' });
  await until(() => L.roster.length && J.roster.length, 3000);
  const sk = (c) => c.roster.find((r) => r[0] === c.id)?.[8];
  if (sk(L) !== 'default') fail(`jubah terkunci diterima: ${sk(L)}`);
  if (sk(J) !== 'raja') fail(`jubah yang sudah terbuka ditolak: ${sk(J)}`);
  console.log('OK jubah: Emas Raja ditolak untuk pemain baru, diterima untuk pemain dengan 10 kemenangan.');
  L.ws.close(); J.ws.close();
}
// 2. satu ronde: A menumbangkan B (batas 1 kill), statistik tercatat
{
  const A = client({ name: 'Ayu', pid: PA });
  await until(() => A.w, 3000);
  const B = client({ name: 'Budi', pid: PB, mode: 'join', code: A.w.code, cls: 'mage' });
  await until(() => B.snap && A.of(B.id), 3000);
  const ivB = setInterval(() => B.ws.send(JSON.stringify({ t: 'in', s: ++B.seq, mx: 0, mz: 0, y: 0, f: 0, k: 0 })), 33);
  const nav = {};
  const ivA = setInterval(() => {
    const me = A.me(), o = A.of(B.id); if (!me || !o) return;
    const dx = o[1] - me[1], dz = o[2] - me[2], d = Math.hypot(dx, dz), clear = los(me[1], me[2], o[1], o[2]);
    const [mx, mz] = clear && d < 7 ? [0, 0] : navStep(nav, me[1], me[2], o[1], o[2]);
    A.ws.send(JSON.stringify({ t: 'in', s: ++A.seq, mx, mz, y: Math.atan2(dx, dz), f: clear ? 1 : 0, k: 0 }));
  }, 33);
  if (!await until(() => A.snap?.st === 1, 45000)) fail('ronde tidak selesai');
  clearInterval(ivA); clearInterval(ivB);
  await sleep(1800); // penyimpanan ditunda 1,5 dtk
  const a = (await api(`/api/stats?pid=${PA}`)).stats, b = (await api(`/api/stats?pid=${PB}`)).stats;
  if (!a || a.kills !== 1 || a.wins !== 1 || a.matches !== 1) fail(`statistik Ayu salah: ${JSON.stringify(a)}`);
  if (!b || b.deaths !== 1 || b.wins !== 0 || b.matches !== 1) fail(`statistik Budi salah: ${JSON.stringify(b)}`);
  console.log(`OK statistik: Ayu kill ${a.kills}, menang ${a.wins}; Budi gugur ${b.deaths}, menang ${b.wins}.`);
  A.ws.close(); B.ws.close();
}
// 3. papan peringkat mingguan: berisi nama, bukan id; data minggu lama tidak ikut
{
  const top = await api('/api/top');
  const raw = JSON.stringify(top);
  if (raw.includes(PA) || raw.includes(PR)) fail('papan peringkat membocorkan id pemain');
  if (!top.top.some((r) => r.name === 'Ayu' && r.kills === 1)) fail(`Ayu tidak ada di peringkat mingguan: ${raw}`);
  if (top.top.some((r) => r.name === 'Juara')) fail('angka minggu lama ikut di peringkat minggu ini');
  if (!top.ever.some((r) => r.name === 'Juara' && r.wins === 10)) fail('peringkat sepanjang masa tidak memuat Juara');
  console.log(`OK peringkat ${top.week}: Ayu tercatat, id tidak bocor, minggu lama tidak terbawa.`);
}
// 4. tetap ada setelah server dimatikan dan dinyalakan lagi
await stopServer();
await startServer();
{
  const a = (await api(`/api/stats?pid=${PA}`)).stats;
  if (!a || a.wins !== 1) fail('statistik hilang setelah server dinyalakan ulang');
  console.log('OK statistik bertahan setelah server dinyalakan ulang.');
}
await stopServer();
fs.rmSync(DATA, { recursive: true, force: true });
console.log('SEMUA UJI STATISTIK LULUS');
process.exit(0);
