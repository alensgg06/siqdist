import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { DT, CLASSES, CLASS_KEYS, ARENA, MAPS, XP_LV, MAX_LEVEL, NOVA_R, KILL_LIMIT, KOTH_R, RUNE_INFO, SPD_BUFF, INTERP, TEAMS, TEAM_MODES, SKINS, skinUnlocked, ULT, ULT_MAX, EVENTS, MONSTERS, ALL_CLASSES, PERKS, PVE, MUTATORS, PINGS, ACHIEVEMENTS, SLOW_MUL } from '../../shared/config.js';
import { stepPlayer, blocked, los, angDiff, setMap } from '../../shared/sim.js';
import { buildWorld, buildExtras } from './world.js';
import { buildHarbor } from './harbor.js';
import { Avatar, Monster } from './chars.js';
import { Fx } from './fx.js';
import { input, setupInput, isTouch } from './input.js';
import { initAudio, sfx, setMuted, setMusic, step } from './audio.js';

const $ = (id) => document.getElementById(id);
addEventListener('error', (e) => { const m = document.getElementById('menuMsg'); if (m) m.textContent = `Galat: ${e.message}`; });
const store = { get: (k, d) => { try { return localStorage.getItem('arkana.' + k) ?? d; } catch { return d; } }, set: (k, v) => { try { localStorage.setItem('arkana.' + k, v); } catch { /* mode privat */ } } };
if (isTouch) document.body.classList.add('touch');

// ---------- renderer ----------
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isTouch, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, 1, 0.3, 900);
// Setiap peta dibangun sebagai grupnya sendiri (peta kedua dibangun saat pertama dibutuhkan), lalu ditukar.
const worlds = { ruins: buildWorld(scene) };
let world = worlds.ruins;
scene.fog = world.fog;
const fx = new Fx(scene, world.glowTex);
const extrasBy = { ruins: buildExtras(world.root, world.glowTex, MAPS.ruins.runes, RUNE_INFO, KOTH_R) };
let extras = extrasBy.ruins;
let M = MAPS.ruins;
// Cawan Emas untuk kejadian 'golden'
const cup = new THREE.Group();
{
  const gm = new THREE.MeshStandardMaterial({ color: 0xffcf4a, emissive: 0xffa21a, emissiveIntensity: 2.2, metalness: 0.85, roughness: 0.25 });
  cup.add(new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.2, 0.55, 16, 1, true), gm));
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.5, 8), gm); stem.position.y = -0.5; cup.add(stem);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.32, 0.08, 16), gm); base.position.y = -0.75; cup.add(base);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: world.glowTex, color: 0xffd56b, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  halo.scale.setScalar(4.5); cup.add(halo);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 30, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0xffd56b, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  beam.position.y = 15; cup.add(beam);
  cup.visible = false; scene.add(cup);
}
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.42, 0.5, 0.9);
composer.addPass(bloom);
composer.addPass(new OutputPass());

let quality = store.get('quality', isTouch ? 'medium' : 'high');
let autoQuality = !store.get('qualityManual', '');
function applyQuality(q) {
  quality = q;
  const pr = Math.min(devicePixelRatio || 1, q === 'low' ? 1 : q === 'medium' ? 1.5 : 2);
  renderer.setPixelRatio(pr); composer.setPixelRatio(pr);
  world.sun.castShadow = q !== 'low';
  const ms = q === 'high' ? 2048 : 1024;
  if (world.sun.shadow.mapSize.x !== ms) { world.sun.shadow.mapSize.set(ms, ms); world.sun.shadow.map?.dispose(); world.sun.shadow.map = null; }
  if (world.grass) world.grass.count = q === 'low' ? 700 : q === 'medium' ? 2200 : world.grassMax;
  for (const l of world.pointLights) l.visible = q !== 'low';
  fx.lightsOn = q !== 'low';
  $('quality').value = q;
  resize();
}
function useMap(id) {
  if (!MAPS[id]) id = 'ruins';
  if (!worlds[id]) {
    worlds[id] = buildHarbor(scene, worlds.ruins.glowTex);
    extrasBy[id] = buildExtras(worlds[id].root, worlds.ruins.glowTex, MAPS[id].runes, RUNE_INFO, KOTH_R);
  }
  for (const [k, w] of Object.entries(worlds)) w.root.visible = k === id;
  world = worlds[id]; extras = extrasBy[id]; M = MAPS[id]; G.mapId = id;
  scene.fog = world.fog;
  setMap(id); // prediksi gerak & tabrakan proyektil di klien memakai peta yang sama dengan server
  drawMinimapBg();
  applyQuality(quality);
}

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false); composer.setSize(w, h);
  camera.aspect = w / h; camera.fov = w >= h ? 62 : 82; camera.updateProjectionMatrix();
  const sc = h * renderer.getPixelRatio() * 0.5;
  fx.points.material.uniforms.scale.value = sc; world.flies.material.uniforms.scale.value = sc;
}
addEventListener('resize', resize);
addEventListener('orientationchange', () => setTimeout(resize, 200));

// ---------- state ----------
// id pemain acak untuk statistik tetap (tanpa akun); hanya dikirim ke server, tidak pernah ditampilkan
function playerId() {
  let id = store.get('pid', '');
  if (!/^[a-z0-9]{16,40}$/.test(id)) {
    const b = new Uint8Array(12); crypto.getRandomValues(b);
    id = [...b].map((x) => x.toString(36).padStart(2, '0')).join('').slice(0, 24);
    store.set('pid', id);
  }
  return id;
}

const G = {
  phase: 'menu', ws: null, myId: 0, clsKey: store.get('cls', 'ranger'), cls: null,
  players: new Map(), roster: new Map(),
  pred: { x: 0, z: 0, yaw: 0, dashT: 0, dx: 0, dz: 0, skillCd: 0 },
  rx: 0, rz: 0, pending: [], seq: 0, acc: 0, localFireCd: 0,
  me: { hp: 100, maxHp: 100, lvl: 1, flags: 0, xp: 0, respawnT: 0 },
  ended: false, tm: 0, orbMask: 255, ping: 0, camDist: 7.2, lockId: 0,
  autoFire: store.get('autoFire', isTouch ? '1' : '') === '1', aimAssist: store.get('aimAssist', isTouch ? '1' : '') === '1',
  lastShotTick: new Map(), shake: 0, time: 0,
  vibrate: store.get('vibrate', '1') === '1', code: null, practice: false, joinErr: '', buzzT: 0,
  createDiff: store.get('diff', 'normal'), pid: playerId(), skin: store.get('skin', 'default'), mapId: 'ruins', createMap: store.get('map', 'rotate'), tut: null, music: store.get('music', '1') === '1', stepT: 0, team: -1, teamScore: [0, 0], gm: 'dm', runeMask: 15, holder: 0, ticks: [], createGm: store.get('gm', 'dm'),
};
window.__arkana = G; // dipakai uji otomatis

// ---------- menu ----------
const clsWrap = $('classes');
for (const k of CLASS_KEYS) {
  const c = CLASSES[k], hex = '#' + c.color.toString(16).padStart(6, '0');
  const d = document.createElement('div');
  d.className = 'cls'; d.dataset.k = k; d.style.setProperty('--c', hex);
  d.innerHTML = `<div class="dot"></div><b>${c.name}</b><small>${c.desc}</small><small class="sk">${c.skillName}: ${c.skillDesc}</small>`;
  d.addEventListener('click', () => selectClass(k));
  clsWrap.appendChild(d);
}
function selectClass(k) {
  G.clsKey = k; store.set('cls', k);
  for (const e of clsWrap.children) e.classList.toggle('sel', e.dataset.k === k);
}
selectClass(CLASS_KEYS.includes(G.clsKey) ? G.clsKey : 'ranger');
$('name').value = store.get('name', '');
$('hint').textContent = isTouch
  ? 'Jempol kiri: gerak · geser sisi kanan: bidik · tombol merah: tembak. Lebih nyaman dalam posisi mendatar.'
  : 'WASD gerak · mouse bidik · klik tembak · Spasi skill · Tab papan skor';

// Selalu server asal halaman ini; tidak ada cara mengganti server dari sisi pemain.
function serverUrl() {
  try { localStorage.removeItem('arkana.server'); } catch { /* mode privat */ } // bersihkan pilihan dari versi lama
  return (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + '/ws';
}

const menuBtns = ['play', 'create', 'joinBtn', 'practice', 'rejoin', 'evJoin'];
const cleanCode = (v) => String(v || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4);
{
  const q = cleanCode(new URLSearchParams(location.search).get('room'));
  if (q) { $('code').value = q; $('joinBtn').textContent = 'Gabung ' + q; }
}
$('code').addEventListener('input', (e) => { e.target.value = cleanCode(e.target.value); $('joinBtn').textContent = 'Gabung'; });
$('code').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('joinBtn').click(); });

function start(mode, code) {
  initAudio();
  setMusic(G.music);
  const name = $('name').value.trim() || 'Pengembara';
  store.set('name', name);
  for (const b of menuBtns) $(b).disabled = true;
  $('menuMsg').textContent = mode === 'practice' ? 'Menyiapkan arena latihan…' : 'Menghubungkan ke arena…';
  if (isTouch && !document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().then(() => screen.orientation?.lock?.('landscape').catch(() => {})).catch(() => {});
  }
  connect(name, mode, code);
}
// Pertama kali bermain: tombol utama membuka latihan bertutorial dulu (bisa dilewati).
$('play').addEventListener('click', () => {
  if (!store.get('tutorDone', '')) { G.tut = newTutorial(); start('practice'); } else start('public');
});
for (const b of document.querySelectorAll('.mode[data-gm]')) {
  const set = () => {
    G.createGm = b.dataset.gm; store.set('gm', G.createGm);
    for (const o of document.querySelectorAll('.mode[data-gm]')) { o.classList.toggle('on', o === b); o.setAttribute('aria-checked', o === b); }
  };
  b.addEventListener('click', set);
  if (b.dataset.gm === G.createGm) set();
}
for (const b of document.querySelectorAll('.diffb')) {
  const set = () => {
    G.createDiff = b.dataset.diff; store.set('diff', G.createDiff);
    for (const o of document.querySelectorAll('.diffb')) { o.classList.toggle('on', o === b); o.setAttribute('aria-checked', o === b); }
  };
  b.addEventListener('click', set);
  if (b.dataset.diff === G.createDiff) set();
}
for (const b of document.querySelectorAll('.mapb')) {
  const set = () => {
    G.createMap = b.dataset.map; store.set('map', G.createMap);
    for (const o of document.querySelectorAll('.mapb')) { o.classList.toggle('on', o === b); o.setAttribute('aria-checked', o === b); }
  };
  b.addEventListener('click', set);
  if (b.dataset.map === G.createMap) set();
}
$('create').addEventListener('click', () => start('create'));

// ---------- D1: panah ancaman, tanda rekan tumbang, pilihan berkah ----------
const threatEls = [], downEls = [];
const vtmp = new THREE.Vector3();
// Panah merah di tepi layar menunjuk musuh dekat yang berada di luar layar atau di belakang kamera.
function drawThreats() {
  const W = innerWidth, H = innerHeight, list = [];
  const winding = G.windIds || new Map();
  for (const p of G.players.values()) {
    if (p.id === G.myId || (p.flags & 1) || ally(p.id)) continue;
    const d = Math.hypot(p.x - G.rx, p.z - G.rz);
    if (d > 24) continue;
    // di layar? cek di ruang kamera dulu (titik di belakang kamera tidak bisa diproyeksikan dengan andal)
    vtmp.set(p.x, 1.5, p.z).applyMatrix4(camera.matrixWorldInverse);
    if (vtmp.z < 0) { vtmp.set(p.x, 1.5, p.z).project(camera); if (Math.abs(vtmp.x) < 0.92 && Math.abs(vtmp.y) < 0.88) continue; }
    // arah panah dari sudut relatif terhadap arah hadap: 0 = depan (atas layar), kanan pemain = kanan layar
    const a = -angDiff(Math.atan2(p.x - G.rx, p.z - G.rz), input.yaw);
    list.push({ a, d, boss: !!MONSTERS[G.roster.get(p.id)?.cls]?.boss, wind: (winding.get(p.id) || 0) > G.time });
  }
  list.sort((x, y) => x.d - y.d);
  for (let i = 0; i < 6; i++) {
    let el = threatEls[i];
    if (!el) { el = document.createElement('i'); el.className = 'threat'; $('threats').appendChild(el); threatEls.push(el); }
    const t = list[i];
    if (!t) { el.style.opacity = 0; continue; }
    // lingkaran di sekitar bidikan (tidak tertutup tombol di tepi layar)
    const R = Math.min(W, H) * 0.34, rx = R * 1.25, ry = R, x = W / 2 + Math.sin(t.a) * rx, y = H / 2 - Math.cos(t.a) * ry;
    el.className = 'threat' + (t.boss ? ' boss' : '') + (t.wind ? ' wind' : '');
    el.style.opacity = String(Math.max(0.7, 1 - t.d / 40));
    el.style.transform = `translate(${x - 16}px,${y - 15}px) rotate(${t.a}rad) scale(${t.d < 8 ? 1.25 : 1})`;
  }
}
// Label "Tolong!" di atas rekan yang tumbang, dengan kemajuan pertolongan
function drawDowned() {
  const rv = G.gm === 'pve' ? (G.rv || []).filter((r) => r[0] !== G.myId) : [];
  for (let i = 0; i < Math.max(rv.length, downEls.length); i++) {
    let el = downEls[i];
    if (!el) { el = document.createElement('div'); el.className = 'down'; $('downTags').appendChild(el); downEls.push(el); }
    const r = rv[i], p = r && G.players.get(r[0]);
    if (!p) { el.style.display = 'none'; continue; }
    vtmp.set(p.x, 2.2, p.z).project(camera);
    if (vtmp.z > 1) { el.style.display = 'none'; continue; }
    el.style.display = '';
    el.textContent = r[1] > 0 ? `Menolong ${r[1]}%` : `Tolong ${nameOf(r[0])}!`;
    el.style.transform = `translate(${(vtmp.x * 0.5 + 0.5) * innerWidth}px,${(-vtmp.y * 0.5 + 0.5) * innerHeight}px) translate(-50%,-100%)`;
  }
}
function showPerks(offer) {
  if (!offer || !offer.length) return;
  $('perkCards').innerHTML = offer.map((k) => `<button class="perk" data-k="${k}"><b>${PERKS[k].name}</b><small>${PERKS[k].desc}</small><em>Ketuk untuk memilih</em></button>`).join('');
  for (const b of $('perkCards').querySelectorAll('.perk')) b.addEventListener('click', () => { G.ws?.send(JSON.stringify({ t: 'perk', id: b.dataset.k })); $('perks').classList.add('hidden'); });
  $('perks').classList.remove('hidden');
}
for (const ev of ['touchstart', 'touchmove']) $('perks').addEventListener(ev, (e) => e.stopPropagation());

// ---------- D2: isyarat cepat dan kembali ke room terakhir ----------
$('pingMenu').innerHTML = PINGS.map((t, i) => `<button data-k="${i}">${t}</button>`).join('');
$('pingBtn').addEventListener('click', () => $('pingMenu').classList.toggle('hidden'));
for (const b of $('pingMenu').children) b.addEventListener('click', () => { G.ws?.send(JSON.stringify({ t: 'ping', k: +b.dataset.k })); $('pingMenu').classList.add('hidden'); });
for (const el of [$('pingBtn'), $('pingMenu')]) for (const ev of ['touchstart', 'touchmove', 'mousedown']) el.addEventListener(ev, (e) => e.stopPropagation());
function showRejoin() {
  const c = store.get('lastRoom', ''), b = $('rejoin');
  b.classList.toggle('hidden', !c);
  if (c) b.textContent = `Kembali ke room ${c}`;
}
$('rejoin').addEventListener('click', () => { const c = store.get('lastRoom', ''); if (c) start('join', c); });
showRejoin();

// ---------- event ----------
const dur = (s) => (s >= 3600 ? `${Math.floor(s / 3600)} j ${Math.floor((s % 3600) / 60)} mnt` : s >= 60 ? `${Math.floor(s / 60)} mnt` : `${Math.max(0, s)} dtk`);
let evData = null, evAt = 0;
function drawEvent() {
  const b = $('eventBanner'), d = evData, gone = Math.floor((Date.now() - evAt) / 1000);
  const a = d?.active && d.active.left - gone > 0 ? d.active : null, n = d?.next, l = d?.last;
  b.classList.toggle('hidden', !a && !n && !l?.top?.length);
  $('evJoin').classList.toggle('hidden', !a);
  if (a) {
    $('evName').textContent = `Event: ${a.name} · sisa ${dur(a.left - gone)}`;
    $('evInfo').textContent = `${a.desc}. Target: ${a.target} Hadiah: ${a.skin}.${a.top.length ? ` Terdepan: ${a.top[0].name} (${a.top[0].score} ${a.unit}).` : ''}`;
  } else if (n) {
    $('evName').textContent = `Event berikutnya: ${n.name}`;
    $('evInfo').textContent = n.in - gone > 0 ? `Mulai dalam ${dur(n.in - gone)}. ${n.desc}.` : 'Segera dimulai…';
  } else if (l?.top?.length) {
    $('evName').textContent = `Event ${l.name} selesai`;
    $('evInfo').textContent = `Juara: ${l.top.map((t, i) => `${i + 1}. ${t.name} (${t.score} ${l.unit})`).join(' · ')}`;
  }
}
async function loadEvent() {
  if (G.phase !== 'menu') return;
  try { evData = await fetch('/api/event').then((r) => r.json()); evAt = Date.now(); } catch { /* server belum terjangkau */ }
  drawEvent();
}
loadEvent(); setInterval(loadEvent, 20000); setInterval(() => { if (G.phase === 'menu') drawEvent(); }, 1000);
$('evJoin').addEventListener('click', () => start('event'));

// ---------- peringkat dan jubah ----------
const hex = (n) => '#' + n.toString(16).padStart(6, '0');
async function openRanks() {
  $('ranks').classList.remove('hidden');
  $('myStats').textContent = 'Memuat…'; $('skinMsg').textContent = '';
  let top = null, mine = null;
  try {
    [top, mine] = await Promise.all([fetch('/api/top').then((r) => r.json()), fetch(`/api/stats?pid=${G.pid}`).then((r) => r.json())]);
  } catch { $('myStats').textContent = 'Peringkat belum bisa dimuat dari server, jadi semua jubah tampil terkunci. Coba tutup dan buka lagi.'; }
  const st = mine?.stats;
  $('waveTable').innerHTML = (top?.waves || []).map((r, i) => `<tr><td>${i + 1}</td><td></td><td>gelombang ${r.wave}</td></tr>`).join('') || '<tr><td>Belum ada yang bermain Bertahan Bersama minggu ini.</td></tr>';
  (top?.waves || []).forEach((r, i) => { $('waveTable').rows[i].cells[1].textContent = r.name; });
  $('achv').innerHTML = ACHIEVEMENTS.map((a) => `<span class="${(st?.[a.stat] || 0) >= a.n ? 'on' : ''}" title="${a.text}">${a.name} · ${Math.min(st?.[a.stat] || 0, a.n)}/${a.n}</span>`).join('');
  $('daily').innerHTML = (mine?.daily || []).map((d) => `<li class="${d.done ? 'done' : ''}"><i style="width:${Math.round((d.p / d.n) * 100)}%"></i><span><b></b><em>${d.done ? 'Selesai' : `${d.p}/${d.n}`}</em></span></li>`).join('') || '<li><span>Tantangan belum bisa dimuat.</span></li>';
  (mine?.daily || []).forEach((d, i) => { $('daily').children[i].querySelector('b').textContent = d.text; });
  if (top) {
    $('myStats').textContent = st ? `Kamu: ${st.kills} kill, ${st.deaths} gugur, ${st.wins} menang dari ${st.matches} ronde.` : 'Belum ada statistik: selesaikan satu ronde di arena untuk mulai tercatat.';
    $('weekTitle').textContent = `Minggu ini (${top.week.replace('-W', ', minggu ')})`;
    const rows = top.top.map((r, i) => `<tr class="${st && r.name === st.name ? 'me' : ''}"><td>${i + 1}</td><td></td><td>${r.kills}</td><td>${r.wins}</td></tr>`).join('');
    $('weekTable').innerHTML = `<tr><th>#</th><th>Nama</th><th>Kill</th><th>Menang</th></tr>${rows || '<tr><td colspan="4">Belum ada yang bermain minggu ini.</td></tr>'}`;
    top.top.forEach((r, i) => { $('weekTable').rows[i + 1].cells[1].textContent = r.name; }); // nama sebagai teks, bukan HTML
  }
  $('skins').innerHTML = SKINS.map((k) => {
    const open = skinUnlocked(k, st), cls = CLASSES[G.clsKey], col = k.accent ?? Math.round(cls.color * 1) , g = k.glow ?? cls.color;
    const prog = k.req ? `${Math.min(st?.[k.req.stat] || 0, k.req.n)}/${k.req.n}` : '';
    return `<button class="skin ${open ? '' : 'locked'} ${G.skin === k.id ? 'on' : ''}" data-id="${k.id}" ${open ? '' : 'aria-disabled="true"'} style="--c:${hex(k.accent ?? col)};--g:${hex(g)}"><i></i><span><b>${k.name}</b><small>${open ? (G.skin === k.id ? 'Dipakai' : 'Terbuka') : `${k.req.text} · ${prog}`}</small></span></button>`;
  }).join('');
  for (const b of $('skins').querySelectorAll('.skin')) {
    b.addEventListener('click', () => {
      const k = SKINS.find((x) => x.id === b.dataset.id);
      if (b.classList.contains('locked')) {
        // beri tahu kenapa tidak bisa dipilih, jangan diam saja
        $('skinMsg').textContent = `${k.name} masih terkunci: ${k.req.text.toLowerCase()} (sekarang ${Math.min(st?.[k.req.stat] || 0, k.req.n)} dari ${k.req.n}).`;
        return;
      }
      $('skinMsg').textContent = `${k.name} dipakai mulai ronde berikutnya.`;
      G.skin = b.dataset.id; store.set('skin', G.skin);
      for (const o of $('skins').querySelectorAll('.skin')) { o.classList.toggle('on', o === b); if (!o.classList.contains('locked')) o.querySelector('small').textContent = o === b ? 'Dipakai' : 'Terbuka'; }
    });
  }
}
$('ranksBtn').addEventListener('click', () => openRanks().catch((err) => { $('myStats').textContent = 'Galat: ' + err.message; }));
$('ranksClose').addEventListener('click', () => $('ranks').classList.add('hidden'));
$('joinBtn').addEventListener('click', () => {
  const c = cleanCode($('code').value);
  if (c.length !== 4) { $('menuMsg').textContent = 'Kode room terdiri dari 4 huruf.'; $('code').focus(); return; }
  start('join', c);
});
$('practice').addEventListener('click', () => { G.tut = newTutorial(); start('practice'); });

function connect(name, mode, code) {
  let ws;
  try { ws = new WebSocket(serverUrl()); } catch { return menuError('Alamat server tidak valid.'); }
  G.ws = ws; G.joinErr = '';
  ws.onopen = () => ws.send(JSON.stringify({ t: 'join', name, cls: G.clsKey, mode, code, gm: G.createGm, map: G.createMap, diff: G.createDiff, pid: G.pid, skin: G.skin }));
  ws.onmessage = (e) => onMessage(JSON.parse(e.data));
  ws.onclose = () => {
    if (G.ws !== ws) return;
    const wasIn = !!G.myId;
    leaveGame();
    menuError(G.joinErr || (wasIn ? 'Koneksi terputus.' : 'Server tidak terjangkau. Coba lagi.'));
    G.myId = 0;
  };
  ws.onerror = () => {};
}
function menuError(msg) { $('menuMsg').textContent = msg; for (const b of menuBtns) $(b).disabled = false; }

function leaveGame() {
  const ws = G.ws; G.ws = null;
  if (ws && ws.readyState <= 1) ws.close();
  for (const p of G.players.values()) p.av.dispose(scene);
  G.players.clear(); G.roster.clear(); G.pending.length = 0;
  for (const id of [...fx.projs.keys()]) fx.removeProj(id);
  G.phase = 'menu'; input.enabled = false; input.reset?.();
  if (G.menuCls) G.clsKey = G.menuCls;
  showRejoin();
  document.exitPointerLock?.();
  $('hud').classList.add('hidden'); $('menu').classList.remove('hidden');
  $('tutor').classList.add('hidden'); $('hitDir').textContent = '';
  for (const b of menuBtns) $(b).disabled = false;
}

// ---------- jaringan ----------
function onMessage(m) {
  if (m.t === 'w') {
    G.myId = m.id; G.limit = m.limit || KILL_LIMIT; G.menuCls = G.clsKey; if (CLASSES[m.cls]) G.clsKey = m.cls; G.cls = CLASSES[G.clsKey]; G.phase = 'play'; G.ended = false;
    G.mut = m.mut || null; if (G.mut) setTimeout(() => toast(`Mode akhir pekan: ${MUTATORS[G.mut].name}`), 2200);
    if (m.code) { store.set('lastRoom', m.code); } G.barrelMask = 0;
    G.seq = 0; G.pending.length = 0; G.me.xp = 0; G.me.lvl = 1;
    $('menu').classList.add('hidden'); $('hud').classList.remove('hidden');
    $('menuMsg').textContent = '';
    $('skillName').textContent = G.cls.skillName;
    $('death').classList.add('hidden'); $('score').classList.add('hidden'); $('pause').classList.add('hidden');
    input.enabled = true;
    G.code = m.code || null; G.practice = !!m.practice; G.gm = m.gm || 'dm'; G.ticks.length = 0;
    if (m.map && m.map !== G.mapId) useMap(m.map);
    G.team = TEAM_MODES.includes(G.gm) ? m.team : -1; G.teamScore = [0, 0];
    $('zoneTag').classList.toggle('hidden', G.gm !== 'koth' && G.gm !== 'king');
    G.event = m.ev || null; if (G.event) setTimeout(() => toast(`Event ${G.event.name}: ${G.event.target}`), 2400);
    const pill = $('roomPill');
    pill.classList.toggle('hidden', !G.code && !G.practice && !m.ev);
    pill.textContent = G.code ? `${{ koth: 'Altar', tdm: 'Tim', coop: 'Lawan Bot', pve: 'Bertahan', king: 'Raja' }[G.gm] || 'Room'} ${G.code} ⤴` : G.event ? 'Event' : 'Latihan';
    if (G.gm === 'pve') G.team = 0;
    if (G.team >= 0 && G.gm !== 'pve') setTimeout(() => toast(`Kamu di regu ${TEAMS[G.team].name}`), 1900);
    if (G.practice && G.tut) { G.tut.show(); } else { G.tut = null; $('tutor').classList.add('hidden'); }
    if (!G.practice || !G.tut) toast(G.code ? `Room ${G.code}: ketuk kode untuk membagikan` : G.practice ? 'Arena latihan' : 'Pertarungan dimulai');
  } else if (m.t === 'e') {
    G.joinErr = m.m; store.set('lastRoom', '');
  } else if (m.t === 'r') {
    G.roster.clear();
    for (const [id, name, cls, kills, deaths, bot, pts, team, skin] of m.l) G.roster.set(id, { id, name, cls, kills, deaths, bot, pts: pts || 0, team: team ?? -1, skin: skin || 'default' });
    if (m.ts) G.teamScore = m.ts;
    updateScoreHud();
  } else if (m.t === 's') onSnapshot(m);
  else if (m.t === 'pg') G.ping = Math.round(performance.now() - m.c);
  else if (m.t === 'sp') G.ws?.send(JSON.stringify({ t: 'spr', c: m.c })); // ping dari server
}
setInterval(() => { if (G.ws?.readyState === 1) G.ws.send(JSON.stringify({ t: 'pg', c: performance.now() })); }, 2000);
// laporan untuk catatan pertandingan di server (ping dan fps), hanya saat bermain dan tab terlihat
setInterval(() => { if (G.ws?.readyState === 1 && G.myId && !document.hidden && G.ping > 0) G.ws.send(JSON.stringify({ t: 'st', p: G.ping, f: fpsShown })); }, 5000);

function buzz(pattern) {
  if (!G.vibrate || !navigator.vibrate) return;
  try { navigator.vibrate(pattern); } catch { /* tidak didukung */ }
}

// Busur merah di tepi lingkaran tengah, menunjuk ke arah penyerang relatif terhadap arah pandang.
function hitArc(ax, az) {
  const wrap = $('hitDir');
  while (wrap.children.length >= 4) wrap.firstChild.remove();
  const rel = angDiff(Math.atan2(ax - G.rx, az - G.rz), input.yaw);
  const R = Math.min(innerWidth, innerHeight) * 0.38, w = R * 0.95, h = R * 0.3;
  const a = document.createElement('div');
  a.className = 'arc';
  a.style.cssText = `width:${w}px;height:${h}px;left:${-w / 2}px;top:${-R}px;transform-origin:${w / 2}px ${R}px;transform:rotate(${(-rel * 180) / Math.PI}deg)`;
  a.addEventListener('animationend', () => a.remove());
  wrap.appendChild(a);
}

// ---------- tutorial ----------
function newTutorial() {
  const T = { i: 0, moved: 0, turned: 0, shots: 0, skills: 0, kills: 0, lastYaw: null, done: false };
  const steps = () => [
    [isTouch ? 'Geser jempol kiri untuk berjalan.' : 'Tekan W A S D untuk berjalan.', () => T.moved > 8],
    [isTouch ? 'Geser jari di sisi kanan layar untuk memutar arah bidikan.' : 'Klik layar, lalu gerakkan mouse untuk membidik.', () => T.turned > 1.6],
    [isTouch ? 'Tahan tombol merah untuk menembak.' : 'Klik kiri untuk menembak.', () => T.shots >= 5],
    [`${isTouch ? 'Ketuk tombol ungu' : 'Tekan Spasi'} untuk skill ${G.cls?.skillName || ''}. Skill punya waktu jeda.`, () => T.skills >= 1],
    ['Tumbangkan satu bot boneka. Mereka tidak menyerang balik.', () => T.kills >= 1],
  ];
  T.show = () => { $('tutor').classList.remove('hidden'); T.render(); };
  T.render = () => {
    const st = steps();
    $('tutorDots').innerHTML = st.map((_, k) => `<i class="${k < T.i ? 'on' : k === T.i && !T.done ? 'now' : ''}"></i>`).join('');
    $('tutorText').textContent = T.done ? 'Siap. Di arena sungguhan lawan menyerang balik; pertama mencapai 20 kill menang.' : `${T.i + 1}/${st.length} · ${st[T.i][0]}`;
    $('tutorGo').classList.toggle('hidden', !T.done);
    $('tutorSkip').textContent = T.done ? 'Tetap berlatih' : 'Lewati latihan';
  };
  T.check = () => {
    if (T.done) return;
    const st = steps();
    if (st[T.i][1]()) {
      T.i++; sfx('orb'); buzz(30);
      if (T.i >= st.length) { T.done = true; store.set('tutorDone', '1'); sfx('level'); }
      T.render();
    }
  };
  return T;
}
$('tutorSkip').addEventListener('click', () => {
  store.set('tutorDone', '1');
  if (G.tut?.done) { $('tutor').classList.add('hidden'); G.tut = null; return; }
  G.tut = null; leaveGame(); start('public');
});
$('tutorGo').addEventListener('click', () => { G.tut = null; leaveGame(); start('public'); });
for (const ev of ['touchstart', 'touchmove']) $('tutor').addEventListener(ev, (e) => e.stopPropagation());

$('roomPill').addEventListener('click', (e) => {
  e.stopPropagation();
  if (!G.code) return;
  const link = `${location.origin}${location.pathname}?room=${G.code}`;
  const done = () => toast(`Tautan room ${G.code} disalin`);
  const fallback = () => toast(`Kode room: ${G.code}`);
  try { navigator.clipboard.writeText(link).then(done, fallback); } catch { fallback(); }
});

function getPlayer(id) {
  let p = G.players.get(id);
  if (p) return p;
  const r = G.roster.get(id);
  if (!r) return null;
  const av = MONSTERS[r.cls] ? new Monster(r.cls, world.glowTex) : new Avatar(r.cls, r.name, id === G.myId, world.glowTex, r.team >= 0 && (G.gm !== 'pve' || r.team === 0) ? TEAMS[r.team].color : null, r.skin);
  scene.add(av.group);
  p = { id, av, buf: [], x: 0, z: 0, yaw: 0, flags: 0, hp: 1, maxHp: 1, lvl: 1, cls: r.cls, seen: 0 };
  G.players.set(id, p);
  return p;
}

function onSnapshot(m) {
  const now = performance.now();
  if (!G.myId) return;
  const wasEnded = G.ended;
  if (m.mp && m.mp !== G.mapId) { useMap(m.mp); toast(`Peta: ${M.name}`); for (const id of [...fx.projs.keys()]) fx.removeProj(id); }
  G.ended = !!m.st; G.tm = m.tm; G.orbMask = m.o; G.runeMask = m.u ?? 15; G.holder = m.z || 0; G.barrelMask = m.bm || 0;
  G.ticks.push([now, m.k || 0]); if (G.ticks.length > 30) G.ticks.shift();
  G.snapN = (G.snapN || 0) + 1;
  for (const e of m.p) {
    const p = getPlayer(e[0]);
    if (!p) continue;
    p.seen = G.snapN; p.hp = e[4]; p.maxHp = e[5]; p.lvl = e[6]; p.flags = e[7];
    if (e[0] === G.myId) {
      G.me.hp = e[4]; G.me.maxHp = e[5]; G.me.lvl = e[6]; G.me.flags = e[7];
    } else {
      p.buf.push({ t: now, x: e[1], z: e[2], yaw: e[3] });
      if (p.buf.length > 30) p.buf.shift();
      p.av.setInfo(e[4], e[5], e[6], !!(e[7] & 64));
    }
  }
  for (const [id, p] of G.players) if (p.seen !== G.snapN) { p.av.dispose(scene); G.players.delete(id); }

  // rekonsiliasi prediksi
  const me = m.me, pr = G.pred;
  G.me.xp = me[6]; G.me.respawnT = me[7]; G.me.dmgT = me[8] || 0; G.me.spdT = me[9] || 0; G.me.ult = me[10] || 0;
  G.ev = m.ev || null; G.wv = m.wv || null; G.rv = m.rv || null;
  G.me.perks = me[11] || ''; G.me.offer = me[12] || 0; G.me.spare = me[13] || 0;
  pr.spd = me[14] || 1; // pengali kecepatan dari server (rune, berkah, lambat, mode)
  while (G.pending.length && G.pending[0].s <= m.a) G.pending.shift();
  pr.x = me[0]; pr.z = me[1]; pr.dashT = me[2]; pr.dx = me[3]; pr.dz = me[4]; pr.skillCd = me[5];
  if (!(G.me.flags & 1) && !G.ended) for (const inp of G.pending) stepPlayer(pr, inp, G.cls, DT);
  else G.pending.length = 0;

  for (const e of m.e) onEvent(e);
  if (G.ended && !wasEnded) { input.fire = false; showScore(true); sfx('level'); }
  if (!G.ended && wasEnded) { $('score').classList.add('hidden'); toast('Ronde baru dimulai'); }
}

const tmpV = new THREE.Vector3();
function vol(x, z) { return Math.max(0, 1 - Math.hypot(x - G.rx, z - G.rz) / 45); }
function nameOf(id) { return G.roster.get(id)?.name || '—'; }

function onEvent(e) {
  switch (e[0]) {
    case 's': {
      const owner = G.players.get(e[2]); const cls = owner?.cls || G.roster.get(e[2])?.cls || 'ranger';
      fx.spawnProj(e[1], cls, e[3], e[4], e[5]);
      if (e[2] !== G.myId && owner && G.lastShotTick.get(e[2]) !== G.snapN) {
        G.lastShotTick.set(e[2], G.snapN);
        owner.av.fireKick(); fx.muzzle(owner.av.tipWorld(tmpV), cls, e[5]); sfx(cls, vol(e[3], e[4]) * 0.8, true);
      }
      break;
    }
    case 'h': {
      const p = fx.projs.get(e[1]); const cls = p?.cls || 'ranger';
      fx.removeProj(e[1]); fx.impact(e[2], e[3], cls);
      if (cls === 'mage') { sfx('boom', vol(e[2], e[3])); G.shake = Math.max(G.shake, 0.5 * vol(e[2], e[3])); }
      break;
    }
    case 'd': {
      const mine = e[1] === G.myId;
      if (mine) {
        $('vignette').style.opacity = 0.75; setTimeout(() => { $('vignette').style.opacity = 0; }, 160); sfx('hurt'); G.shake = Math.max(G.shake, 0.35);
        const att = e[2] && e[2] !== G.myId ? G.players.get(e[2]) : null;
        if (att) { hitArc(att.x, att.z); G.arcN = (G.arcN || 0) + 1; }
        if (G.time - G.buzzT > 0.12) { G.buzzT = G.time; buzz(35); }
      }
      if (e[2] === G.myId && !mine) { const c = $('cross'); c.classList.remove('hit'); void c.offsetWidth; c.classList.add('hit'); sfx('hit'); }
      if (mine || e[2] === G.myId) dmgNumber(e[4], e[5], e[3], mine);
      fx.burst(e[4], 1.5, e[5], 0xff4b3a, 5, 4, 0.7, 0.3);
      break;
    }
    case 'k': {
      const div = document.createElement('div');
      if (e[1] === G.myId || e[2] === G.myId) div.className = 'me';
      div.innerHTML = `<span></span><i>✦</i><span></span>`;
      div.children[0].textContent = nameOf(e[1]); div.children[2].textContent = nameOf(e[2]);
      const feed = $('feed'); feed.appendChild(div);
      while (feed.children.length > 4) feed.firstChild.remove();
      setTimeout(() => div.remove(), 5000);
      const v = G.players.get(e[2]);
      if (v) fx.burst(v.x, 1.4, v.z, ALL_CLASSES[v.cls].color, 40, 8, 1.4, 0.9);
      if (e[1] === G.myId && e[2] !== G.myId) { sfx('kill'); toast('Lawan tumbang'); buzz([40, 40, 70]); if (G.tut) { G.tut.kills++; G.tut.check(); } }
      if (e[2] === G.myId) {
        sfx('death'); buzz(250); input.fire = false;
        $('deathBy').textContent = `Dikalahkan oleh ${nameOf(e[1])}`; $('death').classList.remove('hidden');
      }
      break;
    }
    case 'r': {
      fx.pillar(e[2], e[3], 0xbfe9ff);
      if (e[1] === G.myId) {
        input.yaw = Math.atan2(-e[2], -e[3]); G.rx = e[2]; G.rz = e[3]; G.pending.length = 0;
        $('death').classList.add('hidden');
      } else { const p = G.players.get(e[1]); if (p) p.buf.length = 0; }
      break;
    }
    case 'l': {
      const p = G.players.get(e[1]);
      if (p) fx.pillar(p.x, p.z, 0xffd66b);
      if (e[1] === G.myId) { sfx('level'); toast(`Naik ke Level ${e[2]}`); }
      break;
    }
    case 'n': fx.nova(e[2], e[3], G.roster.get(e[1])?.cls === 'brute' ? MONSTERS.brute.color : CLASSES.mage.color, G.roster.get(e[1])?.cls === 'brute' ? MONSTERS.brute.slam.r : NOVA_R); sfx('nova', vol(e[2], e[3])); G.shake = Math.max(G.shake, 0.6 * vol(e[2], e[3])); break;
    case 'E': {
      const ev = EVENTS[e[1]]; if (!ev) break;
      toast(`${ev.name}: ${ev.desc}`); sfx('level'); buzz([60, 40, 60]);
      break;
    }
    case 'g': {
      const gx = G.ev?.[2] ?? 0, gz = G.ev?.[3] ?? 0;
      fx.pillar(gx, gz, 0xffd56b); fx.burst(gx, 1.4, gz, 0xffd56b, 50, 7, 1.4, 0.9, -2);
      toast(e[1] === G.myId ? 'Cawan Emas: HP penuh dan kedua rune!' : `${nameOf(e[1])} mengambil Cawan Emas`);
      if (e[1] === G.myId) { sfx('level'); buzz([30, 30, 80]); }
      break;
    }
    case 'B': toast(e[1] === G.myId ? 'Kamu jadi BURONAN: semua mengincarmu!' : `${nameOf(e[1])} jadi buronan: tumbangkan untuk hadiah XP`); if (e[1] === G.myId) buzz([80, 60, 80]); break;
    case 'b': toast(e[1] === G.myId ? 'Buronan tumbang: hadiah XP besar!' : `${nameOf(e[1])} menumbangkan buronan ${nameOf(e[2])}`); if (e[1] === G.myId) sfx('level'); break;
    case 'C': if (e[1] === G.myId) { setTimeout(() => toast(`Tantangan selesai: ${e[2]}`), 900); sfx('level'); buzz([40, 40, 40, 40, 90]); } break;
    case 'U': {
      const p = G.players.get(e[1]); if (!p) break;
      const col = CLASSES[e[2]]?.color ?? 0xffd56b;
      fx.pillar(p.x, p.z, 0xffd56b); fx.burst(p.x, 1.6, p.z, col, 40, 9, 1.5, 0.7, 0);
      if (e[2] === 'guardian') { fx.nova(p.x, p.z, col, 6); }
      if (e[1] === G.myId) { toast(ULT[e[2]].name + '!'); buzz(120); G.shake = Math.max(G.shake, 0.5); }
      sfx(e[2] === 'mage' ? 'nova' : e[2] === 'guardian' ? 'shield' : 'ranger', vol(p.x, p.z));
      break;
    }
    case 'M': fx.ring(e[1], e[2], 0xff3b2e, 6, 0.8); fx.ring(e[1], e[2], 0xffb070, 4, 0.8); fx.flash(e[1], 6, e[2], 0xff5a2e, 30); break;
    case 'm': {
      fx.nova(e[1], e[2], 0xff6a2e, 6); fx.burst(e[1], 1, e[2], 0xffd27a, 60, 12, 2, 0.8, 8); sfx('boom', vol(e[1], e[2]));
      G.shake = Math.max(G.shake, 0.9 * vol(e[1], e[2]));
      break;
    }
    case 'H': fx.ring(e[2], e[3], 0xffe27a, 7, 0.7); fx.pillar(e[2], e[3], 0xffe27a); sfx('orb', vol(e[2], e[3])); break;
    case 'X': { const b = M.barrels?.[e[1]]; if (b) { fx.nova(b[0], b[1], 0xff7a2e, 5); fx.burst(b[0], 1, b[1], 0xffd27a, 50, 11, 1.8, 0.8, 8); sfx('boom', vol(b[0], b[1])); G.shake = Math.max(G.shake, 0.8 * vol(b[0], b[1])); } break; }
    case 'q': {
      if (e[1] !== G.myId && !ally(e[1])) break; // hanya isyarat rekan
      const div = document.createElement('div'); div.className = 'ping'; div.textContent = `${nameOf(e[1])}: ${PINGS[e[2]]}`;
      $('feed').appendChild(div); setTimeout(() => div.remove(), 5000);
      fx.ring(e[3], e[4], 0x7dffb0, 3, 1.2); fx.pillar(e[3], e[4], 0x7dffb0); sfx('orb', 0.6);
      (G.pings ||= []).push({ x: e[3], z: e[4], t: G.time + 5 });
      break;
    }
    case 'K': toast(e[1] === G.myId ? 'Kamu dinobatkan menjadi RAJA!' : `${nameOf(e[1])} menjadi raja: buru dia!`); { const p = G.players.get(e[1]); if (p) fx.pillar(p.x, p.z, 0xffd24a); } if (e[1] === G.myId) { sfx('level'); buzz([80, 50, 120]); } break;
    case 'Z': setTimeout(() => toast(`Event ${e[1]} selesai. Terima kasih sudah ikut!`), 600); G.event = null; break;
    case 'W': toast(e[2] ? `Gelombang ${e[1]}: ${e[1] % 10 === 0 ? 'Ratu Laba-laba' : 'Golem Batu'} datang!` : `Gelombang ${e[1]}`); sfx('level'); buzz([50, 50, 50]); $('perks').classList.add('hidden'); break;
    case 'w': toast(e[2] === e[1] && e[1] > 0 ? `Gelombang ${e[1]} selesai! Titik simpan tercapai` : `Gelombang ${e[1]} selesai! Rekan bangkit, HP pulih`); sfx('level'); $('death').classList.add('hidden'); break;
    case 'A': {
      const p = G.players.get(e[1]); if (!p) break;
      p.av.windup?.(e[2] ? 0.9 : PVE.windup);
      (G.windIds ||= new Map()).set(e[1], G.time + (e[2] ? 0.9 : PVE.windup));
      fx.ring(p.x, p.z, e[2] ? 0xff7a1a : 0xff3b3b, e[2] ? MONSTERS.brute.slam.r : 2.4, e[2] ? 0.9 : PVE.windup);
      if (Math.hypot(p.x - G.rx, p.z - G.rz) < 8) sfx('hurt', 0.4);
      break;
    }
    case 'P': if (e[1] === G.myId) showPerks(e[2]); break;
    case 'p': if (e[1] === G.myId) { $('perks').classList.add('hidden'); toast(`Berkah ${PERKS[e[2]].name}: ${PERKS[e[2]].desc}`); } else if (G.roster.get(e[1])) toast(`${nameOf(e[1])} memilih ${PERKS[e[2]].name}`); break;
    case 'v': {
      const p = G.players.get(e[2]); if (p) { fx.pillar(p.x, p.z, 0x7dffb0); fx.burst(p.x, 1.2, p.z, 0x7dffb0, 30, 5, 1.2, 0.7, -2); }
      if (e[2] === G.myId) { $('death').classList.add('hidden'); toast(e[1] === G.myId ? 'Bangkit dengan nyawa cadangan!' : `${nameOf(e[1])} menolongmu!`); buzz([40, 40, 80]); sfx('level'); }
      else if (e[1] === G.myId) toast(`Kamu menolong ${nameOf(e[2])}!`);
      break;
    }
    case 'x': fx.nova(e[1], e[2], 0xffb070, 4); sfx('boom', vol(e[1], e[2]) * 0.6); break;
    case 'a': { const p = G.players.get(e[1]); if (p) { p.av.fireKick(); sfx('hit', vol(p.x, p.z) * 0.6); } break; }
    case 'u': {
      const r = M.runes[e[1]]; if (!r) break;
      const info = RUNE_INFO[r.type];
      fx.burst(r.x, 1.2, r.z, info.color, 34, 6, 1.3, 0.8, -2); fx.pillar(r.x, r.z, info.color);
      if (e[2] === G.myId) { sfx('level'); buzz([30, 30, 30]); toast(`${info.name}: ${info.desc}`); }
      break;
    }
    case 'o': if (!M.orbs[e[1]]) break; fx.burst(M.orbs[e[1]][0], 1.2, M.orbs[e[1]][1], 0x59ff9c, 26, 5, 1.1, 0.7, -2); if (e[2] === G.myId) sfx('orb'); break;
  }
}

// ---------- HUD ----------
let toastT = 0;
function toast(msg) { const t = $('toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 1800); }

const dmgPool = [];
function dmgNumber(x, z, amount, mine) {
  const el = dmgPool.find((d) => d.t <= 0) || (() => {
    if (dmgPool.length >= 20) return null;
    const d = { el: document.createElement('div'), t: 0 }; $('dmgLayer').appendChild(d.el); dmgPool.push(d); return d;
  })();
  if (!el) return;
  el.el.className = 'dmg' + (mine ? ' me' : ''); el.el.textContent = (mine ? '-' : '') + amount;
  el.t = 0.8; el.x = x + (Math.random() - 0.5) * 0.8; el.z = z + (Math.random() - 0.5) * 0.8; el.el.style.display = '';
}
function updateDmg(dt) {
  for (const d of dmgPool) {
    if (d.t <= 0) continue;
    d.t -= dt;
    if (d.t <= 0) { d.el.style.display = 'none'; continue; }
    tmpV.set(d.x, 2.6 + (0.8 - d.t) * 2.2, d.z).project(camera);
    if (tmpV.z > 1) { d.el.style.opacity = 0; continue; }
    d.el.style.opacity = Math.min(1, d.t * 3);
    d.el.style.transform = `translate(${(tmpV.x * 0.5 + 0.5) * innerWidth}px,${(-tmpV.y * 0.5 + 0.5) * innerHeight}px) translate(-50%,-50%) scale(${1 + Math.max(0, d.t - 0.6) * 3})`;
  }
}

function sortedRoster() { return [...G.roster.values()].filter((r) => !MONSTERS[r.cls]).sort((a, b) => (G.team >= 0 ? a.team - b.team : 0) || (G.gm === 'koth' || G.gm === 'king' ? b.pts - a.pts : 0) || b.kills - a.kills || a.deaths - b.deaths); }
const ally = (id) => G.team >= 0 && G.roster.get(id)?.team === G.team;
function updateScoreHud() {
  const list = sortedRoster(), me = G.roster.get(G.myId);
  if (!me) return;
  $('rank').textContent = '#' + (list.indexOf(me) + 1);
  if (G.gm !== 'pve') $('myScore').textContent = G.team >= 0 ? `${TEAMS[0].name} ${G.teamScore[0]} · ${G.teamScore[1]} ${TEAMS[1].name}` : G.gm === 'koth' || G.gm === 'king' ? `${me.pts} / ${G.limit} poin` : `${me.kills} / ${G.limit || KILL_LIMIT}`;
  if (!$('score').classList.contains('hidden')) { fillScore(); if (!G.ended && G.team >= 0) $('scoreTitle').textContent = `${TEAMS[0].name} ${G.teamScore[0]} · ${G.teamScore[1]} ${TEAMS[1].name}`; }
}
function fillScore() {
  const k = G.gm === 'koth' || G.gm === 'king';
  const rows = sortedRoster().map((r, i) => `<tr class="${r.id === G.myId ? 'me' : ''}"><td>${i + 1}</td><td></td>${k ? `<td>${r.pts}</td>` : ''}<td>${r.kills}</td><td>${r.deaths}</td></tr>`).join('');
  $('scoreTable').innerHTML = `<tr><th>#</th><th>Pengembara</th>${k ? '<th>Poin</th>' : ''}<th>Kill</th><th>Gugur</th></tr>${rows}`;
  sortedRoster().forEach((r, i) => {
    const cell = $('scoreTable').rows[i + 1].cells[1];
    cell.textContent = r.name + (r.bot ? ' (bot)' : '') + ' · ' + CLASSES[r.cls].name;
    if (r.team >= 0) { const d = document.createElement('i'); d.className = 'tdot'; d.style.background = '#' + TEAMS[r.team].color.toString(16).padStart(6, '0'); cell.prepend(d); }
  });
}
function showScore(end) {
  fillScore();
  const top = sortedRoster()[0];
  const ts = G.teamScore, win = ts[0] === ts[1] ? -1 : ts[0] > ts[1] ? 0 : 1;
  if (end && G.gm === 'pve') { const ck = G.wv?.[3] || 0; $('scoreTitle').textContent = `Bertahan sampai gelombang ${G.wv?.[0] || 0}`; $('scoreNext').textContent = ck ? `Ronde berikutnya lanjut dari gelombang ${ck + 1} (titik simpan) dengan berkah acak` : 'Ronde berikutnya mulai dari gelombang 1'; $('score').classList.remove('hidden'); return; }
  $('scoreTitle').textContent = !end ? (G.team >= 0 ? `${TEAMS[0].name} ${ts[0]} · ${ts[1]} ${TEAMS[1].name}` : 'Papan Skor')
    : G.team >= 0 ? (win < 0 ? 'Seri' : win === G.team ? `Regu ${TEAMS[win].name} Menang!` : `Regu ${TEAMS[win].name} Menang`)
    : top?.id === G.myId ? 'Kamu Menang!' : `${top?.name || ''} Menang`;
  $('score').classList.remove('hidden');
}
$('top').addEventListener('click', () => { if (G.ended) return; if ($('score').classList.contains('hidden')) showScore(false); else $('score').classList.add('hidden'); });
$('score').addEventListener('click', () => { if (!G.ended) $('score').classList.add('hidden'); });

const pauseEl = $('pause');
$('pauseBtn').addEventListener('click', () => { pauseEl.classList.toggle('hidden'); document.exitPointerLock?.(); input.fire = false; });
$('resume').addEventListener('click', () => pauseEl.classList.add('hidden'));
$('leave').addEventListener('click', () => { leaveGame(); G.myId = 0; $('menuMsg').textContent = ''; });
$('quality').addEventListener('change', (e) => { autoQuality = false; store.set('qualityManual', '1'); store.set('quality', e.target.value); applyQuality(e.target.value); });
$('sens').value = store.get('sens', '1'); input.sens = Number($('sens').value);
$('sens').addEventListener('input', (e) => { input.sens = Number(e.target.value); store.set('sens', e.target.value); });
$('autoFire').checked = G.autoFire; $('aimAssist').checked = G.aimAssist;
$('autoFire').addEventListener('change', (e) => { G.autoFire = e.target.checked; store.set('autoFire', G.autoFire ? '1' : ''); });
$('aimAssist').addEventListener('change', (e) => { G.aimAssist = e.target.checked; store.set('aimAssist', G.aimAssist ? '1' : ''); });
$('mute').addEventListener('change', (e) => setMuted(e.target.checked));
$('music').checked = G.music;
$('music').addEventListener('change', (e) => { G.music = e.target.checked; store.set('music', G.music ? '1' : ''); setMusic(G.music); });
$('vibrate').checked = G.vibrate;
$('vibrate').addEventListener('change', (e) => { G.vibrate = e.target.checked; store.set('vibrate', G.vibrate ? '1' : ''); if (G.vibrate) buzz(40); });
for (const el of [pauseEl]) for (const ev of ['touchstart', 'touchmove']) el.addEventListener(ev, (e) => e.stopPropagation());

// minimap
const mm = $('minimap'), mg = mm.getContext('2d'), mmBg = document.createElement('canvas');
mmBg.width = mmBg.height = 132;
function drawMinimapBg() {
  const g = mmBg.getContext('2d'), s = 132 / (ARENA * 2 + 6), c = 66;
  g.clearRect(0, 0, 132, 132);
  g.fillStyle = 'rgba(190,170,220,0.55)';
  for (const o of M.obst) {
    if (o.t === 'cyl') { g.beginPath(); g.arc(c - o.x * s, c - o.z * s, Math.max(1.5, o.r * s), 0, 7); g.fill(); }
    else g.fillRect(c - (o.x + o.w / 2) * s, c - (o.z + o.d / 2) * s, o.w * s, o.d * s);
  }
}
drawMinimapBg();
function drawMinimap() {
  const s = 132 / (ARENA * 2 + 6), c = 66;
  mg.clearRect(0, 0, 132, 132); mg.drawImage(mmBg, 0, 0);
  G.pings = (G.pings || []).filter((q) => q.t > G.time);
  for (const q of G.pings) { mg.strokeStyle = '#7dffb0'; mg.lineWidth = 2; mg.beginPath(); mg.arc(c - q.x * s, c - q.z * s, 4 + ((G.time * 6) % 4), 0, 7); mg.stroke(); }
  M.orbs.forEach(([x, z], i) => { if (G.orbMask & (1 << i)) { mg.fillStyle = '#59ff9c'; mg.fillRect(c - x * s - 1.5, c - z * s - 1.5, 3, 3); } });
  M.runes.forEach((r, i) => { if (G.runeMask & (1 << i)) { mg.fillStyle = r.type === 'dmg' ? '#ff3b4e' : '#4dc3ff'; mg.beginPath(); mg.arc(c - r.x * s, c - r.z * s, 3, 0, 7); mg.fill(); } });
  if (G.gm === 'koth') { mg.strokeStyle = G.holder === G.myId ? '#f2c66d' : G.holder === -1 ? '#b76bff' : G.holder ? '#ff4d5e' : 'rgba(255,242,208,.7)'; mg.lineWidth = 2; mg.beginPath(); mg.arc(c, c, KOTH_R * s, 0, 7); mg.stroke(); }
  for (const p of G.players.values()) {
    if (p.id === G.myId || (p.flags & 1)) continue;
    const isAlly = ally(p.id), isBounty = !!(p.flags & 64);
    if (isBounty) { mg.fillStyle = '#ffd56b'; mg.font = 'bold 12px sans-serif'; mg.textAlign = 'center'; mg.textBaseline = 'middle'; mg.fillText('★', c - p.x * s, c - p.z * s); continue; }
    if (!isAlly && Math.hypot(p.x - G.rx, p.z - G.rz) > 32) continue;
    mg.fillStyle = isAlly ? '#' + TEAMS[G.team].color.toString(16).padStart(6, '0') : '#ff5a4a'; mg.beginPath(); mg.arc(c - p.x * s, c - p.z * s, 3, 0, 7); mg.fill();
  }
  // peta: +x dunia ke kiri layar agar cocok dengan arah pandang awal (kanan pemain = -x)
  mg.save(); mg.translate(c - G.rx * s, c - G.rz * s); mg.rotate(input.yaw);
  mg.fillStyle = '#fff'; mg.beginPath(); mg.moveTo(0, -6); mg.lineTo(4, 4); mg.lineTo(-4, 4); mg.closePath(); mg.fill(); mg.restore();
}

// ---------- loop ----------
setupInput({ canvas, touchLayer: $('touchLayer'), stick: $('stick'), knob: $('knob'), fireBtn: $('fireBtn'), skillBtn: $('skillBtn'), ultBtn: $('ultBtn') });
applyQuality(quality);

function findTarget() {
  // lawan terdekat dengan garis tembak; dipakai untuk bantuan bidik & tembak otomatis
  let best = null, bestScore = 1e9;
  const range = G.cls.projSpeed * G.cls.projLife;
  for (const p of G.players.values()) {
    if (p.id === G.myId || (p.flags & 1) || ally(p.id)) continue;
    const dx = p.x - G.rx, dz = p.z - G.rz, d = Math.hypot(dx, dz);
    if (d > range + 2 || d < 0.5) continue;
    const diff = angDiff(Math.atan2(dx, dz), input.yaw);
    if (Math.abs(diff) > 0.3) continue;
    const score = Math.abs(diff) * 20 + d * 0.05;
    if (score < bestScore && los(G.rx, G.rz, p.x, p.z)) { bestScore = score; best = { p, diff, d }; }
  }
  return best;
}

// Tick dunia yang sedang ditampilkan (lawan digambar INTERP detik di belakang); server memutar mundur ke sini saat menembak.
function viewTick() {
  const b = G.ticks, rt = performance.now() - INTERP * 1000;
  if (!b.length) return 0;
  for (let i = b.length - 1; i > 0; i--) {
    if (b[i - 1][0] <= rt) { const [t0, k0] = b[i - 1], [t1, k1] = b[i]; return Math.round((k0 + (k1 - k0) * Math.min(1, (rt - t0) / (t1 - t0 || 1))) * 10) / 10; }
  }
  return b[0][1];
}

function fixedTick() {
  const dead = G.me.flags & 1, paused = !pauseEl.classList.contains('hidden');
  const fwdX = Math.sin(input.yaw), fwdZ = Math.cos(input.yaw);
  let jx = input.jx, jy = input.jy, fire = input.fire, k = input.skillQueued ? 1 : 0, u = input.ultQueued && G.me.ult >= ULT_MAX ? 1 : 0;
  input.skillQueued = false; input.ultQueued = false;
  if (paused || G.ended) { jx = jy = 0; fire = false; k = 0; u = 0; }
  const tgt = (G.autoFire || G.aimAssist) && !dead && !G.ended ? findTarget() : null;
  G.lockId = tgt ? tgt.p.id : 0;
  if (tgt) {
    const hitCone = Math.atan(1.0 / tgt.d);
    if (G.aimAssist && (fire || G.autoFire)) input.yaw += Math.max(-1.6 * DT, Math.min(1.6 * DT, tgt.diff));
    if (G.autoFire && !paused && Math.abs(tgt.diff) < hitCone) fire = true;
  }
  const q = (v) => Math.round(v * 1000) / 1000;
  const inp = {
    t: 'in', s: ++G.seq, mx: q(fwdX * jy - fwdZ * jx), mz: q(fwdZ * jy + fwdX * jx),
    y: q(input.yaw), f: fire && !dead ? 1 : 0, k, u: dead ? 0 : u, vt: viewTick(),
  };
  if (G.ws?.readyState === 1) G.ws.send(JSON.stringify(inp));
  if (dead || G.ended) return;
  const skillFired = stepPlayer(G.pred, inp, G.cls, DT);
  G.pending.push(inp);
  if (G.pending.length > 90) G.pending.shift();
  const mine = G.players.get(G.myId);
  if (G.tut && !G.tut.done) {
    const T = G.tut;
    const step = Math.hypot(G.pred.x - (T.px ?? G.pred.x), G.pred.z - (T.pz ?? G.pred.z));
    if (step < 2) T.moved += step; // abaikan lompatan posisi saat spawn/rekonsiliasi
    T.px = G.pred.x; T.pz = G.pred.z;
    if (T.lastYaw !== null && T.i >= 1) T.turned += Math.abs(angDiff(input.yaw, T.lastYaw));
    T.lastYaw = input.yaw;
    if (skillFired) T.skills++;
    T.check();
  }
  if (skillFired) { sfx(G.cls.skill); if (G.cls.skill === 'dash' && mine) fx.burst(G.rx, 1.2, G.rz, G.cls.color, 24, 5, 1.2, 0.4, 0); }
  G.localFireCd -= DT;
  if (inp.f && G.localFireCd <= 0 && mine) {
    G.localFireCd = G.cls.fireCd;
    if (G.tut) G.tut.shots++;
    mine.av.fireKick(); fx.muzzle(mine.av.tipWorld(tmpV), G.clsKey, input.yaw); sfx(G.clsKey);
    G.shake = Math.max(G.shake, G.clsKey === 'ranger' ? 0.08 : 0.22);
  }
}

const CAM_D = 7.2;
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
let last = performance.now(), fpsAcc = 0, fpsN = 0, fpsShown = 60, lowT = 0, hudT = 0;

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  G.time += dt;
  const t = G.time;

  if (G.phase === 'play' && G.myId) {
    G.acc += dt;
    let n = 0;
    while (G.acc >= DT && n++ < 4) { fixedTick(); G.acc -= DT; }
    if (G.acc > DT) G.acc = 0;

    // posisi saya: prediksi yang dihaluskan
    const pr = G.pred;
    const err = Math.hypot(pr.x - G.rx, pr.z - G.rz);
    const a = err > 6 ? 1 : Math.min(1, dt * 22);
    const ox = G.rx, oz = G.rz;
    G.rx += (pr.x - G.rx) * a; G.rz += (pr.z - G.rz) * a;
    const mv = dt > 0 ? Math.hypot(G.rx - ox, G.rz - oz) / dt : 0;
    if (mv > 2 && mv < 20 && !(G.me.flags & 1)) { G.stepT -= dt * mv / 8.5; if (G.stepT <= 0) { G.stepT = 0.36; step(); } }

    const rt = now - 110;
    for (const p of G.players.values()) {
      if (p.id === G.myId) { p.x = G.rx; p.z = G.rz; p.yaw = input.yaw; p.flags = G.me.flags; } else {
        const b = p.buf;
        if (b.length) {
          let i = b.length - 1;
          while (i > 0 && b[i - 1].t > rt) i--;
          const s1 = b[i], s0 = b[i - 1] || s1;
          let f = s1.t > s0.t ? (rt - s0.t) / (s1.t - s0.t) : 1;
          f = Math.max(0, Math.min(1.25, f));
          if (Math.hypot(s1.x - s0.x, s1.z - s0.z) > 8) f = 1;
          p.x = s0.x + (s1.x - s0.x) * f; p.z = s0.z + (s1.z - s0.z) * f;
          p.yaw = s0.yaw + angDiff(s1.yaw, s0.yaw) * Math.min(1, f);
        }
      }
      p.av.update(dt, p.x, p.z, p.yaw, p.flags, t);
      if (p.flags & 8 && Math.random() < 0.7) fx.particle(p.x, 1 + Math.random(), p.z, 0, 0.5, 0, ALL_CLASSES[p.cls].color, 1.3, 0.3, 0);
      if (G.mut === 'giant') p.av.big = 1.4;
      if (p.flags & 128 && Math.random() < 0.5) fx.particle(p.x + (Math.random() - 0.5), 0.3 + Math.random() * 1.6, p.z + (Math.random() - 0.5), 0, -0.5, 0, 0x7fd8ff, 0.9, 0.5, 0);
      if (!(p.flags & 1)) {
        if (p.flags & 16 && Math.random() < 0.5) fx.particle(p.x + (Math.random() - 0.5), 0.4 + Math.random() * 2, p.z + (Math.random() - 0.5), 0, 1.6, 0, RUNE_INFO.dmg.color, 0.9, 0.5, 0);
        if (p.flags & 32 && Math.random() < 0.5) fx.particle(p.x + (Math.random() - 0.5), 0.2 + Math.random() * 0.6, p.z + (Math.random() - 0.5), 0, 0.3, 0, RUNE_INFO.spd.color, 1.1, 0.4, 0);
      }
    }

    // kamera orang ketiga dengan penghindar tembok
    // saat tumbang di mode tim/Bertahan: kamera mengikuti rekan terdekat yang masih hidup
    let spec = null;
    if ((G.me.flags & 1) && G.team >= 0) { let bd = 1e9; for (const q of G.players.values()) { if (q.id === G.myId || (q.flags & 1) || !ally(q.id)) continue; const d = Math.hypot(q.x - G.pred.x, q.z - G.pred.z); if (d < bd) { bd = d; spec = q; } } }
    $('specTag').classList.toggle('hidden', !spec);
    if (spec) $('specTag').textContent = `Menonton ${nameOf(spec.id)}`;
    const vx = spec ? spec.x : G.rx, vz = spec ? spec.z : G.rz, vyaw = spec ? spec.yaw : input.yaw;
    const fx_ = Math.sin(vyaw), fz_ = Math.cos(vyaw);
    let want = CAM_D;
    for (let s = 0.15; s <= 1.001; s += 0.085) {
      if (blocked(vx - fx_ * CAM_D * s, vz - fz_ * CAM_D * s, 0.5)) { want = Math.max(2.2, CAM_D * (s - 0.1)); break; }
    }
    G.camDist += (want - G.camDist) * Math.min(1, dt * (want < G.camDist ? 16 : 4));
    G.shake = Math.max(0, G.shake - dt * 2.5);
    const sh = G.shake * G.shake * 0.6;
    const portrait = innerHeight > innerWidth;
    camPos.set(vx - fx_ * G.camDist + (Math.random() - 0.5) * sh, (portrait ? 6.0 : 4.3) + (CAM_D - G.camDist) * 0.55 + (Math.random() - 0.5) * sh, vz - fz_ * G.camDist);
    camera.position.copy(camPos);
    const ahead = 0.8 + 5.2 * (G.camDist / CAM_D);
    camLook.set(vx + fx_ * ahead, 2.0, vz + fz_ * ahead); camera.lookAt(camLook);

    // bidikan diproyeksikan dari titik tembak
    tmpV.set(G.rx + fx_ * 20, 1.55, G.rz + fz_ * 20).project(camera);
    const cr = $('cross');
    cr.style.left = (tmpV.x * 0.5 + 0.5) * 100 + '%'; cr.style.top = (-tmpV.y * 0.5 + 0.5) * 100 + '%';
    cr.classList.toggle('lock', !!G.lockId);
    cr.style.display = G.me.flags & 1 ? 'none' : '';

    hudT -= dt;
    if (hudT <= 0) {
      hudT = 0.1;
      const me = G.me;
      $('hpFill').style.width = Math.max(0, (me.hp / me.maxHp) * 100) + '%';
      $('hpText').textContent = `${Math.max(0, me.hp)} / ${me.maxHp}`;
      $('lvl').textContent = me.lvl;
      const lo = XP_LV[me.lvl - 1], hi = XP_LV[me.lvl];
      $('xpFill').style.width = (me.lvl >= MAX_LEVEL ? 100 : Math.min(100, ((me.xp - lo) / (hi - lo)) * 100)) + '%';
      const cd = G.pred.skillCd;
      $('skillCd').style.height = (cd / G.cls.skillCd) * 100 + '%';
      $('skillNum').textContent = cd > 0 ? Math.ceil(cd) : '';
      const uf = Math.min(1, (G.me.ult || 0) / ULT_MAX);
      $('ultRing').style.strokeDashoffset = String(176 * (1 - uf));
      $('ultBtn').classList.toggle('ready', uf >= 1);
      $('ultName').textContent = uf >= 1 ? ULT[G.clsKey].name : `${Math.floor(uf * 100)}%`;
      const evNow = G.ev;
      $('eventTag').classList.toggle('hidden', !evNow);
      if (evNow) $('eventTag').textContent = `${EVENTS[evNow[0]].name} · ${evNow[1]} dtk`;
      $('skillName').style.opacity = cd > 0 ? 0.25 : 1;
      const tm = Math.max(0, G.tm);
      $('timer').textContent = G.gm === 'pve' && !G.ended ? (G.wv?.[1] === 0 ? `Mulai ${tm}` : `G${G.wv?.[0] || 1}`) : `${Math.floor(tm / 60)}:${String(tm % 60).padStart(2, '0')}`;
      if (G.gm === 'pve' && G.wv) $('myScore').textContent = G.wv[1] === 0 ? `Gelombang ${G.wv[0] + 1} segera` : `Gelombang ${G.wv[0]} · ${G.wv[2]} monster`;
      if (me.flags & 1) {
        const mine = G.rv?.find((r) => r[0] === G.myId);
        $('deathT').textContent = G.gm !== 'pve' ? `Bangkit dalam ${Math.ceil(me.respawnT)}…`
          : mine?.[2] > 0 ? `Nyawa cadangan: bangkit sendiri dalam ${mine[2]}…`
          : mine?.[1] > 0 ? `Rekan sedang menolongmu… ${mine[1]}%`
          : 'Tunggu rekan berdiri di dekatmu 3 detik, atau gelombang selesai.';
      }
      $('perkBar').innerHTML = G.gm === 'pve' ? (G.me.perks ? G.me.perks.split(',').map((x) => { const k = x.replace(/\d+$/, ''), n = +x.slice(k.length); return `<span>${PERKS[k]?.name || k}${n > 1 ? ' ×' + n : ''}</span>`; }).join('') : '') + (G.me.spare ? '<span>Nyawa cadangan</span>' : '') : '';
      if (G.me.offer && $('perks').classList.contains('hidden') && !(G.me.flags & 1)) showPerks(G.me.offer);
      if (G.ended) $('scoreNext').textContent = G.gm === 'pve' && G.wv?.[3] ? `Lanjut dari gelombang ${G.wv[3] + 1} (titik simpan) dalam ${tm} detik` : `Ronde berikutnya dalam ${tm} detik`;
      else $('scoreNext').textContent = '';
      if (!G.ended) { if (input.showScore && $('score').classList.contains('hidden')) showScore(false); else if (!input.showScore && !isTouch && G.tabOpen) $('score').classList.add('hidden'); G.tabOpen = input.showScore; }
      $('net').textContent = `${G.ping} ms · ${fpsShown} fps`;
      $('buffs').innerHTML = [['dmg', G.me.dmgT], ['spd', G.me.spdT]].filter(([, v]) => v > 0)
        .map(([k, v]) => `<span class="buff" style="--c:#${RUNE_INFO[k].color.toString(16).padStart(6, '0')}"><i></i>${RUNE_INFO[k].name.replace('Rune ', '')} ${Math.ceil(v)}</span>`).join('');
      if (G.gm === 'king') {
        const kg = [...G.players.values()].find((q) => q.flags & 64), zt = $('zoneTag');
        zt.textContent = !kg ? 'Mahkota menunggu pemilik baru…' : kg.id === G.myId ? 'Kamu sang RAJA: bertahan hidup untuk poin!' : `Buru sang raja: ${nameOf(kg.id)}`;
        zt.style.setProperty('--c', kg?.id === G.myId ? '#f2c66d' : '#ff4d5e');
      }
      if (G.gm === 'koth') {
        const h = G.holder, zt = $('zoneTag');
        const inside = Math.hypot(G.rx, G.rz) < KOTH_R;
        zt.textContent = h === G.myId ? 'Kamu menguasai altar' : h === -1 ? 'Altar diperebutkan' : h ? `Altar dikuasai ${nameOf(h)}` : inside ? 'Bertahan di lingkaran untuk mengumpulkan poin' : 'Altar kosong: rebut lingkaran di tengah';
        zt.style.setProperty('--c', h === G.myId ? '#f2c66d' : h === -1 ? '#b76bff' : h ? '#ff4d5e' : '#fff2d0');
      }
      drawMinimap();
    }
    updateDmg(dt);
    world.update(t, { x: G.rx, z: G.rz }, G.orbMask, G.barrelMask);
    drawThreats(t);
    drawDowned();
    extras.update(t, G.runeMask, G.gm, G.holder, G.myId);
    // Gerhana: arena meredup dan kabut menebal; dikembalikan perlahan setelah selesai
    const ecl = G.ev?.[0] === 'eclipse' ? 1 : 0;
    G.eclipse = (G.eclipse || 0) + (ecl - (G.eclipse || 0)) * Math.min(1, dt * 1.5);
    renderer.toneMappingExposure = 1.15 - 0.7 * G.eclipse;
    if (world.fog) { world.fogBase ??= world.fog.density; world.fog.density = world.fogBase * (1 + 3.5 * G.eclipse); }
    const gold = G.ev?.[0] === 'golden' && !G.ev[4];
    cup.visible = gold;
    if (gold) { cup.position.set(G.ev[2], 1.1 + Math.sin(t * 2.5) * 0.15, G.ev[3]); cup.rotation.y = t * 1.2; }
  } else {
    // menu: kamera mengitari altar
    const a = t * 0.08;
    camera.position.set(Math.sin(a) * 30, 9 + Math.sin(t * 0.2) * 1.5, Math.cos(a) * 30);
    camera.lookAt(0, 3.5, 0);
    world.update(t, { x: 0, z: 0 }, 255);
    extras.update(t, 15, 'dm', 0, 0);
  }

  fx.update(dt);
  if (quality === 'low') renderer.render(scene, camera); else composer.render(dt);

  // kualitas otomatis: turunkan bila fps rendah bertahan
  fpsAcc += dt; fpsN++;
  if (fpsAcc >= 1) {
    fpsShown = Math.round(fpsN / fpsAcc); fpsAcc = 0; fpsN = 0;
    if (autoQuality && !document.hidden && G.time > 4) {
      lowT = fpsShown < 27 ? lowT + 1 : 0;
      if (lowT >= 3 && quality !== 'low') { lowT = 0; applyQuality(quality === 'high' ? 'medium' : 'low'); store.set('quality', quality); }
    }
  }
}
requestAnimationFrame(frame);
