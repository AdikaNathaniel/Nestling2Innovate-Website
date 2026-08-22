import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import HeroSlideshow from '../components/HeroSlideshow.jsx';
import TypewriterHeading from '../components/TypewriterHeading.jsx';

const STORY_HEADLINES = [
  'Our Story, Mission & the People Behind N2I',
  'Our Mission, Our Roots, Our Growing Team',
  'The Foundation, the Vision, the People',
  "Where BEEVIF's Story Meets N2I's Mission",
  "Meet the Team Building Ghana's Future",
];

const ABOUT_SLIDES = [
  '/images/about-students-classroom.jpg',
  '/images/latest-images/4.jpeg',
  '/images/students_1.jpg',
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
      <section className="page-header page-header-wide">
        <HeroSlideshow slides={ABOUT_SLIDES} />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <TypewriterHeading as="h1" className="nowrap-heading" phrases={STORY_HEADLINES} />
            <p>From a Ghana-registered foundation to a growing pipeline of STEM, digital and AI talent, here's who we are and why we do this work.</p>
          </div>
        </div>
      </section>

      <section id="story" style={{ paddingBottom: '32px' }}>
        <div className="container split">
          <Reveal variant="left">
            <span className="eyebrow">Our Story</span>
            <h2>The Baiden Etsiakoh Eagle Vision Foundation</h2>
            <p>
              BEEVIF is a Ghana-registered charitable foundation based in Tantra Hills, Accra. Our
              primary programme, the <strong>Nestling 2Innovate Initiative (N2I)</strong>, delivers STEM,
              digital skills, and artificial intelligence education to school-age children and
              out-of-school youth in under-resourced communities.
            </p>
            <p>
              Operating from the Special Grace Academy (SGA) campus, N2I serves 18 learners while
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

      <section id="why-n2i" style={{ padding: '24px 0' }}>
        <div className="container">
          <Reveal as="h2" variant="slide-right" className="nowrap-heading" style={{ marginBottom: 20, textAlign: 'center' }}>Why Nestling 2Innovate Initiative (N2I)?</Reveal>
          <Reveal variant="fade">
            <p>
              Across Ghana's Junior High Schools, students who grew up on smartphones still
              underperform in their ICT exams. Not from lack of ability, but from lack of anything to
              build. Classrooms teach ICT in theory, with little equipment or hands-on practice, so a
              generation that already loves technology rarely gets to create with it.
            </p>
            <p>
              We built Nestling 2Innovate (N2I), an education initiative under BEEVIF, a registered
              Ghanaian NGO, to close that gap — teaching web development, programming, and artificial
              intelligence, already in the JHS syllabus, through a "Nestling → Fledgling → Eagle"
              learner pathway.
            </p>
            <p>
              N2I is already working. Across five pilot tracks, N2I has moved 18 learners through
              hands-on training, with 100% completion in its web design and internship cohorts. One
              14-year-old Raspberry Pi student alone built four software projects, including an AI tool
              and a game.
            </p>
            <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.2rem', margin: '28px 0' }}>
              These kids don't just learn about technology. They build with it.
            </p>
            <p>
              N2I's ambition doesn't stop at JHS. It also targets SHS graduates priced out of a
              university degree — equipping them with digital skills, then working to place them with
              mission-aligned partners for further education, paid internships, and jobs, and staying
              involved through university and beyond. For donors and investors, that's where the return
              lives: a talent-pipeline model that pays off as graduates get hired.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tint" id="mission">
        <div className="container split reverse">
          <Reveal as="img" variant="right" delay={0.1}
            src="/images/community-rural-children-nigeria.jpg"
            alt="Children in a rural community N2I aims to reach" />
          <Reveal variant="left">
            <span className="eyebrow">Mission &amp; Vision</span>
            <h2>Why We Do This Work</h2>
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
              <Link to="/team#samuel-etsiakoh">
                <img src="/team/samueletsiakohdp.jpg.jpeg" alt="Samuel Etsiakoh" />
              </Link>
              <h3>Samuel Etsiakoh</h3>
              <div className="role">Founder and Director</div>
            </Reveal>

            <Reveal variant="drop" delay={0.12} className="team-card">
              <Link to="/team#edwin-kpodzro">
                <img src="/team/edwin-kpodzro.png" alt="Edwin Kpodzro" />
              </Link>
              <h3>Edwin Kpodzro</h3>
              <div className="role">Director of Innovation and Growth</div>
            </Reveal>

            <Reveal variant="drop" delay={0.24} className="team-card">
              <Link to="/team#surya-js">
                <img src="/team/surya-js.jpeg" alt="Surya J S" />
              </Link>
              <h3>Surya J S</h3>
              <div className="role">Grant Manager</div>
            </Reveal>

            <Reveal variant="drop" delay={0.36} className="team-card">
              <Link to="/team#xornam-kumordzie">
                <img src="/team/xornam-kumordzie.jpeg" alt="Xornam Kumordzie" />
              </Link>
              <h3>Xornam Kumordzie</h3>
              <div className="role">Project Coordination and Learning Community Management</div>
            </Reveal>

            <Reveal variant="drop" delay={0.48} className="team-card">
              <Link to="/team#prince-kweku-entsie">
                <img src="/team/prince-kweku-entsie.jpeg" alt="Prince Kweku Entsie" />
              </Link>
              <h3>Prince Kweku Entsie</h3>
              <div className="role">Program Advisor</div>
            </Reveal>

            <Reveal variant="drop" delay={0.6} className="team-card">
              <Link to="/team#mawunyo-kwasi-kutor">
                <img src="/team/mawunyo-kwasi-kutor.jpeg" alt="Mawunyo Kwasi Kutor" />
              </Link>
              <h3>Mawunyo Kwasi Kutor</h3>
              <div className="role">Digital Skills Trainer</div>
            </Reveal>

            <Reveal variant="drop" delay={0.72} className="team-card">
              <Link to="/team#nathaniel-adika">
                <img src="/team/nathaniel-adika.jpeg" alt="Nathaniel Adika" />
              </Link>
              <h3>Nathaniel Adika</h3>
              <div className="role">Digital Skills Trainer</div>
            </Reveal>

            <Reveal variant="drop" delay={0.84} className="team-card">
              <Link to="/team#chioma-osanebi">
                <img src="/team/chioma-osanebi.jpeg" alt="Chioma Osanebi" />
              </Link>
              <h3>Chioma Osanebi</h3>
              <div className="role">Social Media Manager</div>
            </Reveal>

            <Reveal variant="drop" delay={0.96} className="team-card">
              <Link to="/team#mina-ama-mokani">
                <img src="/team/mina-ama-mokani.jpeg" alt="Mina Ama Mokani" />
              </Link>
              <h3>Mina Ama Mokani</h3>
              <div className="role">Diversity, Equity &amp; Inclusion Coordinator</div>
            </Reveal>

            <Reveal variant="drop" delay={1.08} className="team-card">
              <Link to="/team#sandra-boakye-boaitey">
                <img src="/team/sandra-boakye-boaitey.jpeg" alt="Sandra Boakye Boaitey" />
              </Link>
              <h3>Sandra Boakye Boaitey</h3>
              <div className="role">Operations Manager</div>
            </Reveal>

            <Reveal variant="drop" delay={1.2} className="team-card">
              <Link to="/team#fredrick-stephanie">
                <img src="/team/fredrick-stephanie.jpg" alt="Fredrick Stephanie" />
              </Link>
              <h3>Fredrick Stephanie</h3>
              <div className="role">Graphics Designer and Website Developer</div>
            </Reveal>

            <Reveal variant="drop" delay={1.32} className="team-card">
              <Link to="/team#emmanuel-danquah">
                <img src="/team/emmanuel-danquah.jpg" alt="Emmanuel Danquah" />
              </Link>
              <h3>Emmanuel Danquah</h3>
              <div className="role">Graphics Designer</div>
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
                <a href="https://forms.gle/4ry4xDKefR5ZzRRe9" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Volunteer With Us</a>
                <Link to="/about#contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
