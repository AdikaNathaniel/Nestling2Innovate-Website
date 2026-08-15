import React from 'react';
import useTypewriter from '../hooks/useTypewriter.js';

export default function TypewriterHeading({ phrases, as: Tag = 'h1', className = '' }) {
  const text = useTypewriter(phrases);

  return (
    <Tag className={className}>
      {text}
      <span className="typewriter-cursor" aria-hidden="true" />
    </Tag>
  );
}
