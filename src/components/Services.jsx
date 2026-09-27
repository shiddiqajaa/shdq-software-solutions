import React from 'react'
import {
  FiCode,
  FiWifi,
  FiCpu,
  FiLayers,
  FiHardDrive,
  FiZap,
  FiGlobe,
  FiUsers,
  FiSend,
  FiTerminal,
  FiSliders,
  FiMonitor,
  FiPackage,
  FiActivity,
  FiServer,
  FiMessageCircle,
} from 'react-icons/fi'
import { contactDirect } from '../data/content.js'
import './Services.css'

export default function Services({ data }) {
  const getServiceIcon = (id) => {
    switch (id) {
      case 1:
        return <FiCode />
      case 2:
        return <FiWifi />
      case 3:
        return <FiCpu />
      case 4:
        return <FiLayers />
      case 5:
        return <FiHardDrive />
      case 6:
        return <FiZap />
      case 7:
        return <FiGlobe />
      case 8:
        return <FiUsers />
      case 9:
        return <FiSend />
      case 10:
        return <FiTerminal />
      case 11:
        return <FiSliders />
      case 12:
        return <FiMonitor />
      case 13:
        return <FiPackage />
      case 14:
        return <FiActivity />
      case 15:
        return <FiServer />
      default:
        return <FiCode />
    }
  }

  return (
    <section id="services" className="section services">
      <div className="container">
        { }
        <div className="section-head">
          <div className="badge">
            <span className="badge-dot" />
            <span>{data.badge}</span>
          </div>
          <h2 className="section-title">
            <span>{data.titlePrefix}</span>
            <span className="text-gradient">{data.titleHighlight}</span>
            <span>{data.titleSuffix}</span>
          </h2>
          <p className="section-desc">{data.description}</p>
        </div>

        { }
        <div className="services__grid">
          {data.items.map((item) => (
            <div key={item.id} className="glass-card service-card">
              <div className="service-card__top">
                <div
                  className="service-card__icon-box"
                  style={{
                    backgroundColor: `${item.color}18`,
                    color: item.color,
                    border: `1px solid ${item.color}35`,
                  }}
                >
                  {getServiceIcon(item.id)}
                </div>
                <span className="service-card__tag">{item.tag}</span>
              </div>
              <h3 className="service-card__title">{item.title}</h3>
            </div>
          ))}
        </div>

        {  }
        <div className="services__cta-wrap">
          <a
            href={contactDirect.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            <FiMessageCircle size={18} />
            <span>{data.cta}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
