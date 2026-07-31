import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import HeroSlideshow from '../components/HeroSlideshow.jsx';
import Marquee from '../components/Marquee.jsx';

const STORY_SLIDES = [
  '/images/impact-graduation-celebration.jpg',
  '/images/latest-images/1.jpeg',
  '/images/programs-webdesign-woman-laptop.jpg',
];

const STORIES = {
  'lauren-patterson': {
    name: 'Lauren Patterson',
    date: '2026',
    image: '/news/lauren-patterson.jpg',
    certificates: [
      { image: '/news/lauren-cert-freecodecamp.jpg', label: 'freeCodeCamp · Responsive Web Design' },
      { image: '/news/lauren-cert-bcg.jpg', label: 'BCG · Introduction to Strategy Consulting' },
      { image: '/news/lauren-cert-city-century.jpg', label: 'City Century Solicitors · Solicitor Apprentice' },
    ],
    body: [
      'At BEEVIF International and Special Grace Academy, we believe that every young person deserves the opportunity to discover their potential, build practical skills, and prepare for the future of work.',
      "Today, we're proud to spotlight Lauren Patterson, a recent high school graduate of Special Grace Academy (SGA) and participant in the Nestling2Innovate (N2I) Programme.",
      'Driven by a passion for web development and digital innovation, Lauren has continued to invest in her professional growth. Through the N2I Programme, she has earned the freeCodeCamp Responsive Web Design Certification and completed virtual job simulations with Boston Consulting Group (BCG) and City Century Solicitors, gaining practical exposure to responsive web design, strategy consulting, and legal research.',
      'Lauren is currently building her career as an aspiring Responsive Web Designer and is open to internship, volunteer, and entry-level opportunities where she can continue learning, contribute meaningfully, and grow professionally.',
      "Her journey reflects the mission of the Nestling2Innovate (N2I) Programme to equip young people with practical, industry-relevant skills, global exposure, and the confidence to thrive in today's digital economy.",
      'Congratulations, Lauren! We are proud of your achievements and look forward to celebrating many more milestones with you.',
    ],
  },
  'trudy-kanbong': {
    name: 'Trudy Kanbong',
    date: '2026',
    image: '/news/trudy-kanbong.jpg',
    certificates: [
      { image: '/news/trudy-cert-gemini.jpg', label: 'Google for Education · Gemini Certified Student (K12)' },
    ],
    body: [
      'Celebrating Another Young AI Achiever!',
      'Congratulations to Trudy Kanbong on earning her Google Gemini Certified Student (K-12) certification, an important milestone in her journey into Artificial Intelligence and digital innovation.',
      'Having recently completed her BECE education at Theorose School, Trudy is already embracing the future through the Nestling2Innovate (N2I) Programme, a collaboration between BEEVIF International and Special Grace Academy (SGA).',
      "Her achievement reflects the power of providing young people with access to quality STEM and AI education. At N2I, we're committed to equipping learners with future ready skills that inspire innovation, creativity, and lifelong learning.",
      "Congratulations, Trudy! We are proud of your accomplishment and look forward to seeing the impact you'll make in the world of technology.",
    ],
  },
};

export default function NewsStory() {
  const { slug } = useParams();
  const story = STORIES[slug];

  if (!story) {
    return (
      <section style={{ padding: '120px 24px', textAlign: 'center' }}>
        <div className="container">
          <h1>Story Not Found</h1>
          <p>We couldn't find the story you're looking for.</p>
          <Link to="/impact#news" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
            Back to News &amp; Updates
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-header">
        <HeroSlideshow slides={STORY_SLIDES} />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>N2I Success Stories</h1>
            <p>Celebrating the milestones of N2I learners as they build real skills for the digital economy.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="team-profiles">
            <Reveal as="div" variant="left" className="team-profile">
              <div className="team-profile-image">
                <img src={story.image} alt={story.name} />
              </div>
              <div className="team-profile-content">
                <span className="eyebrow">{story.date}</span>
                <h2>{story.name}</h2>
                {story.body.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}

                {story.certificates && (
                  <div className="cert-widget">
                    <h3>Certificates &amp; Achievements</h3>
                    <Marquee duration={story.certificates.length === 1 ? 20 : 18}>
                      {story.certificates.map((cert) => (
                        <div className="cert-card" key={cert.label}>
                          <img src={cert.image} alt={cert.label} />
                          <div className="cert-label">{cert.label}</div>
                        </div>
                      ))}
                      {story.certificates.length === 1 && (
                        <div className="cert-spacer" aria-hidden="true" />
                      )}
                    </Marquee>
                  </div>
                )}

                <Link to="/impact#news" className="btn btn-outline-dark" style={{ marginTop: '24px', display: 'inline-block' }}>
                  Back to News &amp; Updates
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
