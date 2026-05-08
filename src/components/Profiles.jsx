import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiDrupal, SiLeetcode, SiCodeforces } from 'react-icons/si'
import { VscGitMerge } from 'react-icons/vsc'

const profiles = [
  {
    name: 'GitHub',
    handle: '@sapnilbiswas',
    url: 'https://github.com/sapnilbiswas',
    icon: <FiGithub />,
    color: 'rgba(110, 84, 148, 0.15)',
    border: 'rgba(110, 84, 148, 0.3)',
    iconColor: '#8b5cf6',
  },
  {
    name: 'Drupal.org',
    handle: '@sapnil_biswas',
    url: 'https://www.drupal.org/u/sapnil_biswas',
    icon: <SiDrupal />,
    color: 'rgba(0, 133, 194, 0.15)',
    border: 'rgba(0, 133, 194, 0.3)',
    iconColor: '#0085c2',
  },
  {
    name: 'Drupal Git',
    handle: '@sapnil_biswas',
    url: 'https://git.drupalcode.org/sapnil_biswas',
    icon: <VscGitMerge />,
    color: 'rgba(0, 133, 194, 0.15)',
    border: 'rgba(0, 133, 194, 0.3)',
    iconColor: '#0085c2',
  },
  {
    name: 'LeetCode',
    handle: '@Sapnil_Biswas',
    url: 'https://leetcode.com/u/Sapnil_Biswas/',
    icon: <SiLeetcode />,
    color: 'rgba(255, 161, 22, 0.15)',
    border: 'rgba(255, 161, 22, 0.3)',
    iconColor: '#ffa116',
  },
  {
    name: 'Codeforces',
    handle: '@Sap__',
    url: 'https://codeforces.com/profile/Sap__',
    icon: <SiCodeforces />,
    color: 'rgba(30, 136, 229, 0.15)',
    border: 'rgba(30, 136, 229, 0.3)',
    iconColor: '#1e88e5',
  },
]

export default function Profiles() {
  return (
    <section className="section" id="profiles">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <span className="section-label">Coding Profiles</span>
          <h2 className="heading-lg">
            Find Me <span className="text-gradient">Online</span>
          </h2>
        </div>

        <div className="profiles-grid" style={{ maxWidth: 900 }}>
          {profiles.map((p, i) => (
            <a
              key={i}
              className="glass-card profile-card reveal"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="profile-card-icon"
                style={{ background: p.color, border: `1px solid ${p.border}`, color: p.iconColor, fontSize: '1.4rem' }}
              >
                {p.icon}
              </div>
              <div className="profile-card-info">
                <div className="profile-card-name">{p.name}</div>
                <div className="profile-card-handle">{p.handle}</div>
              </div>
              <FiExternalLink style={{ color: 'var(--text-muted)', fontSize: '1rem' }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
