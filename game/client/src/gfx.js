// Peningkatan render: peta tonjolan dari tekstur, pantulan langit, cahaya tepi karakter, dan gradasi warna.
// Semuanya dihitung di perangkat dari aset prosedural yang sudah ada; tidak ada berkas baru.
import * as THREE from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// ---- peta tonjolan (normal map) dari terang-gelap sebuah tekstur kanvas ----
const bumped = [];
export function bump(mat, strength = 2, scale = 1) {
  const src = mat.map.image, s = src.width;
  const px = src.getContext('2d').getImageData(0, 0, s, s).data;
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
  const t = new THREE.CanvasTexture(c);
  t.wrapS = mat.map.wrapS; t.wrapT = mat.map.wrapT; t.repeat.copy(mat.map.repeat); t.anisotropy = mat.map.anisotropy;
  mat.normalScale = new THREE.Vector2(scale, scale);
  bumped.push({ mat, tex: t });
  return mat;
}
// kualitas rendah: tanpa peta tonjolan
let detailOn = null;
export function setDetail(on) {
  if (on === detailOn && bumped.every((b) => b.done)) return;
  detailOn = on;
  for (const b of bumped) { b.done = true; if ((b.mat.normalMap === b.tex) !== on) { b.mat.normalMap = on ? b.tex : null; b.mat.needsUpdate = true; } }
}

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
