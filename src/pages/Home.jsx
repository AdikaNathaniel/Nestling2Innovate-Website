import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlideshow from '../components/HeroSlideshow.jsx';
import StatNumber from '../components/StatNumber.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroSlideshow />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Nurturing Ghana's Next Generation of Innovators</h1>
            <p>
              N2I delivers STEM, digital skills, and artificial intelligence education to school-age
              children and out-of-school youth in under-resourced communities — building a permanent
              Community STEM Innovation Centre, one learner at a time.
            </p>
            <div className="hero-actions">
              <Link to="/get-involved#apply" className="btn btn-primary">Apply / Enrol</Link>
              <Link to="/get-involved#donate" className="btn btn-outline">Support Our Mission</Link>
            </div>
          </div>

          <div className="hero-stats">
            <div><StatNumber target={172} /><span className="lbl">Learners Served</span></div>
            <div><StatNumber target={4} /><span className="lbl">Proof-of-Concept Programs</span></div>
            <div><StatNumber target={1} suffix="st" /><span className="lbl">Gemini AI Certified K12 in Ghana</span></div>
            <div><StatNumber target={2025} /><span className="lbl">Programs Launched</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container split">
          <Reveal variant="left">
            <span className="eyebrow">Who We Are</span>
            <h2>An initiative of the Baiden Etsiakoh Eagle Vision Foundation</h2>
            <p>
              BEEVIF is a Ghana-registered charitable foundation based in Tantra Hills, Accra. Our
              flagship initiative, Nestling 2Innovate, operates from the Special Grace Academy (SGA)
              campus, serving 172 learners while extending our reach to neighbouring schools and Senior
              High School graduates.
            </p>
            <p>
              Since 2025, we've run four proof-of-concept programs successfully and produced one of the
              first Google Gemini AI Certified (K12) students in Ghana. We're now scaling into a
              permanent Community STEM Innovation Centre and expanding access for rural communities with
              internet constraints.
            </p>
            <Link to="/about" className="btn btn-outline-dark">Read Our Full Story</Link>
          </Reveal>
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/about-students-classroom.jpg"
            alt="N2I learners studying together in the classroom at Special Grace Academy" />
        </div>
      </section>

      <section className="section-tint">
        <div className="container container-wide">
          <div className="section-head section-head-wide">
            <Reveal as="span" variant="slide-left" className="eyebrow">What We Teach</Reveal>
            <Reveal as="h2" variant="slide-right" delay={0.08} className="nowrap-heading">Programs Built for Real-World Skills</Reveal>
            <Reveal as="p" variant="fade" delay={0.18}>From foundational digital literacy to hands-on AI training, every N2I program is designed to move learners from curiosity to capability.</Reveal>
          </div>

          <div className="grid grid-4">
            <Reveal variant="drop" delay={0}>
              <div className="card">
                <img src="/images/programs-webdesign-woman-laptop.jpg" alt="Learner working on a web design project" />
                <div className="card-body">
                  <span className="card-tag">Pilot Program</span>
                  <h3>Web Design</h3>
                  <p>Foundations of building and publishing real websites.</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="drop" delay={0.12}>
              <div className="card">
                <img src="/images/programs-programming-code-nairobi.jpg" alt="Learner writing code on a computer" />
                <div className="card-body">
                  <span className="card-tag">Pilot Program</span>
                  <h3>Programming</h3>
                  <p>Core coding skills that open doors to further study and work.</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="drop" delay={0.24}>
              <div className="card">
                <img src="/images/programs-ai-literacy-boy-laptop.jpg" alt="Learner exploring AI tools on a laptop" />
                <div className="card-body">
                  <span className="card-tag">Pilot Program</span>
                  <h3>AI Literacy</h3>
                  <p>Practical, responsible AI skills — home to Ghana's first Gemini AI Certified K12 student.</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="drop" delay={0.36}>
              <div className="card">
                <img src="/images/programs-innovation-centre-lab.jpg" alt="Concept image of a modern STEM innovation lab" />
                <div className="card-body">
                  <span className="card-status">Coming Soon</span>
                  <h3>Innovation Centre</h3>
                  <p>A permanent, community-based home for STEM learning.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container split reverse">
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/impact-graduation-celebration.jpg"
            alt="Learners celebrating a milestone achievement" />
          <Reveal variant="left">
            <span className="eyebrow">Our Impact</span>
            <h2>Proof That This Model Works</h2>
            <p>
              In under a year, our proof-of-concept programs have moved from pilot to precedent —
              culminating in one of Ghana's first Google Gemini AI Certified (K12) students, a signal
              that under-resourced doesn't mean under-capable.
            </p>
            <p>We're now building the infrastructure to take this from four pilots to a permanent pipeline.</p>
            <Link to="/impact" className="btn btn-outline-dark">See Our Full Impact</Link>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="cta-banner">
          <div className="bg" style={{ backgroundImage: "url('/images/home-hero-abstract-tech.jpg')" }}></div>
          <div className="overlay"></div>
          <div className="inner">
            <h2>Help Us Build the Community STEM Innovation Centre</h2>
            <p>Your support funds classrooms, devices, and connectivity for learners in Accra and rural communities beyond it.</p>
            <div className="hero-actions">
              <Link to="/get-involved#donate" className="btn btn-primary">Donate Now</Link>
              <Link to="/get-involved#volunteer" className="btn btn-outline">Volunteer / Mentor</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
