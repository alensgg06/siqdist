// Uji Bertahan Bersama: gelombang dimulai, monster menemukan jalan ke pemain, gelombang bisa diselesaikan,
// pemain yang tumbang bangkit saat gelombang selesai, dan permainan berakhir bila semua tumbang.
import { spawn } from 'node:child_process';
import path from 'node:path';
import WebSocket from 'ws';
import { fileURLToPath } from 'node:url';
import { los, setMap } from '../shared/sim.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8087;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const srv = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT), PVE_BREAK: '2', EVENT_FIRST: '999', DATA_DIR: '/tmp/arkana-pve-test' }, stdio: 'ignore' });
const fail = (m) => { console.error('GAGAL:', m); srv.kill(); process.exit(1); };
for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${PORT}/health`)).ok) break; } catch { /* belum */ } await sleep(100); }
const until = async (fn, ms) => { const t = Date.now(); while (Date.now() - t < ms) { if (fn()) return true; await sleep(50); } return false; };
const c = { ws: new WebSocket(`ws://localhost:${PORT}/ws`), id: 0, w: null, snap: null, roster: [], ev: [], seq: 0 };
c.ws.on('open', () => c.ws.send(JSON.stringify({ t: 'join', name: 'Pahlawan', cls: 'ranger', mode: 'create', gm: 'pve', map: 'ruins', diff: 'easy' })));
c.ws.on('message', (raw) => { const m = JSON.parse(raw); if (m.t === 'w') { c.w = m; c.id = m.id; } else if (m.t === 'r') c.roster = m.l; else if (m.t === 's') { c.snap = m; c.ev.push(...m.e); } });
const me = () => c.snap?.p.find((p) => p[0] === c.id);
const monsters = () => c.snap?.p.filter((p) => p[0] !== c.id && !(p[7] & 1)) || [];
setMap('ruins');
await until(() => c.w, 3000);
if (c.w.gm !== 'pve') fail('room Bertahan Bersama tidak dibuat');

// 1. gelombang 1 dimulai; pemain diam di tempat, monster harus datang sendiri (lewat penghalang)
let fight = false;
const iv = setInterval(() => {
  const m = me(); if (!m) return;
  let best = null, bd = 1e9;
  for (const p of monsters()) { const d = Math.hypot(p[1] - m[1], p[2] - m[2]); if (d < bd && los(m[1], m[2], p[1], p[2])) { bd = d; best = p; } }
  const y = best ? Math.atan2(best[1] - m[1], best[2] - m[2]) : 0;
  c.ws.send(JSON.stringify({ t: 'in', s: ++c.seq, mx: 0, mz: 0, y, f: fight && best ? 1 : 0, k: 0 }));
}, 33);
if (!await until(() => c.ev.some((e) => e[0] === 'W' && e[1] === 1), 6000)) fail('gelombang 1 tidak dimulai');
await until(() => c.roster.some((r) => r[5] && r[7] === 1), 4000);
const mons = c.roster.filter((r) => r[5]);
if (!mons.length || mons.some((r) => r[7] !== 1 || !['ghoul', 'caster', 'brute'].includes(r[2]))) fail(`monster tidak terdaftar dengan benar: ${JSON.stringify(mons)}`);
console.log(`OK gelombang 1: ${mons.length} monster (${[...new Set(mons.map((r) => r[2]))].join(', ')}) di regu lawan.`);
if (!await until(() => c.ev.some((e) => e[0] === 'a'), 25000)) fail('tidak ada monster yang berhasil mencapai pemain (pencarian jalan gagal)');
fight = true; // begitu monster pertama tiba, pemain melawan
console.log('OK monster menemukan jalan ke pemain yang diam dan menyerang dari dekat.');

// 2. pemain melawan sampai gelombang selesai
fight = true;
if (!await until(() => c.ev.some((e) => e[0] === 'w' && e[1] === 1) || c.snap?.st === 1, 60000)) fail(`gelombang 1 tidak selesai; sisa monster ${c.snap?.wv?.[2]}`);
if (c.snap.st === 1) {
  const shots = c.ev.filter((e) => e[0] === 's' && e[2] === c.id).length, hits = c.ev.filter((e) => e[0] === 'd' && e[2] === c.id), taken = c.ev.filter((e) => e[0] === 'd' && e[1] === c.id);
  const killer = c.ev.find((e) => e[0] === 'k' && e[2] === c.id);
  console.error(`diagnosa: peluru ${shots}, kena ${hits.length} (total ${hits.reduce((a, e) => a + e[3], 0)}), kill ${c.ev.filter((e) => e[0] === 'k' && e[1] === c.id).length}; diterima ${taken.length}x total ${taken.reduce((a, e) => a + e[3], 0)}; penumbang ${JSON.stringify(c.roster.find((r) => r[0] === killer?.[1]))}`);
  fail('pemain uji tumbang di gelombang 1 meski melawan (bot Mudah); gelombang terlalu berat?');
}
const hp = me();
if (hp[7] & 1) fail('pemain masih tumbang setelah gelombang selesai');
console.log(`OK gelombang 1 selesai; HP pemain dipulihkan ke ${hp[4]}/${hp[5]}; berikutnya gelombang ${c.snap.wv[0] + 1}.`);

// 3. berhenti melawan: pemain tumbang, tidak bangkit selama gelombang berjalan, permainan berakhir
fight = false;
const n3 = c.ev.length;
if (!await until(() => c.snap?.st === 1, 90000)) fail('permainan tidak berakhir saat satu-satunya pemain tumbang');
const deaths = c.ev.slice(n3).filter((e) => e[0] === 'k' && e[2] === c.id).length;
const seq = c.ev.slice(n3).filter((e) => ['W', 'w'].includes(e[0]) || (e[0] === 'k' && e[2] === c.id) || (e[0] === 'r' && e[1] === c.id)).map((e) => e[0] + (e[0] === 'k' ? '(saya)' : e[0] === 'r' ? '(bangkit)' : e[1])).join(' ');
if (deaths !== 1) console.error('urutan:', seq);
if (deaths !== 1) fail(`pemain tumbang ${deaths} kali; seharusnya tidak bangkit sebelum gelombang selesai`);
console.log(`OK semua pemain tumbang: permainan berakhir di gelombang ${c.snap.wv[0]}.`);
clearInterval(iv); c.ws.close(); srv.kill();
console.log('SEMUA UJI BERTAHAN LULUS');
process.exit(0);
