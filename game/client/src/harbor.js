// Peta kedua: Pelabuhan Bulan. Dermaga kayu di bawah bulan purnama, air gelap, lentera, mercusuar di kejauhan.
import * as THREE from 'three';
import { ARENA, MAPS } from '../../shared/config.js';
import { rng, canvasTex } from './world.js';

const MOON_DIR = new THREE.Vector3(0.55, 0.5, -0.67).normalize();

function plankTexture() {
  const r = rng(77);
  return canvasTex(256, (g, s) => {
    g.fillStyle = '#3a2a22'; g.fillRect(0, 0, s, s);
    const rows = 8, h = s / rows;
    for (let y = 0; y < rows; y++) {
      const v = 70 + r() * 35;
      g.fillStyle = `rgb(${v + 20},${v},${v - 18})`;
      g.fillRect(0, y * h + 1, s, h - 2);
      for (let k = 0; k < 14; k++) { // serat kayu
        g.strokeStyle = `rgba(30,18,10,${0.15 + r() * 0.2})`; g.lineWidth = 1;
        const yy = y * h + 2 + r() * (h - 4);
        g.beginPath(); g.moveTo(0, yy); g.bezierCurveTo(s * 0.3, yy + (r() - 0.5) * 3, s * 0.6, yy + (r() - 0.5) * 3, s, yy); g.stroke();
      }
      const cut = r() * s; // sambungan papan
      g.fillStyle = 'rgba(15,8,5,0.8)'; g.fillRect(cut, y * h, 2, h);
      g.fillStyle = 'rgba(160,160,170,0.6)'; g.fillRect(cut - 6, y * h + h / 2 - 1, 2, 2); g.fillRect(cut + 6, y * h + h / 2 - 1, 2, 2);
    }
  }, 1);
}

function crateTexture() {
  return canvasTex(128, (g, s) => {
    g.fillStyle = '#7a5532'; g.fillRect(0, 0, s, s);
    g.fillStyle = '#5c3d22';
    for (let i = 0; i < 4; i++) g.fillRect(0, i * 32 + 30, s, 3);
    g.lineWidth = 10; g.strokeStyle = '#4a2f18'; g.strokeRect(5, 5, s - 10, s - 10);
    g.beginPath(); g.moveTo(10, 10); g.lineTo(s - 10, s - 10); g.stroke();
  }, 1);
}

export function buildHarbor(scene, glowTex) {
  const R = rng(4321);
  const root = new THREE.Group(); scene.add(root);
  const world = { root, glowTex, orbs: [], spin: [], grass: null, grassMax: 0, sun: null, pointLights: [] };
  world.fog = new THREE.FogExp2(0x16233f, 0.0085);

  // --- langit malam dengan bulan besar ---
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(600, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false, uniforms: { moon: { value: MOON_DIR } },
      vertexShader: 'varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `varying vec3 vP; uniform vec3 moon;
        float hash(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float h=d.y;
          vec3 c=mix(vec3(0.12,0.2,0.33),vec3(0.03,0.05,0.12),smoothstep(-0.02,0.5,h));
          float m=max(dot(d,moon),0.0);
          c+=vec3(0.55,0.65,0.85)*pow(m,18.0)*0.5 + vec3(1.0,0.97,0.88)*smoothstep(0.9985,0.9992,m)*2.2;
          vec3 g=floor(d*260.0); float st=step(0.9965,hash(g));
          c+=vec3(0.85,0.9,1.0)*st*smoothstep(0.1,0.6,h)*(0.4+0.6*hash(g+2.0))*(1.0-smoothstep(0.98,0.995,m));
          gl_FragColor=vec4(c,1.0); }`,
    }),
  );
  sky.renderOrder = -10; sky.frustumCulled = false; root.add(sky);

  root.add(new THREE.HemisphereLight(0x8fa8ec, 0x3a2a30, 1.7));
  root.add(new THREE.AmbientLight(0x6a7aaa, 0.8));
  const moon = new THREE.DirectionalLight(0xaec4ff, 1.9);
  moon.castShadow = true; moon.shadow.mapSize.set(1024, 1024);
  const sc = moon.shadow.camera; sc.left = -34; sc.right = 34; sc.top = 34; sc.bottom = -34; sc.near = 1; sc.far = 160;
  moon.shadow.bias = -0.0006; moon.shadow.normalBias = 0.04;
  root.add(moon, moon.target); world.sun = moon;

  // --- dermaga dan air ---
  const planks = plankTexture(); planks.repeat.set(24, 24);
  const deck = new THREE.Mesh(new THREE.PlaneGeometry(ARENA * 2 + 4, ARENA * 2 + 4), new THREE.MeshStandardMaterial({ map: planks, roughness: 0.85, color: 0xc8b8b0 }));
  deck.rotation.x = -Math.PI / 2; deck.receiveShadow = true; root.add(deck);
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(900, 900, 1, 1),
    new THREE.ShaderMaterial({
      fog: true, uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { time: { value: 0 }, moon: { value: MOON_DIR } }]),
      vertexShader: `varying vec3 vW;
#include <fog_pars_vertex>
        void main(){ vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; vec4 mvPosition=viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
#include <fog_vertex>
        }`,
      fragmentShader: `varying vec3 vW; uniform float time; uniform vec3 moon;
#include <fog_pars_fragment>
        void main(){ float w=sin(vW.x*0.35+time*1.2)*0.5+sin(vW.z*0.27-time*0.9)*0.5+sin((vW.x+vW.z)*0.9+time*2.3)*0.25;
          vec3 c=vec3(0.03,0.07,0.13)+vec3(0.02,0.05,0.08)*w;
          float glint=pow(max(0.0,sin(vW.x*1.7+time*3.0)*sin(vW.z*1.3-time*2.0)),24.0);
          float path=exp(-pow((vW.x*moon.z-vW.z*moon.x)*0.03,2.0)); // jejak cahaya bulan di air
          c+=vec3(0.75,0.82,1.0)*glint*(0.25+1.2*path);
          gl_FragColor=vec4(c,1.0);
#include <fog_fragment>
        }`,
    }),
  );
  water.rotation.x = -Math.PI / 2; water.position.y = -0.6; root.add(water); world.water = water;

  const stone = new THREE.MeshStandardMaterial({ color: 0x5d6270, roughness: 0.95 });
  const wood = new THREE.MeshStandardMaterial({ map: planks, color: 0x8a6a58, roughness: 0.9 });
  const darkWood = new THREE.MeshStandardMaterial({ color: 0x3b2a24, roughness: 0.9 });
  const crateMat = new THREE.MeshStandardMaterial({ map: crateTexture(), roughness: 0.85 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x2c3a52, roughness: 0.8, flatShading: true });
  const metal = new THREE.MeshStandardMaterial({ color: 0x8f7a4a, roughness: 0.35, metalness: 0.9 });
  const sh = (m) => { m.castShadow = true; m.receiveShadow = true; return m; };
  const add = (geo, mat, x, y, z) => { const m = sh(new THREE.Mesh(geo, mat)); m.position.set(x, y, z); root.add(m); return m; };

  // tepi dermaga: tembok batu rendah dan tonggak tambat
  const W = ARENA + 1;
  for (const [x, z, w, d] of [[0, W, 2 * W + 2, 2], [0, -W, 2 * W + 2, 2], [W, 0, 2, 2 * W + 2], [-W, 0, 2, 2 * W + 2]]) add(new THREE.BoxGeometry(w, 1.4, d), stone, x, 0.2, z);
  for (let i = -40; i <= 40; i += 10) for (const [x, z] of [[i, W], [i, -W], [W, i], [-W, i]]) add(new THREE.CylinderGeometry(0.35, 0.45, 1.2, 8), darkWood, x, 1.3, z);

  const lantern = (x, y, z, light) => {
    const g = new THREE.Group();
    g.add(sh(new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.55, 0.4), metal)));
    const glow = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.3), new THREE.MeshStandardMaterial({ color: 0xffb35c, emissive: 0xff9a3a, emissiveIntensity: 3 }));
    g.add(glow);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xffa040, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.85 }));
    s.scale.setScalar(4); g.add(s);
    g.position.set(x, y, z); root.add(g);
    if (light) { const pl = new THREE.PointLight(0xff9a45, 28, 24, 1.6); pl.position.set(x, y, z); root.add(pl); world.pointLights.push(pl); }
    world.spin.push({ flick: s, ph: R() * 10 });
  };

  for (const o of MAPS.harbor.obst) {
    if (o.kind === 'bell') {
      add(new THREE.CylinderGeometry(o.r, o.r + 0.3, o.h, 10), stone, o.x, o.h / 2, o.z);
      for (const [dx, dz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) add(new THREE.BoxGeometry(0.35, 4.2, 0.35), darkWood, o.x + dx * 1.5, o.h + 2.1, o.z + dz * 1.5);
      const roof = add(new THREE.ConeGeometry(2.8, 2, 4), roofMat, o.x, o.h + 5.2, o.z); roof.rotation.y = Math.PI / 4;
      const bell = add(new THREE.CylinderGeometry(0.5, 1.0, 1.4, 16, 1, true), metal, o.x, o.h + 3, o.z); bell.material.side = THREE.DoubleSide;
      world.bell = bell;
      lantern(o.x, o.h + 1.6, o.z + 1.9, false); lantern(o.x, o.h + 1.6, o.z - 1.9, false);
    } else if (o.kind === 'shed') {
      add(new THREE.BoxGeometry(o.w, o.h, o.d), wood, o.x, o.h / 2, o.z);
      const long = o.w > o.d, roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, (long ? o.d : o.w) * 0.75, long ? o.w + 0.6 : o.d + 0.6, 3, 1), roofMat);
      roof.rotation.set(long ? 0 : Math.PI / 2, 0, long ? Math.PI / 2 : 0);
      if (long) roof.rotation.set(0, 0, Math.PI / 2); else roof.rotation.set(Math.PI / 2, 0, 0);
      roof.scale.set(1, 1, 0.55); roof.position.set(o.x, o.h + 0.9, o.z); sh(roof); root.add(roof);
      for (let i = -1; i <= 1; i += 2) { // pintu bercahaya redup
        const door = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.6), new THREE.MeshStandardMaterial({ color: 0x1a1008, emissive: 0x3a1f08, emissiveIntensity: 0.8 }));
        if (long) { door.position.set(o.x + i * o.w / 4, 1.3, o.z + Math.sign(o.z || 1) * -(o.d / 2 + 0.02)); door.rotation.y = o.z > 0 ? Math.PI : 0; } else { door.position.set(o.x + Math.sign(o.x || 1) * -(o.w / 2 + 0.02), 1.3, o.z + i * o.d / 4); door.rotation.y = o.x > 0 ? -Math.PI / 2 : Math.PI / 2; }
        root.add(door);
      }
    } else if (o.kind === 'mast') {
      add(new THREE.CylinderGeometry(o.r * 0.7, o.r, o.h, 8), darkWood, o.x, o.h / 2, o.z);
      const bar = add(new THREE.BoxGeometry(5, 0.25, 0.25), darkWood, o.x, o.h * 0.78, o.z); bar.rotation.y = Math.atan2(o.x, o.z);
      const sail = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 5, 4, 4), new THREE.MeshStandardMaterial({ color: 0xcfc6b4, roughness: 1, side: THREE.DoubleSide }));
      sail.position.set(o.x, o.h * 0.55, o.z); sail.rotation.y = Math.atan2(o.x, o.z); sh(sail); root.add(sail);
      world.spin.push({ sail, ph: R() * 6 });
      lantern(o.x + Math.sign(o.x) * -0.6, 3.2, o.z + Math.sign(o.z) * -0.6, true);
    } else if (o.kind === 'crate') {
      const n = Math.max(1, Math.round((o.w * o.d) / 6));
      add(new THREE.BoxGeometry(o.w, o.h, o.d), crateMat, o.x, o.h / 2, o.z);
      if (n > 1) { const c = add(new THREE.BoxGeometry(1.6, 1.6, 1.6), crateMat, o.x + (R() - 0.5) * (o.w - 1.8), o.h + 0.8, o.z + (R() - 0.5) * (o.d - 1.8)); c.rotation.y = R(); }
    } else if (o.kind === 'boat') {
      const hull = add(new THREE.CylinderGeometry(o.w / 2, o.w / 2, o.d, 14, 1, false, 0, Math.PI), darkWood, o.x, o.h, o.z);
      hull.rotation.set(Math.PI / 2, 0, Math.PI); hull.scale.set(1, 1, 0.75);
      add(new THREE.BoxGeometry(o.w * 0.9, 0.12, o.d * 0.95), wood, o.x, o.h - 0.05, o.z);
      const oar = add(new THREE.BoxGeometry(0.12, 0.12, 4), wood, o.x + 0.6, o.h + 0.2, o.z); oar.rotation.y = 0.4;
    } else if (o.kind === 'post') {
      add(new THREE.CylinderGeometry(o.r, o.r * 1.1, o.h, 8), darkWood, o.x, o.h / 2, o.z);
      add(new THREE.TorusGeometry(o.r + 0.08, 0.1, 6, 14), new THREE.MeshStandardMaterial({ color: 0xb59a6a, roughness: 1 }), o.x, 1.6, o.z).rotation.x = Math.PI / 2;
    }
  }

  // --- kapal dan mercusuar di kejauhan ---
  const silMat = new THREE.MeshStandardMaterial({ color: 0x0d1424, roughness: 1 });
  for (const [x, z, ry, s] of [[-120, 90, 0.4, 1.2], [140, 70, -0.8, 1.6], [-90, -150, 1.2, 1.3]]) {
    const g = new THREE.Group();
    const hull = new THREE.Mesh(new THREE.BoxGeometry(6, 3, 26), silMat); hull.position.y = 1; g.add(hull);
    for (const mz of [-6, 4]) { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 18, 6), silMat); m.position.set(0, 11, mz); g.add(m); }
    g.position.set(x, -0.5, z); g.rotation.y = ry; g.scale.setScalar(s); root.add(g);
  }
  const lh = new THREE.Group();
  lh.add(new THREE.Mesh(new THREE.CylinderGeometry(3, 5, 34, 12), new THREE.MeshStandardMaterial({ color: 0xd8d2c8, roughness: 0.9 })));
  lh.children[0].position.y = 17;
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(2.2, 12, 8), new THREE.MeshStandardMaterial({ color: 0xfff0c0, emissive: 0xffe7a0, emissiveIntensity: 4 }));
  lamp.position.y = 36; lh.add(lamp);
  const beam = new THREE.Mesh(new THREE.ConeGeometry(9, 140, 24, 1, true), new THREE.MeshBasicMaterial({ color: 0xfff1c4, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
  beam.geometry.translate(0, -70, 0); beam.rotation.z = Math.PI / 2; const pivot = new THREE.Group(); pivot.position.y = 36; pivot.add(beam); lh.add(pivot);
  lh.position.set(170, -1, -140); root.add(lh); world.beam = pivot;

  // --- bola penyembuh ---
  const orbMat = new THREE.MeshStandardMaterial({ color: 0x59ff9c, emissive: 0x2dff7f, emissiveIntensity: 3, roughness: 0.2 });
  for (const [x, z] of MAPS.harbor.orbs) {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 1), orbMat));
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0x59ff9c, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
    s.scale.setScalar(3.2); g.add(s);
    g.position.set(x, 1.2, z); root.add(g); world.orbs.push(g);
  }

  // --- kabut tipis yang melayang (pengganti kunang-kunang) ---
  const NF = 220, fp = new Float32Array(NF * 3), fph = new Float32Array(NF);
  for (let i = 0; i < NF; i++) { fp[i * 3] = (R() - 0.5) * 100; fp[i * 3 + 1] = 0.4 + R() * 5; fp[i * 3 + 2] = (R() - 0.5) * 100; fph[i] = R() * 100; }
  const fg = new THREE.BufferGeometry();
  fg.setAttribute('position', new THREE.BufferAttribute(fp, 3)); fg.setAttribute('ph', new THREE.BufferAttribute(fph, 1));
  const flies = new THREE.Points(fg, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { time: { value: 0 }, scale: { value: 400 } },
    vertexShader: `attribute float ph; uniform float time; uniform float scale; varying float vA;
      void main(){ vec3 p=position; p.x+=sin(time*0.2+ph)*2.5; p.y+=sin(time*0.4+ph*1.7)*0.4; p.z+=cos(time*0.17+ph*1.3)*2.5;
        vA=0.25+0.25*sin(time*0.8+ph*3.0); vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=scale*0.6/-mv.z; gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `varying float vA; void main(){ float d=length(gl_PointCoord-0.5);
      gl_FragColor=vec4(vec3(0.7,0.8,1.0), smoothstep(0.5,0.0,d)*vA*0.6); }`,
  }));
  flies.frustumCulled = false; root.add(flies); world.flies = flies;

  // tong meledak: tong merah dengan tanda menyala
  world.barrels = MAPS.harbor.barrels.map(([x, z]) => {
    const g = new THREE.Group();
    const b = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.5, 1.3, 12), new THREE.MeshStandardMaterial({ color: 0x9c2b22, roughness: 0.6 }))); b.position.y = 0.65; g.add(b);
    for (const y of [0.3, 1.0]) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.04, 6, 16), metal); r.rotation.x = Math.PI / 2; r.position.y = y; g.add(r); }
    const mark = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), new THREE.MeshStandardMaterial({ color: 0xffc23a, emissive: 0xff8a1a, emissiveIntensity: 3 })); mark.position.set(0, 1.42, 0); g.add(mark);
    g.position.set(x, 0, z); root.add(g); return g;
  });
  world.update = (t, focus, orbMask, barrelMask = 0) => {
    world.barrels.forEach((b, i) => { b.visible = !!(barrelMask & (1 << i)); });
    moon.target.position.set(focus.x, 0, focus.z);
    moon.position.copy(moon.target.position).addScaledVector(MOON_DIR, 80);
    sky.position.set(focus.x, 0, focus.z);
    water.material.uniforms.time.value = t;
    flies.material.uniforms.time.value = t;
    world.beam.rotation.y = t * 0.6;
    if (world.bell) world.bell.rotation.z = Math.sin(t * 0.8) * 0.06;
    for (const c of world.spin) {
      if (c.flick) c.flick.material.opacity = 0.7 + 0.15 * Math.sin(t * 9 + c.ph) + 0.1 * Math.sin(t * 23 + c.ph);
      if (c.sail) c.sail.rotation.x = Math.sin(t * 0.7 + c.ph) * 0.08;
    }
    for (let i = 0; i < world.orbs.length; i++) {
      const o = world.orbs[i];
      o.visible = !!(orbMask & (1 << i));
      o.position.y = 1.2 + Math.sin(t * 2 + i) * 0.18; o.rotation.y = t * 1.5;
    }
  };
  return world;
}
