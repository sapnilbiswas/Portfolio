import { useState } from 'react'
import { HiPaperAirplane } from 'react-icons/hi2'
import { FiLoader } from 'react-icons/fi'

// Switch to Formspree for production reliability
// Replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID from formspree.io
const FORMSPREE_URL = 'https://formspree.io/f/mzdojzga' 

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Contact error:', err)
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <span className="section-label" style={{ color: 'var(--accent-cyan)' }}>Communication</span>
          <h2 className="heading-lg" style={{ color: '#ffffff', marginBottom: '1rem' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
        </div>

        <div className="glass-card" style={{ maxWidth: 600, margin: '0 auto', padding: 'var(--space-xl)' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-input"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-input"
                rows="5"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ resize: 'none' }}
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              disabled={status === 'loading'}
              style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
            >
              {status === 'loading' ? (
                <><FiLoader className="spin" /> Sending...</>
              ) : (
                <><HiPaperAirplane /> Send Message</>
              )}
            </button>

            {status === 'success' && (
              <p style={{ color: 'var(--accent-cyan)', textAlign: 'center', marginTop: '1rem' }}>
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#ff4b4b', textAlign: 'center', marginTop: '1rem' }}>
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
