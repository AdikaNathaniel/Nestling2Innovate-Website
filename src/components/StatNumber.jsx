import React from 'react';
import useCountUp from '../hooks/useCountUp.js';

export default function StatNumber({ target, prefix = '', suffix = '', className = 'num', duration = 1800 }) {
  const [ref, count] = useCountUp(target, duration);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
