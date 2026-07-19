import React from 'react';

// Infinite auto-scrolling horizontal strip: content is duplicated back-to-back so
// the animation can loop seamlessly at the halfway point. Pauses on hover.
export default function Marquee({ children, duration = 20, className = '' }) {
  return (
    <div className={'marquee' + (className ? ' ' + className : '')}>
      <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
