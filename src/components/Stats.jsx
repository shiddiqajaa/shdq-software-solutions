import React from 'react'
import { FiUsers, FiCheckCircle, FiClock, FiAward } from 'react-icons/fi'
import './Stats.css'

export default function Stats({ data }) {
  const getStatIcon = (index) => {
    switch (index) {
      case 0:
        return {
          icon: <FiUsers />,
          color: '#3b82f6',
          bg: 'rgba(59, 130, 246, 0.14)',
          border: 'rgba(59, 130, 246, 0.28)',
        }
      case 1:
        return {
          icon: <FiCheckCircle />,
          color: '#a855f7',
          bg: 'rgba(168, 85, 247, 0.14)',
          border: 'rgba(168, 85, 247, 0.28)',
        }
      case 2:
        return {
          icon: <FiClock />,
          color: '#f59e0b',
          bg: 'rgba(245, 158, 11, 0.14)',
          border: 'rgba(245, 158, 11, 0.28)',
        }
      case 3:
        return {
          icon: <FiAward />,
          color: '#10b981',
          bg: 'rgba(16, 185, 129, 0.14)',
          border: 'rgba(16, 185, 129, 0.28)',
        }
      default:
        return {
          icon: <FiCheckCircle />,
          color: '#3b82f6',
          bg: 'rgba(59, 130, 246, 0.14)',
          border: 'rgba(59, 130, 246, 0.28)',
        }
    }
  }

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {data.map((item, index) => {
            const meta = getStatIcon(index)
            return (
              <div key={index} className="glass-card stat-card">
                <div
                  className="stat-card__icon-box"
                  style={{
                    color: meta.color,
                    backgroundColor: meta.bg,
                    border: `1px solid ${meta.border}`,
                  }}
                >
                  {meta.icon}
                </div>
                <div className="stat-card__number-wrap">
                  <span className="stat-card__number">{item.value}</span>
                  <span className="stat-card__suffix" style={{ color: meta.color }}>
                    {item.suffix}
                  </span>
                </div>
                <h3 className="stat-card__label">{item.label}</h3>
                <p className="stat-card__desc">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
