// Halaman pengelola. Semua teks dari server dipasang lewat textContent, tidak pernah sebagai HTML.
const $ = (id) => document.getElementById(id);
const KEY = 'arkana.token';
let token = '', me = null, state = null;
try { token = localStorage.getItem(KEY) || ''; } catch { /* mode privat */ }
const el = (tag, props = {}, ...kids) => { const e = document.createElement(tag); Object.assign(e, props); for (const k of kids) e.append(k); return e; };
const fmtT = (ms) => new Date(ms).toLocaleString('id-ID', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
const dur = (s) => (s >= 86400 ? `${Math.floor(s / 86400)} hari ${Math.floor((s % 86400) / 3600)} jam` : s >= 3600 ? `${Math.floor(s / 3600)} jam ${Math.floor((s % 3600) / 60)} mnt` : `${Math.floor(s / 60)} mnt`);
const MODE = { dm: 'Deathmatch', koth: 'Rebut Altar', tdm: 'Tim', coop: 'Lawan Bot', pve: 'Bertahan Bersama', king: 'Perburuan Raja' };
const say = (text, kind = '') => { $('msg').textContent = text; $('msg').className = kind; };
async function call(url, body) {
  const r = await fetch(url, { method: body ? 'POST' : 'GET', headers: { 'content-type': 'application/json', authorization: 'Bearer ' + token }, body: body ? JSON.stringify(body) : undefined });
  return { code: r.status, ...(await r.json()) };
}
function table(host, heads, rows, empty) {
  host.replaceChildren();
  if (!rows.length) return host.append(el('p', { className: 'empty', textContent: empty }));
  const t = el('table');
  t.append(el('tr', {}, ...heads.map((h) => el('th', { textContent: h.replace(/^#/, ''), className: h.startsWith('#') ? 'num' : '' }))));
  for (const r of rows) t.append(el('tr', {}, ...r.map((c, i) => { const td = el('td', { className: heads[i].startsWith('#') ? 'num' : '' }); td.append(c instanceof Node ? c : String(c)); return td; })));
  host.append(t);
}
const tag = (text, cls = '') => el('span', { className: 'tag ' + cls, textContent: text });
const btn = (text, fn, cls = '') => { const b = el('button', { type: 'button', textContent: text, className: cls }); b.addEventListener('click', fn); return b; };
async function act(body, okText) {
  say('Memproses…');
  try {
    const d = await call('/api/admin/do', body);
    if (d.ok) { state = d.state; render(); say(okText, 'ok'); } else say(d.error || 'Gagal.', 'bad');
  } catch { say('Server tidak terjangkau.', 'bad'); }
}

function render() {
  const s = state, online = s.rooms.reduce((n, r) => n + r.humans.length, 0), cur = s.events.find((e) => e.state === 'berjalan');
  $('tiles').replaceChildren(...[[online, 'pemain di arena'], [s.rooms.length, 'room berisi pemain'], [s.accounts.length, 'akun terdaftar'], [cur ? cur.name : 'tidak ada', 'event berjalan'], [dur(s.uptime), 'server menyala'], [s.invite ? 'dengan kode' : 'terbuka', 'pendaftaran'], [s.mail ? 'aktif' : 'mati', 'pengirim email']]
    .map(([v, l]) => el('div', { className: 'tile' }, el('b', { textContent: String(v) }), el('span', { textContent: l }))));
  table($('rooms'), ['Room', 'Mode', 'Peta', 'Pemain', '#Bot'], s.rooms.map((r) => [r.code ? `${r.kind} ${r.code}` : r.kind, (MODE[r.mode] || r.mode) + (r.wave ? ` · gelombang ${r.wave}` : ''), r.map, r.humans.join(', '), r.bots]), 'Tidak ada yang sedang bermain.');
  table($('events'), ['Event', 'Status', 'Waktu', 'Target', 'Terdepan', ''], s.events.map((e) => [
    e.name, tag(e.state, e.state === 'berjalan' ? 'on' : e.state === 'akan datang' ? 'gold' : ''), `${fmtT(e.start)} – ${fmtT(e.end)}`, e.target,
    e.top.map((t) => `${t.name} (${t.score})`).join(', ') || '–',
    e.state === 'selesai' ? '' : el('div', { className: 'acts' }, btn(e.state === 'berjalan' ? 'Hentikan' : 'Batalkan', () => { if (confirm(`${e.state === 'berjalan' ? 'Hentikan' : 'Batalkan'} event "${e.name}"?`)) act({ do: 'eventEnd', id: e.id }, 'Event diubah.'); }, 'danger')),
  ]), 'Belum ada event.');
  table($('accounts'), ['Nama', 'Email', 'Dibuat', '#Ronde', '#K/D', '#Menang', '#Gelombang', 'Status', ''], s.accounts.slice().sort((a, b) => b.created - a.created).map((a) => {
    const st = el('span'); if (a.admin) st.append(tag('pengelola', 'gold'), ' '); st.append(a.banned ? tag('diblokir', 'bad') : tag(a.sessions ? `${a.sessions} perangkat` : 'keluar', a.sessions ? 'on' : ''));
    const acts = el('div', { className: 'acts' },
      btn('Sandi', () => { const p = prompt(`Kata sandi baru untuk ${a.name} (minimal 8 karakter). Semua perangkatnya akan keluar.`); if (p) act({ do: 'pass', name: a.name, pass: p }, `Kata sandi ${a.name} diganti.`); }),
      btn('Email', () => { const m = prompt(`Email pemulihan untuk ${a.name}:`, a.email); if (m) act({ do: 'email', name: a.name, email: m.trim() }, `Email ${a.name} diatur.`); }),
      btn('Keluarkan', () => act({ do: 'kick', name: a.name }, `${a.name} dikeluarkan dari arena.`)),
      ...(a.admin ? [] : [a.banned ? btn('Buka blokir', () => act({ do: 'unban', name: a.name }, `Blokir ${a.name} dibuka.`)) : btn('Blokir', () => { if (confirm(`Blokir ${a.name}? Ia langsung dikeluarkan dan tidak bisa masuk lagi.`)) act({ do: 'ban', name: a.name }, `${a.name} diblokir.`); }, 'danger'),
      btn('Hapus', () => { if (confirm(`Hapus akun ${a.name}? Tindakan ini tidak bisa dibatalkan. Statistiknya tetap tersimpan tetapi tidak lagi terhubung ke akun.`)) act({ do: 'delete', name: a.name }, `Akun ${a.name} dihapus.`); }, 'danger')]));
    return [a.name, a.email || '–', fmtT(a.created), a.matches, `${a.kills}/${a.deaths}`, a.wins, a.wave || '–', st, acts];
  }), 'Belum ada akun.');
  table($('recent'), ['Waktu', 'Mode', 'Peta', 'Room', '#Lama', 'Pemain'], s.recent.map((m) => [fmtT(Date.parse(m.at)), (MODE[m.mode] || m.mode) + (m.mode === 'pve' ? ` · selesai gelombang ${m.wave ?? 0}` : '') + (m.abandoned ? ' · ditinggalkan' : ''), m.map, m.room, `${Math.round((m.secs || 0) / 60)} mnt`, m.humans.join(', ') || '–']), 'Belum ada ronde yang tercatat.');
  $('mailInfo').textContent = s.mail ? 'Pengirim email aktif. Email percobaan dikirim ke alamat email akun pengelola yang sedang masuk.' : 'Pengirim email belum diatur (SMTP_* di .env). Fitur lupa kata sandi mati.';
  $('mailTest').disabled = !s.mail;
  if (!$('evType').options.length) for (const t of s.eventTypes) $('evType').append(el('option', { value: t.id, textContent: `${t.name} (target bawaan ${t.target})` }));
}
$('evWhen').addEventListener('change', () => { const plan = $('evWhen').value === 'plan'; $('evMinRow').classList.toggle('hidden', plan); $('evStartRow').classList.toggle('hidden', !plan); $('evEndRow').classList.toggle('hidden', !plan); });
$('evForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const base = { tipe: $('evType').value, nama: $('evName').value.trim() || undefined, target: $('evTarget').value || undefined };
  if ($('evWhen').value === 'now') return act({ do: 'eventStart', minutes: Number($('evMin').value), ...base }, 'Event dimulai.');
  const st = Date.parse($('evStart').value), en = Date.parse($('evEnd').value);
  if (!st || !en) return say('Isi waktu mulai dan selesai.', 'bad');
  act({ do: 'eventPlan', start: st, end: en, ...base }, 'Event dijadwalkan.');
});
$('mailTest').addEventListener('click', () => act({ do: 'mailTest' }, 'Email percobaan diterima server SMTP. Periksa kotak masuk dan folder spam.'));

async function refresh(quiet) {
  try {
    const d = await call('/api/admin/state');
    if (d.code === 200) { state = d; render(); if (!quiet) say('Data dimuat.'); return true; }
  } catch { if (!quiet) say('Server tidak terjangkau.', 'bad'); }
  return false;
}
async function boot() {
  let d = null;
  try { d = await call('/api/me'); } catch { /* ditangani di bawah */ }
  me = d?.user || null;
  const ok = me?.admin && await refresh();
  $('app').classList.toggle('hidden', !ok); $('login').classList.toggle('hidden', !!ok);
  $('who').replaceChildren();
  if (me) $('who').append(`Masuk sebagai ${me.name} · `, btn('Keluar', async () => { await call('/api/logout', {}).catch(() => {}); token = ''; try { localStorage.removeItem(KEY); } catch { /* abaikan */ } boot(); }));
  if (!ok) $('lMsg').textContent = !d ? 'Server tidak terjangkau.' : me ? 'Akun ini bukan pengelola.' : '';
}
$('login').addEventListener('submit', async (e) => {
  e.preventDefault(); $('lMsg').textContent = 'Memeriksa…';
  try {
    const d = await call('/api/login', { name: $('lName').value.trim(), pass: $('lPass').value });
    if (!d.token) { $('lMsg').textContent = d.error || 'Gagal masuk.'; return; }
    token = d.token; try { localStorage.setItem(KEY, token); } catch { /* abaikan */ } $('lPass').value = ''; boot();
  } catch { $('lMsg').textContent = 'Server tidak terjangkau.'; }
});
boot();
setInterval(() => { if (state && !document.hidden) refresh(true); }, 5000);
