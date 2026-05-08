import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiCplusplus, SiHtml5, SiMongodb, SiGit, SiDrupal, SiLinux, SiMysql } from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'

const skills = [
  { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
  { name: 'React', icon: <SiReact />, color: '#61dafb' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#68a063' },
  { name: 'Python', icon: <SiPython />, color: '#3776ab' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
  { name: 'C/C++', icon: <SiCplusplus />, color: '#00599c' },
  { name: 'HTML/CSS', icon: <SiHtml5 />, color: '#e34f26' },
  { name: 'Git', icon: <SiGit />, color: '#f05032' },
  { name: 'PHP/Drupal', icon: <SiDrupal />, color: '#0678be' },
  { name: 'DSA', icon: <TbBrain />, color: '#a855f7' },
  { name: 'Linux', icon: <SiLinux />, color: '#fcc624' },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <span className="section-label">Skills & Tech Stack</span>
          <h2 className="heading-lg">
            Tools I <span className="text-gradient">Work With</span>
          </h2>
        </div>

        <div className="skills-grid" style={{ maxWidth: 900 }}>
          {skills.map((s, i) => (
            <div className="skill-card reveal-scale" key={i}>
              <div className="skill-icon" style={{ color: s.color }}>{s.icon}</div>
              <div className="skill-name">{s.name}</div>
            </div>
          ))}
        </div>

        <div className="stats-row reveal">
          <div className="stat-item">
            <div className="stat-number">26+</div>
            <div className="stat-label">Repositories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Open Source Orgs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Problems Solved</div>
          </div>
        </div>
      </div>
    </section>
  )
}
