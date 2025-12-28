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
              src="/PortfolioMZ/profile-photo.jpg" 
              alt="Mikołaj Zieliński - AI and Automation Lead"
              className="hero-profile-photo"
              onError={(e) => {
                // Fallback if profile-photo.jpg doesn't exist, try common variations
                const target = e.target as HTMLImageElement;
                const currentSrc = target.src;
                if (currentSrc.includes('profile-photo.jpg')) {
                  target.src = '/PortfolioMZ/profile.jpg';
                } else if (currentSrc.includes('profile.jpg')) {
                  target.src = '/PortfolioMZ/photo.jpg';
                } else {
                  // If no image found, hide the image wrapper
                  target.style.display = 'none';
                }
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
