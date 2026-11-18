// Masukan terpadu: sentuh (joystick kiri, geser kanan untuk membidik, tombol) + keyboard/mouse.
export const input = {
  jx: 0, jy: 0,          // kanan, maju (-1..1)
  yaw: 0, fire: false, skillQueued: false,
  touch: false, sens: 1, enabled: false, showScore: false,
};

export const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

export function setupInput(el) {
  input.touch = isTouch;
  const keys = {};
  const kb = () => {
    input.jx = (keys.KeyD || keys.ArrowRight ? 1 : 0) - (keys.KeyA || keys.ArrowLeft ? 1 : 0);
    input.jy = (keys.KeyW || keys.ArrowUp ? 1 : 0) - (keys.KeyS || keys.ArrowDown ? 1 : 0);
  };
  addEventListener('keydown', (e) => {
    if (!input.enabled || e.target.tagName === 'INPUT') return;
    keys[e.code] = true; kb();
    if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'KeyE') { input.skillQueued = true; e.preventDefault(); }
    if (e.code === 'Tab') { input.showScore = true; e.preventDefault(); }
  });
  addEventListener('keyup', (e) => { keys[e.code] = false; kb(); if (e.code === 'Tab') input.showScore = false; });
  addEventListener('blur', () => { for (const k in keys) keys[k] = false; kb(); input.fire = false; });

  // mouse (pointer lock)
  el.canvas.addEventListener('mousedown', (e) => {
    if (!input.enabled || input.touch) return;
    if (document.pointerLockElement !== el.canvas) { el.canvas.requestPointerLock?.(); return; }
    if (e.button === 0) input.fire = true;
    if (e.button === 2) input.skillQueued = true;
  });
  addEventListener('mouseup', (e) => { if (e.button === 0 && !input.touch) input.fire = false; });
  addEventListener('mousemove', (e) => {
    if (document.pointerLockElement === el.canvas && input.enabled) input.yaw -= e.movementX * 0.0026 * input.sens;
  });
  el.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

  // ---- sentuh ----
  const stick = el.stick, knob = el.knob;
  let moveId = null, mox = 0, moy = 0;
  let lookId = null, lx = 0;
  let fireId = null, flx = 0;
  const R = 56;
  const setStick = (x, y) => {
    let dx = x - mox, dy = y - moy; const d = Math.hypot(dx, dy);
    if (d > R) { dx *= R / d; dy *= R / d; }
    knob.style.transform = `translate(${dx}px,${dy}px)`;
    const dead = 0.12, m = Math.min(1, d / R);
    if (m < dead) { input.jx = 0; input.jy = 0; return; }
    input.jx = dx / R; input.jy = -dy / R;
  };
  const lookScale = () => 0.0062 * input.sens * (900 / Math.max(500, innerWidth)) ** 0.5;

  el.touchLayer.addEventListener('touchstart', (e) => {
    if (!input.enabled) return;
    e.preventDefault();
    for (const t of e.changedTouches) {
      if (t.clientX < innerWidth * 0.45 && moveId === null) {
        moveId = t.identifier; mox = t.clientX; moy = t.clientY;
        stick.style.left = mox + 'px'; stick.style.top = moy + 'px'; stick.classList.add('on');
        setStick(mox, moy);
      } else if (lookId === null) { lookId = t.identifier; lx = t.clientX; }
    }
  }, { passive: false });
  const move = (e) => {
    if (!input.enabled) return;
    e.preventDefault();
    for (const t of e.changedTouches) {
      if (t.identifier === moveId) setStick(t.clientX, t.clientY);
      else if (t.identifier === lookId) { input.yaw -= (t.clientX - lx) * lookScale(); lx = t.clientX; }
      else if (t.identifier === fireId) { input.yaw -= (t.clientX - flx) * lookScale(); flx = t.clientX; }
    }
  };
  const end = (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === moveId) { moveId = null; input.jx = 0; input.jy = 0; stick.classList.remove('on'); knob.style.transform = ''; }
      else if (t.identifier === lookId) lookId = null;
      else if (t.identifier === fireId) { fireId = null; input.fire = false; el.fireBtn.classList.remove('on'); }
    }
  };
  addEventListener('touchmove', move, { passive: false });
  addEventListener('touchend', end); addEventListener('touchcancel', end);

  el.fireBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); e.stopPropagation();
    if (!input.enabled || fireId !== null) return;
    const t = e.changedTouches[0];
    fireId = t.identifier; flx = t.clientX; input.fire = true; el.fireBtn.classList.add('on');
  }, { passive: false });
  el.skillBtn.addEventListener('touchstart', (e) => { e.preventDefault(); e.stopPropagation(); if (input.enabled) input.skillQueued = true; }, { passive: false });
  el.skillBtn.addEventListener('mousedown', (e) => { e.stopPropagation(); if (input.enabled) input.skillQueued = true; });

  input.reset = () => {
    moveId = lookId = fireId = null; input.jx = input.jy = 0; input.fire = false; input.skillQueued = false;
    stick.classList.remove('on'); knob.style.transform = ''; el.fireBtn.classList.remove('on');
  };
}
