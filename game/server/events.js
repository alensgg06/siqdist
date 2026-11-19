// Event terjadwal: dibaca dari DATA_DIR/events.json (ditulis tangan atau lewat tools/event.js).
// Waktu tanpa zona dianggap WIB (+07:00).
import fs from 'node:fs';
import path from 'node:path';
import { EVENT_TYPES, EVENT_RULES } from '../shared/config.js';

export function parseTime(v) {
  if (typeof v !== 'string') return NaN;
  return Date.parse(/[zZ]|[+-]\d\d:?\d\d$/.test(v) ? v : v + '+07:00');
}

// Memeriksa satu daftar event mentah. Mengembalikan { list, errors }; entri yang salah dilewati.
export const HARI = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
const WIB = 7 * 3600e3, DAY = 86400e3;
// Memeriksa satu daftar event mentah. Mengembalikan { list, rules, errors }; entri yang salah dilewati.
// Entri biasa: { id, tipe, mulai, selesai }. Entri berulang: { id, ulang: 'mingguan', tipe | 'bergantian', hari, jam, lama }
// menghasilkan satu event tiap minggu (minggu lalu, minggu ini, minggu depan) dengan id "<id>-<tanggal>".
export function validate(raw, now = Date.now()) {
  const errors = [], list = [], rules = [], seen = new Set();
  if (!Array.isArray(raw)) return { list, rules, errors: ['Isi events.json harus berupa daftar [ ... ].'] };
  const build = (id, tipe, start, end, e, at, rule) => {
    const tpl = EVENT_TYPES[tipe];
    const evRules = e.aturan === undefined ? tpl.rules : e.aturan;
    if (!Array.isArray(evRules) || evRules.some((r) => !EVENT_RULES[r])) { errors.push(`${at}: "aturan" hanya boleh berisi ${Object.keys(EVENT_RULES).join(', ')}.`); return false; }
    const n = e.target === undefined ? tpl.target.n : e.target;
    if (!Number.isInteger(n) || n < 1 || n > 999) { errors.push(`${at}: "target" harus bilangan bulat 1-999.`); return false; }
    list.push({
      id, type: tipe, name: String(e.nama || tpl.name).slice(0, 40), desc: tpl.desc, mode: tpl.mode, rules: evRules, start, end, rule: rule || null,
      target: { type: tpl.target.type, n, text: tpl.target.text.replace(String(tpl.target.n), String(n)) }, skin: tpl.skin,
    });
    return true;
  };
  raw.forEach((e, i) => {
    const at = `event ke-${i + 1}${e && e.id ? ` ("${e.id}")` : ''}`;
    if (!e || typeof e !== 'object') return errors.push(`${at}: bukan objek.`);
    if (!/^[a-z0-9-]{1,40}$/.test(e.id || '')) return errors.push(`${at}: "id" wajib, huruf kecil/angka/tanda hubung.`);
    if (seen.has(e.id)) return errors.push(`${at}: id ganda.`);
    if (e.ulang !== undefined) {
      if (e.ulang !== 'mingguan') return errors.push(`${at}: "ulang" hanya boleh "mingguan".`);
      const types = Object.keys(EVENT_TYPES);
      if (e.tipe !== 'bergantian' && !EVENT_TYPES[e.tipe]) return errors.push(`${at}: "tipe" harus bergantian atau salah satu dari ${types.join(', ')}.`);
      const hari = typeof e.hari === 'number' ? e.hari : HARI.indexOf(String(e.hari || '').toLowerCase());
      if (!(Number.isInteger(hari) && hari >= 0 && hari <= 6)) return errors.push(`${at}: "hari" harus salah satu dari ${HARI.join(', ')}.`);
      const jm = /^([01]?\d|2[0-3]):([0-5]\d)$/.exec(e.jam || '');
      if (!jm) return errors.push(`${at}: "jam" harus berbentuk 20:00.`);
      const lama = e.lama === undefined ? 120 : e.lama;
      if (!Number.isInteger(lama) || lama < 10 || lama > 1440) return errors.push(`${at}: "lama" (menit) harus 10-1440.`);
      const skip = Array.isArray(e.lewati) ? e.lewati : [];
      // awal hari ini menurut WIB, lalu geser ke hari yang diminta di tiga minggu
      const day0 = Math.floor((now + WIB) / DAY) * DAY - WIB, dow = new Date(now + WIB).getUTCDay();
      let ok = true;
      for (const k of [-1, 0, 1]) {
        const start = day0 + (hari - dow + 7 * k) * DAY + (Number(jm[1]) * 60 + Number(jm[2])) * 60e3, key = new Date(start + WIB).toISOString().slice(0, 10).replace(/-/g, '');
        if (skip.includes(key)) continue;
        // bergantian: minggu genap dan ganjil memakai tipe yang berbeda
        const tipe = e.tipe === 'bergantian' ? types[Math.floor((start + WIB) / (7 * DAY)) % types.length] : e.tipe;
        ok = build(`${e.id}-${key}`, tipe, start, start + lama * 60e3, e.tipe === 'bergantian' ? { ...e, nama: e.nama, target: undefined } : e, at, e.id) && ok;
        if (!ok) break;
      }
      if (ok) { seen.add(e.id); rules.push({ id: e.id, tipe: e.tipe, hari, jam: `${jm[1].padStart(2, '0')}:${jm[2]}`, lama, nama: e.nama || '' }); }
      return undefined;
    }
    const tpl = EVENT_TYPES[e.tipe];
    if (!tpl) return errors.push(`${at}: "tipe" harus salah satu dari ${Object.keys(EVENT_TYPES).join(', ')}.`);
    const start = parseTime(e.mulai), end = parseTime(e.selesai);
    if (!Number.isFinite(start) || !Number.isFinite(end)) return errors.push(`${at}: "mulai"/"selesai" harus berbentuk 2026-11-21T20:00.`);
    if (end <= start) return errors.push(`${at}: "selesai" harus setelah "mulai".`);
    if (build(e.id, e.tipe, start, end, e, at)) seen.add(e.id);
    return undefined;
  });
  return { list, rules, errors };
}

export function eventsFile(dir) { return path.join(dir, 'events.json'); }
export function readRaw(dir) {
  try { return JSON.parse(fs.readFileSync(eventsFile(dir), 'utf8')); } catch (err) { return err.code === 'ENOENT' ? [] : { error: err.message }; }
}

export class Events {
  constructor(dir) { this.dir = dir; this.list = []; this.rules = []; this.mtime = -1; this.regenAt = 0; this.reload(); this.timer = setInterval(() => this.reload(), 5000); this.timer.unref?.(); }
  reload() {
    let mt = 0;
    try { mt = fs.statSync(eventsFile(this.dir)).mtimeMs; } catch { /* belum ada file */ }
    // event mingguan dihitung dari tanggal hari ini, jadi daftar dibuat ulang tiap jam walau berkas tidak berubah
    if (mt === this.mtime && Date.now() < this.regenAt) return;
    const fresh = mt !== this.mtime;
    this.mtime = mt; this.regenAt = Date.now() + 3600e3;
    const raw = readRaw(this.dir);
    if (raw.error) { console.error('events.json tidak terbaca (bukan JSON yang sah):', raw.error); this.list = []; return; }
    const { list, rules, errors } = validate(raw);
    if (fresh) for (const e of errors) console.error('events.json:', e);
    this.list = list; this.rules = rules;
    if (fresh && list.length) console.log(`events.json dimuat: ${list.length} event.`);
  }
  // ---- dipakai halaman admin: menulis events.json lalu memuat ulang ----
  write(raw) { fs.mkdirSync(this.dir, { recursive: true }); fs.writeFileSync(eventsFile(this.dir), JSON.stringify(raw, null, 2) + '\n'); this.mtime = -1; this.reload(); }
  // mulai/selesai: milidetik. Mengembalikan pesan galat atau null.
  add(tipe, start, end, nama, target) {
    this.reload();
    const raw = readRaw(this.dir); if (raw.error) return 'events.json rusak; perbaiki dulu berkasnya.';
    if (!EVENT_TYPES[tipe]) return 'Tipe event tidak dikenal.';
    if (this.list.some((e) => start < e.end && e.start < end)) return 'Waktunya bertabrakan dengan event lain.';
    const wib = (ms) => new Date(ms + 7 * 3600e3).toISOString().slice(0, 19);
    const e = { id: `${tipe}-${wib(start).replace(/[-:T]/g, '').slice(2)}${Math.floor(Math.random() * 90 + 10)}`, tipe, mulai: wib(start), selesai: wib(end) };
    if (nama) e.nama = String(nama).slice(0, 40);
    if (target !== undefined && target !== null && target !== '') e.target = Number(target);
    const { errors } = validate([...raw, e]);
    if (errors.length) return errors[errors.length - 1];
    this.write([...raw, e]); return null;
  }
  // jadwal mingguan. hari: 0 (Minggu) sampai 6 (Sabtu). Mengembalikan pesan galat atau null.
  addWeekly(tipe, hari, jam, lama, nama) {
    this.reload();
    const raw = readRaw(this.dir); if (raw.error) return 'events.json rusak; perbaiki dulu berkasnya.';
    let n = 1; while (raw.some((e) => e.id === `mingguan-${n}`)) n++;
    const e = { id: `mingguan-${n}`, ulang: 'mingguan', tipe, hari: Number(hari), jam: String(jam || ''), lama: Number(lama) };
    if (nama) e.nama = String(nama).slice(0, 40);
    const before = validate(raw).errors.length, { errors } = validate([...raw, e]);
    if (errors.length > before) return errors[errors.length - 1];
    this.write([...raw, e]); return null;
  }
  removeRule(id) {
    this.reload();
    const raw = readRaw(this.dir); if (raw.error) return 'events.json rusak; perbaiki dulu berkasnya.';
    if (!raw.some((e) => e.id === id && e.ulang)) return 'Jadwal mingguan tidak ditemukan.';
    this.write(raw.filter((e) => e.id !== id)); return null;
  }
  // menghentikan event berjalan, atau membatalkan event yang belum mulai
  end(id) {
    this.reload();
    const raw = readRaw(this.dir); if (raw.error) return 'events.json rusak; perbaiki dulu berkasnya.';
    const cur = this.list.find((e) => e.id === id), now = Date.now(); if (!cur) return 'Event tidak ditemukan.';
    if (cur.end <= now) return 'Event itu sudah selesai.';
    const wib = (ms) => new Date(ms + 7 * 3600e3).toISOString().slice(0, 19);
    if (cur.rule) { // kejadian dari jadwal mingguan: hanya minggu itu yang dilewati, jadwalnya tetap
      const r = raw.find((e) => e.id === cur.rule); r.lewati = [...(r.lewati || []), id.slice(cur.rule.length + 1)].slice(-12); this.write(raw);
    } else if (cur.start > now) this.write(raw.filter((e) => e.id !== id)); else { raw.find((e) => e.id === id).selesai = wib(now); this.write(raw); }
    return null;
  }
  active(now = Date.now()) { return this.list.find((e) => e.start <= now && now < e.end) || null; }
  next(now = Date.now()) { return this.list.filter((e) => e.start > now).sort((a, b) => a.start - b.start)[0] || null; }
  last(now = Date.now()) { return this.list.filter((e) => e.end <= now && now - e.end < 7 * 86400e3).sort((a, b) => b.end - a.end)[0] || null; }
}
