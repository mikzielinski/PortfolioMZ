import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Activities from './components/Activities'
import Events from './components/Events'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

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

interface Article {
  id: string
  title: string
  date: string
  excerpt: string
  url: string
  imageUrl?: string
}

function App() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  // Custom descriptions based on ACTUAL project analysis - only for verified projects
  // These are meaningful, specific descriptions based on real code and functionality
  const repoDescriptions: { [key: string]: string } = {
    // Verified Projects - Based on actual code analysis
    'PISim': 'Educational platform for business process simulation and RPA training. FastAPI backend with React/TypeScript frontend. Enables students to create process scenarios (like AP Invoice Handling), generate synthetic event logs (4000+ cases), analyze bottlenecks, calculate KPIs, visualize processes with heatmaps and spaghetti diagrams, simulate automation with robots, calculate implementation costs (CapEx/OpEx/Change Request), and perform what-if simulations. Includes RACI matrices, team capacity analysis, and CSV/JSON export. Designed for academic use - students analyze data and calculate ROI themselves.',
    
    'PortfolioMZ': 'Professional portfolio website built with React 18, TypeScript, and Vite. Features dynamic GitHub repository fetching, collapsible About sections (Bio & Technical Expertise), carousel-based Events showcase (conferences, meetups, workshops), responsive design, and deployment on GitHub Pages. Showcases AI/RPA expertise, UiPath MVP recognition, speaking engagements, and educational activities.',
    
    'janome_embroidery_tool': 'SVG-to-embroidery conversion tool for JANOME embroidery machines. Python-based with interactive CLI and GUI (Tkinter). Features: k-means color reduction (generates 3 variants: 10/14/18 colors), background removal (rembg), automatic scaling, border generation with offset, stitch type selection (Tatami fill for large areas >100mm², Satin stitch for edges 20-100mm², Run stitch for details <20mm²), exports to DST (Tajima) and JEF (Janome) formats with layer management and preview generation.',
    
    // Note: 'spaghetti' is part of PISim, not a separate project - spaghetti diagrams are a visualization feature
  }

  // Repositories to highlight - verified projects only
  const featuredRepos = ['PISim', 'janome_embroidery_tool', 'PortfolioMZ']

  useEffect(() => {
    // Fetch GitHub repositories
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mikzielinski/repos?sort=updated&per_page=100')
        if (response.ok) {
          const data = await response.json()
          // Filter and enhance repositories
          const filteredRepos = data
            .filter((repo: GitHubRepo) => {
              // Exclude profile repo and prioritize featured repos
              return repo.name !== 'mikzielinski' && 
                     (featuredRepos.includes(repo.name) || !repo.fork)
            })
            .map((repo: GitHubRepo) => {
              // Use custom description if available (verified projects only)
              if (repoDescriptions[repo.name]) {
                return { ...repo, description: repoDescriptions[repo.name] }
              }
              // For other repos, use GitHub description if available
              // If GitHub description is missing, create a meaningful description based on repo name and language
              if (!repo.description || repo.description.trim() === '') {
                const languagePart = repo.language ? `Built with ${repo.language}` : 'Software project'
                const namePart = repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
                return { 
                  ...repo, 
                  description: `${namePart} - ${languagePart}. Explore the repository for more details.`
                }
              }
              return repo
            })
            // Sort: featured repos first, then by updated date
            .sort((a: GitHubRepo, b: GitHubRepo) => {
              const aFeatured = featuredRepos.indexOf(a.name)
              const bFeatured = featuredRepos.indexOf(b.name)
              if (aFeatured !== -1 && bFeatured !== -1) return aFeatured - bFeatured
              if (aFeatured !== -1) return -1
              if (bFeatured !== -1) return 1
              return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            })
          
          setRepos(filteredRepos)
        }
      } catch (error) {
        console.error('Error fetching GitHub repos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  // LinkedIn articles data - manually curated since LinkedIn API requires authentication
  const articles: Article[] = [
    {
      id: '1',
      title: 'When Numbers Stop Being Innocent- Variable Overflow',
      date: 'Dec 27, 2025',
      excerpt: 'In software, it is easy to believe that numbers are just numbers. That 10 is always ten, that 0.',
      url: 'https://www.linkedin.com/in/mikzielinski/recent-activity/articles/',
      imageUrl: '/article-placeholder.jpg'
    },
    {
      id: '2',
      title: 'UiPath 2025 → 2026: The Year Automation Started Thinking — and Where It Goes Next',
      date: 'Nov 25, 2025',
      excerpt: 'By a UiPath MVP 2024 & 2025 and Proservartner FastTrack Partner - 2024 was the year when Generative AI taught us that machines…',
      url: 'https://www.linkedin.com/in/mikzielinski/recent-activity/articles/',
      imageUrl: '/article-placeholder.jpg'
    },
    {
      id: '3',
      title: 'The Good, the Bad, and the Ugly of Process Mapping in RPA (BPMN & UML Edition)',
      date: 'Jun 22, 2025',
      excerpt: 'An in-depth look at process mapping methodologies in RPA projects.',
      url: 'https://www.linkedin.com/in/mikzielinski/recent-activity/articles/',
      imageUrl: '/article-placeholder.jpg'
    }
  ]

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Activities />
      <Events />
      <Projects repos={repos} loading={loading} />
      <Articles articles={articles} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
