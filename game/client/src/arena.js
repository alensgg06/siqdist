// Pembangun arena bertema: satu kode untuk peta-peta baru, dibedakan oleh THEMES (langit, cahaya, lantai, rupa penghalang).
import * as THREE from 'three';
import { ARENA, MAPS } from '../../shared/config.js';
import { rng, canvasTex } from './world.js';
import { bump, bakeFloor } from './gfx.js';

const THEMES = {
  cave: {
    seed: 311, fog: [0x071a22, 0.011], sky: { hor: [0.02, 0.16, 0.2], mid: [0.01, 0.07, 0.11], top: [0.0, 0.02, 0.04], glow: [0.25, 0.9, 1.0], stars: 0.0 },
    hemi: [0x6fe3f0, 0x16343a, 1.7], amb: [0x3f8f9c, 1.1], sun: [0x9fefff, 1.9], shade: 0.5,
    floor: { base: '#31464b', blob: [58, 82, 88], speck: [80, 170, 180], repeat: 34 }, wall: 0x6f979e, rock: 0x5f858c, edge: 0x1d2c30,
    motes: [0.45, 0.95, 1.0], crystal: [0x4de3ff, 0xb46bff, 0x59ff9c],
  },
  temple: {
    seed: 733, fog: [0x8fa9c9, 0.006], sky: { hor: [0.62, 0.62, 0.66], mid: [0.3, 0.45, 0.68], top: [0.1, 0.22, 0.48], glow: [1.0, 0.9, 0.7], stars: 0.0 },
    hemi: [0xbcd2f5, 0x5d6b84, 0.75], amb: [0x9fb4d4, 0.3], sun: [0xffe6c0, 1.45], shade: 0.5,
    floor: { base: '#aebdd0', blob: [150, 168, 192], speck: [215, 228, 245], repeat: 30 }, wall: 0x7f9fc4, rock: 0xa9bdd6, edge: 0x8fa6c2,
    motes: [1.0, 1.0, 1.0], crystal: [0xffb35c],
  },
};

function floorTexture(f, seed) {
  const r = rng(seed);
  return canvasTex(512, (g, s) => {
    g.fillStyle = f.base; g.fillRect(0, 0, s, s);
    for (let i = 0; i < 360; i++) {
      const x = r() * s, y = r() * s, w = 12 + r() * 34, v = (r() - 0.5) * 26;
      g.fillStyle = `rgba(${f.blob[0] + v},${f.blob[1] + v},${f.blob[2] + v},${0.35 + r() * 0.4})`;
      for (const [ox, oy] of [[0, 0], [s, 0], [-s, 0], [0, s], [0, -s]]) { g.beginPath(); g.ellipse(x + ox, y + oy, w, w * (0.55 + r() * 0.4), r() * 3, 0, 7); g.fill(); }
    }
    for (let i = 0; i < 3600; i++) { g.fillStyle = `rgba(${f.speck[0]},${f.speck[1]},${f.speck[2]},${0.08 + r() * 0.16})`; g.fillRect(r() * s, r() * s, 1 + r() * 2, 1 + r() * 2); }
  }, f.repeat);
}
function wallTexture(color, seed) {
  const r = rng(seed), c = new THREE.Color(color), k = (v) => Math.max(0, Math.min(255, Math.round(v * 255)));
  return canvasTex(256, (g, s) => {
    g.fillStyle = `rgb(${k(c.r)},${k(c.g)},${k(c.b)})`; g.fillRect(0, 0, s, s);
    for (let i = 0; i < 70; i++) { const v = 0.75 + r() * 0.5; g.fillStyle = `rgba(${k(c.r * v)},${k(c.g * v)},${k(c.b * v)},0.55)`; g.beginPath(); g.ellipse(r() * s, r() * s, 10 + r() * 40, 6 + r() * 22, r() * 3, 0, 7); g.fill(); }
    g.strokeStyle = 'rgba(0,0,0,0.28)'; g.lineWidth = 2;
    for (let i = 0; i < 9; i++) { g.beginPath(); let x = r() * s, y = r() * s; g.moveTo(x, y); for (let j = 0; j < 4; j++) { x += (r() - 0.5) * 70; y += (r() - 0.5) * 70; g.lineTo(x, y); } g.stroke(); }
  }, 1);
}

export function buildArena(scene, glowTex, id) {
  const T = THEMES[id], M = MAPS[id], R = rng(T.seed);
  const root = new THREE.Group(); scene.add(root);
  const world = { root, glowTex, orbs: [], spin: [], grass: null, grassMax: 0, sun: null, pointLights: [] };
  const DIR = new THREE.Vector3(...M.light).normalize();
  world.fog = new THREE.FogExp2(T.fog[0], T.fog[1]);

  // --- langit ---
  const v3 = (a) => new THREE.Vector3(...a);
  const sky = new THREE.Mesh(new THREE.SphereGeometry(600, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { dir: { value: DIR }, hor: { value: v3(T.sky.hor) }, mid: { value: v3(T.sky.mid) }, top: { value: v3(T.sky.top) }, glow: { value: v3(T.sky.glow) } },
    vertexShader: 'varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: `varying vec3 vP; uniform vec3 dir, hor, mid, top, glow;
      void main(){ vec3 d=normalize(vP); float h=d.y;
        vec3 c=mix(hor,mid,smoothstep(-0.02,0.25,h)); c=mix(c,top,smoothstep(0.2,0.8,h));
        float s=max(dot(d,dir),0.0); c+=glow*(pow(s,10.0)*0.35+pow(s,300.0)*2.5);
        gl_FragColor=vec4(c,1.0); }`,
  }));
  sky.renderOrder = -10; sky.frustumCulled = false; root.add(sky); world.sky = sky;

  // --- cahaya ---
  root.add(new THREE.HemisphereLight(T.hemi[0], T.hemi[1], T.hemi[2]));
  root.add(new THREE.AmbientLight(T.amb[0], T.amb[1]));
  const sun = new THREE.DirectionalLight(T.sun[0], T.sun[1]);
  sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024);
  const sc = sun.shadow.camera; sc.left = -34; sc.right = 34; sc.top = 34; sc.bottom = -34; sc.near = 1; sc.far = 160;
  sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.04;
  root.add(sun, sun.target); world.sun = sun;

  // --- lantai ---
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(440, 440), new THREE.MeshStandardMaterial({ map: floorTexture(T.floor, T.seed + 1), roughness: id === 'temple' ? 0.6 : 0.95 }));
  bump(ground.material, 2.4, 0.9);
  bakeFloor(ground.material, `bake/${id}.png`, ARENA + 8, T.shade);
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; root.add(ground);

  const sh = (m) => { m.castShadow = true; m.receiveShadow = true; return m; };
  const wallMat = bump(new THREE.MeshStandardMaterial({ map: wallTexture(T.wall, T.seed + 2), roughness: id === 'temple' ? 0.35 : 0.95, metalness: id === 'temple' ? 0.05 : 0 }), 3, 1);
  const rockMat = new THREE.MeshStandardMaterial({ color: T.rock, roughness: id === 'temple' ? 0.55 : 1, flatShading: true });
  const edgeMat = new THREE.MeshStandardMaterial({ color: T.edge, roughness: 1, flatShading: true });
  const capMat = new THREE.MeshStandardMaterial({ color: 0xd5e2f2, roughness: 0.8 });
  const glowMat = (color, k = 2.2) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: k, roughness: 0.25 });
  const halo = (x, y, z, color, size, light) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.65 }));
    s.scale.setScalar(size); s.position.set(x, y, z); root.add(s);
    if (light) { const pl = new THREE.PointLight(color, light, 30, 1.6); pl.position.set(x, y, z); root.add(pl); world.pointLights.push(pl); }
  };

  // --- penghalang ---
  let n = 0;
  for (const o of M.obst) {
    n++;
    if (o.t === 'box') {
      const m = sh(new THREE.Mesh(new THREE.BoxGeometry(o.w, o.h, o.d), wallMat)); m.position.set(o.x, o.h / 2, o.z); root.add(m);
      if (id === 'temple') { // lapisan salju di atas tembok
        const cap = sh(new THREE.Mesh(new THREE.BoxGeometry(o.w + 0.3, 0.35, o.d + 0.3), capMat)); cap.position.set(o.x, o.h + 0.17, o.z); root.add(cap);
      } else { // bongkah batu tak rata di atas dinding gua
        for (let i = 0; i < 3; i++) { const b = sh(new THREE.Mesh(new THREE.DodecahedronGeometry(0.9 + R() * 0.6, 0), rockMat)); b.position.set(o.x + (R() - 0.5) * (o.w - 1), o.h + 0.2, o.z + (R() - 0.5) * (o.d - 1)); b.rotation.set(R() * 3, R() * 3, 0); root.add(b); }
      }
    } else if (o.kind === 'crystal') {
      const color = T.crystal[n % T.crystal.length];
      const base = sh(new THREE.Mesh(new THREE.CylinderGeometry(o.r * 0.9, o.r * 1.05, 0.8, 7), rockMat)); base.position.set(o.x, 0.4, o.z); root.add(base);
      for (let i = 0; i < 4; i++) { // gugus kristal miring
        const hgt = o.h * (i ? 0.45 + R() * 0.35 : 1), c = sh(new THREE.Mesh(new THREE.ConeGeometry(o.r * (i ? 0.35 : 0.55), hgt, 5), glowMat(color, 1.6)));
        const a = R() * 6.28, d = i ? o.r * 0.55 : 0; c.position.set(o.x + Math.cos(a) * d, hgt / 2 + 0.5, o.z + Math.sin(a) * d); c.rotation.set((R() - 0.5) * (i ? 0.7 : 0.15), R() * 3, (R() - 0.5) * (i ? 0.7 : 0.15)); root.add(c);
      }
      halo(o.x, o.h * 0.6, o.z, color, 9, n % 3 === 0 ? 26 : 0);
    } else if (o.kind === 'rock') {
      const m = sh(new THREE.Mesh(new THREE.DodecahedronGeometry(o.r * 1.12, 0), rockMat)); m.scale.y = o.h / (o.r * 1.6); m.position.set(o.x, o.h * 0.42, o.z); m.rotation.y = R() * 3; root.add(m);
    } else if (o.kind === 'column') {
      const shaft = sh(new THREE.Mesh(new THREE.CylinderGeometry(o.r * 0.82, o.r * 0.95, o.h, 12), wallMat)); shaft.position.set(o.x, o.h / 2, o.z); root.add(shaft);
      for (const y of [0.35, o.h - 0.1]) { const b = sh(new THREE.Mesh(new THREE.BoxGeometry(o.r * 2.5, 0.7, o.r * 2.5), wallMat)); b.position.set(o.x, y, o.z); root.add(b); }
      const snow = sh(new THREE.Mesh(new THREE.BoxGeometry(o.r * 2.7, 0.3, o.r * 2.7), capMat)); snow.position.set(o.x, o.h + 0.4, o.z); root.add(snow);
    } else { // pusat arena: jantung kristal (gua) atau tungku api (kuil)
      const color = id === 'cave' ? 0x4de3ff : 0xffa040;
      const base = sh(new THREE.Mesh(new THREE.CylinderGeometry(o.r, o.r * 1.15, o.h * 0.6, 10), wallMat)); base.position.set(o.x, o.h * 0.3, o.z); root.add(base);
      const core = new THREE.Mesh(new THREE.OctahedronGeometry(1.1, 0), glowMat(color, 3)); core.position.set(o.x, o.h + 1.6, o.z); root.add(core);
      world.spin.push({ g: core, sp: 0.7, y: o.h + 1.6, ph: 0 });
      halo(o.x, o.h + 1.6, o.z, color, 12, 40);
    }
  }
  if (id === 'temple') for (const sx of [-1, 1]) for (const sz of [-1, 1]) halo(sx * 36, 9.2, sz * 36, 0xffb35c, 6, 22); // lentera di atas tiang sudut

  // --- batas arena dan pemandangan jauh ---
  const W = ARENA + 1.5;
  for (const [x, z, w, d] of [[0, W, 2 * W + 3, 3], [0, -W, 2 * W + 3, 3], [W, 0, 3, 2 * W + 3], [-W, 0, 3, 2 * W + 3]]) {
    const m = sh(new THREE.Mesh(new THREE.BoxGeometry(w, id === 'cave' ? 9 : 6, d), wallMat)); m.position.set(x, id === 'cave' ? 4.5 : 3, z); root.add(m);
    if (id === 'temple') { const cap = new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 0.4, d + 0.4), capMat); cap.position.set(x, 6.2, z); root.add(cap); }
  }
  for (let i = 0; i < 46; i++) { // gua: stalagmit raksasa di luar; kuil: puncak bersalju
    const a = (i / 46) * Math.PI * 2 + R() * 0.2, d = id === 'cave' ? W + 8 + R() * 60 : 190 + R() * 110, h = id === 'cave' ? 14 + R() * 34 : 50 + R() * 80;
    const m = new THREE.Mesh(new THREE.ConeGeometry(id === 'cave' ? 4 + R() * 7 : 60 + R() * 50, h, id === 'cave' ? 6 : 8, 2), id === 'cave' ? edgeMat : rockMat);
    m.position.set(Math.cos(a) * d, h / 2 - 1, Math.sin(a) * d); root.add(m);
  }
  if (id === 'cave') for (let i = 0; i < 60; i++) { // kristal kecil bertebaran di lantai
    const x = (R() - 0.5) * ARENA * 1.9, z = (R() - 0.5) * ARENA * 1.9;
    if (M.obst.some((o) => Math.hypot(x - o.x, z - o.z) < (o.t === 'box' ? Math.hypot(o.w, o.d) / 2 : o.r) + 1.5)) continue;
    const c = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.5 + R() * 0.6, 4), glowMat(T.crystal[i % 3], 1.4)); c.position.set(x, 0.3, z); c.rotation.set((R() - 0.5) * 0.6, R() * 3, (R() - 0.5) * 0.6); root.add(c);
  }

  // --- butiran melayang: debu kristal (gua) atau salju turun (kuil) ---
  const NF = id === 'temple' ? 520 : 280, fp = new Float32Array(NF * 3), fph = new Float32Array(NF);
  for (let i = 0; i < NF; i++) { fp[i * 3] = (R() - 0.5) * ARENA * 2.2; fp[i * 3 + 1] = 0.5 + R() * (id === 'temple' ? 16 : 8); fp[i * 3 + 2] = (R() - 0.5) * ARENA * 2.2; fph[i] = R() * 100; }
  const fg = new THREE.BufferGeometry();
  fg.setAttribute('position', new THREE.BufferAttribute(fp, 3)); fg.setAttribute('ph', new THREE.BufferAttribute(fph, 1));
  const flies = new THREE.Points(fg, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: id === 'temple' ? THREE.NormalBlending : THREE.AdditiveBlending,
    uniforms: { time: { value: 0 }, scale: { value: 400 }, fall: { value: id === 'temple' ? 1.4 : 0 }, col: { value: v3(T.motes) } },
    vertexShader: `attribute float ph; uniform float time, scale, fall; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.4+ph)*1.6; p.z+=cos(time*0.33+ph*1.3)*1.6;
        p.y=fall>0.0 ? mod(p.y-time*fall-ph*0.2,16.0)+0.2 : p.y+sin(time*0.7+ph*1.7)*0.7;
        vA=fall>0.0 ? 0.85 : 0.45+0.55*sin(time*2.0+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*(fall>0.0 ? 0.16 : 0.24)/-mv.z; gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `varying float vA; uniform vec3 col; uniform float fall; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(col*(fall>0.0 ? 1.0 : 2.0), smoothstep(0.5,0.0,d)*vA); }`,
  }));
  flies.frustumCulled = false; root.add(flies); world.flies = flies;

  // --- bola penyembuh ---
  const orbMat = new THREE.MeshStandardMaterial({ color: 0x59ff9c, emissive: 0x2dff7f, emissiveIntensity: 3, roughness: 0.2 });
  for (const [x, z] of M.orbs) {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 1), orbMat));
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0x59ff9c, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
    s.scale.setScalar(3.2); g.add(s);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.1, 24), new THREE.MeshBasicMaterial({ color: 0x59ff9c, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = -1.15; g.add(ring);
    g.position.set(x, 1.2, z); root.add(g); world.orbs.push(g);
  }

  world.update = (t, focus, orbMask) => {
    sun.target.position.set(focus.x, 0, focus.z);
    sun.position.copy(sun.target.position).addScaledVector(DIR, 80);
    sky.position.set(focus.x, 0, focus.z);
    flies.material.uniforms.time.value = t;
    for (const c of world.spin) { c.g.rotation.y = t * c.sp; c.g.position.y = c.y + Math.sin(t * 1.2 + c.ph) * 0.25; }
    for (let i = 0; i < world.orbs.length; i++) { const o = world.orbs[i]; o.visible = !!(orbMask & (1 << i)); o.position.y = 1.2 + Math.sin(t * 2 + i) * 0.18; o.rotation.y = t * 1.5; }
  };
  return world;
}
