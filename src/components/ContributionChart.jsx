import { motion } from 'framer-motion'

export default function ContributionChart({ contributions }) {
  if (!contributions) return null

  return (
    <div className="glass-card" style={{ padding: 'var(--space-xl)', marginTop: 'var(--space-xl)' }}>
      <h3 className="heading-sm" style={{ color: '#fff', marginBottom: 'var(--space-lg)', fontSize: '1.2rem' }}>
        Key Impact <span style={{ color: 'var(--accent-cyan)' }}>Metrics</span>
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {contributions.map((item, index) => (
          <div key={item.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#b0b0b0' }}>
              <span style={{ fontWeight: '500', color: '#e0e0e0' }}>{item.label}</span>
              <span style={{ color: item.color }}>{item.value}%</span>
            </div>
            <div style={{ 
              height: '8px', 
              width: '100%', 
              background: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '4px', 
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                style={{ 
                  height: '100%', 
                  background: `linear-gradient(90deg, ${item.color} 0%, rgba(255,255,255,0) 100%)`,
                  boxShadow: `0 0 15px ${item.color}44`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
