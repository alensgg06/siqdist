// Memeriksa pengirim email dan mengirim email percobaan.
//   node tools/email.js cek              periksa sambungan dan login ke server SMTP
//   node tools/email.js tes <alamat>     kirim email percobaan
// Di Docker: docker compose exec arkana node tools/email.js tes kamu@contoh.com
import { sendMail, verifyMail, mailOn } from '../server/mailer.js';

const [cmd, to] = process.argv.slice(2);
const die = (m) => { console.error(m); process.exit(1); };
if (!mailOn) die('Pengirim email belum diatur. Isi SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, dan SMTP_FROM di .env lalu jalankan ulang container.');
try {
  if (cmd === 'tes') {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to || '')) die('Pakai: tes <alamat email>');
    const r = await sendMail(to, 'Arkana: email percobaan', 'Ini email percobaan dari server Arkana. Bila kamu menerimanya, pengirim email sudah bekerja.\n');
    console.log(`Diterima server SMTP: ${r.response || 'ok'}\nPeriksa kotak masuk ${to}, termasuk folder spam.`);
  } else if (cmd === 'cek' || !cmd) {
    await verifyMail(); console.log('Sambungan dan login ke server SMTP berhasil.');
  } else die('Perintah: cek | tes <alamat>');
} catch (err) { die(`Gagal: ${err.message}`); }
process.exit(0);
