import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaImage } from 'react-icons/fa'
import './Events.css'

interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  type: 'conference' | 'meetup' | 'workshop' | 'webinar'
  link?: string
  photos?: string[]
  role: 'speaker' | 'organizer' | 'attendee' | 'lecturer'
}

const Events = () => {
  // Add your events here with links and photos
  const events: Event[] = [
    {
      id: '1',
      title: 'UiPath Forward Conference',
      date: '2025',
      location: 'Various Locations',
      description: 'Speaking and organizing sessions on RPA and AI automation trends.',
      type: 'conference',
      role: 'speaker',
      link: 'https://forum.uipath.com/u/mikolaj_zielinski/activity',
      photos: [
        // Add photo URLs here when available
        // '/events/uipath-forward-1.jpg',
        // '/events/uipath-forward-2.jpg',
      ]
    },
    {
      id: '2',
      title: 'Poland UiPath Community Meetup',
      date: '2024-2025',
      location: 'Poland',
      description: 'Organizing and leading community meetups for UiPath professionals in Poland.',
      type: 'meetup',
      role: 'organizer',
      link: 'https://forum.uipath.com/u/mikolaj_zielinski/activity',
      photos: []
    },
    {
      id: '3',
      title: 'Automation & AI Workshop',
      date: '2025',
      location: 'Various Locations',
      description: 'Conducting workshops on automation best practices and AI integration.',
      type: 'workshop',
      role: 'lecturer',
      photos: []
    },
    // Add more events as needed
  ]

  const getEventTypeColor = (type: Event['type']) => {
    const colors = {
      conference: '#6366f1',
      meetup: '#8b5cf6',
      workshop: '#ec4899',
      webinar: '#f59e0b'
    }
    return colors[type]
  }

  const getRoleBadge = (role: Event['role']) => {
    const badges = {
      speaker: '🎤 Speaker',
      organizer: '👥 Organizer',
      attendee: '👤 Attendee',
      lecturer: '🎓 Lecturer'
    }
    return badges[role]
  }

  return (
    <section id="events" className="events">
      <div className="container">
        <h2 className="section-title">Events & Conferences</h2>
        <p className="section-subtitle">
          Speaking engagements, workshops, and community events I've organized or participated in
        </p>
        
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <div className="event-type-badge" style={{ backgroundColor: getEventTypeColor(event.type) }}>
                  {event.type.toUpperCase()}
                </div>
                <div className="event-role-badge">{getRoleBadge(event.role)}</div>
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
          ))}
        </div>

        {events.filter(e => e.photos && e.photos.length > 0).length === 0 && (
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

