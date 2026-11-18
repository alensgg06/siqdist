# Arkana: Reruntuhan Senja

Arena shooter PvP (deathmatch) berlatar fantasi untuk browser HP dan desktop.
Multiplayer online dengan server otoritatif; room diisi bot bila pemain sedikit.

## Menjalankan

```bash
cd game
npm install        # sekaligus mem-build klien ke client/dist/bundle.js
npm start          # http://localhost:8080  (ubah port dengan PORT=xxxx)
```

Buka alamat itu di HP (satu jaringan Wi-Fi: `http://IP-komputer:8080`) atau di desktop.

## Menaruh online

Game butuh server Node yang hidup terus (WebSocket), jadi GitHub Pages saja tidak cukup.
Di layanan seperti Render, Railway, atau Fly.io:

- Root directory: `game`
- Build command: `npm install`
- Start command: `npm start`
- Health check: `/health`

Server yang sama menyajikan klien dan WebSocket (`/ws`). Jika klien disajikan dari tempat
lain, arahkan ke server dengan `?server=wss://alamat-server/ws`.

## Menaruh di VPS dengan Docker

```bash
git clone -b claude/practical-sagan-uin0e8 https://github.com/alensgg06/siqdist.git
cd siqdist/game
docker compose up -d --build
docker compose ps          # status harus "healthy"
```

Game lalu tersedia di `http://IP-VPS:8080`. Buka port itu di firewall VPS
(mis. `ufw allow 8080/tcp`) dan di firewall panel penyedia VPS bila ada.
Bila port 8080 sudah dipakai, ubah angka kiri pada `ports` di `docker-compose.yml`.

Memperbarui setelah ada perubahan kode: `git pull && docker compose up -d --build`.
Melihat log: `docker compose logs -f arkana`.

### Main dari luar rumah lewat Cloudflare Tunnel

Server di jaringan rumah (alamat `192.168.x.x`) tidak terjangkau dari internet. Tunnel
membuat sambungan keluar dari server ke Cloudflare, jadi tidak perlu membuka port router,
dan alamatnya langsung HTTPS.

**Tunnel cepat** (tanpa akun, untuk mencoba):

```bash
docker compose --profile quick up -d --build
docker compose logs tunnel-quick | grep trycloudflare.com
```

Alamat `https://....trycloudflare.com` yang muncul bisa langsung dibagikan. Alamat ini
berganti setiap container tunnel dimulai ulang (termasuk saat server reboot).

**Tunnel tetap** (alamat tidak berubah; butuh akun Cloudflare dan domain di sana):

1. Dasbor Cloudflare Zero Trust > Networks > Tunnels > buat tunnel jenis *Cloudflared*.
2. Salin token-nya ke file `.env`: `cp .env.example .env`, lalu isi `TUNNEL_TOKEN=`.
3. Di tab *Public Hostname* tunnel itu: pilih subdomain, service `HTTP`, URL `arkana:8080`.
4. `docker compose --profile tunnel up -d --build`

### HTTPS (disarankan bila punya domain)

Dengan reverse proxy yang sudah ada di VPS (Nginx Proxy Manager, Traefik, Caddy),
arahkan domain ke `arkana:8080` / `localhost:8080` dan **aktifkan dukungan WebSocket**.
Contoh Caddyfile, sertifikat diurus otomatis:

```
game.domainmu.com {
    reverse_proxy localhost:8080
}
```

## Aplikasi Android (APK)

Folder `android/` berisi pembungkus tipis: aplikasi layar penuh yang membuka game dari
server. APK tidak memuat game-nya, jadi server tetap harus menyala dan terjangkau dari HP.

```bash
ANDROID_HOME=/path/android-sdk ./android/build.sh http://ALAMAT-SERVER:8080
# hasil: android/build/Arkana.apk
```

Butuh JDK 17+ dan Android SDK (platform 34, build-tools 35.0.0). Alamat server tertanam
sebagai bawaan; pemain bisa menggantinya lewat tombol Kembali > "Ganti server".
Simpan file kunci tanda tangan (`~/.arkana/arkana.jks`): versi baru hanya bisa menimpa
versi lama bila ditandatangani kunci yang sama.

## Kontrol

| | HP | Desktop |
|---|---|---|
| Gerak | jempol kiri (joystick muncul di titik sentuh) | WASD |
| Bidik | geser sisi kanan layar, atau geser sambil menahan tombol tembak | mouse |
| Tembak | tombol merah | klik kiri |
| Skill | tombol ungu | Spasi / klik kanan |
| Papan skor | ketuk skor di atas | Tab |

Di HP, bantuan bidik dan tembak otomatis aktif secara bawaan; bisa dimatikan di menu ☰.

## Aturan

- Deathmatch bebas: pemenang adalah yang pertama mencapai 20 kill, atau skor tertinggi setelah 5 menit.
- Tiga kelas: Pemanah Arkana (cepat, jarak jauh), Penyihir Bara (ledakan area), Penjaga Rune (sebaran jarak dekat, tubuh kuat).
- XP dari damage dan kill menaikkan level (maks 5) selama satu ronde: +8% damage dan +12 HP per level.
- Bola hijau memulihkan 40 HP. HP pulih sendiri setelah 5 detik tanpa terkena serangan.

## Struktur

```
shared/   konstanta, peta, dan fisika yang dipakai klien DAN server
server/   server otoritatif (gerak, proyektil, damage, skor, bot)
client/   klien Three.js: dunia, karakter, efek, kontrol sentuh, HUD
test/     uji integrasi jaringan tanpa grafis
```

## Uji

```bash
PORT=8099 node server/server.js &
WS_URL=ws://localhost:8099/ws npm test
# uji akhir ronde:
PORT=8098 KILL_LIMIT=1 END_TIME=2 node server/server.js &
WS_URL=ws://localhost:8098/ws EXPECT_END=1 npm test
```

## Batasan yang diketahui

- Tembakan adalah proyektil yang disimulasikan server, tanpa kompensasi lag: pada ping tinggi,
  bidik sedikit di depan lawan yang bergerak.
- Semua aset prosedural (tanpa model/animasi buatan seniman).
- Pesan jaringan memakai JSON, belum biner.

## Tangkapan layar

![Gameplay](docs/gameplay.png)
![Menu](docs/menu.png)
