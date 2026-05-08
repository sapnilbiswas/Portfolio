import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'
import Home from './pages/Home'
import OrgDetail from './pages/OrgDetail'

gsap.registerPlugin(ScrollTrigger)

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(error, errorInfo) {
    console.error('App Crash:', error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          background: '#050510', 
          height: '100vh', 
          color: 'var(--accent-cyan)', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>SYSTEM_RECOVERY_MODE</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>A critical error occurred. Attempting to maintain core functionality.</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ padding: '0.8rem 2rem', background: 'transparent', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', cursor: 'pointer' }}
          >
            REBOOT_SYSTEM
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Safety timeout to ensure loading screen always clears if something hangs
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 6000)

    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    // Force scroll to top on mount
    lenis.scrollTo(0, { immediate: true })

    return () => {
      clearTimeout(timer)
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <AppErrorBoundary>
      <div className="app-wrapper">
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
        <div className={`app-content ${loaded ? 'visible' : 'hidden'}`}>
          <div className="noise-overlay" />
          <ParticleField />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home loaded={loaded} />} />
            <Route path="/org/:orgId" element={<OrgDetail />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </AppErrorBoundary>
  )
}

export default App
