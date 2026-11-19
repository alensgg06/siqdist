// Uji halaman admin: hanya pengelola yang boleh; kelola akun (sandi, email, blokir, hapus, keluarkan),
// kelola event (mulai, jadwal, hentikan, batalkan), dan jejak tindakan.
import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import WebSocket from 'ws';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const P1 = 8074, P2 = 8073;
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), 'arkana-admin-'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const env = { ...process.env, MUTATOR: 'none', BOTS: '0' }; for (const k of ['ARKANA_AUTH', 'ARKANA_ADMINS', 'SMTP_HOST', 'SMTP_FROM']) delete env[k];
const s1 = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...env, PORT: String(P1), DATA_DIR: DATA + '/1', ARKANA_ADMINS: 'bos, Wakil' }, stdio: ['ignore', 'ignore', 'inherit'] });
const s2 = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...env, PORT: String(P2), DATA_DIR: DATA + '/2' }, stdio: ['ignore', 'ignore', 'inherit'] });
const done = () => { s1.kill(); s2.kill(); try { fs.rmSync(DATA, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); } catch { /* server masih menulis saat dimatikan */ } };
const fail = (m) => { console.error('GAGAL:', m); done(); process.exit(1); };
for (const port of [P1, P2]) for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${port}/health`)).ok) break; } catch { /* belum */ } await sleep(100); }
let ipN = 0;
const api = async (port, url, body, token) => {
  const r = await fetch(`http://localhost:${port}${url}`, { method: body ? 'POST' : 'GET', headers: { 'content-type': 'application/json', 'cf-connecting-ip': '10.8.0.' + (++ipN), ...(token ? { authorization: 'Bearer ' + token } : {}) }, body: body ? JSON.stringify(body) : undefined });
  return { code: r.status, ...(await r.json()) };
};
const until = async (fn, ms) => { const t = Date.now(); while (Date.now() - t < ms) { if (await fn()) return true; await sleep(60); } return false; };

// nama pengelola tidak bisa direbut lewat pendaftaran umum; akunnya dibuat lewat alat di server
if ((await api(P1, '/api/register', { name: 'BOS', pass: 'perebut-1234' })).code !== 400) fail('nama pengelola bisa didaftarkan orang lain lewat halaman umum');
const tool = (...a) => execFileSync(process.execPath, ['tools/akun.js', ...a], { cwd: ROOT, env: { ...env, DATA_DIR: DATA + '/1' }, encoding: 'utf8' });
tool('buat', 'Bos', 'rahasia-bos1'); tool('buat', 'Wakil', 'rahasia-wk1');
const bos = await api(P1, '/api/login', { name: 'Bos', pass: 'rahasia-bos1' });
const arya = await api(P1, '/api/register', { name: 'Arya', pass: 'rahasia123' });
if (!bos.token || !arya.token) fail('pendaftaran awal gagal');
const A = (body) => api(P1, '/api/admin/do', body, bos.token);

// ---------- 1. hak akses ----------
if (bos.user.admin !== true || arya.user.admin) fail('tanda pengelola saat masuk salah');
for (const [tok, who] of [[null, 'tanpa masuk'], ['x'.repeat(43), 'token palsu'], [arya.token, 'pemain biasa']]) {
  if ((await api(P1, '/api/admin/state', null, tok)).code !== 403) fail(`${who} bisa membaca data admin`);
  if ((await api(P1, '/api/admin/do', { do: 'delete', name: 'Bos' }, tok)).code !== 403) fail(`${who} bisa menjalankan tindakan admin`);
}
let st = await api(P1, '/api/admin/state', null, bos.token);
if (st.code !== 200 || st.accounts.length !== 3) fail(`data admin salah: ${JSON.stringify(st).slice(0, 200)}`);
const leak = JSON.stringify(st);
if (/"hash"|"salt"|"sessions":\[|"pid"/.test(leak) || leak.includes(arya.token)) fail('data admin membocorkan hash, garam, token, atau id statistik');
if (!st.accounts.find((a) => a.name === 'Bos').admin || st.accounts.find((a) => a.name === 'Arya').admin) fail('penanda pengelola di daftar akun salah');
const reg2 = await api(P2, '/api/register', { name: 'Bos', pass: 'rahasia-bos1' });
if ((await api(P2, '/api/admin/state', null, reg2.token)).code !== 403) fail('tanpa ARKANA_ADMINS, halaman admin seharusnya mati untuk semua orang');
console.log('OK hak akses: hanya nama di ARKANA_ADMINS; pemain biasa, token palsu, dan tamu ditolak; tanpa daftar pengelola semuanya ditolak; data tidak membocorkan rahasia.');

// ---------- 2. pemain di arena, keluarkan, blokir ----------
const play = (tok) => new Promise((res) => { const ws = new WebSocket(`ws://localhost:${P1}/ws`), c = { ws, w: null, closed: false }; ws.on('open', () => ws.send(JSON.stringify({ t: 'join', cls: 'ranger', mode: 'create', gm: 'dm', tok }))); ws.on('message', (raw) => { const m = JSON.parse(raw); if (m.t === 'w') { c.w = m; res(c); } }); ws.on('close', () => { c.closed = true; res(c); }); });
let c = await play(arya.token);
if (!c.w) fail('Arya tidak bisa bergabung');
st = await api(P1, '/api/admin/state', null, bos.token);
if (!st.rooms.some((r) => r.humans.includes('Arya') && r.kind === 'privat' && r.code === c.w.code)) fail(`room Arya tidak tampil: ${JSON.stringify(st.rooms)}`);
if (!(await A({ do: 'kick', name: 'Arya' })).ok || !await until(() => c.closed, 2000)) fail('"keluarkan" tidak memutus pemain');
c = await play(arya.token);
if (!(await A({ do: 'ban', name: 'arya' })).ok || !await until(() => c.closed, 2000)) fail('blokir tidak mengeluarkan pemain dari arena');
if ((await api(P1, '/api/me', null, arya.token)).user) fail('token akun yang diblokir masih berlaku');
if (!/diblokir/.test((await api(P1, '/api/login', { name: 'Arya', pass: 'rahasia123' })).error || '')) fail('akun yang diblokir masih bisa masuk');
if (!(await A({ do: 'unban', name: 'Arya' })).ok || !(await api(P1, '/api/login', { name: 'Arya', pass: 'rahasia123' })).token) fail('setelah blokir dibuka, akun tidak bisa masuk');
if ((await A({ do: 'ban', name: 'Bos' })).code !== 400) fail('pengelola bisa memblokir dirinya sendiri');
console.log('OK arena dan blokir: room tampil, "keluarkan" memutus pemain, blokir mengeluarkan dan menolak masuk, buka blokir memulihkan.');

// ---------- 3. sandi, email, hapus ----------
if (!(await A({ do: 'pass', name: 'Arya', pass: 'sandibaru789' })).ok) fail('ganti kata sandi gagal');
if ((await A({ do: 'pass', name: 'Arya', pass: 'pendek' })).code !== 400) fail('kata sandi pendek diterima');
if ((await api(P1, '/api/login', { name: 'Arya', pass: 'rahasia123' })).token || !(await api(P1, '/api/login', { name: 'Arya', pass: 'sandibaru789' })).token) fail('kata sandi baru dari admin tidak berlaku');
if (!(await A({ do: 'email', name: 'Arya', email: 'arya@contoh.test' })).ok || (await A({ do: 'email', name: 'Arya', email: 'salah' })).code !== 400) fail('pengaturan email salah');
st = await api(P1, '/api/admin/state', null, bos.token);
if (st.accounts.find((a) => a.name === 'Arya').email !== 'arya@contoh.test') fail('email tidak tampil di daftar akun');
if ((await A({ do: 'delete', name: 'Wakil' })).code !== 400) fail('akun pengelola bisa dihapus');
if (!(await A({ do: 'delete', name: 'Arya' })).ok || (await api(P1, '/api/login', { name: 'Arya', pass: 'sandibaru789' })).token) fail('hapus akun gagal');
if ((await A({ do: 'delete', name: 'TakAda' })).code !== 400 || (await A({ do: 'ngawur' })).code !== 400) fail('tindakan salah seharusnya ditolak');
console.log('OK akun: ganti kata sandi, atur email, hapus; akun pengelola terlindung; masukan salah ditolak.');

// ---------- 4. event ----------
let r = await A({ do: 'eventStart', tipe: 'golem', minutes: 10, nama: 'Uji Admin', target: 2 });
if (!r.ok || r.state.events[0]?.state !== 'berjalan' || !r.state.events[0].target.includes('2')) fail(`mulai event gagal: ${JSON.stringify(r).slice(0, 300)}`);
if (!(await (await fetch(`http://localhost:${P1}/api/event`)).json()).active) fail('event dari admin tidak langsung aktif di game');
if ((await A({ do: 'eventStart', tipe: 'raja', minutes: 10 })).code !== 400) fail('dua event bertabrakan seharusnya ditolak');
if ((await A({ do: 'eventStart', tipe: 'naga', minutes: 10 })).code !== 400 || (await A({ do: 'eventStart', tipe: 'raja', minutes: 0 })).code !== 400) fail('masukan event salah seharusnya ditolak');
r = await A({ do: 'eventEnd', id: r.state.events[0].id });
if (!r.ok || r.state.events[0].state !== 'selesai' || (await (await fetch(`http://localhost:${P1}/api/event`)).json()).active) fail('hentikan event gagal');
r = await A({ do: 'eventPlan', tipe: 'raja', start: Date.now() + 3600e3, end: Date.now() + 7200e3 });
const plan = r.state?.events.find((e) => e.state === 'akan datang');
if (!r.ok || !plan) fail(`jadwal event gagal: ${JSON.stringify(r).slice(0, 200)}`);
if ((await A({ do: 'eventPlan', tipe: 'raja', start: Date.now() - 7200e3, end: Date.now() - 3600e3 })).code !== 400) fail('jadwal di masa lalu seharusnya ditolak');
r = await A({ do: 'eventEnd', id: plan.id });
if (!r.ok || r.state.events.some((e) => e.id === plan.id)) fail('batalkan event terjadwal gagal');
console.log('OK event: mulai sekarang dengan nama dan target, tabrakan ditolak, hentikan, jadwalkan, batalkan.');

// ---------- 5. jejak tindakan ----------
const log = fs.readFileSync(DATA + '/1/admin.log', 'utf8');
if (!/"by":"Bos","do":"ban","name":"arya"/.test(log) || /sandibaru789|rahasia/.test(log)) fail('jejak tindakan tidak lengkap atau memuat kata sandi');
console.log(`OK jejak: ${log.trim().split('\n').length} tindakan tercatat di admin.log, tanpa kata sandi.`);
done();
console.log('SEMUA UJI LULUS');
process.exit(0);
