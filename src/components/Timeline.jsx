const timelineData = [
  {
    date: '2026 — Present',
    title: 'Music Blocks — Sugar Labs',
    desc: 'Security patches, XSS fixes, and Planet subsystem refactoring. Improving education through technology.',
  },
  {
    date: '2026',
    title: 'Tech Head — NexCell Club',
    desc: 'Leading the technical vision and development for the club website and digital initiatives.',
  },
  {
    date: '2026',
    title: 'Maintainer — Extension Shield',
    desc: 'Actively maintaining and contributing to the open-core security scanner for Chrome extensions.',
  },
  {
    date: '2025 — 2026',
    title: 'Drupal Contributor',
    desc: 'Active core contributions and development of the College Event management system on Drupal.org.',
  },
  {
    date: '2025',
    title: 'UI/UX Lead — mirai__launchpad',
    desc: 'Conceptualized and built the frontend for a modern launchpad platform.',
  },
  {
    date: '2025',
    title: 'Freelance — Bimala Trading',
    desc: 'Digitized a trading firm with a high-performance business platform.',
  },
]

export default function Timeline() {
  return (
    <section className="section" id="timeline">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <span className="section-label">Evolution</span>
          <h2 className="heading-lg">
            Contribution <span className="text-gradient">Timeline</span>
          </h2>
        </div>

        <div className="timeline">
          {timelineData.map((item, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
