// Uji C2: kejadian di tengah ronde, jurus pamungkas, buronan, dan tantangan harian. Server diatur sendiri.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import WebSocket from 'ws';
import { fileURLToPath } from 'node:url';
import { los } from '../shared/sim.js';
import { navStep } from './nav.js';
import { Stats } from '../server/stats.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), 'arkana-c2-'));
const PORT = 8088;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let srv;
const fail = (m) => { console.error('GAGAL:', m); srv?.kill(); process.exit(1); };
srv = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT), DATA_DIR: DATA, BOTS: '0', EVENT_FIRST: '3', KILL_LIMIT: '50' }, stdio: ['ignore', 'ignore', 'inherit'] });
for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${PORT}/health`)).ok) break; } catch { /* belum */ } await sleep(100); }
const until = async (fn, ms) => { const t = Date.now(); while (Date.now() - t < ms) { if (fn()) return true; await sleep(50); } return false; };
function client(join) {
  const c = { ws: new WebSocket(`ws://localhost:${PORT}/ws`), id: 0, w: null, snap: null, ev: [], seq: 0, nav: {}, ult: 0 };
  c.ws.on('open', () => c.ws.send(JSON.stringify({ t: 'join', cls: 'ranger', ...join })));
  c.ws.on('message', (raw) => { const m = JSON.parse(raw); if (m.t === 'w') { c.w = m; c.id = m.id; } else if (m.t === 's') { c.snap = m; c.ev.push(...m.e); } });
  c.me = () => c.snap?.p.find((p) => p[0] === c.id); c.of = (id) => c.snap?.p.find((p) => p[0] === id);
  // kejar dan tembak target; diam bila tidak ada target
  c.hunt = (target) => setInterval(() => {
    const me = c.me(), o = target && c.of(target.id);
    if (!me || !o || (o[7] & 1)) return c.ws.send(JSON.stringify({ t: 'in', s: ++c.seq, mx: 0, mz: 0, y: 0, f: 0, k: 0, u: c.ult }));
    const dx = o[1] - me[1], dz = o[2] - me[2], d = Math.hypot(dx, dz), clear = los(me[1], me[2], o[1], o[2]);
    const [mx, mz] = clear && d < 8 ? [0, 0] : navStep(c.nav, me[1], me[2], o[1], o[2]);
    c.ws.send(JSON.stringify({ t: 'in', s: ++c.seq, mx, mz, y: Math.atan2(dx, dz), f: clear ? 1 : 0, k: 0, u: c.ult }));
  }, 33);
  return c;
}
const A = client({ name: 'Ayu', pid: 'aaaaaaaaaaaaaaaaaaaa9', mode: 'create' });
await until(() => A.w, 3000);
const B = client({ name: 'Budi', pid: 'bbbbbbbbbbbbbbbbbbbb9', mode: 'join', code: A.w.code, cls: 'guardian' });
await until(() => B.snap, 3000);

// 1. kejadian di tengah ronde (EVENT_FIRST=3)
if (!await until(() => A.snap?.ev && A.ev.some((e) => e[0] === 'E'), 8000)) fail('kejadian tidak dimulai');
console.log(`OK kejadian dimulai: ${A.snap.ev[0]}, sisa ${A.snap.ev[1]} dtk.`);

// 2. A memburu B: pengukur pamungkas terisi, buronan muncul setelah 3 kill
let ivA = A.hunt(B), ivB = B.hunt(null);
if (!await until(() => (A.snap?.me?.[10] || 0) >= 100, 60000)) fail(`pengukur pamungkas tidak penuh: ${A.snap?.me?.[10]}`);
console.log('OK pengukur pamungkas penuh dari damage dan kill.');
const nShots = A.ev.length; A.ult = 1;
if (!await until(() => A.ev.some((e) => e[0] === 'U' && e[1] === A.id), 3000)) fail('jurus pamungkas tidak terpakai');
A.ult = 0;
await sleep(200);
const volley = A.ev.slice(nShots).filter((e) => e[0] === 's' && e[2] === A.id).length;
if (volley < 11) fail(`Hujan Panah seharusnya 11 panah, tercatat ${volley}`);
// panah yang langsung mengenai lawan mengisi pengukur lagi, jadi cukup pastikan tidak lagi penuh
if ((A.snap.me[10] || 0) >= 100) fail('pengukur tidak dikosongkan setelah dipakai');
console.log(`OK Hujan Panah: ${volley} panah keluar, pengukur kembali kosong.`);
if (!await until(() => A.ev.some((e) => e[0] === 'B' && e[1] === A.id), 60000)) fail('Ayu tidak menjadi buronan setelah unggul 3 kill');
await until(() => (A.me()?.[7] & 64), 2000);
if (!(A.me()[7] & 64)) fail('tanda buronan tidak ada di snapshot');
console.log('OK Ayu menjadi buronan (unggul 3 kill), tanda terlihat oleh semua.');
clearInterval(ivA); clearInterval(ivB);

// 3. B memburu sang buronan
ivA = A.hunt(null); ivB = B.hunt(A);
if (!await until(() => B.ev.some((e) => e[0] === 'b' && e[1] === B.id && e[2] === A.id), 60000)) fail('menumbangkan buronan tidak memberi hadiah');
console.log('OK Budi menumbangkan buronan dan mendapat hadiah.');
clearInterval(ivA); clearInterval(ivB);

// 4. tantangan harian: kemajuan tantangan bertipe kill sesuai jumlah kill Ayu
await sleep(1800);
const daily = (await (await fetch(`http://localhost:${PORT}/api/stats?pid=aaaaaaaaaaaaaaaaaaaa9`)).json()).daily;
const list = Stats.daily();
if (!daily || daily.length !== 3) fail('tantangan harian tidak tersedia');
const kills = A.ev.filter((e) => e[0] === 'k' && e[1] === A.id && e[2] !== A.id).length;
list.forEach((c, i) => {
  if (c.type === 'kill' && (!c.cls || c.cls === 'ranger')) {
    const want = Math.min(c.n, kills);
    if (daily[i].p !== want) fail(`kemajuan "${c.text}" ${daily[i].p}, seharusnya ${want}`);
  }
  if (c.type === 'ult' && daily[i].p < 1) fail('pemakaian pamungkas tidak tercatat di tantangan');
  if (c.type === 'bounty' && daily[i].p !== 0) fail('Ayu tidak menumbangkan buronan tetapi tercatat');
});
console.log(`OK tantangan hari ini: ${daily.map((d) => `${d.text} ${d.p}/${d.n}`).join('; ')}.`);
A.ws.close(); B.ws.close();
srv.kill('SIGTERM'); await new Promise((r) => srv.once('exit', r)); // tunggu server selesai menyimpan
fs.rmSync(DATA, { recursive: true, force: true });
console.log('SEMUA UJI C2 LULUS');
process.exit(0);
