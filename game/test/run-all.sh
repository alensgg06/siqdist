#!/usr/bin/env bash
# Menjalankan semua uji: menyalakan server uji yang dibutuhkan, lalu mematikannya lagi.
#   bash test/run-all.sh
set -u
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
run() { local name=$1; shift; local out; out=$("$@" 2>&1); local rc=$?; echo "$out" | grep -E "^(OK|GAGAL|   )" | sed "s/^/[$name] /"; [ $rc -eq 0 ] && echo "[$name] LULUS" || { echo "[$name] GAGAL"; fail=1; }; }
run jaringan env WS_URL=ws://localhost:8099/ws node test/net.test.js
run akhir-ronde env WS_URL=ws://localhost:8098/ws EXPECT_END=1 node test/net.test.js
run room env WS_URL=ws://localhost:8098/ws DATA_DIR=$T/8098 node test/rooms.test.js
run mode env DATA_DIR=$T/8095 node test/modes.test.js
run tim node test/teams.test.js
run statistik node test/stats.test.js
run peta node test/maps.test.js
run c2 node test/c2.test.js
run bertahan node test/pve.test.js
for f in "$T"/*.log; do grep -H -i "error\|gagal" "$f" | head -3; done
exit $fail
