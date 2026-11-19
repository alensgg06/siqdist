// Efek: partikel aditif, proyektil, cincin ledakan, kilatan cahaya.
import * as THREE from 'three';
import { ALL_CLASSES as CLASSES } from '../../shared/config.js';
import { blocked } from '../../shared/sim.js';

const MAXP = 1800;
const PROJ_Y = 1.55;

export class Fx {
  constructor(scene, glowTex) {
    this.scene = scene; this.glowTex = glowTex;
    this.pos = new Float32Array(MAXP * 3); this.col = new Float32Array(MAXP * 4); this.size = new Float32Array(MAXP);
    this.vel = new Float32Array(MAXP * 3); this.life = new Float32Array(MAXP); this.max = new Float32Array(MAXP);
    this.base = new Float32Array(MAXP * 4); this.grav = new Float32Array(MAXP);
    this.cursor = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('pcolor', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('psize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.points = new THREE.Points(g, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { scale: { value: 400 } },
      vertexShader: `attribute vec4 pcolor; attribute float psize; uniform float scale; varying vec4 vC;
        void main(){ vC=pcolor; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize=min(180.0, psize*scale/-mv.z); gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `varying vec4 vC; void main(){ float d=length(gl_PointCoord-0.5)*2.0;
        float a=smoothstep(1.0,0.0,d); gl_FragColor=vec4(vC.rgb*(1.0+a), a*a*vC.a); }`,
    }));
    this.points.frustumCulled = false; this.points.renderOrder = 4;
    scene.add(this.points);

    this.projs = new Map(); this.spritePool = [];
    this.rings = [];
    this.lights = [];
    for (let i = 0; i < 3; i++) { const l = new THREE.PointLight(0xffffff, 0, 16, 1.8); l.userData.t = 0; scene.add(l); this.lights.push(l); }
    this.lightsOn = true;
    this.tmpC = new THREE.Color();
  }

  particle(x, y, z, vx, vy, vz, color, size, life, grav = 0, alpha = 1) {
    const i = this.cursor; this.cursor = (i + 1) % MAXP;
    const c = this.tmpC.set(color);
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.base[i * 4] = c.r; this.base[i * 4 + 1] = c.g; this.base[i * 4 + 2] = c.b; this.base[i * 4 + 3] = alpha;
    this.size[i] = size; this.life[i] = life; this.max[i] = life; this.grav[i] = grav;
  }

  burst(x, y, z, color, n, speed, size, life, grav = 6) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.283, e = (Math.random() - 0.3) * 2, s = speed * (0.3 + Math.random() * 0.7);
      this.particle(x, y, z, Math.cos(a) * s, e * s * 0.7, Math.sin(a) * s, color, size * (0.5 + Math.random()), life * (0.5 + Math.random() * 0.5), grav);
    }
  }

  flash(x, y, z, color, intensity) {
    if (!this.lightsOn) return;
    let l = this.lights[0];
    for (const c of this.lights) if (c.userData.t < l.userData.t) l = c;
    l.position.set(x, y, z); l.color.set(color); l.userData.t = 1; l.userData.i = intensity; l.intensity = intensity;
  }

  ring(x, z, color, radius, life = 0.5) {
    const m = new THREE.Mesh(
      new THREE.RingGeometry(0.82, 1, 48),
      new THREE.MeshBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
    );
    m.rotation.x = -Math.PI / 2; m.position.set(x, 0.25, z);
    this.scene.add(m); this.rings.push({ m, t: 0, life, radius });
  }

  spawnProj(id, clsKey, x, z, ang) {
    const c = CLASSES[clsKey];
    const s = this.spritePool.pop() || new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    s.material.color.set(c.color);
    const sc = clsKey === 'mage' ? 3.0 : clsKey === 'ranger' ? 1.5 : 1.0;
    s.scale.setScalar(sc); s.position.set(x, PROJ_Y, z); s.visible = true;
    this.scene.add(s);
    this.projs.set(id, { s, x, z, dx: Math.sin(ang), dz: Math.cos(ang), sp: c.projSpeed, life: c.projLife + 0.1, color: c.color, cls: clsKey, sc });
  }

  removeProj(id) {
    const p = this.projs.get(id);
    if (!p) return;
    this.scene.remove(p.s); this.spritePool.push(p.s); this.projs.delete(id);
  }

  impact(x, z, clsKey) {
    const c = CLASSES[clsKey] || CLASSES.ranger;
    if (c.splash > 0) {
      this.burst(x, PROJ_Y, z, c.color, 46, 11, 1.5, 0.7);
      this.burst(x, PROJ_Y, z, 0xffe6a0, 14, 5, 2.4, 0.35, 0);
      this.ring(x, z, c.color, c.splash, 0.4);
      this.flash(x, PROJ_Y + 0.5, z, c.color, 60);
    } else {
      this.burst(x, PROJ_Y, z, c.color, 9, 6, 0.8, 0.35);
      this.flash(x, PROJ_Y, z, c.color, 14);
    }
  }

  muzzle(v, clsKey, yaw) {
    const c = CLASSES[clsKey];
    const fx = Math.sin(yaw), fz = Math.cos(yaw);
    for (let i = 0; i < 6; i++) {
      const s = 4 + Math.random() * 7;
      this.particle(v.x, v.y, v.z, fx * s + (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, fz * s + (Math.random() - 0.5) * 3, c.color, 0.9, 0.18, 0);
    }
    this.flash(v.x, v.y, v.z, c.color, 10);
  }

  nova(x, z, color, radius) {
    this.ring(x, z, color, radius, 0.55); this.ring(x, z, 0xffffff, radius * 0.7, 0.4);
    for (let i = 0; i < 70; i++) {
      const a = (i / 70) * 6.283, s = radius * 2.2 * (0.7 + Math.random() * 0.4);
      this.particle(x, 0.5 + Math.random() * 1.5, z, Math.cos(a) * s, 2 + Math.random() * 4, Math.sin(a) * s, color, 1.8, 0.55, 5);
    }
    this.flash(x, 2, z, color, 120);
  }

  pillar(x, z, color) { // naik level / respawn
    for (let i = 0; i < 44; i++) {
      const a = Math.random() * 6.283, r = 0.5 + Math.random() * 0.6;
      this.particle(x + Math.cos(a) * r, Math.random() * 0.5, z + Math.sin(a) * r, 0, 4 + Math.random() * 6, 0, color, 1.1, 0.9, -1);
    }
    this.ring(x, z, color, 2.6, 0.6);
  }

  update(dt) {
    const { pos, vel, life, max, col, base, grav } = this;
    for (let i = 0; i < MAXP; i++) {
      if (life[i] <= 0) continue;
      life[i] -= dt;
      const j = i * 3, k = i * 4;
      if (life[i] <= 0) { col[k + 3] = 0; continue; }
      vel[j + 1] -= grav[i] * dt;
      pos[j] += vel[j] * dt; pos[j + 1] += vel[j + 1] * dt; pos[j + 2] += vel[j + 2] * dt;
      if (pos[j + 1] < 0.05) { pos[j + 1] = 0.05; vel[j + 1] *= -0.3; }
      const f = life[i] / max[i];
      col[k] = base[k]; col[k + 1] = base[k + 1]; col[k + 2] = base[k + 2]; col[k + 3] = base[k + 3] * f;
    }
    const g = this.points.geometry;
    g.attributes.position.needsUpdate = true; g.attributes.pcolor.needsUpdate = true; g.attributes.psize.needsUpdate = true;

    for (const [id, p] of this.projs) {
      const st = p.sp * dt;
      p.x += p.dx * st; p.z += p.dz * st; p.life -= dt;
      if (p.life <= 0 || blocked(p.x, p.z, 0.1)) { this.removeProj(id); continue; }
      p.s.position.set(p.x, PROJ_Y, p.z);
      p.s.scale.setScalar(p.sc * (0.9 + Math.random() * 0.25));
      const n = p.cls === 'mage' ? 3 : 1;
      for (let i = 0; i < n; i++) {
        const b = Math.random() * st;
        this.particle(p.x - p.dx * b + (Math.random() - 0.5) * 0.2, PROJ_Y + (Math.random() - 0.5) * 0.2, p.z - p.dz * b + (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 1.2, Math.random() * 1.2, (Math.random() - 0.5) * 1.2, p.color, p.sc * 0.55, p.cls === 'mage' ? 0.45 : 0.22, -1, 0.8);
      }
    }
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i]; r.t += dt;
      const f = r.t / r.life;
      if (f >= 1) { this.scene.remove(r.m); r.m.geometry.dispose(); r.m.material.dispose(); this.rings.splice(i, 1); continue; }
      const e = 1 - (1 - f) * (1 - f);
      r.m.scale.setScalar(0.3 + e * r.radius); r.m.material.opacity = (1 - f) * 0.9;
    }
    for (const l of this.lights) {
      if (l.userData.t > 0) { l.userData.t = Math.max(0, l.userData.t - dt * 6); l.intensity = l.userData.i * l.userData.t; }
    }
  }
}
