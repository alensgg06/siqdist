// All sound is synthesised with WebAudio: no audio files.
let ctx = null, master = null, noiseBuf = null, musicGain = null;
let muted = false, nextStep = 0, step = 0, intensity = 0;

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume().catch(() => {}); return; }
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0.55;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 5;
    master.connect(comp); comp.connect(ctx.destination);
    musicGain = ctx.createGain(); musicGain.gain.value = 0.5; musicGain.connect(master);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    // ambient pad: two detuned saws through a slowly moving low-pass
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 260; lp.Q.value = 4;
    const g = ctx.createGain(); g.gain.value = 0.11; lp.connect(g); g.connect(musicGain);
    for (const f of [55, 55.4, 82.4]) {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.connect(lp); o.start();
    }
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07;
    const lg = ctx.createGain(); lg.gain.value = 140; lfo.connect(lg); lg.connect(lp.frequency); lfo.start();
    nextStep = ctx.currentTime + 0.1;
  } catch (e) { ctx = null; }
}

export function toggleMute() {
  muted = !muted;
  if (master) master.gain.value = muted ? 0 : 0.55;
  return muted;
}
export function setIntensity(v) { intensity = v; }

function env(g, t, a, d, peak) {
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + a);
  g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
}
function tone(type, f0, f1, dur, vol, dest, t = ctx.currentTime) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  env(g, t, 0.004, dur, vol);
  o.connect(g); g.connect(dest || master); o.start(t); o.stop(t + dur + 0.05);
}
function noise(dur, vol, f0, f1, type = 'lowpass', dest, t = ctx.currentTime) {
  const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
  const f = ctx.createBiquadFilter(); f.type = type;
  f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + dur);
  const g = ctx.createGain(); env(g, t, 0.003, dur, vol);
  s.connect(f); f.connect(g); g.connect(dest || master);
  s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
}

export const sfx = {
  shoot(power) {
    if (!ctx) return;
    const p = 0.94 + Math.random() * 0.12;
    tone('sawtooth', (power ? 1250 : 960) * p, 130, 0.11, 0.16);
    tone('square', 420 * p, 70, 0.07, 0.09);
    noise(0.05, 0.12, 6000, 1500, 'highpass');
  },
  hit() { if (ctx) { noise(0.04, 0.12, 3500, 900, 'bandpass'); tone('triangle', 520, 190, 0.05, 0.08); } },
  enemyShot() { if (ctx) tone('sawtooth', 300, 720, 0.16, 0.08); },
  explode(size = 1) {
    if (!ctx) return;
    noise(0.35 + 0.25 * size, 0.42 * Math.min(1.4, size), 2200, 70);
    tone('sine', 150, 32, 0.4 + 0.2 * size, 0.5);
  },
  hurt() { if (ctx) { tone('sawtooth', 210, 48, 0.3, 0.3); noise(0.2, 0.25, 900, 120); } },
  dash() { if (ctx) noise(0.24, 0.22, 500, 5200, 'bandpass'); },
  pickup() { if (ctx) [660, 880, 1320].forEach((f, i) => tone('triangle', f, f, 0.14, 0.14, null, ctx.currentTime + i * 0.06)); },
  wave() { if (ctx) { tone('sawtooth', 110, 440, 0.7, 0.14); tone('sine', 220, 880, 0.7, 0.12); } },
  charge() { if (ctx) tone('sawtooth', 70, 320, 0.65, 0.2); },
  death() { if (ctx) { tone('sawtooth', 330, 28, 1.6, 0.4); noise(1.4, 0.4, 3000, 50); } },
};

// tiny step sequencer: pulse bass + kick + hat, driven by the audio clock
const BASS = [0, 0, 12, 0, 3, 0, 12, 0, 0, 0, 12, 0, 5, 3, 12, 7];
export function tickMusic() {
  if (!ctx || intensity <= 0) return;
  const spb = 60 / 112 / 4;
  if (nextStep < ctx.currentTime - 0.2) nextStep = ctx.currentTime;
  while (nextStep < ctx.currentTime + 0.12) {
    const t = nextStep, s = step % 16;
    const f = 55 * Math.pow(2, BASS[s] / 12);
    const o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
    o.type = 'sawtooth'; o.frequency.value = f; lp.type = 'lowpass'; lp.Q.value = 7;
    lp.frequency.setValueAtTime(240 + 1300 * intensity, t); lp.frequency.exponentialRampToValueAtTime(140, t + spb * 0.9);
    env(g, t, 0.005, spb * 0.9, 0.2);
    o.connect(lp); lp.connect(g); g.connect(musicGain); o.start(t); o.stop(t + spb);
    if (s % 4 === 0) tone('sine', 140, 38, 0.2, 0.55, musicGain, t);
    if (s % 4 === 2 && intensity > 0.4) noise(0.03, 0.06, 9000, 7000, 'highpass', musicGain, t);
    if (s === 12 && intensity > 0.7) noise(0.1, 0.12, 2500, 900, 'bandpass', musicGain, t);
    nextStep += spb; step++;
  }
}
