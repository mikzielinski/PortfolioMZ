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

  // Custom descriptions for repositories to make them more appealing
  const repoDescriptions: { [key: string]: string } = {
    'PISim': 'Process Automation & RPA Education Simulator - Full-stack educational platform (FastAPI + React/TypeScript) for simulating business processes, analyzing bottlenecks, KPIs, costs, and automation scenarios. Features event log generation, process visualization (heatmaps, spaghetti diagrams), team simulation, and ROI analysis.',
    'PortfolioMZ': 'Professional portfolio showcasing AI, RPA, and automation expertise. Built with React, TypeScript, and Vite. Features dynamic GitHub integration, responsive design, and deployment on GitHub Pages.',
    'janome_embroidery_tool': 'Advanced embroidery design and digitization tool with CLI and GUI interfaces. Converts images to machine-readable embroidery formats (DST, JEF), handles color reduction, stitch optimization, layer management, and preview generation for embroidery machines.',
    'spaghetti': 'Code complexity analyzer and visualizer - Interactive tool for understanding legacy codebase structures, dependencies, and complexity patterns. Helps identify technical debt and refactoring opportunities through visual analysis.',
    'uipath-community': 'UiPath community contributions - Automation patterns, reusable components, best practices, and community resources for RPA developers and automation engineers.',
    'automation-framework': 'Enterprise-grade automation framework with CI/CD integration, monitoring, error handling, and orchestration capabilities for scalable RPA implementations.',
    'rpa-tools': 'Collection of RPA utilities, scripts, and tools for UiPath and automation workflows - Helper libraries, monitoring scripts, and productivity tools for automation teams.',
    'process-mining': 'Process mining and analysis tools - Discover, analyze, and optimize business processes using event logs, variant analysis, and performance metrics.',
    'api-integration': 'RESTful API integration layer with authentication, rate limiting, retry logic, and comprehensive error handling for enterprise integrations.',
    'data-pipeline': 'ETL pipeline for data transformation and integration across multiple systems - Scalable data processing with validation, transformation, and monitoring.',
  }

  // Repositories to highlight (most interesting ones based on complexity and uniqueness)
  const featuredRepos = ['PISim', 'janome_embroidery_tool', 'PortfolioMZ', 'spaghetti']

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
              // Enhance with custom description if available
              if (repoDescriptions[repo.name] && (!repo.description || repo.description.length < 50)) {
                return { ...repo, description: repoDescriptions[repo.name] }
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
