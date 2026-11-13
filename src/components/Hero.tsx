import { FaArrowRight, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Hero.css'

const stats = [
  { value: '7+', label: 'years in enterprise automation' },
  { value: '3×', label: 'UiPath MVP · 2024–2026' },
  { value: '200+', label: 'students per term' },
  { value: '9', label: 'community events since 2024' },
]

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" /> Automation Solution Architect @ Xelto Digital
            </div>
            <h1 className="hero-title">
              Mikołaj Zieliński
            </h1>
            <p className="hero-intro">
              I design automation that <em>holds up in production</em> — RPA, AI agents and the integrations behind them.
            </p>
            <p className="hero-description">
              UiPath MVP · Speaker · Lecturer at Kozminski University
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Let's talk <FaArrowRight />
              </button>
              <button className="btn btn-ghost" onClick={() => scrollToSection('experience')}>
                See my experience
              </button>
              <div className="hero-social">
                <a href="https://www.linkedin.com/in/mikzielinski/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://github.com/mikzielinski" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-photo-frame">
              <img
                src={`${import.meta.env.BASE_URL}profile-photo.jpg`}
                alt="Mikołaj Zieliński - Automation Solution Architect"
                className="hero-profile-photo"
              />
            </div>
            <div className="hero-mvp-chip">
              <strong>UiPath MVP</strong>
              <span>2024 · 2025 · 2026</span>
            </div>
          </div>
        </div>

        <dl className="hero-stats">
          {stats.map(s => (
            <div key={s.label} className="hero-stat">
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
