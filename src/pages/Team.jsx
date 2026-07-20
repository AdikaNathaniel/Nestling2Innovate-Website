import React from 'react';
import Reveal from '../components/Reveal.jsx';
import HeroSlideshow from '../components/HeroSlideshow.jsx';

const TEAM_SLIDES = [
  '/images/about-students-classroom.jpg',
  '/images/latest-images/2.jpeg',
  '/images/programs-students-classroom.jpg',
  '/images/latest-images/5.jpeg',
];

const MEMBERS = [
  {
    id: 'samuel-etsiakoh',
    name: 'Samuel Etsiakoh',
    role: 'Founder and Director',
    image: '/team/samueletsiakohdp.jpg.jpeg',
    bio: [
      "Across Ghana's Junior High Schools, students who grew up on smartphones still underperform in their ICT exams. Not from lack of ability, but from lack of anything to build. Classrooms teach ICT in theory, with little equipment or hands-on practice, so a generation that already loves technology rarely gets to create with it.",
      'Samuel Etsiakoh built Nestling 2Innovate (N2I), an education initiative under the Baiden Etsiakoh Eagle Vision Foundation (BEEVIF), a registered Ghanaian NGO, to close that gap — teaching web development, programming and artificial intelligence, already in the JHS syllabus, through a "Nestling → Fledgling → Eagle" learner pathway modeled on Andela, where Samuel has mentored Android developers through Google’s partnership programme.',
      'N2I is already working. Across five pilot tracks, N2I has moved 18 learners through hands-on training, with 100% completion in its web design and internship cohorts. One 14-year-old Raspberry Pi student alone built four software projects, including an AI tool and a game.',
      "These kids don't just learn about technology. They build with it.",
      "N2I's ambition doesn't stop at JHS. It also targets SHS graduates priced out of a university degree — equipping them with digital skills, then working to place them with mission-aligned partners for further education, paid internships, and jobs, and staying involved through university and beyond. For donors and investors, that's where the return lives: a talent-pipeline model that pays off as graduates get hired.",
      'Samuel runs N2I alongside a day job in operations and strategy at a STEM school in Accra, backed by degrees in computer science and information systems and a Google × MLT Tech Fellowship. The model works at small scale. What it needs now is investment to scale it — reaching more classrooms and more graduates, and building the innovators, entrepreneurs, and skilled hires Ghana’s next decade will run on.',
    ],
  },
  {
    id: 'mawunyo-kwasi-kutor',
    name: 'Mawunyo Kwasi Kutor',
    role: 'Digital Skills Trainer',
    image: '/team/mawunyo-kwasi-kutor.jpeg',
    bio: [
      'Mawunyo Kwasi Kutor is an Information Technology professional, Software Engineer, and Digital Transformation Specialist with experience in software development, cybersecurity, cloud technologies, artificial intelligence, and data-driven solutions. He is passionate about leveraging technology to solve real-world problems, empower businesses, and drive sustainable innovation across Africa.',
      'He has contributed to projects in software engineering, IT systems, digital transformation, and entrepreneurship, working with organizations in both the public and private sectors. His interests include building scalable technology solutions, supporting startups and MSMEs, and promoting digital inclusion.',
      'At Nestling2Innovate, Mawunyo is here to mentor and advise participants throughout the program, with a special focus on grant and sponsorship initiatives. He is committed to helping innovators identify funding opportunities, strengthen their ideas, and connect with resources that support sustainable growth and impact.',
    ],
  },
  {
    id: 'nathaniel-adika',
    name: 'Nathaniel Adika',
    role: 'Digital Skills Trainer',
    image: '/team/nathaniel-adika.jpeg',
    bio: [
      'Nathaniel Adika is a Computer Engineering student at the University of Ghana (GPA: 3.79/4.0) and a full-stack software engineer building across web, mobile, and AI systems. He currently works as a Software Engineer at Iron Forge Technologies, where he helped build a full-stack AI recruitment platform that cut time-to-hire by 30% and shipped an explainable candidate-matching engine with per-match LLM summaries that cut time-per-shortlist by 75%. He also serves as a Research Engineer at AgroMech Frontiers, integrating real-time computer vision models for bird and pest detection on Raspberry Pi-based hardware.',
      "His experience spans internships at Hubtel, IT Consortium, and M'ayaresa Technologies, where he built React and Flutter interfaces, contributed to SDK documentation and developer tooling, and researched machine learning applications including synthetic data generation and stable diffusion. Nathaniel works comfortably across the stack — from NestJS and PostgreSQL on the backend to React, Next.js, and Flutter on the front end — and has applied these skills to projects ranging from a pregnancy-monitoring health platform to an e-commerce mobile app.",
      "At Nestling2Innovate, Nathaniel brings this hands-on engineering experience directly to learners as a Digital Skills Trainer — and he's already contributed to BEEVIF's own mission, having built the foundation's website to support its education, healthcare, and food-security outreach in rural Ghana.",
    ],
  },
];

export default function Team() {
  return (
    <>
      <section className="page-header">
        <HeroSlideshow slides={TEAM_SLIDES} />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Our Team</h1>
            <p>Meet the people driving BEEVIF and Nestling2Innovate's mission forward.</p>
          </div>
        </div>
      </section>

      <section id="team-profiles">
        <div className="container">
          <div className="team-profiles">
            {MEMBERS.map((member, i) => (
              <Reveal
                as="div"
                variant={i % 2 === 0 ? 'left' : 'right'}
                delay={i * 0.1}
                key={member.id}
                id={member.id}
                className="team-profile"
              >
                <div className="team-profile-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-profile-content">
                  <h2>{member.name}</h2>
                  <div className="role">{member.role}</div>
                  {member.bio.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
