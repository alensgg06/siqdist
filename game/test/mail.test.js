// Uji pengirim email dan lupa kata sandi, memakai server SMTP tiruan di mesin ini.
import { spawn, execFile } from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const P1 = 8077, P2 = 8076, SMTP = 8075;
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), 'arkana-mail-'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// server SMTP tiruan: menerima semua surat dan menyimpannya
const inbox = [];
const smtp = net.createServer((sock) => {
  let buf = '', data = false, cur = { to: [], body: '' };
  sock.write('220 uji ESMTP\r\n');
  sock.on('data', (c) => {
    buf += c;
    for (;;) {
      if (data) { const i = buf.indexOf('\r\n.\r\n'); if (i < 0) return; cur.body = buf.slice(0, i); buf = buf.slice(i + 5); data = false; inbox.push(cur); cur = { to: [], body: '' }; sock.write('250 OK tersimpan\r\n'); continue; }
      const i = buf.indexOf('\r\n'); if (i < 0) return;
      const line = buf.slice(0, i); buf = buf.slice(i + 2); const up = line.toUpperCase();
      if (up.startsWith('EHLO')) sock.write('250-uji\r\n250 8BITMIME\r\n');
      else if (up.startsWith('MAIL FROM')) { cur.from = line; sock.write('250 OK\r\n'); }
      else if (up.startsWith('RCPT TO')) { cur.to.push(line.match(/<(.+)>/)?.[1]); sock.write('250 OK\r\n'); }
      else if (up === 'DATA') { data = true; sock.write('354 lanjut\r\n'); }
      else if (up === 'QUIT') { sock.write('221 dah\r\n'); sock.end(); }
      else sock.write('250 OK\r\n');
    }
  });
  sock.on('error', () => {});
}).listen(SMTP);
const mailEnv = { SMTP_HOST: '127.0.0.1', SMTP_PORT: String(SMTP), SMTP_FROM: 'Arkana <game@uji.test>', SMTP_INSECURE: '1' };
const env = { ...process.env, MUTATOR: 'none', BOTS: '0' }; for (const k of ['ARKANA_AUTH', 'SMTP_HOST', 'SMTP_FROM', 'SMTP_USER', 'SMTP_PASS']) delete env[k];
const s1 = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...env, ...mailEnv, PORT: String(P1), DATA_DIR: DATA + '/1' }, stdio: ['ignore', 'ignore', 'inherit'] });
const s2 = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...env, PORT: String(P2), DATA_DIR: DATA + '/2' }, stdio: ['ignore', 'ignore', 'inherit'] });
const done = () => { s1.kill(); s2.kill(); smtp.close(); try { fs.rmSync(DATA, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); } catch { /* server masih menulis saat dimatikan */ } };
const fail = (m) => { console.error('GAGAL:', m); done(); process.exit(1); };
for (const port of [P1, P2]) for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${port}/health`)).ok) break; } catch { /* belum */ } await sleep(100); }
let ipN = 0;
const api = async (port, url, body, token) => {
  const r = await fetch(`http://localhost:${port}${url}`, { method: body ? 'POST' : 'GET', headers: { 'content-type': 'application/json', 'cf-connecting-ip': '10.9.0.' + (++ipN), ...(token ? { authorization: 'Bearer ' + token } : {}) }, body: body ? JSON.stringify(body) : undefined });
  return { code: r.status, ...(await r.json()) };
};
const until = async (fn, ms) => { const t = Date.now(); while (Date.now() - t < ms) { if (fn()) return true; await sleep(50); } return false; };

// ---------- 1. email saat mendaftar ----------
let d = await api(P1, '/api/me');
if (d.mail !== true) fail('server ber-SMTP seharusnya melaporkan mail: true');
if ((await api(P1, '/api/register', { name: 'Arya', pass: 'rahasia123' })).code !== 400) fail('bila pengirim email aktif, mendaftar tanpa email seharusnya ditolak');
if ((await api(P1, '/api/register', { name: 'Arya', pass: 'rahasia123', email: 'bukan-email' })).code !== 400) fail('email tidak sah seharusnya ditolak');
const reg = await api(P1, '/api/register', { name: 'Arya', pass: 'rahasia123', email: 'Arya@Contoh.test' });
if (!reg.token) fail(`pendaftaran dengan email gagal: ${JSON.stringify(reg)}`);
if ((await api(P1, '/api/register', { name: 'Bima', pass: 'rahasia123', email: 'arya@contoh.test' })).code !== 400) fail('email yang sama untuk dua akun seharusnya ditolak');
console.log('OK daftar: email wajib dan diperiksa saat pengirim email aktif; satu email untuk satu akun.');

// ---------- 2. lupa kata sandi ----------
d = await api(P1, '/api/forgot', { name: 'TakAda' });
await sleep(400);
if (d.code !== 200 || !d.ok || inbox.length) fail('nama tak terdaftar: jawaban harus sama dan tidak ada email terkirim');
d = await api(P1, '/api/forgot', { name: 'arya' });
if (d.code !== 200 || !d.ok) fail(`permintaan kode gagal: ${JSON.stringify(d)}`);
if (!await until(() => inbox.length === 1, 5000)) fail('email kode tidak sampai ke server SMTP');
const m = inbox[0], code = m.body.match(/\b(\d{6})\b/)?.[1];
if (m.to[0] !== 'arya@contoh.test' || !/game@uji\.test/.test(m.from) || !code) fail(`isi email salah: ${JSON.stringify(m).slice(0, 300)}`);
if (m.body.includes('rahasia123')) fail('email tidak boleh memuat kata sandi');
console.log(`OK email terkirim ke ${m.to[0]} dari ${m.from.match(/<(.+?)>/)[1]}, berisi kode 6 angka.`);
const wrong = code === '000000' ? '111111' : '000000';
if (!(await api(P1, '/api/reset', { name: 'Arya', code: wrong, pass: 'sandibaru789' })).error) fail('kode salah diterima');
const rs = await api(P1, '/api/reset', { name: 'Arya', code, pass: 'sandibaru789' });
if (!rs.token) fail(`kode benar ditolak: ${JSON.stringify(rs)}`);
if ((await api(P1, '/api/me', null, reg.token)).user) fail('token lama masih berlaku setelah kata sandi diganti');
if ((await api(P1, '/api/login', { name: 'Arya', pass: 'rahasia123' })).token) fail('kata sandi lama masih diterima');
if (!(await api(P1, '/api/login', { name: 'Arya', pass: 'sandibaru789' })).token) fail('kata sandi baru ditolak');
if ((await api(P1, '/api/reset', { name: 'Arya', code, pass: 'cobalagi1234' })).token) fail('kode yang sudah dipakai masih berlaku');
const file = fs.readFileSync(DATA + '/1/accounts.json', 'utf8');
if (file.includes(code)) fail('kode tersimpan polos di accounts.json');
console.log('OK ganti kata sandi: kode salah ditolak, kode benar sekali pakai, kata sandi dan token lama mati.');

// ---------- 3. kode hangus setelah 5 tebakan ----------
const r2 = await api(P1, '/api/register', { name: 'Citra', pass: 'rahasia123', email: 'citra@contoh.test' });
await api(P1, '/api/forgot', { name: 'Citra' });
if (!await until(() => inbox.length === 2, 5000)) fail('email kode kedua tidak terkirim');
const code2 = inbox[1].body.match(/\b(\d{6})\b/)[1];
for (let i = 0; i < 6; i++) await api(P1, '/api/reset', { name: 'Citra', code: String(100000 + i === Number(code2) ? 999999 : 100000 + i), pass: 'tebakan12345' });
if ((await api(P1, '/api/reset', { name: 'Citra', code: code2, pass: 'tebakan12345' })).token) fail('kode masih berlaku setelah terlalu banyak tebakan');
if (!(await api(P1, '/api/me', null, r2.token)).user) fail('tebakan kode yang gagal tidak boleh mengeluarkan pemilik akun');
console.log('OK kode hangus setelah 5 tebakan salah; akun pemilik tidak terganggu.');

// ---------- 4. alat ----------
// tidak sinkron: server SMTP tiruan hidup di proses ini dan harus tetap bisa menjawab
const tool = (file, envX, ...a) => new Promise((res, rej) => execFile(process.execPath, ['tools/' + file, ...a], { cwd: ROOT, env: { ...env, ...envX, DATA_DIR: DATA + '/1' }, encoding: 'utf8' }, (err, out, errOut) => (err ? rej(new Error(errOut || err.message)) : res(out))));
await tool('akun.js', {}, 'email', 'Citra', 'baru@contoh.test');
if (!/Citra.*baru@contoh\.test/.test(await tool('akun.js', {}, 'daftar'))) fail('alat tidak mengganti email akun');
console.log('   ' + (await tool('email.js', mailEnv, 'cek')).trim());
await tool('email.js', mailEnv, 'tes', 'pengelola@contoh.test');
if (!await until(() => inbox.some((x) => x.to[0] === 'pengelola@contoh.test'), 3000)) fail('email percobaan dari alat tidak terkirim');
console.log('OK alat: email akun bisa diatur, sambungan SMTP bisa dicek, email percobaan terkirim.');

// ---------- 5. tanpa SMTP ----------
d = await api(P2, '/api/me');
if (d.mail !== false) fail('server tanpa SMTP seharusnya melaporkan mail: false');
if (!(await api(P2, '/api/register', { name: 'Dewi', pass: 'rahasia123' })).token) fail('tanpa SMTP, mendaftar tanpa email harus tetap bisa');
if ((await api(P2, '/api/forgot', { name: 'Dewi' })).code !== 400) fail('tanpa SMTP, lupa kata sandi seharusnya ditolak dengan pesan');
console.log('OK tanpa SMTP: game tetap jalan, email tidak diminta, lupa kata sandi memberi pesan yang jelas.');
done();
console.log('SEMUA UJI LULUS');
process.exit(0);
