import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { HiRocketLaunch, HiChatBubbleLeftRight } from 'react-icons/hi2'

export default function Hero({ isAppLoaded }) {
  const heroRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    // --- Neural Grid Animation (Canvas) ---
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    let dots = []
    const dotCount = 60
    const connectionDistance = 220
    
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initDots()
    }

    const initDots = () => {
      dots = []
      for (let i = 0; i < dotCount; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 1
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.12)'
      ctx.fillStyle = 'rgba(0, 240, 255, 0.4)'
      ctx.lineWidth = 1

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i]
        dot.x += dot.vx
        dot.y += dot.vy

        if (dot.x < 0) dot.x = canvas.width
        if (dot.x > canvas.width) dot.x = 0
        if (dot.y < 0) dot.y = canvas.height
        if (dot.y > canvas.height) dot.y = 0

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < dots.length; j++) {
          const other = dots[j]
          const dx = dot.x - other.x
          const dy = dot.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.globalAlpha = 1 - (dist / connectionDistance)
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    resize()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  useEffect(() => {
    // Only trigger text animations once the app is loaded
    if (!isAppLoaded) return

    const tl = gsap.timeline({ 
      defaults: { ease: 'power4.out' }
    })
    
    tl.fromTo('.hero-greeting', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo('.hero-name', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.2 }, 
      '-=0.7'
    )
    .fromTo('.hero-title', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.2 }, 
      '-=0.8'
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      '-=0.9'
    )
    .fromTo('.hero-actions', 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 0.8 }, 
      '-=0.6'
    )
  }, [isAppLoaded])

  return (
    <section className="hero section" id="hero" ref={heroRef} style={{ 
      padding: '0 var(--space-lg)', 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      background: '#050510' 
    }}>
      {/* High-Performance Neural Background */}
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 0,
          opacity: 0.8
        }} 
      />

      {/* Decorative Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '20%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ 
        position: 'relative',
        zIndex: 10,
        width: '100%',
        pointerEvents: 'none' 
      }}>
        <div className="hero-content" style={{ maxWidth: '800px' }}>
          <div className="hero-greeting" style={{ 
            fontFamily: 'var(--font-mono)', 
            color: 'var(--accent-cyan)', 
            fontSize: '1.1rem', 
            marginBottom: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: 0 // Keep initial opacity 0 for GSAP to handle, but GSAP now triggers on 'loaded'
          }}>
            Hello World, I'm
          </div>
          
          <h1 className="hero-name" style={{ 
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 9vw, 6rem)', 
            fontWeight: '900',
            lineHeight: '1',
            marginBottom: '1.5rem',
            color: '#ffffff',
            opacity: 0 
          }}>
            Sapnil <span className="text-gradient">Biswas</span>
          </h1>

          <h2 className="hero-title" style={{ 
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 5vw, 2.8rem)',
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.95)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            opacity: 0 
          }}>
            Crafting <span className="text-gradient">Digital</span> Legacies
          </h2>

          <p className="hero-subtitle" style={{ 
            fontSize: '1.2rem', 
            marginBottom: '3rem', 
            color: '#b0b0b0', 
            maxWidth: '540px',
            lineHeight: '1.8',
            opacity: 0 
          }}>
            CSE(AIML) Student & Tech Head. Transforming complex problems into 
            seamless immersive experiences across the web.
          </p>

          <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', opacity: 0, pointerEvents: 'auto' }}>
            <a className="btn-primary" href="#organizations" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
              <HiRocketLaunch /> Exploration
            </a>
            <a className="btn-outline" href="#contact" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
              <HiChatBubbleLeftRight /> Portal
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" style={{ zIndex: 20 }}>
        <span>Dive Deeper</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
