// Konstanta bersama klien & server. Jangan impor modul khusus Node/browser di sini.
export const TICK = 30;
export const DT = 1 / TICK;
export const ARENA = 44;          // setengah sisi arena
export const PLAYER_R = 0.7;
export const DASH_SPEED = 30;
export const DASH_TIME = 0.18;
export const MATCH_TIME = 300;    // detik
export const KILL_LIMIT = 20;
export const END_TIME = 12;
export const RESPAWN_TIME = 3;
export const PROTECT_TIME = 1.5;
export const MAX_HUMANS = 8;
export const BOT_FILL = 6;
export const MAX_LEVEL = 5;
export const XP_LV = [0, 100, 250, 450, 700]; // XP_LV[l] = xp untuk naik dari level l ke l+1
export const NOVA_R = 6.5;
export const NOVA_DMG = 42;
export const SHIELD_TIME = 3;
export const ORB_HEAL = 40;
export const ORB_RESPAWN = 18;

export const CLASSES = {
  ranger: {
    name: 'Pemanah Arkana', desc: 'Tembakan cepat jarak jauh', skillName: 'Kilat',
    skillDesc: 'Melesat cepat ke arah gerak',
    hp: 100, speed: 8.5, fireCd: 0.16, dmg: 9, projSpeed: 70, projLife: 0.7,
    pellets: 1, spread: 0.015, splash: 0, skill: 'dash', skillCd: 5, color: 0x4de3ff,
  },
  mage: {
    name: 'Penyihir Bara', desc: 'Bola api dengan ledakan area', skillName: 'Nova',
    skillDesc: 'Ledakan di sekeliling tubuh',
    hp: 90, speed: 7.5, fireCd: 0.7, dmg: 34, projSpeed: 32, projLife: 1.6,
    pellets: 1, spread: 0, splash: 3.5, skill: 'nova', skillCd: 9, color: 0xff7a2e,
  },
  guardian: {
    name: 'Penjaga Rune', desc: 'Sebaran rune jarak dekat, tubuh kuat', skillName: 'Perisai',
    skillDesc: 'Menahan 70% serangan selama 3 detik',
    hp: 140, speed: 7, fireCd: 0.75, dmg: 8, projSpeed: 55, projLife: 0.32,
    pellets: 6, spread: 0.16, splash: 0, skill: 'shield', skillCd: 10, color: 0x9dff6a,
  },
};
export const CLASS_KEYS = Object.keys(CLASSES);

export function levelDmg(lvl) { return 1 + 0.08 * (lvl - 1); }
export function levelHp(cls, lvl) { return cls.hp + 12 * (lvl - 1); }

// ---- Peta: simetris empat arah ----
const O = [];
const cyl = (x, z, r, h, kind) => O.push({ t: 'cyl', x, z, r, h, kind });
const box = (x, z, w, d, h, kind) => O.push({ t: 'box', x, z, w, d, h, kind });
cyl(0, 0, 3.2, 1.4, 'altar');
for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
  cyl(sx * 13, sz * 13, 1.3, 9, 'pillar');
  box(sx * 30, sz * 26, 12, 2, 4.5, 'wall');
  box(sx * 35, sz * 31, 2, 10, 4.5, 'wall');
  box(sx * 9, sz * 33, 3, 3, 2.6, 'block');
  box(sx * 33, sz * 9, 3, 3, 2.6, 'block');
}
for (const s of [-1, 1]) {
  cyl(0, s * 30, 1.3, 9, 'pillar');
  cyl(s * 28, 0, 1.3, 9, 'pillar');
  box(0, s * 21, 16, 2, 4, 'wall');
  box(s * 21, 0, 2, 16, 4, 'wall');
}
export const OBST = O;

export const SPAWNS = [
  [40, 7], [-40, -7], [-7, 40], [7, -40],
  [38, 18], [38, -18], [-38, 18], [-38, -18],
  [18, 38], [-18, 38], [18, -38], [-18, -38],
];
export const ORBS = [
  [12, 0], [-12, 0], [0, 12], [0, -12],
  [39, 39], [-39, 39], [39, -39], [-39, -39],
];

// ---- Paket B ----
export const MODES = { dm: 'Deathmatch', koth: 'Rebut Altar' };
export const KOTH_R = 7.5;          // jari-jari lingkaran altar
export const KOTH_LIMIT = 60;       // poin (detik menguasai sendirian) untuk menang
export const RUNE_TIME = 10;        // lama efek rune
export const RUNE_RESPAWN = 25;
export const DMG_BUFF = 1.5;
export const SPD_BUFF = 1.35;
export const RUNE_INFO = {
  dmg: { name: 'Rune Amarah', desc: 'damage +50%', color: 0xff3b4e },
  spd: { name: 'Rune Angin', desc: 'kecepatan +35%', color: 0x4dc3ff },
};
export const RUNES = [
  { x: 0, z: 26, type: 'dmg' }, { x: 0, z: -26, type: 'dmg' },
  { x: 18, z: 18, type: 'spd' }, { x: -18, z: -18, type: 'spd' },
];
export const INTERP = 0.11;         // klien menampilkan lawan 110 ms di belakang
export const LAG_MAX = 0.45;        // batas putar-mundur kompensasi lag (detik), setara RTT ~340 ms + interpolasi

// ---- Mode tim ----
MODES.tdm = 'Tim';
MODES.coop = 'Lawan Bot';
export const TEAM_MODES = ['tdm', 'coop'];
export const TEAM_LIMIT = 30;       // kill tim untuk menang
export const TEAMS = [
  { name: 'Fajar', color: 0xf2c66d },
  { name: 'Senja', color: 0xa06bff },
];
