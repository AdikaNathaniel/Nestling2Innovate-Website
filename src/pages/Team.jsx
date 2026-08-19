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
    background: 'Samuel holds degrees in computer science and information systems and completed a Google × MLT Tech Fellowship. He also mentored Android developers through Google\'s partnership programme with Andela.',
    function: 'Samuel founded and leads Nestling 2Innovate, building the "Nestling → Fledgling → Eagle" learner pathway that teaches web development, programming, and AI to JHS students and SHS graduates.',
  },
  {
    id: 'edwin-kpodzro',
    name: 'Edwin Kpodzro',
    role: 'Director of Innovation and Growth',
    image: '/team/edwin-kpodzro.png',
    background: 'Edwin holds a Ph.D. and an M.S. in Mechanical Engineering from Purdue University. He serves as a Senior Associate at Innosight, the growth strategy firm cofounded by Clayton Christensen, and was named one of 100 global youth leaders at the 2021 Youth Ag Summit.',
    function: "Edwin guides N2I's growth from pilot programs into a lasting, scalable innovation pipeline for Ghana's learners.",
  },
  {
    id: 'surya-js',
    name: 'Surya J S',
    role: 'Grant Manager',
    image: '/team/surya-js.jpeg',
    background: 'Surya holds a B.A. in English Literature and is certified in Business Analysis, Project Management, Data Analysis, and Generative AI by Microsoft and LinkedIn. She has served as Head of Customer Success, Head of Product Research, and UX Researcher, with experience supporting startups and nonprofits.',
    function: 'Surya supports executive operations, grant research, funding strategy, project coordination, partnership development, and organizational growth at N2I.',
  },
  {
    id: 'mawunyo-kwasi-kutor',
    name: 'Mawunyo Kwasi Kutor',
    role: 'Digital Skills Trainer',
    image: '/team/mawunyo-kwasi-kutor.jpeg',
    background: 'Mawunyo is an Information Technology professional, Software Engineer, and Digital Transformation Specialist with experience across software development, cybersecurity, cloud technologies, and AI.',
    function: 'Mawunyo mentors and advises N2I participants throughout the program, with a special focus on grant and sponsorship initiatives.',
  },
  {
    id: 'nathaniel-adika',
    name: 'Nathaniel Adika',
    role: 'Digital Skills Trainer',
    image: '/team/nathaniel-adika.jpeg',
    background: 'Nathaniel is a computer engineering graduate of the University of Ghana. He works as a Software Engineer at Iron Forge Technologies, where he helped build an AI recruitment platform that cut time-to-hire by 30%, and also serves as a Research Engineer at AgroMech Frontiers.',
    function: 'Nathaniel brings hands-on, full-stack engineering experience directly to learners as a Digital Skills Trainer, helping them build real, working software.',
  },
  {
    id: 'chioma-osanebi',
    name: 'Chioma Osanebi',
    role: 'Social Media Manager',
    image: '/team/chioma-osanebi.jpeg',
    background: 'Chioma is a Computer Science student at Lancaster University Ghana and President of its Computer Science Society. She previously worked as a Frontend Developer intern at Future Interns.',
    function: "Chioma shapes how N2I tells its story online, sharing learner milestones, program updates, and community impact to grow visibility and support for the mission.",
  },
  {
    id: 'mina-ama-mokani',
    name: 'Mina Ama Mokani',
    role: 'Diversity, Equity & Inclusion Coordinator',
    image: '/team/mina-ama-mokani.jpeg',
    background: 'Mina is a Psychology graduate of the University of Cape Coast and a Behavioral Therapist. She founded SpecCare Development Center and the Renewed Roses Foundation.',
    function: 'Mina helps ensure the program stays accessible, supportive, and welcoming for every learner, regardless of background or ability.',
  },
  {
    id: 'sandra-boakye-boaitey',
    name: 'Sandra Boakye Boaitey',
    role: 'Operations Manager',
    image: '/team/sandra-boakye-boaitey.jpeg',
    background: "Sandra holds a Bachelor's degree in Procurement and Supply Chain Management from the University of Education, Ghana. She works as a Procurement/Logistics Manager at Dei Terra Properties.",
    function: "Sandra applies her procurement and logistics expertise to keep the program's day-to-day operations running smoothly.",
  },
  {
    id: 'emmanuel-danquah',
    name: 'Emmanuel Danquah',
    role: 'Graphics Designer',
    image: '/team/emmanuel-danquah.jpg',
    background: 'Emmanuel has served as a Digital Marketing Manager and National Creative Director at organizations including Zonda Tec Ghana Limited and TECNO Mobile Ghana, with expertise in Adobe-based print and digital design, branding, and visual storytelling.',
    function: "Emmanuel brings his graphic design and creative direction experience to N2I, shaping the visual materials and brand identity behind the organisation's marketing and outreach.",
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
