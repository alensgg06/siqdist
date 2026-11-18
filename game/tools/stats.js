// Ringkasan catatan pertandingan:  node tools/stats.js [path/matches.jsonl]
// Di Docker:  docker compose exec arkana node tools/stats.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const file = process.argv[2] || path.join(process.env.DATA_DIR || path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data'), 'matches.jsonl');
if (!fs.existsSync(file)) { console.log(`Belum ada catatan di ${file}. Mainkan satu ronde sampai selesai dulu.`); process.exit(0); }
const matches = fs.readFileSync(file, 'utf8').split('\n').filter(Boolean).map((l) => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean);

const avg = (a) => (a.length ? a.reduce((s, v) => s + v, 0) / a.length : null);
const fmt = (v, d = 0) => (v == null ? '-' : v.toFixed(d));
const pct = (a, b) => (b ? Math.round((a / b) * 100) + '%' : '-');

const humans = matches.flatMap((m) => m.players.filter((p) => !p.bot));
const all = matches.flatMap((m) => m.players);
const left = matches.flatMap((m) => m.left || []);
console.log(`Pertandingan selesai : ${matches.length} (${matches.filter((m) => m.room === 'privat').length} privat)`);
console.log(`Rata-rata durasi     : ${fmt(avg(matches.map((m) => m.secs)) / 60, 1)} menit`);
console.log(`Pemain manusia       : ${new Set(humans.map((p) => p.name)).size} nama unik, ${humans.length} kali main`);
console.log(`Keluar di tengah     : ${left.length} (${pct(left.length, humans.length + left.length)} dari sesi manusia)`);
const pings = humans.map((p) => p.ping).filter((v) => v != null).sort((a, b) => a - b);
const fps = humans.map((p) => p.fps).filter((v) => v != null).sort((a, b) => a - b);
console.log(`Ping manusia         : median ${pings.length ? pings[pings.length >> 1] : '-'} ms, terburuk ${pings.at(-1) ?? '-'} ms`);
console.log(`FPS manusia          : median ${fps.length ? fps[fps.length >> 1] : '-'}, terendah ${fps[0] ?? '-'}  (di bawah 30 = HP kewalahan)`);

console.log('\nKeseimbangan kelas (semua pemain termasuk bot):');
console.log('kelas      main  kill/main  gugur/main  K/D   damage/main  menang');
for (const cls of ['ranger', 'mage', 'guardian']) {
  const ps = all.filter((p) => p.cls === cls);
  const k = ps.reduce((s, p) => s + p.kills, 0), d = ps.reduce((s, p) => s + p.deaths, 0), dm = ps.reduce((s, p) => s + (p.dmg || 0), 0);
  const wins = matches.filter((m) => m.players.find((p) => p.name === m.winner)?.cls === cls).length;
  console.log(`${cls.padEnd(10)} ${String(ps.length).padStart(4)}  ${fmt(ps.length ? k / ps.length : null, 1).padStart(9)}  ${fmt(ps.length ? d / ps.length : null, 1).padStart(10)}  ${fmt(d ? k / d : null, 2).padStart(4)}  ${fmt(ps.length ? dm / ps.length : null, 0).padStart(11)}  ${pct(wins, matches.length).padStart(6)}`);
}
console.log('\nCatatan: dengan sedikit pertandingan angka ini masih acak; tunggu minimal ~20 ronde sebelum mengubah keseimbangan.');
