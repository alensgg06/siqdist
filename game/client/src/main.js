import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { DT, CLASSES, CLASS_KEYS, ARENA, OBST, ORBS, XP_LV, MAX_LEVEL, NOVA_R, KILL_LIMIT, KOTH_R, RUNES, RUNE_INFO, SPD_BUFF, INTERP } from '../../shared/config.js';
import { stepPlayer, blocked, los, angDiff } from '../../shared/sim.js';
import { buildWorld, buildExtras } from './world.js';
import { Avatar } from './chars.js';
import { Fx } from './fx.js';
import { input, setupInput, isTouch } from './input.js';
import { initAudio, sfx, setMuted } from './audio.js';

const $ = (id) => document.getElementById(id);
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
const world = buildWorld(scene);
const fx = new Fx(scene, world.glowTex);
const extras = buildExtras(scene, world.glowTex, RUNES, RUNE_INFO, KOTH_R);
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
  world.grass.count = q === 'low' ? 700 : q === 'medium' ? 2200 : world.grassMax;
  for (const l of world.pointLights) l.visible = q !== 'low';
  fx.lightsOn = q !== 'low';
  $('quality').value = q;
  resize();
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
  tut: null, gm: 'dm', runeMask: 15, holder: 0, ticks: [], createGm: store.get('gm', 'dm'),
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

function serverUrl() {
  const q = new URLSearchParams(location.search).get('server');
  if (q) { store.set('server', q); return q; }
  const saved = store.get('server', '');
  if (saved && !['localhost', '127.0.0.1'].includes(location.hostname)) return saved;
  return (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + '/ws';
}

const menuBtns = ['play', 'create', 'joinBtn', 'practice'];
const cleanCode = (v) => String(v || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4);
{
  const q = cleanCode(new URLSearchParams(location.search).get('room'));
  if (q) { $('code').value = q; $('joinBtn').textContent = 'Gabung ' + q; }
}
$('code').addEventListener('input', (e) => { e.target.value = cleanCode(e.target.value); $('joinBtn').textContent = 'Gabung'; });
$('code').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('joinBtn').click(); });

function start(mode, code) {
  initAudio();
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
for (const b of document.querySelectorAll('.mode')) {
  const set = () => {
    G.createGm = b.dataset.gm; store.set('gm', G.createGm);
    for (const o of document.querySelectorAll('.mode')) { o.classList.toggle('on', o === b); o.setAttribute('aria-checked', o === b); }
  };
  b.addEventListener('click', set);
  if (b.dataset.gm === G.createGm) set();
}
$('create').addEventListener('click', () => start('create'));
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
  ws.onopen = () => ws.send(JSON.stringify({ t: 'join', name, cls: G.clsKey, mode, code, gm: G.createGm }));
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
  document.exitPointerLock?.();
  $('hud').classList.add('hidden'); $('menu').classList.remove('hidden');
  $('tutor').classList.add('hidden'); $('hitDir').textContent = '';
  for (const b of menuBtns) $(b).disabled = false;
}

// ---------- jaringan ----------
function onMessage(m) {
  if (m.t === 'w') {
    G.myId = m.id; G.limit = m.limit || KILL_LIMIT; G.cls = CLASSES[G.clsKey]; G.phase = 'play'; G.ended = false;
    G.seq = 0; G.pending.length = 0; G.me.xp = 0; G.me.lvl = 1;
    $('menu').classList.add('hidden'); $('hud').classList.remove('hidden');
    $('menuMsg').textContent = '';
    $('skillName').textContent = G.cls.skillName;
    $('death').classList.add('hidden'); $('score').classList.add('hidden'); $('pause').classList.add('hidden');
    input.enabled = true;
    G.code = m.code || null; G.practice = !!m.practice; G.gm = m.gm || 'dm'; G.ticks.length = 0;
    $('zoneTag').classList.toggle('hidden', G.gm !== 'koth');
    const pill = $('roomPill');
    pill.classList.toggle('hidden', !G.code && !G.practice);
    pill.textContent = G.code ? `${G.gm === 'koth' ? 'Altar' : 'Room'} ${G.code} ⤴` : 'Latihan';
    if (G.practice && G.tut) { G.tut.show(); } else { G.tut = null; $('tutor').classList.add('hidden'); }
    if (!G.practice || !G.tut) toast(G.code ? `Room ${G.code}: ketuk kode untuk membagikan` : G.practice ? 'Arena latihan' : 'Pertarungan dimulai');
  } else if (m.t === 'e') {
    G.joinErr = m.m;
  } else if (m.t === 'r') {
    G.roster.clear();
    for (const [id, name, cls, kills, deaths, bot, pts] of m.l) G.roster.set(id, { id, name, cls, kills, deaths, bot, pts: pts || 0 });
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
  const av = new Avatar(r.cls, r.name, id === G.myId, world.glowTex);
  scene.add(av.group);
  p = { id, av, buf: [], x: 0, z: 0, yaw: 0, flags: 0, hp: 1, maxHp: 1, lvl: 1, cls: r.cls, seen: 0 };
  G.players.set(id, p);
  return p;
}

function onSnapshot(m) {
  const now = performance.now();
  if (!G.myId) return;
  const wasEnded = G.ended;
  G.ended = !!m.st; G.tm = m.tm; G.orbMask = m.o; G.runeMask = m.u ?? 15; G.holder = m.z || 0;
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
      p.av.setInfo(e[4], e[5], e[6]);
    }
  }
  for (const [id, p] of G.players) if (p.seen !== G.snapN) { p.av.dispose(scene); G.players.delete(id); }

  // rekonsiliasi prediksi
  const me = m.me, pr = G.pred;
  G.me.xp = me[6]; G.me.respawnT = me[7]; G.me.dmgT = me[8] || 0; G.me.spdT = me[9] || 0;
  pr.spd = G.me.spdT > 0 ? SPD_BUFF : 1;
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
        owner.av.fireKick(); fx.muzzle(owner.av.tipWorld(tmpV), cls, e[5]); sfx(cls, vol(e[3], e[4]) * 0.7);
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
      if (v) fx.burst(v.x, 1.4, v.z, CLASSES[v.cls].color, 40, 8, 1.4, 0.9);
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
    case 'n': fx.nova(e[2], e[3], CLASSES.mage.color, NOVA_R); sfx('nova', vol(e[2], e[3])); G.shake = Math.max(G.shake, 0.6 * vol(e[2], e[3])); break;
    case 'u': {
      const r = RUNES[e[1]], info = RUNE_INFO[r.type];
      fx.burst(r.x, 1.2, r.z, info.color, 34, 6, 1.3, 0.8, -2); fx.pillar(r.x, r.z, info.color);
      if (e[2] === G.myId) { sfx('level'); buzz([30, 30, 30]); toast(`${info.name}: ${info.desc}`); }
      break;
    }
    case 'o': fx.burst(ORBS[e[1]][0], 1.2, ORBS[e[1]][1], 0x59ff9c, 26, 5, 1.1, 0.7, -2); if (e[2] === G.myId) sfx('orb'); break;
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

function sortedRoster() { return [...G.roster.values()].sort((a, b) => (G.gm === 'koth' ? b.pts - a.pts : 0) || b.kills - a.kills || a.deaths - b.deaths); }
function updateScoreHud() {
  const list = sortedRoster(), me = G.roster.get(G.myId);
  if (!me) return;
  $('rank').textContent = '#' + (list.indexOf(me) + 1);
  $('myScore').textContent = G.gm === 'koth' ? `${me.pts} / ${G.limit} poin` : `${me.kills} / ${G.limit || KILL_LIMIT}`;
  if (!$('score').classList.contains('hidden')) fillScore();
}
function fillScore() {
  const k = G.gm === 'koth';
  const rows = sortedRoster().map((r, i) => `<tr class="${r.id === G.myId ? 'me' : ''}"><td>${i + 1}</td><td></td>${k ? `<td>${r.pts}</td>` : ''}<td>${r.kills}</td><td>${r.deaths}</td></tr>`).join('');
  $('scoreTable').innerHTML = `<tr><th>#</th><th>Pengembara</th>${k ? '<th>Poin</th>' : ''}<th>Kill</th><th>Gugur</th></tr>${rows}`;
  sortedRoster().forEach((r, i) => { $('scoreTable').rows[i + 1].cells[1].textContent = r.name + (r.bot ? ' (bot)' : '') + ' · ' + CLASSES[r.cls].name; });
}
function showScore(end) {
  fillScore();
  const top = sortedRoster()[0];
  $('scoreTitle').textContent = end ? (top?.id === G.myId ? 'Kamu Menang!' : `${top?.name || ''} Menang`) : 'Papan Skor';
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
$('vibrate').checked = G.vibrate;
$('vibrate').addEventListener('change', (e) => { G.vibrate = e.target.checked; store.set('vibrate', G.vibrate ? '1' : ''); if (G.vibrate) buzz(40); });
for (const el of [pauseEl]) for (const ev of ['touchstart', 'touchmove']) el.addEventListener(ev, (e) => e.stopPropagation());

// minimap
const mm = $('minimap'), mg = mm.getContext('2d'), mmBg = document.createElement('canvas');
mmBg.width = mmBg.height = 132;
{
  const g = mmBg.getContext('2d'), s = 132 / (ARENA * 2 + 6), c = 66;
  g.fillStyle = 'rgba(190,170,220,0.55)';
  for (const o of OBST) {
    if (o.t === 'cyl') { g.beginPath(); g.arc(c - o.x * s, c - o.z * s, Math.max(1.5, o.r * s), 0, 7); g.fill(); }
    else g.fillRect(c - (o.x + o.w / 2) * s, c - (o.z + o.d / 2) * s, o.w * s, o.d * s);
  }
}
function drawMinimap() {
  const s = 132 / (ARENA * 2 + 6), c = 66;
  mg.clearRect(0, 0, 132, 132); mg.drawImage(mmBg, 0, 0);
  ORBS.forEach(([x, z], i) => { if (G.orbMask & (1 << i)) { mg.fillStyle = '#59ff9c'; mg.fillRect(c - x * s - 1.5, c - z * s - 1.5, 3, 3); } });
  RUNES.forEach((r, i) => { if (G.runeMask & (1 << i)) { mg.fillStyle = r.type === 'dmg' ? '#ff3b4e' : '#4dc3ff'; mg.beginPath(); mg.arc(c - r.x * s, c - r.z * s, 3, 0, 7); mg.fill(); } });
  if (G.gm === 'koth') { mg.strokeStyle = G.holder === G.myId ? '#f2c66d' : G.holder === -1 ? '#b76bff' : G.holder ? '#ff4d5e' : 'rgba(255,242,208,.7)'; mg.lineWidth = 2; mg.beginPath(); mg.arc(c, c, KOTH_R * s, 0, 7); mg.stroke(); }
  for (const p of G.players.values()) {
    if (p.id === G.myId || (p.flags & 1)) continue;
    if (Math.hypot(p.x - G.rx, p.z - G.rz) > 32) continue;
    mg.fillStyle = '#ff5a4a'; mg.beginPath(); mg.arc(c - p.x * s, c - p.z * s, 3, 0, 7); mg.fill();
  }
  // peta: +x dunia ke kiri layar agar cocok dengan arah pandang awal (kanan pemain = -x)
  mg.save(); mg.translate(c - G.rx * s, c - G.rz * s); mg.rotate(input.yaw);
  mg.fillStyle = '#fff'; mg.beginPath(); mg.moveTo(0, -6); mg.lineTo(4, 4); mg.lineTo(-4, 4); mg.closePath(); mg.fill(); mg.restore();
}

// ---------- loop ----------
setupInput({ canvas, touchLayer: $('touchLayer'), stick: $('stick'), knob: $('knob'), fireBtn: $('fireBtn'), skillBtn: $('skillBtn') });
applyQuality(quality);

function findTarget() {
  // lawan terdekat dengan garis tembak; dipakai untuk bantuan bidik & tembak otomatis
  let best = null, bestScore = 1e9;
  const range = G.cls.projSpeed * G.cls.projLife;
  for (const p of G.players.values()) {
    if (p.id === G.myId || (p.flags & 1)) continue;
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
  let jx = input.jx, jy = input.jy, fire = input.fire, k = input.skillQueued ? 1 : 0;
  input.skillQueued = false;
  if (paused || G.ended) { jx = jy = 0; fire = false; k = 0; }
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
    y: q(input.yaw), f: fire && !dead ? 1 : 0, k, vt: viewTick(),
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
    G.rx += (pr.x - G.rx) * a; G.rz += (pr.z - G.rz) * a;

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
      if (p.flags & 8 && Math.random() < 0.7) fx.particle(p.x, 1 + Math.random(), p.z, 0, 0.5, 0, CLASSES[p.cls].color, 1.3, 0.3, 0);
      if (!(p.flags & 1)) {
        if (p.flags & 16 && Math.random() < 0.5) fx.particle(p.x + (Math.random() - 0.5), 0.4 + Math.random() * 2, p.z + (Math.random() - 0.5), 0, 1.6, 0, RUNE_INFO.dmg.color, 0.9, 0.5, 0);
        if (p.flags & 32 && Math.random() < 0.5) fx.particle(p.x + (Math.random() - 0.5), 0.2 + Math.random() * 0.6, p.z + (Math.random() - 0.5), 0, 0.3, 0, RUNE_INFO.spd.color, 1.1, 0.4, 0);
      }
    }

    // kamera orang ketiga dengan penghindar tembok
    const fx_ = Math.sin(input.yaw), fz_ = Math.cos(input.yaw);
    let want = CAM_D;
    for (let s = 0.15; s <= 1.001; s += 0.085) {
      if (blocked(G.rx - fx_ * CAM_D * s, G.rz - fz_ * CAM_D * s, 0.5)) { want = Math.max(2.2, CAM_D * (s - 0.1)); break; }
    }
    G.camDist += (want - G.camDist) * Math.min(1, dt * (want < G.camDist ? 16 : 4));
    G.shake = Math.max(0, G.shake - dt * 2.5);
    const sh = G.shake * G.shake * 0.6;
    const portrait = innerHeight > innerWidth;
    camPos.set(G.rx - fx_ * G.camDist + (Math.random() - 0.5) * sh, (portrait ? 6.0 : 4.3) + (CAM_D - G.camDist) * 0.55 + (Math.random() - 0.5) * sh, G.rz - fz_ * G.camDist);
    camera.position.copy(camPos);
    const ahead = 0.8 + 5.2 * (G.camDist / CAM_D);
    camLook.set(G.rx + fx_ * ahead, 2.0, G.rz + fz_ * ahead); camera.lookAt(camLook);

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
      $('skillName').style.opacity = cd > 0 ? 0.25 : 1;
      const tm = Math.max(0, G.tm);
      $('timer').textContent = `${Math.floor(tm / 60)}:${String(tm % 60).padStart(2, '0')}`;
      if (me.flags & 1) $('deathT').textContent = `Bangkit dalam ${Math.ceil(me.respawnT)}…`;
      if (G.ended) $('scoreNext').textContent = `Ronde berikutnya dalam ${tm} detik`;
      else $('scoreNext').textContent = '';
      if (!G.ended) { if (input.showScore && $('score').classList.contains('hidden')) showScore(false); else if (!input.showScore && !isTouch && G.tabOpen) $('score').classList.add('hidden'); G.tabOpen = input.showScore; }
      $('net').textContent = `${G.ping} ms · ${fpsShown} fps`;
      $('buffs').innerHTML = [['dmg', G.me.dmgT], ['spd', G.me.spdT]].filter(([, v]) => v > 0)
        .map(([k, v]) => `<span class="buff" style="--c:#${RUNE_INFO[k].color.toString(16).padStart(6, '0')}"><i></i>${RUNE_INFO[k].name.replace('Rune ', '')} ${Math.ceil(v)}</span>`).join('');
      if (G.gm === 'koth') {
        const h = G.holder, zt = $('zoneTag');
        const inside = Math.hypot(G.rx, G.rz) < KOTH_R;
        zt.textContent = h === G.myId ? 'Kamu menguasai altar' : h === -1 ? 'Altar diperebutkan' : h ? `Altar dikuasai ${nameOf(h)}` : inside ? 'Bertahan di lingkaran untuk mengumpulkan poin' : 'Altar kosong: rebut lingkaran di tengah';
        zt.style.setProperty('--c', h === G.myId ? '#f2c66d' : h === -1 ? '#b76bff' : h ? '#ff4d5e' : '#fff2d0');
      }
      drawMinimap();
    }
    updateDmg(dt);
    world.update(t, { x: G.rx, z: G.rz }, G.orbMask);
    extras.update(t, G.runeMask, G.gm, G.holder, G.myId);
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
