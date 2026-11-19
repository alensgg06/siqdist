// Uji Event: jadwal dari events.json, room event bersama, Perburuan Raja (mahkota, poin, hadiah),
// Malam Golem (bos tiap 3 gelombang, Dua Berkah), papan peringkat event, dan event dihentikan.
import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import WebSocket from 'ws';
import { fileURLToPath } from 'node:url';
import { los, setMap } from '../shared/sim.js';
import { wavePlan } from '../shared/config.js';
import { validate } from '../server/events.js';
import { navStep } from './nav.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const PK = 8082, PG = 8081;
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), 'arkana-ev-'));
const DK = DATA + '/k', DG = DATA + '/g';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const base = { ...process.env, ARKANA_AUTH: 'off', MUTATOR: 'none', EVENT_FIRST: '999', END_TIME: '2' };
const sk = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...base, PORT: String(PK), DATA_DIR: DK, BOTS: '0' }, stdio: ['ignore', 'ignore', 'inherit'] });
const sg = spawn(process.execPath, ['server/server.js'], { cwd: ROOT, env: { ...base, PORT: String(PG), DATA_DIR: DG, PVE_BREAK: '2', PVE_PERK_BREAK: '6' }, stdio: ['ignore', 'ignore', 'inherit'] });
const done = () => { sk.kill(); sg.kill(); fs.rmSync(DATA, { recursive: true, force: true }); };
const fail = (m) => { console.error('GAGAL:', m); done(); process.exit(1); };
for (const port of [PK, PG]) for (let i = 0; i < 50; i++) { try { if ((await fetch(`http://localhost:${port}/health`)).ok) break; } catch { /* belum */ } await sleep(100); }
const until = async (fn, ms) => { const t = Date.now(); while (Date.now() - t < ms) { if (await fn()) return true; await sleep(100); } return false; };
const api = (port) => fetch(`http://localhost:${port}/api/event`).then((r) => r.json());
const tool = (dir, ...a) => execFileSync(process.execPath, ['tools/event.js', ...a], { cwd: ROOT, env: { ...process.env, ARKANA_AUTH: 'off', DATA_DIR: dir }, encoding: 'utf8' });
const pid = (c) => c.repeat(16);
function client(port, join) {
  const c = { ws: new WebSocket(`ws://localhost:${port}/ws`), id: 0, w: null, err: null, snap: null, roster: [], ev: [], seq: 0 };
  c.ws.on('open', () => c.ws.send(JSON.stringify({ t: 'join', cls: 'ranger', ...join })));
  c.ws.on('message', (raw) => {
    const m = JSON.parse(raw);
    if (m.t === 'w') { c.w = m; c.id = m.id; } else if (m.t === 'e') c.err = m.m; else if (m.t === 'r') c.roster = m.l;
    else if (m.t === 's') { c.snap = m; for (const e of m.e) c.ev.push(e); }
  });
  c.pos = (id = c.id) => c.snap?.p.find((p) => p[0] === id);
  return c;
}

// ---------- 0. aturan jadwal ----------
const v = validate([{ id: 'a', tipe: 'raja', mulai: '2026-11-21T20:00', selesai: '2026-11-21T19:00' }, { id: 'b', tipe: 'naga', mulai: 'x', selesai: 'y' }, { id: 'c', tipe: 'golem', mulai: '2026-11-21T20:00', selesai: '2026-11-21T23:00' }]);
if (v.list.length !== 1 || v.errors.length !== 2) fail(`pemeriksaan events.json salah: ${JSON.stringify(v)}`);
if (v.list[0].start !== Date.parse('2026-11-21T13:00:00Z')) fail('waktu tanpa zona seharusnya dibaca sebagai WIB');
if (!wavePlan(3, 1, { bossEvery: 3 }).list.includes('brute') || wavePlan(3, 1).list.includes('brute')) fail('aturan bos tiap 3 gelombang tidak berlaku pada rencana gelombang');
console.log('OK jadwal: entri salah ditolak, waktu dibaca WIB, aturan bos tiap 3 gelombang mengubah rencana gelombang.');

// ---------- 1. tanpa event ----------
let d = await api(PK);
if (d.active || d.next) fail('seharusnya belum ada event');
const X = client(PK, { name: 'Dini', mode: 'event', pid: pid('x') });
if (!await until(() => X.err, 2000)) fail('bergabung ke event tanpa event seharusnya ditolak');
console.log(`OK tanpa event: ditolak dengan pesan "${X.err}".`);

// ---------- 2. Perburuan Raja ----------
const wib = (ms) => new Date(ms + 7 * 3600e3).toISOString().slice(0, 19);
fs.mkdirSync(DK, { recursive: true });
fs.writeFileSync(DK + '/events.json', JSON.stringify([
  { id: 'uji-raja', tipe: 'raja', nama: 'Uji Raja', mulai: wib(Date.now() - 1000), selesai: wib(Date.now() + 600e3), target: 5 },
  { id: 'nanti', tipe: 'golem', mulai: wib(Date.now() + 3600e3), selesai: wib(Date.now() + 7200e3) },
]));
if (!await until(async () => (d = await api(PK)).active, 8000)) fail('server tidak membaca events.json tanpa restart');
if (d.active.name !== 'Uji Raja' || !(d.active.left > 500) || !d.active.target.includes('5') || d.next) fail(`isi /api/event salah: ${JSON.stringify(d)}`);
console.log(`OK event dibaca tanpa restart: "${d.active.name}", sisa ${d.active.left} dtk, target "${d.active.target}".`);
setMap('ruins');
const A = client(PK, { name: 'Arya', mode: 'event', pid: pid('a') }), B = client(PK, { name: 'Bima', mode: 'event', pid: pid('b') });
if (!await until(() => A.w && B.w && A.snap && B.snap, 3000)) fail('tidak bisa bergabung ke event');
if (A.w.gm !== 'king' || !A.w.ev || A.w.ev.name !== 'Uji Raja') fail(`room event salah: ${JSON.stringify(A.w)}`);
if (!A.pos(B.id)) fail('dua pemain event seharusnya berada di room yang sama');
setMap(A.w.map);
if (!await until(() => A.ev.some((e) => e[0] === 'K'), 8000)) fail('tidak ada raja yang dinobatkan');
const k1 = A.ev.find((e) => e[0] === 'K')[1];
const K = k1 === A.id ? A : B, H = k1 === A.id ? B : A; // K raja, H pemburu
await sleep(400);
if (!(K.pos()[7] & 64)) fail('raja tidak ditandai di snapshot');
const hpK = K.pos()[5], hpH = H.pos()[5];
if (!(hpK > hpH * 1.8)) fail(`raja seharusnya ber-HP jauh lebih besar: ${hpK} vs ${hpH}`);
console.log(`OK mahkota: ${K === A ? 'Arya' : 'Bima'} dinobatkan, HP maks ${hpK} (pemburu ${hpH}).`);
// raja diam mengumpulkan poin sampai target 5 tercapai
if (!await until(() => (K.roster.find((r) => r[0] === K.id)?.[6] ?? K.snap.me?.[0]) !== undefined && K.ev.some((e) => e[0] === 'C' && e[1] === K.id && String(e[2]).includes('target event')), 12000)) fail('target event tidak tercapai setelah raja bertahan');
console.log(`OK target: "${K.ev.find((e) => e[0] === 'C' && String(e[2]).includes('target event'))[2]}".`);
// pemburu menumbangkan raja: mahkota berpindah
const nav = {};
const iv = setInterval(() => {
  const me = H.pos(), tg = H.pos(K.id); if (!me || !tg) return;
  const dx = tg[1] - me[1], dz = tg[2] - me[2], dist = Math.hypot(dx, dz), clear = los(me[1], me[2], tg[1], tg[2]);
  const [mx, mz] = clear && dist < 6 ? [0, 0] : navStep(nav, me[1], me[2], tg[1], tg[2]);
  H.ws.send(JSON.stringify({ t: 'in', s: ++H.seq, mx, mz, y: Math.atan2(dx, dz), f: clear && !(tg[7] & 1) ? 1 : 0, k: 0 }));
  K.ws.send(JSON.stringify({ t: 'in', s: ++K.seq, mx: 0, mz: 0, y: 0, f: 0, k: 0 }));
}, 33);
const moved = await until(() => A.ev.some((e) => e[0] === 'K' && e[1] === H.id), 90000);
clearInterval(iv);
if (!moved) fail('mahkota tidak berpindah ke pemburu yang menumbangkan raja');
console.log('OK mahkota berpindah ke pemain yang menumbangkan raja.');
await sleep(1800); // tunggu statistik tersimpan
const db = JSON.parse(fs.readFileSync(DK + '/players.json', 'utf8'));
const sK = db[pid(K === A ? 'a' : 'b')], sH = db[pid(K === A ? 'b' : 'a')];
if (sK.ev_raja !== 1 || !sK.ev['uji-raja'].done || !(sK.ev['uji-raja'].score >= 5)) fail(`hadiah target tidak tersimpan: ${JSON.stringify(sK.ev)}`);
if (sK.evAttend !== 1 || sH.evAttend !== 1) fail('kehadiran event tidak tercatat');
d = await api(PK);
if (d.active.top[0]?.name !== (K === A ? 'Arya' : 'Bima') || d.active.unit !== 'poin') fail(`papan peringkat event salah: ${JSON.stringify(d.active.top)}`);
console.log(`OK tersimpan: jubah event terbuka, kehadiran tercatat, papan event dipimpin ${d.active.top[0].name} (${d.active.top[0].score} poin).`);
// hentikan event: room mendapat 'Z' dan ronde ditutup
console.log('   ' + tool(DK, 'hentikan').trim());
if (!await until(() => A.ev.some((e) => e[0] === 'Z'), 9000)) fail('room event tidak diberi tahu saat event dihentikan');
d = await api(PK);
if (d.active || !d.last || d.last.name !== 'Uji Raja' || !d.last.top.length) fail(`setelah dihentikan seharusnya tampil juara: ${JSON.stringify(d)}`);
const Y = client(PK, { name: 'Telat', mode: 'event', pid: pid('y') });
if (!await until(() => Y.err, 2000)) fail('event yang sudah dihentikan masih bisa dimasuki');
console.log(`OK dihentikan: pemain diberi tahu, juara tampil (${d.last.top[0].name}), pendatang baru ditolak.`);
A.ws.close(); B.ws.close();

// ---------- 3. Malam Golem lewat perintah "mulai" ----------
console.log('   ' + tool(DG, 'mulai', 'golem', '10', 'Uji Golem').trim());
try { tool(DG, 'mulai', 'raja', '10'); fail('dua event bersamaan seharusnya ditolak'); } catch (e) { if (e.status !== 1) throw e; }
const rawG = JSON.parse(fs.readFileSync(DG + '/events.json', 'utf8')); rawG[0].target = 1; fs.writeFileSync(DG + '/events.json', JSON.stringify(rawG));
if (!await until(async () => (d = await api(PG)).active?.target.includes('1'), 12000)) fail('event golem tidak aktif');
const G = client(PG, { name: 'Gilang', mode: 'event', pid: pid('g') });
if (!await until(() => G.w && G.roster.length, 3000)) fail('tidak bisa bergabung ke event golem');
if (G.w.gm !== 'pve') fail('event golem seharusnya memakai mode Bertahan Bersama');
setMap(G.w.map);
const gi = setInterval(() => {
  const m = G.pos(); if (!m || (m[7] & 1)) return;
  const mons = new Set(G.roster.filter((r) => ['ghoul', 'caster', 'brute', 'frost', 'spiderling', 'queen'].includes(r[2])).map((r) => r[0]));
  let best = null, bd = 1e9;
  for (const p of G.snap.p) { if (!mons.has(p[0]) || (p[7] & 1)) continue; const dd = Math.hypot(p[1] - m[1], p[2] - m[2]); if (dd < bd && los(m[1], m[2], p[1], p[2])) { bd = dd; best = p; } }
  G.ws.send(JSON.stringify({ t: 'in', s: ++G.seq, mx: 0, mz: 0, y: best ? Math.atan2(best[1] - m[1], best[2] - m[2]) : 0, f: best ? 1 : 0, k: 0 }));
}, 33);
if (!await until(() => G.ev.some((e) => e[0] === 'w' && e[1] === 1), 70000)) fail('gelombang 1 event golem tidak selesai');
const offers = () => G.ev.filter((e) => e[0] === 'P' && e[1] === G.id);
if (!await until(() => offers().length === 1, 2000)) fail('Berkah pertama tidak ditawarkan');
G.ws.send(JSON.stringify({ t: 'perk', id: offers()[0][2][0] }));
if (!await until(() => offers().length === 2, 2000)) fail('aturan Dua Berkah: Berkah kedua tidak ditawarkan');
G.ws.send(JSON.stringify({ t: 'perk', id: offers()[1][2][0] }));
await sleep(400);
if (offers().length !== 2) fail('Berkah ditawarkan lebih dari dua kali');
if (G.ev.filter((e) => e[0] === 'p' && e[1] === G.id).length !== 2) fail('dua Berkah tidak diterapkan');
if (!G.ev.some((e) => e[0] === 'C' && String(e[2]).includes('target event'))) fail('target event golem (gelombang) tidak tercapai');
clearInterval(gi);
await sleep(1800);
const sG = JSON.parse(fs.readFileSync(DG + '/players.json', 'utf8'))[pid('g')];
if (sG.ev_golem !== 1) fail('jubah event golem tidak terbuka');
d = await api(PG);
if (d.active.unit !== 'gelombang' || d.active.top[0]?.score !== 1) fail(`papan event golem salah: ${JSON.stringify(d.active)}`);
console.log('OK Malam Golem: mode bertahan, dua Berkah per gelombang, target gelombang tercapai, jubah terbuka, papan mencatat gelombang.');
G.ws.close();
await sleep(200);
done();
console.log('SEMUA UJI LULUS');
process.exit(0);
