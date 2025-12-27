import { FaGithub, FaStar, FaCode } from 'react-icons/fa'
import './Projects.css'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  fork: boolean
  created_at: string
  updated_at: string
}

interface ProjectsProps {
  repos: GitHubRepo[]
  loading: boolean
}

const Projects = ({ repos, loading }: ProjectsProps) => {
  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'Python': '#3776ab',
      'TypeScript': '#3178c6',
      'JavaScript': '#f7df1e',
      'C': '#a8b9cc',
      'C++': '#00599c',
      'C#': '#239120',
      'Java': '#ed8b00',
      'Rust': '#000000',
      'Go': '#00add8',
    }
    return colors[language || ''] || '#6b7280'
  }

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Explore my open-source projects and contributions on GitHub
        </p>
        <div className="projects-grid">
          {repos.map((repo) => (
            <div key={repo.id} className="project-card">
              <div className="project-header">
                <h3>{repo.name}</h3>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <FaGithub />
                </a>
              </div>
              <p className="project-description">
                {repo.description || 'No description available'}
              </p>
              <div className="project-footer">
                <div className="project-meta">
                  {repo.language && (
                    <span className="project-language">
                      <span 
                        className="language-dot" 
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></span>
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="project-stars">
                      <FaStar /> {repo.stargazers_count}
                    </span>
                  )}
                </div>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Repository <FaCode />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
