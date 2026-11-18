#!/usr/bin/env bash
# Membangun APK tanpa Gradle. Butuh: JDK 17+, Android SDK (platform 34 + build-tools 35.0.0).
#   ANDROID_HOME=/path/sdk ./build.sh http://IP-VPS:8080
# Alamat server tertanam sebagai bawaan; pemain masih bisa menggantinya dari tombol Kembali.
set -euo pipefail
cd "$(dirname "$0")"
SERVER_URL="${1:-}"
SDK="${ANDROID_HOME:?set ANDROID_HOME ke folder Android SDK}"
BT="$SDK/build-tools/35.0.0"; JAR="$SDK/platforms/android-34/android.jar"
KS="${ARKANA_KEYSTORE:-$HOME/.arkana/arkana.jks}"; KS_PASS="${ARKANA_KEYSTORE_PASS:-arkana-game}"
OUT=build; rm -rf "$OUT"; mkdir -p "$OUT/gen" "$OUT/cls" "$OUT/res-gen/values"

# Alamat server disamarkan (XOR + base64) agar tidak terbaca sebagai teks biasa di dalam APK.
# Ini hanya penghalang ringan: siapa pun yang memantau lalu lintas jaringan HP tetap bisa melihat domainnya.
enc=$(python3 -c 'import sys,base64;k=b"arkana-senja";d=sys.argv[1].encode();print(base64.b64encode(bytes(c^k[i%len(k)] for i,c in enumerate(d))).decode())' "$SERVER_URL")
printf '<?xml version="1.0" encoding="utf-8"?>\n<resources><string name="server_enc">%s</string></resources>\n' "$enc" > "$OUT/res-gen/values/server.xml"

"$BT/aapt2" compile --dir res -o "$OUT/res.zip"
"$BT/aapt2" compile --dir "$OUT/res-gen" -o "$OUT/res-gen.zip"
"$BT/aapt2" link -o "$OUT/base.apk" -I "$JAR" --manifest AndroidManifest.xml --java "$OUT/gen" "$OUT/res.zip" "$OUT/res-gen.zip"
javac -source 11 -target 11 -Xlint:-options -cp "$JAR" -d "$OUT/cls" $(find src "$OUT/gen" -name '*.java')
"$BT/d8" --release --min-api 26 --lib "$JAR" --output "$OUT" $(find "$OUT/cls" -name '*.class')
(cd "$OUT" && zip -q -j base.apk classes.dex)
"$BT/zipalign" -f 4 "$OUT/base.apk" "$OUT/aligned.apk"

# Kunci tanda tangan: dibuat sekali, SIMPAN file ini. Tanpa kunci yang sama, versi baru tidak bisa menimpa yang lama.
if [ ! -f "$KS" ]; then
  mkdir -p "$(dirname "$KS")"
  keytool -genkeypair -keystore "$KS" -storepass "$KS_PASS" -keypass "$KS_PASS" -alias arkana \
    -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Arkana" >/dev/null 2>&1
  echo "Kunci baru dibuat: $KS"
fi
"$BT/apksigner" sign --ks "$KS" --ks-pass "pass:$KS_PASS" --out "$OUT/Arkana.apk" "$OUT/aligned.apk"
"$BT/apksigner" verify --print-certs "$OUT/Arkana.apk" | head -2
ls -l "$OUT/Arkana.apk"
