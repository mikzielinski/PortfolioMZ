import { FaChevronDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img 
              src={`${import.meta.env.BASE_URL}profile-photo.jpg`}
              alt="Mikołaj Zieliński - AI and Automation Lead"
              className="hero-profile-photo"
              onError={(e) => {
                console.error('Failed to load profile photo:', e);
                const target = e.target as HTMLImageElement;
                // Try absolute path as fallback
                target.src = '/PortfolioMZ/profile-photo.jpg';
              }}
            />
            <div className="hero-image-overlay"></div>
          </div>
          <div className="hero-text-content">
            <div className="hero-badge">UiPath MVP 2024 & 2025</div>
            <h1 className="hero-title">
              Mikołaj Zieliński
            </h1>
          <p className="hero-subtitle">
            AI and Automation Lead
          </p>
          <p className="hero-description">
            Work smart, not hard - just automate. Leading digital transformation initiatives 
            through intelligent automation, AI integration, and process optimization. 
            Transforming businesses with cutting-edge technology and strategic insights.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
          </div>
        </div>
        <div className="hero-scroll">
          <button 
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about"
          >
            <FaChevronDown />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
