import { FaRobot, FaBrain, FaChartLine, FaCode, FaCloud, FaDatabase } from 'react-icons/fa'
import './Skills.css'

interface Skill {
  name: string
  icon: JSX.Element
  description: string
}

const Skills = () => {
  const skillGroups = [
    {
      category: 'System Architecture',
      icon: <FaCode />,
      skills: [
        'Scalable & resilient design',
        'Integration strategy and API-based systems',
        'Custom platforms built from scratch'
      ]
    },
    {
      category: 'Automation & Intelligent Systems',
      icon: <FaRobot />,
      skills: [
        'RPA with UiPath (primary stack)',
        'Agentic automation & AI-assisted workflows',
        'Orchestration and exception-heavy flows'
      ]
    },
    {
      category: 'Reliability & Failure Analysis',
      icon: <FaChartLine />,
      skills: [
        'Failure mode identification & mitigation',
        'Data integrity, overflow & boundary conditions',
        'Operational resilience for long-running systems'
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Expertise & Skills</h2>
        <p className="section-subtitle">
          Technical capabilities organized by domain
        </p>
        <div className="skills-groups">
          {skillGroups.map((group, index) => (
            <div key={index} className="skill-group">
              <div className="skill-group-header">
                <div className="skill-group-icon">{group.icon}</div>
                <h3 className="skill-group-title">{group.category}</h3>
              </div>
              <ul className="skill-group-list">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
