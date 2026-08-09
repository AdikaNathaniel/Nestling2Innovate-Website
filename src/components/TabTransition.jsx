import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';

const SPLASH_MS = 650;
const CONFETTI_COLORS = ['#0097b2', '#00b4d8', '#22c55e', '#ffd166', '#ffffff'];

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function launchConfetti() {
  confetti({
    particleCount: 110,
    spread: 100,
    startVelocity: 55,
    origin: { y: 0.35 },
    colors: CONFETTI_COLORS,
    zIndex: 10000,
  });

  const end = Date.now() + 700;
  (function burstSides() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 60,
      startVelocity: 45,
      origin: { x: 0, y: 0.4 },
      colors: CONFETTI_COLORS,
      zIndex: 10000,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 60,
      startVelocity: 45,
      origin: { x: 1, y: 0.4 },
      colors: CONFETTI_COLORS,
      zIndex: 10000,
    });
    if (Date.now() < end) requestAnimationFrame(burstSides);
  })();
}

export default function TabTransition() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (prefersReducedMotion()) return;

    setVisible(true);
    const hideTimer = setTimeout(() => setVisible(false), SPLASH_MS);
    const confettiTimer = setTimeout(launchConfetti, SPLASH_MS - 80);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(confettiTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="tab-splash" role="presentation" aria-hidden="true">
      <div className="tab-splash-glow">
        <div className="tab-splash-badge">
          <img src="/logo.png" alt="" className="tab-splash-logo" />
        </div>
      </div>
    </div>
  );
}
