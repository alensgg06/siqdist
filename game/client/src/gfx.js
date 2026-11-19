// Peningkatan render: peta tonjolan dari tekstur, pantulan langit, cahaya tepi karakter, dan gradasi warna.
// Semuanya dihitung di perangkat dari aset prosedural yang sudah ada; tidak ada berkas baru.
import * as THREE from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// ---- peta tonjolan (normal map) dari terang-gelap sebuah gambar ----
const bumped = [];
function normalFrom(src, strength) {
  const s = Math.min(1024, src.width);
  let read = src;
  if (!src.getContext || src.width !== s) { read = document.createElement('canvas'); read.width = read.height = s; read.getContext('2d').drawImage(src, 0, 0, s, s); }
  const px = read.getContext('2d').getImageData(0, 0, s, s).data;
  const h = new Float32Array(s * s);
  for (let i = 0; i < s * s; i++) h[i] = (px[i * 4] * 0.3 + px[i * 4 + 1] * 0.59 + px[i * 4 + 2] * 0.11) / 255;
  const c = document.createElement('canvas'); c.width = c.height = s;
  const g = c.getContext('2d'), out = g.createImageData(s, s);
  const at = (x, y) => h[((y + s) % s) * s + ((x + s) % s)]; // membungkus tepi: ubin tetap menyambung
  for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
    const dx = (at(x + 1, y) - at(x - 1, y)) * strength, dy = (at(x, y + 1) - at(x, y - 1)) * strength;
    const l = 1 / Math.hypot(dx, dy, 1), i = (y * s + x) * 4;
    out.data[i] = (-dx * l * 0.5 + 0.5) * 255; out.data[i + 1] = (dy * l * 0.5 + 0.5) * 255; out.data[i + 2] = (l * 0.5 + 0.5) * 255; out.data[i + 3] = 255;
  }
  g.putImageData(out, 0, 0);
  return new THREE.CanvasTexture(c);
}
const like = (t, map) => { t.wrapS = map.wrapS; t.wrapT = map.wrapT; t.repeat.copy(map.repeat); t.anisotropy = map.anisotropy; return t; };
// slot: nama tekstur yang bisa diganti versi resolusi tinggi dari server (lihat loadHd)
const slots = {}, hdTex = {};
export function bump(mat, strength = 2, scale = 1, slot = '') {
  const b = { mat, tex: like(normalFrom(mat.map.image, strength), mat.map), strength };
  mat.normalScale = new THREE.Vector2(scale, scale);
  bumped.push(b);
  if (slot) { (slots[slot] ||= []).push(b); if (hdTex[slot]) applyHd(slot); }
  return mat;
}
function applyHd(slot) {
  const hd = hdTex[slot];
  for (const b of slots[slot] || []) {
    if (b.hd) continue;
    b.hd = true;
    const on = b.mat.normalMap === b.tex;
    // tekstur buatan model lebih halus daripada tekstur bawaan, jadi tonjolannya diperkuat sedikit
    hd.normal ||= normalFrom(hd.image, b.strength * 1.6);
    const map = like(new THREE.Texture(hd.image), b.mat.map); map.colorSpace = THREE.SRGBColorSpace; map.needsUpdate = true;
    b.tex = like(hd.normal.clone(), b.mat.map); b.tex.needsUpdate = true;
    b.mat.map = map; if (on) b.mat.normalMap = b.tex;
    b.mat.needsUpdate = true;
  }
}
// Mengambil tekstur resolusi tinggi bila server punya (dibuat tools/gfx di GPU). Tanpa itu, tekstur bawaan tetap dipakai.
let hdAsked = false;
export async function loadHd() {
  if (hdAsked) return 0;
  hdAsked = true;
  let n = 0;
  try {
    const r = await fetch('/assets/manifest.json'); if (!r.ok) return 0;
    const m = await r.json();
    await Promise.all(Object.entries(m.tex || {}).map(async ([slot, file]) => {
      if (!/^[a-z0-9_-]{1,40}\.webp$/.test(file)) return;
      const img = new Image(); img.src = `/assets/${file}?v=${m.v || 0}`;
      try { await img.decode(); } catch { return; }
      hdTex[slot] = { image: img, normal: null }; applyHd(slot); n++;
    }));
  } catch { /* tanpa aset: tekstur bawaan */ }
  return n;
}
// kualitas rendah: tanpa peta tonjolan
let detailOn = null;
export function setDetail(on) {
  if (on === detailOn && bumped.every((b) => b.done)) return;
  detailOn = on;
  for (const b of bumped) { b.done = true; if ((b.mat.normalMap === b.tex) !== on) { b.mat.normalMap = on ? b.tex : null; b.mat.needsUpdate = true; } }
}

// ---- cahaya lantai yang dipanggang (tools/bake.js): gelap-sudut di semua tingkat, bayangan diam di tingkat rendah ----
const white = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1); white.needsUpdate = true;
const bakeU = []; // uniform tiap lantai, untuk mengganti kekuatan saat kualitas berubah
export function bakeFloor(mat, url, ext, shade = 0.5) {
  const u = { bakeMap: { value: white }, bakeExt: { value: ext }, bakeAo: { value: 0.75 }, bakeSun: { value: 0 }, bakeShade: { value: shade } };
  bakeU.push(u);
  new THREE.TextureLoader().load(url, (t) => { t.flipY = false; t.colorSpace = THREE.NoColorSpace; t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; t.generateMipmaps = true; u.bakeMap.value = t; });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vBakeXZ;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBakeXZ = (modelMatrix * vec4(position, 1.0)).xz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec2 vBakeXZ; uniform sampler2D bakeMap; uniform float bakeExt, bakeAo, bakeSun, bakeShade;')
      .replace('#include <map_fragment>', `#include <map_fragment>
        { vec2 buv = vBakeXZ / (2.0 * bakeExt) + 0.5;
          if (buv.x > 0.0 && buv.x < 1.0 && buv.y > 0.0 && buv.y < 1.0) {
            vec4 bk = texture2D(bakeMap, buv);
            diffuseColor.rgb *= mix(1.0, bk.r, bakeAo) * mix(1.0, mix(bakeShade, 1.0, bk.g), bakeSun);
          } }`);
  };
  mat.customProgramCacheKey = () => 'bake';
  return mat;
}
// bayangan langsung (shadow map) aktif: bayangan panggangan dimatikan supaya tidak dobel
export function setBakedSun(on) { for (const u of bakeU) u.bakeSun.value = on ? 1 : 0; }

// ---- pantulan langit: peta lingkungan kecil dari kubah langit tiap peta ----
export function skyEnv(renderer, sky) {
  const s = new THREE.Scene(), m = sky.clone(); m.scale.setScalar(0.1); s.add(m);
  const pm = new THREE.PMREMGenerator(renderer);
  const tex = pm.fromScene(s, 0.04, 0.1, 200).texture;
  pm.dispose();
  return tex;
}

// ---- cahaya tepi: garis terang tipis di siluet karakter supaya terbaca di depan latar gelap ----
export function rim(mat, color = 0x8a86c8, power = 0.45) {
  const c = new THREE.Color(color);
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.rimColor = { value: c };
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 rimColor;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += rimColor * pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 3.0) * ${power.toFixed(2)};`);
  };
  mat.customProgramCacheKey = () => 'rim' + power;
  return mat;
}

// ---- gradasi warna: warna sedikit lebih pekat, kontras lembut, tepi layar meredup ----
export function gradePass() {
  return new ShaderPass({
    uniforms: { tDiffuse: { value: null }, sat: { value: 1.14 }, con: { value: 1.04 }, vig: { value: 0.3 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: `uniform sampler2D tDiffuse; uniform float sat, con, vig; varying vec2 vUv;
      void main(){ vec4 t=texture2D(tDiffuse,vUv); vec3 c=t.rgb;
        float l=dot(c,vec3(0.2126,0.7152,0.0722));
        c=mix(vec3(l),c,sat);
        c=max(vec3(0.0),(c-0.18)*con+0.18);
        c*=mix(vec3(0.94,0.97,1.06),vec3(1.05,1.0,0.94),smoothstep(0.0,0.7,l)); // bayangan sejuk, sorotan hangat
        vec2 d=vUv-0.5; c*=1.0-vig*smoothstep(0.25,0.85,dot(d,d)*2.2);
        gl_FragColor=vec4(c,t.a); }`,
  });
}
