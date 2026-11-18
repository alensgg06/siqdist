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
    case 'shield': tone('sine', 330, 660, 0.3, 0.2 * vol); break;
    case 'orb': tone('sine', 700, 1400, 0.2, 0.18 * vol); break;
  }
}
