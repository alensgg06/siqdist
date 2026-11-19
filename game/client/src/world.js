// Dunia: langit senja, reruntuhan, kristal, vegetasi. Semua aset dibuat prosedural.
import * as THREE from 'three';
import { ARENA, OBST, ORBS } from '../../shared/config.js';
import { blocked } from '../../shared/sim.js';
import { bump } from './gfx.js';

export const SUN_DIR = new THREE.Vector3(-0.62, 0.4, -0.68).normalize();

export function rng(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646; }

export function canvasTex(size, draw, repeat) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat); }
  t.anisotropy = 4;
  return t;
}

export function glowTexture() {
  return canvasTex(128, (g, s) => {
    const gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,0.55)');
    gr.addColorStop(0.6, 'rgba(255,255,255,0.12)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, s, s);
  });
}

function stoneTexture() {
  const r = rng(7);
  return canvasTex(256, (g, s) => {
    g.fillStyle = '#8e879a'; g.fillRect(0, 0, s, s);
    const rows = 4, h = s / rows;
    for (let y = 0; y < rows; y++) {
      const off = (y % 2) * 32;
      for (let x = -1; x < 4; x++) {
        const v = 128 + r() * 50;
        g.fillStyle = `rgb(${v + 8},${v},${v + 16})`;
        g.fillRect(x * 64 + off + 2, y * h + 2, 60, h - 4);
      }
    }
    for (let i = 0; i < 2600; i++) {
      const v = r() < 0.5 ? 0 : 255;
      g.fillStyle = `rgba(${v},${v},${v},${0.03 + r() * 0.05})`;
      g.fillRect(r() * s, r() * s, 1 + r() * 2, 1 + r() * 2);
    }
    for (let i = 0; i < 22; i++) { // lumut
      g.fillStyle = `rgba(70,${110 + r() * 40},70,0.16)`;
      g.beginPath(); g.arc(r() * s, r() * s, 6 + r() * 16, 0, 7); g.fill();
    }
  }, 1);
}

function groundTexture() {
  const r = rng(21);
  return canvasTex(512, (g, s) => {
    g.fillStyle = '#4c5a3c'; g.fillRect(0, 0, s, s);
    for (let i = 0; i < 420; i++) {
      const x = r() * s, y = r() * s, w = 14 + r() * 30, v = 96 + r() * 50;
      g.fillStyle = `rgba(${v + 14},${v + 8},${v + 20},${0.5 + r() * 0.4})`;
      g.beginPath(); g.ellipse(x, y, w, w * (0.6 + r() * 0.4), r() * 3, 0, 7); g.fill();
      // bungkus tepi supaya ubin menyambung
      for (const [ox, oy] of [[s, 0], [-s, 0], [0, s], [0, -s]]) {
        g.beginPath(); g.ellipse(x + ox, y + oy, w, w * 0.8, 0, 0, 7); g.fill();
      }
    }
    for (let i = 0; i < 5000; i++) {
      g.fillStyle = `rgba(${60 + r() * 50},${120 + r() * 80},${50 + r() * 30},${0.22 + r() * 0.25})`;
      g.fillRect(r() * s, r() * s, 2, 2 + r() * 3);
    }
  }, 22);
}

function runeTexture() {
  const r = rng(99);
  return canvasTex(512, (g, s) => {
    const c = s / 2;
    g.strokeStyle = '#8fefff'; g.lineCap = 'round';
    for (const [rad, w] of [[240, 5], [222, 2], [150, 4], [92, 2], [60, 3]]) {
      g.lineWidth = w; g.beginPath(); g.arc(c, c, rad, 0, 7); g.stroke();
    }
    g.lineWidth = 3;
    for (let i = 0; i < 24; i++) { // glif di antara dua lingkaran luar
      const a = (i / 24) * Math.PI * 2;
      g.save(); g.translate(c + Math.cos(a) * 186, c + Math.sin(a) * 186); g.rotate(a + Math.PI / 2);
      g.beginPath();
      for (let k = 0; k < 4; k++) g.lineTo((r() - 0.5) * 22, (r() - 0.5) * 30);
      g.stroke(); g.restore();
    }
    g.lineWidth = 2.5;
    for (let k = 0; k < 2; k++) { // bintang segi delapan
      g.beginPath();
      for (let i = 0; i <= 4; i++) {
        const a = (i / 4) * Math.PI * 2 + k * Math.PI / 4;
        g.lineTo(c + Math.cos(a) * 150, c + Math.sin(a) * 150);
      }
      g.stroke();
    }
  });
}

function tuftTexture() {
  const r = rng(5);
  const t = canvasTex(128, (g, s) => {
    for (let i = 0; i < 13; i++) {
      const x0 = s * (0.3 + r() * 0.4), lean = (r() - 0.5) * s * 0.75, h = s * (0.45 + r() * 0.5), w = 5 + r() * 5;
      const gr = g.createLinearGradient(0, s, 0, s - h);
      gr.addColorStop(0, '#2f5a2a'); gr.addColorStop(1, `hsl(${85 + r() * 30},60%,${50 + r() * 20}%)`);
      g.fillStyle = gr; g.beginPath();
      g.moveTo(x0 - w, s); g.quadraticCurveTo(x0 + lean * 0.3, s - h * 0.6, x0 + lean, s - h);
      g.quadraticCurveTo(x0 + lean * 0.4, s - h * 0.5, x0 + w, s); g.closePath(); g.fill();
    }
  });
  return t;
}
function tuftGeo() { // dua bidang bersilang, normal ke atas agar terangnya rata
  const pos = [], uv = [], nor = [], idx = [];
  for (let k = 0; k < 2; k++) {
    const c = Math.cos(k * Math.PI / 2 + 0.4) * 0.5, s = Math.sin(k * Math.PI / 2 + 0.4) * 0.5, b = k * 4;
    pos.push(-c, 0, -s, c, 0, s, c, 0.75, s, -c, 0.75, -s);
    uv.push(0, 0, 1, 0, 1, 1, 0, 1); nor.push(0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0);
    idx.push(b, b + 1, b + 2, b, b + 2, b + 3, b, b + 2, b + 1, b, b + 3, b + 2); // dua sisi, normal tetap ke atas
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setIndex(idx);
  return g;
}
function pineGeo() { // tiga kerucut bertumpuk dalam satu geometri
  const pos = [], nor = [], idx = [];
  let base = 0;
  for (const [r, h, y] of [[3.0, 4.2, -2.2], [2.3, 3.8, 0.2], [1.5, 3.4, 2.6]]) {
    const c = new THREE.ConeGeometry(r, h, 7); c.translate(0, y, 0);
    pos.push(...c.attributes.position.array); nor.push(...c.attributes.normal.array);
    for (const i of c.index.array) idx.push(i + base);
    base += c.attributes.position.count;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setIndex(idx);
  return g;
}

export function buildWorld(scene) {
  const root = new THREE.Group(); scene.add(root);
  const R = rng(1234);
  const glowTex = glowTexture();
  const stoneTex = stoneTexture();
  const stone = bump(new THREE.MeshStandardMaterial({ map: stoneTex, roughness: 0.9, metalness: 0.02 }), 3.2, 1.1);
  const darkStone = bump(new THREE.MeshStandardMaterial({ map: stoneTex, color: 0xb0a6bc, roughness: 0.95 }), 3.2, 1.1);
  const world = { root, glowTex, orbs: [], spin: [], grass: null, sun: null, pointLights: [] };

  // --- langit ---
  world.fog = new THREE.FogExp2(0x6b4470, 0.006);
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(600, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { sunDir: { value: SUN_DIR } },
      vertexShader: 'varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `varying vec3 vP; uniform vec3 sunDir;
        float hash(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float h=d.y;
          vec3 hor=vec3(1.0,0.48,0.26), mid=vec3(0.42,0.17,0.45), top=vec3(0.035,0.05,0.16);
          vec3 c=mix(hor,mid,smoothstep(-0.02,0.22,h)); c=mix(c,top,smoothstep(0.16,0.75,h));
          float s=max(dot(d,sunDir),0.0);
          c+=vec3(1.0,0.55,0.25)*pow(s,6.0)*0.55 + vec3(1.0,0.85,0.6)*pow(s,220.0)*4.0;
          vec3 g=floor(d*220.0); float st=step(0.9972,hash(g));
          c+=vec3(0.9,0.95,1.0)*st*smoothstep(0.25,0.7,h)*(0.6+0.4*hash(g+1.0));
          gl_FragColor=vec4(c,1.0); }`,
    }),
  );
  sky.renderOrder = -10; sky.frustumCulled = false;
  root.add(sky);
  world.sky = sky;

  // --- cahaya ---
  root.add(new THREE.HemisphereLight(0x93a4f5, 0x5a4250, 1.55));
  root.add(new THREE.AmbientLight(0x8f7fb5, 0.75));
  const sun = new THREE.DirectionalLight(0xffb880, 3.6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  const sc = sun.shadow.camera;
  sc.left = -34; sc.right = 34; sc.top = 34; sc.bottom = -34; sc.near = 1; sc.far = 160;
  sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.04;
  root.add(sun, sun.target);
  world.sun = sun;

  // --- tanah ---
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(440, 440),
    new THREE.MeshStandardMaterial({ map: groundTexture(), roughness: 0.96 }),
  );
  ground.material.map.repeat.set(60, 60);
  bump(ground.material, 2.6, 0.9);
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;
  root.add(ground);

  const rune = new THREE.Mesh(
    new THREE.PlaneGeometry(22, 22),
    new THREE.MeshBasicMaterial({ map: runeTexture(), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.75 }),
  );
  rune.rotation.x = -Math.PI / 2; rune.position.y = 0.04;
  root.add(rune); world.rune = rune;

  const addShadow = (m) => { m.castShadow = true; m.receiveShadow = true; return m; };
  const crystalMat = (color) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 1.8, roughness: 0.25, metalness: 0.1 });
  function crystal(x, y, z, size, color, light) {
    const g = new THREE.Group();
    const m = new THREE.Mesh(new THREE.OctahedronGeometry(size, 0), crystalMat(color));
    m.scale.y = 1.9; g.add(m);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.7 }));
    s.scale.setScalar(size * 7); g.add(s);
    g.position.set(x, y, z); root.add(g);
    world.spin.push({ g, y, sp: 0.5 + R() * 0.6, ph: R() * 6 });
    if (light) {
      const pl = new THREE.PointLight(color, light, 34, 1.6);
      pl.position.set(x, y, z); root.add(pl); world.pointLights.push(pl);
    }
    return g;
  }

  // --- penghalang dari peta ---
  for (const o of OBST) {
    if (o.kind === 'altar') {
      for (const [r, h, y] of [[3.2, 0.5, 0.25], [2.6, 0.5, 0.75], [2.0, 0.4, 1.2]]) {
        const m = addShadow(new THREE.Mesh(new THREE.CylinderGeometry(r, r + 0.15, h, 8), stone));
        m.position.set(o.x, y, o.z); root.add(m);
      }
      crystal(o.x, 4.2, o.z, 1.0, 0x58e6ff, 90);
    } else if (o.kind === 'pillar') {
      const broken = R() < 0.4, h = broken ? 4 + R() * 3 : o.h;
      const base = addShadow(new THREE.Mesh(new THREE.BoxGeometry(o.r * 2.5, 0.7, o.r * 2.5), stone));
      base.position.set(o.x, 0.35, o.z); root.add(base);
      const shaft = addShadow(new THREE.Mesh(new THREE.CylinderGeometry(o.r * 0.82, o.r * 0.95, h, 10), stone));
      shaft.position.set(o.x, 0.7 + h / 2, o.z); shaft.rotation.z = broken ? (R() - 0.5) * 0.05 : 0; root.add(shaft);
      if (!broken) {
        const cap = addShadow(new THREE.Mesh(new THREE.BoxGeometry(o.r * 2.6, 0.6, o.r * 2.6), stone));
        cap.position.set(o.x, 0.7 + h + 0.3, o.z); root.add(cap);
        crystal(o.x, 0.7 + h + 1.6, o.z, 0.38, 0xff5ad1, 0);
      }
    } else if (o.kind === 'wall') {
      const m = addShadow(new THREE.Mesh(new THREE.BoxGeometry(o.w, o.h, o.d), stone));
      m.position.set(o.x, o.h / 2, o.z); root.add(m);
      const long = o.w > o.d, len = long ? o.w : o.d, n = Math.floor(len / 2);
      for (let i = 0; i < n; i++) { // gerigi atas yang sebagian runtuh
        if (R() < 0.3) continue;
        const hh = 0.5 + R() * 0.9, t = -len / 2 + 1 + i * 2;
        const b = addShadow(new THREE.Mesh(new THREE.BoxGeometry(long ? 1.2 : o.w, hh, long ? o.d : 1.2), stone));
        b.position.set(o.x + (long ? t : 0), o.h + hh / 2, o.z + (long ? 0 : t)); root.add(b);
      }
    } else {
      const m = addShadow(new THREE.Mesh(new THREE.BoxGeometry(o.w, o.h, o.d), darkStone));
      m.position.set(o.x, o.h / 2, o.z); m.rotation.y = 0; root.add(m);
      const top = addShadow(new THREE.Mesh(new THREE.BoxGeometry(o.w * 0.6, 0.7, o.d * 0.6), stone));
      top.position.set(o.x + 0.3, o.h + 0.35, o.z - 0.2); top.rotation.y = 0.5; root.add(top);
    }
  }
  for (const s of [-1, 1]) { crystal(0, 5.6, s * 21, 0.5, 0xffb23e, 30); crystal(s * 21, 5.6, 0, 0.5, 0xffb23e, 30); }

  // --- tembok keliling, menara, gunung, pepohonan ---
  const W = ARENA + 1.5;
  for (const [x, z, w, d] of [[0, W, 2 * W + 3, 3], [0, -W, 2 * W + 3, 3], [W, 0, 3, 2 * W + 3], [-W, 0, 3, 2 * W + 3]]) {
    const m = addShadow(new THREE.Mesh(new THREE.BoxGeometry(w, 6, d), darkStone));
    m.position.set(x, 3, z); root.add(m);
  }
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x4a2d5e, roughness: 0.8 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const t = addShadow(new THREE.Mesh(new THREE.CylinderGeometry(4, 4.6, 12, 10), darkStone));
    t.position.set(sx * W, 6, sz * W); root.add(t);
    const roof = addShadow(new THREE.Mesh(new THREE.ConeGeometry(5, 6, 10), roofMat));
    roof.position.set(sx * W, 15, sz * W); root.add(roof);
    crystal(sx * W, 19.5, sz * W, 0.6, 0x58e6ff, 0);
  }
  const mtnMat = new THREE.MeshStandardMaterial({ color: 0x4a3566, roughness: 1, flatShading: true });
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * Math.PI * 2 + R() * 0.2, d = 200 + R() * 90, h = 45 + R() * 70;
    const mgeo = new THREE.ConeGeometry(70 + R() * 50, h, 9, 4);
    const mp = mgeo.attributes.position;
    for (let v = 0; v < mp.count; v++) {
      const k = (0.5 - mp.getY(v) / h) * 26; // makin ke kaki makin tak beraturan
      mp.setX(v, mp.getX(v) + (R() - 0.5) * k); mp.setZ(v, mp.getZ(v) + (R() - 0.5) * k); mp.setY(v, mp.getY(v) + (R() - 0.5) * k * 0.5);
    }
    mgeo.computeVertexNormals();
    const m = new THREE.Mesh(mgeo, mtnMat);
    m.position.set(Math.cos(a) * d, h / 2 - 6, Math.sin(a) * d); m.rotation.y = R() * 6; root.add(m);
  }
  const NT = 150, dummy = new THREE.Object3D();
  const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.35, 0.5, 4, 6), new THREE.MeshStandardMaterial({ color: 0x3b2a2a, roughness: 1 }), NT);
  const leaves = new THREE.InstancedMesh(pineGeo(), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true }), NT);
  for (let i = 0; i < NT; i++) {
    let x, z;
    do { x = (R() - 0.5) * 220; z = (R() - 0.5) * 220; } while (Math.abs(x) < W + 9 && Math.abs(z) < W + 9);
    const s = 0.8 + R() * 1.3;
    dummy.position.set(x, 2 * s, z); dummy.scale.setScalar(s); dummy.rotation.set(0, R() * 6, 0); dummy.updateMatrix();
    trunks.setMatrixAt(i, dummy.matrix);
    dummy.position.y = 7 * s; dummy.updateMatrix(); leaves.setMatrixAt(i, dummy.matrix);
    leaves.setColorAt(i, new THREE.Color().setHSL(0.38 + R() * 0.1, 0.45, 0.1 + R() * 0.09));
  }
  root.add(trunks, leaves);

  // --- batu & rumput ---
  const rockGeo = new THREE.DodecahedronGeometry(0.5, 0);
  for (let i = 0; i < 60; i++) {
    const x = (R() - 0.5) * 84, z = (R() - 0.5) * 84;
    if (blocked(x, z, 1.2) || Math.hypot(x, z) < 12) continue;
    const m = addShadow(new THREE.Mesh(rockGeo, darkStone));
    const s = 0.3 + R() * 0.5; m.scale.set(s, s * 0.6, s); m.position.set(x, s * 0.15, z); m.rotation.set(R() * 3, R() * 3, 0);
    root.add(m);
  }
  const NG = 4200;
  const bladeGeo = tuftGeo();
  const grass = new THREE.InstancedMesh(bladeGeo, new THREE.MeshStandardMaterial({ map: tuftTexture(), alphaTest: 0.45, roughness: 1 }), NG);
  const col = new THREE.Color();
  for (let i = 0; i < NG; i++) {
    const cx = (R() - 0.5) * 86, cz = (R() - 0.5) * 86;
    const x = cx + (R() - 0.5) * 2.5, z = cz + (R() - 0.5) * 2.5;
    const s = blocked(x, z, 0.3) ? 0 : 0.7 + R() * 1.1;
    dummy.position.set(x, 0, z); dummy.scale.set(s, s, s); dummy.rotation.set(0, R() * 6, 0); dummy.updateMatrix();
    grass.setMatrixAt(i, dummy.matrix);
    grass.setColorAt(i, col.setHSL(0.22 + R() * 0.12, 0.5, 0.42 + R() * 0.25));
  }
  grass.receiveShadow = true; root.add(grass); world.grass = grass; world.grassMax = NG;

  // --- kunang-kunang ---
  const NF = 260, fp = new Float32Array(NF * 3), fph = new Float32Array(NF);
  for (let i = 0; i < NF; i++) { fp[i * 3] = (R() - 0.5) * 96; fp[i * 3 + 1] = 0.6 + R() * 7; fp[i * 3 + 2] = (R() - 0.5) * 96; fph[i] = R() * 100; }
  const fg = new THREE.BufferGeometry();
  fg.setAttribute('position', new THREE.BufferAttribute(fp, 3)); fg.setAttribute('ph', new THREE.BufferAttribute(fph, 1));
  const flies = new THREE.Points(fg, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { time: { value: 0 }, scale: { value: 400 } },
    vertexShader: `attribute float ph; uniform float time; uniform float scale; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.4+ph)*1.6; p.y+=sin(time*0.7+ph*1.7)*0.7; p.z+=cos(time*0.33+ph*1.3)*1.6;
        vA=0.45+0.55*sin(time*2.0+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*0.24/-mv.z; gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `varying float vA; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(vec3(1.0,0.86,0.45)*2.0, smoothstep(0.5,0.0,d)*vA); }`,
  }));
  flies.frustumCulled = false; root.add(flies); world.flies = flies;

  // --- bola penyembuh ---
  const orbMat = new THREE.MeshStandardMaterial({ color: 0x59ff9c, emissive: 0x2dff7f, emissiveIntensity: 3, roughness: 0.2 });
  for (const [x, z] of ORBS) {
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
    sun.position.copy(sun.target.position).addScaledVector(SUN_DIR, 80);
    sky.position.set(focus.x, 0, focus.z);
    flies.material.uniforms.time.value = t;
    rune.material.opacity = 0.55 + 0.25 * Math.sin(t * 1.3);
    rune.rotation.z = t * 0.05;
    for (const c of world.spin) { c.g.rotation.y = t * c.sp; c.g.position.y = c.y + Math.sin(t * 1.2 + c.ph) * 0.25; }
    for (let i = 0; i < world.orbs.length; i++) {
      const o = world.orbs[i];
      o.visible = !!(orbMask & (1 << i));
      o.position.y = 1.2 + Math.sin(t * 2 + i) * 0.18; o.rotation.y = t * 1.5;
    }
  };
  return world;
}

// ---- Paket B: rune di peta dan lingkaran Rebut Altar ----
export function buildExtras(scene, glowTex, RUNES, RUNE_INFO, KOTH_R) { // scene: grup akar peta
  const runes = RUNES.map((r) => {
    const info = RUNE_INFO[r.type], g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: info.color, emissive: info.color, emissiveIntensity: 2.4, roughness: 0.3 });
    const gem = new THREE.Mesh(r.type === 'dmg' ? new THREE.TetrahedronGeometry(0.5, 0) : new THREE.OctahedronGeometry(0.45, 0), mat);
    gem.castShadow = true; g.add(gem);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: info.color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.85 }));
    halo.scale.setScalar(3); g.add(halo);
    const base = new THREE.Mesh(new THREE.RingGeometry(0.8, 1.15, 6), new THREE.MeshBasicMaterial({ color: info.color, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    base.rotation.x = -Math.PI / 2; base.position.y = -1.15; g.add(base);
    g.position.set(r.x, 1.2, r.z); scene.add(g);
    return { g, gem, base };
  });
  // cincin tipis di tanah; warnanya menunjukkan siapa yang menguasai altar
  const zoneMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  const zone = new THREE.Mesh(new THREE.RingGeometry(KOTH_R - 0.35, KOTH_R, 72), zoneMat);
  zone.rotation.x = -Math.PI / 2; zone.position.y = 0.06; zone.visible = false; scene.add(zone);
  const pillarMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  const pillar = new THREE.Mesh(new THREE.CylinderGeometry(KOTH_R, KOTH_R, 6, 48, 1, true), pillarMat);
  pillar.position.y = 3; pillar.visible = false; scene.add(pillar);
  const zoneCol = { 0: 0xfff2d0, mine: 0xf2c66d, other: 0xff4d5e, contest: 0xb76bff };
  return {
    update(t, runeMask, mode, holder, myId) {
      runes.forEach((r, i) => {
        r.g.visible = !!(runeMask & (1 << i));
        r.gem.rotation.y = t * 2 + i; r.gem.rotation.x = t * 1.3;
        r.g.position.y = 1.2 + Math.sin(t * 2.4 + i) * 0.2;
        r.base.rotation.z = t * 0.8;
      });
      const on = mode === 'koth';
      zone.visible = pillar.visible = on;
      if (on) {
        const c = holder === 0 ? zoneCol[0] : holder === -1 ? zoneCol.contest : holder === myId ? zoneCol.mine : zoneCol.other;
        zoneMat.color.setHex(c); pillarMat.color.setHex(c);
        zoneMat.opacity = 0.45 + 0.25 * Math.sin(t * (holder ? 6 : 2));
        pillarMat.opacity = holder ? 0.16 : 0.07;
      }
    },
  };
}
