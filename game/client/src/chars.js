// Avatar prosedural: tubuh, jubah, senjata per kelas, animasi langkah/tembak/gugur.
import * as THREE from 'three';
import { CLASSES, SKINS } from '../../shared/config.js';

const cloth = new THREE.MeshStandardMaterial({ color: 0x2a2d44, roughness: 0.85 });
const skin = new THREE.MeshStandardMaterial({ color: 0xd9a47c, roughness: 0.7 });
const metal = new THREE.MeshStandardMaterial({ color: 0x9aa0bc, roughness: 0.35, metalness: 0.85 });
const wood = new THREE.MeshStandardMaterial({ color: 0x5b3a25, roughness: 0.9 });
const geo = {
  leg: new THREE.CapsuleGeometry(0.15, 0.6, 3, 8), arm: new THREE.CapsuleGeometry(0.11, 0.5, 3, 8),
  torso: new THREE.CylinderGeometry(0.36, 0.27, 0.85, 10), head: new THREE.SphereGeometry(0.24, 14, 10),
  robe: new THREE.CylinderGeometry(0.3, 0.62, 0.95, 12, 1, true), boot: new THREE.BoxGeometry(0.2, 0.14, 0.36),
};

function mesh(g, m, x = 0, y = 0, z = 0) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.castShadow = true; return o; }

export class Avatar {
  constructor(clsKey, name, isMe, glowTex, teamColor = null, skinId = 'default') {
    const c = CLASSES[clsKey], sk = SKINS.find((k) => k.id === skinId) || SKINS[0];
    const color = new THREE.Color(sk.glow ?? c.color); // jubah dapat mengganti warna cahaya senjata
    this.clsKey = clsKey; this.isMe = isMe; this.name = name;
    this.tagColor = teamColor !== null ? '#' + teamColor.toString(16).padStart(6, '0') : '#ffe9c4';
    this.phase = 0; this.kick = 0; this.deadT = 0; this.spawnT = 0.4; this.lastX = 0; this.lastZ = 0; this.speed = 0;
    this.shown = { hp: -1, maxHp: -1, lvl: -1 };
    const root = this.group = new THREE.Group();
    const body = this.body = new THREE.Group(); root.add(body);
    const accent = new THREE.MeshStandardMaterial({ color: sk.accent !== undefined ? new THREE.Color(sk.accent) : color.clone().multiplyScalar(0.38), roughness: 0.8, side: THREE.DoubleSide, metalness: sk.id === 'raja' || sk.id === 'bulan' ? 0.5 : 0 });
    const glow = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 3, roughness: 0.3 });

    this.legL = new THREE.Group(); this.legL.position.set(0.2, 1.0, 0);
    this.legR = new THREE.Group(); this.legR.position.set(-0.2, 1.0, 0);
    for (const l of [this.legL, this.legR]) { l.add(mesh(geo.leg, cloth, 0, -0.5, 0), mesh(geo.boot, wood, 0, -0.93, 0.07)); body.add(l); }

    const up = this.upper = new THREE.Group(); body.add(up);
    up.add(mesh(geo.torso, cloth, 0, 1.5, 0), mesh(geo.robe, accent, 0, 1.0, 0), mesh(geo.head, skin, 0, 2.14, 0));
    const belt = mesh(new THREE.TorusGeometry(0.31, 0.05, 6, 16), metal, 0, 1.2, 0); belt.rotation.x = Math.PI / 2; up.add(belt);
    // jubah belakang
    const cape = mesh(new THREE.PlaneGeometry(0.75, 1.15, 1, 3), accent, 0, 1.3, -0.33); cape.rotation.x = 0.16; up.add(cape); this.cape = cape;

    this.armL = new THREE.Group(); this.armL.position.set(0.46, 1.82, 0);
    this.armR = new THREE.Group(); this.armR.position.set(-0.46, 1.82, 0);
    for (const a of [this.armL, this.armR]) { a.add(mesh(geo.arm, cloth, 0, -0.32, 0), mesh(new THREE.SphereGeometry(0.1, 8, 6), skin, 0, -0.68, 0)); up.add(a); }

    const weapon = this.weapon = new THREE.Group(); weapon.position.set(-0.46, 1.62, 0.55); up.add(weapon);
    let tipZ = 0.7, tipY = 0;
    if (clsKey === 'ranger') {
      const hood = mesh(new THREE.SphereGeometry(0.3, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), accent, 0, 2.17, -0.03); up.add(hood);
      weapon.add(mesh(new THREE.BoxGeometry(0.09, 0.1, 0.95), wood, 0, 0, 0.1));
      const bow = mesh(new THREE.TorusGeometry(0.42, 0.035, 6, 14, Math.PI), metal, 0, 0, 0.45); bow.rotation.set(Math.PI / 2, 0, 0); weapon.add(bow);
      const bolt = mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.7, 6), glow, 0, 0.07, 0.3); bolt.rotation.x = Math.PI / 2; weapon.add(bolt);
    } else if (clsKey === 'mage') {
      up.add(mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.04, 16), accent, 0, 2.32, 0));
      const hat = mesh(new THREE.ConeGeometry(0.3, 0.8, 12), accent, 0, 2.72, -0.04); hat.rotation.x = -0.18; up.add(hat);
      weapon.add(mesh(new THREE.CylinderGeometry(0.045, 0.055, 2.1, 8), wood, 0, 0.15, 0));
      weapon.add(mesh(new THREE.SphereGeometry(0.19, 12, 10), glow, 0, 1.32, 0));
      const claw = mesh(new THREE.TorusGeometry(0.22, 0.03, 6, 12, Math.PI * 1.4), metal, 0, 1.3, 0); claw.rotation.z = -0.7; weapon.add(claw);
      tipZ = 0; tipY = 1.32;
    } else if (clsKey === 'priest') {
      // pendeta: lingkaran cahaya di atas kepala, selendang, tongkat bermatahari
      const halo = mesh(new THREE.TorusGeometry(0.27, 0.035, 8, 20), glow, 0, 2.55, 0); halo.rotation.x = Math.PI / 2; up.add(halo);
      up.add(mesh(new THREE.BoxGeometry(0.16, 0.9, 0.05), glow, 0, 1.45, 0.3));
      weapon.add(mesh(new THREE.CylinderGeometry(0.04, 0.05, 2.0, 8), wood, 0, 0.1, 0));
      const sun = mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.05, 12), glow, 0, 1.25, 0); sun.rotation.x = Math.PI / 2; weapon.add(sun);
      for (let i = 0; i < 8; i++) { const ray = mesh(new THREE.ConeGeometry(0.04, 0.16, 4), glow, Math.cos(i * 0.785) * 0.33, 1.25 + Math.sin(i * 0.785) * 0.33, 0); ray.rotation.z = i * 0.785 - Math.PI / 2; weapon.add(ray); }
      tipZ = 0; tipY = 1.25;
    } else {
      up.add(mesh(new THREE.SphereGeometry(0.29, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.6), metal, 0, 2.18, 0));
      for (const s of [-1, 1]) {
        const horn = mesh(new THREE.ConeGeometry(0.07, 0.34, 6), metal, s * 0.27, 2.4, 0); horn.rotation.z = -s * 0.6; up.add(horn);
        up.add(mesh(new THREE.SphereGeometry(0.2, 10, 8), metal, s * 0.48, 1.86, 0));
      }
      const barrel = mesh(new THREE.CylinderGeometry(0.15, 0.19, 0.85, 10), metal, 0, 0, 0.15); barrel.rotation.x = Math.PI / 2; weapon.add(barrel);
      const ring = mesh(new THREE.TorusGeometry(0.2, 0.045, 6, 16), glow, 0, 0, 0.5); weapon.add(ring);
      const shield = mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.07, 6), metal, 0.72, 1.5, 0.28); shield.rotation.set(Math.PI / 2, 0, 0.2); up.add(shield);
      up.add(mesh(new THREE.CircleGeometry(0.2, 6), glow, 0.72, 1.5, 0.33));
      tipZ = 0.62;
    }
    this.tip = new THREE.Object3D(); this.tip.position.set(0, tipY, tipZ); weapon.add(this.tip);
    this.tipGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
    this.tipGlow.scale.setScalar(0.9); this.tip.add(this.tipGlow);
    this.armR.rotation.x = -1.3;

    this.bubble = new THREE.Mesh(
      new THREE.SphereGeometry(1.55, 20, 14),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    this.bubble.position.y = 1.3; this.bubble.visible = false; root.add(this.bubble);

    const blob = new THREE.Mesh(new THREE.CircleGeometry(0.75, 16), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.35, depthWrite: false }));
    blob.rotation.x = -Math.PI / 2; blob.position.y = 0.03; root.add(blob); this.blob = blob;
    if (teamColor !== null) { // cincin warna regu di kaki
      this.ring = new THREE.Mesh(new THREE.RingGeometry(0.8, 1.0, 32), new THREE.MeshBasicMaterial({ color: teamColor, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      this.ring.rotation.x = -Math.PI / 2; this.ring.position.y = 0.05; root.add(this.ring);
    }

    if (!isMe) {
      const cv = this.tagCanvas = document.createElement('canvas'); cv.width = 256; cv.height = 64;
      this.tagTex = new THREE.CanvasTexture(cv); this.tagTex.colorSpace = THREE.SRGBColorSpace;
      this.tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.tagTex, transparent: true, depthWrite: false, fog: false }));
      this.tag.scale.set(3.4, 0.85, 1); this.tag.position.y = 3.25; this.tag.renderOrder = 5; root.add(this.tag);
    }
  }

  setInfo(hp, maxHp, lvl, bounty = false) {
    const s = this.shown;
    if (!this.tag || (s.hp === hp && s.maxHp === maxHp && s.lvl === lvl && s.b === bounty)) return;
    s.hp = hp; s.maxHp = maxHp; s.lvl = lvl; s.b = bounty;
    const g = this.tagCanvas.getContext('2d');
    g.clearRect(0, 0, 256, 64);
    g.font = '600 24px Georgia, serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineWidth = 4; g.strokeStyle = 'rgba(0,0,0,0.85)';
    const label = `${bounty ? '★ ' : ''}${this.name}  Lv${lvl}`;
    g.strokeText(label, 128, 20); g.fillStyle = this.tagColor; g.fillText(label, 128, 20);
    g.fillStyle = 'rgba(0,0,0,0.7)'; g.fillRect(38, 40, 180, 14);
    const f = Math.max(0, hp / maxHp);
    g.fillStyle = f > 0.5 ? '#ff5d5d' : f > 0.25 ? '#ff9a3d' : '#ffd23d'; g.fillRect(40, 42, 176 * f, 10);
    this.tagTex.needsUpdate = true;
  }

  fireKick() { this.kick = 1; }

  tipWorld(out) { return this.tip.getWorldPosition(out); }

  update(dt, x, z, yaw, flags, time) {
    const dead = flags & 1;
    const g = this.group;
    const dx = x - this.lastX, dz = z - this.lastZ;
    const sp = dt > 0 ? Math.min(40, Math.hypot(dx, dz) / dt) : 0;
    this.speed += (sp - this.speed) * Math.min(1, dt * 12);
    this.lastX = x; this.lastZ = z;
    g.position.set(x, 0, z); g.rotation.y = yaw;
    const k = Math.min(1, this.speed / 6);
    this.phase += this.speed * dt * 1.35;
    const sw = Math.sin(this.phase) * 0.75 * k;
    // arah gerak relatif terhadap hadap: kaki mengayun maju/mundur sesuai arah
    const fwd = sp > 0.01 ? (dx * Math.sin(yaw) + dz * Math.cos(yaw)) / (sp * dt || 1) : 0;
    const side = sp > 0.01 ? (-dx * Math.cos(yaw) + dz * Math.sin(yaw)) / (sp * dt || 1) : 0;
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw;
    this.legL.rotation.z = this.legR.rotation.z = side * 0.25 * k * Math.sin(this.phase);
    this.armL.rotation.x = -sw * 0.7;
    this.body.position.y = Math.abs(Math.sin(this.phase)) * 0.07 * k + Math.sin(time * 2) * 0.012;
    this.upper.rotation.x = 0.13 * k * fwd;
    this.upper.rotation.z = -0.1 * k * side;
    this.cape.rotation.x = 0.16 + 0.5 * k * Math.max(0, fwd) + Math.sin(time * 3 + this.phase) * 0.04;
    this.kick = Math.max(0, this.kick - dt * 7);
    this.weapon.position.z = 0.55 - this.kick * 0.22;
    this.armR.rotation.x = -1.3 - this.kick * 0.25;
    this.tipGlow.scale.setScalar(0.7 + this.kick * 1.2 + Math.sin(time * 5) * 0.08);

    if (dead) {
      this.deadT = Math.min(1, this.deadT + dt * 2.6);
      this.spawnT = 0;
    } else {
      if (this.deadT > 0) { this.deadT = 0; this.spawnT = 0; }
      this.spawnT = Math.min(0.4, this.spawnT + dt);
    }
    const e = this.deadT * this.deadT * (3 - 2 * this.deadT);
    this.body.rotation.x = -e * 1.5;
    this.body.position.y += e * 0.25;
    const s = dead ? 1 : 0.4 + 1.5 * this.spawnT;
    g.scale.setScalar(Math.min(1, s) * (this.big || 1));
    if (this.tag) this.tag.visible = !dead;
    this.blob.visible = !dead;
    if (this.ring) this.ring.visible = !dead;
    const shield = flags & 2, prot = flags & 4;
    this.bubble.visible = !!(shield || prot) && !dead;
    // mahkota buronan
    if (flags & 64 && !dead) {
      if (!this.crown) {
        this.crown = new THREE.Group();
        const gold = new THREE.MeshStandardMaterial({ color: 0xffcf4a, emissive: 0xffa21a, emissiveIntensity: 1.6, metalness: 0.8, roughness: 0.3 });
        this.crown.add(new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.36, 0.18, 10, 1, true), gold));
        for (let i = 0; i < 5; i++) { const sp = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.24, 5), gold); const a = (i / 5) * Math.PI * 2; sp.position.set(Math.cos(a) * 0.32, 0.18, Math.sin(a) * 0.32); this.crown.add(sp); }
        this.crown.position.y = 2.95; this.group.add(this.crown);
      }
      this.crown.visible = true; this.crown.rotation.y = time * 1.5; this.crown.position.y = 2.95 + Math.sin(time * 3) * 0.06;
    } else if (this.crown) this.crown.visible = false;
    if (this.bubble.visible) {
      this.bubble.material.opacity = shield ? 0.2 + 0.08 * Math.sin(time * 9) : 0.1 + 0.08 * Math.sin(time * 18);
      this.bubble.rotation.y = time * 1.5;
      this.bubble.scale.setScalar(shield ? 1 : 0.85);
    }
  }

  dispose(scene) {
    scene.remove(this.group);
    if (this.tagTex) { this.tagTex.dispose(); this.tag.material.dispose(); }
  }
}

// ---- Monster Bertahan Bersama: bentuk sendiri, antarmuka sama dengan Avatar ----
export class Monster {
  constructor(kind, glowTex) {
    this.kind = kind; this.phase = 0; this.kick = 0; this.deadT = 0; this.lastX = 0; this.lastZ = 0; this.speed = 0;
    const g = this.group = new THREE.Group(), body = this.body = new THREE.Group(); g.add(body);
    const m = (geo, mat, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.castShadow = true; body.add(o); return o; };
    const eye = (color) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 4 });
    if (kind === 'ghoul') {
      // makhluk rawa bungkuk, lengan panjang, mata hijau
      const skin = new THREE.MeshStandardMaterial({ color: 0x3d5240, roughness: 0.9 });
      const torso = m(new THREE.SphereGeometry(0.5, 12, 10), skin, 0, 1.2, -0.1); torso.scale.set(1, 1.2, 0.9); torso.rotation.x = 0.6;
      m(new THREE.SphereGeometry(0.3, 12, 10), skin, 0, 1.75, 0.35);
      for (const s of [-1, 1]) m(new THREE.SphereGeometry(0.06, 8, 6), eye(0x8bff6a), s * 0.12, 1.8, 0.62);
      this.armL = new THREE.Group(); this.armL.position.set(0.45, 1.45, 0.1); this.armR = new THREE.Group(); this.armR.position.set(-0.45, 1.45, 0.1);
      for (const a of [this.armL, this.armR]) { const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.95, 3, 8), skin); arm.position.y = -0.55; arm.castShadow = true; a.add(arm); a.rotation.x = -0.5; body.add(a); }
      this.legL = new THREE.Group(); this.legL.position.set(0.22, 0.75, 0); this.legR = new THREE.Group(); this.legR.position.set(-0.22, 0.75, 0);
      for (const l of [this.legL, this.legR]) { const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.5, 3, 8), skin); leg.position.y = -0.38; leg.castShadow = true; l.add(leg); body.add(l); }
      this.tipY = 1.4;
    } else if (kind === 'caster' || kind === 'frost') {
      const cc = kind === 'frost' ? 0x7fd8ff : 0xc86bff;
      // dukun berjubah melayang dengan bola ungu
      const robe = new THREE.MeshStandardMaterial({ color: kind === 'frost' ? 0x1a2c44 : 0x241a33, roughness: 0.8, side: THREE.DoubleSide });
      m(new THREE.ConeGeometry(0.6, 1.8, 12, 1, true), robe, 0, 1.15, 0);
      const hood = m(new THREE.SphereGeometry(0.34, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.6), robe, 0, 2.05, 0); hood.rotation.x = -0.2;
      for (const s of [-1, 1]) m(new THREE.SphereGeometry(0.05, 8, 6), eye(cc), s * 0.1, 1.98, 0.27);
      this.orb = m(new THREE.SphereGeometry(0.2, 12, 10), eye(cc), 0.45, 1.5, 0.45);
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: cc, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
      s.scale.setScalar(1.6); this.orb.add(s);
      this.tipY = 1.5;
    } else if (kind === 'spiderling' || kind === 'queen') {
      // laba-laba: perut besar, kepala, delapan kaki; Ratu jauh lebih besar dengan corak merah
      const q = kind === 'queen', sc = q ? 2.4 : 0.75; this.baseScale = sc;
      const shell = new THREE.MeshStandardMaterial({ color: q ? 0x3a0f1c : 0x2a2230, roughness: 0.6 });
      const ab = m(new THREE.SphereGeometry(0.55, 12, 10), shell, 0, 0.7, -0.45); ab.scale.set(1, 0.85, 1.25);
      m(new THREE.SphereGeometry(0.32, 12, 10), shell, 0, 0.6, 0.3);
      if (q) m(new THREE.BoxGeometry(0.5, 0.06, 0.7), eye(0xff2e5a), 0, 1.17, -0.45);
      for (const sx of [-1, 1]) { m(new THREE.SphereGeometry(0.06, 8, 6), eye(0xff3b3b), sx * 0.12, 0.72, 0.56); m(new THREE.SphereGeometry(0.04, 8, 6), eye(0xff3b3b), sx * 0.22, 0.66, 0.5); }
      this.spLegs = [];
      for (const sx of [-1, 1]) for (let k = 0; k < 4; k++) {
        const piv = new THREE.Group(); piv.position.set(sx * 0.25, 0.6, 0.25 - k * 0.22); piv.rotation.y = sx * (0.5 - k * 0.35);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.02, 0.9, 5), shell); leg.position.set(sx * 0.4, -0.12, 0); leg.rotation.z = sx * 1.0; leg.castShadow = true; piv.add(leg);
        body.add(piv); this.spLegs.push(piv);
      }
      body.scale.setScalar(sc);
      this.tipY = 0.7 * sc;
    } else {
      // golem batu raksasa dengan retakan menyala
      const rock = new THREE.MeshStandardMaterial({ color: 0x6b5d52, roughness: 1, flatShading: true });
      const lava = eye(0xff8a2a);
      const torso = m(new THREE.DodecahedronGeometry(1.1, 0), rock, 0, 2.3, 0); torso.scale.set(1.2, 1, 0.9);
      m(new THREE.BoxGeometry(0.9, 0.12, 0.1), lava, 0, 2.3, 0.85);
      m(new THREE.DodecahedronGeometry(0.5, 0), rock, 0, 3.45, 0.15);
      for (const s of [-1, 1]) m(new THREE.SphereGeometry(0.09, 8, 6), lava, s * 0.2, 3.5, 0.55);
      this.armL = new THREE.Group(); this.armL.position.set(1.35, 2.8, 0); this.armR = new THREE.Group(); this.armR.position.set(-1.35, 2.8, 0);
      for (const a of [this.armL, this.armR]) { const fist = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 0), rock); fist.position.y = -1.2; fist.castShadow = true; a.add(fist); const up = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.1, 0.5), rock); up.position.y = -0.5; up.castShadow = true; a.add(up); body.add(a); }
      this.legL = new THREE.Group(); this.legL.position.set(0.6, 1.3, 0); this.legR = new THREE.Group(); this.legR.position.set(-0.6, 1.3, 0);
      for (const l of [this.legL, this.legR]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.65, 1.3, 0.65), rock); leg.position.y = -0.65; leg.castShadow = true; l.add(leg); body.add(l); }
      this.tipY = 2.4;
    }
    this.tip = new THREE.Object3D(); this.tip.position.set(0, this.tipY, 0.6); body.add(this.tip);
    const big = kind === 'brute' || kind === 'queen';
    const blob = new THREE.Mesh(new THREE.CircleGeometry(big ? 1.6 : 0.75, 16), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.35, depthWrite: false }));
    blob.rotation.x = -Math.PI / 2; blob.position.y = 0.03; g.add(blob); this.blob = blob;
    // batang HP di atas kepala
    const cv = this.tagCanvas = document.createElement('canvas'); cv.width = 128; cv.height = 16;
    this.tagTex = new THREE.CanvasTexture(cv);
    this.tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.tagTex, transparent: true, depthWrite: false, fog: false }));
    this.tag.scale.set(big ? 3.2 : 1.6, big ? 0.4 : 0.2, 1); this.tag.position.y = kind === 'brute' ? 4.3 : kind === 'queen' ? 3.4 : kind === 'spiderling' ? 1.3 : 2.5; this.tag.renderOrder = 5; g.add(this.tag);
    this.shown = -1;
  }
  setInfo(hp, maxHp) {
    const f = Math.max(0, hp / maxHp); if (Math.abs(f - this.shown) < 0.01) return; this.shown = f;
    const g = this.tagCanvas.getContext('2d'); g.clearRect(0, 0, 128, 16);
    g.fillStyle = 'rgba(0,0,0,.7)'; g.fillRect(0, 0, 128, 16); g.fillStyle = this.kind === 'brute' || this.kind === 'queen' ? '#ff8a2a' : '#ff5d5d'; g.fillRect(2, 2, 124 * f, 12);
    this.tagTex.needsUpdate = true;
  }
  fireKick() { this.kick = 1; this.windT = 0; }
  windup(t) { this.windT = t; this.windMax = t; }
  tipWorld(out) { return this.tip.getWorldPosition(out); }
  update(dt, x, z, yaw, flags, time) {
    const dead = flags & 1, g = this.group;
    // aba-aba: lengan terangkat, tubuh membesar dan berkedip merah
    this.windT = Math.max(0, (this.windT || 0) - dt);
    const w = this.windT > 0 ? 1 - this.windT / this.windMax : 0;
    const sp = dt > 0 ? Math.min(30, Math.hypot(x - this.lastX, z - this.lastZ) / dt) : 0;
    this.speed += (sp - this.speed) * Math.min(1, dt * 10); this.lastX = x; this.lastZ = z;
    g.position.set(x, 0, z); g.rotation.y = yaw;
    const k = Math.min(1, this.speed / 5); this.phase += this.speed * dt * (this.kind === 'brute' ? 0.7 : 1.4);
    const sw = Math.sin(this.phase) * 0.7 * k;
    if (this.legL) { this.legL.rotation.x = sw; this.legR.rotation.x = -sw; }
    this.kick = Math.max(0, this.kick - dt * 4);
    if (this.armL) { this.armL.rotation.x = (this.kind === 'ghoul' ? -0.5 : 0) - sw * 0.6 - this.kick * 1.6 - w * 2.4; this.armR.rotation.x = (this.kind === 'ghoul' ? -0.5 : 0) + sw * 0.6 - this.kick * 1.6 - w * 2.4; }
    this.body.scale.setScalar((this.baseScale || 1) * (1 + w * 0.15));
    if (this.spLegs) this.spLegs.forEach((l, i) => { l.rotation.x = Math.sin(this.phase * 2 + i * 1.7) * 0.35 * k; });
    this.body.traverse((o) => { if (o.material && o.material.emissive && !o.userData.glow) { o.userData.base ??= o.material.emissive.getHex(); o.material.emissive.setHex(w > 0 && Math.sin(time * 40) > 0 ? 0x661111 : o.userData.base); } });
    if (this.orb) { this.body.position.y = 0.25 + Math.sin(time * 2.5) * 0.12; this.orb.position.y = 1.5 + Math.sin(time * 4) * 0.08; }
    else this.body.position.y = Math.abs(Math.sin(this.phase)) * 0.06 * k;
    this.deadT = dead ? Math.min(1, this.deadT + dt * 2) : 0;
    this.body.rotation.x = -this.deadT * 1.4; this.body.position.y -= this.deadT * 0.3;
    g.scale.setScalar(1 - this.deadT * 0.4);
    this.tag.visible = !dead; this.blob.visible = !dead;
  }
  dispose(scene) { scene.remove(this.group); this.tagTex.dispose(); this.tag.material.dispose(); }
}
