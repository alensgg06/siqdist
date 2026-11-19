// Pengirim email lewat SMTP milik penyedia (bukan server email sendiri). Diatur lewat variabel lingkungan:
//   SMTP_HOST, SMTP_PORT (bawaan 587), SMTP_USER, SMTP_PASS, SMTP_FROM ("Arkana <alamat@domain>")
// Tanpa SMTP_HOST dan SMTP_FROM pengirim mati dan fitur yang butuh email ikut mati.
import nodemailer from 'nodemailer';

const E = process.env;
const port = Number(E.SMTP_PORT) || 587;
export const mailOn = !!(E.SMTP_HOST && E.SMTP_FROM);
const transport = mailOn ? nodemailer.createTransport({
  host: E.SMTP_HOST, port, secure: port === 465,
  auth: E.SMTP_USER ? { user: E.SMTP_USER, pass: E.SMTP_PASS || '' } : undefined,
  // SMTP_INSECURE=1 hanya untuk uji dengan server tiruan tanpa TLS
  ...(E.SMTP_INSECURE === '1' ? { ignoreTLS: true } : { requireTLS: port !== 465 }),
  connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
}) : null;

export async function sendMail(to, subject, text) {
  if (!transport) throw new Error('Pengirim email belum diatur (SMTP_HOST dan SMTP_FROM).');
  return transport.sendMail({ from: E.SMTP_FROM, to, subject, text });
}
export async function verifyMail() { if (!transport) throw new Error('Pengirim email belum diatur (SMTP_HOST dan SMTP_FROM).'); return transport.verify(); }
