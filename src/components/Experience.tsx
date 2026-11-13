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
  /** Collapsed under 'Show earlier roles' */
  early?: boolean
  roles: Role[]
}

// CV / career timeline — most recent first.
// To add a real logo: drop the file into public/logos/ and set `logo` below.
const companies: Company[] = [
  {
    id: 'xelto',
    name: 'Xelto Digital',
    logo: 'xelto-digital.webp',
    monogram: 'XD',
    brandColor: '#111827',
    url: 'https://xeltodigital.com/en/',
    location: 'Poland · Hybrid',
    kind: 'work',
    roles: [
      {
        title: 'Automation Solution Architect',
        period: 'May 2026 – Present',
        current: true,
        highlights: [
          'Designing end-to-end intelligent automation solutions (RPA & AI agents) for enterprise clients',
          'Building custom applications that speed up and standardize the automation development lifecycle',
          'Developing Task2Mask (formerly AiRelay)', // TODO: one-line product description
        ],
        tags: ['Solution Architecture', 'UiPath', 'AI Agents', 'Custom Apps'],
      },
    ],
  },
  {
    id: 'kozminski',
    name: 'Kozminski University',
    logo: 'kozminski.webp',
    monogram: 'ALK',
    brandColor: '#8b0d32',
    location: 'Warsaw · Hybrid',
    kind: 'teaching',
    roles: [
      {
        title: 'Lecturer',
        period: 'Oct 2025 – Present',
        current: true,
        highlights: [
          'Technology-agnostic courses on automation architecture, system integrations, APIs, governance and QA in enterprise digital transformation',
          'Workshops on system integration and API architecture, built around real business scenarios',
          'Designing training materials and hands-on exercises; mentoring students in process analysis and tech projects',
        ],
        tags: ['API Integration', 'Governance', 'QA', 'Enterprise Architecture'],
      },
    ],
  },
  {
    id: 'uipath-community',
    name: 'UiPath Community Poland',
    logo: 'uipath.svg',
    monogram: 'Ui',
    brandColor: '#fa4616',
    url: 'https://community.uipath.com/poland-1/',
    location: 'Poland',
    kind: 'community',
    roles: [
      {
        title: 'Community Lead & Event Organizer · UiPath MVP 2024 · 2025 · 2026',
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
    logo: 'sgh.webp',
    monogram: 'SGH',
    brandColor: '#003c7d',
    location: 'Warsaw',
    kind: 'teaching',
    roles: [
      {
        title: 'Lecturer',
        period: '2024 – 2025',
        highlights: [
          'Business Process Automation',
          'RPA Developer: Practice Point of View',
        ],
      },
    ],
  },
  {
    id: 'proservartner',
    name: 'Proservartner',
    logo: 'proservartner.webp',
    monogram: 'PS',
    brandColor: '#1e3a8a',
    location: 'Wrocław · Remote',
    kind: 'work',
    roles: [
      {
        title: 'UiPath Lead · Automation Architect / Solution Owner',
        period: 'Oct 2023 – Apr 2026',
        highlights: [
          'Designed and delivered automation solutions on UiPath and Microsoft Azure; integrations via REST, SOAP, SQL and cloud services',
          'Led On-Prem → Cloud/SaaS migrations and defined UiPath Automation Cloud standards and configuration',
          'Co-built an AI OCR system for processing and validating Arabic invoices (IDP on Azure AI Services)',
          'Set documentation and governance standards (PDD, SDD, best practices), incl. GxP process validation',
          'Mentored developer teams and ran UiPath, RPA and AI automation trainings and workshops',
        ],
        tags: ['UiPath', 'Microsoft Azure', 'IDP / AI OCR', 'SaaS Migration', 'RPA Governance'],
      },
    ],
  },
  {
    id: 'bayer',
    name: 'Bayer',
    logo: 'bayer.webp',
    monogram: 'B',
    brandColor: '#10384f',
    location: 'Warsaw',
    kind: 'work',
    roles: [
      {
        title: 'Senior Solution Engineer Intelligent Automation / UiPath System Owner',
        period: 'Jul 2022 – Mar 2024',
        highlights: [
          'System Owner of the enterprise UiPath platform, working directly with UiPath',
          'Designed the UiPath Cloud setup and led the On-Prem → SaaS migration; validated GxP process documentation',
          'Built reusable automation packages, API bridges and the MS Azure cloud environment setup',
          'Defined SDD/PDD documentation standards and supported developers day to day',
        ],
        tags: ['UiPath', 'MS Azure', 'GxP', 'VB.NET'],
      },
    ],
  },
  {
    id: 'olympus',
    name: 'Olympus Business Services',
    logo: 'olympus.webp',
    monogram: 'OBS',
    brandColor: '#08107b',
    location: 'Wrocław',
    kind: 'work',
    roles: [
      {
        title: 'Automation Developer & Lead Automation Operator',
        period: 'Jan 2021 – Jul 2022',
        highlights: [
          'Developed robots for SAP, ServiceNow, Salesforce, MS Office and APIs, plus shared libraries for repeatable actions',
          'Ran production operations: UiPath Orchestrator & Kibana administration, monitoring, incident root-cause analysis',
          'Owned UAT/dry-run sessions, code promotion to production and KPI dashboards; onboarded new developers',
        ],
        tags: ['UiPath', 'SAP', 'Orchestrator', 'Kibana'],
      },
    ],
  },
  {
    id: 'mahle',
    name: 'MAHLE',
    logo: 'mahle.webp',
    monogram: 'M',
    brandColor: '#00529b',
    location: 'Wrocław',
    kind: 'work',
    roles: [
      {
        title: 'Digital Automation Operator',
        period: 'Oct 2019 – Dec 2020',
        highlights: [
          'Developed UiPath RPA solutions (REFramework) and supervised production, test and dev environments',
          'Diagnosed robots and processes, tracked KPIs and mentored colleagues in UiPath',
          'Subject-matter expert for Arago HIRO (AI) in an international team',
        ],
        tags: ['UiPath', 'Arago HIRO', 'Kryon', 'Python'],
      },
      {
        title: 'Customer Portal Administrator',
        period: 'Feb 2019 – Oct 2019',
        highlights: [
          'Managed access to OEM partner portals (BMW, VW, Volvo, FCA, Audi, GM, SAP Ariba and more)',
          'Automated ticket handling with Python + Selenium and UiPath — my first RPA work',
        ],
      },
    ],
  },
  {
    id: 'early-career',
    name: 'Early career',
    monogram: '•••',
    brandColor: '#6b7280',
    kind: 'work',
    early: true,
    roles: [
      {
        title: 'Service Desk Agent · Hemmersbach',
        period: 'Aug 2018 – Jan 2019',
        highlights: ['English-language IT support, ticket management and troubleshooting'],
      },
      {
        title: 'Armored Transport Security Specialist · BR-ICS',
        period: 'Aug 2017 – Aug 2018',
        highlights: ['Securing US Army military transports for rail shipment; PL–EN interpreting and on-site IT support'],
      },
      {
        title: "Master's Researcher · Hirszfeld Institute of Immunology and Experimental Therapy, PAS",
        period: 'Jun 2015 – Mar 2018',
        highlights: ['Genetics research using molecular biology techniques'],
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
  const [showEarly, setShowEarly] = useState(false)
  const matching = companies.filter(c => filter === 'all' || c.kind === filter)
  const visible = matching.filter(c => showEarly || !c.early)
  const hiddenCount = matching.length - visible.length

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

        {(hiddenCount > 0 || showEarly) && matching.some(c => c.early) && (
          <div className="xp-more">
            <button className="xp-filter" onClick={() => setShowEarly(v => !v)}>
              {showEarly ? 'Hide earlier roles' : 'Show earlier roles (2015–2019)'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience
