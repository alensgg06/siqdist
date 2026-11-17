import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { initAudio, sfx, tickMusic, setIntensity, toggleMute } from './audio.js';

const $ = (id) => document.getElementById(id);
const rand = (a = 1, b) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (a, b, k, dt) => lerp(a, b, 1 - Math.exp(-k * dt));

const ARENA_R = 26;
const CY = new THREE.Color(0.25, 2.2, 2.8), OR = new THREE.Color(3.2, 0.9, 0.15), MG = new THREE.Color(3.0, 0.25, 1.1);

// ───────────────────────────── renderer / post ─────────────────────────────
const canvas = $('gl');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
} catch (e) {
  const el = $('err'); el.style.display = 'flex';
  el.textContent = 'Perangkat/browser ini tidak mendukung WebGL2, jadi game tidak bisa dijalankan di sini.';
  throw e;
}
let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
renderer.setPixelRatio(pixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x07131c, 0.0055);
const camera = new THREE.PerspectiveCamera(42, 1, 0.5, 2500);

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.6;

const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 }));
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(4, 4), 0.62, 0.6, 0.95);
composer.addPass(bloom);
const gradePass = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uDamage: { value: 0 }, uAberr: { value: 0.0012 }, uFade: { value: 1 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime, uDamage, uAberr, uFade; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec2 d = vUv - 0.5; float r2 = dot(d, d);
      vec2 off = d * (uAberr + r2 * 0.012 + uDamage * 0.008);
      vec3 c = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(c, c * vec3(0.86, 1.0, 1.16), smoothstep(0.35, 0.0, l) * 0.8);   // teal shadows
      c = mix(c, c * vec3(1.08, 1.0, 0.9), smoothstep(0.6, 2.0, l) * 0.6);     // warm highlights
      c *= mix(1.0, smoothstep(0.78, 0.18, length(d * vec2(1.0, 1.15))), 0.72); // vignette
      c += vec3(0.55, 0.02, 0.0) * uDamage * smoothstep(0.08, 0.5, r2) * 1.6;
      c += (hash(vUv * 937.0 + fract(uTime) * 61.0) - 0.5) * 0.03 * (0.4 + l);
      gl_FragColor = vec4(c * uFade, 1.0);
    }`,
});
composer.addPass(gradePass);
composer.addPass(new OutputPass());

// ───────────────────────────── procedural textures ─────────────────────────────
function makeFloorTextures() {
  const S = 2048, c = S / 2, u = c / 27;
  const mk = () => { const cv = document.createElement('canvas'); cv.width = cv.height = S; return cv; };
  const alb = mk(), rgh = mk(), bmp = mk();
  const a = alb.getContext('2d'), r = rgh.getContext('2d'), b = bmp.getContext('2d');
  a.fillStyle = '#20262d'; a.fillRect(0, 0, S, S);
  r.fillStyle = 'rgb(0,95,235)'; r.fillRect(0, 0, S, S);
  b.fillStyle = '#808080'; b.fillRect(0, 0, S, S);
  const bands = [[0, 3.2, 1], [3.2, 9, 8], [9, 14, 12], [14, 19, 24], [19, 23.5, 24], [23.5, 27, 48]];
  const sector = (ctx, r0, r1, a0, a1) => {
    ctx.beginPath(); ctx.arc(c, c, r1 * u, a0, a1); ctx.arc(c, c, r0 * u, a1, a0, true); ctx.closePath();
  };
  for (const [r0, r1, n] of bands) {
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
      const v = 40 + Math.floor(rand(30)), tint = rand() < 0.14;
      sector(a, r0, r1, a0, a1);
      a.fillStyle = tint ? `rgb(${v + 14},${v + 20},${v + 30})` : `rgb(${v},${v + 4},${v + 9})`; a.fill();
      sector(r, r0, r1, a0, a1);
      r.fillStyle = `rgb(0,${Math.floor(rand(55, 150))},${Math.floor(rand(205, 250))})`; r.fill();
      for (const ctx of [a, b]) {
        sector(ctx, r0, r1, a0, a1); ctx.lineWidth = ctx === b ? 5 : 3;
        ctx.strokeStyle = ctx === b ? '#101010' : '#090c10'; ctx.stroke();
      }
      const am = (a0 + a1) / 2;                                   // bolts
      for (const rr of [r0 + 0.35, r1 - 0.35]) {
        const x = c + Math.cos(am) * rr * u, y = c + Math.sin(am) * rr * u;
        a.fillStyle = '#4a525c'; a.beginPath(); a.arc(x, y, 3, 0, 7); a.fill();
        b.fillStyle = '#c8c8c8'; b.beginPath(); b.arc(x, y, 3.5, 0, 7); b.fill();
      }
    }
  }
  // hazard chevrons near the rim
  for (let i = 0; i < 96; i++) {
    if (i % 8 > 2) continue;
    const a0 = (i / 96) * Math.PI * 2;
    sector(a, 24.4, 25.3, a0, a0 + 0.035); a.fillStyle = '#7a5a1e'; a.fill();
    sector(r, 24.4, 25.3, a0, a0 + 0.035); r.fillStyle = 'rgb(0,190,60)'; r.fill();
  }
  // wet patches and scuffs: low-roughness blotches give broken, puddle-like reflections
  for (let i = 0; i < 260; i++) {
    const x = rand(S), y = rand(S), rad = rand(20, 150);
    const g = r.createRadialGradient(x, y, 0, x, y, rad);
    const wet = rand() < 0.6;
    g.addColorStop(0, wet ? 'rgba(0,18,255,0.6)' : 'rgba(0,205,160,0.35)'); g.addColorStop(1, 'rgba(0,80,230,0)');
    r.fillStyle = g; r.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
  for (let i = 0; i < 9000; i++) {
    const x = rand(S), y = rand(S), v = Math.floor(rand(40));
    a.fillStyle = `rgba(${v + 30},${v + 34},${v + 40},0.25)`; a.fillRect(x, y, rand(1, 3), rand(1, 3));
  }
  for (let i = 0; i < 420; i++) {                                // scratches
    const x = rand(S), y = rand(S), an = rand(Math.PI * 2), len = rand(10, 70);
    a.strokeStyle = 'rgba(120,135,150,0.14)'; a.lineWidth = 1;
    a.beginPath(); a.moveTo(x, y); a.lineTo(x + Math.cos(an) * len, y + Math.sin(an) * len); a.stroke();
  }
  const tex = (cv, srgb) => {
    const t = new THREE.CanvasTexture(cv); t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t;
  };
  return { map: tex(alb, true), rough: tex(rgh), bump: tex(bmp) };
}

function makePanelTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 512;
  const g = cv.getContext('2d'); g.fillStyle = '#2b3138'; g.fillRect(0, 0, 512, 512);
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
    const v = 30 + Math.floor(rand(22));
    g.fillStyle = `rgb(${v},${v + 4},${v + 10})`; g.fillRect(x * 128 + 3, y * 128 + 3, 122, 122);
    if (rand() < 0.3) { g.fillStyle = '#12161a'; for (let i = 0; i < 5; i++) g.fillRect(x * 128 + 24, y * 128 + 30 + i * 14, 80, 5); }
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}

const NOISE = `
  float hash3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float vnoise(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash3(i), hash3(i + vec3(1,0,0)), f.x), mix(hash3(i + vec3(0,1,0)), hash3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash3(i + vec3(0,0,1)), hash3(i + vec3(1,0,1)), f.x), mix(hash3(i + vec3(0,1,1)), hash3(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }`;

// ───────────────────────────── world ─────────────────────────────
const SUN = new THREE.Vector3(-0.55, 0.72, 0.42).normalize();

// star field + nebula
const sky = new THREE.Mesh(new THREE.SphereGeometry(1800, 48, 32), new THREE.ShaderMaterial({
  side: THREE.BackSide, depthWrite: false, fog: false,
  vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `varying vec3 vDir; ${NOISE}
    void main(){
      vec3 d = normalize(vDir);
      float n = fbm(d * 2.6 + 3.0), n2 = fbm(d * 5.0 - 11.0);
      vec3 col = vec3(0.004, 0.009, 0.016);
      col += vec3(0.02, 0.10, 0.14) * pow(n, 3.0) * 1.6;
      col += vec3(0.16, 0.03, 0.12) * pow(n2, 4.0) * 1.3;
      vec3 g = floor(d * 420.0); float h = hash3(g);
      float st = step(0.997, h) * smoothstep(0.42, 0.0, length(fract(d * 420.0) - 0.5));
      col += st * mix(vec3(0.7, 0.85, 1.0), vec3(1.0, 0.8, 0.6), hash3(g + 5.0)) * (0.5 + 3.5 * hash3(g + 9.0));
      gl_FragColor = vec4(col, 1.0);
    }`,
}));
scene.add(sky);

// gas giant below the platform
const planet = new THREE.Mesh(new THREE.SphereGeometry(620, 96, 64), new THREE.ShaderMaterial({
  fog: false, uniforms: { uSun: { value: SUN }, uTime: { value: 0 } },
  vertexShader: `varying vec3 vN, vP, vW; void main(){ vP = position / 620.0; vN = normalize(mat3(modelMatrix) * normal);
    vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
  fragmentShader: `uniform vec3 uSun; uniform float uTime; varying vec3 vN, vP, vW; ${NOISE}
    void main(){
      vec3 p = vP; float t = uTime * 0.004;
      float warp = fbm(p * 3.0 + vec3(t, 0.0, -t));
      float band = fbm(vec3(p.x * 1.6 + warp * 1.4 + t, p.y * 9.0 + warp * 2.2, p.z * 1.6));
      float storm = fbm(p * 14.0 + warp * 3.0);
      vec3 c = mix(vec3(0.42, 0.11, 0.035), vec3(1.0, 0.56, 0.22), smoothstep(0.3, 0.72, band));
      c = mix(c, vec3(1.0, 0.86, 0.66), smoothstep(0.58, 0.84, band) * 0.7);
      c = mix(c, vec3(0.2, 0.04, 0.05), smoothstep(0.6, 0.86, storm) * 0.5);
      vec3 n = normalize(vN), v = normalize(cameraPosition - vW);
      float nl = dot(n, uSun), day = smoothstep(-0.18, 0.5, nl);
      float fr = pow(1.0 - max(dot(n, v), 0.0), 2.6);
      vec3 col = c * day * 0.36 + c * 0.012;
      col += vec3(1.0, 0.45, 0.18) * pow(fr, 1.6) * (0.06 + day * 0.7);
      gl_FragColor = vec4(col, 1.0);
    }`,
}));
planet.position.set(140, -760, -260);
scene.add(planet);

const floorTex = makeFloorTextures(), panelTex = makePanelTexture();
const floorMat = new THREE.MeshStandardMaterial({
  map: floorTex.map, roughnessMap: floorTex.rough, metalnessMap: floorTex.rough, roughness: 1, metalness: 1,
  bumpMap: floorTex.bump, bumpScale: 1.4, envMapIntensity: 1.5,
});
const floor = new THREE.Mesh(new THREE.CircleGeometry(27, 128), floorMat);
floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);

const hullMat = new THREE.MeshStandardMaterial({ color: 0x9aa4b0, map: panelTex, metalness: 0.85, roughness: 0.42 });
const darkMat = new THREE.MeshStandardMaterial({ color: 0x14181d, metalness: 0.9, roughness: 0.5 });
const glowCy = new THREE.MeshBasicMaterial({ color: CY.clone().multiplyScalar(0.9), toneMapped: false });
const glowOr = new THREE.MeshBasicMaterial({ color: OR.clone().multiplyScalar(0.8), toneMapped: false });

// platform body, skirt and booms
{
  const hull = new THREE.Mesh(new THREE.CylinderGeometry(27, 25.2, 2.4, 96, 1, true), hullMat.clone());
  hull.material.map = panelTex.clone(); hull.material.map.repeat.set(40, 1);
  hull.position.y = -1.2; scene.add(hull);
  const keel = new THREE.Mesh(new THREE.CylinderGeometry(25.2, 9, 9, 48), darkMat); keel.position.y = -6.9; scene.add(keel);
  const trim = new THREE.Mesh(new THREE.TorusGeometry(27.02, 0.07, 8, 160), glowCy); trim.rotation.x = Math.PI / 2; trim.position.y = -0.25; scene.add(trim);
  const trim2 = new THREE.Mesh(new THREE.TorusGeometry(25.4, 0.1, 8, 120), glowOr); trim2.rotation.x = Math.PI / 2; trim2.position.y = -2.5; scene.add(trim2);
  for (let i = 0; i < 4; i++) {
    const an = i * Math.PI / 2 + Math.PI / 4, g = new THREE.Group();
    const boom = new THREE.Mesh(new THREE.BoxGeometry(16, 0.9, 1.6), darkMat); boom.position.x = 34; g.add(boom);
    const pod = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 3.4, 8), hullMat); pod.position.set(43, 0.2, 0); g.add(pod);
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 8), glowOr); lamp.position.set(43, 2.1, 0); g.add(lamp);
    const strip = new THREE.Mesh(new THREE.BoxGeometry(14, 0.08, 0.12), glowCy); strip.position.set(34, 0.5, 0); g.add(strip);
    g.rotation.y = an; g.position.y = -1.6; scene.add(g);
  }
  for (const [r, w, m] of [[9, 0.05, 0.35], [19, 0.05, 0.3], [25.9, 0.1, 0.9], [3.2, 0.05, 0.5]]) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(r - w, r + w, 160),
      new THREE.MeshBasicMaterial({ color: CY.clone().multiplyScalar(m), toneMapped: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.015; scene.add(ring);
  }
}

// cover pillars
const pillars = [];
{
  const geo = new THREE.CylinderGeometry(1.55, 1.75, 4.2, 6), capGeo = new THREE.CylinderGeometry(1.75, 1.55, 0.35, 6);
  const stripGeo = new THREE.BoxGeometry(0.1, 3.2, 0.06), baseGeo = new THREE.CylinderGeometry(2.15, 2.3, 0.3, 6);
  for (let i = 0; i < 6; i++) {
    const an = (i / 6) * Math.PI * 2 + Math.PI / 6, x = Math.cos(an) * 13, z = Math.sin(an) * 13;
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = -an;
    const body = new THREE.Mesh(geo, hullMat); body.position.y = 2.1; body.castShadow = body.receiveShadow = true; g.add(body);
    const cap = new THREE.Mesh(capGeo, darkMat); cap.position.y = 4.35; cap.castShadow = true; g.add(cap);
    const base = new THREE.Mesh(baseGeo, darkMat); base.position.y = 0.15; base.receiveShadow = true; g.add(base);
    for (let k = 0; k < 6; k++) {
      const s = new THREE.Mesh(stripGeo, k % 2 ? glowOr : glowCy), a2 = (k / 6) * Math.PI * 2 + Math.PI / 6;
      s.position.set(Math.cos(a2) * 1.47, 2.2, Math.sin(a2) * 1.47); s.rotation.y = -a2 + Math.PI / 2; g.add(s);
    }
    const halo = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.03, 6, 6), new THREE.MeshBasicMaterial({ color: CY.clone().multiplyScalar(0.45), toneMapped: false })); halo.rotation.x = Math.PI / 2; halo.position.y = 4.56; g.add(halo);
    scene.add(g); pillars.push({ x, z, r: 1.85 });
    if (i % 2 === 0) { const l = new THREE.PointLight(0x39d8ff, 26, 15, 2); l.position.set(x * 0.87, 3.2, z * 0.87); scene.add(l); }
  }
}

// energy barrier
const barrierMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, fog: false,
  uniforms: { uTime: { value: 0 }, uPulse: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform float uTime, uPulse; varying vec2 vUv;
    void main(){
      vec2 g = vec2(vUv.x * 220.0, vUv.y * 5.0 - uTime * 0.35);
      float line = smoothstep(0.92, 1.0, abs(fract(g.x) - 0.5) * 2.0) + smoothstep(0.9, 1.0, abs(fract(g.y) - 0.5) * 2.0);
      float scan = pow(0.5 + 0.5 * sin(vUv.x * 60.0 + uTime * 1.3), 8.0);
      float a = pow(1.0 - vUv.y, 2.2) * (0.16 + line * 0.5 + scan * 0.2) * (1.0 + uPulse * 3.0);
      gl_FragColor = vec4(vec3(0.2, 1.5, 2.0) * a, a);
    }`,
});
const barrier = new THREE.Mesh(new THREE.CylinderGeometry(26.6, 26.6, 3.6, 128, 1, true), barrierMat);
barrier.position.y = 1.8; scene.add(barrier);

// lights
scene.add(new THREE.HemisphereLight(0x27506e, 0xff7a30, 0.75));
const key = new THREE.DirectionalLight(0xcfe2ff, 2.7);
key.position.copy(SUN).multiplyScalar(60); key.castShadow = true;
key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.03;
Object.assign(key.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 10, far: 130 });
scene.add(key);
const rim = new THREE.DirectionalLight(0xff8a3c, 1.1); rim.position.set(30, 8, -40); scene.add(rim);

// floating dust
const dust = (() => {
  const n = 500, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const a = rand(6.283), r = Math.sqrt(rand()) * 30; pos.set([Math.cos(a) * r, rand(0.3, 9), Math.sin(a) * r], i * 3); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const m = new THREE.PointsMaterial({ color: 0x9fdcff, size: 0.07, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false });
  const p = new THREE.Points(g, m); scene.add(p); return p;
})();

// ───────────────────────────── FX: particles / rings / flashes ─────────────────────────────
const MAXP = 5000;
const P = { pos: new Float32Array(MAXP * 3), vel: new Float32Array(MAXP * 3), col: new Float32Array(MAXP * 3),
  size: new Float32Array(MAXP), life: new Float32Array(MAXP), max: new Float32Array(MAXP), grav: new Float32Array(MAXP),
  drag: new Float32Array(MAXP), alpha: new Float32Array(MAXP), next: 0 };
const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(P.pos, 3));
pGeo.setAttribute('aCol', new THREE.BufferAttribute(P.col, 3));
pGeo.setAttribute('aSize', new THREE.BufferAttribute(P.size, 1));
pGeo.setAttribute('aAlpha', new THREE.BufferAttribute(P.alpha, 1));
const pMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uScale: { value: 600 } },
  vertexShader: `attribute vec3 aCol; attribute float aSize, aAlpha; uniform float uScale; varying vec3 vC; varying float vA;
    void main(){ vC = aCol; vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = aSize * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,
  fragmentShader: `varying vec3 vC; varying float vA;
    void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(max(0.0, 1.0 - d), 1.7) * vA; gl_FragColor = vec4(vC * a, a); }`,
});
const pPoints = new THREE.Points(pGeo, pMat); pPoints.frustumCulled = false; scene.add(pPoints);

function emit(x, y, z, vx, vy, vz, col, size, life, grav = 0, drag = 1.5) {
  const i = P.next; P.next = (P.next + 1) % MAXP;
  P.pos.set([x, y, z], i * 3); P.vel.set([vx, vy, vz], i * 3); P.col.set([col.r, col.g, col.b], i * 3);
  P.size[i] = size; P.life[i] = P.max[i] = life; P.grav[i] = grav; P.drag[i] = drag;
}
function burst(x, y, z, col, n, speed, life, size, grav = 0, up = 0.3) {
  for (let i = 0; i < n; i++) {
    const a = rand(6.283), e = rand(-0.4, 1) * 1.2, s = speed * rand(0.25, 1), ce = Math.cos(e);
    emit(x, y, z, Math.cos(a) * ce * s, Math.sin(e) * s + up * speed, Math.sin(a) * ce * s, col, size * rand(0.5, 1.3), life * rand(0.5, 1.2), grav);
  }
}
function updateParticles(dt) {
  for (let i = 0; i < MAXP; i++) {
    if (P.life[i] <= 0) continue;
    P.life[i] -= dt; const j = i * 3;
    if (P.life[i] <= 0) { P.alpha[i] = 0; continue; }
    const k = Math.exp(-P.drag[i] * dt);
    P.vel[j] *= k; P.vel[j + 2] *= k; P.vel[j + 1] = P.vel[j + 1] * k - P.grav[i] * dt;
    P.pos[j] += P.vel[j] * dt; P.pos[j + 1] += P.vel[j + 1] * dt; P.pos[j + 2] += P.vel[j + 2] * dt;
    if (P.pos[j + 1] < 0.04 && P.grav[i] > 0) { P.pos[j + 1] = 0.04; P.vel[j + 1] *= -0.45; }
    P.alpha[i] = Math.min(1, (P.life[i] / P.max[i]) * 1.6);
  }
  pGeo.attributes.position.needsUpdate = pGeo.attributes.aAlpha.needsUpdate = true;
  pGeo.attributes.aCol.needsUpdate = pGeo.attributes.aSize.needsUpdate = true;
}

const rings = [];
{
  const geo = new THREE.RingGeometry(0.86, 1, 64);
  for (let i = 0; i < 28; i++) {
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false }));
    m.rotation.x = -Math.PI / 2; m.visible = false; scene.add(m); rings.push({ m, t: 0, d: 1, r0: 0, r1: 1 });
  }
}
let ringIx = 0;
function ring(x, z, col, r0, r1, d, y = 0.06) {
  const r = rings[ringIx = (ringIx + 1) % rings.length];
  r.m.position.set(x, y, z); r.m.material.color.copy(col); r.m.visible = true; r.t = 0; r.d = d; r.r0 = r0; r.r1 = r1;
}
const flashes = [];
for (let i = 0; i < 4; i++) { const l = new THREE.PointLight(0xffffff, 0, 22, 2); scene.add(l); flashes.push({ l, t: 0, d: 1, i0: 0 }); }
let flashIx = 0;
function flash(x, y, z, col, intensity, d) {
  const f = flashes[flashIx = (flashIx + 1) % flashes.length];
  f.l.position.set(x, y, z); f.l.color.set(col); f.i0 = intensity; f.t = 0; f.d = d;
}
function explosion(x, z, col, size) {
  const hot = new THREE.Color(3.5, 2.6, 1.6);
  burst(x, 1.1, z, hot, 16 * size, 7 * size, 0.35, 0.9 * size, 0, 0.1);
  burst(x, 1.1, z, col, 46 * size, 15 + 4 * size, 0.9, 0.34, 16, 0.25);
  burst(x, 1.0, z, new THREE.Color(0.35, 0.3, 0.3), 12 * size, 4, 1.3, 1.5 * size, -1.5, 0.2);
  ring(x, z, col, 0.3, 4.5 * size, 0.45); ring(x, z, hot, 0.1, 2.4 * size, 0.25, 0.9);
  flash(x, 1.6, z, col.getHex(), 300 * size, 0.4);
}

// ───────────────────────────── bullets (instanced) ─────────────────────────────
const dummy = new THREE.Object3D();
const pBulletGeo = new THREE.CapsuleGeometry(0.075, 1.25, 3, 8); pBulletGeo.rotateX(Math.PI / 2);
const pBulletMesh = new THREE.InstancedMesh(pBulletGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(0.6, 3.4, 4.2), toneMapped: false }), 256);
const eBulletMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.24, 12, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(4.5, 1.2, 0.2), toneMapped: false }), 160);
for (const m of [pBulletMesh, eBulletMesh]) { m.frustumCulled = false; m.count = 0; scene.add(m); }
let pBullets = [], eBullets = [];

// ───────────────────────────── player ─────────────────────────────
const armor = new THREE.MeshStandardMaterial({ color: 0xd8dee6, metalness: 0.75, roughness: 0.28 });
const armorDark = new THREE.MeshStandardMaterial({ color: 0x1b2027, metalness: 0.9, roughness: 0.38 });
const player = { x: 0, z: 0, vx: 0, vz: 0, yaw: 0, hp: 100, alive: true, fireT: 0, dashT: 0, dashCd: 0, dashDx: 0, dashDz: 1,
  invuln: 0, power: 0, recoil: 0, lean: 0, group: new THREE.Group(), side: 1 };
{
  const g = player.group, sh = (m) => { m.castShadow = true; return m; };
  const body = new THREE.Group(); g.add(body); player.body = body;
  const skirt = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.78, 0.5, 10), armorDark)); skirt.position.y = 0.55; body.add(skirt);
  const thr = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.07, 8, 24), glowCy); thr.rotation.x = Math.PI / 2; thr.position.y = 0.32; body.add(thr);
  const torso = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.5, 4, 12), armor)); torso.position.y = 1.2; torso.scale.set(1.15, 1, 0.85); body.add(torso);
  const chest = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.05), glowCy); chest.position.set(0, 1.3, 0.37); body.add(chest);
  const head = sh(new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 12), armorDark)); head.position.y = 1.86; head.scale.set(1, 0.9, 1.1); body.add(head);
  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.07, 0.1), glowCy); visor.position.set(0, 1.88, 0.22); body.add(visor);
  const pack = sh(new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.3), armorDark)); pack.position.set(0, 1.3, -0.42); body.add(pack);
  player.guns = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group(); arm.position.set(s * 0.68, 1.28, 0.05); body.add(arm);
    const pod = sh(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.36, 0.72), armor)); arm.add(pod);
    const barrel = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.095, 0.95, 10), armorDark)); barrel.rotation.x = Math.PI / 2; barrel.position.z = 0.75; arm.add(barrel);
    const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.1, 10), glowCy); tip.rotation.x = Math.PI / 2; tip.position.z = 1.2; arm.add(tip);
    const vent = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.4), glowOr); vent.position.set(0, 0.2, -0.05); arm.add(vent);
    player.guns.push(arm);
  }
  player.light = new THREE.PointLight(0x3fe0ff, 14, 9, 2); player.light.position.y = 0.5; g.add(player.light);
  scene.add(g);
}

// ───────────────────────────── enemies ─────────────────────────────
const TYPES = {
  swarm: { hp: 26, r: 0.7, speed: 6.4, score: 100, col: MG, dmg: 10, size: 1 },
  gunner: { hp: 46, r: 0.85, speed: 4.2, score: 200, col: OR, dmg: 12, size: 1.25 },
  brute: { hp: 300, r: 1.65, speed: 2.7, score: 800, col: new THREE.Color(3.4, 0.35, 0.2), dmg: 30, size: 2.4 },
};
const eGeo = {
  oct: new THREE.OctahedronGeometry(0.62, 0), blade: new THREE.ConeGeometry(0.16, 0.95, 4), core: new THREE.SphereGeometry(0.26, 12, 10),
  ball: new THREE.IcosahedronGeometry(0.72, 1), torus: new THREE.TorusGeometry(1.0, 0.07, 8, 28), barrel: new THREE.CylinderGeometry(0.11, 0.15, 0.9, 8),
  shell: new THREE.IcosahedronGeometry(1.5, 0), inner: new THREE.IcosahedronGeometry(1.38, 1), plate: new THREE.BoxGeometry(0.75, 1.15, 1.25),
};
const enemyArmor = new THREE.MeshStandardMaterial({ color: 0x2a2d34, metalness: 0.9, roughness: 0.32, flatShading: true });
const pool = { swarm: [], gunner: [], brute: [] };
function buildEnemy(type) {
  const g = new THREE.Group(), T = TYPES[type];
  const mat = enemyArmor.clone(), glow = new THREE.MeshBasicMaterial({ color: T.col.clone(), toneMapped: false });
  const sh = (m) => { m.castShadow = true; return m; };
  let spin = null;
  if (type === 'swarm') {
    const b = sh(new THREE.Mesh(eGeo.oct, mat)); b.scale.set(1, 0.6, 1.25); g.add(b);
    const c = new THREE.Mesh(eGeo.core, glow); c.scale.setScalar(0.85); c.position.z = 0.32; g.add(c);
    spin = new THREE.Group(); g.add(spin);
    for (let i = 0; i < 3; i++) { const bl = sh(new THREE.Mesh(eGeo.blade, mat)); const a = i * 2.094; bl.position.set(Math.cos(a) * 0.82, 0, Math.sin(a) * 0.82); bl.rotation.set(Math.PI / 2, 0, -a + Math.PI / 2, 'YXZ'); bl.rotation.y = -a; spin.add(bl); }
    g.position.y = 1.0;
  } else if (type === 'gunner') {
    g.add(sh(new THREE.Mesh(eGeo.ball, mat)));
    const eye = new THREE.Mesh(eGeo.core, glow); eye.position.z = 0.56; g.add(eye);
    const brl = sh(new THREE.Mesh(eGeo.barrel, mat)); brl.rotation.x = Math.PI / 2; brl.position.set(0, -0.38, 0.72); g.add(brl);
    spin = new THREE.Mesh(eGeo.torus, glow); spin.rotation.x = Math.PI / 2; g.add(spin);
    g.position.y = 1.5;
  } else {
    g.add(new THREE.Mesh(eGeo.inner, glow));
    const shell = sh(new THREE.Mesh(eGeo.shell, mat)); shell.scale.setScalar(1.0); g.add(shell);
    for (const s of [-1, 1]) { const p = sh(new THREE.Mesh(eGeo.plate, mat)); p.position.set(s * 1.55, 0.2, 0); p.rotation.z = s * -0.3; g.add(p); }
    spin = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.06, 6, 40), glow); spin.rotation.x = Math.PI / 2; spin.position.y = -1.0; g.add(spin);
    g.position.y = 1.9;
  }
  return { group: g, mat, glow, spin, baseY: g.position.y };
}
let enemies = [];
function spawnEnemy(type, x, z) {
  const T = TYPES[type], v = pool[type].pop() || buildEnemy(type);
  const hpMul = 1 + (game.wave - 1) * 0.07;
  const e = { type, T, v, x, z, vx: 0, vz: 0, hp: T.hp * hpMul, r: T.r, spawnT: 0.9, pop: 0, flash: 0, hitCd: 0, yaw: 0,
    fireT: rand(1, 2.4), state: 'walk', stT: 0, cd: rand(1, 2.5), side: rand() < 0.5 ? -1 : 1, ph: rand(6.28), cdx: 0, cdz: 0,
    speed: T.speed * (1 + Math.min(0.5, (game.wave - 1) * 0.035)) };
  v.group.visible = false; v.group.position.set(x, v.baseY, z); v.glow.color.copy(T.col); scene.add(v.group);
  ring(x, z, T.col, 2.6 * T.size, 0.2, 0.9);
  for (let i = 0; i < 14; i++) emit(x + rand(-0.5, 0.5), rand(0.1, 0.4), z + rand(-0.5, 0.5), 0, rand(3, 9), 0, T.col, 0.3, 0.9, 0, 0.5);
  enemies.push(e);
}
function killEnemy(e, i) {
  const T = e.T;
  explosion(e.x, e.z, T.col, T.size * 0.75);
  sfx.explode(T.size * 0.6); shake(0.22 * T.size);
  if (e.type === 'brute') { timeScaleHold = 0.12; ring(e.x, e.z, T.col, 1, 14, 0.8); }
  scene.remove(e.v.group); pool[e.type].push(e.v);
  enemies[i] = enemies[enemies.length - 1]; enemies.pop();
  game.combo++; game.comboT = 3.2; game.kills++;
  game.score += T.score * comboMult();
  const dropP = e.type === 'brute' ? 1 : e.type === 'gunner' ? 0.16 : 0.07;
  if (rand() < dropP) spawnPickup(e.x, e.z, rand() < (player.hp < 55 ? 0.75 : 0.45) ? 'hp' : 'pw');
}
const comboMult = () => Math.min(8, 1 + Math.floor(game.combo / 5));

// ───────────────────────────── pickups ─────────────────────────────
let pickups = [];
const pkGeo = new THREE.IcosahedronGeometry(0.34, 0), pkRing = new THREE.TorusGeometry(0.6, 0.03, 6, 24);
const PK = { hp: new THREE.Color(0.4, 3.2, 1.0), pw: new THREE.Color(3.4, 2.2, 0.3) };
function spawnPickup(x, z, kind) {
  const g = new THREE.Group(), m = new THREE.MeshBasicMaterial({ color: PK[kind], toneMapped: false });
  g.add(new THREE.Mesh(pkGeo, m)); const r = new THREE.Mesh(pkRing, m); r.rotation.x = Math.PI / 2; g.add(r);
  g.position.set(x, 1, z); scene.add(g); pickups.push({ x, z, kind, g, t: 0 });
}

// ───────────────────────────── game state ─────────────────────────────
const game = { state: 'title', wave: 0, score: 0, combo: 0, comboT: 0, kills: 0, queue: [], spawnT: 0, interT: 0, best: 0, time: 0 };
try { game.best = +localStorage.getItem('sinar-best') || 0; } catch (e) { /* storage unavailable */ }
let timeScale = 1, timeScaleHold = 0, trauma = 0, damageFx = 0, barrierPulse = 0;
const shake = (v) => { trauma = Math.min(1, trauma + v); };

function banner(text, sub = '') {
  const b = $('banner'); b.innerHTML = text + (sub ? `<small>${sub}</small>` : '');
  b.classList.remove('show'); void b.offsetWidth; b.classList.add('show');
}
function startWave() {
  game.wave++; const n = game.wave, q = [];
  for (let i = 0; i < 4 + n * 2; i++) q.push('swarm');
  for (let i = 0; i < (n >= 2 ? 1 + Math.floor(n / 2) : 0); i++) q.push('gunner');
  for (let i = 0; i < (n >= 3 ? Math.floor((n + 1) / 4) : 0); i++) q.push('brute');
  for (let i = q.length - 1; i > 0; i--) { const j = Math.floor(rand(i + 1)); [q[i], q[j]] = [q[j], q[i]]; }
  game.queue = q; game.spawnT = 1.2;
  banner(`GELOMBANG ${String(n).padStart(2, '0')}`, n % 4 === 3 ? 'PENGHANCUR TERDETEKSI' : 'MUSUH MENDEKAT');
  sfx.wave(); barrierPulse = 1;
}
function resetGame() {
  for (const e of enemies) { scene.remove(e.v.group); pool[e.type].push(e.v); }
  for (const p of pickups) scene.remove(p.g);
  enemies = []; pickups = []; pBullets = []; eBullets = [];
  Object.assign(game, { wave: 0, score: 0, combo: 0, comboT: 0, kills: 0, queue: [], interT: 1.2, time: 0 });
  Object.assign(player, { x: 0, z: 0, vx: 0, vz: 0, hp: 100, alive: true, fireT: 0, dashT: 0, dashCd: 0, invuln: 1.2, power: 0 });
  player.group.visible = true; timeScale = 1;
}
function setState(s) {
  game.state = s;
  document.body.classList.toggle('playing', s === 'play');
  $('title').classList.toggle('hidden', s !== 'title');
  $('pause').classList.toggle('hidden', s !== 'pause');
  $('over').classList.toggle('hidden', s !== 'over');
}
function startGame() { initAudio(); resetGame(); setState('play'); }
function gameOver() {
  player.alive = false; player.group.visible = false;
  explosion(player.x, player.z, CY, 2.2); ring(player.x, player.z, CY, 1, 18, 1.1);
  sfx.death(); shake(1); timeScale = 0.18;
  let rec = false;
  if (game.score > game.best) { game.best = game.score; rec = true; try { localStorage.setItem('sinar-best', game.best); } catch (e) { /* ignore */ } }
  $('finalScore').textContent = game.score.toLocaleString('id-ID'); $('finalWave').textContent = game.wave;
  $('bestScore').textContent = game.best.toLocaleString('id-ID') + (rec ? ' ★' : '');
  setTimeout(() => { if (!player.alive) setState('over'); }, 1500);
}
function hurtPlayer(d, fx, fz) {
  if (player.invuln > 0 || !player.alive) return;
  player.hp -= d; player.invuln = 0.4; damageFx = 1; shake(0.4 + d / 60); sfx.hurt();
  player.vx += fx * 9; player.vz += fz * 9;
  burst(player.x, 1.2, player.z, CY, 14, 9, 0.5, 0.3, 14);
  game.combo = 0;
  if (player.hp <= 0) { player.hp = 0; gameOver(); }
}

// ───────────────────────────── input ─────────────────────────────
const keys = new Set(), mouse = { x: 0, y: 0, nx: 0, ny: 0, down: false };
const touch = { on: false, L: null, R: null, mx: 0, mz: 0, ax: 0, az: 0, fire: false };
const aim = new THREE.Vector3(0, 0, 5);
let wantDash = false;
addEventListener('keydown', (e) => {
  const k = e.code; keys.add(k);
  if (k === 'Space' || k === 'ShiftLeft') { wantDash = true; e.preventDefault(); }
  if (k === 'KeyP' || k === 'Escape') { if (game.state === 'play') setState('pause'); else if (game.state === 'pause') setState('play'); }
  if (k === 'KeyM') toggleMute();
  if (k === 'Enter' && (game.state === 'title' || game.state === 'over')) startGame();
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => { keys.clear(); mouse.down = false; if (game.state === 'play') setState('pause'); });
addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.nx = (e.clientX / innerWidth) * 2 - 1; mouse.ny = -(e.clientY / innerHeight) * 2 + 1; });
canvas.addEventListener('mousedown', (e) => { if (e.button === 0) mouse.down = true; if (e.button === 2) wantDash = true; });
addEventListener('mouseup', () => { mouse.down = false; });
addEventListener('contextmenu', (e) => e.preventDefault());
$('startBtn').onclick = startGame; $('againBtn').onclick = startGame;
$('resumeBtn').onclick = () => setState('play');

const stickEl = { L: $('stickL'), R: $('stickR') };
function stickUpdate(side, t) {
  const s = touch[side], dx = t.clientX - s.ox, dz = t.clientY - s.oy, len = Math.hypot(dx, dz), m = 48;
  const k = len > m ? m / len : 1, nx = dx * k / m, nz = dz * k / m;
  stickEl[side].firstElementChild.style.transform = `translate(${dx * k}px,${dz * k}px)`;
  if (side === 'L') { touch.mx = nx; touch.mz = nz; }
  else { touch.fire = len > 10; if (len > 10) { touch.ax = dx / len; touch.az = dz / len; } }
}
canvas.addEventListener('touchstart', (e) => {
  e.preventDefault(); touch.on = true; document.body.classList.add('touch');
  for (const t of e.changedTouches) {
    const side = t.clientX < innerWidth / 2 ? 'L' : 'R';
    if (touch[side]) continue;
    touch[side] = { id: t.identifier, ox: t.clientX, oy: t.clientY };
    const el = stickEl[side]; el.style.left = t.clientX + 'px'; el.style.top = t.clientY + 'px'; el.classList.add('on');
    stickUpdate(side, t);
  }
}, { passive: false });
canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  for (const t of e.changedTouches) for (const side of ['L', 'R']) if (touch[side] && touch[side].id === t.identifier) stickUpdate(side, t);
}, { passive: false });
const touchEnd = (e) => {
  for (const t of e.changedTouches) for (const side of ['L', 'R']) if (touch[side] && touch[side].id === t.identifier) {
    touch[side] = null; stickEl[side].classList.remove('on');
    if (side === 'L') touch.mx = touch.mz = 0; else touch.fire = false;
  }
};
canvas.addEventListener('touchend', touchEnd); canvas.addEventListener('touchcancel', touchEnd);
$('dashBtn').addEventListener('touchstart', (e) => { e.preventDefault(); e.stopPropagation(); wantDash = true; }, { passive: false });

// ───────────────────────────── simulation ─────────────────────────────
function collideWorld(o, r) {
  for (const p of pillars) {
    const dx = o.x - p.x, dz = o.z - p.z, d = Math.hypot(dx, dz), m = p.r + r;
    if (d < m && d > 0.0001) { o.x = p.x + dx / d * m; o.z = p.z + dz / d * m; }
  }
  const d = Math.hypot(o.x, o.z), m = ARENA_R - r;
  if (d > m) { o.x *= m / d; o.z *= m / d; return true; }
  return false;
}
const hitsPillar = (x, z, r) => pillars.some((p) => (x - p.x) ** 2 + (z - p.z) ** 2 < (p.r + r) ** 2);
const raycaster = new THREE.Raycaster(), aimPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -1.2), tmpV = new THREE.Vector3();

function updatePlayer(dt) {
  // aim
  if (touch.on) {
    if (touch.fire) aim.set(player.x + touch.ax * 8, 0, player.z + touch.az * 8);
    else if (Math.hypot(touch.mx, touch.mz) > 0.2) aim.set(player.x + touch.mx * 8, 0, player.z + touch.mz * 8);
  } else {
    raycaster.setFromCamera(new THREE.Vector2(mouse.nx, mouse.ny), camera);
    if (raycaster.ray.intersectPlane(aimPlane, tmpV)) aim.copy(tmpV);
  }
  let ax = aim.x - player.x, az = aim.z - player.z; const al = Math.hypot(ax, az) || 1; ax /= al; az /= al;
  let dy = Math.atan2(ax, az) - player.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); player.yaw += dy * Math.min(1, dt * 22);

  // move
  let mx = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0) + touch.mx;
  let mz = (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0) - (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) + touch.mz;
  const ml = Math.hypot(mx, mz); if (ml > 1) { mx /= ml; mz /= ml; }
  player.dashCd -= dt; player.invuln -= dt; player.power -= dt;
  if (wantDash && player.dashCd <= 0) {
    player.dashT = 0.17; player.dashCd = 1.1; player.invuln = Math.max(player.invuln, 0.3);
    if (ml > 0.1) { player.dashDx = mx / ml; player.dashDz = mz / ml; } else { player.dashDx = ax; player.dashDz = az; }
    sfx.dash(); ring(player.x, player.z, CY, 0.4, 3, 0.3); shake(0.12);
  }
  wantDash = false;
  if (player.dashT > 0) {
    player.dashT -= dt; player.vx = player.dashDx * 34; player.vz = player.dashDz * 34;
    for (let i = 0; i < 4; i++) emit(player.x + rand(-0.4, 0.4), rand(0.4, 1.9), player.z + rand(-0.4, 0.4), -player.vx * 0.1, 0, -player.vz * 0.1, CY, 0.5, 0.35);
  } else {
    player.vx = damp(player.vx, mx * 9.2, 13, dt); player.vz = damp(player.vz, mz * 9.2, 13, dt);
  }
  player.x += player.vx * dt; player.z += player.vz * dt;
  if (collideWorld(player, 0.65)) barrierPulse = Math.max(barrierPulse, 0.25);
  const sp = Math.hypot(player.vx, player.vz);
  if (sp > 2 && rand() < dt * 40) emit(player.x + rand(-0.3, 0.3), 0.25, player.z + rand(-0.3, 0.3), -player.vx * 0.15, rand(0.5), -player.vz * 0.15, CY, 0.22, 0.4);

  // fire
  player.fireT -= dt;
  const firing = touch.on ? touch.fire : mouse.down;
  if (firing && player.fireT <= 0 && player.dashT <= 0) {
    const pw = player.power > 0; player.fireT = pw ? 0.075 : 0.11; player.side *= -1; player.recoil = 1;
    const sx = Math.cos(player.yaw) * 0.68 * player.side, sz = -Math.sin(player.yaw) * 0.68 * player.side;
    const ox = player.x + sx + ax * 1.2, oz = player.z + sz + az * 1.2;
    for (const off of pw ? [-0.14, 0, 0.14] : [0]) {
      const a = player.yaw + off + rand(-0.018, 0.018);
      pBullets.push({ x: ox, z: oz, dx: Math.sin(a), dz: Math.cos(a), life: 0.75, yaw: a });
    }
    flash(ox, 1.3, oz, 0x66eaff, 60, 0.07); sfx.shoot(pw);
    for (let i = 0; i < 4; i++) emit(ox, 1.28, oz, ax * rand(4, 16) + rand(-3, 3), rand(-1, 3), az * rand(4, 16) + rand(-3, 3), CY, 0.26, 0.14);
    trauma = Math.min(1, trauma + 0.035);
  }
  player.recoil = damp(player.recoil, 0, 20, dt);

  // pose
  const g = player.group; g.position.set(player.x, 0.12 + Math.sin(game.time * 3.2) * 0.06, player.z); g.rotation.y = player.yaw;
  const fwd = player.vx * ax + player.vz * az, sidev = player.vx * az - player.vz * ax;
  player.body.rotation.x = damp(player.body.rotation.x, fwd * 0.03, 10, dt);
  player.body.rotation.z = damp(player.body.rotation.z, sidev * 0.03, 10, dt);
  player.guns.forEach((gun, i) => { gun.position.z = 0.05 - ((i === 0) === (player.side < 0) ? player.recoil * 0.2 : 0); });
  g.visible = player.invuln > 0 && player.dashT <= 0 ? Math.sin(game.time * 60) > -0.3 : true;
}

function updateBullets(dt) {
  for (let i = pBullets.length - 1; i >= 0; i--) {
    const b = pBullets[i]; let dead = false;
    for (let s = 0; s < 2 && !dead; s++) {                        // two sub-steps: fast bullets must not tunnel
      b.x += b.dx * 31 * dt; b.z += b.dz * 31 * dt;
      for (let j = enemies.length - 1; j >= 0; j--) {
        const e = enemies[j]; if (e.spawnT > 0) continue;
        const rr = e.r + 0.22;
        if ((b.x - e.x) ** 2 + (b.z - e.z) ** 2 < rr * rr) {
          e.hp -= 13; e.flash = 1; e.vx += b.dx * (3.2 / e.T.size); e.vz += b.dz * (3.2 / e.T.size);
          burst(b.x, 1.2, b.z, e.T.col, 6, 9, 0.3, 0.24, 12); sfx.hit(); crossHit = 0.09; dead = true;
          if (e.hp <= 0) killEnemy(e, j);
          break;
        }
      }
      if (!dead && (hitsPillar(b.x, b.z, 0.05) || Math.hypot(b.x, b.z) > ARENA_R + 0.4)) {
        dead = true; burst(b.x, 1.2, b.z, CY, 7, 8, 0.28, 0.2, 10);
        if (Math.hypot(b.x, b.z) > ARENA_R) barrierPulse = Math.max(barrierPulse, 0.15);
      }
    }
    b.life -= dt;
    if (dead || b.life <= 0) { pBullets[i] = pBullets[pBullets.length - 1]; pBullets.pop(); }
  }
  for (let i = eBullets.length - 1; i >= 0; i--) {
    const b = eBullets[i]; b.x += b.dx * dt; b.z += b.dz * dt; b.life -= dt;
    let dead = b.life <= 0 || hitsPillar(b.x, b.z, 0.1) || Math.hypot(b.x, b.z) > ARENA_R + 0.3;
    if (!dead && player.alive && (b.x - player.x) ** 2 + (b.z - player.z) ** 2 < 0.72) {
      if (player.invuln <= 0) { const l = Math.hypot(b.dx, b.dz); hurtPlayer(12, b.dx / l * 0.5, b.dz / l * 0.5); dead = true; }
    }
    if (rand() < dt * 30) emit(b.x, 1.2, b.z, 0, 0, 0, OR, 0.3, 0.25);
    if (dead) { burst(b.x, 1.2, b.z, OR, 6, 6, 0.3, 0.22, 8); eBullets[i] = eBullets[eBullets.length - 1]; eBullets.pop(); }
  }
}

function updateEnemies(dt) {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i], v = e.v;
    if (e.spawnT > 0) {
      e.spawnT -= dt;
      if (e.spawnT <= 0) { v.group.visible = true; e.pop = 0; burst(e.x, v.baseY, e.z, e.T.col, 22, 9, 0.45, 0.3); flash(e.x, 1.5, e.z, e.T.col.getHex(), 60, 0.25); }
      continue;
    }
    const tx = player.alive ? player.x : 0, tz = player.alive ? player.z : 0;
    let dx = tx - e.x, dz = tz - e.z; const dist = Math.hypot(dx, dz) || 1; dx /= dist; dz /= dist;
    let wx = 0, wz = 0, sp = e.speed;
    if (e.type === 'swarm') {
      const w = Math.sin(game.time * 3 + e.ph) * 0.55; wx = dx - dz * w; wz = dz + dx * w;
    } else if (e.type === 'gunner') {
      const k = dist > 14 ? 1 : dist < 9 ? -1 : 0; wx = dx * k - dz * e.side * 0.8; wz = dz * k + dx * e.side * 0.8;
      e.fireT -= dt;
      if (e.fireT <= 0 && dist < 24 && player.alive) {
        e.fireT = rand(1.5, 2.4);
        const lead = dist / 15 * 0.55, lx = tx + player.vx * lead - e.x, lz = tz + player.vz * lead - e.z, ll = Math.hypot(lx, lz) || 1;
        eBullets.push({ x: e.x + lx / ll, z: e.z + lz / ll, dx: lx / ll * 15, dz: lz / ll * 15, life: 3 });
        flash(e.x, 1.5, e.z, 0xff8a3c, 40, 0.12); sfx.enemyShot(); e.flash = 0.5;
      }
      if (rand() < dt * 0.25) e.side *= -1;
    } else {
      e.cd -= dt; e.stT -= dt;
      if (e.state === 'walk') { wx = dx; wz = dz; if (dist < 12 && e.cd <= 0 && player.alive) { e.state = 'wind'; e.stT = 0.75; e.cdx = dx; e.cdz = dz; sfx.charge(); } }
      else if (e.state === 'wind') {
        sp = 0; e.cdx = dx; e.cdz = dz; e.flash = Math.max(e.flash, 0.5 + 0.5 * Math.sin(game.time * 40));
        emit(e.x + rand(-3, 3), rand(0.2, 3), e.z + rand(-3, 3), 0, 0, 0, e.T.col, 0.3, 0.3);
        if (e.stT <= 0) { e.state = 'charge'; e.stT = 0.85; }
      } else {
        wx = e.cdx; wz = e.cdz; sp = 19;
        for (let k = 0; k < 2; k++) emit(e.x + rand(-1, 1), rand(0.1, 0.5), e.z + rand(-1, 1), rand(-2, 2), rand(1, 4), rand(-2, 2), e.T.col, 0.4, 0.5, 6);
        if (e.stT <= 0) { e.state = 'walk'; e.cd = 2.6; }
      }
    }
    const wl = Math.hypot(wx, wz) || 1;
    const acc = e.state === 'charge' ? 30 : 5;
    e.vx = damp(e.vx, wx / wl * sp, acc, dt); e.vz = damp(e.vz, wz / wl * sp, acc, dt);
    for (let j = 0; j < enemies.length; j++) {                    // separation
      const o = enemies[j]; if (o === e || o.spawnT > 0) continue;
      const ox = e.x - o.x, oz = e.z - o.z, od = Math.hypot(ox, oz), m = e.r + o.r + 0.25;
      if (od < m && od > 0.001) { const f = (m - od) / m * 14 * dt * (o.T.size / e.T.size); e.x += ox / od * f; e.z += oz / od * f; }
    }
    e.x += e.vx * dt; e.z += e.vz * dt;
    if (collideWorld(e, e.r) && e.state === 'charge') { e.state = 'walk'; e.cd = 2.6; shake(0.3); ring(e.x, e.z, e.T.col, 1, 6, 0.4); }
    e.hitCd -= dt;
    if (player.alive && dist < e.r + 0.7 && e.hitCd <= 0) { e.hitCd = 0.7; hurtPlayer(e.T.dmg * (e.state === 'charge' ? 1.3 : 1), dx, dz); }

    // visuals
    e.pop = Math.min(1, e.pop + dt * 5); e.flash = Math.max(0, e.flash - dt * 7);
    const s = 1 - Math.pow(1 - e.pop, 3) + e.flash * 0.06;
    v.group.scale.setScalar(s);
    v.group.position.set(e.x, v.baseY + Math.sin(game.time * 2.4 + e.ph) * 0.14, e.z);
    let ty = Math.atan2(dx, dz) - e.yaw; ty = Math.atan2(Math.sin(ty), Math.cos(ty)); e.yaw += ty * Math.min(1, dt * 8);
    v.group.rotation.y = e.yaw; v.group.rotation.x = Math.hypot(e.vx, e.vz) * 0.02;
    if (e.type === 'swarm') v.spin.rotation.y += dt * 14; else v.spin.rotation.z += dt * (e.type === 'gunner' ? 2.5 : 1.2);
    v.mat.emissive.setScalar(e.flash * 1.8);
    v.glow.color.copy(e.T.col).multiplyScalar(1 + e.flash * 1.5);
  }
}

function updateGame(dt) {
  game.time += dt;
  if (player.alive) updatePlayer(dt);
  updateBullets(dt); updateEnemies(dt);
  // waves
  if (player.alive) {
    if (game.queue.length) {
      game.spawnT -= dt;
      if (game.spawnT <= 0 && enemies.length < Math.min(38, 12 + game.wave * 2)) {
        game.spawnT = rand(0.25, 0.7) * Math.max(0.5, 1 - game.wave * 0.04);
        for (let tries = 0; tries < 20; tries++) {
          const a = rand(6.283), r = rand(8, 23.5), x = Math.cos(a) * r, z = Math.sin(a) * r;
          if (Math.hypot(x - player.x, z - player.z) < 9 || hitsPillar(x, z, 2)) continue;
          spawnEnemy(game.queue.pop(), x, z); break;
        }
      }
    } else if (!enemies.length) {
      if (game.interT <= 0) {
        game.interT = game.wave ? 2.6 : 0.01;
        if (game.wave) { banner('ARENA BERSIH', '+15 INTEGRITAS'); player.hp = Math.min(100, player.hp + 15); game.score += 250 * game.wave; }
      }
      game.interT -= dt; if (game.interT <= 0) startWave();
    }
  }
  game.comboT -= dt; if (game.comboT <= 0) game.combo = 0;
  // pickups
  for (let i = pickups.length - 1; i >= 0; i--) {
    const p = pickups[i]; p.t += dt; p.g.rotation.y += dt * 2.5; p.g.position.y = 1 + Math.sin(p.t * 3) * 0.2;
    const d = Math.hypot(p.x - player.x, p.z - player.z);
    if (player.alive && d < 4.5) { p.x += (player.x - p.x) / d * dt * 11; p.z += (player.z - p.z) / d * dt * 11; p.g.position.x = p.x; p.g.position.z = p.z; }
    if ((player.alive && d < 1.1) || p.t > 14) {
      if (p.t <= 14) {
        if (p.kind === 'hp') player.hp = Math.min(100, player.hp + 25); else player.power = 8;
        burst(p.x, 1.2, p.z, PK[p.kind], 26, 8, 0.6, 0.3); ring(p.x, p.z, PK[p.kind], 0.3, 3, 0.4); sfx.pickup();
      }
      scene.remove(p.g); pickups[i] = pickups[pickups.length - 1]; pickups.pop();
    }
  }
}

// ───────────────────────────── per-frame visuals ─────────────────────────────
function syncInstances() {
  pBulletMesh.count = Math.min(pBullets.length, 256);
  for (let i = 0; i < pBulletMesh.count; i++) {
    const b = pBullets[i]; dummy.position.set(b.x, 1.28, b.z); dummy.rotation.set(0, b.yaw, 0); dummy.scale.setScalar(1); dummy.updateMatrix();
    pBulletMesh.setMatrixAt(i, dummy.matrix);
  }
  pBulletMesh.instanceMatrix.needsUpdate = true;
  eBulletMesh.count = Math.min(eBullets.length, 160);
  for (let i = 0; i < eBulletMesh.count; i++) {
    const b = eBullets[i]; dummy.position.set(b.x, 1.2, b.z); dummy.rotation.set(0, 0, 0); dummy.scale.setScalar(1 + Math.sin(game.time * 30 + i) * 0.15); dummy.updateMatrix();
    eBulletMesh.setMatrixAt(i, dummy.matrix);
  }
  eBulletMesh.instanceMatrix.needsUpdate = true;
}
function updateFx(dt) {
  updateParticles(dt);
  for (const r of rings) {
    if (!r.m.visible) continue; r.t += dt; const k = r.t / r.d;
    if (k >= 1) { r.m.visible = false; continue; }
    const e = 1 - Math.pow(1 - k, 3); r.m.scale.setScalar(lerp(r.r0, r.r1, e)); r.m.material.opacity = (1 - k) * 0.9;
  }
  for (const f of flashes) { f.t += dt; f.l.intensity = f.i0 * Math.max(0, 1 - f.t / f.d) ** 2; }
}

const camPos = new THREE.Vector3(0, 9, 36), camLook = new THREE.Vector3(0, 1.5, 0), wantPos = new THREE.Vector3(), wantLook = new THREE.Vector3();
let titleAngle = 0.6, crossHit = 0, camZoom = 1;
function updateCamera(rdt) {
  if (game.state === 'title') {
    titleAngle += rdt * 0.07;
    wantPos.set(Math.sin(titleAngle) * 31 * camZoom, 5.2, Math.cos(titleAngle) * 31 * camZoom); wantLook.set(0, 1.6, 0);
    camPos.lerp(wantPos, 1 - Math.exp(-2 * rdt)); camLook.lerp(wantLook, 1 - Math.exp(-2 * rdt));
  } else {
    const lx = player.x + (aim.x - player.x) * 0.16, lz = player.z + (aim.z - player.z) * 0.16;
    wantLook.set(lx * 0.88, 0.8, lz * 0.88);
    wantPos.set(wantLook.x, 23 * camZoom, wantLook.z + 14.5 * camZoom);
    const k = 1 - Math.exp(-(game.time < 2 ? 2.2 : 5.5) * rdt);
    camPos.lerp(wantPos, k); camLook.lerp(wantLook, k);
  }
  const s = trauma * trauma;
  camera.position.set(camPos.x + (Math.random() - 0.5) * s * 1.5, camPos.y + (Math.random() - 0.5) * s * 1.1, camPos.z + (Math.random() - 0.5) * s * 1.5);
  camera.lookAt(camLook);
  camera.rotation.z += (Math.random() - 0.5) * s * 0.05;
  trauma = Math.max(0, trauma - rdt * 1.7);
}

const hud = { hp: -1, score: -1, wave: -1, combo: -1, foes: -1, pw: null };
function updateHud() {
  const hp = Math.ceil(player.hp);
  if (hp !== hud.hp) { hud.hp = hp; $('hpNum').firstChild.nodeValue = hp; $('hpFill').style.transform = `scaleX(${hp / 100})`; $('hpFill').classList.toggle('low', hp <= 30); }
  $('dashFill').style.transform = `scaleX(${clamp(1 - player.dashCd / 1.1, 0, 1)})`;
  if (game.score !== hud.score) { hud.score = game.score; $('score').textContent = game.score.toLocaleString('id-ID'); }
  if (game.wave !== hud.wave) { hud.wave = game.wave; $('wave').textContent = String(Math.max(1, game.wave)).padStart(2, '0'); }
  const foes = enemies.length + game.queue.length;
  if (foes !== hud.foes) { hud.foes = foes; $('foes').textContent = foes ? `${foes} MUSUH TERSISA` : ''; }
  const m = comboMult();
  if (m !== hud.combo) { hud.combo = m; $('combo').textContent = `KOMBO x${m}`; $('combo').style.opacity = m > 1 ? 1 : 0; }
  const pw = player.power > 0; if (pw !== hud.pw) { hud.pw = pw; $('power').style.opacity = pw ? 1 : 0; }
  const c = $('cross'); c.style.transform = `translate(${mouse.x}px,${mouse.y}px)`; c.classList.toggle('hit', crossHit > 0);
}

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setPixelRatio(pixelRatio); renderer.setSize(w, h, false);
  composer.setPixelRatio(pixelRatio); composer.setSize(w, h);
  camera.aspect = w / h; camZoom = camera.aspect < 1.15 ? 1 + (1.15 - camera.aspect) * 0.75 : 1;
  camera.updateProjectionMatrix();
  pMat.uniforms.uScale.value = h * pixelRatio * 0.85;
}
addEventListener('resize', resize); resize();

let last = performance.now(), slowT = 0, fadeIn = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const rdt = Math.min(0.05, (now - last) / 1000); last = now;
  if (game.state === 'pause') { composer.render(); return; }
  // adaptive resolution: drop pixel ratio if the device can't hold ~40 fps
  if (rdt > 1 / 38) slowT += rdt; else slowT = Math.max(0, slowT - rdt * 0.5);
  if (slowT > 2.5 && pixelRatio > 0.75) { pixelRatio = Math.max(0.75, pixelRatio - 0.25); slowT = 0; resize(); }

  if (timeScaleHold > 0) { timeScaleHold -= rdt; timeScale = 0.15; }
  else timeScale = damp(timeScale, player.alive ? 1 : 0.35, player.alive ? 6 : 0.6, rdt);
  const dt = rdt * timeScale;
  if (game.state === 'play' || game.state === 'over') updateGame(dt);
  else { game.time += dt; player.group.position.y = 0.12 + Math.sin(game.time * 3.2) * 0.06; player.group.rotation.y += dt * 0.25; }
  updateFx(dt); syncInstances(); updateCamera(rdt);

  damageFx = Math.max(0, damageFx - rdt * 1.8); crossHit -= rdt; barrierPulse = Math.max(0, barrierPulse - rdt * 1.5);
  fadeIn = Math.min(1, fadeIn + rdt * 0.8);
  const lowHp = player.alive && player.hp <= 30 && game.state === 'play' ? 0.18 + 0.12 * Math.sin(now * 0.006) : 0;
  gradePass.uniforms.uTime.value = now * 0.001; gradePass.uniforms.uDamage.value = Math.max(damageFx, lowHp); gradePass.uniforms.uFade.value = fadeIn;
  barrierMat.uniforms.uTime.value = now * 0.001; barrierMat.uniforms.uPulse.value = barrierPulse;
  planet.material.uniforms.uTime.value = now * 0.001; planet.rotation.y = now * 0.000004;
  dust.rotation.y = now * 0.00002;
  player.light.intensity = 14 + (player.power > 0 ? 14 : 0);
  setIntensity(game.state === 'play' ? clamp(0.35 + enemies.length / 22, 0, 1) : 0); tickMusic();
  if (game.state !== 'title') updateHud();
  composer.render();
}
setState('title');
requestAnimationFrame(frame);
window.__game = { game, player, get enemies() { return enemies; }, start: startGame };
