import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { HiBolt, HiChartBar, HiRocketLaunch } from 'react-icons/hi2'
import { SiFigma } from 'react-icons/si'

const projects = [
  {
    title: 'NexCell',
    logo: 'https://i.ibb.co/LXTydtj1/Nex.png',
    desc: 'Tech Head at the club. Lead developer for the club website with premium glassmorphism UI, animated SVGs, and mesh-gradient design.',
    tags: ['Leadership', 'React', 'Animation'],
    icon: <HiBolt />,
    github: 'https://github.com/sapnilbiswas/NexCell',
    live: 'https://nexcell.club'
  },
  {
    title: 'mirai__launchpad',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQESji6QYn0B1Q/company-logo_200_200/B4DZawDt6bHAAM-/0/1746710488373/mirai_school_of_technology_logo?e=2147483647&v=beta&t=ffQsWJ1xdSwCqKPKbDTLnoQscngGhXTd4XeEhFSNOGY',
    desc: 'Created the complete UI/UX design and frontend implementation for the launchpad platform, focusing on modern aesthetics.',
    tags: ['UI/UX', 'React', 'Figma'],
    icon: <SiFigma />,
    github: 'https://github.com/sapnilbiswas/mirai__launchpad',
    live: 'https://miraisot.com/'
  },
  {

    title: 'Bimala Trading',
    desc: 'Personal project for a small trading firm. Built a comprehensive business website with modern design and optimized performance.',
    tags: ['Freelance', 'Business', 'Performance'],
    icon: <HiChartBar />,
    github: 'https://github.com/sapnilbiswas/Bimala_Trading',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Featured Projects</span>
          <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>
            Personal & <span className="text-gradient">Club Work</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 540, marginBottom: 'var(--space-xl)' }}>
            Showcasing leadership roles and dedicated projects for firms and personal growth.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="glass-card project-card reveal" key={i}>
              <div className="project-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div className="project-card-icon" style={{ margin: 0 }}>
                  {p.logo ? (
                    <img src={p.logo} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  ) : (
                    p.icon
                  )}
                </div>
              </div>
              <h3 className="project-card-title">{p.title}</h3>
              <p className="project-card-desc">{p.desc}</p>
              <div className="project-card-tags">
                {p.tags.map((t) => (
                  <span className="project-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-card-links">
                {p.github && (
                  <a className="project-link" href={p.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub /> Code
                  </a>
                )}
                {p.live && (
                  <a className="project-link" href={p.live} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

