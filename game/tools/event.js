// Mengatur event dari baris perintah. Server membaca perubahan dalam ~5 detik, tanpa restart.
//   node tools/event.js daftar
//   node tools/event.js mulai <tipe> [menit=60] [nama]        mulai sekarang
//   node tools/event.js jadwal <tipe> <mulai> <selesai> [nama]  mis. 2026-11-21T20:00 2026-11-21T23:00 (WIB)
//   node tools/event.js mingguan <tipe|bergantian> <hari> <jam> [menit=120]   mis. mingguan bergantian sabtu 20:00
//   node tools/event.js hapus-mingguan <id>
//   node tools/event.js hentikan                                akhiri event yang sedang berjalan
//   node tools/event.js cek                                     periksa events.json
// Di Docker: docker compose exec arkana node tools/event.js ...
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { EVENT_TYPES } from '../shared/config.js';
import { validate, readRaw, eventsFile } from '../server/events.js';

const DIR = process.env.DATA_DIR || path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data');
const [cmd, ...a] = process.argv.slice(2);
const wib = (ms) => new Date(ms + 7 * 3600e3).toISOString().slice(0, 19);
const fmt = (ms) => wib(ms).slice(0, 16).replace('T', ' ') + ' WIB';
const die = (m) => { console.error(m); process.exit(1); };
let raw = readRaw(DIR);
if (raw.error) die(`events.json bukan JSON yang sah: ${raw.error}`);
const save = () => { fs.mkdirSync(DIR, { recursive: true }); fs.writeFileSync(eventsFile(DIR), JSON.stringify(raw, null, 2) + '\n'); };
const types = Object.entries(EVENT_TYPES).map(([k, t]) => `${k} (${t.name})`).join(', ');
const newId = (tipe) => `${tipe}-${wib(Date.now()).replace(/[-:T]/g, '').slice(2)}${Math.floor(Math.random() * 90 + 10)}`;
const check = () => { const { errors } = validate(raw); if (errors.length) die('Ditolak:\n  ' + errors.join('\n  ')); };

if (cmd === 'mulai' || cmd === 'jadwal') {
  const tipe = a[0];
  if (!EVENT_TYPES[tipe]) die(`Tipe event: ${types}`);
  let mulai, selesai, nama;
  if (cmd === 'mulai') { const menit = Number(a[1] || 60); if (!(menit >= 1 && menit <= 1440)) die('Lama event 1-1440 menit.'); mulai = wib(Date.now() - 1000); selesai = wib(Date.now() + menit * 60e3); nama = a.slice(2).join(' '); }
  else { [, mulai, selesai] = a; nama = a.slice(3).join(' '); if (!mulai || !selesai) die('Pakai: jadwal <tipe> <mulai> <selesai> [nama], mis. 2026-11-21T20:00 2026-11-21T23:00'); }
  const { list } = validate(raw);
  const now = Date.now();
  if (cmd === 'mulai' && list.some((e) => e.start <= now && now < e.end)) die('Masih ada event yang berjalan. Jalankan "hentikan" dulu.');
  const e = { id: newId(tipe), tipe, mulai, selesai }; if (nama) e.nama = nama;
  raw.push(e); check(); save();
  console.log(`Event "${nama || EVENT_TYPES[tipe].name}" ${cmd === 'mulai' ? 'dimulai' : 'dijadwalkan'}: ${mulai.slice(0, 16).replace('T', ' ')} sampai ${selesai.slice(0, 16).replace('T', ' ')} WIB.`);
} else if (cmd === 'mingguan') {
  const [tipe, hari, jam, menit] = a;
  if (!tipe || !hari || !jam) die('Pakai: mingguan <tipe|bergantian> <hari> <jam> [menit], mis. mingguan bergantian sabtu 20:00 120');
  let n = 1; while (raw.some((e) => e.id === `mingguan-${n}`)) n++;
  raw.push({ id: `mingguan-${n}`, ulang: 'mingguan', tipe, hari: String(hari).toLowerCase(), jam, lama: Number(menit || 120) }); check(); save();
  console.log(`Jadwal mingguan ditambahkan: tiap ${hari} ${jam} WIB, ${menit || 120} menit (${tipe}).`);
} else if (cmd === 'hapus-mingguan') {
  if (!raw.some((e) => e.id === a[0] && e.ulang)) die('Jadwal mingguan tidak ditemukan. Lihat id-nya dengan "daftar".');
  raw = raw.filter((e) => e.id !== a[0]); save(); console.log('Jadwal mingguan dihapus.');
} else if (cmd === 'hentikan') {
  const { list } = validate(raw); const now = Date.now(); const cur = list.find((e) => e.start <= now && now < e.end);
  if (!cur) die('Tidak ada event yang sedang berjalan.');
  if (cur.rule) { const r = raw.find((e) => e.id === cur.rule); r.lewati = [...(r.lewati || []), cur.id.slice(cur.rule.length + 1)].slice(-12); } // kejadian mingguan: lewati minggu ini saja
  else raw.find((e) => e.id === cur.id).selesai = wib(now);
  save();
  console.log(`Event "${cur.name}" dihentikan.`);
} else if (cmd === 'cek' || cmd === 'daftar' || !cmd) {
  const { list, rules, errors } = validate(raw); const now = Date.now();
  for (const r of rules) console.log(`MINGGUAN     [${r.id}]  tiap ${['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'][r.hari]} ${r.jam} WIB, ${r.lama} menit, tipe ${r.tipe}`);
  for (const e of list) console.log(`${e.start <= now && now < e.end ? 'BERJALAN' : e.start > now ? 'akan datang' : 'selesai    '}  ${e.name}  [${e.type}]  ${fmt(e.start)} - ${fmt(e.end)}  target: ${e.target.text}`);
  if (!list.length && !rules.length && !errors.length) console.log(`Belum ada event. Tipe yang tersedia: ${types}`);
  for (const e of errors) console.log('SALAH: ' + e);
  if (errors.length) process.exit(1);
} else die('Perintah: daftar | mulai <tipe> [menit] [nama] | jadwal <tipe> <mulai> <selesai> [nama] | mingguan <tipe|bergantian> <hari> <jam> [menit] | hapus-mingguan <id> | hentikan | cek');
