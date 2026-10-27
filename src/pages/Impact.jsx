import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import StatNumber from '../components/StatNumber.jsx';
import Marquee from '../components/Marquee.jsx';
import HeroSlideshow from '../components/HeroSlideshow.jsx';
import TypewriterHeading from '../components/TypewriterHeading.jsx';

const IMPACT_HEADLINES = [
  'From Four Pilots to a Precedent',
  'Proof That This Model Works',
  'Small Cohorts, Measurable Results',
  "Building Evidence for What's Next",
  'From Pilot Programs to Lasting Change',
];

const IMPACT_SLIDES = [
  '/images/home-hero-family.jpg',
  '/images/st_3.jpg',
  '/images/latest-images/2.jpeg',
  '/images/students_1.jpg',
  '/images/latest-images/3.jpeg',
  '/images/st_5.jpg',
  '/images/about-students-classroom.jpg',
  '/images/programs-students-classroom.jpg',
  '/images/st_1.jpg',
  '/images/latest-images/4.jpeg',
  '/images/latest-images/1.jpeg',
  '/images/st_4.jpg',
  '/images/latest-images/5.jpeg',
  '/images/st_2.jpg',
];

const TESTIMONIALS = [
  {
    quote: '"Becoming one of the first Gemini AI Certified K12 students in Ghana showed me — and everyone back home — that where you start doesn\'t decide where you can get to."',
    name: 'AI Literacy Program Graduate',
    meta: 'Special Grace Academy Campus',
  },
  {
    quote: '"Four pilot programs in under a year, with real, measurable outcomes — that\'s the foundation we\'re now scaling into a permanent Innovation Centre."',
    name: 'Nestling 2Innovate Team',
    meta: 'BEEVIF, Accra',
  },
];

// From the N2I Impact Report flyer, June 2025 – August 2026.
const PROGRAMMES = [
  { name: 'Responsive Web Design', meta: 'Web development · 2025', girls: 2, boys: 0, completed: 2 },
  { name: 'Deloitte Switzerland × SuaCode', meta: 'Coding · 2025', girls: 2, boys: 4, completed: 1 },
  { name: 'Google Gemini Certificate (K12) · Cohort 1', meta: 'AI/ML · 2026', girls: 5, boys: 1, completed: 5 },
  { name: 'Google Gemini Certificate (K12) · Cohort 2', meta: 'AI/ML · 2026', girls: 3, boys: 6, completed: 9 },
];

// Virtual internship & job simulation partners, cropped from the impact flyer.
const PARTNERS = [
  ['mastercard', 'Mastercard'],
  ['bny', 'BNY'],
  ['deloitte', 'Deloitte'],
  ['siemens', 'Siemens'],
  ['red-bull', 'Red Bull'],
  ['datacom', 'Datacom'],
  ['skyscanner', 'Skyscanner'],
  ['bloomberg', 'Bloomberg'],
  ['ea', 'EA'],
  ['accenture', 'Accenture'],
  ['pfizer', 'Pfizer'],
  ['cbre', 'CBRE'],
  ['third-bridge', 'Third Bridge'],
  ['city-century', 'City Century'],
  ['bcg', 'Boston Consulting Group'],
];

const TOTAL_LEARNERS = PROGRAMMES.reduce((sum, p) => sum + p.girls + p.boys, 0);
const TOTAL_GIRLS = PROGRAMMES.reduce((sum, p) => sum + p.girls, 0);
const TOTAL_CERTIFICATES = PROGRAMMES.reduce((sum, p) => sum + p.completed, 0);
const percent = (part, whole) => Math.round((part / whole) * 100);

function ProgrammeRow({ p }) {
  const learners = p.girls + p.boys;
  const done = percent(p.completed, learners);
  return (
    <div className="programme-row">
      <div className="programme-name">
        <h3>{p.name}</h3>
        <span>{p.meta}</span>
      </div>
      <div className="programme-learners">
        <strong>{learners}</strong>
        <span>learners</span>
      </div>
      <div className="programme-gender">
        <div className="gender-bar" aria-hidden="true">
          <span className="girls" style={{ width: `${percent(p.girls, learners)}%` }}></span>
          <span className="boys" style={{ width: `${percent(p.boys, learners)}%` }}></span>
        </div>
        <span>
          {p.girls} {p.girls === 1 ? 'girl' : 'girls'} &middot; {p.boys} {p.boys === 1 ? 'boy' : 'boys'}
        </span>
      </div>
      <div className="programme-completed">
        <div>
          <strong>{p.completed}/{learners}</strong> <span>{done}% completed</span>
        </div>
        <div className="completion-bar" aria-hidden="true">
          <span style={{ width: `${done}%` }}></span>
        </div>
      </div>
    </div>
  );
}

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
      <section className="page-header page-header-wide">
        <HeroSlideshow slides={IMPACT_SLIDES} />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <TypewriterHeading as="h1" className="nowrap-heading" phrases={IMPACT_HEADLINES} />
            <p>What we've proven since 2025, and why it's the foundation for everything N2I is scaling into next.</p>
          </div>
        </div>
      </section>

      <section className="stat-strip" id="impact">
        <div className="container grid grid-4">
          <div>
            <StatNumber target={TOTAL_LEARNERS} />
            <span className="lbl">Learners Served</span>
          </div>
          <div>
            <StatNumber target={PROGRAMMES.length} />
            <span className="lbl">Programmes Delivered</span>
          </div>
          <div>
            <span className="num">Early</span>
            <span className="lbl">Among Ghana's First Gemini AI Certified K12 Students</span>
          </div>
          <div>
            <StatNumber target={TOTAL_CERTIFICATES} />
            <span className="lbl">Certificates Earned</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container split">
          <Reveal variant="left">
            <span className="eyebrow">Our Impact</span>
            <h2>A Milestone Worth Building On</h2>
            <p>
              Between June 2025 and August 2026, with no team and no external funding, N2I delivered
              four programmes in web development, coding and AI/ML, reaching {TOTAL_LEARNERS} learners
              at the Special Grace Academy campus and neighbouring schools. {TOTAL_CERTIFICATES} certificates
              were earned, and learners also completed global virtual internships and job simulations.
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

      <section id="programmes">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" variant="slide-left" className="eyebrow">Impact Report &middot; June 2025 – August 2026</Reveal>
            <Reveal as="h2" variant="slide-right" delay={0.08}>
              {TOTAL_LEARNERS} Learners. Zero Funding.
            </Reveal>
            <p>
              {percent(TOTAL_CERTIFICATES, TOTAL_LEARNERS)}% completion rate &middot;{' '}
              {percent(TOTAL_GIRLS, TOTAL_LEARNERS)}% girls ({TOTAL_GIRLS} of {TOTAL_LEARNERS})
            </p>
          </div>

          <Reveal variant="drop" className="programme-table">
            {PROGRAMMES.map((p) => (
              <ProgrammeRow p={p} key={p.name} />
            ))}
            <div className="programme-legend" aria-hidden="true">
              <span><i className="girls"></i>Girls</span>
              <span><i className="boys"></i>Boys</span>
            </div>
          </Reveal>

          <Reveal variant="drop" delay={0.1} className="internship-logos">
            <div className="internship-logos-text">
              <span className="eyebrow">Virtual Internships &amp; Job Simulations</span>
              <p>Completed by N2I learners in 2025</p>
            </div>
            <Marquee duration={35} className="logo-marquee">
              {PARTNERS.map(([file, name]) => (
                <div className="logo-tile" key={file}>
                  <img src={`/images/partners/${file}.png`} alt={name} loading="lazy" />
                </div>
              ))}
            </Marquee>
          </Reveal>
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

          <div className="news-grid">
          <Reveal variant="drop" delay={0} as={Link} to="/news/lauren-patterson" className="news-item news-item-link">
            <img src="/news/lauren-patterson.jpg" alt="Lauren Patterson" />
            <div>
              <div className="date">2026 &middot; Success Story</div>
              <h3>N2I Success Story: Lauren Patterson</h3>
              <p>SGA graduate and N2I participant Lauren Patterson earned her freeCodeCamp Responsive Web Design Certification and completed virtual job simulations with BCG and City Century Solicitors. Read her story.</p>
            </div>
          </Reveal>

          <Reveal variant="drop" delay={0.1} as={Link} to="/news/trudy-kanbong" className="news-item news-item-link">
            <img src="/news/trudy-kanbong.jpg" alt="Trudy Kanbong" />
            <div>
              <div className="date">2026 &middot; Success Story</div>
              <h3>N2I Success Story: Trudy Kanbong</h3>
              <p>N2I AI Literacy participant Trudy Kanbong became one of the first Google Gemini AI Certified (K12) students in Ghana. Read her story.</p>
            </div>
          </Reveal>

          <Reveal variant="drop" delay={0.2} as={Link} to="/news/sawda-kareem" className="news-item news-item-link">
            <img src="/news/sawda-kareem.jpg" alt="Sawda Kareem" />
            <div>
              <div className="date">2026 &middot; Success Story</div>
              <h3>N2I Success Story: Sawda Kareem</h3>
              <p>N2I participant Sawda Kareem became one of the first Google Gemini AI Certified (K12) students in Ghana. Read her story.</p>
            </div>
          </Reveal>

          <Reveal variant="drop" delay={0.3} as="div" className="news-item">
            <img src="/news/jeff.jpeg" alt="Jeff, N2I AI Literacy participant" />
            <div>
              <div className="date">2026 &middot; Learner Spotlight</div>
              <h3>N2I Learner Spotlight: Jeff</h3>
              <p>Jeff, 14, completed his BECE at another school before joining N2I. He's now learning Artificial Intelligence, currently working through a lesson on colour detection.</p>
            </div>
          </Reveal>

          <Reveal variant="drop" delay={0.4} as="div" className="news-item">
            <img src="/images/programs-ai-literacy-boy-laptop.jpg" alt="Learner completing AI literacy coursework" />
            <div>
              <div className="date">2025</div>
              <h3>Among Ghana's First Gemini AI Certified K12 Students</h3>
              <p>Our AI Literacy program produced one of the first Google Gemini AI Certified (K12) students in Ghana — a milestone for both the learner and the program.</p>
            </div>
          </Reveal>

          <Reveal variant="drop" delay={0.5} as="div" className="news-item">
            <img src="/images/community-rural-children-nigeria.jpg" alt="Children in a rural community" />
            <div>
              <div className="date">Coming Soon</div>
              <h3>Extending the Pipeline to Rural Communities</h3>
              <p>Plans are underway to expand access to quality STEM and AI education for rural areas with internet constraints.</p>
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="cta-banner">
          <div className="bg" style={{ backgroundImage: "url('/images/home-hero-abstract-tech.jpg')" }}></div>
          <div className="overlay"></div>
          <div className="inner">
            <h2>Be Part of the Next Chapter</h2>
            <p>This is what we built with nothing. Imagine it with you.</p>
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
