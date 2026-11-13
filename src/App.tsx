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
  demo?: string
}

interface Article {
  id: string
  title: string
  date: string
  excerpt: string
  url: string
  imageUrl?: string
}

// Custom descriptions based on ACTUAL project analysis - only for verified projects
// These are meaningful, specific descriptions based on real code and functionality
const repoDescriptions: { [key: string]: string } = {
  // Verified Projects - Based on actual code analysis
  'PISim': 'Educational platform for business process simulation and RPA training. FastAPI backend with React/TypeScript frontend. Enables students to create process scenarios (like AP Invoice Handling), generate synthetic event logs (4000+ cases), analyze bottlenecks, calculate KPIs, visualize processes with heatmaps and spaghetti diagrams, simulate automation with robots, calculate implementation costs (CapEx/OpEx/Change Request), and perform what-if simulations. Includes RACI matrices, team capacity analysis, and CSV/JSON export. Designed for academic use - students analyze data and calculate ROI themselves.',

  'PortfolioMZ': 'Professional portfolio website showcasing AI, RPA, and Business Transformation expertise. Built with React 18, TypeScript, and Vite. Features dynamic GitHub repository integration with custom descriptions, collapsible About sections (Bio & Technical Expertise), carousel-based Events showcase (conferences, meetups, workshops), profile photo display, responsive design, and automated deployment via GitHub Actions to GitHub Pages. Includes comprehensive documentation (deployment guides, troubleshooting, events management). Showcases UiPath MVP 2024, 2025 & 2026 recognition, speaking engagements, educational activities, and technical projects. Live at mikzielinski.github.io/PortfolioMZ.',

  'janome_embroidery_tool': 'SVG-to-embroidery conversion tool for JANOME embroidery machines. Python-based with interactive CLI and GUI (Tkinter). Features: k-means color reduction (generates 3 variants: 10/14/18 colors), background removal (rembg), automatic scaling, border generation with offset, stitch type selection (Tatami fill for large areas >100mm², Satin stitch for edges 20-100mm², Run stitch for details <20mm²), exports to DST (Tajima) and JEF (Janome) formats with layer management and preview generation.',

  'bebek_python': 'BloodBowl game implementation in Python 3.10 with Tkinter GUI. Features character picker for team builder, player class mechanics, team persistence in JSON format, and movement system with sprite management. Implements proper memory management using dictionaries to prevent garbage collection of UI elements (buttons and pictures). Built in October 2022 as a hobby project combining game mechanics with Python GUI development.',

  'ChromeDisabler': 'Windows utility tool (NuGet package) to automatically close Chrome popup windows. Provides automated solution for disabling unwanted Chrome popups and notifications. Packaged as CloseChromePoPUp with installable .nupkg format for easy deployment. Useful for automation scenarios where Chrome popups interrupt workflows or testing environments.',

  'ShPoint-Prod': 'Shatterpoint Online - Full-stack multiplayer game monorepo. Monorepo architecture with client (React/TypeScript), server (Python/FastAPI), and shared packages. Features real-time WebSocket communication, Google OAuth authentication, Redis session management (Upstash), character management system, and comprehensive testing suite. Deployed on Vercel (client) with Docker support. Includes migration guides, security fixes, component update documentation, and testing checklists. Active development with 600+ commits.',

  'ESP32_Elvevator': 'ESP32 IoT weight monitoring system with HX711 load cell amplifier and WiFi dashboard. Real-time weight readings from load cell sensors with web-based dashboard accessible from any device on WiFi network. Features WebSocket for live data streaming, live charts for measurement history, tara (zeroing) function, mobile-friendly interface, and calibration system. Built with ESP-IDF framework (C), includes detailed calibration guide, component list, and installation diagrams. Ideal for smart scales, IoT load monitoring, industrial weight control systems, and home automation projects.',

  'PDFEditor': 'Python-based PDF style editor for modifying formatting and styles in PDF documents. Enables programmatic editing of PDF styles, fonts, colors, and layout properties. Built with Python PDF manipulation libraries for batch processing and automation of PDF styling tasks. Useful for automating PDF formatting workflows and customizing document appearance programmatically.',

  'PythonAPIExplorer': 'PAD HTTP Tracing Toolkit - Advanced debugging tool for Power Automate Desktop (PAD) HTTP calls. Two complementary approaches: Frida-based inline tracer that hooks WinHTTP/WinINet inside PAD worker processes (auto-rescans for child processes) and records complete request/response bodies with headers to JSON logs, and Mitmproxy-based intercepting proxy with automatic Windows proxy configuration and certificate installation. Captures all outbound HTTP calls from PAD, PowerShell, CMD, and helper processes without TLS interception or manual proxy setup. Perfect for debugging API integrations, analyzing PAD behavior, and reverse-engineering automation workflows.',

  'vba_uipath': 'VBA and UiPath integration project - Bridge between Visual Basic for Applications (VBA) and UiPath automation platform. Contains VBA code module and UiPath workflow (XAML) for seamless communication between Excel/VBA macros and UiPath robots. Enables triggering UiPath processes from VBA, exchanging data between VBA applications and UiPath automations, and orchestrating hybrid automation workflows combining desktop automation with enterprise RPA capabilities.',

  'FusionHckVote': 'Public Choice Award voting app for the Agent Pageant hackathon final at UiPath Fusion Warsaw 2026. Mobile-first static SPA (vanilla JavaScript, hash routing) on GitHub Pages with Firebase Firestore: one vote per participant (changeable), judge-only results with Chart.js, team-only views via token links, and a password-protected admin panel for managing projects.',

  'HckFleetInteli': 'Fleet Intelligence - UiPath AgentHack 2026 submission built with Polish UiPath MVPs and the XELTO team. End-to-end fleet expense fraud detection consolidating three UiPath components: a Driver App (coded app for submitting expenses and invoices), an AI agent orchestrated in UiPath Maestro that investigates claims, and a Fleet Manager app for review and approval, all on Data Fabric. Includes a public browser-only demo for judges.',

  'glados-r1': 'Voice agent for the Rabbit R1 with switchable agent personas (HAL 9000, GLaDOS, TARS and more). The R1 acts as a thin push-to-talk client streaming audio over WebSocket to a Node/TypeScript backend with Whisper speech-to-text, a local SLM via Ollama or a Cursor SDK agent for harder tasks, RAG memory, and Piper/Fish text-to-speech. The project behind the "I Gave Rabbit R1 the Second Life It Deserved" article.',

  'UiPathUnifiedCalculator': 'UiPath licensing planner comparing Flex and Unified Pricing & Licensing. Single-page static app that estimates annual Flex cost (SKUs + AI Units) and Unified cost (platform tier, fixed user/robot SKUs, Platform Unit bundles), evaluates whether migrating pays off, plans yearly Platform Unit demand, and imports a process portfolio from XLSX/CSV to suggest a licence setup. Bilingual PL/EN. Companion to the "Flex to the Future" article.',

    'TrackLoadSim': 'Truck trailer load simulator and optimizer for loose freight. Plans the load layout with 3D packing (floor-only greedy or stacked/layered), visualizes it in 3D with React Three Fiber (centre of mass, per-box inspection), and runs a dynamic safety analysis for braking, cornering and rollover risk. Produces operational loading and driving recommendations, uses GPT to optimize SKU order and packing strategy, can verify stability with a PyBullet physics test, and imports scenarios from Excel/CSV and exports JSON plus a PDF loading map. FastAPI + React/TypeScript.',

  'yololizer': 'Local, cloud-free workbench for computer vision: upload images or video, annotate bounding boxes and polygons, train YOLO models and run inference. Python API in Docker (with optional NVIDIA GPU), a static UI on GitHub Pages that connects to the local API, and one-click GitHub Codespaces setup.',

  'ProjectReviewRepository': 'DMS + SDLC governance platform for software and automation projects. Controlled documentation (PDD, SDD, TSS, test plans, release notes) with a full lifecycle from draft to archive, enforced segregation of duties (an author cannot approve, a reviewer cannot also approve, temporary auditors cannot sign off), immutable approved versions, an evidence vault with SHA-256 hashes, audit logging, and approval gates that block downstream work on a governance-aware Gantt. An AI document factory drafts content from Word templates, but AI output always lands as a draft with an auto-created review task. React SPA + FastAPI + PostgreSQL + MinIO in Docker.',

  'RPGPlayerAAI': 'An AI player that joins a tabletop RPG session and plays like a human at the table. Listens through the microphone (Whisper speech-to-text), classifies each moment as wait / my turn / speak up, and answers out loud in Polish either as the player or in-world as its own character. Long sessions are kept coherent with a rolling context window plus LLM-summarized long-term memory. Text-to-speech via Edge TTS, OpenAI TTS or Kokoro.',

  'webinarTool': 'Browser-based webinar teleprompter: agenda editor with per-chapter timing and speaker notes, Markdown/JSON templates, a live prompter with chapter and overall progress, auto-advance, full-screen recording view and a gaze target that keeps your eyes on the camera. Experimental PPTX/PDF slide mapping. Runs entirely in the browser - nothing is sent to a server. Built for XELTO webinars.',

  'PagentA': 'Website of the Agent Pageant 2026 hackathon, organized by UiPath Poland and UiPath Community Poland with the final at UiPath Fusion Warsaw. Animated, bilingual (PL/EN) information hub with a live countdown, event timeline, competition tasks and participant policies, deployed on GitHub Pages.',

  // Note: 'spaghetti' is part of PISim, not a separate project - spaghetti diagrams are a visualization feature
}

// Repositories to highlight - verified projects only
const featuredRepos = [
  'HckFleetInteli',
  'TrackLoadSim',
  'ProjectReviewRepository',
  'glados-r1',
  'RPGPlayerAAI',
  'yololizer',
  'UiPathUnifiedCalculator',
  'webinarTool',
  'ShPoint-Prod',
]

// Live demos that work without a local backend or a login
const liveDemos: { [key: string]: string } = {
  'HckFleetInteli': 'https://mikzielinski.github.io/HckFleetInteli/Demo/',
  'UiPathUnifiedCalculator': 'https://mikzielinski.github.io/UiPathUnifiedCalculator/',
  'webinarTool': 'https://mikzielinski.github.io/webinarTool/',
  'PagentA': 'https://mikzielinski.github.io/PagentA/',
}

// Repos kept public on GitHub but not shown here: empty placeholders, UiPath
// template boilerplate, client-specific builds (covered by HckFleetInteli) and
// private experiments
const hiddenRepos = [
  'mikzielinski', 'newSH', 'CzechFusion', 'REF_Perf', 'REF-Disp',
  'DPDAgent', 'dpdDriverApp', 'dpdFleetManager', 'rpalicense', 'tabyplaygems',
  'AbsenceTool', 'Enhanced-absence-tool', 'Devs4DevsSite',
]

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
          // Filter and enhance repositories
          const filteredRepos = data
            .filter((repo: GitHubRepo) => {
              // Exclude profile repo and prioritize featured repos
              return !hiddenRepos.includes(repo.name) &&
                     (featuredRepos.includes(repo.name) || !repo.fork)
            })
            .map((repo: GitHubRepo) => ({ ...repo, demo: liveDemos[repo.name] }))
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
      title: 'Zanim wpuścisz agenta AI do firmowych danych (Before You Let an AI Agent into Company Data)',
      date: 'Oct 28, 2026',
      excerpt: 'A chat only sees what you paste; an agent takes whatever it finds. Why connecting AI agents to mailboxes, drives and repositories changes the data-risk model, and the questions to ask first.',
      url: 'https://www.linkedin.com/pulse/zanim-wpu%C5%9Bcisz-agenta-ai-do-firmowych-danych-mikolaj-zieli%C5%84ski-py9cf/',
      imageUrl: '/article-placeholder.jpg'
    },
    {
      id: '2',
      title: 'I\'ve been testing UiPath Studio on a Mac. It works, but not for everyone yet',
      date: 'Oct 19, 2026',
      excerpt: 'Hands-on notes from testing UiPath Studio on macOS through the MVP Insider Portal: does it actually work, and is it more comfortable than Studio Web?',
      url: 'https://www.linkedin.com/pulse/ive-been-testing-uipath-studio-mac-works-everyone-yet-zieli%C5%84ski-2jv4f/',
      imageUrl: '/article-placeholder.jpg'
    },
    {
      id: '3',
      title: 'AI Act i ISO 42001 w UiPath (AI Act and ISO 42001 in UiPath)',
      date: 'Aug 11, 2026',
      excerpt: 'Practical guidance on preparing AI and automation programs for the EU AI Act and ISO 42001, published on the XELTO blog.',
      url: 'https://xeltodigital.com/blog/ai-act-iso-42001-uipath/',
      imageUrl: '/article-placeholder.jpg'
    },
    {
      id: '4',
      title: 'I Gave Rabbit R1 the Second Life It Deserved',
      date: 'Jun 19, 2026',
      excerpt: 'The over-hyped pocket AI assistant, rebuilt as a working voice agent with its own backend, speech pipeline and agent personas.',
      url: 'https://www.linkedin.com/pulse/i-gave-rabbit-r1-second-life-deserved-mikolaj-zieli%C5%84ski-m0krf/',
      imageUrl: '/article-placeholder.jpg'
    },
    {
      id: '5',
      title: 'Flex to the Future',
      date: 'Mar 7, 2026',
      excerpt: 'From robot-based licensing through Flex to Unified Pricing & Licensing: what UiPath\'s new model means and why it reflects how the platform itself has changed.',
      url: 'https://www.linkedin.com/pulse/flex-future-mikolaj-zieli%C5%84ski-cz8kf/',
      imageUrl: '/article-placeholder.jpg'
    },
    {
      id: '6',
      title: 'When Numbers Stop Being Innocent - Variable Overflow',
      date: 'Dec 27, 2025',
      excerpt: 'In software, it is easy to believe that numbers are just numbers. A look at overflow, floating-point precision and the boundary conditions that quietly break systems.',
      url: 'https://www.linkedin.com/pulse/when-numbers-stop-being-innocent-variable-overflow-mikolaj-zieli%C5%84ski-iklgf/',
      imageUrl: '/article-placeholder.jpg'
    },
    {
      id: '7',
      title: 'UiPath 2025 → 2026: The Year Automation Started Thinking — and Where It Goes Next',
      date: 'Nov 25, 2025',
      excerpt: '2024 taught us that machines can speak impressively. 2025 proved automation can also think. A look at where agentic automation goes next.',
      url: 'https://www.linkedin.com/pulse/uipath-2025-2026-year-automation-started-thinking-where-zieli%C5%84ski-jamaf/',
      imageUrl: '/article-placeholder.jpg'
    },
    {
      id: '8',
      title: 'The Good, the Bad, and the Ugly of Process Mapping in RPA (BPMN & UML Edition)',
      date: 'Jun 22, 2025',
      excerpt: 'An in-depth look at process mapping methodologies in RPA projects.',
      url: 'https://www.linkedin.com/pulse/good-bad-ugly-process-mapping-rpa-bpmn-uml-edition-mikolaj-zieli%C5%84ski-dkzcf/',
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
