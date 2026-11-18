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
