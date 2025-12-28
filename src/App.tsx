import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Activities from './components/Activities'
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

  useEffect(() => {
    // Fetch GitHub repositories
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mikzielinski/repos?sort=updated&per_page=100')
        if (response.ok) {
          const data = await response.json()
          // Filter out forked repositories if needed, or keep them
          setRepos(data.filter((repo: GitHubRepo) => repo.name !== 'mikzielinski')) // Exclude profile repo
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
      <Projects repos={repos} loading={loading} />
      <Articles articles={articles} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
