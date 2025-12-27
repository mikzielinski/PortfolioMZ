import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Interested in collaborating or discussing automation opportunities? 
          Let's start a conversation.
        </p>
        <div className="contact-content">
          <div className="contact-methods">
            <a 
              href="https://github.com/mikzielinski" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card"
            >
              <FaGithub className="contact-icon" />
              <h3>GitHub</h3>
              <p>View my code and projects</p>
              <span className="contact-link">github.com/mikzielinski</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/mikzielinski/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card"
            >
              <FaLinkedin className="contact-icon" />
              <h3>LinkedIn</h3>
              <p>Connect and follow my articles</p>
              <span className="contact-link">linkedin.com/in/mikzielinski</span>
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="contact-card"
            >
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>Send me a message</p>
              <span className="contact-link">Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
