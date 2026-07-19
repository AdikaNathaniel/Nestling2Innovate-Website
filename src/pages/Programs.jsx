import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import HeroSlideshow from '../components/HeroSlideshow.jsx';

const PROGRAMS_SLIDES = [
  '/images/programs-students-classroom.jpg',
  '/images/latest-images/2.jpeg',
  '/images/home-hero-family.jpg',
  '/images/latest-images/3.jpeg',
  '/images/about-students-classroom.jpg',
  '/images/latest-images/5.jpeg',
  '/images/impact-graduation-celebration.jpg',
  '/images/latest-images/1.jpeg',
  '/images/latest-images/4.jpeg',
];

export default function Programs() {
  return (
    <>
      <section className="page-header">
        <HeroSlideshow slides={PROGRAMS_SLIDES} />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>From First Click to Real-World Capability</h1>
            <p>Four proof-of-concept programs, run since 2025, now scaling into a structured digital-and-AI skills pipeline.</p>
          </div>
        </div>
      </section>

      <section id="web-design">
        <div className="container split">
          <Reveal variant="left">
            <span className="card-tag">Pilot Program &middot; Since 2025</span>
            <h2>Web Design</h2>
            <p>
              Learners build and publish real websites from scratch — covering layout, content, and the
              fundamentals of how the web works. This program gives beginners a tangible, shareable
              portfolio piece from day one.
            </p>
            <p>
              No prior coding experience is required — the emphasis is on hands-on projects rather than
              theory, and every learner leaves with a published website by the end of the program.
            </p>
            <Link to="/get-involved#apply" className="btn btn-outline-dark">Apply for This Program</Link>
          </Reveal>
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/programs-webdesign-woman-laptop.jpg"
            alt="Learner working on a web design project on a laptop" />
        </div>
      </section>

      <section className="section-tint" id="internships">
        <div className="container split reverse">
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/get-involved-internship-professional.jpg"
            alt="A young professional taking part in a virtual internship" />
          <Reveal variant="left">
            <span className="card-tag">Pilot Program &middot; Since 2025</span>
            <h2>Global Virtual Internships</h2>
            <p>
              N2I connects learners and Senior High School graduates with remote internship experiences,
              building professional communication, collaboration, and workplace-readiness skills
              alongside international peers and mentors.
            </p>
            <p>
              Open to SHS graduates and advanced learners, this track provides real remote-work
              experience and references — bridging the gap between school and employment.
            </p>
            <Link to="/get-involved#apply" className="btn btn-outline-dark">Apply for This Program</Link>
          </Reveal>
        </div>
      </section>

      <section id="programming">
        <div className="container split">
          <Reveal variant="left">
            <span className="card-tag">Pilot Program &middot; Since 2025</span>
            <h2>Programming</h2>
            <p>
              Core programming skills form the backbone of N2I's curriculum — giving learners the logic,
              problem-solving, and coding fundamentals that open doors to further study, internships, and
              employment in technology.
            </p>
            <p>
              The curriculum is structured and beginner-friendly, with a clear progression pathway into
              advanced modules and a direct link into our Global Virtual Internships track.
            </p>
            <Link to="/get-involved#apply" className="btn btn-outline-dark">Apply for This Program</Link>
          </Reveal>
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/programs-programming-code-nairobi.jpg"
            alt="Learner writing and reviewing code on dual monitors" />
        </div>
      </section>

      <section className="section-tint" id="ai-literacy">
        <div className="container split reverse">
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/programs-ai-literacy-boy-laptop.jpg"
            alt="A young learner exploring AI tools on a laptop" />
          <Reveal variant="left">
            <span className="card-tag">Pilot Program &middot; Since 2025</span>
            <h2>AI Literacy</h2>
            <p>
              Practical, responsible artificial intelligence education — teaching learners not just how
              to use AI tools, but how to think critically about them. This program produced one of the
              first <strong>Google Gemini AI Certified (K12)</strong> students in Ghana.
            </p>
            <p>
              Learning is hands-on and tool-based, with a strong focus on responsible and critical AI
              use, and a clear pathway to recognised AI certification.
            </p>
            <Link to="/get-involved#apply" className="btn btn-outline-dark">Apply for This Program</Link>
          </Reveal>
        </div>
      </section>

      <section id="innovation-centre">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" variant="slide-left" className="card-status">Coming Soon</Reveal>
            <Reveal as="h2" variant="slide-right" delay={0.08}>Community STEM Innovation Centre</Reveal>
            <Reveal as="p" variant="fade" delay={0.18}>
              We're scaling our four proof-of-concept programs into a permanent, purpose-built home for
              STEM, digital, and AI learning — a structured pipeline rather than a series of pilots.
            </Reveal>
          </div>
          <div className="split">
            <Reveal as="img" variant="right" delay={0.1}
              src="/images/programs-innovation-centre-lab.jpg"
              alt="Concept image representing the future Community STEM Innovation Centre" />
            <Reveal variant="left">
              <h3>What the Centre Will Make Possible</h3>
              <p>
                The Centre will be a permanent facility beyond the SGA campus, open to the wider
                community, housing a structured digital-and-AI skills pipeline from beginner to advanced.
                It will also expand access for rural communities with internet constraints, with
                dedicated space and equipment for hands-on STEM learning.
              </p>
              <Link to="/get-involved#donate" className="btn btn-primary">Help Fund the Centre</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="cta-banner">
          <div className="bg" style={{ backgroundImage: "url('/images/community-rural-children-nigeria.jpg')" }}></div>
          <div className="overlay"></div>
          <div className="inner">
            <h2>Extending Access to Rural Communities</h2>
            <p>Part of our pipeline is designed specifically for areas with limited internet access — because geography shouldn't limit opportunity.</p>
            <div className="hero-actions">
              <Link to="/get-involved#partner" className="btn btn-primary">Partner With Us</Link>
              <Link to="/impact" className="btn btn-outline">See Our Impact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
