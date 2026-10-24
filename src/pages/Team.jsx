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
    id: 'nathaniel-adika',
    name: 'Nathaniel Adika',
    role: 'Digital Skills Trainer',
    image: '/team/nathaniel-adika.jpeg',
    background: 'Nathaniel is a computer engineering graduate of the University of Ghana. He works as a Software Engineer at Iron Forge Technologies, where he helped build an AI recruitment platform that cut time-to-hire by 30%, and also serves as a Research Engineer at AgroMech Frontiers.',
    function: 'Nathaniel brings hands-on, full-stack engineering experience directly to learners as a Digital Skills Trainer, helping them build real, working software.',
  },
  {
    id: 'xornam-kumordzie',
    name: 'Xornam Kumordzie',
    role: 'Project Coordinator and Learning Community Manager',
    image: '/team/xornam-kumordzie.jpeg',
    background: 'Xornam holds a Bachelor of Education (B.Ed.) and a Master of Education (M.Ed.) in Mathematics Education, along with a TEFL Certificate and training in Cambridge Teacher Training and Classroom Management.',
    function: 'Xornam serves as an Educator/Facilitator at N2I, supporting learners through digital skills training, mentoring, and educational activities that equip young people with relevant knowledge and skills to thrive in the digital age.',
  },
  {
    id: 'helina-commey',
    name: 'Helina Commey',
    role: 'Administrator',
    image: '/team/helina-commey.jpeg',
    background: 'Helina is an aspiring Business Analytics professional and a graduate of the University of Ghana Business School, with a Bachelor of Science in Business Administration, majoring in Business Analytics. She is passionate about data analytics, data mining, and transforming raw data into meaningful insights, believing that data holds the potential to tell powerful stories, uncover opportunities, and drive meaningful change.',
    function: "Helina is the programme's operational backbone, turning plans into smooth, well-run experiences for learners and partners alike. She brings structure to every stage of the learner journey, from application and selection through to onboarding and ongoing support, and builds the digital systems that keep information accurate and accessible. Known for her follow-through and attention to detail, she maintains clear communication across applicants, learners, and the wider team, ensuring nothing is left to chance and every deadline is met. Her calm, reliable approach makes her a valued partner to colleagues and collaborators.",
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
    id: 'fredrick-stephanie',
    name: 'Fredrick Stephanie',
    role: 'Graphics Designer and Website Developer',
    image: '/team/fredrick-stephanie.jpg',
    background: 'Fredrick is a Computer Science student at Lancaster University Ghana and the Marketing/Communications Officer for the Computer Science Society. They have experience in graphic design, website development, promotional content design, and video editing.',
    function: "Fredrick is responsible for designing graphics and promotional materials for N2I's programmes and initiatives, developing and maintaining the N2I website, and supporting the team with visual communication and video content.",
  },
  {
    id: 'juliana-naa-ode-hammond',
    name: 'Juliana Naa Ode Hammond',
    role: 'Student Success Coordinator',
    image: '/team/juliana-naa-ode-hammond.jpeg',
    background: 'Juliana is an IB educator and Information Professional with over five years of experience in education. She holds an MPhil and MA in Information Studies from the University of Ghana, with an academic and professional background that bridges information, technology, design thinking, research, and student development.',
    function: 'As a member of the student success team, Juliana helps create an inclusive, supportive environment where learners can move from discovering their potential to developing skills and creating meaningful impact.',
  },
  {
    id: 'abdul-rashid-boyefio',
    name: 'Abdul Rashid Boyefio',
    role: 'Digital Skills Trainer',
    image: '/team/abdul-rashid-boyefio.jpeg',
    background: 'Abdul Rashid holds an NCC Education Level 4 Diploma in Business Information Technology and an NCC Education Level 5 Diploma in Computing with Business Management. He is also a Certified UNESCO Ethics Teacher Trainer, with professional experience spanning IT operations, digital learning, STEM education, teacher training, web development, and technology-driven business operations.',
    function: 'Abdul Rashid trains N2I learners in digital and web development skills, drawing on his background in IT operations, STEM education, and teacher training to make technology concepts practical and accessible.',
  },
  {
    id: 'judah-birhanu-solomon',
    name: 'Judah Birhanu Solomon',
    role: 'Digital Skills Trainer',
    image: '/team/judah-birhanu-solomon.jpeg',
    background: "Judah holds a BSc in Computer Science from the University of the People (California, US) and a Learning Science certification from Carnegie Mellon University. An experienced STEAM Educator and Teacher Trainer, he serves as a STEAM Facilitator at Ghana International School, where he has mentored hundreds of young innovators to bring their ideas to life and coached the school's Robotics team to a 2nd-place finish in the AI for Good Robotics Competition. He also serves with MakersPlace to deliver practical technology education across Ghana.",
    function: 'Adept in project-based learning methodologies, Agile Scrum, and the Engineering Design Process, Judah brings expertise in curriculum development, software engineering, and physical computing directly to learners. He guides students through the end-to-end design and development of tangible solutions to real-world problems.',
  },
  {
    id: 'irene-obeng',
    name: 'Irene Obeng',
    role: 'Programme Coordinator – Media Team',
    image: '/team/irene-obeng.jpeg',
    background: 'Irene is a medical doctor with a passion for communication, creativity, and making a meaningful impact in society. She believes in the power of media to inform, inspire, connect people, and communicate ideas effectively, and enjoys contributing to initiatives that empower individuals, promote learning, and create opportunities for growth and development. At N2I, she looks forward to using her organizational and creative skills to support the initiative\'s vision and mission.',
    function: "Irene serves as the Programme Coordinator for the Media Team, overseeing graphic design, media production, and social media marketing. She coordinates the planning and execution of media projects, ensuring that essential materials, including flyers, event programmes, promotional graphics, and other communication assets, are developed and delivered on time. She works closely with the team to maintain consistency in visual communication, promote N2I's activities across social media platforms, and ensure that the initiative's message reaches its intended audience. Through effective coordination, attention to detail, and a commitment to timely delivery, she helps strengthen N2I's visibility, engagement, and overall communication efforts.",
  },
  {
    id: 'prince-kweku-entsie',
    name: 'Prince Kweku Entsie',
    role: 'Program Advisor',
    image: '/team/prince-kweku-entsie.jpeg',
    background: "Prince holds a Master's degree in Education Management and Administration.",
    function: 'Prince provides educational consultation for N2I, advising on program design and academic direction.',
  },
  {
    id: 'mawunyo-kwasi-kutor',
    name: 'Mawunyo Kwasi Kutor',
    role: 'Program Advisor',
    image: '/team/mawunyo-kwasi-kutor.jpeg',
    background: 'Mawunyo is an Information Technology professional, Software Engineer, and Digital Transformation Specialist with experience across software development, cybersecurity, cloud technologies, and AI.',
    function: 'Mawunyo mentors and advises N2I participants throughout the program, with a special focus on grant and sponsorship initiatives.',
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
          {/* Two independent columns (even indexes left, odd right) so a long profile
              doesn't leave empty space under the shorter card beside it. */}
          <div className="team-profiles">
            {[0, 1].map((col) => (
              <div className="team-profiles-col" key={col}>
                {MEMBERS.map((member, i) => i % 2 === col && (
                  <Reveal
                    as="div"
                    variant={col === 0 ? 'left' : 'right'}
                    delay={i * 0.1}
                    key={member.id}
                    id={member.id}
                    className="team-profile"
                    style={{ order: i }}
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
