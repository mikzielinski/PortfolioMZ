import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          
          {/* Bio Section */}
          <div className="about-section">
            <h3 className="about-section-title">Bio</h3>
            <div className="about-bio">
              <p>
                I work at the intersection of software engineering, system architecture, and complex problem solving. 
                My background spans designing, analyzing, and maintaining systems where reliability, scalability, and 
                correctness are critical. I focus on understanding how systems behave over time — not just when everything 
                works as expected, but especially when assumptions are tested.
              </p>
              <p>
                I have experience working with distributed systems, automation platforms, and large-scale technical 
                environments where small design decisions can have significant downstream effects. My approach emphasizes 
                clarity, robustness, and long-term maintainability rather than short-term optimization.
              </p>
              <p>
                I'm particularly interested in how software systems evolve, how failures emerge from seemingly minor design 
                choices, and how engineers can build more resilient architectures by understanding those patterns early. 
                I value thoughtful design, clear reasoning, and pragmatic engineering over complexity for its own sake.
              </p>
            </div>
          </div>

          {/* Technical Expertise Section */}
          <div className="about-section">
            <h3 className="about-section-title">Technical Expertise</h3>
            <div className="about-technical">
              <p>
                I specialize in designing, analyzing, and stabilizing complex software systems, with a strong focus on 
                reliability, correctness, and long-term maintainability. My work spans system architecture, custom software 
                development, and intelligent automation, with an emphasis on building solutions that remain robust under 
                real-world conditions.
              </p>
              <p>
                In addition to deep experience with RPA and UiPath, I work extensively as a system and software architect, 
                designing end-to-end solutions from the ground up. This includes building and integrating distributed systems, 
                defining clear architectural boundaries, and designing data flows that remain reliable as systems scale. 
                I frequently work on custom-built platforms where standard solutions are insufficient and architectural 
                decisions have long-term impact.
              </p>
              <p>
                A core part of my expertise lies in system integration and API-based architectures. I design and implement 
                integrations between heterogeneous systems, ensuring reliable data exchange, clear contracts, and predictable 
                behavior across services. This includes REST and event-driven architectures, orchestration layers, and 
                integrations between enterprise platforms, automation tools, and custom applications.
              </p>
              <p>
                I also specialize in intelligent and agent-based automation, combining rule-based logic, decision engines, 
                and automation frameworks to build systems that can adapt to changing conditions. This includes designing 
                resilient automation flows, managing complex dependencies, and ensuring graceful failure handling when 
                assumptions no longer hold.
              </p>
              <p>
                I am often brought in when systems become difficult to reason about — when failures are intermittent, 
                behavior is inconsistent, or architectural debt has accumulated. My role is to identify root causes, 
                simplify complexity, and re-establish control through clear architecture and robust design principles.
              </p>
              
              <div className="expertise-areas">
                <h4>My areas of expertise include:</h4>
                <ul>
                  <li>System and software architecture</li>
                  <li>Integration design and API-based systems</li>
                  <li>RPA and intelligent automation (including UiPath)</li>
                  <li>Failure analysis and resilience engineering</li>
                  <li>Data integrity, boundary conditions, and numeric correctness</li>
                  <li>Designing scalable, maintainable, and observable systems</li>
                </ul>
                <p className="expertise-closing">
                  I focus on building systems that remain understandable, dependable, and evolvable — even as they grow 
                  in complexity and operational demands.
                </p>
              </div>
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
