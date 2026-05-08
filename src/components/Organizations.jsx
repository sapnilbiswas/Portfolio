import { Link } from 'react-router-dom'
import { organizations } from '../data/organizations'
import { useEffect } from 'react'
import gsap from 'gsap'
import Scene3D from './Scene3D'

export default function Organizations() {
  useEffect(() => {
    // Force visibility check for the grid
    gsap.fromTo('.org-card-reveal', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#organizations',
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <section className="section" id="organizations">
      <div className="container">
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <span className="section-label" style={{ color: 'var(--accent-cyan)' }}>Experience & Open Source</span>
          <h2 className="heading-lg" style={{ color: '#ffffff', marginBottom: '1rem' }}>
            Organizations & <span className="text-gradient">Journey</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 540, fontSize: '1.1rem' }}>
            Deep diving into open source ecosystems and building impactful solutions.
          </p>
        </div>

        <div className="projects-grid">
          {organizations.map((org) => (
            <div className="glass-card project-card org-card-reveal" key={org.id} style={{ 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              background: 'rgba(255, 255, 255, 0.02)', 
              padding: 'var(--space-xl)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '150px', height: '150px', opacity: 0.3, pointerEvents: 'none' }}>
                <Scene3D color={org.id === 'sugarlabs' ? '#00f0ff' : org.id === 'extensionshield' ? '#8a2be2' : '#0073ba'} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                <h3 className="project-card-title" style={{ color: '#ffffff', fontSize: '1.5rem', margin: 0 }}>{org.name}</h3>
                {org.logo && (
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)' }}>
                    <img src={org.logo} alt={org.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                )}
              </div>
              <div style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: '600', position: 'relative', zIndex: 1 }}>
                {org.role} | {org.period}
              </div>
              <p className="project-card-desc" style={{ color: '#b0b0b0', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>{org.shortDesc}</p>
              
              <div className="project-card-tags" style={{ marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                {org.tags.map((t) => (
                  <span className="project-tag" key={t} style={{ background: 'rgba(255,255,255,0.05)', color: '#e0e0e0', border: '1px solid rgba(255,255,255,0.1)' }}>{t}</span>
                ))}
              </div>
              
              <div className="project-card-links" style={{ position: 'relative', zIndex: 1 }}>
                <Link to={`/org/${org.id}`} className="btn-primary" style={{ padding: '0.8rem 1.5rem', width: '100%', justifyContent: 'center' }}>
                  Explore Journey →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

