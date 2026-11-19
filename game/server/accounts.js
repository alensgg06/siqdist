// Akun pemain: nama pengguna + kata sandi. Disimpan di DATA_DIR/accounts.json.
// Kata sandi tidak pernah disimpan: hanya hasil scrypt beserta garamnya. Token sesi disimpan sebagai SHA-256.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const NAME_RE = /^[A-Za-z0-9_]{3,14}$/;
const MAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,180}\.[^\s@]{2,24}$/;
const CODE_MS = 15 * 60e3, CODE_TRIES = 5;
const SESSION_MS = 30 * 86400e3;
const MAX_SESSIONS = 5;          // per akun; yang tertua dibuang
export const PASS_MIN = 8, PASS_MAX = 72;
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const hashPass = (pass, salt) => crypto.scryptSync(pass, Buffer.from(salt, 'hex'), 32, { N: 16384, r: 8, p: 1 }).toString('hex');
export const newPid = () => crypto.randomBytes(15).toString('hex').slice(0, 24);

export class Accounts {
  constructor(dir) { this.dir = dir; this.file = path.join(dir, 'accounts.json'); this.users = {}; this.mtime = -1; this.tries = new Map(); this.sync(); }
  // muat ulang bila berkas diubah dari luar (tools/akun.js)
  sync() {
    let mt = 0;
    try { mt = fs.statSync(this.file).mtimeMs; } catch { /* belum ada */ }
    if (mt === this.mtime) return;
    this.mtime = mt;
    try { this.users = JSON.parse(fs.readFileSync(this.file, 'utf8')).users || {}; } catch (err) { if (err.code !== 'ENOENT') console.error('accounts.json tidak terbaca:', err.message); if (!mt) this.users = {}; }
  }
  save() {
    try {
      fs.mkdirSync(this.dir, { recursive: true });
      const tmp = `${this.file}.${process.pid}.tmp`;
      fs.writeFileSync(tmp, JSON.stringify({ users: this.users }), { mode: 0o600 });
      fs.renameSync(tmp, this.file);
      this.mtime = fs.statSync(this.file).mtimeMs;
    } catch (err) { console.error('gagal menyimpan akun:', err.message); }
  }
  // pembatas percobaan: 8 kali per 10 menit untuk tiap kunci (alamat atau nama)
  limited(key) {
    const now = Date.now(), t = (this.tries.get(key) || []).filter((x) => now - x < 600e3);
    this.tries.set(key, t);
    if (this.tries.size > 5000) for (const [k, v] of this.tries) if (!v.length || now - v[v.length - 1] > 600e3) this.tries.delete(k);
    return t.length >= 8;
  }
  strike(key) { const t = this.tries.get(key) || []; t.push(Date.now()); this.tries.set(key, t); }

  static checkName(name) { return typeof name === 'string' && NAME_RE.test(name) ? null : 'Nama pengguna 3-14 karakter: huruf, angka, atau garis bawah.'; }
  static checkPass(pass) { return typeof pass === 'string' && pass.length >= PASS_MIN && pass.length <= PASS_MAX ? null : `Kata sandi ${PASS_MIN}-${PASS_MAX} karakter.`; }

  static checkMail(mail) { return typeof mail === 'string' && mail.length <= 254 && MAIL_RE.test(mail) ? null : 'Alamat email tidak sah.'; }
  mailTaken(mail, except) { const m = mail.toLowerCase(); return Object.values(this.users).some((u) => u !== except && u.email === m); }
  setMail(name, mail) {
    this.sync();
    const u = this.users[String(name).toLowerCase()]; if (!u) return 'Akun tidak ditemukan.';
    const err = Accounts.checkMail(mail); if (err) return err;
    if (this.mailTaken(mail, u)) return 'Alamat email itu sudah dipakai akun lain.';
    u.email = mail.toLowerCase(); this.save(); return null;
  }
  // Lupa kata sandi: kode 6 angka berlaku 15 menit. Mengembalikan { email, code } hanya bila akun ada dan punya email.
  startReset(name) {
    this.sync();
    const u = typeof name === 'string' ? this.users[name.toLowerCase()] : null;
    if (!u || !u.email) return null;
    const code = String(crypto.randomInt(0, 1e6)).padStart(6, '0');
    u.reset = { h: sha(u.salt + code), exp: Date.now() + CODE_MS, tries: 0 };
    this.save();
    return { email: u.email, code, name: u.name };
  }
  finishReset(name, code, pass) {
    this.sync();
    const u = typeof name === 'string' ? this.users[name.toLowerCase()] : null, bad = { error: 'Kode salah atau sudah kedaluwarsa. Minta kode baru.' };
    const err = Accounts.checkPass(pass); if (err) return { error: err };
    if (!u || !u.reset || u.reset.exp < Date.now()) return bad;
    if (++u.reset.tries > CODE_TRIES) { delete u.reset; this.save(); return bad; }
    if (typeof code !== 'string' || sha(u.salt + code) !== u.reset.h) { this.save(); return bad; }
    delete u.reset;
    u.salt = crypto.randomBytes(16).toString('hex'); u.hash = hashPass(pass, u.salt); u.sessions = [];
    return { token: this.issue(u), name: u.name, pid: u.pid };
  }

  issue(u) {
    const token = crypto.randomBytes(32).toString('base64url');
    u.sessions = (u.sessions || []).filter((s) => s.exp > Date.now()).slice(-(MAX_SESSIONS - 1));
    u.sessions.push({ h: sha(token), exp: Date.now() + SESSION_MS });
    this.save();
    return token;
  }
  // pidHint: id statistik perangkat ini; dipakai bila belum dimiliki akun lain, supaya statistik lama ikut
  register(name, pass, pidHint, pidOk, mail, mailNeeded) {
    this.sync();
    const err = Accounts.checkName(name) || Accounts.checkPass(pass) || (mail || mailNeeded ? Accounts.checkMail(mail) : null);
    if (err) return { error: err };
    if (mail && this.mailTaken(mail)) return { error: 'Alamat email itu sudah dipakai akun lain.' };
    const key = name.toLowerCase();
    if (this.users[key]) return { error: 'Nama pengguna itu sudah dipakai.' };
    const taken = pidHint && Object.values(this.users).some((u) => u.pid === pidHint);
    const salt = crypto.randomBytes(16).toString('hex');
    const u = this.users[key] = { name, salt, hash: hashPass(pass, salt), pid: pidOk && !taken ? pidHint : newPid(), created: Date.now(), sessions: [] };
    if (mail) u.email = mail.toLowerCase();
    return { token: this.issue(u), name: u.name, pid: u.pid };
  }
  login(name, pass) {
    this.sync();
    const u = typeof name === 'string' ? this.users[name.toLowerCase()] : null;
    // tetap menghitung hash walau akun tidak ada, supaya lama respons tidak membocorkan nama mana yang terdaftar
    const got = Buffer.from(hashPass(String(pass || '').slice(0, PASS_MAX), u ? u.salt : '00'.repeat(16)), 'hex');
    const ok = u && crypto.timingSafeEqual(got, Buffer.from(u.hash, 'hex'));
    if (!ok) return { error: 'Nama pengguna atau kata sandi salah.' };
    if (u.banned) return { error: 'Akun ini diblokir. Hubungi pengelola.' };
    return { token: this.issue(u), name: u.name, pid: u.pid };
  }
  byToken(token) {
    if (typeof token !== 'string' || token.length < 20 || token.length > 100) return null;
    this.sync();
    const h = sha(token), now = Date.now();
    for (const u of Object.values(this.users)) if ((u.sessions || []).some((s) => s.h === h && s.exp > now)) return u.banned ? null : u;
    return null;
  }
  logout(token) {
    const u = this.byToken(token); if (!u) return;
    const h = sha(token); u.sessions = u.sessions.filter((s) => s.h !== h); this.save();
  }
  // ---- untuk tools/akun.js ----
  // blokir: tidak bisa masuk; sesi yang ada dimatikan
  ban(name, on) { this.sync(); const u = this.users[String(name).toLowerCase()]; if (!u) return 'Akun tidak ditemukan.'; if (on) { u.banned = true; u.sessions = []; } else delete u.banned; this.save(); return null; }
  find(name) { this.sync(); return this.users[String(name).toLowerCase()] || null; }
  list() { this.sync(); return Object.values(this.users).map((u) => ({ name: u.name, email: u.email || '', pid: u.pid, banned: !!u.banned, created: u.created, sessions: (u.sessions || []).filter((s) => s.exp > Date.now()).length })); }
  setPass(name, pass) {
    this.sync();
    const u = this.users[String(name).toLowerCase()]; if (!u) return 'Akun tidak ditemukan.';
    const err = Accounts.checkPass(pass); if (err) return err;
    u.salt = crypto.randomBytes(16).toString('hex'); u.hash = hashPass(pass, u.salt); u.sessions = []; this.save();
    return null;
  }
  remove(name) { this.sync(); const k = String(name).toLowerCase(); if (!this.users[k]) return 'Akun tidak ditemukan.'; delete this.users[k]; this.save(); return null; }
}
