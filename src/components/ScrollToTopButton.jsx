import React from 'react';

// Always visible, fixed to the bottom-right of the viewport on every page —
// clicking it smooth-scrolls back to the top.
export default function ScrollToTopButton() {
  return (
    <button
      type="button"
      className="scroll-to-top is-visible"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
