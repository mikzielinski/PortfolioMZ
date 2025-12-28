import { FaChalkboardTeacher, FaUsers, FaMicrophone, FaCertificate, FaHandsHelping, FaPenFancy } from 'react-icons/fa'
import './Activities.css'

interface Activity {
  icon: JSX.Element
  title: string
  description: string
  link?: string
}

const Activities = () => {
  const activities: Activity[] = [
    {
      icon: <FaCertificate />,
      title: 'UiPath MVP 2024 & 2025',
      description: 'Recognized as Most Valuable Professional for two consecutive years for outstanding contributions to the UiPath community.',
      link: 'https://forum.uipath.com/u/mikolaj_zielinski/activity'
    },
    {
      icon: <FaMicrophone />,
      title: 'Conference Speaker',
      description: 'Regular speaker at automation conferences, sharing insights on RPA, AI integration, and business transformation strategies.',
    },
    {
      icon: <FaUsers />,
      title: 'Conference & Meeting Organizer',
      description: 'Organizing community events, workshops, and meetings that bring together automation professionals to share knowledge and best practices.',
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Lecturer & Educator',
      description: 'Teaching RPA and automation at leading universities including SGH (Warsaw School of Economics) and Kozminski University. Delivering courses on Business Process Automation, RPA Development, and practical automation engineering.',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Mentorship & Knowledge Sharing',
      description: 'Actively mentoring developers and automation engineers through one-on-one guidance, code reviews, and architectural consultations, helping teams improve design quality, scalability, and long-term maintainability.',
    },
    {
      icon: <FaPenFancy />,
      title: 'Community Content & Thought Leadership',
      description: 'Creating technical articles, case studies, and educational content focused on real-world automation challenges, system design pitfalls, and practical lessons learned from complex implementations.',
    }
  ]

  return (
    <section id="activities" className="activities">
      <div className="container">
        <h2 className="section-title">Community Activities</h2>
        <p className="section-subtitle">
          Active contributor to the automation community through speaking, organizing, and education
        </p>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="activity-card"
              onClick={() => activity.link && window.open(activity.link, '_blank')}
            >
              <div className="activity-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              {activity.link && (
                <a 
                  href={activity.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="activity-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Activity →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities
