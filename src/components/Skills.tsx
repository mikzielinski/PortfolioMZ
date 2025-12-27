import { FaRobot, FaBrain, FaChartLine, FaCode, FaCloud, FaDatabase } from 'react-icons/fa'
import './Skills.css'

interface Skill {
  name: string
  icon: JSX.Element
  description: string
}

const Skills = () => {
  const skills: Skill[] = [
    {
      name: 'Robotic Process Automation',
      icon: <FaRobot />,
      description: 'Expert in UiPath, workflow automation, and RPA architecture design'
    },
    {
      name: 'Artificial Intelligence',
      icon: <FaBrain />,
      description: 'AI integration, machine learning applications, and intelligent automation'
    },
    {
      name: 'Business Transformation',
      icon: <FaChartLine />,
      description: 'Strategic planning, process optimization, and digital transformation'
    },
    {
      name: 'Software Development',
      icon: <FaCode />,
      description: 'Python, .NET, TypeScript, and full-stack development expertise'
    },
    {
      name: 'Cloud Solutions',
      icon: <FaCloud />,
      description: 'Cloud-native architectures and scalable automation deployments'
    },
    {
      name: 'Data Analytics',
      icon: <FaDatabase />,
      description: 'Data analysis, process mining, and KPI measurement'
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Expertise & Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
