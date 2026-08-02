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
    background: 'Degrees in computer science and information systems, and a Google × MLT Tech Fellowship. Mentored Android developers through Google\'s partnership programme with Andela.',
    function: 'Founded and leads Nestling 2Innovate, building the "Nestling → Fledgling → Eagle" learner pathway that teaches web development, programming, and AI to JHS students and SHS graduates.',
  },
  {
    id: 'edwin-kpodzro',
    name: 'Edwin Kpodzro',
    role: 'Director of Innovation and Growth',
    image: '/team/edwin-kpodzro.jpeg',
    imagePosition: 'center top',
    background: 'Ph.D. and M.S. in Mechanical Engineering, Purdue University. Senior Associate at Innosight, the growth strategy firm cofounded by Clayton Christensen; named one of 100 global youth leaders at the 2021 Youth Ag Summit.',
    function: "Guides N2I's growth from pilot programs into a lasting, scalable innovation pipeline for Ghana's learners.",
  },
  {
    id: 'surya-js',
    name: 'Surya J S',
    role: 'Grant Manager',
    image: '/team/surya-js.jpeg',
    background: 'B.A. in English Literature. Certified in Business Analysis, Project Management, Data Analysis, and Generative AI by Microsoft & LinkedIn. Former Head of Customer Success, Head of Product Research, and UX Researcher, with experience supporting startups and nonprofits.',
    function: 'Supports executive operations, grant research, funding strategy, project coordination, partnership development, and organizational growth at N2I.',
  },
  {
    id: 'mawunyo-kwasi-kutor',
    name: 'Mawunyo Kwasi Kutor',
    role: 'Digital Skills Trainer',
    image: '/team/mawunyo-kwasi-kutor.jpeg',
    background: 'Information Technology professional, Software Engineer, and Digital Transformation Specialist with experience across software development, cybersecurity, cloud technologies, and AI.',
    function: 'Mentors and advises N2I participants throughout the program, with a special focus on grant and sponsorship initiatives.',
  },
  {
    id: 'nathaniel-adika',
    name: 'Nathaniel Adika',
    role: 'Digital Skills Trainer',
    image: '/team/nathaniel-adika.jpeg',
    background: 'Computer engineering graduate, University of Ghana. Software Engineer at Iron Forge Technologies, where he helped build an AI recruitment platform that cut time-to-hire by 30%; also a Research Engineer at AgroMech Frontiers.',
    function: 'Brings hands-on, full-stack engineering experience directly to learners as a Digital Skills Trainer, helping them build real, working software.',
  },
  {
    id: 'chioma-osanebi',
    name: 'Chioma Osanebi',
    role: 'Social Media Manager',
    image: '/team/chioma-osanebi.jpeg',
    background: 'Computer Science student, Lancaster University Ghana, and President of its Computer Science Society. Former Frontend Developer intern at Future Interns.',
    function: "Shapes how N2I tells its story online, sharing learner milestones, program updates, and community impact to grow visibility and support for the mission.",
  },
  {
    id: 'mina-ama-mokani',
    name: 'Mina Ama Mokani',
    role: 'Diversity, Equity & Inclusion Coordinator',
    image: '/team/mina-ama-mokani.jpeg',
    background: 'Psychology graduate, University of Cape Coast, and Behavioral Therapist. Founder of SpecCare Development Center and Renewed Roses Foundation.',
    function: 'Helps ensure the program stays accessible, supportive, and welcoming for every learner, regardless of background or ability.',
  },
  {
    id: 'sandra-boakye-boaitey',
    name: 'Sandra Boakye Boaitey',
    role: 'Operations Manager',
    image: '/team/sandra-boakye-boaitey.jpeg',
    background: "Bachelor's degree in Procurement and Supply Chain Management, University of Education, Ghana. Logistics Coordinator at MGA Consulting Ghana Ltd.",
    function: "Applies her procurement and logistics expertise to keep the program's day-to-day operations running smoothly.",
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
            <p>Meet the people driving BEEVIF and Nestling 2Innovate's mission forward.</p>
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
                  <img
                    src={member.image}
                    alt={member.name}
                    style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                  />
                </div>
                <div className="team-profile-content">
                  <h2>{member.name}</h2>
                  <div className="role">{member.role}</div>
                  <p><strong>Background:</strong> {member.background}</p>
                  <p><strong>Function at N2I:</strong> {member.function}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
