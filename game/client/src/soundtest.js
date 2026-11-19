// Halaman uji suara: memutar tiap bunyi game tanpa harus bermain.
import { initAudio, sfx, render, setMusic, setVolume, SOUNDS } from './audio.js';

const GROUPS = [
  ['Tembakan', [['ranger', 'Pemanah Arkana'], ['mage', 'Penyihir Bara'], ['guardian', 'Penjaga Rune'], ['priest', 'Haji Toriq'], ['caster', 'Dukun Bayang (monster)'], ['frost', 'Penyihir Es (monster)']]],
  ['Kena sasaran', [['hit', 'Tembakanmu kena'], ['hurt', 'Kamu terkena'], ['boom', 'Ledakan'], ['kill', 'Lawan tumbang'], ['death', 'Kamu tumbang']]],
  ['Jurus', [['dash', 'Kilat'], ['nova', 'Nova'], ['shield', 'Perisai'], ['heal', 'Doa']]],
  ['Lain-lain', [['orb', 'Ambil bola'], ['level', 'Naik level']]],
];
const RATE = { ranger: 180, mage: 700, guardian: 600, priest: 350 };
const root = document.getElementById('list');
for (const [title, items] of GROUPS) {
  const h = document.createElement('h2'); h.textContent = title; root.append(h);
  for (const [id, label] of items) {
    const row = document.createElement('div'); row.className = 'row';
    const b = (text, fn) => { const x = document.createElement('button'); x.textContent = text; x.addEventListener('click', () => { initAudio(); fn(); }); row.append(x); return x; };
    b(label, () => sfx(id)).className = 'main';
    if (title === 'Tembakan') {
      b('Beruntun', () => { for (let i = 0; i < 6; i++) setTimeout(() => sfx(id), i * (RATE[id] || 500)); });
      b('Dari jauh', () => sfx(id, 0.35, true));
    }
    root.append(row);
  }
}
{
  const h = document.createElement('h2'); h.textContent = 'Musik latar'; root.append(h);
  const row = document.createElement('div'); row.className = 'row';
  for (const [id, label] of [['menu', 'Halaman pembuka'], ['battle', 'Saat bermain'], [null, 'Berhenti']]) { const x = document.createElement('button'); x.textContent = label; x.className = 'main'; x.addEventListener('click', () => { initAudio(); setMusic(id); }); row.append(x); }
  root.append(row);
}
window.arkanaSound = { render, setVolume, names: Object.keys(SOUNDS) };
