#!/usr/bin/env bash
# Menjalankan semua uji: menyalakan server uji yang dibutuhkan, lalu mematikannya lagi.
#   bash test/run-all.sh
set -u
export MUTATOR=none   # uji tidak boleh terpengaruh mode akhir pekan
export ARKANA_AUTH=off   # uji lama bergabung tanpa akun; akun diuji sendiri di auth.test.js
cd "$(dirname "$0")/.."
T=$(mktemp -d)
pids=()
srv() { PORT=$1 DATA_DIR=$T/$1 "${@:2}" node server/server.js > "$T/$1.log" 2>&1 & pids+=($!); }
cleanup() { kill "${pids[@]}" 2>/dev/null; rm -rf "$T"; }
trap cleanup EXIT
srv 8099 env
srv 8098 env KILL_LIMIT=1 END_TIME=2
srv 8095 env BOTS=0 KOTH_LIMIT=5 END_TIME=2
srv 8094 env BOTS=0 LAGCOMP=1
srv 8093 env BOTS=0 LAGCOMP=0
sleep 1
fail=0
run() { local name=$1; shift; local out; out=$("$@" 2>&1); local rc=$?; echo "$out" | grep -E "^(OK|GAGAL|   )" | sed "s/^/[$name] /"; # galat tick server yang tertelan juga dihitung gagal
  echo "$out" | grep -q "tick gagal" && { echo "$out" | grep -m3 -A2 "tick gagal" | sed "s/^/[$name] /"; rc=1; }
  [ $rc -eq 0 ] && echo "[$name] LULUS" || { echo "[$name] GAGAL"; fail=1; }; }
run jaringan env WS_URL=ws://localhost:8099/ws node test/net.test.js
run akhir-ronde env WS_URL=ws://localhost:8098/ws EXPECT_END=1 node test/net.test.js
run room env WS_URL=ws://localhost:8098/ws DATA_DIR=$T/8098 node test/rooms.test.js
run mode env DATA_DIR=$T/8095 node test/modes.test.js
run tim node test/teams.test.js
run statistik node test/stats.test.js
run peta node test/maps.test.js
run c2 node test/c2.test.js
run bertahan node test/pve.test.js
run d2 node test/d2.test.js
run event node test/event.test.js
run akun node test/auth.test.js
run email node test/mail.test.js
run admin node test/admin.test.js
run diam node test/idle.test.js
run bersama node test/bersama.test.js
for f in "$T"/*.log; do if grep -q -i "error\|gagal" "$f"; then grep -H -i -m3 "error\|gagal" "$f"; fail=1; fi; done
exit $fail
