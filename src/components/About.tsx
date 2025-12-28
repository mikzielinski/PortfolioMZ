import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './About.css'

const About = () => {
  const [bioExpanded, setBioExpanded] = useState(false)
  const [technicalExpanded, setTechnicalExpanded] = useState(false)

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          
          {/* What I Do Section */}
          <div className="about-section">
            <h3 className="about-section-title">What I Do</h3>
            <div className="about-content-list">
              <ul>
                <li>Design and review system architectures with a focus on reliability and long-term stability</li>
                <li>Build and integrate automation platforms using UiPath and custom software components</li>
                <li>Analyze system failures, edge cases, and hidden assumptions</li>
                <li>Help teams understand and fix problems that only appear at scale</li>
              </ul>
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
                    I focus on understanding systems beyond their happy paths, analyzing how they behave under stress and how small design decisions compound into operational risks.
                  </p>
                  <span className="read-more-hint">Click to read more ↓</span>
                </div>
              )}
              <div className="about-full-content">
                <p>
                  I focus on understanding systems beyond their happy paths. My work often involves analyzing how systems behave under stress, how assumptions break over time, and how small design decisions compound into large operational risks.
                </p>
                <p>
                  I prefer simple, observable, and explainable systems over clever but fragile designs. I value thoughtful design, clear reasoning, and pragmatic engineering over complexity for its own sake.
                </p>
              </div>
            </div>
          </div>

          {/* Core Expertise Section */}
          <div className="about-section">
            <h3 className="about-section-title">Core Expertise</h3>
            <div className="about-content-list">
              <ul>
                <li>System and software architecture</li>
                <li>Automation and orchestration (UiPath, agent-based systems)</li>
                <li>Integration design and API-based systems</li>
                <li>Reliability engineering and failure analysis</li>
                <li>Data integrity, precision, and boundary conditions</li>
                <li>Long-running and mission-critical systems</li>
              </ul>
            </div>
          </div>

          {/* What I Work On Section */}
          <div className="about-section">
            <h3 className="about-section-title">What I Work On</h3>
            <div className="about-content-text">
              <p>
                I work on systems where correctness matters: automation platforms, enterprise integrations, and long-running processes where small errors can have outsized impact.
              </p>
            </div>
          </div>

          {/* Credentials & Achievements */}
          <div className="about-section">
            <h3 className="about-section-title">Credentials & Achievements</h3>
            <div className="about-details">
              <div className="about-item">
                <h4>UiPath MVP 2024 & 2025</h4>
                <p>
                  Recognized as a Most Valuable Professional by UiPath for two consecutive years 
                  (2024 & 2025) for outstanding contributions to the automation community, 
                  expertise in RPA technologies, and active engagement on the UiPath Community Forum.
                </p>
              </div>
              <div className="about-item">
                <h4>Conference Speaker & Organizer</h4>
                <p>
                  Active conference speaker sharing insights on RPA, AI, and automation best practices. 
                  Organizer of community meetings and events that bring together automation professionals 
                  to exchange knowledge and experiences.
                </p>
              </div>
              <div className="about-item">
                <h4>Lecturer & Educator</h4>
                <p>
                  Passionate educator delivering lectures on automation, AI, and business transformation. 
                  Committed to knowledge sharing and mentoring the next generation of automation professionals 
                  through practical insights and real-world experiences.
                </p>
              </div>
              <div className="about-item">
                <h4>UiPath Community Lead for Poland</h4>
                <p>
                  Fostering the growth of the RPA community in Poland through knowledge sharing, 
                  mentoring, organizing events, and active participation on the UiPath Community Forum. 
                  Building connections and driving innovation in the automation space.
                </p>
              </div>
              <div className="about-item">
                <h4>UiPath Lead at Proservartner</h4>
                <p>
                  Leading automation initiatives and teams to deliver transformative solutions that 
                  streamline operations and enhance business efficiency. Driving digital transformation 
                  through intelligent automation strategies.
                </p>
              </div>
              <div className="about-item">
                <h4>Business Transformation Specialist</h4>
                <p>
                  Combining technical expertise with strategic business acumen to identify opportunities 
                  for process optimization and digital transformation. Transforming businesses with 
                  cutting-edge technology and strategic insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
