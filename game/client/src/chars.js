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

  setInfo(hp, maxHp, lvl) {
    const s = this.shown;
    if (!this.tag || (s.hp === hp && s.maxHp === maxHp && s.lvl === lvl)) return;
    s.hp = hp; s.maxHp = maxHp; s.lvl = lvl;
    const g = this.tagCanvas.getContext('2d');
    g.clearRect(0, 0, 256, 64);
    g.font = '600 24px Georgia, serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineWidth = 4; g.strokeStyle = 'rgba(0,0,0,0.85)';
    const label = `${this.name}  Lv${lvl}`;
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
    g.scale.setScalar(Math.min(1, s));
    if (this.tag) this.tag.visible = !dead;
    this.blob.visible = !dead;
    if (this.ring) this.ring.visible = !dead;
    const shield = flags & 2, prot = flags & 4;
    this.bubble.visible = !!(shield || prot) && !dead;
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
