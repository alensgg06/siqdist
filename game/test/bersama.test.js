// Uji Arah A: daftar "sedang bermain", tombol Main Bersama (quick), dan event mingguan.
import { spawn, execFile } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import WebSocket from 'ws';
import { fileURLToPath } from 'node:url';
import { validate } from '../server/events.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8071, DATA = fs.mkdtempSync(path.join(os.tmpdir(), 'arkana-bersama-'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const env = { ...process.env, MUTATOR: 'none', BOTS: '0', PORT: String(PORT), DATA_DIR: DATA, ARKANA_ADMINS: 'bos' }; delete env.ARKANA_AUTH;
const tool = (file, ...a) => new Promise((res, rej) => execFile(process.execPath, ['tools/' + file, ...a], { cwd: ROOT, env, encoding: 'utf8' }, (err, out, e2) => (err ? rej(new Error(e2 || err.message)) : res(out))));
await tool('akun.js', 'buat', 'Bos', 'rahasia-bos1');
const srv = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env, stdio: ['ignore', 'ignore', 'inherit'] });
const done = () => { srv.kill(); try { fs.rmSync(DATA, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); } catch { /* masih ditulis */ } };
const fail = (m) => { console.error('GAGAL:', m); done(); process.exit(1); };
for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${PORT}/health`)).ok) break; } catch { /* belum */ } await sleep(100); }
let ipN = 0;
const api = async (url, body, token) => { const r = await fetch(`http://localhost:${PORT}${url}`, { method: body ? 'POST' : 'GET', headers: { 'content-type': 'application/json', 'cf-connecting-ip': '10.6.0.' + (++ipN), ...(token ? { authorization: 'Bearer ' + token } : {}) }, body: body ? JSON.stringify(body) : undefined }); return { code: r.status, ...(await r.json()) }; };
const join = (tok, extra) => new Promise((res) => { const ws = new WebSocket(`ws://localhost:${PORT}/ws`), c = { ws, w: null, err: null }; ws.on('open', () => ws.send(JSON.stringify({ t: 'join', cls: 'ranger', tok, ...extra }))); ws.on('message', (raw) => { const m = JSON.parse(raw); if (m.t === 'w') { c.w = m; res(c); } else if (m.t === 'e') { c.err = m; res(c); } }); });
const tok = {}; for (const n of ['Arya', 'Bima', 'Citra', 'Dewi']) tok[n] = (await api('/api/register', { name: n, pass: 'rahasia123' })).token;
const bos = (await api('/api/login', { name: 'Bos', pass: 'rahasia-bos1' })).token;
const A = (b) => api('/api/admin/do', b, bos);

// ---------- 1. Main Bersama tanpa siapa pun: membuat room dengan mode pilihan ----------
if ((await api('/api/lobby')).code !== 403) fail('daftar pemain seharusnya hanya untuk yang sudah masuk');
if ((await api('/api/lobby', null, tok.Arya)).rooms.length) fail('daftar seharusnya kosong di awal');
const a = await join(tok.Arya, { mode: 'quick', gm: 'pve' });
if (!a.w || a.w.gm !== 'pve' || !a.w.code) fail(`Main Bersama saat sepi seharusnya membuat room mode pilihan: ${JSON.stringify(a.w || a.err)}`);
// ---------- 2. teman berikutnya masuk ke room yang sama, apa pun mode pilihannya ----------
const b = await join(tok.Bima, { mode: 'quick', gm: 'tdm' });
if (!b.w || b.w.code !== a.w.code || b.w.gm !== 'pve') fail('Main Bersama seharusnya membawa pemain ke room teman yang sudah ada');
const c = await join(tok.Citra, { mode: 'create', gm: 'king' });
let lob = await api('/api/lobby', null, tok.Dewi);
if (lob.rooms.length !== 2 || lob.rooms[0].names.sort().join() !== 'Arya,Bima' || lob.rooms[0].mode !== 'pve' || lob.rooms[1].names[0] !== 'Citra' || lob.rooms[0].max !== 8) fail(`isi daftar salah: ${JSON.stringify(lob.rooms)}`);
const d = await join(tok.Dewi, { mode: 'quick', gm: 'dm' });
if (d.w.code !== a.w.code) fail('Main Bersama seharusnya memilih room yang paling ramai');
const pr = await join((await api('/api/register', { name: 'Eka', pass: 'rahasia123' })).token, { mode: 'practice' });
lob = await api('/api/lobby', null, tok.Dewi);
if (lob.rooms.some((r) => r.names.includes('Eka'))) fail('room latihan tidak boleh tampil di daftar');
console.log('OK Main Bersama: saat sepi membuat room mode pilihan; berikutnya masuk ke room teman yang paling ramai; daftar hanya untuk yang sudah masuk dan tanpa room latihan.');

// ---------- 3. jadwal mingguan ----------
const now = Date.parse('2026-11-19T05:00:00Z'); // Kamis 12.00 WIB
const v = validate([{ id: 'm', ulang: 'mingguan', tipe: 'bergantian', hari: 'sabtu', jam: '20:00', lama: 120 }], now);
const wib = (ms) => new Date(ms + 7 * 3600e3).toISOString().slice(0, 16);
if (v.errors.length || v.list.map((e) => wib(e.start)).join() !== '2026-11-14T20:00,2026-11-21T20:00,2026-11-28T20:00' || new Set(v.list.map((e) => e.type)).size !== 2 || v.list[0].type === v.list[1].type) fail(`jadwal mingguan salah hitung: ${JSON.stringify(v.list.map((e) => [e.id, e.type, wib(e.start)]))}`);
if (validate([{ id: 'x', ulang: 'mingguan', tipe: 'golem', hari: 'sabtu', jam: '25:00' }], now).errors.length !== 1) fail('jam tidak sah seharusnya ditolak');
const skip = validate([{ id: 'm', ulang: 'mingguan', tipe: 'golem', hari: 6, jam: '20:00', lewati: ['20261121'] }], now);
if (skip.list.some((e) => e.id === 'm-20261121') || skip.list.length !== 2) fail('minggu yang dilewati masih dibuat');
console.log('OK hitungan jadwal: tiap Sabtu 20.00 WIB, tipe bergantian tiap minggu, minggu yang dilewati tidak dibuat.');

// jadwal yang sedang berjalan sekarang: hari ini, mulai semenit lalu
const t = new Date(Date.now() + 7 * 3600e3 - 60e3), jam = `${String(t.getUTCHours()).padStart(2, '0')}:${String(t.getUTCMinutes()).padStart(2, '0')}`;
let r = await A({ do: 'weeklyAdd', tipe: 'raja', hari: t.getUTCDay(), jam, lama: 30 });
if (!r.ok || r.state.weekly.length !== 1) fail(`tambah jadwal mingguan gagal: ${JSON.stringify(r).slice(0, 200)}`);
if ((await A({ do: 'weeklyAdd', tipe: 'naga', hari: 6, jam: '20:00', lama: 60 })).code !== 400 || (await A({ do: 'weeklyAdd', tipe: 'golem', hari: 9, jam: '20:00', lama: 60 })).code !== 400) fail('jadwal mingguan yang salah seharusnya ditolak');
const run = r.state.events.find((e) => e.state === 'berjalan'), next = r.state.events.find((e) => e.state === 'akan datang');
if (!run?.weekly || !next?.weekly) fail(`kejadian minggu ini dan minggu depan seharusnya ada: ${JSON.stringify(r.state.events.map((e) => [e.id, e.state]))}`);
const ev = await (await fetch(`http://localhost:${PORT}/api/event`)).json();
if (!ev.active || ev.active.name !== 'Perburuan Raja') fail('event mingguan tidak aktif di game tanpa ditekan');
// Main Bersama saat event berjalan: masuk ke event
for (const x of [a, b, c, d, pr]) x.ws.close();
await sleep(300);
const e1 = await join(tok.Arya, { mode: 'quick', gm: 'pve' });
if (!e1.w?.ev || e1.w.gm !== 'king') fail('Main Bersama saat event berjalan seharusnya masuk ke event');
console.log('OK event mingguan: mulai sendiri pada jamnya, dan Main Bersama langsung membawa pemain ke sana.');
// menghentikan kejadian minggu ini tidak menghapus jadwal
let z = false; e1.ws.on('message', (raw) => { const m = JSON.parse(raw); if (m.t === 's' && m.e.some((x) => x[0] === 'Z')) z = true; });
r = await A({ do: 'eventEnd', id: run.id });
if (!r.ok || r.state.weekly.length !== 1 || r.state.events.some((e) => e.id === run.id) || !r.state.events.some((e) => e.id === next.id)) fail('menghentikan satu minggu seharusnya hanya melewati minggu itu');
for (let i = 0; i < 40 && !z; i++) await sleep(100);
if (!z) fail('pemain di event tidak diberi tahu saat event dihentikan');
r = await A({ do: 'weeklyDel', id: r.state.weekly[0].id });
if (!r.ok || r.state.weekly.length || r.state.events.some((e) => e.weekly)) fail('menghapus jadwal mingguan gagal');
console.log('OK kelola jadwal: menghentikan hanya melewati minggu itu, pemain diberi tahu, dan jadwal bisa dihapus.');
// alat baris perintah
await tool('event.js', 'mingguan', 'bergantian', 'sabtu', '20:00', '90');
if (!/MINGGUAN.*sabtu 20:00 WIB, 90 menit/.test(await tool('event.js', 'daftar'))) fail('alat tidak mencatat jadwal mingguan');
e1.ws.close();
done();
console.log('SEMUA UJI LULUS');
process.exit(0);
