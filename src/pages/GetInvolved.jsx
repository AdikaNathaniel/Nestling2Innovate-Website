import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import HeroSlideshow from '../components/HeroSlideshow.jsx';

const GET_INVOLVED_SLIDES = [
  '/images/impact-graduation-celebration.jpg',
  '/images/latest-images/5.jpeg',
  '/images/home-hero-family.jpg',
  '/images/latest-images/4.jpeg',
  '/images/about-students-classroom.jpg',
  '/images/latest-images/1.jpeg',
  '/images/programs-students-classroom.jpg',
  '/images/latest-images/3.jpeg',
  '/images/latest-images/2.jpeg',
];

export default function GetInvolved() {
  return (
    <>
      <section className="page-header">
        <HeroSlideshow slides={GET_INVOLVED_SLIDES} />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Three Ways to Move This Mission Forward</h1>
            <p>Whether you're a learner, a mentor, or an organisation — there's a place for you in N2I's next chapter.</p>
          </div>
        </div>
      </section>

      <section id="apply">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" variant="slide-left" className="eyebrow">For Learners</Reveal>
            <Reveal as="h2" variant="slide-right" delay={0.08}>Apply / Enrol</Reveal>
            <Reveal as="p" variant="fade" delay={0.18}>N2I welcomes school-age children, out-of-school youth, and Senior High School graduates from the SGA campus and neighbouring communities.</Reveal>
          </div>
          <div className="involve-grid">
            <Reveal variant="drop" delay={0} className="involve-card">
              <img src="/images/get-involved-shs-graduate-laptop.jpg" alt="An SHS graduate studying on a laptop" />
              <div className="scrim"></div>
              <div className="content">
                <h3>School-Age &amp; Out-of-School Youth</h3>
                <p>Join our core programs in Web Design, Programming, and AI Literacy at the Special Grace Academy campus.</p>
                <a href="mailto:info@nestling2innovate.org?subject=Program%20Application" className="btn btn-primary">Start an Application</a>
              </div>
            </Reveal>
            <Reveal variant="drop" delay={0.12} className="involve-card">
              <img src="/images/programs-ai-literacy-boy-laptop.jpg" alt="A learner engaging with AI literacy coursework" />
              <div className="scrim"></div>
              <div className="content">
                <h3>Senior High School Graduates</h3>
                <p>Move into our Global Virtual Internships track and build real, remote-work experience.</p>
                <a href="mailto:info@nestling2innovate.org?subject=Internship%20Application" className="btn btn-primary">Apply for Internships</a>
              </div>
            </Reveal>
          </div>
          <div className="info-box" style={{ marginTop: 28 }}>
            <strong>Note:</strong> Online enrolment is coming soon. For now, applications are handled directly —
            use the buttons above or the contact details in our footer to reach the N2I team.
          </div>
        </div>
      </section>

      <section className="section-tint" id="volunteer">
        <div className="container split">
          <Reveal variant="left">
            <span className="eyebrow">For Mentors &amp; Educators</span>
            <h2>Volunteer &amp; Mentor</h2>
            <p>
              Our programs run on the time and expertise of volunteer mentors and educators — from
              running a single workshop to mentoring a learner through an entire program cycle.
            </p>
            <p>
              We offer flexible, remote-friendly mentorship options for subject-matter volunteers across
              Web Design, Programming, and AI Literacy, as well as support for our Global Virtual
              Internships track.
            </p>
            <a href="https://forms.gle/4ry4xDKefR5ZzRRe9" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Become a Volunteer</a>
          </Reveal>
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/get-involved-mentor-teacher.jpg"
            alt="A mentor teaching a class at Special Grace Academy" />
        </div>
      </section>

      <section id="partner">
        <div className="container split reverse">
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/get-involved-partner-lagos-meeting.jpg"
            alt="A team of professionals collaborating on a partnership" />
          <Reveal variant="left">
            <span className="eyebrow">For Organisations</span>
            <h2>Partner With Us</h2>
            <p>
              We work with schools, NGOs, and corporate partners to expand what's possible — from
              equipment and connectivity for the Community STEM Innovation Centre, to internship
              placements and curriculum support.
            </p>
            <p>
              This includes corporate and NGO partnerships, school and community partnerships, and
              in-kind support such as devices, connectivity, and curriculum expertise.
            </p>
            <a href="mailto:info@nestling2innovate.org?subject=Partnership%20Inquiry" className="btn btn-outline-dark">Start a Partnership Conversation</a>
          </Reveal>
        </div>
      </section>

      <section className="section-dark" id="donate">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" variant="slide-left" className="eyebrow" style={{ color: '#bdf3ff' }}>Support Our Mission</Reveal>
            <Reveal as="h2" variant="slide-right" delay={0.08}>Donate</Reveal>
            <Reveal as="p" variant="fade" delay={0.18}>Your support funds the Community STEM Innovation Centre and our expansion into rural, low-connectivity communities.</Reveal>
          </div>

          <div className="hero-actions" style={{ marginTop: 24, justifyContent: 'center' }}>
            <a href="mailto:info@nestling2innovate.org?subject=Donation%20Inquiry" className="btn btn-primary">Contact Us to Donate</a>
            <Link to="/impact" className="btn btn-outline">See Where Funds Go</Link>
          </div>
        </div>
      </section>
    </>
  );
}
