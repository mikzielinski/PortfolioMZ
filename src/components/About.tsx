import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p className="about-intro">
              AI and Automation Lead with a passion for transforming businesses through 
              intelligent automation and RPA. I believe in working smart, not hard - 
              just automate. With a proven track record of delivering innovative automation 
              solutions that drive significant value for organizations.
            </p>
            <div className="about-details">
              <div className="about-item">
                <h3>UiPath MVP 2024</h3>
                <p>
                  Recognized as a Most Valuable Professional by UiPath for outstanding 
                  contributions to the automation community and expertise in RPA technologies.
                </p>
              </div>
              <div className="about-item">
                <h3>UiPath Lead at Proservartner</h3>
                <p>
                  Leading automation initiatives and teams to deliver transformative 
                  solutions that streamline operations and enhance business efficiency.
                </p>
              </div>
              <div className="about-item">
                <h3>UiPath Community Lead for Poland</h3>
                <p>
                  Fostering the growth of the RPA community in Poland through knowledge 
                  sharing, mentoring, and organizing events that bring professionals together.
                </p>
              </div>
              <div className="about-item">
                <h3>Business Transformation Specialist</h3>
                <p>
                  Combining technical expertise with strategic business acumen to identify 
                  opportunities for process optimization and digital transformation.
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
