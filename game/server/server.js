// Server otoritatif: semua gerak, tembakan, damage, dan skor dihitung di sini.
import http from 'node:http';
import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import {
  TICK, DT, PLAYER_R, CLASSES, CLASS_KEYS, SPAWNS, ORBS, MATCH_TIME, KILL_LIMIT, END_TIME,
  RESPAWN_TIME, PROTECT_TIME, MAX_HUMANS, BOT_FILL, MAX_LEVEL, XP_LV, NOVA_R, NOVA_DMG,
  SHIELD_TIME, ORB_HEAL, ORB_RESPAWN, levelDmg, levelHp,
  TEAM_MODES, TEAM_LIMIT, TEAMS, MAPS, MAP_KEYS, SKINS, skinUnlocked,
  DMG_SCALE, REGEN_DELAY, REGEN_RATE, BOT_DIFF, MERCY_DEATHS,
  BOUNTY_MIN, BOUNTY_LEAD, BOUNTY_XP, EVENT_FIRST, EVENT_EVERY, EVENTS, ULT_MAX,
  MONSTERS, PVE, wavePlan, ARENA, PERKS, PERK_KEYS,
  MODES, KOTH_R, KOTH_LIMIT, RUNES, RUNE_TIME, RUNE_RESPAWN, DMG_BUFF, SPD_BUFF, LAG_MAX,
} from '../shared/config.js';
import { stepPlayer, blocked, los, angDiff, setMap, collide } from '../shared/sim.js';
import { Stats } from './stats.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'client');
const PORT = Number(process.env.PORT) || 8080;
const LIMIT = Number(process.env.KILL_LIMIT) || KILL_LIMIT;       // bisa diubah untuk uji
const END_T = Number(process.env.END_TIME) || END_TIME;
const DATA_DIR = process.env.DATA_DIR || path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data');
const PRACTICE_BOTS = 2;
const stats = new Stats(DATA_DIR);
const FILL = process.env.BOTS !== undefined ? Number(process.env.BOTS) : BOT_FILL; // jumlah pengisi bot (bisa 0 untuk uji)
const KOTH_WIN = Number(process.env.KOTH_LIMIT) || KOTH_LIMIT;
const LAGCOMP = process.env.LAGCOMP !== '0';
const MATCH_T = Number(process.env.MATCH_TIME) || MATCH_TIME;
const EV_FIRST = Number(process.env.EVENT_FIRST) || EVENT_FIRST;
const PVE_BREAK = Number(process.env.PVE_BREAK) || PVE.breakTime;
const CKPT = Number(process.env.PVE_CHECKPOINT) || PVE.checkpointEvery;
const TEST_DMG = Number(process.env.PVE_DMG_MUL) || 1; // hanya untuk uji
const ALLIES = process.env.PVE_ALLIES !== undefined ? Number(process.env.PVE_ALLIES) : PVE.allies;
const PERK_BREAK = Number(process.env.PVE_PERK_BREAK) || PVE.perkBreak;
const TEAM_WIN = Number(process.env.TEAM_LIMIT) || TEAM_LIMIT;
const HIST = 16; // riwayat posisi per pemain, dalam tick (~0,53 dtk)
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // tanpa I dan O agar tidak tertukar dengan 1 dan 0

// Catatan pertandingan: satu baris JSON per ronde selesai. Gagal menulis tidak boleh menjatuhkan server.
function logMatch(rec) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.appendFileSync(path.join(DATA_DIR, 'matches.jsonl'), JSON.stringify(rec) + '\n');
  } catch (err) { console.error('gagal mencatat pertandingan:', err.message); }
}
function newCode() {
  for (;;) {
    let c = '';
    for (let i = 0; i < 4; i++) c += CODE_CHARS[crypto.randomInt(CODE_CHARS.length)];
    if (!rooms.some((r) => r.code === c)) return c;
  }
}
const BOT_NAMES = ['Raka', 'Sura', 'Wira', 'Laksmi', 'Bayu', 'Kirana', 'Jaya', 'Dewangga', 'Sekar', 'Gendis'];
const r2 = (v) => Math.round(v * 100) / 100;

// Grid untuk pencarian jalan monster: sel 1x1 langkah, true = bisa dilewati (dengan jari-jari tubuh)
const GN = Math.floor(ARENA), GW = 2 * GN + 1;
const PASS = {};
for (const id of MAP_KEYS) {
  setMap(id); PASS[id] = new Uint8Array(GW * GW);
  for (let i = -GN; i <= GN; i++) for (let j = -GN; j <= GN; j++) PASS[id][(i + GN) * GW + (j + GN)] = blocked(i, j, PLAYER_R + 0.15) ? 0 : 1;
}
const NB = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

// titik jelajah bot per peta
const WAYPOINTS = {};
for (const id of MAP_KEYS) {
  setMap(id); WAYPOINTS[id] = [];
  for (let x = -40; x <= 40; x += 8) for (let z = -40; z <= 40; z += 8) if (!blocked(x, z, 1.5)) WAYPOINTS[id].push([x, z]);
}
setMap('ruins');

class Room {
  constructor(opts = {}) {
    this.code = opts.code || null;          // room privat: hanya bisa dimasuki dengan kode
    this.practice = !!opts.practice;        // room latihan: satu pemain, bot boneka tidak menyerang
    this.mode = MODES[opts.mode] ? opts.mode : 'dm';
    this.diff = BOT_DIFF[opts.diff] ? opts.diff : 'normal'; // room publik: Normal
    this.D = BOT_DIFF[this.diff];
    // peta: pilihan pembuat room; 'rotate' (dan room publik) berganti peta setiap ronde
    this.rotate = !opts.map || opts.map === 'rotate';
    this.map = MAPS[opts.map] ? opts.map : 'ruins';
    this.M = MAPS[this.map];
    setMap(this.map);
    this.tickN = 0;
    this.runeT = this.M.runes.map(() => 0);
    this.holder = 0;                         // Rebut Altar: id penguasa, 0 kosong, -1 diperebutkan
    this.teams = TEAM_MODES.includes(this.mode) || this.mode === 'pve'; // Tim: dua regu seimbang; Lawan Bot/Bertahan: manusia satu regu
    this.pve = this.mode === 'pve';
    this.wave = 0; this.wavePhase = 0; this.waveT = PVE_BREAK; this.spawnQ = []; this.spawnT = 0; this.hpMul = 1; this.flow = null; this.flowT = 0;
    this.waveDmg = 1; this.checkpoint = 0; this.deathLog = []; this.stuckN = 0; this.logged = false;
    this.teamScore = [0, 0];
    this.bounty = 0;                         // id buronan saat ini
    this.evT = EV_FIRST; this.ev = null;     // kejadian di tengah ronde
    this.meteors = [];
    this.startedAt = Date.now();
    this.left = [];                          // pemain manusia yang keluar di tengah ronde
    this.players = new Map();
    this.projs = [];
    this.events = [];
    this.nextId = 1;
    this.nextPid = 1;
    this.orbT = this.M.orbs.map(() => 0);
    this.timeLeft = MATCH_T;
    this.state = 'play';
    this.endT = 0;
    this.rosterDirty = true;
  }

  humans() { let n = 0; for (const p of this.players.values()) if (!p.bot) n++; return n; }

  addPlayer(name, clsKey, ws) {
    const cls = CLASSES[clsKey] || MONSTERS[clsKey];
    const team = this.teams ? this.pickTeam(!ws) : -1;
    const p = {
      id: this.nextId++, name, clsKey, cls, bot: !ws, ws, team,
      x: 0, z: 0, yaw: 0, dashT: 0, dx: 0, dz: 0, skillCd: 0,
      hp: cls.hp, maxHp: cls.hp, lvl: 1, xp: 0, kills: 0, deaths: 0, dmg: 0,
      pingSum: 0, pingN: 0, fpsSum: 0, fpsN: 0, joinedAt: Date.now(),
      pts: 0, ptsAcc: 0, dmgT: 0, spdT: 0, spd: 1, rtt: 0, hist: [], ult: 0,
      perks: {}, offer: null, spare: 0, spareT: 0, reviveP: 0,
      dead: false, respawnT: 0, fireCd: 0, shieldT: 0, protT: 0, hurtT: 99,
      queue: [], last: { s: 0, mx: 0, mz: 0, y: 0, f: 0, k: 0 }, ack: 0,
      ai: { tgt: 0, retT: 0, err: 0, errT: 0, strT: 0, strDir: 1, wp: null, stuckT: 0, lx: 0, lz: 0, seenT: 0 },
      streak: 0, // gugur berturut-turut tanpa menumbangkan lawan (untuk bot yang melunak)
    };
    this.players.set(p.id, p);
    this.spawn(p);
    this.rosterDirty = true;
    return p;
  }

  removePlayer(p) {
    if (!p.bot && this.state === 'play' && !this.practice) {
      this.left.push(this.playerRecord(p));
      if (p.pid) stats.add(p.pid, p.name, { kills: p.kills, deaths: p.deaths, dmg: p.dmg, cls: p.clsKey, finished: false, win: false });
    }
    this.players.delete(p.id);
    this.rosterDirty = true;
  }

  maxHpOf(p) { return levelHp(p.cls, p.lvl) + 25 * (p.perks?.kokoh || 0); }
  perk(p, k) { return p.perks?.[k] || 0; }

  pickTeam(bot) {
    if (this.mode === 'coop' || this.pve) return bot ? 1 : 0;
    const n = [0, 0], h = [0, 0];
    for (const p of this.players.values()) { n[p.team]++; if (!p.bot) h[p.team]++; }
    if (!bot && h[0] !== h[1]) return h[0] < h[1] ? 0 : 1; // manusia dibagi rata dulu
    return n[0] <= n[1] ? 0 : 1;
  }

  foes(a, b) { return a !== b && (!this.teams || a.team !== b.team); }

  balanceBots() {
    if (this.pve) {
      // bot sekutu sampai ada PVE.allies petarung di pihak pemain
      const humans = this.humans(), allies = [...this.players.values()].filter((q) => q.ally);
      const want = humans === 0 ? 0 : Math.max(0, ALLIES - humans);
      for (let i = allies.length; i < want; i++) { this.addBot(0); const b = [...this.players.values()].at(-1); b.ally = true; }
      for (let i = allies.length; i > want; i--) this.removePlayer(allies[i - 1]);
      return;
    }
    if (this.teams) return this.balanceTeams();
    const humans = this.humans();
    let bots = this.players.size - humans;
    const want = humans === 0 ? 0 : this.practice ? PRACTICE_BOTS : Math.max(0, FILL - humans);
    while (bots < want) {
      const used = new Set([...this.players.values()].map((p) => p.name));
      const name = BOT_NAMES.find((n) => !used.has(n)) || 'Bot' + this.nextId;
      this.addPlayer(name, CLASS_KEYS[Math.floor(Math.random() * CLASS_KEYS.length)], null);
      bots++;
    }
    if (bots > want) {
      for (const p of [...this.players.values()]) {
        if (bots <= want) break;
        if (p.bot) { this.removePlayer(p); bots--; }
      }
    }
  }

  addBot(team) {
    const used = new Set([...this.players.values()].map((p) => p.name));
    const name = BOT_NAMES.find((n) => !used.has(n)) || 'Bot' + this.nextId;
    const p = this.addPlayer(name, CLASS_KEYS[Math.floor(Math.random() * CLASS_KEYS.length)], null);
    if (p.team !== team) { p.team = team; this.spawn(p); }
  }

  // Tim: kedua regu sama besar, minimal FILL/2 per regu. Lawan Bot: regu bot = manusia + 2 (minimal 3).
  balanceTeams() {
    const humans = this.humans();
    const count = (t, bot) => [...this.players.values()].filter((p) => p.team === t && (bot === undefined || p.bot === bot)).length;
    const want = humans === 0 ? [0, 0] : this.mode === 'coop' ? [count(0, false), Math.max(3, humans + 2)]
      : (() => { const per = Math.max(Math.ceil(FILL / 2), count(0, false), count(1, false)); return [per, per]; })();
    for (const t of [0, 1]) {
      while (count(t) < want[t]) this.addBot(t);
      for (const p of [...this.players.values()]) { if (count(t) <= want[t]) break; if (p.bot && p.team === t) this.removePlayer(p); }
    }
  }

  // Di room latihan bot boneka muncul 9-15 langkah dari pemain, di tempat terbuka dan terlihat langsung.
  practiceSpot(p) {
    const h = [...this.players.values()].find((q) => !q.bot && !q.dead && q !== p);
    if (!h) return null;
    for (let i = 0; i < 60; i++) {
      const a = h.yaw + (Math.random() - 0.5) * 1.6, d = 9 + Math.random() * 6;
      const x = h.x + Math.sin(a) * d, z = h.z + Math.cos(a) * d;
      if (!blocked(x, z, 1.4) && los(h.x, h.z, x, z)) return { x, z };
    }
    return null;
  }

  spawn(p) {
    const near = this.practice && p.bot ? this.practiceSpot(p) : null;
    if (near) {
      p.x = near.x; p.z = near.z; p.yaw = 0;
      p.dashT = 0; p.skillCd = 0; p.fireCd = 0.3; p.shieldT = 0;
      p.maxHp = this.maxHpOf(p); p.hp = p.maxHp;
      p.dead = false; p.protT = 0; p.hurtT = 99; p.ai.wp = null; p.ai.tgt = 0;
      p.dmgT = 0; p.spdT = 0; p.spd = 1; p.hist.length = 0;
      this.events.push(['r', p.id, r2(p.x), r2(p.z)]);
      return;
    }
    const scored = this.M.spawns.map(([x, z]) => {
      let min = 1e9;
      for (const q of this.players.values()) {
        if (q.dead || !this.foes(p, q)) continue; // di mode tim, jauhi lawan saja
        min = Math.min(min, Math.hypot(q.x - x, q.z - z));
      }
      return { x, z, min };
    }).sort((a, b) => b.min - a.min);
    const s = scored[Math.floor(Math.random() * Math.min(3, scored.length))];
    p.x = s.x; p.z = s.z; p.yaw = Math.atan2(-s.x, -s.z);
    p.dashT = 0; p.skillCd = 0; p.fireCd = 0.3; p.shieldT = 0;
    p.maxHp = this.maxHpOf(p); p.hp = p.maxHp;
    p.dead = false; p.protT = PROTECT_TIME; p.hurtT = 99;
    p.dmgT = 0; p.spdT = 0; p.spd = 1; p.hist.length = 0;
    p.queue.length = 0; p.last.y = p.yaw; p.last.mx = 0; p.last.mz = 0; p.last.f = 0;
    p.ai.wp = null; p.ai.tgt = 0;
    this.events.push(['r', p.id, r2(p.x), r2(p.z)]);
  }

  addXp(p, amount) {
    p.xp += amount;
    while (p.lvl < MAX_LEVEL && p.xp >= XP_LV[p.lvl]) {
      p.lvl++;
      p.maxHp = this.maxHpOf(p);
      if (!p.dead) p.hp = Math.min(p.maxHp, p.hp + p.maxHp * 0.3);
      this.events.push(['l', p.id, p.lvl]);
    }
  }

  damage(t, amount, att) {
    if (t.dead || t.protT > 0 || this.state !== 'play') return;
    if (att && att !== t && !this.foes(att, t)) return; // tanpa tembak kawan
    if (t.shieldT > 0) amount *= 0.3;
    amount = Math.max(1, Math.round(amount));
    t.hp -= amount; t.hurtT = 0;
    if (att && att !== t) {
      att.dmg += amount;
      if (!att.monster) att.ult = Math.min(ULT_MAX, att.ult + amount * 0.5 * (1 + 0.4 * this.perk(att, 'amarah')));
      if (this.perk(att, 'vampir') && !att.dead) att.hp = Math.min(att.maxHp, att.hp + amount * 0.12 * this.perk(att, 'vampir'));
    }
    this.events.push(['d', t.id, att ? att.id : 0, amount, r2(t.x), r2(t.z)]);
    if (att && att !== t) this.addXp(att, amount * 0.5);
    if (t.hp <= 0) {
      t.hp = 0; t.dead = true; t.respawnT = RESPAWN_TIME; t.deaths++; t.dashT = 0; t.streak++;
      if (this.pve) {
        // Bertahan: monster hilang; bot sekutu bangkit biasa; manusia menunggu ditolong, nyawa cadangan, atau akhir gelombang
        t.respawnT = t.monster ? 1.2 : t.bot ? RESPAWN_TIME + 2 : 1e9;
        t.reviveP = 0;
        if (!t.bot && t.spare > 0) { t.spare--; t.spareT = PVE.spareDelay; }
        if (!t.bot && att) {
          const toAtt = Math.atan2(att.x - t.x, att.z - t.z);
          this.deathLog.push({ wave: this.wave, by: att.clsKey, behind: Math.abs(angDiff(toAtt, t.yaw)) > Math.PI / 2 });
        }
        this.rosterDirty = true;
      }
      if (att && att !== t) {
        att.kills++; this.addXp(att, 100); att.streak = 0; att.ult = Math.min(ULT_MAX, att.ult + 15);
        if (this.perk(att, 'ledak')) { // berkah Ledak: musuh yang tumbang meledak
          this.events.push(['x', r2(t.x), r2(t.z)]);
          for (const q of this.players.values()) if (!q.dead && this.foes(att, q) && Math.hypot(q.x - t.x, q.z - t.z) < 4) this.damage(q, 22 * this.perk(att, 'ledak'), att);
        }
        this.track(att, { type: 'kill', cls: att.clsKey });
        if (t.id === this.bounty) { this.addXp(att, BOUNTY_XP); this.events.push(['b', att.id, t.id]); this.track(att, { type: 'bounty' }); this.bounty = 0; }
        if (this.teams && !this.pve) { this.teamScore[att.team]++; if (this.teamScore[att.team] >= TEAM_WIN) this.endMatch(); } // Bertahan: tanpa batas kill
      }
      this.events.push(['k', att ? att.id : 0, t.id]);
      this.updateBounty();
      this.rosterDirty = true;
      if (this.mode === 'dm' && att && att.kills >= LIMIT) this.endMatch();
    }
  }

  // kemajuan tantangan harian (hanya pemain manusia, bukan room latihan)
  track(p, ev) {
    if (!p || p.bot || !p.pid || this.practice) return;
    for (const text of stats.progress(p.pid, p.name, { mode: this.mode, ...ev })) this.events.push(['C', p.id, text]);
  }

  // Buronan: pemimpin kill (minimal BOUNTY_MIN) yang unggul BOUNTY_LEAD atas pemain kedua
  updateBounty() {
    if (this.practice || this.pve) return;
    const top = [...this.players.values()].sort((a, b) => b.kills - a.kills);
    const lead = top[0], second = top[1];
    const id = lead && lead.kills >= BOUNTY_MIN && lead.kills - (second?.kills || 0) >= BOUNTY_LEAD ? lead.id : 0;
    if (id && id !== this.bounty) this.events.push(['B', id]);
    this.bounty = id;
  }

  // Kejadian di tengah ronde
  startEvent() {
    const pool = Object.keys(EVENTS);
    const id = pool[Math.floor(Math.random() * pool.length)];
    this.ev = { id, t: EVENTS[id].dur };
    if (id === 'runerain') this.runeT.fill(0);
    if (id === 'golden') {
      const spots = [[0, 8], [8, 0], [0, -8], [-8, 0], [0, 14], [14, 0], [0, -14], [-14, 0]].filter(([x, z]) => !blocked(x, z, 1.6));
      const [gx, gz] = spots[Math.floor(Math.random() * spots.length)] || [0, 14];
      this.ev.gx = gx; this.ev.gz = gz;
    }
    this.events.push(['E', id]);
  }
  stepEvent() {
    if (this.practice) return;
    if (!this.ev) { this.evT -= DT; if (this.evT <= 0) { this.evT = EVENT_EVERY; this.startEvent(); } return; }
    const ev = this.ev;
    ev.t -= DT;
    if (ev.id === 'runerain') for (let i = 0; i < this.runeT.length; i++) this.runeT[i] = Math.min(this.runeT[i], 4);
    if (ev.id === 'golden' && !ev.taken) {
      for (const p of this.players.values()) {
        if (p.dead || Math.hypot(p.x - ev.gx, p.z - ev.gz) > 1.8) continue;
        p.hp = p.maxHp; p.dmgT = 8; p.spdT = 8; ev.taken = true; ev.t = Math.min(ev.t, 0.5);
        this.events.push(['g', p.id]);
        break;
      }
    }
    if (ev.t <= 0) this.ev = null;
  }

  // Jurus pamungkas
  ultimate(p) {
    if (p.ult < ULT_MAX || p.dead || p.monster) return;
    p.ult = 0;
    this.track(p, { type: 'ult' });
    this.events.push(['U', p.id, p.clsKey]);
    const buff = DMG_SCALE * levelDmg(p.lvl) * (p.dmgT > 0 ? DMG_BUFF : 1);
    if (p.clsKey === 'ranger') {
      const ox = p.x + Math.sin(p.yaw) * 0.9, oz = p.z + Math.cos(p.yaw) * 0.9;
      for (let i = 0; i < 11; i++) {
        const a = p.yaw + (i - 5) * 0.09;
        const pr = { id: this.nextPid++, o: p.id, tm: p.team, x: ox, z: oz, dx: Math.sin(a), dz: Math.cos(a), sp: 75, life: 0.8, dmg: 16 * buff, splash: 0 };
        this.events.push(['s', pr.id, p.id, r2(ox), r2(oz), Math.round(a * 1000) / 1000]);
        if (!this.rewindFly(pr, p)) this.projs.push(pr);
      }
    } else if (p.clsKey === 'mage') {
      // titik jatuh: sampai 16 langkah di depan, berhenti sebelum penghalang
      let x = p.x, z = p.z;
      for (let d = 1; d <= 16; d += 0.5) { const nx = p.x + Math.sin(p.yaw) * d, nz = p.z + Math.cos(p.yaw) * d; if (blocked(nx, nz, 0.5)) break; x = nx; z = nz; }
      this.meteors.push({ o: p.id, x, z, t: 0.8, dmg: 90 * buff });
      this.events.push(['M', r2(x), r2(z)]);
    } else {
      p.shieldT = 5; p.hp = Math.min(p.maxHp, p.hp + p.maxHp * 0.5);
      for (const t of this.players.values()) {
        if (t.dead || !this.foes(p, t)) continue;
        const d = Math.hypot(t.x - p.x, t.z - p.z);
        if (d < 6) this.damage(t, 35 * buff * (1 - 0.4 * d / 6), p);
      }
    }
  }
  stepMeteors() {
    for (let i = this.meteors.length - 1; i >= 0; i--) {
      const m = this.meteors[i];
      m.t -= DT;
      if (m.t > 0) continue;
      this.meteors.splice(i, 1);
      this.events.push(['m', r2(m.x), r2(m.z)]);
      const owner = this.players.get(m.o);
      for (const t of this.players.values()) {
        if (t.dead || (owner && !this.foes(owner, t))) continue;
        const d = Math.hypot(t.x - m.x, t.z - m.z);
        if (d < 6) this.damage(t, m.dmg * (1 - 0.6 * d / 6), owner);
      }
    }
  }

  // ---------- Bertahan Bersama ----------
  pveTick() {
    const humans = [...this.players.values()].filter((p) => !p.bot);
    if (!humans.length) return;
    if (this.wavePhase === 0) {
      this.waveT -= DT;
      if (this.waveT > 0) return;
      this.wave++; this.wavePhase = 1;
      const plan = wavePlan(this.wave, humans.length);
      this.spawnQ = plan.list; this.hpMul = plan.hpMul * PVE.diffMul[this.diff]; this.waveDmg = plan.dmgMul * TEST_DMG; this.spawnT = 0;
      for (const h of this.players.values()) {
        if (h.offer) this.pickPerk(h, h.offer[Math.floor(Math.random() * h.offer.length)]); // belum memilih: dipilihkan acak
        if (!h.bot) h.spare = 1; // satu nyawa cadangan per gelombang
      }
      this.events.push(['W', this.wave, plan.list.includes('brute') ? 1 : 0]);
      return;
    }
    this.spawnT -= DT;
    const alive = [...this.players.values()].filter((p) => p.monster && !p.dead).length;
    if (this.spawnQ.length && this.spawnT <= 0 && alive < PVE.cap) { this.spawnT = 1.1; this.addMonster(this.spawnQ.shift()); }
    if (!this.spawnQ.length && alive === 0 && ![...this.players.values()].some((p) => p.monster)) {
      // gelombang selesai: semua bangkit dan pulih penuh
      this.wavePhase = 0; this.waveT = Math.max(PVE_BREAK, PERK_BREAK);
      if (this.wave % CKPT === 0) this.checkpoint = this.wave;
      for (const h of this.players.values()) {
        if (h.monster) continue;
        if (h.dead) this.spawn(h);
        h.hp = h.maxHp; h.spareT = 0;
        this.offerPerks(h);
      }
      this.events.push(['w', this.wave, this.checkpoint]);
      for (const h of humans) this.track(h, { type: 'round' });
    }
    // semua tumbang dan tak ada yang akan bangkit sendiri: permainan berakhir
    if (humans.every((h) => h.dead && !(h.spareT > 0))) this.endMatch();
  }

  revive(p, by) {
    p.dead = false; p.hp = Math.round(p.maxHp * 0.5); p.protT = 2; p.hurtT = 0; p.reviveP = 0; p.spareT = 0; p.respawnT = 0;
    p.queue.length = 0;
    this.events.push(['v', by ? by.id : p.id, p.id]);
    this.rosterDirty = true;
  }

  unstick(p, t) {
    // ke titik spawn terdekat dari target yang masih berjarak >12 dan bisa dilewati
    const spots = this.M.spawns.map(([x, z]) => ({ x, z, d: Math.hypot(t.x - x, t.z - z) })).filter((s) => s.d > 12).sort((a, b) => a.d - b.d);
    const s = spots[0] || { x: this.M.spawns[0][0], z: this.M.spawns[0][1] };
    p.x = s.x; p.z = s.z; p.stuckN = (p.stuckN || 0) + 1; this.stuckN++;
    this.events.push(['r', p.id, r2(p.x), r2(p.z)]);
  }

  // Berkah: tawarkan 3 pilihan acak; bot sekutu langsung memilih
  offerPerks(p) {
    const pool = PERK_KEYS.filter((k) => !(k === 'ganda' && this.perk(p, 'ganda') >= 2));
    const offer = [];
    while (offer.length < 3 && pool.length) offer.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    p.offer = offer;
    if (p.bot) return this.pickPerk(p, offer[0]);
    this.events.push(['P', p.id, offer]);
  }
  pickPerk(p, k) {
    if (!p.offer || !p.offer.includes(k)) return;
    p.offer = null;
    p.perks[k] = (p.perks[k] || 0) + 1;
    if (k === 'kokoh') { p.maxHp = this.maxHpOf(p); p.hp = Math.min(p.maxHp, p.hp + 25); }
    if (!p.bot) this.events.push(['p', p.id, k]);
  }

  // catatan sesi Bertahan: dipanggil saat semua tumbang, dan juga saat room ditinggalkan
  logPve(abandoned) {
    if (this.logged || !this.wave) return;
    this.logged = true;
    const ps = [...this.players.values()].filter((p) => !p.monster).map((p) => ({ ...this.playerRecord(p), perks: p.perks }));
    logMatch({
      at: new Date().toISOString(), room: 'privat', mode: 'pve', map: this.map, diff: this.diff, abandoned,
      wave: this.wave, cleared: this.wavePhase === 0 ? this.wave : this.wave - 1, checkpoint: this.checkpoint,
      secs: Math.round((Date.now() - this.startedAt) / 1000), players: ps, left: this.left, deaths: this.deathLog, stuck: this.stuckN,
    });
  }

  addMonster(key) {
    const m = MONSTERS[key];
    const p = this.addPlayer(m.name, key, null);
    p.monster = true; p.team = 1;
    const humans = Math.max(1, this.humans());
    p.maxHp = Math.round(m.hp * this.hpMul * (m.boss ? 0.6 + 0.4 * humans : 1)); p.hp = p.maxHp;
    p.meleeCd = 0.5; p.slamCd = 3;
    // muncul di titik spawn terjauh dari para pemain
    const hs = [...this.players.values()].filter((q) => !q.bot && !q.dead);
    const spots = this.M.spawns.map(([x, z]) => ({ x, z, d: Math.min(...hs.map((h) => Math.hypot(h.x - x, h.z - z)), 999) })).sort((a, b) => b.d - a.d);
    const s = spots[Math.floor(Math.random() * Math.min(4, spots.length))];
    p.x = s.x + (Math.random() - 0.5) * 2; p.z = s.z + (Math.random() - 0.5) * 2; p.protT = 0;
    this.events.push(['r', p.id, r2(p.x), r2(p.z)]);
    this.rosterDirty = true;
  }

  // Medan jarak ke pemain hidup terdekat (BFS dari semua pemain sekaligus), dipakai monster untuk berjalan memutari penghalang
  updateFlow() {
    const pass = PASS[this.map], dist = this.flow ||= new Int16Array(GW * GW);
    dist.fill(-1);
    const q = [];
    for (const h of this.players.values()) {
      if (h.monster || h.dead) continue;
      const i = Math.round(h.x) + GN, j = Math.round(h.z) + GN, k = i * GW + j;
      if (i >= 0 && i < GW && j >= 0 && j < GW && dist[k] < 0) { dist[k] = 0; q.push(k); }
    }
    for (let h = 0; h < q.length; h++) {
      const k = q[h], i = (k / GW) | 0, j = k % GW;
      for (const [di, dj] of NB) {
        const ni = i + di, nj = j + dj;
        if (ni < 0 || nj < 0 || ni >= GW || nj >= GW) continue;
        const nk = ni * GW + nj;
        if (dist[nk] >= 0 || !pass[nk]) continue;
        if (di && dj && (!pass[i * GW + nj] || !pass[ni * GW + j])) continue; // jangan memotong sudut
        dist[nk] = dist[k] + 1; q.push(nk);
      }
    }
  }

  monsterThink(p) {
    const m = MONSTERS[p.clsKey], mul = PVE.diffMul[this.diff];
    this.flowT -= DT / Math.max(1, this.players.size);
    if (this.flowT <= 0 || !this.flow) { this.flowT = 0.4; this.updateFlow(); }
    let t = null, td = 1e9;
    for (const q of this.players.values()) { if (q.monster || q.dead) continue; const d = Math.hypot(q.x - p.x, q.z - p.z); if (d < td) { td = d; t = q; } }
    if (!t) return { s: 0, mx: 0, mz: 0, y: p.yaw, f: 0, k: 0 };
    const dx = t.x - p.x, dz = t.z - p.z, see = td < 30 && los(p.x, p.z, t.x, t.z);
    let mx = 0, mz = 0, f = 0;
    const face = Math.atan2(dx, dz);
    const goDirect = () => { mx = dx / (td || 1); mz = dz / (td || 1); };
    const goFlow = () => {
      const i = Math.round(p.x) + GN, j = Math.round(p.z) + GN;
      let best = this.flow[i * GW + j], bi = 0, bj = 0;
      if (best < 0) best = 1e9;
      for (const [di, dj] of NB) {
        const ni = i + di, nj = j + dj; if (ni < 0 || nj < 0 || ni >= GW || nj >= GW) continue;
        const v = this.flow[ni * GW + nj];
        if (v >= 0 && v < best) { best = v; bi = di; bj = dj; }
      }
      if (bi || bj) { const tx = i + bi - GN - p.x, tz = j + bj - GN - p.z, l = Math.hypot(tx, tz) || 1; mx = tx / l; mz = tz / l; } else goDirect();
    };
    if (p.clsKey === 'caster' && see && td < m.range) {
      // dukun menjaga jarak dan menembak
      p.ai.strT -= DT;
      if (p.ai.strT <= 0) { p.ai.strT = 1 + Math.random(); p.ai.strDir = -p.ai.strDir || 1; }
      const adv = td < 9 ? -0.6 : 0;
      mx = (-dz / td) * p.ai.strDir * 0.6 + (dx / td) * adv; mz = (dx / td) * p.ai.strDir * 0.6 + (dz / td) * adv;
      p.ai.seenT += DT;
      if (p.ai.seenT > 0.6) f = 1;
    } else {
      p.ai.seenT = 0;
      if (see && td < 5) goDirect(); else goFlow();
    }
    // serangan jarak dekat
    if (m.melee) {
      // aba-aba dulu (menyala dan mengangkat lengan), baru memukul; pemain yang menjauh saat aba-aba lolos
      p.meleeCd -= DT;
      if (p.windT > 0) {
        p.windT -= DT; mx = 0; mz = 0;
        if (p.windT <= 0) {
          p.meleeCd = m.melee.cd; this.events.push(['a', p.id]);
          if (td < m.melee.r + PLAYER_R * 0.5 + 0.5) this.damage(t, m.melee.dmg * mul * this.waveDmg, p);
        }
      } else if (td < m.melee.r + PLAYER_R * 0.5 && p.meleeCd <= 0) { p.windT = PVE.windup; this.events.push(['A', p.id]); mx = 0; mz = 0; }
    }
    if (m.slam) {
      p.slamCd -= DT;
      if (p.slamT > 0) {
        p.slamT -= DT; mx = 0; mz = 0;
        if (p.slamT <= 0) {
          this.events.push(['n', p.id, r2(p.x), r2(p.z)]);
          for (const q of this.players.values()) { if (q.monster || q.dead) continue; const d = Math.hypot(q.x - p.x, q.z - p.z); if (d < m.slam.r) this.damage(q, m.slam.dmg * mul * this.waveDmg * (1 - 0.4 * d / m.slam.r), p); }
        }
      } else if (p.slamCd <= 0 && td < m.slam.r) { p.slamCd = m.slam.cd; p.slamT = 0.9; this.events.push(['A', p.id, 1]); }
    }
    // pengaman: monster yang hampir tidak berpindah selama 6 dtk tanpa sedang menyerang dipindah ke dekat pemain
    p.stk ||= { t: 6, x: p.x, z: p.z };
    p.stk.t -= DT;
    if (p.stk.t <= 0) {
      const busy = td < 3 || (p.clsKey === 'caster' && see);
      if (!busy && Math.hypot(p.x - p.stk.x, p.z - p.stk.z) < 1.5) this.unstick(p, t);
      p.stk = { t: 6, x: p.x, z: p.z };
    }
    const want = face + (p.clsKey === 'caster' ? (Math.random() - 0.5) * 0.12 : 0);
    const turn = 6 * DT, yaw = p.yaw + Math.max(-turn, Math.min(turn, angDiff(want, p.yaw)));
    return { s: 0, mx, mz, y: yaw, f, k: 0 };
  }

  playerRecord(p) {
    return {
      name: p.name, cls: p.clsKey, bot: p.bot, team: p.team, kills: p.kills, deaths: p.deaths, dmg: p.dmg, lvl: p.lvl, pts: p.pts,
      ping: p.pingN ? Math.round(p.pingSum / p.pingN) : null, fps: p.fpsN ? Math.round(p.fpsSum / p.fpsN) : null,
      secs: Math.round((Date.now() - p.joinedAt) / 1000),
    };
  }

  endMatch() {
    if (this.state === 'end') return;
    if (!this.practice && this.humans() > 0) {
      // siapa yang menang: kill terbanyak (Deathmatch), poin terbanyak (Rebut Altar), atau seluruh regu pemenang
      const all = [...this.players.values()];
      const best = all.slice().sort((a, b) => (this.mode === 'koth' ? b.pts - a.pts : 0) || b.kills - a.kills)[0];
      const winTeam = this.teams && this.teamScore[0] !== this.teamScore[1] ? (this.teamScore[0] > this.teamScore[1] ? 0 : 1) : -1;
      const won = (p) => (this.pve ? this.wave > PVE.winWave : this.teams ? p.team === winTeam : p === best && (p.kills > 0 || p.pts > 0));
      for (const p of all) if (!p.bot && p.pid) { // (monster adalah bot)
        stats.add(p.pid, p.name, { kills: p.kills, deaths: p.deaths, dmg: p.dmg, cls: p.clsKey, finished: true, win: won(p) });
        this.track(p, { type: 'round' });
        if (won(p)) this.track(p, { type: 'win' });
      }
      if (this.pve) { this.logPve(false); } else {
      const ps = all.map((p) => this.playerRecord(p));
      const win = ps.slice().sort((a, b) => (this.mode === 'koth' ? b.pts - a.pts : 0) || b.kills - a.kills)[0];
      logMatch({
        at: new Date().toISOString(), room: this.code ? 'privat' : 'publik', mode: this.mode, map: this.map,
        secs: Math.round((Date.now() - this.startedAt) / 1000),
        winner: this.teams ? (this.teamScore[0] === this.teamScore[1] ? 'seri' : TEAMS[this.teamScore[0] > this.teamScore[1] ? 0 : 1].name) : win ? win.name : null,
        teamScore: this.teams ? this.teamScore : undefined,
        players: ps, left: this.left,
      });
      }
    }
    this.state = 'end'; this.endT = END_T; // proyektil dibersihkan di tick(), bukan di tengah iterasi
    this.rosterDirty = true;
  }

  resetMatch() {
    this.state = 'play'; this.timeLeft = MATCH_T; this.projs.length = 0;
    this.startedAt = Date.now(); this.left = [];
    if (this.rotate && !this.practice) {
      this.map = MAP_KEYS[(MAP_KEYS.indexOf(this.map) + 1) % MAP_KEYS.length];
      this.M = MAPS[this.map]; setMap(this.map);
    }
    this.orbT = this.M.orbs.map(() => 0); this.runeT = this.M.runes.map(() => 0);
    this.holder = 0; this.teamScore = [0, 0]; this.bounty = 0; this.evT = EV_FIRST; this.ev = null; this.meteors = [];
    if (this.pve) {
      for (const p of [...this.players.values()]) if (p.monster) this.players.delete(p.id);
      // lanjut dari titik simpan: mulai setelah gelombang kelipatan 5 terakhir, dengan berkah acak sebagai bekal
      this.wave = this.checkpoint; this.wavePhase = 0; this.waveT = PVE_BREAK; this.spawnQ = []; this.deathLog = []; this.stuckN = 0; this.logged = false;
      for (const p of this.players.values()) {
        p.perks = {}; p.offer = null; p.spare = 0; p.spareT = 0;
        for (let i = 0; i < Math.round(this.checkpoint * 0.6); i++) { const k = PERK_KEYS[Math.floor(Math.random() * PERK_KEYS.length)]; p.perks[k] = (p.perks[k] || 0) + 1; }
      }
    }
    for (const p of this.players.values()) {
      p.kills = 0; p.deaths = 0; p.xp = 0; p.lvl = 1; p.dmg = 0; p.pts = 0; p.ptsAcc = 0; p.ult = 0;
      p.pingSum = p.pingN = p.fpsSum = p.fpsN = 0; p.joinedAt = Date.now();
      this.spawn(p);
    }
    this.rosterDirty = true;
  }

  shoot(p) {
    const c = p.cls;
    p.fireCd = c.fireCd * (p.bot ? this.dOf(p).cd : 1) * 0.88 ** this.perk(p, 'cepat');
    const ox = p.x + Math.sin(p.yaw) * 0.9, oz = p.z + Math.cos(p.yaw) * 0.9;
    const extra = this.perk(p, 'ganda') * (c.pellets > 1 ? 2 : 1), n = c.pellets + extra;
    for (let i = 0; i < n; i++) {
      // peluru tambahan dari berkah Ganda menyebar sedikit ke samping
      const a = p.yaw + (Math.random() - 0.5) * 2 * c.spread + (i >= c.pellets ? ((i - c.pellets) % 2 ? -1 : 1) * 0.07 * (1 + Math.floor((i - c.pellets) / 2)) : 0);
      const pr = {
        id: this.nextPid++, o: p.id, tm: p.team, x: ox, z: oz, dx: Math.sin(a), dz: Math.cos(a),
        sp: c.projSpeed, life: c.projLife, dmg: c.dmg * DMG_SCALE * levelDmg(p.lvl) * (p.dmgT > 0 ? DMG_BUFF : 1) * (p.monster ? PVE.diffMul[this.diff] * this.waveDmg : 1) * (1 + 0.15 * this.perk(p, 'tajam')), splash: c.splash,
      };
      this.events.push(['s', pr.id, p.id, r2(ox), r2(oz), Math.round(a * 1000) / 1000]);
      if (this.pointBlank(pr, p)) continue;
      if (!this.rewindFly(pr, p)) this.projs.push(pr);
    }
  }

  // Lawan yang menempel di badan penembak: peluru muncul 0,9 langkah di depan dan bisa lahir di belakangnya.
  // Periksa ruas dari tubuh penembak ke titik muncul peluru lebih dulu.
  pointBlank(pr, p) {
    const hitR = PLAYER_R + 0.35, ax = p.x, az = p.z, bx = pr.x, bz = pr.z, lx = bx - ax, lz = bz - az, l2 = lx * lx + lz * lz || 1;
    let best = null, bt = 2;
    for (const t of this.players.values()) {
      if (t.dead || t.id === p.id || (pr.tm >= 0 && t.team === pr.tm)) continue;
      const u = Math.max(0, Math.min(1, ((t.x - ax) * lx + (t.z - az) * lz) / l2));
      const dx = ax + lx * u - t.x, dz = az + lz * u - t.z;
      if (dx * dx + dz * dz < hitR * hitR && u < bt) { bt = u; best = t; }
    }
    if (!best) return false;
    pr.x = best.x; pr.z = best.z; this.explode(pr, best.id);
    return true;
  }

  // Posisi pemain t pada tick pecahan tf, diinterpolasi dari riwayat. Di luar riwayat: posisi terdekat yang tersimpan.
  posAt(t, tf) {
    const h = t.hist;
    if (!h.length || tf >= h[h.length - 1][0]) return [t.x, t.z];
    if (tf <= h[0][0]) return [h[0][1], h[0][2]];
    for (let i = h.length - 1; i > 0; i--) {
      const a = h[i - 1], b = h[i];
      if (tf >= a[0]) { const f = (tf - a[0]) / (b[0] - a[0] || 1); return [a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f]; }
    }
    return [t.x, t.z];
  }

  // Kompensasi lag: penembak melihat lawan sekitar (rtt/2 + INTERP) detik di masa lalu. Proyektil diterbangkan
  // sepanjang waktu itu terhadap posisi lawan di masa lalu, lalu dilanjutkan normal. true = sudah mengenai sesuatu.
  // Klien mengirim tick dunia yang sedang ia tampilkan (vt); itulah yang dibidik pemain.
  rewindFly(pr, p) {
    if (!LAGCOMP || p.bot || !p.vt) return false;
    const lag = Math.min(LAG_MAX, Math.max(0, (this.tickN - p.vt) / TICK));
    if (lag < 0.02) return false;
    const hitR2 = (PLAYER_R + 0.35) ** 2, dist = pr.sp * lag, n = Math.max(1, Math.ceil(dist / 0.5)), st = dist / n;
    for (let k = 1; k <= n; k++) {
      pr.x += pr.dx * st; pr.z += pr.dz * st;
      if (blocked(pr.x, pr.z, 0.15)) { this.explode(pr, 0); return true; }
      const tf = this.tickN - (lag - (k / n) * lag) * TICK;
      for (const t of this.players.values()) {
        if (t.dead || t.id === pr.o || (pr.tm >= 0 && t.team === pr.tm)) continue;
        const [tx, tz] = this.posAt(t, tf), dx = tx - pr.x, dz = tz - pr.z;
        if (dx * dx + dz * dz < hitR2) { this.explode(pr, t.id); return true; }
      }
    }
    pr.life -= lag;
    if (pr.life <= 0) { if (pr.splash > 0) this.explode(pr, 0); return true; }
    return false;
  }

  explode(pr, hitId) {
    const owner = this.players.get(pr.o);
    this.events.push(['h', pr.id, r2(pr.x), r2(pr.z), hitId]);
    if (pr.splash > 0) {
      for (const t of this.players.values()) {
        if (t.dead || t.id === pr.o || (pr.tm >= 0 && t.team === pr.tm)) continue;
        const d = Math.hypot(t.x - pr.x, t.z - pr.z);
        if (t.id === hitId) this.damage(t, pr.dmg, owner);
        else if (d < pr.splash) this.damage(t, pr.dmg * (1 - 0.6 * d / pr.splash), owner);
      }
    } else if (hitId) {
      const t = this.players.get(hitId);
      if (t) this.damage(t, pr.dmg, owner);
    }
  }

  stepProjs() {
    const hitR2 = (PLAYER_R + 0.35) ** 2;
    for (let i = this.projs.length - 1; i >= 0; i--) {
      const pr = this.projs[i];
      if (this.state !== 'play') break;
      const dist = pr.sp * DT, n = Math.ceil(dist / 0.5), st = dist / n;
      let done = false;
      for (let k = 0; k < n && !done; k++) {
        pr.x += pr.dx * st; pr.z += pr.dz * st;
        if (blocked(pr.x, pr.z, 0.15)) { this.explode(pr, 0); done = true; break; }
        for (const t of this.players.values()) {
          if (t.dead || t.id === pr.o || (pr.tm >= 0 && t.team === pr.tm)) continue;
          const dx = t.x - pr.x, dz = t.z - pr.z;
          if (dx * dx + dz * dz < hitR2) { this.explode(pr, t.id); done = true; break; }
        }
      }
      if (!done) {
        pr.life -= DT;
        if (pr.life <= 0) { if (pr.splash > 0) this.explode(pr, 0); done = true; }
      }
      if (done) this.projs.splice(i, 1);
    }
  }

  dOf(p) { return this.pve && p.ally ? BOT_DIFF.normal : this.D; }

  botThink(p) {
    const D = this.dOf(p);
    const ai = p.ai;
    ai.retT -= DT;
    if (ai.retT <= 0) {
      const prev = ai.tgt;
      ai.retT = 0.3; ai.tgt = 0; let best = 60;
      // berapa bot lain yang sudah mengincar tiap pemain: dipakai agar bot tidak mengeroyok satu orang
      const hunted = new Map();
      for (const b of this.players.values()) if (b.bot && b !== p && b.ai.tgt) hunted.set(b.ai.tgt, (hunted.get(b.ai.tgt) || 0) + 1);
      for (const q of this.players.values()) {
        if (q.dead || !this.foes(p, q)) continue;
        const d = Math.hypot(q.x - p.x, q.z - p.z);
        // target lama diberi keuntungan 8 agar bot tidak berganti-ganti target (dan jeda reaksinya tidak terus mulai ulang)
        const score = d + (hunted.get(q.id) || 0) * D.spread + (q.bot ? 0 : D.humanPenalty) - (q.id === prev ? 8 : 0);
        const sight = this.ev?.id === 'eclipse' ? 18 : 45; // saat Gerhana bot hanya melihat dekat
        if (score < best && d < sight && los(p.x, p.z, q.x, q.z)) { best = score; ai.tgt = q.id; }
      }
      if (ai.tgt !== prev) ai.seenT = 0; // target baru: bot perlu waktu bereaksi
    }
    ai.seenT += DT;
    let mx = 0, mz = 0, f = 0, k = 0, want = p.yaw;
    const t = this.players.get(ai.tgt);
    if (t && !t.dead) {
      const dx = t.x - p.x, dz = t.z - p.z, d = Math.hypot(dx, dz) || 1;
      ai.errT -= DT;
      // pemain yang sedang sial (gugur beruntun tanpa kill) dibidik lebih longgar dan lebih lambat
      const mercy = !t.bot && t.streak >= MERCY_DEATHS;
      const errMax = D.err * (mercy ? 1.6 : 1), react = D.react + (mercy ? 0.35 : 0);
      if (ai.errT <= 0) { ai.errT = 0.45; ai.err = (Math.random() - 0.5) * 2 * errMax; }
      want = Math.atan2(dx, dz) + ai.err;
      const range = p.clsKey === 'guardian' ? 9 : p.clsKey === 'mage' ? 20 : 24;
      ai.strT -= DT;
      if (ai.strT <= 0) { ai.strT = 0.6 + Math.random() * 1.2; ai.strDir = Math.random() < 0.5 ? -1 : 1; }
      const nx = dx / d, nz = dz / d;
      const adv = d > range ? 1 : d < range * 0.5 ? -0.7 : 0;
      mx = -nz * ai.strDir * 0.8 + nx * adv; mz = nx * ai.strDir * 0.8 + nz * adv;
      if (Math.abs(angDiff(want, p.yaw)) < 0.25 && d < range * 1.5 && ai.seenT >= react) f = 1;
      if (p.clsKey === 'ranger' && p.hurtT < 0.2 && Math.random() < 0.15) k = 1;
      if (p.clsKey === 'mage' && d < NOVA_R - 1.5) k = 1;
      if (p.clsKey === 'guardian' && p.hp < p.maxHp * 0.5 && p.hurtT < 0.5) k = 1;
      if (p.ult >= ULT_MAX && d < 14 && ai.seenT >= react && Math.random() < 0.05) ai.ult = 1;
      if (this.practice) { f = 0; k = 0; mx = -nz * ai.strDir * 0.25; mz = nx * ai.strDir * 0.25; } // bot boneka: bergeser pelan ke samping, tidak menyerang dan tidak kabur
    } else {
      const moved = Math.hypot(p.x - ai.lx, p.z - ai.lz);
      ai.lx = p.x; ai.lz = p.z;
      ai.stuckT = moved < 0.05 ? ai.stuckT + DT : 0;
      if (!ai.wp || ai.stuckT > 0.6 || Math.hypot(ai.wp[0] - p.x, ai.wp[1] - p.z) < 2) {
        const wps = WAYPOINTS[this.map];
        ai.wp = wps[Math.floor(Math.random() * wps.length)]; ai.stuckT = 0;
        if (!this.practice) {
          // incar rune terdekat yang tersedia; di Rebut Altar sering menuju lingkaran altar
          let best = null, bd = 22;
          this.M.runes.forEach((r, i) => { const d = Math.hypot(r.x - p.x, r.z - p.z); if (this.runeT[i] <= 0 && d < bd) { bd = d; best = [r.x, r.z]; } });
          if (best && Math.random() < 0.7) ai.wp = best;
          else if (this.mode === 'koth' && Math.random() < 0.65) {
            const a = Math.random() * Math.PI * 2, r = 4.5 + Math.random() * 2;
            ai.wp = [Math.cos(a) * r, Math.sin(a) * r];
          }
        }
      }
      const dx = ai.wp[0] - p.x, dz = ai.wp[1] - p.z, d = Math.hypot(dx, dz) || 1;
      mx = dx / d; mz = dz / d; want = Math.atan2(dx, dz);
    }
    const turn = (this.practice ? 5 : D.turn) * DT, diff = angDiff(want, p.yaw);
    const yaw = p.yaw + Math.max(-turn, Math.min(turn, diff));
    const u = ai.ult ? 1 : 0; ai.ult = 0;
    return { s: 0, mx, mz, y: yaw, f, k, u };
  }

  applyInput(p, inp) {
    const fired = stepPlayer(p, inp, p.cls, DT);
    if (fired && this.perk(p, 'fokus')) p.skillCd *= 0.8 ** this.perk(p, 'fokus');
    if (inp.s) p.ack = inp.s;
    if (inp.vt) p.vt = inp.vt;
    if (inp.u) this.ultimate(p);
    if (fired) {
      if (p.cls.skill === 'nova') {
        this.events.push(['n', p.id, r2(p.x), r2(p.z)]);
        for (const t of this.players.values()) {
          if (t === p || t.dead) continue;
          const d = Math.hypot(t.x - p.x, t.z - p.z);
          if (d < NOVA_R) this.damage(t, NOVA_DMG * DMG_SCALE * levelDmg(p.lvl) * (p.dmgT > 0 ? DMG_BUFF : 1) * (1 - 0.5 * d / NOVA_R), p);
        }
      } else if (p.cls.skill === 'shield') {
        p.shieldT = SHIELD_TIME;
      }
    }
  }

  tick() {
    setMap(this.map); // fisika bersama memakai peta room ini
    if (this.state === 'end') {
      this.endT -= DT;
      for (const p of this.players.values()) if (p.queue.length) { p.ack = p.queue[p.queue.length - 1].s; p.queue.length = 0; }
      if (this.endT <= 0) this.resetMatch();
    } else {
      for (const p of this.players.values()) {
        if (p.dead) {
          if (p.queue.length) { p.ack = p.queue[p.queue.length - 1].s; p.queue.length = 0; }
          if (this.pve && !p.bot && this.state === 'play') {
            // ditolong rekan yang berdiri di dekatnya, atau bangkit sendiri dengan nyawa cadangan
            let by = null;
            for (const q of this.players.values()) if (!q.dead && !q.monster && q !== p && Math.hypot(q.x - p.x, q.z - p.z) < PVE.reviveR) { by = q; break; }
            if (by) p.reviveP += DT;
            if (p.reviveP >= PVE.reviveTime) { this.revive(p, by); continue; }
            if (p.spareT > 0) { p.spareT -= DT; if (p.spareT <= 0) { this.revive(p, p); continue; } }
          }
          p.respawnT -= DT;
          if (p.respawnT <= 0) { if (p.monster) this.removePlayer(p); else this.spawn(p); }
          continue;
        }
        p.spd = (p.spdT > 0 ? SPD_BUFF : 1) * (1 + 0.1 * this.perk(p, 'lincah'));
        let inp;
        if (p.monster) { inp = this.monsterThink(p); this.applyInput(p, inp); } else if (p.bot) { inp = this.botThink(p); this.applyInput(p, inp); } else {
          inp = p.queue.shift();
          if (inp) {
            this.applyInput(p, inp);
            // kejar ketertinggalan bila antrean menumpuk
            while (p.queue.length > 3) { inp = p.queue.shift(); this.applyInput(p, inp); }
            p.last = inp;
          } else {
            inp = { s: 0, mx: p.last.mx, mz: p.last.mz, y: p.last.y, f: p.last.f, k: 0 };
            this.applyInput(p, inp);
          }
        }
        if (p.fireCd > 0) p.fireCd -= DT;
        if (p.shieldT > 0) p.shieldT -= DT;
        if (p.dmgT > 0) p.dmgT -= DT;
        if (p.spdT > 0) p.spdT -= DT;
        if (p.protT > 0) { p.protT -= DT; if (inp.f) p.protT = 0; }
        p.hurtT += DT;
        const pl = this.perk(p, 'pulih');
        if (p.hurtT > REGEN_DELAY - pl && p.hp < p.maxHp) p.hp = Math.min(p.maxHp, p.hp + (REGEN_RATE + 4 * pl) * DT);
        if (inp.f && p.fireCd <= 0 && !p.dead) this.shoot(p);
      }
      this.tickN++;
      if (this.pve) {
        // monster saling menjaga jarak (dan tidak menembus pemain) sehingga mengepung, bukan menumpuk
        const ms = [...this.players.values()].filter((q) => !q.dead), MIN = 1.25;
        for (let i = 0; i < ms.length; i++) for (let j = i + 1; j < ms.length; j++) {
          const a = ms[i], b = ms[j];
          if (!a.monster && !b.monster) continue;
          const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz);
          if (d >= MIN || d < 1e-4) continue;
          const push = (MIN - d) / 2, nx = dx / d, nz = dz / d;
          if (a.monster) { a.x -= nx * push * (b.monster ? 1 : 2); a.z -= nz * push * (b.monster ? 1 : 2); }
          if (b.monster) { b.x += nx * push * (a.monster ? 1 : 2); b.z += nz * push * (a.monster ? 1 : 2); }
        }
        for (const q of ms) if (q.monster) collide(q, PLAYER_R);
      }
      for (const p of this.players.values()) {
        if (p.dead) continue;
        p.hist.push([this.tickN, p.x, p.z]);
        if (p.hist.length > HIST) p.hist.shift();
      }
      this.stepProjs();
      this.stepMeteors();
      this.stepEvent();
      for (let i = 0; i < this.M.runes.length; i++) {
        if (this.runeT[i] > 0) { this.runeT[i] -= DT; continue; }
        const r = this.M.runes[i];
        for (const p of this.players.values()) {
          if (p.dead || Math.hypot(p.x - r.x, p.z - r.z) > 1.6) continue;
          if (r.type === 'dmg') p.dmgT = RUNE_TIME; else p.spdT = RUNE_TIME;
          this.runeT[i] = RUNE_RESPAWN;
          this.events.push(['u', i, p.id]);
          this.track(p, { type: 'rune' });
          break;
        }
      }
      if (this.mode === 'koth' && this.state === 'play') {
        const inZone = [...this.players.values()].filter((p) => !p.dead && Math.hypot(p.x, p.z) < KOTH_R);
        const holder = inZone.length === 1 ? inZone[0].id : inZone.length > 1 ? -1 : 0;
        if (holder !== this.holder) { this.holder = holder; for (const p of this.players.values()) p.ptsAcc = 0; }
        if (holder > 0) {
          const h = inZone[0];
          h.ptsAcc += DT;
          if (h.ptsAcc >= 1) {
            h.ptsAcc -= 1; h.pts++; this.addXp(h, 8); this.rosterDirty = true;
            if (h.pts >= KOTH_WIN) this.endMatch();
          }
        }
      }
      if (this.state !== 'play') this.projs.length = 0;
      for (let i = 0; i < this.M.orbs.length; i++) {
        if (this.orbT[i] > 0) { this.orbT[i] -= DT; continue; }
        for (const p of this.players.values()) {
          if (p.dead || p.hp >= p.maxHp) continue;
          if (Math.hypot(p.x - this.M.orbs[i][0], p.z - this.M.orbs[i][1]) < 1.6) {
            p.hp = Math.min(p.maxHp, p.hp + ORB_HEAL);
            this.orbT[i] = ORB_RESPAWN;
            this.events.push(['o', i, p.id]);
            this.track(p, { type: 'orb' });
            break;
          }
        }
      }
      if (this.pve) this.pveTick(); else {
        this.timeLeft -= DT;
        if (this.timeLeft <= 0) this.endMatch();
      }
    }
    this.broadcast();
  }

  broadcast() {
    if (this.rosterDirty) {
      this.rosterDirty = false;
      const msg = JSON.stringify({
        t: 'r',
        l: [...this.players.values()].map((p) => [p.id, p.name, p.clsKey, p.kills, p.deaths, p.bot ? 1 : 0, p.pts, p.team, p.skin || 'default']),
        ts: this.teams ? this.teamScore : null,
        gm: this.mode,
      });
      for (const p of this.players.values()) if (p.ws && p.ws.readyState === 1) p.ws.send(msg);
    }
    const list = [];
    for (const p of this.players.values()) {
      const fl = (p.dead ? 1 : 0) | (p.shieldT > 0 ? 2 : 0) | (p.protT > 0 ? 4 : 0) | (p.dashT > 0 ? 8 : 0) | (p.dmgT > 0 ? 16 : 0) | (p.spdT > 0 ? 32 : 0) | (p.id === this.bounty ? 64 : 0);
      list.push([p.id, r2(p.x), r2(p.z), Math.round(p.yaw * 1000) / 1000, Math.ceil(p.hp), p.maxHp, p.lvl, fl]);
    }
    let orbMask = 0;
    for (let i = 0; i < this.M.orbs.length; i++) if (this.orbT[i] <= 0) orbMask |= 1 << i;
    let runeMask = 0;
    for (let i = 0; i < this.M.runes.length; i++) if (this.runeT[i] <= 0) runeMask |= 1 << i;
    const base = {
      t: 's', st: this.state === 'end' ? 1 : 0,
      tm: Math.ceil(this.state === 'end' ? this.endT : this.pve ? Math.max(0, this.waveT) : this.timeLeft),
      wv: this.pve ? [this.wave, this.wavePhase, this.spawnQ.length + [...this.players.values()].filter((q) => q.monster && !q.dead).length, this.checkpoint] : undefined,
      rv: this.pve ? [...this.players.values()].filter((q) => q.dead && !q.bot).map((q) => [q.id, Math.round((q.reviveP / PVE.reviveTime) * 100), Math.ceil(q.spareT)]) : undefined,
      p: list, e: this.events, o: orbMask, u: runeMask, z: this.holder, k: this.tickN, mp: this.map,
      ev: this.ev ? [this.ev.id, Math.ceil(this.ev.t), this.ev.gx ?? null, this.ev.gz ?? null, this.ev.taken ? 1 : 0] : null,
    };
    for (const p of this.players.values()) {
      if (!p.ws || p.ws.readyState !== 1) continue;
      if (p.ws.bufferedAmount > 65536) continue; // koneksi macet: lewati snapshot ini
      base.a = p.ack;
      base.me = [p.x, p.z, p.dashT, p.dx, p.dz, p.skillCd, Math.floor(p.xp), r2(Math.max(0, p.respawnT)), r2(Math.max(0, p.dmgT)), r2(Math.max(0, p.spdT)), Math.floor(p.ult), Object.entries(p.perks).map(([k, v]) => k + v).join(','), p.offer || 0, p.spare];
      p.ws.send(JSON.stringify(base));
    }
    this.events = [];
  }
}

// ---------- HTTP statis ----------
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json',
};
const server = http.createServer((req, res) => {
  const url = decodeURIComponent((req.url || '/').split('?')[0]);
  if (url === '/api/top' || url === '/api/stats') {
    const q = new URL(req.url, 'http://x').searchParams;
    const body = url === '/api/top' ? stats.top() : { stats: stats.get(q.get('pid')), daily: stats.dailyFor(q.get('pid')) };
    res.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' });
    res.end(JSON.stringify(body)); return;
  }
  if (url === '/health') { res.writeHead(200, { 'content-type': 'application/json' }); res.end('{"ok":true}'); return; }
  const file = path.normalize(path.join(ROOT, url === '/' ? 'index.html' : url));
  if (!file.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Tidak ditemukan'); return; }
    if (path.basename(file) === 'index.html') {
      // nomor versi pada skrip dan gaya: cache browser, WebView, atau Cloudflare tidak bisa memakai berkas lama
      let v = '0';
      try { v = Math.floor(fs.statSync(path.join(ROOT, 'dist', 'bundle.js')).mtimeMs).toString(36); } catch { /* belum dibangun */ }
      data = data.toString().replace('dist/bundle.js', `dist/bundle.js?v=${v}`).replace('style.css', `style.css?v=${v}`);
      res.writeHead(200, { 'content-type': MIME['.html'], 'cache-control': 'no-store' });
      return res.end(data);
    }
    res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-cache' });
    res.end(data);
  });
});

// ---------- WebSocket ----------
const rooms = [];
const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 2048 });
const num = (v, lo, hi) => (typeof v === 'number' && Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : 0);

wss.on('connection', (ws) => {
  let room = null, me = null;
  ws.on('message', (raw) => {
    let m;
    try { m = JSON.parse(raw.toString()); } catch { return; }
    if (!m || typeof m !== 'object') return;
    if (m.t === 'join' && !me) {
      const clsKey = CLASS_KEYS.includes(m.cls) ? m.cls : 'ranger';
      const name = String(m.name || '').replace(/[^\p{L}\p{N} _\-]/gu, '').trim().slice(0, 14) || 'Pengembara';
      const mode = ['public', 'create', 'join', 'practice'].includes(m.mode) ? m.mode : 'public';
      const fail = (msg) => { ws.send(JSON.stringify({ t: 'e', m: msg })); ws.close(); };
      if (mode === 'join') {
        const code = String(m.code || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4);
        room = rooms.find((r) => r.code === code);
        if (!room) return fail(`Room ${code || '(kosong)'} tidak ditemukan. Periksa kodenya.`);
        if (room.humans() >= MAX_HUMANS) { room = null; return fail('Room itu sudah penuh (8 pemain).'); }
      } else if (mode === 'create') {
        room = new Room({ code: newCode(), mode: m.gm, map: MAPS[m.map] ? m.map : 'rotate', diff: m.diff }); rooms.push(room);
      } else if (mode === 'practice') {
        room = new Room({ practice: true, map: 'ruins' }); rooms.push(room);
      } else {
        room = rooms.find((r) => !r.code && !r.practice && r.humans() < MAX_HUMANS);
        if (!room) { room = new Room(); rooms.push(room); }
      }
      setMap(room.map);
      me = room.addPlayer(name, clsKey, ws);
      if (stats.validId(m.pid)) { me.pid = m.pid; stats.touch(m.pid, name); }
      const skin = SKINS.find((k) => k.id === m.skin);
      me.skin = skin && skinUnlocked(skin, stats.get(me.pid)) ? skin.id : 'default'; // jubah terkunci ditolak di server
      room.rosterDirty = true;
      room.balanceBots();
      ws.send(JSON.stringify({ t: 'w', id: me.id, team: me.team, limit: room.mode === 'koth' ? KOTH_WIN : room.teams ? TEAM_WIN : LIMIT, code: room.code, practice: room.practice, gm: room.mode, map: room.map, diff: room.diff }));
    } else if (m.t === 'in' && me) {
      if (me.queue.length < 12) {
        me.queue.push({
          s: num(m.s, 0, 1e9) | 0, mx: num(m.mx, -1, 1), mz: num(m.mz, -1, 1),
          y: num(m.y, -1e4, 1e4), f: m.f ? 1 : 0, k: m.k ? 1 : 0, u: m.u ? 1 : 0, vt: num(m.vt, 0, 1e9),
        });
      }
    } else if (m.t === 'perk' && me && room?.pve) {
      room.pickPerk(me, String(m.id || ''));
    } else if (m.t === 'spr' && me) {
      // balasan ping dari server: rtt diukur server sendiri, dipakai kompensasi lag dan catatan
      const v = Date.now() - num(m.c, 0, 1e15);
      if (v >= 0 && v < 5000) { me.rtt = me.rtt ? me.rtt * 0.7 + v * 0.3 : v; me.pingSum += v; me.pingN++; }
    } else if (m.t === 'st' && me) {
      // laporan berkala klien untuk catatan pertandingan
      const f = num(m.f, 0, 240);
      if (f > 0) { me.fpsSum += f; me.fpsN++; }
    } else if (m.t === 'pg') {
      ws.send(JSON.stringify({ t: 'pg', c: num(m.c, 0, 1e15) }));
    }
  });
  ws.on('close', () => {
    if (!room || !me) return;
    setMap(room.map);
    room.removePlayer(me);
    room.balanceBots();
    if (room.humans() === 0 && room.pve && room.state === 'play') room.logPve(true); // sesi Bertahan yang ditinggalkan tetap tercatat
    if (room.humans() === 0 && rooms.includes(room)) rooms.splice(rooms.indexOf(room), 1);
  });
  ws.on('error', () => {});
});

// ping dari server setiap detik ke semua pemain manusia
setInterval(() => {
  const msg = JSON.stringify({ t: 'sp', c: Date.now() });
  for (const r of rooms) for (const p of r.players.values()) if (p.ws && p.ws.readyState === 1) p.ws.send(msg);
}, 1000);

let next = Date.now();
function loop() {
  const now = Date.now();
  let n = 0;
  while (next <= now && n++ < 5) {
    for (const r of rooms) {
      // satu bug di satu room tidak boleh mematikan seluruh server
      try { r.tick(); } catch (err) { console.error('tick gagal:', err); r.events = []; r.projs.length = 0; }
    }
    next += 1000 / TICK;
  }
  if (next < now) next = now;
  setTimeout(loop, Math.max(1, next - Date.now()));
}
loop();

for (const sig of ['SIGTERM', 'SIGINT']) process.on(sig, () => { stats.flush(); process.exit(0); });

server.listen(PORT, () => console.log(`Arkana server berjalan di port ${PORT}`));
