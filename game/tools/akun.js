// Mengelola akun pemain dari baris perintah. Server membaca perubahan tanpa restart.
//   node tools/akun.js daftar
//   node tools/akun.js buat <nama> <kata-sandi>         buat akun (satu-satunya cara membuat akun pengelola)
//   node tools/akun.js sandi <nama> <kata-sandi-baru>   ganti kata sandi (semua perangkat akun itu keluar)
//   node tools/akun.js email <nama> <alamat>            isi atau ganti email pemulihan
//   node tools/akun.js hapus <nama>                     hapus akun (statistiknya tetap tersimpan)
// Di Docker: docker compose exec arkana node tools/akun.js ...
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Accounts } from '../server/accounts.js';

const DIR = process.env.DATA_DIR || path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data');
const acc = new Accounts(DIR);
const [cmd, name, pass] = process.argv.slice(2);
const die = (m) => { console.error(m); process.exit(1); };
if (cmd === 'buat') {
  if (!name || !pass) die('Pakai: buat <nama> <kata-sandi>');
  const r = acc.register(name, pass); if (r.error) die(r.error);
  console.log(`Akun "${name}" dibuat.`);
} else if (cmd === 'sandi') {
  if (!name || !pass) die('Pakai: sandi <nama> <kata-sandi-baru>');
  const err = acc.setPass(name, pass); if (err) die(err);
  console.log(`Kata sandi "${name}" diganti. Semua perangkatnya harus masuk lagi.`);
} else if (cmd === 'email') {
  if (!name || !pass) die('Pakai: email <nama> <alamat>');
  const err = acc.setMail(name, pass); if (err) die(err);
  console.log(`Email pemulihan "${name}" diatur.`);
} else if (cmd === 'hapus') {
  if (!name) die('Pakai: hapus <nama>');
  const err = acc.remove(name); if (err) die(err);
  console.log(`Akun "${name}" dihapus.`);
} else if (cmd === 'daftar' || !cmd) {
  const l = acc.list();
  if (!l.length) console.log('Belum ada akun.');
  for (const u of l.sort((a, b) => a.created - b.created)) console.log(`${u.name.padEnd(15)} dibuat ${new Date(u.created + 7 * 3600e3).toISOString().slice(0, 16).replace('T', ' ')} WIB, ${u.sessions} perangkat masuk, email: ${u.email || '(belum ada)'}`);
} else die('Perintah: daftar | buat <nama> <kata-sandi> | sandi <nama> <kata-sandi-baru> | email <nama> <alamat> | hapus <nama>');
