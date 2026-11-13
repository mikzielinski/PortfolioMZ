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
      title: '3x UiPath MVP (2024-2026)',
      description: 'Recognized as Most Valuable Professional for three consecutive years (Solution Developer category) for contributions to the UiPath community.',
      link: 'https://forum.uipath.com/u/mikolaj_zielinski/activity'
    },
    {
      icon: <FaMicrophone />,
      title: 'Conference Speaker',
      description: 'Regular speaker at UiPath Community Days (Warsaw, Łódź, Krakow), Devs4Devs and Piwo4Devs meetups, webinars and podcasts, sharing insights on RPA, agentic automation and secure AI adoption. Topics: "Before You Let an AI Agent into Company Data", "When Bots Find Zen", "Agentic Automation: Common Pitfalls", "How AI can save lives".',
    },
    {
      icon: <FaUsers />,
      title: 'Conference & Meeting Organizer',
      description: 'Organizing UiPath community events and meetups across Poland (Warsaw, Łódź, Wrocław, Krakow) and co-organizing the Agent Pageant agentic automation hackathon, with its final at UiPath Fusion Warsaw 2026. Events attract 99-169+ RSVPs, bringing together automation professionals to share knowledge and best practices.',
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Lecturer & Educator',
      description: 'Teaching automation architecture, integrations, governance and QA at Kozminski University (since 2025), and previously Business Process Automation and RPA Development at SGH (Warsaw School of Economics). Audiences up to 200+ students per term. Courses focus on practical automation engineering, real-world use cases, and hands-on implementation.',
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
