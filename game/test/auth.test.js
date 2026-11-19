// Uji akun: daftar, masuk, token, wajib masuk saat bergabung, nama dan statistik dari akun,
// keluar, reset kata sandi lewat alat, kode undangan, dan pembatas percobaan.
import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import WebSocket from 'ws';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const P1 = 8079, P2 = 8078;
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), 'arkana-auth-'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const env = { ...process.env, MUTATOR: 'none', BOTS: '0' }; delete env.ARKANA_AUTH;
const s1 = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...env, PORT: String(P1), DATA_DIR: DATA + '/1' }, stdio: ['ignore', 'ignore', 'inherit'] });
const s2 = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...env, PORT: String(P2), DATA_DIR: DATA + '/2', ARKANA_INVITE: 'rahasia-teman' }, stdio: ['ignore', 'ignore', 'inherit'] });
const done = () => { s1.kill(); s2.kill(); try { fs.rmSync(DATA, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); } catch { /* server masih menulis saat dimatikan */ } };
const fail = (m) => { console.error('GAGAL:', m); done(); process.exit(1); };
for (const port of [P1, P2]) for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${port}/health`)).ok) break; } catch { /* belum */ } await sleep(100); }
const api = async (port, url, body, token, ip) => {
  const r = await fetch(`http://localhost:${port}${url}`, { method: body ? 'POST' : 'GET', headers: { 'content-type': 'application/json', ...(token ? { authorization: 'Bearer ' + token } : {}), ...(ip ? { 'cf-connecting-ip': ip } : {}) }, body: body ? JSON.stringify(body) : undefined });
  return { code: r.status, ...(await r.json()) };
};
const join = (port, extra) => new Promise((res) => {
  const ws = new WebSocket(`ws://localhost:${port}/ws`), c = { ws, w: null, err: null, roster: [] };
  ws.on('open', () => ws.send(JSON.stringify({ t: 'join', cls: 'ranger', mode: 'practice', ...extra })));
  ws.on('message', (raw) => { const m = JSON.parse(raw); if (m.t === 'w') c.w = m; else if (m.t === 'e') c.err = m; else if (m.t === 'r') c.roster = m.l; });
  setTimeout(() => res(c), 700);
});
const PID = 'a'.repeat(20);

// ---------- 1. wajib masuk ----------
let d = await api(P1, '/api/me');
if (d.auth !== true || d.user !== null || d.invite !== false) fail(`/api/me awal salah: ${JSON.stringify(d)}`);
let c = await join(P1, { name: 'Tamu' });
if (c.w || !c.err?.auth) fail('bergabung tanpa akun seharusnya ditolak');
c = await join(P1, { name: 'Tamu', tok: 'x'.repeat(43) });
if (c.w || !c.err?.auth) fail('token palsu seharusnya ditolak');
console.log(`OK wajib masuk: tanpa akun dan dengan token palsu ditolak ("${c.err.m}").`);

// ---------- 2. daftar ----------
for (const [b, why] of [[{ name: 'ab', pass: 'rahasia123' }, 'nama terlalu pendek'], [{ name: 'nama spasi', pass: 'rahasia123' }, 'nama berisi spasi'], [{ name: 'Arya', pass: 'pendek' }, 'kata sandi pendek'], [{ name: 'Arya' }, 'tanpa kata sandi']]) {
  d = await api(P1, '/api/register', b, null, '10.0.0.1');
  if (d.code !== 400 || !d.error || d.token) fail(`pendaftaran dengan ${why} seharusnya ditolak: ${JSON.stringify(d)}`);
}
const reg = await api(P1, '/api/register', { name: 'Arya', pass: 'rahasia123', pid: PID }, null, '10.0.0.2');
if (reg.code !== 200 || !reg.token || reg.user.name !== 'Arya' || reg.user.pid !== PID) fail(`pendaftaran gagal: ${JSON.stringify(reg)}`);
d = await api(P1, '/api/register', { name: 'ARYA', pass: 'lainlagi123' }, null, '10.0.0.2');
if (d.code !== 400 || !/sudah dipakai/.test(d.error)) fail('nama yang sama (beda huruf besar) seharusnya ditolak');
const reg2 = await api(P1, '/api/register', { name: 'Bima', pass: 'rahasia456', pid: PID }, null, '10.0.0.3');
if (!reg2.token || reg2.user.pid === PID) fail('akun kedua tidak boleh mewarisi id statistik yang sudah dimiliki akun lain');
console.log('OK daftar: masukan salah ditolak, nama unik tanpa membedakan huruf besar, statistik perangkat ikut ke akun pertama saja.');

// ---------- 3. token, nama dan statistik dari akun ----------
d = await api(P1, '/api/me', null, reg.token);
if (d.user?.name !== 'Arya') fail('token tidak dikenali /api/me');
c = await join(P1, { name: 'NamaPalsu', pid: 'b'.repeat(20), tok: reg.token });
if (!c.w) fail(`bergabung dengan token sah gagal: ${JSON.stringify(c.err)}`);
if (!c.roster.some((r) => r[1] === 'Arya') || c.roster.some((r) => r[1] === 'NamaPalsu')) fail(`nama di arena seharusnya nama akun: ${JSON.stringify(c.roster.map((r) => r[1]))}`);
c.ws.close();
await sleep(200);
const st = async (pid) => (await api(P1, '/api/stats?pid=' + pid)).stats;
if ((await st(PID))?.name !== 'Arya' || await st('b'.repeat(20))) fail('statistik seharusnya tercatat pada id akun, bukan id kiriman klien');
const file = fs.readFileSync(DATA + '/1/accounts.json', 'utf8');
if (file.includes('rahasia123') || file.includes(reg.token)) fail('kata sandi atau token tersimpan polos di accounts.json');
if ((fs.statSync(DATA + '/1/accounts.json').mode & 0o077) !== 0) fail('accounts.json seharusnya hanya terbaca pemiliknya');
console.log('OK sesi: token dikenali, nama dan statistik diambil dari akun, kata sandi dan token tidak tersimpan polos.');

// ---------- 4. masuk di perangkat lain, keluar ----------
const lg = await api(P1, '/api/login', { name: 'arya', pass: 'rahasia123' }, null, '10.0.0.4');
if (!lg.token || lg.user.pid !== PID || lg.token === reg.token) fail(`masuk gagal: ${JSON.stringify(lg)}`);
await api(P1, '/api/logout', {}, lg.token);
if ((await api(P1, '/api/me', null, lg.token)).user) fail('token masih berlaku setelah keluar');
if (!(await api(P1, '/api/me', null, reg.token)).user) fail('keluar di satu perangkat tidak boleh mengeluarkan perangkat lain');
console.log('OK masuk dan keluar: perangkat lain mendapat statistik yang sama; keluar hanya mematikan token perangkat itu.');

// ---------- 5. reset kata sandi lewat alat ----------
const tool = (...a) => execFileSync(process.execPath, ['tools/akun.js', ...a], { cwd: ROOT, env: { ...process.env, DATA_DIR: DATA + '/1' }, encoding: 'utf8' });
if (!/Arya/.test(tool('daftar')) || !/Bima/.test(tool('daftar'))) fail('alat tidak menampilkan daftar akun');
console.log('   ' + tool('sandi', 'Arya', 'sandibaru789').trim());
if ((await api(P1, '/api/me', null, reg.token)).user) fail('token lama masih berlaku setelah kata sandi direset');
if ((await api(P1, '/api/login', { name: 'Arya', pass: 'rahasia123' }, null, '10.0.0.5')).token) fail('kata sandi lama masih diterima');
if (!(await api(P1, '/api/login', { name: 'Arya', pass: 'sandibaru789' }, null, '10.0.0.6')).token) fail('kata sandi baru ditolak');
console.log('OK reset: server membaca perubahan tanpa restart; kata sandi lama dan token lama mati.');

// ---------- 6. pembatas percobaan ----------
let last;
for (let i = 0; i < 9; i++) last = await api(P1, '/api/login', { name: 'Bima', pass: 'tebakan' + i + 'xx' }, null, '10.0.0.' + (20 + i)); // alamat berganti: yang dikunci adalah namanya
if (last.code !== 429) fail(`tebakan beruntun pada satu nama seharusnya dikunci: ${JSON.stringify(last)}`);
if ((await api(P1, '/api/login', { name: 'Bima', pass: 'rahasia456' }, null, '10.0.0.40')).code !== 429) fail('selama dikunci, kata sandi benar pun harus ditolak');
for (let i = 0; i < 9; i++) last = await api(P1, '/api/login', { name: 'Tak' + i, pass: 'tebakanxx' }, null, '10.0.0.99'); // satu alamat, banyak nama
if (last.code !== 429) fail('tebakan beruntun dari satu alamat seharusnya dikunci');
console.log('OK pembatas: 8 percobaan per 10 menit, per nama dan per alamat.');

// ---------- 7. kode undangan ----------
d = await api(P2, '/api/me');
if (d.invite !== true) fail('server berkode undangan tidak melaporkannya');
if ((await api(P2, '/api/register', { name: 'Citra', pass: 'rahasia123' }, null, '10.1.0.1')).code !== 403) fail('daftar tanpa kode undangan seharusnya ditolak');
if (!(await api(P2, '/api/register', { name: 'Citra', pass: 'rahasia123', invite: 'rahasia-teman' }, null, '10.1.0.2')).token) fail('daftar dengan kode undangan benar ditolak');
console.log('OK kode undangan: wajib bila ARKANA_INVITE diisi.');
done();
console.log('SEMUA UJI LULUS');
process.exit(0);
