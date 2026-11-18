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
export const PROTECT_TIME = 3;
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
  priest: {
    name: 'Haji Toriq', desc: 'Penyembuh: memulihkan diri dan rekan', skillName: 'Doa',
    skillDesc: 'Pulihkan 35 HP untukmu dan rekan di dekatmu',
    hp: 95, speed: 8, fireCd: 0.4, dmg: 13, projSpeed: 45, projLife: 0.8,
    pellets: 1, spread: 0.02, splash: 0, skill: 'heal', skillCd: 9, color: 0xffe27a,
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

// ---- Peta kedua: Pelabuhan Bulan (malam, dermaga kayu), juga simetris empat arah ----
const H = [];
const hcyl = (x, z, r, h, kind) => H.push({ t: 'cyl', x, z, r, h, kind });
const hbox = (x, z, w, d, h, kind) => H.push({ t: 'box', x, z, w, d, h, kind });
hcyl(0, 0, 2.6, 2.2, 'bell');                       // menara lonceng di tengah (pusat Rebut Altar)
for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
  hbox(sx * 31, sz * 13, 12, 4, 5, 'shed');           // gudang memanjang
  hbox(sx * 13, sz * 31, 4, 12, 5, 'shed');
  hcyl(sx * 24, sz * 24, 0.6, 12, 'mast');            // tiang kapal dengan lentera
  hbox(sx * 16, sz * 15, 3, 3, 2.4, 'crate');         // tumpukan peti
  hbox(sx * 15, sz * 18.5, 2.4, 2.4, 1.8, 'crate');
  hbox(sx * 35, sz * 33, 4, 9, 1.7, 'boat');          // perahu yang ditarik ke darat
}
for (const s of [-1, 1]) {
  hbox(0, s * 21, 9, 2.6, 2.4, 'crate');
  hbox(s * 21, 0, 2.6, 9, 2.4, 'crate');
  hcyl(s * 10.5, s * -10.5, 0.6, 7, 'post');          // tiang tambat
  hcyl(s * -10.5, s * -10.5, 0.6, 7, 'post');
}
export const MAPS = {
  ruins: { name: 'Reruntuhan Senja', obst: OBST, spawns: SPAWNS, orbs: ORBS, runes: RUNES },
  harbor: {
    name: 'Pelabuhan Bulan', obst: H,
    spawns: [[40, 0], [-40, 0], [0, 40], [0, -40], [39, 22], [39, -22], [-39, 22], [-39, -22], [22, 39], [-22, 39], [22, -39], [-22, -39]],
    orbs: [[10, 0], [-10, 0], [0, 10], [0, -10], [27, 27], [-27, 27], [27, -27], [-27, -27]],
    runes: [{ x: 0, z: 30, type: 'dmg' }, { x: 0, z: -30, type: 'dmg' }, { x: 30, z: 0, type: 'spd' }, { x: -30, z: 0, type: 'spd' }],
  },
};
export const MAP_KEYS = Object.keys(MAPS);

// ---- Jubah yang bisa dibuka (warna jubah/aksen dan cahaya senjata) ----
export const SKINS = [
  { id: 'default', name: 'Bawaan kelas', req: null },
  { id: 'zamrud', name: 'Zamrud', accent: 0x1f6b4a, req: { stat: 'matches', n: 5, text: 'Selesaikan 5 ronde' } },
  { id: 'senja', name: 'Ungu Senja', accent: 0x5b2a86, req: { stat: 'kills', n: 25, text: '25 kill total' } },
  { id: 'bulan', name: 'Perak Bulan', accent: 0xaab6cc, glow: 0xdfe8ff, req: { stat: 'wins', n: 3, text: 'Menang 3 ronde' } },
  { id: 'naga', name: 'Darah Naga', accent: 0x7a0f1c, glow: 0xff3b2e, req: { stat: 'kills', n: 100, text: '100 kill total' } },
  { id: 'raja', name: 'Emas Raja', accent: 0xb8892a, glow: 0xffd56b, req: { stat: 'wins', n: 10, text: 'Menang 10 ronde' } },
];
export function skinUnlocked(skin, st) { return !skin.req || ((st && st[skin.req.stat]) || 0) >= skin.req.n; }

// ---- C1: lebih ramah untuk pemain HP ----
export const DMG_SCALE = 0.7;       // semua damage x0,7: waktu untuk tumbang ~1,8 -> ~2,6 dtk
export const REGEN_DELAY = 3;       // HP mulai pulih setelah 3 dtk tanpa terkena
export const REGEN_RATE = 12;       // HP per detik
// Tingkat kesulitan bot. react: jeda sebelum mulai menembak target baru (dtk); err: simpangan bidik maks (rad);
// cd: pengali jeda tembak; turn: kecepatan putar (rad/dtk); spread: hindari mengeroyok satu target.
export const BOT_DIFF = {
  easy: { name: 'Mudah', react: 0.7, err: 0.5, cd: 1.6, turn: 3, spread: 10, humanPenalty: 6 },
  normal: { name: 'Normal', react: 0.45, err: 0.3, cd: 1.25, turn: 4, spread: 6, humanPenalty: 0 },
  hard: { name: 'Sulit', react: 0.2, err: 0.15, cd: 1, turn: 5, spread: 0, humanPenalty: 0 },
};
export const MERCY_DEATHS = 3;      // gugur berturut-turut tanpa kill sebelum bot melunak pada pemain itu

// ---- C2: buronan, kejadian, jurus pamungkas, tantangan ----
export const BOUNTY_MIN = 3;        // kill minimal untuk menjadi buronan
export const BOUNTY_LEAD = 2;       // keunggulan minimal atas pemain kedua
export const BOUNTY_XP = 200;
export const EVENT_FIRST = 60, EVENT_EVERY = 90; // detik
export const EVENTS = {
  eclipse: { name: 'Gerhana', desc: 'Arena gelap, jarak pandang pendek', dur: 25 },
  runerain: { name: 'Hujan Rune', desc: 'Semua rune muncul dan cepat kembali', dur: 20 },
  golden: { name: 'Cawan Emas', desc: 'Ambil cawan: HP penuh dan kedua rune', dur: 30 },
};
export const ULT_MAX = 100;
export const ULT = {
  ranger: { name: 'Hujan Panah', desc: '11 panah menyebar sekaligus' },
  mage: { name: 'Meteor', desc: 'Meteor jatuh di depan, ledakan besar' },
  guardian: { name: 'Benteng Rune', desc: 'Perisai 5 dtk, pulih 50% HP, gelombang kejut' },
  priest: { name: 'Cahaya Fajar', desc: 'Rekan pulih penuh dan yang tumbang bangkit; lawan di dekatmu terluka' },
};
export const CHALLENGES = [
  { id: 'kill10', text: '10 kill di arena', type: 'kill', n: 10 },
  { id: 'kranger', text: '5 kill dengan Pemanah Arkana', type: 'kill', cls: 'ranger', n: 5 },
  { id: 'kmage', text: '5 kill dengan Penyihir Bara', type: 'kill', cls: 'mage', n: 5 },
  { id: 'kguard', text: '5 kill dengan Penjaga Rune', type: 'kill', cls: 'guardian', n: 5 },
  { id: 'win1', text: 'Menangkan 1 ronde', type: 'win', n: 1 },
  { id: 'koth1', text: 'Selesaikan 1 ronde Rebut Altar', type: 'round', mode: 'koth', n: 1 },
  { id: 'team1', text: 'Selesaikan 1 ronde Tim atau Lawan Bot', type: 'round', mode: 'team', n: 1 },
  { id: 'rune5', text: 'Ambil 5 rune', type: 'rune', n: 5 },
  { id: 'ult3', text: 'Pakai jurus pamungkas 3 kali', type: 'ult', n: 3 },
  { id: 'bounty1', text: 'Tumbangkan 1 buronan', type: 'bounty', n: 1 },
  { id: 'orb4', text: 'Pakai 4 bola penyembuh', type: 'orb', n: 4 },
];
SKINS.push(
  { id: 'fajar', name: 'Bintang Fajar', accent: 0xd9693a, glow: 0xffb070, req: { stat: 'chal', n: 3, text: 'Selesaikan 3 tantangan harian' } },
  { id: 'malam', name: 'Bayangan Malam', accent: 0x161a2e, glow: 0x7af0ff, req: { stat: 'chal', n: 10, text: 'Selesaikan 10 tantangan harian' } },
);

// ---- C3: Bertahan Bersama (gelombang monster) ----
MODES.pve = 'Bertahan Bersama';
export const MONSTERS = {
  ghoul: { name: 'Hantu Rawa', hp: 30, speed: 6.2, color: 0x7dff8a, melee: { dmg: 6, cd: 1.1, r: 1.9 } }, // lebih lambat dari semua kelas: bisa dihindari
  caster: { name: 'Dukun Bayang', hp: 38, speed: 5.4, color: 0xc86bff, range: 18,
    fireCd: 1.5, dmg: 15, projSpeed: 30, projLife: 1.6, pellets: 1, spread: 0.04, splash: 0, skill: 'none', skillCd: 99 },
  brute: { name: 'Golem Batu', hp: 260, speed: 4.0, color: 0xffa040, boss: true, // HP dikali (0,6 + 0,4 x jumlah pemain)
    melee: { dmg: 16, cd: 1.6, r: 2.8 }, slam: { dmg: 18, r: 5.5, cd: 7 } },
};
export const ALL_CLASSES = { ...CLASSES, ...MONSTERS };
export const PVE = {
  breakTime: 6,            // jeda antar gelombang
  cap: 22,                 // monster hidup maksimal sekaligus
  bossEvery: 5,
  winWave: 10,             // bertahan sampai gelombang 10 dihitung menang
  diffMul: { easy: 0.55, normal: 0.75, hard: 1.15 }, // Normal baru kira-kira setara Mudah sebelumnya
};
// isi gelombang n untuk h pemain manusia
export function wavePlan(n, h, opts = {}) {
  // gelombang 1-3 adalah pemanasan: sedikit monster, naik perlahan
  const total = Math.round((1 + 1.2 * n + 0.08 * n * n) * (0.65 + 0.35 * Math.max(1, h)));
  const be = opts.bossEvery || PVE.bossEvery; // event bisa memperapat bos
  const boss = n % be === 0;
  const casters = n >= 2 ? Math.round(total * 0.3) : 0;
  const list = [];
  // bos bergantian: gelombang 5, 15, ... Golem Batu; gelombang 10, 20, ... Ratu Laba-laba
  if (boss) for (let i = 0; i < Math.max(1, Math.ceil(n / (be * 2))); i++) list.push((n / be) % 2 === 0 ? 'queen' : 'brute');
  for (let i = 0; i < (boss ? Math.round(total * 0.4) : total) - (boss ? 0 : casters); i++) list.push('ghoul');
  // sejak gelombang 4, sebagian dukun diganti Penyihir Es yang memperlambat
  for (let i = 0; i < (boss ? Math.round(casters * 0.5) : casters); i++) list.splice(Math.floor(Math.random() * (list.length + 1)), 0, n >= 4 && i % 3 === 0 ? 'frost' : 'caster');
  const warm = Math.min(1, 0.6 + 0.1 * n); // pemanasan: HP dan serangan monster x0,7 di gelombang 1, naik 0,1 per gelombang
  return { list, hpMul: (1 + 0.12 * (n - 1)) * warm, dmgMul: warm };
}

// ---- D1: Bertahan Bersama lebih ramah ----
Object.assign(PVE, {
  windup: 0.45,            // aba-aba sebelum monster memukul (dtk); pemain bisa menghindar
  reviveTime: 3,           // berdiri di dekat rekan yang tumbang selama 3 dtk untuk membangkitkannya
  reviveR: 2.4,
  spareDelay: 4,           // nyawa cadangan: bangkit sendiri setelah 4 dtk, sekali per gelombang
  allies: 3,               // isi dengan bot sekutu sampai ada 3 petarung di pihak pemain
  checkpointEvery: 5,      // setelah kalah, lanjut dari kelipatan 5 terakhir yang diselesaikan
  perkBreak: 12,           // jeda lebih lama saat memilih berkah
});
// ---- Berkah: pilih 1 dari 3 setelah tiap gelombang ----
export const PERKS = {
  tajam: { name: 'Tajam', desc: 'Damage +15%' },
  cepat: { name: 'Cepat', desc: 'Kecepatan tembak +12%' },
  vampir: { name: 'Vampir', desc: 'Pulih 12% dari damage yang diberikan' },
  kokoh: { name: 'Kokoh', desc: 'HP maksimal +25' },
  lincah: { name: 'Lincah', desc: 'Kecepatan lari +10%' },
  fokus: { name: 'Fokus', desc: 'Jeda skill -20%' },
  amarah: { name: 'Amarah', desc: 'Pengukur pamungkas terisi 40% lebih cepat' },
  ganda: { name: 'Ganda', desc: 'Tambahan 1 peluru setiap tembakan' },
  ledak: { name: 'Ledak', desc: 'Musuh yang tumbang meledak (damage area)' },
  pulih: { name: 'Pulih', desc: 'HP mulai pulih 1 dtk lebih cepat, +4 per dtk' },
};
export const PERK_KEYS = Object.keys(PERKS);

// ---- D2 ----
export const HEAL_AMOUNT = 35, HEAL_R = 7;
export const SLOW_TIME = 2.5, SLOW_MUL = 0.55;
Object.assign(MONSTERS, {
  frost: { name: 'Penyihir Es', hp: 34, speed: 5.2, color: 0x7fd8ff, range: 17, slow: true,
    fireCd: 1.9, dmg: 10, projSpeed: 26, projLife: 1.7, pellets: 1, spread: 0.04, splash: 0, skill: 'none', skillCd: 99 },
  spiderling: { name: 'Anak Laba-laba', hp: 14, speed: 8.2, color: 0xff5d7a, melee: { dmg: 4, cd: 0.9, r: 1.6 } },
  queen: { name: 'Ratu Laba-laba', hp: 300, speed: 4.6, color: 0xff2e5a, boss: true,
    melee: { dmg: 14, cd: 1.4, r: 2.8 }, summon: { cd: 7, n: 2, max: 6 } },
});
Object.assign(ALL_CLASSES, CLASSES, MONSTERS);
// tong meledak (hanya di Pelabuhan): ditembak -> ledakan area, muncul lagi setelah 20 dtk
MAPS.ruins.barrels = [];
MAPS.harbor.barrels = [[19, 7], [-19, -7], [7, -19], [-7, 19], [26, 20], [-26, -20]];
export const BARREL_R = 5, BARREL_DMG = 40, BARREL_RESPAWN = 20;
// mode akhir pekan untuk room publik (Sabtu-Minggu WIB), bergilir tiap minggu
export const MUTATORS = {
  giant: { name: 'Raksasa', desc: 'Semua besar: HP +60%, gerak lebih lambat' },
  meteor: { name: 'Hujan Meteor', desc: 'Meteor jatuh di dekat pemain; lihat lingkaran merah' },
  oneshot: { name: 'Tembakan Maut', desc: 'Damage x3, tembakan lebih jarang' },
  mage: { name: 'Hanya Penyihir', desc: 'Semua bermain sebagai Penyihir Bara' },
};
export const PINGS = ['Tolong!', 'Ke sini!', 'Bagus!'];
export const ACHIEVEMENTS = [
  { id: 'k100', name: 'Pembasmi', text: '100 kill', stat: 'kills', n: 100 },
  { id: 'w10', name: 'Juara', text: 'Menang 10 ronde', stat: 'wins', n: 10 },
  { id: 'wave5', name: 'Penakluk Golem', text: 'Selesaikan gelombang 5', stat: 'bestWave', n: 5 },
  { id: 'wave10', name: 'Pembasmi Ratu', text: 'Selesaikan gelombang 10', stat: 'bestWave', n: 10 },
  { id: 'rev10', name: 'Penolong', text: 'Tolong rekan 10 kali', stat: 'revives', n: 10 },
  { id: 'bnt5', name: 'Pemburu Hadiah', text: 'Tumbangkan 5 buronan', stat: 'bounties', n: 5 },
  { id: 'chal7', name: 'Rajin', text: 'Selesaikan 7 tantangan harian', stat: 'chal', n: 7 },
];

// ---- Event ----
MODES.king = 'Perburuan Raja';
export const KING_LIMIT = 60;       // poin (detik menjadi raja) untuk menang
export const KING_HP = 2.2;         // pengali HP sang raja
// Jenis event. target.type: 'wave' = gelombang terbaik, 'points' = jumlah poin selama event berlangsung.
export const EVENT_TYPES = {
  golem: {
    name: 'Malam Golem', mode: 'pve', rules: ['bossRush', 'doublePerk'],
    desc: 'Bertahan Bersama: bos setiap 3 gelombang, dua berkah tiap gelombang',
    target: { type: 'wave', n: 6, text: 'Selesaikan gelombang 6' }, skin: 'golem',
  },
  raja: {
    name: 'Perburuan Raja', mode: 'king', rules: [],
    desc: 'Tumbangkan sang raja untuk merebut mahkota; raja mendapat poin tiap detik',
    target: { type: 'points', n: 45, text: 'Kumpulkan 45 poin sebagai raja' }, skin: 'mahkota',
  },
};
export const EVENT_RULES = {
  bossRush: 'Bos setiap 3 gelombang', doublePerk: 'Dua berkah tiap gelombang',
  giant: MUTATORS.giant.name, meteor: MUTATORS.meteor.name, oneshot: MUTATORS.oneshot.name, mage: MUTATORS.mage.name,
};
SKINS.push(
  { id: 'golem', name: 'Batu Golem', accent: 0x6b5d52, glow: 0xff8a2a, req: { stat: 'ev_golem', n: 1, text: 'Capai target event Malam Golem' } },
  { id: 'mahkota', name: 'Jubah Mahkota', accent: 0x5a1030, glow: 0xffd24a, req: { stat: 'ev_raja', n: 1, text: 'Capai target event Perburuan Raja' } },
);
ACHIEVEMENTS.push({ id: 'ev3', name: 'Tamu Setia', text: 'Hadir di 3 event', stat: 'evAttend', n: 3 });
