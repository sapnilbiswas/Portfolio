import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { organizations } from '../data/organizations'
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import gsap from 'gsap'
import Scene3D from '../components/Scene3D'
import ContributionChart from '../components/ContributionChart'

export default function OrgDetail() {


  const { orgId } = useParams()
  const org = organizations.find((o) => o.id === orgId)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    gsap.set(['.org-header', '.org-visual', '.org-content'], { opacity: 1, y: 0 })

    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('.org-header', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.org-visual', 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }, 
      '-=0.4'
    )
    .fromTo('.org-content', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 
      '-=0.6'
    )
  }, [orgId])

  if (!org) {
    return (
      <div className="section" style={{ textAlign: 'center', paddingTop: '10rem' }}>
        <h2 className="heading-md">Organization not found</h2>
        <Link to="/" className="btn-outline" style={{ marginTop: '2rem' }}>Back Home</Link>
      </div>
    )
  }

  return (
    <div className="section org-detail-page" style={{ paddingTop: 'var(--space-3xl)', minHeight: '100vh' }}>
      <div className="container">
        <Link to="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-xl)', color: 'var(--accent-cyan)' }}>
          <FiArrowLeft /> Back to Portfolio
        </Link>

        <div className="org-header" style={{ marginBottom: 'var(--space-2xl)', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {org.logo && (
            <div className="org-logo-container" style={{ 
              width: '100px', 
              height: '100px', 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '1.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <img src={org.logo} alt={org.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          )}
          <div>
            <span className="section-label" style={{ color: 'var(--accent-cyan)', opacity: 1 }}>{org.period}</span>
            <h1 className="heading-lg" style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>{org.name}</h1>
            <h2 className="heading-md" style={{ color: 'var(--accent-blue)', marginBottom: '0', opacity: 0.9 }}>{org.role}</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'var(--space-2xl)', alignItems: 'start' }} className="org-grid">
          <div className="org-visual glass-card" style={{ 
            height: '500px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(138, 43, 226, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
             <Scene3D color={org.id === 'sugarlabs' ? '#00f0ff' : org.id === 'extensionshield' ? '#8a2be2' : '#0073ba'} />
             <h2 style={{ 
               position: 'absolute', 
               fontFamily: 'var(--font-display)', 
               fontSize: '5rem', 
               opacity: 0.05, 
               color: '#fff',
               pointerEvents: 'none',
               bottom: '20px',
               right: '20px'
             }}>{org.name}</h2>
          </div>

          <div className="org-content">
            <div className="glass-card" style={{ padding: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
              <h3 className="heading-sm" style={{ color: 'var(--accent-cyan)', marginBottom: 'var(--space-sm)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Journey</h3>
              <p style={{ color: '#e0e0e0', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: 'var(--space-lg)' }}>
                {org.fullDesc}
              </p>

              <div className="project-card-tags" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                {org.tags.map((t) => (
                  <span className="project-tag" key={t} style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(0, 240, 255, 0.2)' }}>{t}</span>
                ))}
              </div>
            </div>

            <ContributionChart contributions={org.contributions} />

            <a href={org.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem', marginTop: 'var(--space-xl)' }}>


              <FiExternalLink /> View Official Profile / Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

