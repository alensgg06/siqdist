// Suara sintetis WebAudio, tanpa file eksternal.
// Tiap bunyi disusun berlapis: hentakan awal, badan, dan ekor; nada dan panjangnya sedikit diacak
// supaya tembakan beruntun tidak terdengar seragam.
let ctx = null, master = null, noiseBuf = null, echoIn = null, sfxBus = null, musicBus = null;
const volume = { music: 0.6, sfx: 0.8 };
// penggeser 0..1 menjadi penguatan; nilai bawaan (musik 0,6, efek 0,8) sama dengan penguatan 1
const gainOf = (kind) => (volume[kind] / (kind === 'music' ? 0.6 : 0.8)) ** 2;
export let muted = false;

function setup(c) {
  // pembatas di ujung: lapisan yang bertumpuk tidak boleh pecah
  const comp = c.createDynamicsCompressor();
  comp.threshold.value = -14; comp.knee.value = 10; comp.ratio.value = 6; comp.attack.value = 0.003; comp.release.value = 0.12;
  comp.connect(c.destination);
  const m = c.createGain(); m.gain.value = 0.5; m.connect(comp);
  const sb = c.createGain(), mb = c.createGain(); sb.gain.value = gainOf('sfx'); mb.gain.value = gainOf('music'); sb.connect(m); mb.connect(m);
  const nb = c.createBuffer(1, Math.floor(c.sampleRate * 0.6), c.sampleRate);
  const d = nb.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  // gema pendek untuk lonceng dan jurus
  const ein = c.createGain(), dl = c.createDelay(0.5), fb = c.createGain(), lp = c.createBiquadFilter();
  dl.delayTime.value = 0.13; fb.gain.value = 0.38; lp.type = 'lowpass'; lp.frequency.value = 2600;
  ein.connect(dl); dl.connect(lp); lp.connect(fb); fb.connect(dl); lp.connect(sb);
  return { m, nb, ein, sb, mb };
}
export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  ({ m: master, nb: noiseBuf, ein: echoIn, sb: sfxBus, mb: musicBus } = setup(ctx));
}
export function setMuted(m) { muted = m; if (master) master.gain.value = m ? 0 : 0.5; }
// kind: 'music' atau 'sfx'; v: 0..1
export function setVolume(kind, v) {
  volume[kind] = Math.max(0, Math.min(1, Number(v) || 0));
  const node = kind === 'music' ? musicBus : sfxBus;
  if (node) node.gain.setTargetAtTime(gainOf(kind), ctx.currentTime, 0.05);
}
// layar mati atau aplikasi di latar belakang: hentikan suara, lanjutkan saat kembali
export function setActive(on) { if (ctx) { if (on) ctx.resume(); else ctx.suspend(); } }
export const audioRunning = () => !!ctx && ctx.state === 'running';

const jit = (a) => 1 + (Math.random() * 2 - 1) * a;
// jalur keluar satu bunyi. far: bunyi orang lain, diredam sesuai jarak. echo: bagian yang dikirim ke gema
function bus(vol, far, echo = 0, gain = 1) {
  const g = ctx.createGain(); g.gain.value = vol * gain;
  if (far) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500 + 5500 * Math.min(1, vol) ** 1.5; g.connect(f); f.connect(sfxBus); }
  else g.connect(sfxBus);
  if (echo) { const e = ctx.createGain(); e.gain.value = echo; g.connect(e); e.connect(echoIn); }
  return g;
}
// osilator dengan selubung: a = lama naik, sisanya turun
function tone(out, type, f0, f1, dur, vol, delay = 0, a = 0.004) {
  const t = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + a); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
  o.connect(g); g.connect(out); o.start(t); o.stop(t + dur + 0.02);
}
// desis tersaring; frekuensi saringan bisa menyapu dari f0 ke f1
function noise(out, dur, vol, f0, f1 = f0, q = 1, delay = 0, a = 0.003, type = 'bandpass') {
  const t = ctx.currentTime + delay, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = noiseBuf; f.type = type; f.Q.value = q;
  f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + dur);
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + a); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
  s.connect(f); f.connect(g); g.connect(out); s.start(t, Math.random() * 0.08); s.stop(t + dur + 0.02);
}
// lonceng: nada dasar dengan dua nada atas tak-harmonis yang lebih cepat padam
function bell(out, f, dur, vol, delay = 0) {
  tone(out, 'sine', f, f, dur, vol, delay, 0.002);
  tone(out, 'sine', f * 2.76, f * 2.76, dur * 0.55, vol * 0.4, delay, 0.002);
  tone(out, 'sine', f * 5.4, f * 5.4, dur * 0.25, vol * 0.22, delay, 0.001);
}

export const SOUNDS = {
  // ---- tembakan ----
  ranger(o) { // petikan tali, lalu desing panah bercahaya
    const r = jit(0.06);
    noise(o, 0.022, 0.2, 5200, 5200, 0.8, 0, 0.001, 'highpass');
    tone(o, 'triangle', 920 * r, 610 * r, 0.075, 0.2, 0, 0.002);
    tone(o, 'sine', 2500 * r, 1700 * r, 0.13, 0.07, 0.01);
    noise(o, 0.15 * jit(0.15), 0.1, 2300, 6200, 1.6, 0.012, 0.02);
  },
  mage(o) { // hembusan api yang menggulung dengan dentum rendah
    const r = jit(0.08);
    tone(o, 'sine', 120 * r, 44, 0.24, 0.3, 0, 0.006);
    noise(o, 0.36 * jit(0.1), 0.24, 260 * r, 1500, 0.7, 0, 0.035);
    tone(o, 'sawtooth', 190 * r, 72, 0.26, 0.07, 0, 0.02);
    for (let i = 0; i < 3; i++) noise(o, 0.025, 0.09, 3400 * jit(0.3), 3400, 2, 0.05 + Math.random() * 0.22, 0.001, 'highpass');
  },
  guardian(o) { // hantaman batu yang berat dan pendek, dengan dengung rune
    const r = jit(0.07);
    tone(o, 'sine', 165 * r, 40, 0.17, 0.42, 0, 0.002);
    noise(o, 0.1, 0.3, 620 * r, 240, 0.7, 0, 0.001);
    noise(o, 0.03, 0.14, 2600, 2600, 1.2, 0, 0.001);
    tone(o, 'triangle', 196 * r, 185 * r, 0.24, 0.07, 0.02, 0.02);
    tone(o, 'triangle', 294 * r, 280 * r, 0.2, 0.045, 0.02, 0.02);
  },
  priest(o) { // denting lonceng lembut
    bell(o, 1046.5 * [1, 1.125, 1.25, 1.5][Math.floor(Math.random() * 4)], 0.34, 0.15);
    noise(o, 0.02, 0.05, 4200, 4200, 1, 0, 0.001, 'highpass');
  },
  caster(o) { noise(o, 0.16, 0.16, 900, 2600, 1.4, 0, 0.02); tone(o, 'sawtooth', 420 * jit(0.08), 180, 0.16, 0.1, 0, 0.01); },
  frost(o) { tone(o, 'sine', 1900 * jit(0.06), 880, 0.18, 0.12); noise(o, 0.14, 0.09, 4600, 7000, 2, 0, 0.01, 'highpass'); },
  // ---- kena sasaran ----
  hit(o) { // tanda tembakanmu mengenai lawan: kilau dua nada yang pendek dan jelas
    const r = jit(0.04);
    noise(o, 0.018, 0.12, 3800, 3800, 1, 0, 0.001, 'highpass');
    tone(o, 'triangle', 1320 * r, 1320 * r, 0.05, 0.17, 0, 0.001);
    tone(o, 'sine', 1980 * r, 1980 * r, 0.09, 0.12, 0.022, 0.002);
  },
  hurt(o) { // kamu terkena: pukulan tumpul
    tone(o, 'sine', 170, 58, 0.15, 0.34, 0, 0.002);
    noise(o, 0.08, 0.2, 820 * jit(0.15), 300, 0.8, 0, 0.001);
    tone(o, 'sawtooth', 230, 95, 0.13, 0.08);
  },
  kill(o) { bell(o, 659.3, 0.22, 0.16); bell(o, 987.8, 0.3, 0.16, 0.08); bell(o, 1318.5, 0.42, 0.13, 0.16); },
  death(o) { tone(o, 'sawtooth', 300, 46, 0.75, 0.22, 0, 0.01); tone(o, 'sine', 150, 38, 0.8, 0.22); noise(o, 0.6, 0.1, 900, 120, 0.6, 0, 0.02); },
  boom(o) { // ledakan bola api, meteor, tong
    tone(o, 'sine', 125, 30, 0.5, 0.42, 0, 0.003);
    noise(o, 0.55, 0.38, 1100, 90, 0.5, 0, 0.004, 'lowpass');
    noise(o, 0.05, 0.2, 2400, 2400, 0.8, 0, 0.001);
    for (let i = 0; i < 4; i++) noise(o, 0.03, 0.07, 2800 * jit(0.3), 2800, 2, 0.1 + Math.random() * 0.35, 0.001, 'highpass');
  },
  // ---- jurus ----
  dash(o) { // Kilat: sapuan angin menanjak dengan kilau
    noise(o, 0.2, 0.24, 700, 5200, 1.1, 0, 0.015);
    tone(o, 'sine', 560, 1900, 0.16, 0.1, 0, 0.01);
    tone(o, 'triangle', 1400, 2800, 0.1, 0.05, 0.05);
  },
  nova(o) { // Nova: tarikan singkat, lalu ledakan melingkar
    tone(o, 'sine', 70, 520, 0.14, 0.16, 0, 0.02);
    noise(o, 0.14, 0.1, 300, 2400, 1.2, 0, 0.03);
    tone(o, 'sine', 140, 34, 0.45, 0.4, 0.12, 0.003);
    noise(o, 0.5, 0.34, 1600, 110, 0.5, 0.12, 0.004, 'lowpass');
    tone(o, 'sawtooth', 320, 80, 0.3, 0.07, 0.12);
  },
  shield(o) { // Perisai: dengung rune yang mengunci
    tone(o, 'sine', 110, 110, 0.5, 0.2, 0, 0.03);
    tone(o, 'sine', 330, 660, 0.3, 0.17, 0, 0.02);
    tone(o, 'triangle', 495, 990, 0.32, 0.09, 0.03, 0.02);
    bell(o, 1320, 0.4, 0.07, 0.2);
    noise(o, 0.25, 0.06, 3000, 6000, 2, 0, 0.05);
  },
  heal(o) { // Doa: rangkaian lonceng naik di atas nada hangat
    tone(o, 'sine', 261.6, 261.6, 0.7, 0.12, 0, 0.08);
    tone(o, 'sine', 392, 392, 0.7, 0.08, 0, 0.1);
    [523.3, 659.3, 784, 1046.5].forEach((f, i) => bell(o, f, 0.5, 0.11, i * 0.075));
  },
  orb(o) { tone(o, 'sine', 700, 1400, 0.2, 0.16); tone(o, 'sine', 1050, 2100, 0.2, 0.07, 0.03); },
  level(o) { [523.3, 659.3, 784, 1046.5].forEach((f, i) => { tone(o, 'triangle', f, f, 0.22, 0.14, i * 0.08); bell(o, f * 2, 0.3, 0.05, i * 0.08); }); },
};
// penyeimbang kenyaringan antarbunyi (diukur dari hasil render): tembakan dan tanda kena tidak boleh kalah dari jurus
const GAIN = { ranger: 2.6, mage: 1.5, guardian: 1.8, priest: 1.4, caster: 2.2, frost: 1.6, hit: 2.6, hurt: 2.2, dash: 2.6, orb: 1.6, nova: 0.75, heal: 0.8 };
const ECHO = { priest: 0.5, kill: 0.5, heal: 0.6, shield: 0.45, level: 0.35, nova: 0.2, frost: 0.3 };

// vol: 0..1 (jarak). far: bunyi milik pemain lain, diredam supaya tembakan sendiri tetap paling jelas
export function sfx(name, vol = 1, far = false) {
  if (!ctx || muted || vol <= 0.02 || !SOUNDS[name]) return;
  SOUNDS[name](bus(vol, far, ECHO[name] || 0, GAIN[name] || 1));
}
// merender satu bunyi tanpa pengeras suara (untuk uji): mengembalikan Float32Array
export async function render(name, secs = 1.2, vol = 1, far = false) {
  const off = new OfflineAudioContext(1, Math.floor(44100 * secs), 44100);
  const keep = [ctx, master, noiseBuf, echoIn, sfxBus, musicBus];
  ctx = off; ({ m: master, nb: noiseBuf, ein: echoIn, sb: sfxBus, mb: musicBus } = setup(off));
  try {
    if (TRACKS[name]) { const tr = TRACKS[name], out = trackOut(); out.g.gain.value = tr.level; for (let i = 0; i * tr.len < secs; i++) tr.bar(out, i * tr.len, i); }
    else SOUNDS[name](bus(vol, far, ECHO[name] || 0, GAIN[name] || 1));
  } finally { [ctx, master, noiseBuf, echoIn, sfxBus, musicBus] = keep; }
  return (await off.startRendering()).getChannelData(0);
}

// ---- musik latar, disintesis langsung: 'menu' (tenang) dan 'battle' (berdenyut) ----
const CHORDS = [[146.8, 174.6, 220.0], [116.5, 146.8, 174.6], [130.8, 164.8, 196.0], [110.0, 130.8, 164.8]]; // Dm Bb C Am
const BELL = [293.7, 349.2, 392.0, 440.0, 523.3, 587.3];
const BEAT = 60 / 104;
// nada berselubung pada waktu mutlak t (untuk musik)
function note(out, type, f, t, a, hold, rel, vol, det = 0) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.value = f; o.detune.value = det;
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + a); g.gain.setValueAtTime(vol, t + a + hold); g.gain.linearRampToValueAtTime(0, t + a + hold + rel);
  o.connect(g); g.connect(out); o.start(t); o.stop(t + a + hold + rel + 0.05);
}
function hat(out, t, vol) {
  const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = noiseBuf; f.type = 'highpass'; f.frequency.value = 6500;
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0008, t + 0.05);
  s.connect(f); f.connect(g); g.connect(out); s.start(t, Math.random() * 0.3); s.stop(t + 0.07);
}
function drum(out, t, vol) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.frequency.setValueAtTime(105, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.16);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0008, t + 0.24);
  o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.26);
}
const TRACKS = {
  menu: { // pad senja yang pelan dengan lonceng acak
    len: 6, level: 0.6,
    bar(out, t, i) {
      const ch = CHORDS[i % CHORDS.length];
      for (const f of ch) for (const det of [-4, 4]) note(out.soft, 'sawtooth', f, t, 2, 0, 5.5, 0.05, det);
      note(out.soft, 'sine', ch[0] / 2, t, 1.5, 1, 3.5, 0.09);
      for (let k = 0; k < 3; k++) {
        const bt = t + 1 + Math.random() * 4.5, f = BELL[Math.floor(Math.random() * BELL.length)];
        note(out.dry, 'sine', f, bt, 0.02, 0, 2.4, 0.06); note(out.dry, 'sine', f * 2, bt, 0.02, 0, 1.2, 0.015);
      }
    },
  },
  battle: { // satu birama 4 ketuk: bas berdenyut, genderang, arpeggio; dijaga pelan agar efek tetap terdengar
    len: BEAT * 4, level: 0.45, // di bawah bunyi tembakan (diukur dari hasil render)
    bar(out, t, i) {
      const ch = CHORDS[Math.floor(i / 2) % CHORDS.length], lift = i % 8 >= 4; // tiap akor dua birama
      for (const f of ch) note(out.soft, 'sawtooth', f, t, 0.3, BEAT * 2.6, BEAT, 0.028, 5);
      for (let b = 0; b < 8; b++) { // bas tiap setengah ketuk
        const bt = t + b * BEAT / 2;
        note(out.dry, 'triangle', ch[0] / 2, bt, 0.008, 0.05, 0.16, b % 2 ? 0.07 : 0.11);
        if (b % 2) hat(out.dry, bt, lift ? 0.028 : 0.016);
      }
      drum(out.dry, t, 0.2); drum(out.dry, t + BEAT * 2, 0.17);
      if (lift) drum(out.dry, t + BEAT * 3.5, 0.11);
      const arp = [ch[0], ch[1], ch[2], ch[1] * 2, ch[2], ch[1], ch[0] * 2, ch[2]];
      for (let b = 0; b < 8; b++) note(out.soft, 'triangle', arp[(b + (lift ? 3 : 0)) % 8] * 2, t + b * BEAT / 2, 0.006, 0.03, 0.2, lift ? 0.045 : 0.03);
    },
  },
};
// jalur keluar satu lagu: 'soft' lewat saringan lembut, 'dry' langsung
function trackOut() {
  const g = ctx.createGain(); g.connect(musicBus);
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400; lp.connect(g);
  return { g, soft: lp, dry: g };
}
let music = null;
// track: 'menu', 'battle', atau null untuk berhenti. Berganti lagu dengan memudar.
export function setMusic(track) {
  if (!ctx || !TRACKS[track]) track = null;
  if (music && music.track === track) return;
  if (music) {
    const m = music; clearInterval(m.timer);
    const gn = m.out.g.gain, t = ctx.currentTime; gn.cancelScheduledValues(t); gn.setValueAtTime(gn.value, t); gn.linearRampToValueAtTime(0, t + 0.9);
    setTimeout(() => m.out.g.disconnect(), 8000); // setelah nada yang sudah terjadwal habis
    music = null;
  }
  if (!track) return;
  const tr = TRACKS[track], out = trackOut();
  out.g.gain.setValueAtTime(0, ctx.currentTime); out.g.gain.linearRampToValueAtTime(tr.level, ctx.currentTime + 1.5);
  const m = music = { track, out, next: ctx.currentTime + 0.1, i: 0, timer: 0 };
  // jadwalkan sedikit ke depan; bila suara sedang dihentikan, waktu tidak maju dan tidak ada nada menumpuk
  const pump = () => { while (m.next < ctx.currentTime + 0.6) { if (m.next < ctx.currentTime) m.next = ctx.currentTime + 0.05; tr.bar(out, m.next, m.i++); m.next += tr.len; } };
  pump(); m.timer = setInterval(pump, 200);
}
export function step(vol = 1) {
  if (!ctx || muted) return;
  const t = ctx.currentTime, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = noiseBuf; f.type = 'bandpass'; f.frequency.value = 700 + Math.random() * 500; f.Q.value = 1.4;
  g.gain.setValueAtTime(0.07 * vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
  s.connect(f); f.connect(g); g.connect(sfxBus); s.start(t, Math.random() * 0.3); s.stop(t + 0.08);
}
