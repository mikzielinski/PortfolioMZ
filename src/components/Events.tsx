import { useState } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaImage, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Events.css'

interface Event {
  id: string
  title: string
  date: string
  dateSort: string // For chronological sorting (YYYY-MM-DD format)
  location: string
  description: string
  type: 'conference' | 'meetup' | 'workshop' | 'webinar'
  link?: string
  photos?: string[]
  roles: ('speaker' | 'organizer' | 'attendee' | 'lecturer')[] // Multiple roles allowed
}

const Events = () => {
  const [currentConferenceIndex, setCurrentConferenceIndex] = useState(0)
  const [currentWorkshopIndex, setCurrentWorkshopIndex] = useState(0)
  // UiPath Community Events - Will be sorted chronologically (most recent first)
  const events: Event[] = [
    {
      id: 'przeautomatyzowani-2026',
      title: 'Prze-Automatyzowani Podcast: When Do You Really Need an AI Agent?',
      date: 'October 28, 2026',
      dateSort: '2026-10-28',
      location: 'Online (video podcast)',
      description: 'Guest on the Prze-Automatyzowani video podcast, talking with Monika Serafin about when an AI agent is worth deploying and when a classic RPA robot does the job faster, cheaper and without hallucinations. Covered combining existing RPA fleets with AI agents, starting without burning the budget, limiting LLM hallucinations in business processes, and agent teams that verify each other.',
      type: 'webinar',
      roles: ['speaker'],
      photos: []
    },
    {
      id: 'piwo4devs-wroclaw-2026',
      title: 'Piwo4Devs Wrocław: An Evening of Automation',
      date: 'September 17, 2026',
      dateSort: '2026-09-17',
      location: 'Man Cave, Wrocław, Poland',
      description: 'Co-organized this UiPath Community Polska evening meetup with XELTO and Subeo, featuring three UiPath MVPs on one stage. Presented "Before You Let an AI Agent into Company Data" on how agentic access changes the data-leak risk model. Other sessions covered IT recruitment from the other side of the table and UiPath Maestro through a sceptic\'s eyes, followed by a networking game and Kahoot.',
      type: 'meetup',
      roles: ['organizer', 'speaker'],
      photos: []
    },
    {
      id: 'uipath-agenthack-2026',
      title: 'UiPath AgentHack: Xelto Fleet Intelligence',
      date: 'July 2026',
      dateSort: '2026-07-06',
      location: 'Online hackathon',
      description: 'Built and submitted Xelto Fleet Intelligence with Polish UiPath MVPs Kamil Miśko and Piotr Kołakowski and the XELTO team. Two UiPath coded apps on a single data layer (a Driver App for expenses and invoices, a Fleet Manager App for claim review and fleet health), orchestrated by AI agents with RAG, IXP and Data Fabric for fleet expense fraud detection.',
      type: 'conference',
      roles: ['attendee'],
      link: 'https://mikzielinski.github.io/HckFleetInteli/Demo/',
      photos: []
    },
    {
      id: 'xelto-netsuite-webinar-2026',
      title: 'XELTO Webinar: AI in NetSuite Without Empty Promises',
      date: 'July 2026',
      dateSort: '2026-07-01',
      location: 'Online',
      description: 'Speaker at the XELTO webinar on practical AI deployments with Oracle NetSuite. My part: how to start the AI journey in a company — rolling AI out without burning the budget, protecting data when AI agents are involved, and optimizing business process costs.',
      type: 'webinar',
      roles: ['speaker'],
      photos: []
    },
    {
      id: 'mvp-summit-madrid-2026',
      title: 'UiPath MVP Summit 2026 - Madrid',
      date: 'June 24, 2026',
      dateSort: '2026-06-24',
      location: 'Madrid, Spain',
      description: 'Attended the annual UiPath MVP Summit in my third year as an MVP, together with almost the entire Polish MVP crew. MVPs from around the world meet the UiPath product teams in person to exchange ideas and feedback that shape how the platform evolves.',
      type: 'conference',
      roles: ['attendee'],
      photos: []
    },
    {
      id: 'fusion-prague-2026',
      title: 'UiPath Fusion Prague',
      date: 'June 2026',
      dateSort: '2026-06-05',
      location: 'Prague, Czech Republic',
      description: 'The first UiPath Fusion dedicated to the Czech and Slovak markets. Supported Roel Zwakman in reopening the UiPath Community chapter for the Czech Republic.',
      type: 'conference',
      roles: ['attendee'],
      photos: []
    },
    {
      id: 'agent-pageant-fusion-warsaw-2026',
      title: 'Agent Pageant Hackathon Final @ UiPath Fusion Warsaw',
      date: 'March 19, 2026',
      dateSort: '2026-03-19',
      location: 'UiPath Fusion, Warsaw, Poland',
      description: 'Co-organized Agent Pageant, the agentic automation hackathon run by UiPath Poland and UiPath Community Poland, with its live final on the UiPath Fusion Warsaw stage. Two tracks: "Agent for Everyone" (a single AI agent on the UiPath Platform) and "Maestro Mind" (multi-component agentic systems orchestrated in UiPath Maestro), with €1,500 main prizes and an audience award. Also built the public-choice voting app used during the final.',
      type: 'conference',
      roles: ['organizer'],
      link: 'https://github.com/mikzielinski/FusionHckVote',
      photos: []
    },
    {
      id: 'wroclaw-2025',
      title: 'UiPath Lounge: Workflow & Chill - Wrocław',
      date: 'September 12, 2025',
      dateSort: '2025-09-12',
      location: 'Mixturium, Wrocław, Poland',
      description: 'Hosted and organized this in-person community meetup mixing automation know-how, real stories, and chill vibes. Organized by Proservartner and Subeo with UiPath Community Poland. Presented "Agentic Automation: Common Pitfalls & How to Dodge Them". Perfect spot for UiPath fans, RPA lovers, and shared services pros.',
      type: 'meetup',
      roles: ['organizer', 'speaker'],
      link: 'https://community.uipath.com/events/details/uipath-uipath-community-poland-presents-uipath-lounge-workflow-amp-chill-wroclaw/',
      photos: []
    },
    {
      id: 'lodz-2025',
      title: 'UiPath Community Day Łódź: Devs4Devs Conference',
      date: 'April 11, 2025',
      dateSort: '2025-04-11',
      location: 'Scena Monopolis, Łódź, Poland',
      description: 'UiPath MVP and UiPath Lead at Proservartner. Presented "When Bots Find Zen – How We Structured Automation and Befriended AI" (EN) and "Agentic Use Case - demonstracja praktyczna" with Kamil Miśko. First in-person UiPath Community Day in Poland 2025, focusing on Agentic AI with 169 RSVPs.',
      type: 'conference',
      roles: ['speaker', 'organizer'],
      link: 'https://community.uipath.com/events/details/uipath-uipath-community-poland-presents-uipath-community-day-lodz-devs4devs-conference/',
      photos: []
    },
    {
      id: 'warsaw-2024',
      title: 'UiPath Community Day Warsaw: Devs4Devs Conference',
      date: 'November 14, 2024',
      dateSort: '2024-11-14',
      location: 'ØRSTED POLSKA, Warsaw, Poland',
      description: 'UiPath MVP and UiPath Lead at Proservartner. Presented "How AI can save lives. A use case powered by UiPath Apps and AI". Second in-person UiPath Community Day in Poland following the success of Krakow gathering, covering latest UiPath Platform developments including Agentic AI. 99 RSVPs.',
      type: 'conference',
      roles: ['speaker', 'organizer'],
      link: 'https://community.uipath.com/events/details/uipath-warsaw-krakow-presents-uipath-community-day-warsaw-devs4devs-conference/',
      photos: []
    },
    {
      id: 'krakow-2024',
      title: 'UiPath Community Day Krakow: Devs4Devs Conference',
      date: '2024',
      dateSort: '2024-06-01',
      location: 'Kraków, Poland',
      description: 'UiPath MVP and UiPath Lead at Proservartner. Participated in the first successful UiPath Community Day in Poland held in Krakow. This event paved the way for subsequent community gatherings across Poland, bringing together automation professionals to share knowledge and best practices.',
      type: 'conference',
      roles: ['speaker', 'organizer'],
      link: 'https://community.uipath.com/events/details/uipath-warsaw-krakow-presents-uipath-community-day-warsaw-devs4devs-conference/',
      photos: []
    },
    {
      id: 'sgh-business-process',
      title: 'SGH University - Business Process Automation',
      date: '2024-2025',
      dateSort: '2024-09-01',
      location: 'Warsaw School of Economics (SGH), Warsaw, Poland',
      description: 'Lecturer delivering course on Business Process Automation. Teaching students practical approaches to process automation, RPA implementation, and digital transformation strategies.',
      type: 'workshop',
      roles: ['lecturer'],
      photos: []
    },
    {
      id: 'sgh-rpa-developer',
      title: 'SGH University - RPA Developer: Practice Point of View',
      date: '2024-2025',
      dateSort: '2024-09-01',
      location: 'Warsaw School of Economics (SGH), Warsaw, Poland',
      description: 'Lecturer teaching RPA development from a practical, real-world perspective. Sharing industry insights, best practices, and hands-on experience in UiPath development and automation engineering.',
      type: 'workshop',
      roles: ['lecturer'],
      photos: []
    },
    {
      id: 'kozminski-university',
      title: 'Kozminski University - Automation Architecture Lecturer',
      date: '2025 - present',
      dateSort: '2025-10-01',
      location: 'Kozminski University, Warsaw, Poland',
      description: 'Lecturer at Kozminski University since October 2025, teaching automation architecture, system integrations and API design, governance and quality assurance in enterprise digital transformation. The program is technology-agnostic and focused on the practical side of designing, deploying and maintaining automation solutions in enterprise environments.',
      type: 'workshop',
      roles: ['lecturer'],
      photos: []
    },
  ]

  // Sort events chronologically (most recent first) using dateSort field
  const sortedEvents = [...events].sort((a, b) => {
    // Compare using dateSort field (YYYY-MM-DD format)
    return b.dateSort.localeCompare(a.dateSort)
  })

  // Separate conferences/meetups from workshops
  const conferences = sortedEvents.filter(e => e.type === 'conference' || e.type === 'meetup' || e.type === 'webinar')
  const workshops = sortedEvents.filter(e => e.type === 'workshop')

  const getEventTypeColor = (type: Event['type']) => {
    const colors = {
      conference: '#6366f1',
      meetup: '#8b5cf6',
      workshop: '#ec4899',
      webinar: '#f59e0b'
    }
    return colors[type]
  }

  const getRoleBadge = (role: Event['roles'][0]) => {
    const badges = {
      speaker: '🎤 Speaker',
      organizer: '👥 Organizer',
      attendee: '👤 Attendee',
      lecturer: '🎓 Lecturer'
    }
    return badges[role]
  }

  const nextConference = () => {
    setCurrentConferenceIndex((prev) => (prev + 1) % conferences.length)
  }

  const prevConference = () => {
    setCurrentConferenceIndex((prev) => (prev - 1 + conferences.length) % conferences.length)
  }

  const goToConference = (index: number) => {
    setCurrentConferenceIndex(index)
  }

  const nextWorkshop = () => {
    setCurrentWorkshopIndex((prev) => (prev + 1) % workshops.length)
  }

  const prevWorkshop = () => {
    setCurrentWorkshopIndex((prev) => (prev - 1 + workshops.length) % workshops.length)
  }

  const goToWorkshop = (index: number) => {
    setCurrentWorkshopIndex(index)
  }

  const renderEventCard = (event: Event) => (
    <div key={event.id} className="event-card carousel-slide">
      <div className="event-header">
        <div className="event-type-badge" style={{ backgroundColor: getEventTypeColor(event.type) }}>
          {event.type.toUpperCase()}
        </div>
        <div className="event-roles">
          {event.roles.map((role, idx) => (
            <div key={idx} className="event-role-badge">{getRoleBadge(role)}</div>
          ))}
        </div>
      </div>
      
      <h3>{event.title}</h3>
      
      <div className="event-meta">
        <div className="event-meta-item">
          <FaCalendarAlt /> {event.date}
        </div>
        <div className="event-meta-item">
          <FaMapMarkerAlt /> {event.location}
        </div>
      </div>
      
      <p className="event-description">{event.description}</p>
      
      {event.photos && event.photos.length > 0 && (
        <div className="event-gallery">
          <h4>
            <FaImage /> Gallery ({event.photos.length})
          </h4>
          <div className="gallery-grid">
            {event.photos.map((photo, index) => (
              <div key={index} className="gallery-item">
                <img src={photo} alt={`${event.title} - Photo ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {event.link && (
        <a 
          href={event.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="event-link"
        >
          View Event Details <FaExternalLinkAlt />
        </a>
      )}
    </div>
  )

  const renderCarousel = (
    events: Event[], 
    currentIndex: number, 
    onNext: () => void, 
    onPrev: () => void, 
    onGoTo: (index: number) => void,
    title: string
  ) => {
    if (events.length === 0) return null

    return (
      <div className="events-section">
        <h3 className="events-subsection-title">{title}</h3>
        <div className="events-carousel-container">
          <button className="carousel-button carousel-button-prev" onClick={onPrev} aria-label={`Previous ${title.toLowerCase()}`}>
            <FaChevronLeft />
          </button>
          
          <div className="events-carousel">
            <div 
              className="events-carousel-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {events.map(renderEventCard)}
            </div>
          </div>

          <button className="carousel-button carousel-button-next" onClick={onNext} aria-label={`Next ${title.toLowerCase()}`}>
            <FaChevronRight />
          </button>

          <div className="carousel-indicators">
            {events.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => onGoTo(index)}
                aria-label={`Go to ${title.toLowerCase()} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="events" className="events">
      <div className="container">
        <h2 className="section-title">Events & Conferences</h2>
        <p className="section-subtitle">
          Speaking engagements, workshops, and community events I've organized or participated in
        </p>
        
        {renderCarousel(
          conferences,
          currentConferenceIndex,
          nextConference,
          prevConference,
          goToConference,
          'Conferences & Meetups'
        )}

        {renderCarousel(
          workshops,
          currentWorkshopIndex,
          nextWorkshop,
          prevWorkshop,
          goToWorkshop,
          'Workshops & Lectures'
        )}

        {(conferences.length === 0 && workshops.length === 0) && (
          <div className="events-note">
            <p>
              <FaImage /> Event galleries coming soon! Photos from conferences and events will be added here.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Events

