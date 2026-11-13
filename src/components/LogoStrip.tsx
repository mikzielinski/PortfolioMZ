import './LogoStrip.css'

const logos = [
  { name: 'Xelto Digital', file: 'xelto-digital.webp' },
  { name: 'Proservartner', file: 'proservartner.webp' },
  { name: 'Bayer', emblem: true, file: 'bayer.webp' },
  { name: 'Olympus', file: 'olympus.webp' },
  { name: 'MAHLE', file: 'mahle.webp' },
  { name: 'UiPath', file: 'uipath.svg' },
  { name: 'Kozminski University', emblem: true, file: 'kozminski.webp' },
  { name: 'SGH Warsaw School of Economics', emblem: true, file: 'sgh.webp' },
]

const LogoStrip = () => (
  <section className="logo-strip" aria-label="Companies and institutions I have worked with">
    <div className="container">
      <p className="logo-strip-label">Worked with &amp; taught at</p>
      <ul className="logo-strip-list">
        {logos.map(l => (
          <li key={l.name} title={l.name} className={'emblem' in l ? 'emblem' : undefined}>
            <img src={`${import.meta.env.BASE_URL}logos/${l.file}`} alt={l.name} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default LogoStrip
