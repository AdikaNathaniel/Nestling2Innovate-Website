import React, { useEffect, useRef, useState } from 'react';

const SLIDES = [
  '/images/home-hero-family.jpg',
  '/images/about-students-classroom.jpg',
  '/images/programs-students-classroom.jpg',
  '/images/impact-graduation-celebration.jpg',
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  // Tracks how many times each slide has been activated, so its key changes on
  // every activation — forcing React to remount the node and restart its CSS
  // fade + Ken Burns animation from scratch each cycle.
  const playCounts = useRef(SLIDES.map((_, i) => (i === 0 ? 1 : 0)));

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % SLIDES.length;
        playCounts.current[next] += 1;
        return next;
      });
    }, 15000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i) => {
    if (i === index) return;
    playCounts.current[i] += 1;
    setIndex(i);
  };

  return (
    <div className="hero-slideshow">
      {SLIDES.map((src, i) => (
        <div
          key={`${i}-${playCounts.current[i]}`}
          className={
            'hero-slide' +
            (i === index ? ' is-active' : '') +
            (i % 2 === 0 ? ' kb-a' : ' kb-b')
          }
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={'hero-dot' + (i === index ? ' is-active' : '')}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
