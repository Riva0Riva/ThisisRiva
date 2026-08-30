(() => {
  const stage = document.querySelector('#about-experience-stage');
  const track = document.querySelector('#about-experience-track');
  if (!stage || !track) return;

  const originals = [...track.querySelectorAll('.scan-card')];
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  let scannerX = window.innerWidth / 2;
  let trackX = 0;
  let cycleWidth = 0;
  let pendingWheelShift = 0;
  let previousTime = performance.now();
  const speed = 34;
  const wheelSensitivity = 1;

  const createCloneSet = (position) => originals.map((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.dataset.scanClone = 'true';
    clone.dataset.scanCopy = position;
    return clone;
  });

  createCloneSet('before').reverse().forEach((clone) => track.insertBefore(clone, track.firstChild));
  createCloneSet('after').forEach((clone) => track.appendChild(clone));

  const measure = (reset = false) => {
    scannerX = window.innerWidth / 2;
    const trailingClone = track.querySelector('[data-scan-copy="after"]');
    cycleWidth = trailingClone ? trailingClone.offsetLeft - originals[0].offsetLeft : track.scrollWidth / 3;
    if (reset) trackX = scannerX + Math.max(56, window.innerWidth * 0.06) - cycleWidth;
  };

  const updateScanCuts = () => {
    scannerX = window.innerWidth / 2;
    track.querySelectorAll('.scan-card').forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cut = clamp((scannerX - rect.left) / rect.width, 0, 1);
      card.style.setProperty('--cut', String(cut * 100) + '%');
    });
  };

  const wrapTrack = () => {
    const anchor = scannerX + Math.max(56, window.innerWidth * 0.06);
    if (!cycleWidth) return;
    const maxTrackX = anchor - cycleWidth;
    const minTrackX = maxTrackX - cycleWidth;
    while (trackX <= minTrackX) trackX += cycleWidth;
    while (trackX > maxTrackX) trackX -= cycleWidth;
  };

  const render = (time) => {
    const delta = Math.min(time - previousTime, 40) / 1000;
    previousTime = time;
    if (cycleWidth > 0) {
      trackX -= speed * delta;
      trackX -= pendingWheelShift;
      pendingWheelShift = 0;
      wrapTrack();
    }
    track.style.transform = 'translate3d(' + trackX + 'px, -50%, 0)';
    updateScanCuts();
    window.requestAnimationFrame(render);
  };

  stage.addEventListener('wheel', (event) => {
    const horizontalDelta = Math.abs(event.deltaX) > 0.01
      ? event.deltaX
      : event.shiftKey
        ? event.deltaY
        : 0;
    if (horizontalDelta) {
      pendingWheelShift += horizontalDelta * wheelSensitivity;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    measure();
    wrapTrack();
  });
  measure(true);
  window.requestAnimationFrame(render);
})();
