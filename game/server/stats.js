// Statistik pemain yang tetap tersimpan antar ronde dan antar restart server.
// Identitas: id acak yang dibuat dan disimpan klien (tanpa akun). id tidak pernah dikirim ke pemain lain.
import fs from 'node:fs';
import path from 'node:path';
import { CHALLENGES } from '../shared/config.js';

export function isoWeek(d = new Date()) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y = t.getUTCFullYear(), w = Math.ceil(((t - Date.UTC(y, 0, 1)) / 86400000 + 1) / 7);
  return `${y}-W${String(w).padStart(2, '0')}`;
}

export class Stats {
  constructor(dir) {
    this.file = path.join(dir, 'players.json');
    this.dir = dir;
    this.db = {};
    try { this.db = JSON.parse(fs.readFileSync(this.file, 'utf8')); } catch { /* belum ada */ }
    this.timer = null;
  }
  validId(pid) { return typeof pid === 'string' && /^[a-z0-9]{16,40}$/.test(pid); }
  get(pid) { return this.validId(pid) ? this.db[pid] || null : null; }
  touch(pid, name) {
    if (!this.validId(pid)) return null;
    const wk = isoWeek();
    const s = this.db[pid] ||= { name, kills: 0, deaths: 0, wins: 0, matches: 0, dmg: 0, cls: {}, week: wk, wk: { kills: 0, wins: 0 } };
    s.name = name;
    if (s.week !== wk) { s.week = wk; s.wk = { kills: 0, wins: 0 }; }
    return s;
  }
  // tambahkan hasil satu sesi bermain (ronde selesai atau keluar di tengah)
  add(pid, name, r) {
    const s = this.touch(pid, name);
    if (!s) return;
    s.kills += r.kills; s.deaths += r.deaths; s.dmg += r.dmg;
    s.wk.kills += r.kills;
    s.cls[r.cls] = (s.cls[r.cls] || 0) + 1;
    if (r.finished) s.matches++;
    if (r.win) { s.wins++; s.wk.wins++; }
    this.save();
  }
  save() {
    // jangan mengulur timer yang sudah berjalan: perubahan beruntun (mis. poin raja tiap detik) tetap tersimpan
    if (this.timer) return;
    this.timer = setTimeout(() => this.flush(), 1500);
  }
  flush() {
    clearTimeout(this.timer); this.timer = null;
    try {
      fs.mkdirSync(this.dir, { recursive: true });
      const tmp = `${this.file}.${process.pid}.tmp`;
      fs.writeFileSync(tmp, JSON.stringify(this.db));
      fs.renameSync(tmp, this.file); // tulis atomik: file lama tidak pernah setengah tertulis
    } catch (err) { console.error('gagal menyimpan statistik:', err.message); }
  }
  bump(pid, name, field, n = 1) { const s = this.touch(pid, name); if (!s) return; s[field] = (s[field] || 0) + n; this.save(); }
  // gelombang Bertahan Bersama terbaik (sepanjang masa dan minggu ini)
  wave(pid, name, cleared) {
    const s = this.touch(pid, name); if (!s) return;
    s.bestWave = Math.max(s.bestWave || 0, cleared); s.wk.wave = Math.max(s.wk.wave || 0, cleared);
    this.save();
  }

  // ---- event ----
  eventAttend(pid, name, ev) {
    const s = this.touch(pid, name); if (!s) return;
    s.ev ||= {};
    if (!s.ev[ev.id]) { s.ev[ev.id] = { score: 0, done: false }; s.evAttend = (s.evAttend || 0) + 1; this.save(); }
  }
  // how: 'max' (nilai terbaik) atau 'add' (dijumlah). Mengembalikan true bila target baru saja tercapai.
  eventScore(pid, name, ev, how, v) {
    const s = this.touch(pid, name); if (!s) return false;
    s.ev ||= {}; const e = s.ev[ev.id] ||= { score: 0, done: false };
    e.score = how === 'max' ? Math.max(e.score, v) : e.score + v;
    let hit = false;
    if (!e.done && e.score >= ev.target.n) { e.done = true; s['ev_' + ev.type] = 1; hit = true; }
    this.save();
    return hit;
  }
  eventTop(id, n = 10) {
    return Object.values(this.db).filter((s) => s.ev?.[id]?.score > 0).sort((a, b) => b.ev[id].score - a.ev[id].score).slice(0, n).map((s) => ({ name: s.name, score: s.ev[id].score, done: s.ev[id].done }));
  }

  // tantangan harian: 3 tantangan yang sama untuk semua pemain, dipilih dari tanggal (zona WIB)
  static today() { return new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 10); }
  static daily(date = Stats.today()) {
    let h = 0; for (const c of date) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    const pool = CHALLENGES.slice(), out = [];
    while (out.length < 3) { h = (h * 1103515245 + 12345) >>> 0; out.push(pool.splice(h % pool.length, 1)[0]); }
    return out;
  }
  dayOf(s) {
    const d = Stats.today();
    if (!s.day || s.day.date !== d) s.day = { date: d, p: [0, 0, 0], done: [false, false, false] };
    return s.day;
  }
  // catat kemajuan; mengembalikan teks tantangan yang baru saja selesai (bila ada)
  progress(pid, name, ev) {
    const s = this.touch(pid, name);
    if (!s) return [];
    const day = this.dayOf(s), done = [];
    Stats.daily(day.date).forEach((c, i) => {
      if (day.done[i] || c.type !== ev.type) return;
      if (c.cls && c.cls !== ev.cls) return;
      if (c.mode && !(c.mode === ev.mode || (c.mode === 'team' && (ev.mode === 'tdm' || ev.mode === 'coop')))) return;
      day.p[i] = Math.min(c.n, day.p[i] + (ev.n || 1));
      if (day.p[i] >= c.n) { day.done[i] = true; s.chal = (s.chal || 0) + 1; done.push(c.text); }
    });
    this.save();
    return done;
  }
  dailyFor(pid) {
    const s = this.get(pid), date = Stats.today(), list = Stats.daily(date);
    const day = s?.day?.date === date ? s.day : { p: [0, 0, 0], done: [false, false, false] };
    return list.map((c, i) => ({ text: c.text, n: c.n, p: day.p[i], done: day.done[i] }));
  }

  // papan peringkat: hanya nama dan angka, tanpa id
  top() {
    const wk = isoWeek(), all = Object.values(this.db);
    const week = all.filter((s) => s.week === wk && (s.wk.kills || s.wk.wins))
      .sort((a, b) => b.wk.kills - a.wk.kills || b.wk.wins - a.wk.wins).slice(0, 10)
      .map((s) => ({ name: s.name, kills: s.wk.kills, wins: s.wk.wins }));
    const ever = all.filter((s) => s.wins || s.kills).sort((a, b) => b.wins - a.wins || b.kills - a.kills).slice(0, 10)
      .map((s) => ({ name: s.name, wins: s.wins, kills: s.kills }));
    const waves = all.filter((s) => s.week === wk && s.wk.wave).sort((a, b) => b.wk.wave - a.wk.wave).slice(0, 10).map((s) => ({ name: s.name, wave: s.wk.wave }));
    return { week: wk, top: week, ever, waves };
  }
}
