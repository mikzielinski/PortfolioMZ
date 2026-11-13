import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './About.css'

const About = () => {
  const [bioExpanded, setBioExpanded] = useState(false)

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>

          {/* Bio */}
          <div className="about-section">
            <div className="about-section-inner">
              <h3 className="about-section-title">Who I Am</h3>
              <div className="about-content-text">
                <p>
                  I'm an Automation Solution Architect at Xelto Digital, three-time UiPath MVP (2024, 2025 &amp; 2026)
                  and lecturer at Kozminski University. I design automation that holds up in production — RPA,
                  AI agents and the integrations that tie them into ERP and enterprise systems.
                </p>
                <p>
                  I've worked in automation since 2019, and I've come up through every layer of it: operating robots
                  at MAHLE, building and running them at Olympus, owning the enterprise UiPath platform at Bayer, and
                  leading UiPath delivery at Proservartner. That path is why I design for the people who will run,
                  support and audit a solution — not just for the demo.
                </p>
              </div>
            </div>
          </div>

          {/* What I Do Section */}
          <div className="about-section">
            <div className="about-section-inner">
              <h3 className="about-section-title">What I Do</h3>
              <div className="about-content-list">
                <ul>
                  <li>Design end-to-end automation architectures — from process assessment to delivery and hypercare</li>
                  <li>Build agentic automation where AI agents, RPA robots and people share one process</li>
                  <li>Integrate automation with ERP and enterprise systems through APIs, SQL and cloud services</li>
                  <li>Create custom tools that make automation teams faster and more consistent, incl. AI coding agents</li>
                  <li>Set up platforms, standards and governance — On-Prem → SaaS migrations, GxP, EU AI Act readiness</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How I Work Section */}
          <div className="about-section collapsible">
            <button
              className="about-section-header"
              onClick={() => setBioExpanded(!bioExpanded)}
              aria-expanded={bioExpanded}
            >
              <h3 className="about-section-title">How I Work</h3>
              <div className="collapse-icon">
                {bioExpanded ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </button>
            <div
              className={`about-section-content ${bioExpanded ? 'expanded' : 'collapsed'}`}
              onClick={!bioExpanded ? () => setBioExpanded(true) : undefined}
              style={{ cursor: !bioExpanded ? 'pointer' : 'default' }}
            >
              {!bioExpanded && (
                <div className="about-summary">
                  <p>
                    I look past the happy path: how a system behaves under load, with bad data, or when an AI agent is
                    confidently wrong.
                  </p>
                  <span className="read-more-hint">Click to read more ↓</span>
                </div>
              )}
              <div className="about-full-content">
                <p>
                  I look past the happy path. Most automation failures I've seen didn't come from the main flow — they came
                  from edge cases, silent data problems, overflowing numbers and assumptions nobody wrote down. With AI agents
                  in the loop, that matters even more: a model can be confidently wrong, so every agent needs clear
                  boundaries, validation and a way to hand off to a human.
                </p>
                <p>
                  I prefer simple, observable and explainable systems over clever but fragile ones. I write standards and
                  documentation people actually use, pick the tool that fits the process rather than the one in fashion, and
                  treat governance as part of the design, not paperwork at the end.
                </p>
                <p>
                  Before automation I trained as a scientist — I did genetics research at the Hirszfeld Institute of the
                  Polish Academy of Sciences. The habit stuck: form a hypothesis, test it, and trust data over opinions.
                </p>
              </div>
            </div>
          </div>

          {/* Core Expertise Section */}
          <div className="about-section">
            <div className="about-section-inner">
              <h3 className="about-section-title">Core Expertise</h3>
              <div className="about-content-list">
                <ul>
                  <li>Automation solution architecture (UiPath, n8n, Power Platform)</li>
                  <li>Agentic automation and AI agent design with human-in-the-loop</li>
                  <li>Intelligent Document Processing and AI OCR</li>
                  <li>System integrations — REST, SOAP, SQL, ERP (JD Edwards, NetSuite, SAP)</li>
                  <li>Microsoft Azure and UiPath Automation Cloud, On-Prem → SaaS migrations</li>
                  <li>Governance, QA and compliance — PDD/SDD standards, GxP, EU AI Act, ISO/IEC 42001</li>
                  <li>Reliability and failure analysis for long-running automations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Credentials & Achievements */}
          <div className="about-section">
            <div className="about-section-inner">
              <h3 className="about-section-title">Credentials & Achievements</h3>
              <div className="about-details">
              <div className="about-item">
                <h4>UiPath MVP 2024, 2025 & 2026</h4>
                <p>
                  Recognized by UiPath as a Most Valuable Professional three years in a row for contributions to
                  the automation community, technical expertise and activity on the UiPath Community Forum.
                </p>
              </div>
              <div className="about-item">
                <h4>Automation Solution Architect at Xelto Digital</h4>
                <p>
                  Designing intelligent automation and AI agent solutions for enterprise clients, building custom
                  tools for automation teams and developing Task2Mask (formerly AiRelay).
                </p>
              </div>
              <div className="about-item">
                <h4>UiPath Community Lead for Poland</h4>
                <p>
                  Organizing UiPath Community Days, meetups and virtual sessions across Poland, and mentoring
                  participants in the Agent Pageant agentic automation hackathon.
                </p>
              </div>
              <div className="about-item">
                <h4>Conference Speaker</h4>
                <p>
                  Speaking at UiPath Community Days and Devs4Devs events on agentic automation pitfalls, structuring
                  automation programs and real-world AI use cases.
                </p>
              </div>
              <div className="about-item">
                <h4>Lecturer at Kozminski University</h4>
                <p>
                  Teaching automation architecture, system integrations, APIs, governance and QA. Previously lectured
                  on business process automation and RPA development at SGH Warsaw School of Economics.
                </p>
              </div>
              <div className="about-item">
                <h4>Enterprise Platform Ownership</h4>
                <p>
                  Former UiPath System Owner at Bayer — ran the enterprise platform, validated GxP process
                  documentation and led the migration to UiPath Automation Cloud.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
