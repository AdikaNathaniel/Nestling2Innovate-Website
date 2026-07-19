import React from 'react';
import useReveal from '../hooks/useReveal.js';

// Shared "overshoot then settle" easing used across nearly every scroll-reveal transform.
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const VARIANTS = {
  drop: { transform: 'translateY(-70px)', duration: '0.7s' },
  left: { transform: 'translateX(-90px)', duration: '0.85s' },
  right: { transform: 'translateX(90px)', duration: '0.85s' },
  'slide-left': { transform: 'translateX(-120px)', duration: '0.8s' },
  'slide-right': { transform: 'translateX(120px)', duration: '0.8s' },
  fade: { transform: 'none', duration: '0.6s' },
};

export default function Reveal({
  children,
  variant = 'drop',
  delay = 0,
  threshold = 0.15,
  as: Tag = 'div',
  className = '',
  style = {},
  ...rest
}) {
  const [ref, visible] = useReveal(threshold);
  const v = VARIANTS[variant] || VARIANTS.drop;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0, 0)' : v.transform,
        transition: `opacity 0.6s ${EASE} ${delay}s, transform ${v.duration} ${EASE} ${delay}s`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
