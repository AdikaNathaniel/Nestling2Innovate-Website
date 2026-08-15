import { useEffect, useState } from 'react';

const TYPE_SPEED = 55;
const DELETE_SPEED = 28;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 300;

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default function useTypewriter(phrases) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(prefersReducedMotion() ? phrases[0] : '');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const current = phrases[index];
    let timer;

    if (phase === 'typing') {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timer = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
      } else {
        timer = setTimeout(() => {
          setIndex((i) => (i + 1) % phrases.length);
          setPhase('typing');
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timer);
  }, [text, phase, index, phrases]);

  return text;
}
