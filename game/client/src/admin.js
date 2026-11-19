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
  // data-label: di layar sempit tiap baris menjadi kartu dan label kolom tampil di samping nilainya
  for (const r of rows) t.append(el('tr', {}, ...r.map((c, i) => { const td = el('td', { className: heads[i].startsWith('#') ? 'num' : '' }); td.dataset.label = heads[i].replace(/^#/, ''); if (c === '' || c === null) td.classList.add('none'); td.append(c instanceof Node ? c : String(c)); return td; })));
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

const gb = (b) => (b >= 2 ** 30 ? `${(b / 2 ** 30).toFixed(1)} GB` : b >= 2 ** 20 ? `${(b / 2 ** 20).toFixed(0)} MB` : `${Math.max(0, b / 1024).toFixed(0)} KB`);
const NS = 'http://www.w3.org/2000/svg';
// meteran: nilai sekarang terhadap kapasitas; kuning di atas 70%, merah di atas 90%
function meter(label, value, frac, cap, note) {
  const f = Math.max(0, Math.min(1, frac || 0)), bar = el('i'); bar.style.width = (f * 100).toFixed(1) + '%';
  return el('div', { className: 'meter' + (f > 0.9 ? ' crit' : f > 0.7 ? ' warn' : '') },
    el('div', { className: 'top' }, el('span', { textContent: label }), el('span', { textContent: cap })),
    el('div', { className: 'val', textContent: value }), el('div', { className: 'bar' }, bar), el('small', { textContent: note }));
}
// grafik garis kecil dari riwayat; max: batas atas sumbu (bila tak diisi, mengikuti data)
function chart(label, hist, idx, unit, color, max, limit) {
  const vals = hist.map((h) => h[idx]), top = Math.max(max || 0, ...vals, 1e-9), w = 240, h = 56;
  const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', `0 0 ${w} ${h}`); svg.setAttribute('preserveAspectRatio', 'none'); svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', `${label}, 10 menit terakhir`);
  const y = (v) => h - 2 - (v / top) * (h - 6);
  if (limit && limit <= top) { const l = document.createElementNS(NS, 'line'); l.setAttribute('x1', 0); l.setAttribute('x2', w); l.setAttribute('y1', y(limit)); l.setAttribute('y2', y(limit)); l.setAttribute('stroke', '#ff8f7a'); l.setAttribute('stroke-dasharray', '4 4'); l.setAttribute('stroke-width', '1'); svg.append(l); }
  if (vals.length > 1) {
    const pts = vals.map((v, i) => `${(i / (vals.length - 1) * w).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
    const area = document.createElementNS(NS, 'polygon'); area.setAttribute('points', `0,${h} ${pts} ${w},${h}`); area.setAttribute('fill', color); area.setAttribute('opacity', '0.16'); svg.append(area);
    const line = document.createElementNS(NS, 'polyline'); line.setAttribute('points', pts); line.setAttribute('fill', 'none'); line.setAttribute('stroke', color); line.setAttribute('stroke-width', '1.6'); line.setAttribute('vector-effect', 'non-scaling-stroke'); svg.append(line);
  }
  const cur = vals.length ? vals[vals.length - 1] : 0, peak = vals.length ? Math.max(...vals) : 0, f = (v) => (unit === 'net' ? gb(v) + '/dtk' : `${+v.toFixed(v < 10 ? 1 : 0)}${unit}`);
  return el('div', { className: 'chart' }, el('div', { className: 'top' }, el('span', { textContent: label }), el('span', { textContent: `kini ${f(cur)} · puncak ${f(peak)}` })), svg);
}
function renderLoad() {
  const y = state.sys, i = state.info, l = y.last;
  const memCap = y.memLimit || y.memTotal, memNow = y.memLimit ? (y.memUsed ?? y.rss) : y.rss;
  const cpuCap = y.cpuLimit || y.cores;
  $('meters').replaceChildren(
    meter('CPU server game', l ? `${l.cpu}%` : '…', l ? l.cpu / 100 : 0, 'dari 1 inti', 'Server game memakai satu inti; 100% berarti inti itu penuh.'),
    meter('CPU seluruh mesin', l ? `${l.sys}%` : '…', l ? l.sys / 100 : 0, `${y.cores} inti${y.cpuLimit ? `, dibatasi ${cpuCap}` : ''}`, `Termasuk container lain. Beban rata-rata 1/5/15 mnt: ${y.load.join(' / ')}`),
    meter('Waktu hitung per tick', l ? `${l.tick} ms` : '…', l ? l.tick / y.budget : 0, `anggaran ${y.budget} ms`, l ? `Terlama ${l.tickMax} ms; ${l.late} tick melewati anggaran dalam ${y.every} dtk terakhir.` : ''),
    meter('Memori server game', gb(memNow), memNow / memCap, y.memLimit ? `batas container ${gb(y.memLimit)}` : `mesin ${gb(y.memTotal)}`, `Proses ${gb(y.rss)}, data hidup ${gb(y.heap)}.`),
    meter('Memori mesin', gb(y.memTotal - y.memFree), (y.memTotal - y.memFree) / y.memTotal, `terpasang ${gb(y.memTotal)}`, `Bebas ${gb(y.memFree)}. Termasuk semua container.`),
    y.disk ? meter('Disk folder data', gb(y.disk.total - y.disk.free), (y.disk.total - y.disk.free) / y.disk.total, `kapasitas ${gb(y.disk.total)}`, `Bebas ${gb(y.disk.free)}.`) : el('div'),
  );
  $('charts').replaceChildren(
    chart('Waktu hitung per tick', y.hist, 3, ' ms', '#7be0a0', y.budget, y.budget),
    chart('CPU server game', y.hist, 1, '%', '#f2c66d', 100, 100),
    chart('Pemain di arena', y.hist, 5, '', '#8fb8ff', 4),
    chart('Data keluar ke pemain', y.hist, 7, 'net', '#d79bff', 1024),
  );
  const head = l ? y.budget / Math.max(l.tick, 0.01) : 0;
  $('loadNote').textContent = !l ? 'Mengumpulkan contoh pertama…' : l.tick > y.budget ? 'Server kewalahan: waktu hitung melewati anggaran, pemain akan merasakan lag.' : `Ruang gerak saat ini sekitar ${head >= 100 ? 'lebih dari 100' : head.toFixed(0)} kali beban sekarang, diukur dari waktu hitung. Garis putus-putus merah adalah batasnya.`;
  const rows = [
    ['Versi game', i.version], ['Klien dibangun', i.built ? fmtT(i.built) : '–'], ['Node.js', y.node], ['Sistem', y.platform], ['Prosesor', y.cpuModel || '–'],
    ['Server menyala', dur(state.uptime)], ['Kecepatan simulasi', `${i.tickHz} tick/dtk`], ['Koneksi pemain', i.connections], ['Puncak pemain sejak menyala', y.peak],
    ['Room (termasuk kosong)', i.roomsAll], ['Kapasitas per room', `${i.roomCap} pemain`], ['Bot di arena', i.bots], ['Monster hidup', i.monsters], ['Proyektil di udara', i.projs],
    ['Wajib akun', state.auth ? 'ya' : 'tidak'], ['Pendaftaran', state.invite ? 'dengan kode undangan' : 'terbuka'], ['Pengirim email', state.mail ? 'aktif' : 'mati'],
    ['Pengelola', i.admins.join(', ') || '–'], ['Tekstur dari GPU', i.hd ? `${i.hd.n} tekstur, ${fmtT(i.hd.at)}` : 'belum dipasang'],
  ];
  $('info').replaceChildren(...rows.map(([k, v]) => el('div', {}, el('span', { textContent: k }), el('b', { textContent: String(v) }))));
  table($('files'), ['Berkas', '#Ukuran'], y.files.map((f) => [f.name, gb(f.size)]), 'Folder data masih kosong.');
}

function render() {
  renderLoad();
  const s = state, online = s.rooms.reduce((n, r) => n + r.humans.length, 0), cur = s.events.find((e) => e.state === 'berjalan'), l = s.sys.last;
  const tiles = (id, list) => $(id).replaceChildren(...list.map(([v, t]) => el('div', { className: 'tile' }, el('b', { textContent: String(v) }), el('span', { textContent: t }))));
  const inNow = s.accounts.filter((a) => a.sessions > 0).length, banned = s.accounts.filter((a) => a.banned).length;
  tiles('tilesArena', [[online, 'pemain di arena'], [s.rooms.length, 'room berisi pemain'], [s.sys.peak, 'puncak pemain sejak menyala'], [s.info.bots, 'bot di arena'], [s.recent.length, 'ronde terakhir tercatat']]);
  tiles('tilesAkun', [[s.accounts.length, 'akun terdaftar'], [inNow, 'sedang masuk'], [banned, 'diblokir'], [s.invite ? 'dengan kode' : 'terbuka', 'pendaftaran'], [s.auth ? 'ya' : 'tidak', 'wajib akun']]);
  tiles('tilesEvent', [[cur ? cur.name : 'tidak ada', 'event berjalan'], [s.events.filter((e) => e.state === 'akan datang').length, 'dijadwalkan'], [s.weekly.length, 'jadwal mingguan'], [s.events.filter((e) => e.state === 'selesai').length, 'selesai']]);
  tiles('tilesServer', [[dur(s.uptime), 'server menyala'], [l ? `${l.cpu}%` : '…', 'CPU server game'], [l ? `${l.tick} ms` : '…', `waktu hitung (anggaran ${s.sys.budget} ms)`], [gb(s.sys.memLimit ? (s.sys.memUsed ?? s.sys.rss) : s.sys.rss), 'memori server game'], [s.info.version, 'versi game']]);
  tiles('tilesEmail', [[s.mail ? 'aktif' : 'mati', 'pengirim email'], [s.accounts.filter((a) => a.email).length, 'akun punya email'], [s.accounts.filter((a) => !a.email).length, 'akun tanpa email']]);
  // lencana di menu: angka yang paling sering dicari
  const badge = { arena: [online, online > 0], akun: [s.accounts.length, false], event: [cur ? 'jalan' : '', !!cur], server: [l && l.tick > s.sys.budget ? 'berat' : '', false], email: [s.mail ? '' : 'mati', false] };
  for (const b of document.querySelectorAll('#nav button')) { const [t, on] = badge[b.dataset.go]; let sm = b.querySelector('small'); if (t === '' ) { sm?.remove(); continue; } if (!sm) { sm = el('small'); b.append(sm); } sm.textContent = String(t); sm.className = on ? 'on' : ''; }
  table($('rooms'), ['Room', 'Mode', 'Peta', 'Pemain', '#Bot'], s.rooms.map((r) => [r.code ? `${r.kind} ${r.code}` : r.kind, (MODE[r.mode] || r.mode) + (r.wave ? ` · gelombang ${r.wave}` : ''), r.map, r.humans.join(', '), r.bots]), 'Tidak ada yang sedang bermain.');
  table($('events'), ['Event', 'Status', 'Waktu', 'Target', 'Terdepan', ''], s.events.map((e) => [
    e.weekly ? el('span', {}, e.name, ' ', tag('mingguan', 'gold')) : e.name, tag(e.state, e.state === 'berjalan' ? 'on' : e.state === 'akan datang' ? 'gold' : ''), `${fmtT(e.start)} – ${fmtT(e.end)}`, e.target,
    e.top.map((t) => `${t.name} (${t.score})`).join(', ') || '–',
    e.state === 'selesai' ? '' : el('div', { className: 'acts' }, btn(e.state === 'berjalan' ? 'Hentikan' : 'Batalkan', () => { if (confirm(`${e.state === 'berjalan' ? 'Hentikan' : 'Batalkan'} event "${e.name}"?`)) act({ do: 'eventEnd', id: e.id }, 'Event diubah.'); }, 'danger')),
  ]), 'Belum ada event.');
  const DAY = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'], tname = (t) => (t === 'bergantian' ? 'Bergantian' : s.eventTypes.find((x) => x.id === t)?.name || t);
  table($('weekly'), ['Jadwal', 'Tipe', '#Lama', ''], s.weekly.map((w) => [`Tiap ${DAY[w.hari]} ${w.jam} WIB`, tname(w.tipe), `${w.lama} mnt`,
    el('div', { className: 'acts' }, btn('Hapus jadwal', () => { if (confirm(`Hapus jadwal tiap ${DAY[w.hari]} ${w.jam}? Event minggu-minggu berikutnya tidak akan dibuat lagi.`)) act({ do: 'weeklyDel', id: w.id }, 'Jadwal mingguan dihapus.'); }, 'danger'))]), 'Belum ada jadwal mingguan.');
  if ($('wkType').options.length === 1) for (const t of s.eventTypes) $('wkType').append(el('option', { value: t.id, textContent: `${t.name} tiap minggu` }));
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
$('wkForm').addEventListener('submit', (e) => { e.preventDefault(); act({ do: 'weeklyAdd', tipe: $('wkType').value, hari: Number($('wkDay').value), jam: $('wkTime').value, lama: Number($('wkLen').value) }, 'Jadwal mingguan ditambahkan.'); });
$('mailTest').addEventListener('click', () => act({ do: 'mailTest' }, 'Email percobaan diterima server SMTP. Periksa kotak masuk dan folder spam.'));

// ---- menu kiri: satu kelompok tampil pada satu waktu; pilihan disimpan di alamat (#akun) ----
const VIEWS = ['arena', 'akun', 'event', 'server', 'email'];
function go(view) {
  if (!VIEWS.includes(view)) view = 'arena';
  for (const sec of document.querySelectorAll('[data-view]')) sec.classList.toggle('hidden', sec.dataset.view !== view);
  for (const b of document.querySelectorAll('#nav button')) { if (b.dataset.go === view) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); }
  if (location.hash.slice(1) !== view) history.replaceState(null, '', '#' + view);
  say('');
}
for (const b of document.querySelectorAll('#nav button')) b.addEventListener('click', () => go(b.dataset.go));
addEventListener('hashchange', () => go(location.hash.slice(1)));
go(location.hash.slice(1));

// Mengembalikan '' bila berhasil, atau alasan gagal. Galat saat menggambar tidak boleh menyamar sebagai "bukan pengelola".
async function refresh(quiet) {
  let d;
  try { d = await call('/api/admin/state'); } catch { if (!quiet) say('Server tidak terjangkau.', 'bad'); return 'Server tidak terjangkau.'; }
  if (d.code === 403) return 'Akun ini bukan pengelola.';
  if (d.code !== 200) return `Server menjawab ${d.code}${d.error ? `: ${d.error}` : ''}.`;
  state = d;
  try { render(); if (!quiet) say(''); }
  catch (err) { console.error(err); say(`Sebagian halaman gagal ditampilkan (${err.message}). Muat ulang dengan Ctrl+F5; bila tetap muncul, laporkan pesan ini.`, 'bad'); }
  return '';
}
async function boot() {
  let d = null;
  try { d = await call('/api/me'); } catch { /* ditangani di bawah */ }
  me = d?.user || null;
  // pertanyaan "pengelola atau bukan" dijawab server lewat data admin, bukan ditebak dari tanda di klien
  const why = me ? await refresh() : '', ok = !!me && why === '';
  $('app').classList.toggle('hidden', !ok); $('login').classList.toggle('hidden', !!ok);
  $('who').replaceChildren();
  if (me) $('who').append(`Masuk sebagai ${me.name} · `, btn('Keluar', async () => { await call('/api/logout', {}).catch(() => {}); token = ''; try { localStorage.removeItem(KEY); } catch { /* abaikan */ } boot(); }));
  $('lMsg').textContent = ok ? '' : !d ? 'Server tidak terjangkau.' : why;
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
