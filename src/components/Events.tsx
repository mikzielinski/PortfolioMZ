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
      title: 'Kozminski University - RPA & Automation Lecturer',
      date: '2024-2025',
      dateSort: '2024-09-01',
      location: 'Kozminski University, Warsaw, Poland',
      description: 'Lecturer at Kozminski University teaching RPA, automation, and intelligent process automation. Educating students on cutting-edge automation technologies and business transformation through automation.',
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

