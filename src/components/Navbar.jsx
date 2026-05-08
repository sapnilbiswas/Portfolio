import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiGithub } from 'react-icons/fi'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Experience', href: '#organizations' },
    { label: 'Projects', href: '#projects' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollTo = (href) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <Link className="nav-logo" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="nav-logo-accent">&lt;</span>
        SB
        <span className="nav-logo-accent">/&gt;</span>
      </Link>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.href}
            className="nav-link"
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
          >
            {link.label}
          </a>
        ))}
        <a
          className="btn-primary nav-cta"
          href="https://github.com/sapnilbiswas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> GitHub
        </a>
      </div>

      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        id="nav-hamburger"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
