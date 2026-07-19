import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import StatNumber from '../components/StatNumber.jsx';
import Marquee from '../components/Marquee.jsx';

const TESTIMONIALS = [
  {
    quote: '"Becoming one of the first Gemini AI Certified K12 students in Ghana showed me — and everyone back home — that where you start doesn\'t decide where you can get to."',
    name: 'AI Literacy Program Graduate',
    meta: 'Special Grace Academy Campus',
  },
  {
    quote: '"Four pilot programs in under a year, with real, measurable outcomes — that\'s the foundation we\'re now scaling into a permanent Innovation Centre."',
    name: 'Nestling2Innovate Team',
    meta: 'BEEVIF, Accra',
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="quote-card marquee-card">
      <p className="quote">{t.quote}</p>
      <div className="attrib">
        <div className="dot">N2I</div>
        <div>
          <div className="name">{t.name}</div>
          <div className="meta">{t.meta}</div>
        </div>
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <>
      <section className="page-header">
        <div className="hero-bg" style={{ backgroundImage: "url('/images/impact-graduation-celebration.jpg')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>From Four Pilots to a Precedent</h1>
            <p>What we've proven since 2025 — and why it's the foundation for everything N2I is scaling into next.</p>
          </div>
        </div>
      </section>

      <section className="stat-strip" id="impact">
        <div className="container grid grid-4">
          <div>
            <StatNumber target={172} />
            <span className="lbl">Learners Served</span>
          </div>
          <div>
            <StatNumber target={4} />
            <span className="lbl">Proof-of-Concept Programs</span>
          </div>
          <div>
            <StatNumber target={1} suffix="st" />
            <span className="lbl">Gemini AI Certified K12 Student in Ghana</span>
          </div>
          <div>
            <StatNumber target={2025} />
            <span className="lbl">Programs Launched</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container split">
          <Reveal variant="left">
            <span className="eyebrow">Our Impact</span>
            <h2>A Milestone Worth Building On</h2>
            <p>
              Since 2025, N2I has run four proof-of-concept programs — Web Design, Global Virtual
              Internships, Programming, and AI Literacy — reaching 172 learners at the Special Grace
              Academy campus and extending into neighbouring schools.
            </p>
            <p>
              The clearest signal that this model works: N2I produced one of the first{' '}
              <strong>Google Gemini AI Certified (K12)</strong> students in Ghana — proof that
              under-resourced learners, given the right structure, can reach globally recognised
              standards.
            </p>
            <Link to="/programs" className="btn btn-outline-dark">See the Programs Behind These Results</Link>
          </Reveal>
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/impact-team-high-five.jpg"
            alt="Learners and mentors celebrating success together" />
        </div>
      </section>

      <section className="section-tint" id="stories">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" variant="slide-left" className="eyebrow">Success Stories</Reveal>
            <Reveal as="h2" variant="slide-right" delay={0.08}>What This Looks Like in Practice</Reveal>
          </div>
        </div>
        <Marquee duration={20}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard t={t} key={i} />
          ))}
        </Marquee>
      </section>

      <section id="news">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" variant="slide-left" className="eyebrow">News &amp; Updates</Reveal>
            <Reveal as="h2" variant="slide-right" delay={0.08}>What's Next for N2I</Reveal>
          </div>

          <Reveal variant="drop" delay={0} as="div" className="news-item">
            <img src="/images/programs-innovation-centre-lab.jpg" alt="Concept image for the Community STEM Innovation Centre" />
            <div>
              <div className="date">2025</div>
              <h3>Scaling Toward a Permanent Innovation Centre</h3>
              <p>Following four successful proof-of-concept programs, N2I is moving from pilots to a permanent Community STEM Innovation Centre and a structured digital-and-AI skills pipeline.</p>
            </div>
          </Reveal>

          <Reveal variant="drop" delay={0.1} as="div" className="news-item">
            <img src="/images/programs-ai-literacy-boy-laptop.jpg" alt="Learner completing AI literacy coursework" />
            <div>
              <div className="date">2025</div>
              <h3>Ghana's First Gemini AI Certified K12 Students</h3>
              <p>Our AI Literacy program produced one of the first Google Gemini AI Certified (K12) students in Ghana — a milestone for both the learner and the program.</p>
            </div>
          </Reveal>

          <Reveal variant="drop" delay={0.2} as="div" className="news-item">
            <img src="/images/community-rural-children-nigeria.jpg" alt="Children in a rural community" />
            <div>
              <div className="date">Coming Soon</div>
              <h3>Extending the Pipeline to Rural Communities</h3>
              <p>Plans are underway to expand access to quality STEM and AI education for rural areas with internet constraints.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="cta-banner">
          <div className="bg" style={{ backgroundImage: "url('/images/home-hero-abstract-tech.jpg')" }}></div>
          <div className="overlay"></div>
          <div className="inner">
            <h2>Be Part of the Next Chapter</h2>
            <p>From pilot to permanent — help us take this model further.</p>
            <div className="hero-actions">
              <Link to="/get-involved#donate" className="btn btn-primary">Donate</Link>
              <Link to="/get-involved#partner" className="btn btn-outline">Partner With Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
