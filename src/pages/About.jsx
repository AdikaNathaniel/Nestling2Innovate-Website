import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import HeroSlideshow from '../components/HeroSlideshow.jsx';

const ABOUT_SLIDES = [
  '/images/about-students-classroom.jpg',
  '/images/latest-images/4.jpeg',
  '/images/impact-graduation-celebration.jpg',
  '/images/latest-images/1.jpeg',
  '/images/programs-students-classroom.jpg',
  '/images/latest-images/5.jpeg',
  '/images/home-hero-family.jpg',
  '/images/latest-images/2.jpeg',
  '/images/latest-images/3.jpeg',
];

export default function About() {
  return (
    <>
      <section className="page-header">
        <HeroSlideshow slides={ABOUT_SLIDES} />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Our Story, Mission &amp; the People Behind N2I</h1>
            <p>From a Ghana-registered foundation to a growing pipeline of STEM, digital and AI talent — here's who we are and why we do this work.</p>
          </div>
        </div>
      </section>

      <section id="story">
        <div className="container split">
          <Reveal variant="left">
            <span className="eyebrow">Our Story</span>
            <h2>The Baiden Etsiakoh Eagle Vision Foundation</h2>
            <p>
              BEEVIF is a Ghana-registered charitable foundation based in Tantra Hills, Accra. Our
              primary initiative, <strong>Nestling2Innovate (N2I)</strong>, delivers STEM, digital
              skills, and artificial intelligence education to school-age children and out-of-school
              youth in under-resourced communities.
            </p>
            <p>
              Operating from the Special Grace Academy (SGA) campus, N2I serves 172 learners while
              extending our reach to neighbouring schools and Senior High School (SHS) graduates. Since
              2025, we have successfully run four proof-of-concept programs in web design, global
              virtual internships, programming, and AI literacy — producing one of the first Google
              Gemini AI Certified (K12) students in Ghana.
            </p>
            <p>
              We are now scaling these pilots into a permanent Community STEM Innovation Centre and a
              structured digital-and-AI skills pipeline, including expanding access to quality education
              for rural areas with internet constraints.
            </p>
          </Reveal>
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/programs-students-classroom.jpg"
            alt="N2I learners at the Special Grace Academy campus"
            style={{ height: '640px' }} />
        </div>
      </section>

      <section className="section-tint" id="mission">
        <div className="container split reverse">
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/community-rural-children-nigeria.jpg"
            alt="Children in a rural community N2I aims to reach" />
          <Reveal variant="left">
            <span className="eyebrow">Mission &amp; Vision</span>
            <p>
              <strong>Our mission</strong> is to equip school-age children and out-of-school youth in
              under-resourced Ghanaian communities with the STEM, digital, and AI skills they need to
              compete and thrive — regardless of their starting point.
            </p>
            <p>
              <strong>Our vision</strong> is a permanent Community STEM Innovation Centre anchored in
              Accra, extending a structured skills pipeline into rural communities where internet access
              remains a barrier — so that geography never determines opportunity.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" variant="slide-left" className="eyebrow">Our Team</Reveal>
            <Reveal as="h2" variant="slide-right" delay={0.08}>The People Building N2I</Reveal>
            <Reveal as="p" variant="fade" delay={0.18}>A small, hands-on team driving BEEVIF's mission from pilot programs to a permanent Innovation Centre.</Reveal>
          </div>

          <div className="team-grid">
            <Reveal variant="drop" delay={0} className="team-card">
              <img src="/team/samueletsiakohdp.jpg.jpeg" alt="Samuel Etsiakoh" />
              <h3>Samuel Etsiakoh</h3>
              <div className="role">Founder, BEEVIF</div>
            </Reveal>

            <Reveal variant="drop" delay={0.12} className="team-card">
              <img src="/team/mawunyo-kwasi-kutor.jpeg" alt="Mawunyo Kwasi Kutor" />
              <h3>Mawunyo Kwasi Kutor</h3>
              <div className="role">Digital Skills Trainer</div>
            </Reveal>

            <Reveal variant="drop" delay={0.24} className="team-card">
              <img src="/team/nathaniel-adika.jpeg" alt="Nathaniel Adika" />
              <h3>Nathaniel Adika</h3>
              <div className="role">Digital Skills Trainer</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="cta-banner" style={{ margin: 0, padding: '50px 40px' }}>
            <div className="inner">
              <h2>Want to Join the Team?</h2>
              <p>We're always looking for educators, mentors, and partners who believe in this mission.</p>
              <div className="hero-actions">
                <Link to="/get-involved#volunteer" className="btn btn-primary">Volunteer With Us</Link>
                <Link to="/about#contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
