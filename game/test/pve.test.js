// Uji Bertahan Bersama: gelombang pemanasan, bot sekutu, aba-aba serangan, Berkah, nyawa cadangan,
// menolong rekan, titik simpan, dan catatan sesi (termasuk yang ditinggalkan).
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import WebSocket from 'ws';
import { fileURLToPath } from 'node:url';
import { los, setMap } from '../shared/sim.js';
import { navStep } from './nav.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8087, PORT2 = 8086, MAP = process.env.MAP || 'ruins';
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), 'arkana-pve-'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const env = { ...process.env, PVE_BREAK: '2', PVE_PERK_BREAK: '4', PVE_CHECKPOINT: '1', EVENT_FIRST: '999', END_TIME: '2', DATA_DIR: DATA };
// server 1: aturan biasa (dengan bot sekutu). server 2: tanpa sekutu, agar tahap tumbang/ditolong/titik simpan bisa diuji
const srv = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...env, PORT: String(PORT) }, stdio: ['ignore', 'ignore', 'inherit'] });
const srv2 = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...env, PORT: String(PORT2), PVE_ALLIES: '0', PVE_DMG_MUL: '3', DATA_DIR: DATA + '/2' }, stdio: ['ignore', 'ignore', 'inherit'] });
const fail = (m) => { console.error('GAGAL:', m); srv.kill(); srv2.kill(); process.exit(1); };
for (const port of [PORT, PORT2]) for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${port}/health`)).ok) break; } catch { /* belum */ } await sleep(100); }
const until = async (fn, ms) => { const t = Date.now(); while (Date.now() - t < ms) { if (fn()) return true; await sleep(50); } return false; };
setMap(MAP);
function client(join, port = PORT) {
  const c = { ws: new WebSocket(`ws://localhost:${port}/ws`), id: 0, w: null, snap: null, roster: [], ev: [], evT: [], seq: 0, fight: false, follow: null, nav: {} };
  c.ws.on('open', () => c.ws.send(JSON.stringify({ t: 'join', cls: 'ranger', ...join })));
  c.ws.on('message', (raw) => {
    const m = JSON.parse(raw);
    if (m.t === 'w') { c.w = m; c.id = m.id; } else if (m.t === 'r') c.roster = m.l;
    else if (m.t === 's') { if (m.st === 1 && c.snap?.st === 0) c.ends = (c.ends || 0) + 1; c.snap = m; for (const e of m.e) { c.ev.push(e); c.evT.push(Date.now()); if (e[0] === 'W') (c.waveSize ||= {})[e[1]] = m.wv[2]; } }
  });
  c.me = () => c.snap?.p.find((p) => p[0] === c.id);
  c.iv = setInterval(() => {
    const m = c.me(); if (!m || (m[7] & 1)) return;
    let mx = 0, mz = 0;
    if (c.follow) { const o = c.snap.p.find((p) => p[0] === c.follow.id); if (o && Math.hypot(o[1] - m[1], o[2] - m[2]) > 1.2) [mx, mz] = navStep(c.nav, m[1], m[2], o[1], o[2]); }
    let best = null, bd = 1e9;
    const mons = new Set(c.roster.filter((r) => ['ghoul', 'caster', 'brute'].includes(r[2])).map((r) => r[0]));
    for (const p of c.snap.p) { if (!mons.has(p[0]) || (p[7] & 1)) continue; const d = Math.hypot(p[1] - m[1], p[2] - m[2]); if (d < bd && los(m[1], m[2], p[1], p[2])) { bd = d; best = p; } }
    const y = best ? Math.atan2(best[1] - m[1], best[2] - m[2]) : 0;
    c.ws.send(JSON.stringify({ t: 'in', s: ++c.seq, mx, mz, y, f: c.fight && best ? 1 : 0, k: 0 }));
  }, 33);
  return c;
}

// ---------- 1. pemanasan, sekutu, aba-aba ----------
const A = client({ name: 'Pahlawan', mode: 'create', gm: 'pve', map: MAP, diff: 'normal' });
await until(() => A.w && A.roster.length, 3000);
if (A.w.gm !== 'pve') fail('room Bertahan Bersama tidak dibuat');
const allies = A.roster.filter((r) => r[5] && r[7] === 0);
if (allies.length !== 2) fail(`seharusnya 2 bot sekutu untuk pemain solo, dapat ${allies.length}`);
console.log(`OK pemain solo ditemani ${allies.length} bot sekutu (${allies.map((r) => r[2]).join(', ')}).`);
if (!await until(() => A.ev.some((e) => e[0] === 'W' && e[1] === 1), 6000)) fail('gelombang 1 tidak dimulai');
const w1 = A.waveSize?.[1];
if (w1 !== 2) fail(`gelombang 1 untuk pemain solo seharusnya 2 monster, dapat ${w1}`);
console.log('OK gelombang pemanasan: 2 monster untuk pemain solo.');
// ---------- 2. selesaikan gelombang: Berkah ditawarkan dan dipilih ----------
A.fight = true;
if (!await until(() => A.ev.some((e) => e[0] === 'w' && e[1] === 1), 60000)) fail('gelombang 1 tidak selesai');
if (!await until(() => A.ev.some((e) => e[0] === 'P' && e[1] === A.id), 2000)) fail('Berkah tidak ditawarkan');
const offer = A.ev.find((e) => e[0] === 'P' && e[1] === A.id)[2];
if (offer.length !== 3) fail(`seharusnya 3 pilihan Berkah: ${offer}`);
const hp0 = A.me()[5];
const pick = offer.includes('kokoh') ? 'kokoh' : offer[0];
A.ws.send(JSON.stringify({ t: 'perk', id: 'palsu' })); // pilihan yang tidak ditawarkan harus diabaikan
A.ws.send(JSON.stringify({ t: 'perk', id: pick }));
if (!await until(() => A.ev.some((e) => e[0] === 'p' && e[1] === A.id && e[2] === pick), 2000)) fail('pilihan Berkah tidak diterapkan');
await sleep(150);
if (!String(A.snap.me[11]).includes(pick + '1')) fail(`Berkah tidak tersimpan: ${A.snap.me[11]}`);
if (A.snap.me[11].includes('palsu')) fail('Berkah palsu diterima');
if (pick === 'kokoh' && A.me()[5] !== hp0 + 25) fail(`Kokoh tidak menambah HP maksimal: ${hp0} -> ${A.me()[5]}`);
console.log(`OK Berkah: ditawarkan ${offer.join(', ')}; dipilih ${pick}${pick === 'kokoh' ? ` (HP maks ${hp0} -> ${A.me()[5]})` : ''}.`);

// ---------- 3. menolong rekan dan nyawa cadangan (server tanpa sekutu) ----------
clearInterval(A.iv); A.ws.close();
const P = client({ name: 'Pahlawan', mode: 'create', gm: 'pve', map: MAP, diff: 'hard' }, PORT2);
await until(() => P.w, 3000);
const B = client({ name: 'Rekan', mode: 'join', code: P.w.code }, PORT2);
await until(() => B.w, 3000);
P.fight = true; B.fight = true;
if (!await until(() => P.ev.some((e) => e[0] === 'w' && e[1] === 1), 60000)) fail('gelombang 1 (server 2) tidak selesai');
if (!await until(() => P.ev.some((e) => e[0] === 'W' && e[1] === 2), 15000)) fail('gelombang 2 tidak dimulai');
B.fight = false;
// A berhenti melawan dan mendekati monster sampai tumbang; nyawa cadangan harus membangkitkannya sendiri
P.fight = false;
const nA = P.ev.length;
const chase = setInterval(() => { const mon = P.snap?.p.find((p) => P.roster.some((r) => r[0] === p[0] && ['ghoul', 'caster'].includes(r[2])) && !(p[7] & 1)); P.follow = mon ? { id: mon[0] } : null; }, 300);
if (!await until(() => P.ev.slice(nA).some((e) => e[0] === 'k' && e[2] === P.id), 60000)) fail('pemain uji tidak tumbang');
if (!await until(() => P.ev.slice(nA).some((e) => e[0] === 'v' && e[1] === P.id && e[2] === P.id), 7000)) fail('nyawa cadangan tidak membangkitkan pemain');
console.log('OK nyawa cadangan: tumbang lalu bangkit sendiri setelah ~4 dtk.');
const waveKey = () => `${P.ends || 0}:${P.snap.wv[0]}`; // ronde baru (setelah semua tumbang) juga memberi nyawa cadangan baru
let spareWave = waveKey(); // nyawa cadangan sudah terpakai di gelombang ini
// tumbang lagi (nyawa cadangan habis): Rekan langsung mendekat dan harus membangkitkannya.
// Bila gelombang keburu selesai (pemain bangkit karena akhir gelombang), ulangi di gelombang berikutnya.
let rescued = false;
for (let attempt = 0; attempt < 5 && !rescued; attempt++) {
  const nB = P.ev.length;
  if (!await until(() => P.ev.slice(nB).some((e) => e[0] === 'k' && e[2] === P.id), 60000)) fail('pemain uji tidak tumbang untuk kedua kalinya');
  B.follow = { id: P.id }; B.fight = true;
  await until(() => P.ev.slice(nB).some((e) => (e[0] === 'v' && e[2] === P.id) || e[0] === 'w'), 30000);
  const ev = P.ev.slice(nB);
  if (ev.some((e) => e[0] === 'v' && e[1] === P.id && e[2] === P.id)) {
    if (waveKey() === spareWave) { console.error('urutan:', P.ev.filter((e) => ['W', 'w', 'v'].includes(e[0]) || (e[0] === 'k' && e[2] === P.id)).map((e) => e[0] + JSON.stringify(e.slice(1))).join(' '), '| kunci', spareWave, waveKey(), 'wv', JSON.stringify(P.snap.wv)); fail('bangkit sendiri dua kali dalam satu gelombang'); }
    spareWave = waveKey(); continue; // gelombang baru memberi nyawa cadangan baru: coba lagi
  }
  rescued = ev.some((e) => e[0] === 'v' && e[1] === B.id && e[2] === P.id);
  B.follow = null; B.fight = false;
}
clearInterval(chase); P.follow = null;
if (!rescued) fail('Rekan tidak berhasil menolong dalam 5 percobaan');
console.log('OK menolong rekan: Rekan berdiri di dekat pemain yang tumbang dan membangkitkannya.');
// setiap pukulan monster (a) harus didahului aba-aba (P) dari monster yang sama, minimal 0,4 dtk sebelumnya
const hits = P.ev.map((e, i) => [e, i]).filter(([e]) => e[0] === 'a');
if (!hits.length) fail('tidak ada pukulan monster yang teramati');
for (const [e, i] of hits) {
  let j = i - 1; while (j >= 0 && !(P.ev[j][0] === 'A' && P.ev[j][1] === e[1])) j--;
  if (j < 0) fail('monster memukul tanpa aba-aba');
  if (P.evT[i] - P.evT[j] < 380) fail(`aba-aba terlalu singkat: ${P.evT[i] - P.evT[j]} ms`);
}
console.log(`OK aba-aba: ${hits.length} pukulan, semuanya didahului aba-aba >= 0,4 dtk.`);

// ---------- 4. titik simpan dan catatan ----------
P.fight = true; B.fight = true;
if (!await until(() => P.ev.some((e) => e[0] === 'w' && e[1] === 2), 90000)) fail('gelombang 2 tidak selesai');
{ const we = P.ev.find((e) => e[0] === 'w' && e[1] === 2); if (we[2] !== 2) fail(`titik simpan tidak tercatat: ${JSON.stringify(we)}; semua w: ${JSON.stringify(P.ev.filter((e) => e[0] === 'w'))}`); }
// Rekan keluar (agar tidak saling menolong tanpa henti); pemain berhenti melawan dan mendekati monster sampai permainan berakhir
clearInterval(B.iv); B.ws.close(); await sleep(300);
P.fight = false;
const chase2 = setInterval(() => { for (const c of [P]) { const mon = c.snap?.p.find((p) => c.roster.some((r) => r[0] === p[0] && ['ghoul', 'caster'].includes(r[2])) && !(p[7] & 1)); c.follow = mon ? { id: mon[0] } : null; } }, 300);
if (!await until(() => P.snap?.st === 1, 150000)) fail('permainan tidak berakhir saat semua tumbang');
clearInterval(chase2); P.follow = B.follow = null;
if (!await until(() => P.snap?.st === 0, 6000)) fail('ronde baru tidak dimulai');
await sleep(300);
const lastCk = P.ev.filter((e) => e[0] === 'w').at(-1)[2];
if (lastCk < 2 || P.snap.wv[0] !== lastCk) fail(`ronde baru seharusnya lanjut dari titik simpan gelombang ${lastCk}, tercatat ${P.snap.wv[0]}`);
console.log(`OK titik simpan: setelah kalah, ronde baru lanjut dari titik simpan gelombang ${P.snap.wv[0]} (berikutnya ${P.snap.wv[0] + 1}).`);
const log = fs.readFileSync(path.join(DATA, '2', 'matches.jsonl'), 'utf8').trim().split('\n').map((l) => JSON.parse(l)).filter((r) => r.mode === 'pve');
const over = log.find((r) => !r.abandoned);
if (!over || over.wave < 3 || !over.deaths?.length || over.deaths.some((d) => !d.by || typeof d.behind !== 'boolean')) fail(`catatan sesi tidak lengkap: ${JSON.stringify(over)}`);
console.log(`OK catatan sesi: gelombang ${over.wave}, ${over.deaths.length} kali tumbang (penyebab: ${[...new Set(over.deaths.map((d) => d.by))].join(', ')}; dari belakang ${over.deaths.filter((d) => d.behind).length}x).`);
// ditinggalkan di tengah: tetap tercatat
P.ws.close(); B.ws.close();
await sleep(500);
const log2 = fs.readFileSync(path.join(DATA, '2', 'matches.jsonl'), 'utf8').trim().split('\n').map((l) => JSON.parse(l)).filter((r) => r.mode === 'pve');
if (!log2.some((r) => r.abandoned)) fail('sesi yang ditinggalkan tidak tercatat');
console.log('OK sesi yang ditinggalkan di tengah gelombang tetap tercatat.');
clearInterval(P.iv); clearInterval(B.iv);
srv.kill('SIGTERM'); srv2.kill('SIGTERM'); await Promise.all([srv, srv2].map((p) => new Promise((r) => p.once('exit', r))));
fs.rmSync(DATA, { recursive: true, force: true });
console.log('SEMUA UJI BERTAHAN LULUS');
process.exit(0);
