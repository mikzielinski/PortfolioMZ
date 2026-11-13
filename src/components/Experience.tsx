import { useState } from 'react'
import { FaBriefcase, FaGraduationCap, FaUsers, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

type Kind = 'work' | 'teaching' | 'community'

interface Role {
  title: string
  period: string
  current?: boolean
  highlights: string[]
  tags?: string[]
}

interface Company {
  id: string
  name: string
  /** File name in /public/logos — if missing, a monogram badge is shown instead */
  logo?: string
  monogram: string
  brandColor: string
  url?: string
  location?: string
  kind: Kind
  roles: Role[]
}

// CV / career timeline — most recent first.
// To add a real logo: drop the file into public/logos/ and set `logo` below.
const companies: Company[] = [
  {
    id: 'xelto-digital',
    name: 'Xelto Digital',
    logo: 'xelto-digital.png',
    monogram: 'XD',
    brandColor: '#111827',
    url: 'https://xeltodigital.com/en/',
    location: 'Poland · Czechia',
    kind: 'work',
    roles: [
      {
        title: 'Automation Solution Architect',
        period: 'May 2026 – Present',
        current: true,
        highlights: [
          'Designing end-to-end intelligent automation solutions (RPA & AI agents) for clients across finance, supply chain and HR processes',
          'Building custom internal applications that speed up and standardize the automation development lifecycle',
          'Developing Task2Mask (formerly AiRelay)', // TODO: one-line product description
        ],
        tags: ['Solution Architecture', 'UiPath', 'AI Agents', 'Custom Apps'],
      },
    ],
  },
  {
    id: 'proservartner',
    name: 'Proservartner',
    logo: 'proservartner.png',
    monogram: 'PS',
    brandColor: '#1e3a8a',
    location: 'Poland',
    kind: 'work',
    roles: [
      {
        title: 'UiPath Lead',
        period: 'until 2026', // TODO: start date
        highlights: [
          'Led UiPath automation initiatives and delivery teams',
          'Represented the company as UiPath MVP and speaker at UiPath Community Days (Kraków, Warsaw, Łódź)',
        ],
        tags: ['UiPath', 'Team Leadership', 'Delivery'],
      },
    ],
  },
  {
    id: 'uipath-community',
    name: 'UiPath Community Poland',
    logo: 'uipath.png',
    monogram: 'Ui',
    brandColor: '#fa4616',
    url: 'https://community.uipath.com/poland-1/',
    location: 'Poland',
    kind: 'community',
    roles: [
      {
        title: 'Community Lead & Event Organizer · UiPath MVP 2024 & 2025',
        period: '2024 – Present',
        current: true,
        highlights: [
          'Organizing UiPath Community Days, meetups and virtual sessions across Poland (Kraków, Warsaw, Łódź, Wrocław)',
          'Mentor in the Agent Pageant agentic automation hackathon (2026)',
        ],
      },
    ],
  },
  {
    id: 'sgh',
    name: 'SGH Warsaw School of Economics',
    logo: 'sgh.png',
    monogram: 'SGH',
    brandColor: '#003c7d',
    location: 'Warsaw',
    kind: 'teaching',
    roles: [
      {
        title: 'Lecturer',
        period: '2024 – Present',
        highlights: [
          'Business Process Automation',
          'RPA Developer: Practice Point of View',
        ],
      },
    ],
  },
  {
    id: 'kozminski',
    name: 'Kozminski University',
    logo: 'kozminski.png',
    monogram: 'ALK',
    brandColor: '#8b0d32',
    location: 'Warsaw',
    kind: 'teaching',
    roles: [
      {
        title: 'Lecturer – RPA & Automation',
        period: '2024 – Present',
        highlights: ['RPA, intelligent process automation and business transformation'],
      },
    ],
  },
]

const kindMeta: Record<Kind, { label: string; icon: JSX.Element }> = {
  work: { label: 'Work', icon: <FaBriefcase /> },
  teaching: { label: 'Teaching', icon: <FaGraduationCap /> },
  community: { label: 'Community', icon: <FaUsers /> },
}

const CompanyLogo = ({ company }: { company: Company }) => {
  const [failed, setFailed] = useState(!company.logo)
  if (failed) {
    return (
      <div
        className="xp-logo xp-logo-monogram"
        style={{ background: `linear-gradient(135deg, ${company.brandColor}, ${company.brandColor}cc)` }}
        aria-label={company.name}
      >
        {company.monogram}
      </div>
    )
  }
  return (
    <div className="xp-logo">
      <img
        src={`${import.meta.env.BASE_URL}logos/${company.logo}`}
        alt={`${company.name} logo`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

const Experience = () => {
  const [filter, setFilter] = useState<Kind | 'all'>('all')
  const visible = companies.filter(c => filter === 'all' || c.kind === filter)

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Where I build, lead and teach automation</p>

        <div className="xp-filters" role="tablist">
          {(['all', 'work', 'teaching', 'community'] as const).map(k => (
            <button
              key={k}
              role="tab"
              aria-selected={filter === k}
              className={`xp-filter ${filter === k ? 'active' : ''}`}
              onClick={() => setFilter(k)}
            >
              {k === 'all' ? 'All' : kindMeta[k].label}
            </button>
          ))}
        </div>

        <ol className="xp-timeline">
          {visible.map(company => (
            <li key={company.id} className={`xp-item ${company.roles.some(r => r.current) ? 'current' : ''}`}>
              <span className="xp-dot" aria-hidden="true" />
              <article className="xp-card">
                <header className="xp-header">
                  <CompanyLogo company={company} />
                  <div className="xp-heading">
                    <div className="xp-company-row">
                      {company.url ? (
                        <a href={company.url} target="_blank" rel="noopener noreferrer" className="xp-company">
                          {company.name}
                        </a>
                      ) : (
                        <span className="xp-company">{company.name}</span>
                      )}
                      <span className={`xp-kind xp-kind-${company.kind}`}>
                        {kindMeta[company.kind].icon} {kindMeta[company.kind].label}
                      </span>
                    </div>
                    {company.location && (
                      <span className="xp-location"><FaMapMarkerAlt /> {company.location}</span>
                    )}
                  </div>
                </header>

                {company.roles.map((role, i) => (
                  <div key={i} className="xp-role">
                    <div className="xp-role-head">
                      <h3>{role.title}</h3>
                      <span className="xp-period">
                        {role.current && <span className="xp-now">Now</span>}
                        {role.period}
                      </span>
                    </div>
                    <ul>
                      {role.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                    {role.tags && (
                      <div className="xp-tags">
                        {role.tags.map(t => <span key={t}>{t}</span>)}
                      </div>
                    )}
                  </div>
                ))}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
