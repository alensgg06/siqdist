// Pemantau beban server untuk halaman admin: CPU, memori, disk, dan waktu hitung tiap tick.
// Contoh diambil tiap 5 detik dan disimpan 10 menit terakhir.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const KEEP = 120, EVERY = 5000;
const readNum = (file) => { try { const v = fs.readFileSync(file, 'utf8').trim().split(/\s+/)[0]; return v === 'max' ? null : Number(v); } catch { return undefined; } };
const cpuTimes = () => { let idle = 0, total = 0; for (const c of os.cpus()) { for (const k in c.times) total += c.times[k]; idle += c.times.idle; } return { idle, total }; };

export class Monitor {
  constructor(dataDir, tickHz, probe) {
    this.dir = dataDir; this.budget = 1000 / tickHz; this.probe = probe;
    this.hist = []; this.tSum = 0; this.tMax = 0; this.tN = 0; this.late = 0; this.peak = 0; this.net = 0;
    this.cpu0 = process.cpuUsage(); this.sys0 = cpuTimes(); this.at0 = process.hrtime.bigint();
    this.timer = setInterval(() => this.sample(), EVERY); this.timer.unref?.();
  }
  // dipanggil di sekitar satu putaran hitung semua room
  tick(ms) { this.tSum += ms; this.tN++; if (ms > this.tMax) this.tMax = ms; if (ms > this.budget) this.late++; }
  sample() {
    const now = process.hrtime.bigint(), wall = Number(now - this.at0) / 1e3, cpu = process.cpuUsage(), sys = cpuTimes(); // mikrodetik
    const p = this.probe();
    const s = {
      t: Date.now(),
      cpu: Math.round(((cpu.user - this.cpu0.user) + (cpu.system - this.cpu0.system)) / wall * 1000) / 10,        // % dari satu inti
      sys: sys.total > this.sys0.total ? Math.round((1 - (sys.idle - this.sys0.idle) / (sys.total - this.sys0.total)) * 1000) / 10 : 0, // % seluruh inti
      tick: this.tN ? Math.round(this.tSum / this.tN * 100) / 100 : 0, tickMax: Math.round(this.tMax * 100) / 100, late: this.late,
      rss: process.memoryUsage().rss, players: p.players, net: Math.max(0, Math.round((p.netBytes - this.net) / (EVERY / 1000))),
    };
    this.net = p.netBytes; this.peak = Math.max(this.peak, p.players);
    this.cpu0 = cpu; this.sys0 = sys; this.at0 = now; this.tSum = 0; this.tMax = 0; this.tN = 0; this.late = 0;
    this.hist.push(s); if (this.hist.length > KEEP) this.hist.shift();
  }
  snapshot() {
    const cpus = os.cpus(), mem = process.memoryUsage();
    // batas container (cgroup v2, lalu v1); null berarti tidak dibatasi
    let limit = readNum('/sys/fs/cgroup/memory.max'), used = readNum('/sys/fs/cgroup/memory.current');
    if (limit === undefined) { limit = readNum('/sys/fs/cgroup/memory/memory.limit_in_bytes'); used = readNum('/sys/fs/cgroup/memory/memory.usage_in_bytes'); if (limit > 2 ** 60) limit = null; }
    let cpuLimit = null;
    try { const [q, per] = fs.readFileSync('/sys/fs/cgroup/cpu.max', 'utf8').trim().split(' '); if (q !== 'max') cpuLimit = Number(q) / Number(per); } catch { /* tidak dibatasi atau bukan cgroup v2 */ }
    let disk = null;
    try { const d = fs.statfsSync(this.dir); disk = { total: d.blocks * d.bsize, free: d.bavail * d.bsize }; } catch { /* folder data belum ada */ }
    const files = [];
    try {
      for (const e of fs.readdirSync(this.dir, { withFileTypes: true })) {
        const f = path.join(this.dir, e.name);
        if (e.isFile()) files.push({ name: e.name, size: fs.statSync(f).size });
        else if (e.isDirectory()) files.push({ name: e.name + '/', size: fs.readdirSync(f).reduce((n, x) => { try { return n + fs.statSync(path.join(f, x)).size; } catch { return n; } }, 0) });
      }
    } catch { /* belum ada */ }
    const last = this.hist[this.hist.length - 1] || null;
    return {
      cores: cpus.length, cpuModel: cpus[0]?.model?.trim() || '', cpuLimit, load: os.loadavg().map((v) => Math.round(v * 100) / 100),
      memTotal: os.totalmem(), memFree: os.freemem(), memLimit: limit ?? null, memUsed: used ?? null, rss: mem.rss, heap: mem.heapUsed,
      disk, files: files.sort((a, b) => b.size - a.size), budget: Math.round(this.budget * 10) / 10, last, peak: this.peak,
      hist: this.hist.map((s) => [s.t, s.cpu, s.sys, s.tick, s.tickMax, s.players, s.rss, s.net]),
      node: process.version, platform: `${os.type()} ${os.arch()}`, every: EVERY / 1000,
    };
  }
}
