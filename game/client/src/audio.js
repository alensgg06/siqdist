// Suara sintetis WebAudio — tanpa file eksternal.
let ctx = null, master = null, noiseBuf = null;
export let muted = false;

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  master = ctx.createGain(); master.gain.value = 0.5; master.connect(ctx.destination);
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
}
export function setMuted(m) { muted = m; if (master) master.gain.value = m ? 0 : 0.5; }

function tone(type, f0, f1, dur, vol, delay = 0) {
  const t = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.02);
}
function noise(dur, vol, freq, q = 1) {
  const t = ctx.currentTime, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = noiseBuf; f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q;
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  s.connect(f); f.connect(g); g.connect(master); s.start(t); s.stop(t + dur);
}

export function sfx(name, vol = 1) {
  if (!ctx || muted || vol <= 0.02) return;
  switch (name) {
    case 'ranger': tone('triangle', 1500, 420, 0.09, 0.16 * vol); noise(0.05, 0.08 * vol, 3200); break;
    case 'mage': tone('sawtooth', 240, 70, 0.3, 0.18 * vol); noise(0.25, 0.14 * vol, 500); break;
    case 'guardian': noise(0.16, 0.3 * vol, 900, 0.6); tone('square', 170, 55, 0.14, 0.13 * vol); break;
    case 'boom': noise(0.45, 0.35 * vol, 180, 0.5); tone('sine', 120, 35, 0.4, 0.3 * vol); break;
    case 'hit': tone('square', 880, 660, 0.05, 0.1 * vol); break;
    case 'hurt': tone('sawtooth', 200, 90, 0.16, 0.2 * vol); break;
    case 'kill': tone('triangle', 660, 660, 0.1, 0.2); tone('triangle', 990, 990, 0.2, 0.2, 0.09); break;
    case 'death': tone('sawtooth', 300, 50, 0.7, 0.25); break;
    case 'level': [523, 659, 784, 1047].forEach((f, i) => tone('triangle', f, f, 0.2, 0.18, i * 0.08)); break;
    case 'dash': noise(0.2, 0.2 * vol, 1800, 0.4); break;
    case 'nova': noise(0.5, 0.3 * vol, 400, 0.4); tone('sine', 90, 400, 0.35, 0.22 * vol); break;
    case 'heal': tone('sine', 520, 1040, 0.35, 0.2 * vol); break;
    case 'priest': tone('triangle', 900, 500, 0.12, 0.14 * vol); break;
    case 'shield': tone('sine', 330, 660, 0.3, 0.2 * vol); break;
    case 'orb': tone('sine', 700, 1400, 0.2, 0.18 * vol); break;
  }
}

// ---- musik latar: pad senja yang pelan, disintesis langsung ----
let music = null;
const CHORDS = [[146.8, 174.6, 220.0], [116.5, 146.8, 174.6], [130.8, 164.8, 196.0], [110.0, 130.8, 164.8]]; // Dm Bb C Am
const BELL = [293.7, 349.2, 392.0, 440.0, 523.3, 587.3];
export function setMusic(on) {
  if (!ctx) return;
  if (on && !music) {
    const out = ctx.createGain(); out.connect(master);
    out.gain.setValueAtTime(0, ctx.currentTime); out.gain.linearRampToValueAtTime(0.09, ctx.currentTime + 3);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.connect(out);
    let i = 0;
    const play = () => {
      const t = ctx.currentTime, ch = CHORDS[i++ % CHORDS.length];
      for (const f of ch) for (const det of [-4, 4]) {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = det;
        g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.05, t + 2); g.gain.linearRampToValueAtTime(0, t + 7.5);
        o.connect(g); g.connect(lp); o.start(t); o.stop(t + 7.6);
      }
      for (let k = 0; k < 3; k++) { // lonceng lembut acak
        const bt = t + 1 + Math.random() * 5, o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = BELL[Math.floor(Math.random() * BELL.length)];
        g.gain.setValueAtTime(0, bt); g.gain.linearRampToValueAtTime(0.06, bt + 0.02); g.gain.exponentialRampToValueAtTime(0.001, bt + 2.5);
        o.connect(g); g.connect(out); o.start(bt); o.stop(bt + 2.6);
      }
    };
    play();
    music = { out, timer: setInterval(play, 6000) };
  } else if (!on && music) {
    clearInterval(music.timer);
    const gn = music.out.gain; gn.cancelScheduledValues(ctx.currentTime); gn.setValueAtTime(gn.value, ctx.currentTime); gn.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
    const m = music; setTimeout(() => m.out.disconnect(), 900);
    music = null;
  }
}
export function step(vol = 1) {
  if (!ctx || muted) return;
  const t = ctx.currentTime, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = noiseBuf; f.type = 'bandpass'; f.frequency.value = 700 + Math.random() * 500; f.Q.value = 1.4;
  g.gain.setValueAtTime(0.07 * vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
  s.connect(f); f.connect(g); g.connect(master); s.start(t, Math.random() * 0.3); s.stop(t + 0.08);
}
