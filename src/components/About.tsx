import {
  FaAward, FaBuilding, FaUsers, FaMicrophone, FaGraduationCap, FaShieldAlt,
  FaRoute, FaEye, FaFlask, FaArrowRight,
} from 'react-icons/fa'
import './About.css'

const whatIDo = [
  'Design end-to-end automation architectures — from process assessment to delivery and hypercare',
  'Build agentic automation where AI agents, RPA robots and people share one process',
  'Integrate automation with ERP and enterprise systems through APIs, SQL and cloud services',
  'Create custom tools that make automation teams faster and more consistent, incl. AI coding agents',
  'Set up platforms, standards and governance — On-Prem → SaaS, GxP, EU AI Act readiness',
]

const principles = [
  {
    icon: <FaRoute />,
    title: 'Beyond the happy path',
    text: 'Most automation failures come from edge cases, silent data problems and assumptions nobody wrote down. With AI agents a model can be confidently wrong — so every agent gets clear boundaries, validation and a hand-off to a human.',
  },
  {
    icon: <FaEye />,
    title: 'Simple & observable',
    text: 'I prefer explainable systems over clever but fragile ones. I pick the tool that fits the process, write standards people actually use, and treat governance as part of the design — not paperwork at the end.',
  },
  {
    icon: <FaFlask />,
    title: "A scientist's habit",
    text: 'Before automation I did genetics research at the Hirszfeld Institute of the Polish Academy of Sciences. The habit stuck: form a hypothesis, test it, and trust data over opinions.',
  },
]

const expertise = [
  'UiPath', 'n8n', 'Power Platform', 'Agentic automation', 'Human-in-the-loop', 'IDP / AI OCR',
  'REST & SOAP APIs', 'SQL', 'JD Edwards', 'NetSuite', 'SAP', 'Microsoft Azure',
  'UiPath Automation Cloud', 'On-Prem → SaaS', 'PDD / SDD standards', 'GxP', 'EU AI Act',
  'ISO/IEC 42001', 'Reliability & failure analysis',
]

const credentials = [
  { icon: <FaAward />, title: 'UiPath MVP 2024 · 2025 · 2026', text: 'Recognized three years in a row for community contribution, technical expertise and Forum activity.' },
  { icon: <FaBuilding />, title: 'Automation Solution Architect', text: 'Xelto Digital — intelligent automation and AI agents for enterprise clients; developing Task2Mask (formerly AiRelay).' },
  { icon: <FaUsers />, title: 'UiPath Community Lead, Poland', text: 'Organizing Community Days, meetups and virtual sessions; mentor in the Agent Pageant hackathon.' },
  { icon: <FaMicrophone />, title: 'Conference speaker', text: 'UiPath Community Days and Devs4Devs — agentic automation pitfalls, structuring automation programs, AI use cases.' },
  { icon: <FaGraduationCap />, title: 'Lecturer, Kozminski University', text: 'Automation architecture, integrations, APIs, governance and QA. Previously at SGH Warsaw School of Economics.' },
  { icon: <FaShieldAlt />, title: 'Enterprise platform owner', text: 'Former UiPath System Owner at Bayer — GxP validation and the migration to UiPath Automation Cloud.' },
]

const About = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title" data-eyebrow="01 · About">Automation that holds up in real life</h2>

        <div className="about-intro">
          <div className="about-bio">
            <p className="about-lead">
              I'm an Automation Solution Architect at Xelto Digital, three-time UiPath MVP and lecturer at
              Kozminski University.
            </p>
            <p>
              I design automation that holds up in production — RPA, AI agents and the integrations that tie them into
              ERP and enterprise systems.
            </p>
            <p>
              I've worked in automation since 2019 and come up through every layer of it: operating robots at MAHLE,
              building and running them at Olympus, owning the enterprise UiPath platform at Bayer, and leading UiPath
              delivery at Proservartner. That path is why I design for the people who will run, support and audit a
              solution — not just for the demo.
            </p>
            <button className="about-link" onClick={() => scrollTo('experience')}>
              See the full journey <FaArrowRight />
            </button>
          </div>

          <aside className="about-card about-whatido">
            <h3>What I do</h3>
            <ol>
              {whatIDo.map((item, i) => (
                <li key={i}><span>{String(i + 1).padStart(2, '0')}</span>{item}</li>
              ))}
            </ol>
          </aside>
        </div>

        <h3 className="about-subhead">How I work</h3>
        <div className="about-principles">
          {principles.map(p => (
            <div key={p.title} className="about-card about-principle">
              <div className="about-icon">{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          ))}
        </div>

        <h3 className="about-subhead">Core expertise</h3>
        <ul className="about-chips">
          {expertise.map(e => <li key={e}>{e}</li>)}
        </ul>

        <h3 className="about-subhead">Credentials</h3>
        <div className="about-credentials">
          {credentials.map(c => (
            <div key={c.title} className="about-credential">
              <div className="about-icon">{c.icon}</div>
              <div>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
