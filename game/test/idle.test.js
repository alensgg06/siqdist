// Uji pemain tidak aktif: dikeluarkan dari arena setelah batas waktu; menembak otomatis tidak dihitung aktif;
// bergerak atau memakai jurus mengulang hitungan; akun tetap masuk di perangkatnya.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import WebSocket from 'ws';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8072, DATA = fs.mkdtempSync(path.join(os.tmpdir(), 'arkana-idle-'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const env = { ...process.env, MUTATOR: 'none', BOTS: '0', IDLE_SEC: '3', PORT: String(PORT), DATA_DIR: DATA }; delete env.ARKANA_AUTH;
const srv = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env, stdio: ['ignore', 'ignore', 'inherit'] });
const done = () => { srv.kill(); try { fs.rmSync(DATA, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); } catch { /* masih ditulis */ } };
const fail = (m) => { console.error('GAGAL:', m); done(); process.exit(1); };
for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${PORT}/health`)).ok) break; } catch { /* belum */ } await sleep(100); }
const reg = async (name, i) => (await (await fetch(`http://localhost:${PORT}/api/register`, { method: 'POST', headers: { 'content-type': 'application/json', 'cf-connecting-ip': '10.7.0.' + i }, body: JSON.stringify({ name, pass: 'rahasia123' }) })).json()).token;
function client(tok, input) {
  const c = { ws: new WebSocket(`ws://localhost:${PORT}/ws`), w: null, err: null, closedAt: 0, seq: 0, t0: Date.now() };
  c.ws.on('open', () => c.ws.send(JSON.stringify({ t: 'join', cls: 'ranger', mode: 'create', gm: 'dm', tok })));
  c.ws.on('message', (raw) => { const m = JSON.parse(raw); if (m.t === 'w') c.w = m; else if (m.t === 'e') c.err = m; });
  c.ws.on('close', () => { c.closedAt = Date.now(); clearInterval(c.iv); });
  c.iv = setInterval(() => { if (c.ws.readyState === 1 && c.w) c.ws.send(JSON.stringify({ t: 'in', s: ++c.seq, ...input((Date.now() - c.t0) / 1000, c.seq) })); }, 33);
  return c;
}
const [ta, tb, tc] = [await reg('Diam', 1), await reg('Gerak', 2), await reg('Jurus', 3)];
// Diam: tidak menyentuh apa pun, tetapi tembak otomatis dan bantuan bidik tetap mengirim tembakan dan arah yang berubah
const A = client(ta, (t, s) => ({ mx: 0, mz: 0, y: s / 30, f: 1, k: 0 }));
const B = client(tb, (t) => ({ mx: Math.sin(t), mz: 0, y: 0, f: 0, k: 0 }));
const C = client(tc, (t) => ({ mx: 0, mz: 0, y: 0, f: 0, k: t > 2 && t < 2.2 ? 1 : 0 }));
await sleep(4600);
if (!A.w || !B.w || !C.w) fail('pemain uji tidak bisa bergabung');
if (!A.closedAt || !A.err?.idle || !/tidak aktif/.test(A.err.m)) fail(`pemain diam seharusnya dikeluarkan dengan pesan: ${JSON.stringify(A.err)}`);
const after = (A.closedAt - A.t0) / 1000;
if (after < 2.8 || after > 4.6) fail(`pemain diam dikeluarkan pada detik ${after.toFixed(1)}, seharusnya sekitar 3-4`);
if (B.closedAt) fail('pemain yang bergerak ikut dikeluarkan');
if (C.closedAt) fail('memakai jurus pada detik ke-2 seharusnya mengulang hitungan');
console.log(`OK pemain diam dikeluarkan pada detik ${after.toFixed(1)} ("${A.err.m}"); tembak otomatis tidak dihitung aktif; yang bergerak dan yang memakai jurus tetap di arena.`);
await sleep(2400);
if (!C.closedAt) fail('pemain yang berhenti aktif setelah memakai jurus seharusnya akhirnya dikeluarkan');
if (B.closedAt) fail('pemain yang terus bergerak dikeluarkan');
const me = await (await fetch(`http://localhost:${PORT}/api/me`, { headers: { authorization: 'Bearer ' + ta } })).json();
if (!me.user) fail('dikeluarkan karena tidak aktif seharusnya tidak mengeluarkan akun dari perangkatnya');
const again = client(ta, () => ({ mx: 1, mz: 0, y: 0, f: 0, k: 0 }));
await sleep(600);
if (!again.w) fail('pemain yang dikeluarkan seharusnya bisa bergabung lagi');
console.log('OK hitungan terulang oleh aktivitas, akun tetap masuk, dan pemain bisa langsung bergabung lagi.');
B.ws.close(); again.ws.close();
done();
console.log('SEMUA UJI LULUS');
process.exit(0);
