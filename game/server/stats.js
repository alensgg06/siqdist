// Statistik pemain yang tetap tersimpan antar ronde dan antar restart server.
// Identitas: id acak yang dibuat dan disimpan klien (tanpa akun). id tidak pernah dikirim ke pemain lain.
import fs from 'node:fs';
import path from 'node:path';

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
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.flush(), 1500);
  }
  flush() {
    try {
      fs.mkdirSync(this.dir, { recursive: true });
      const tmp = `${this.file}.${process.pid}.tmp`;
      fs.writeFileSync(tmp, JSON.stringify(this.db));
      fs.renameSync(tmp, this.file); // tulis atomik: file lama tidak pernah setengah tertulis
    } catch (err) { console.error('gagal menyimpan statistik:', err.message); }
  }
  // papan peringkat: hanya nama dan angka, tanpa id
  top() {
    const wk = isoWeek(), all = Object.values(this.db);
    const week = all.filter((s) => s.week === wk && (s.wk.kills || s.wk.wins))
      .sort((a, b) => b.wk.kills - a.wk.kills || b.wk.wins - a.wk.wins).slice(0, 10)
      .map((s) => ({ name: s.name, kills: s.wk.kills, wins: s.wk.wins }));
    const ever = all.filter((s) => s.wins || s.kills).sort((a, b) => b.wins - a.wins || b.kills - a.kills).slice(0, 10)
      .map((s) => ({ name: s.name, wins: s.wins, kills: s.kills }));
    return { week: wk, top: week, ever };
  }
}
