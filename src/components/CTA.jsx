import React from 'react'
import { FiMapPin, FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi'
import { contactDirect } from '../data/content.js'
import './CTA.css'

export default function CTA({ data }) {
  const getIconMeta = (type) => {
    switch (type) {
      case 'location':
        return { icon: <FiMapPin size={22} />, className: 'contact-info-card__icon--blue' }
      case 'email':
        return { icon: <FiMail size={22} />, className: 'contact-info-card__icon--purple' }
      case 'phone':
        return { icon: <FiPhone size={22} />, className: 'contact-info-card__icon--emerald' }
      default:
        return { icon: <FiMail size={22} />, className: 'contact-info-card__icon--blue' }
    }
  }

  return (
    <section id="contact" className="section contact">
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
          </h2>
          <p className="section-desc">{data.description}</p>
        </div>

        { }
        <div className="contact__grid">
          { }
          <div className="contact__info-cards">
            {data.info.map((item, idx) => {
              const meta = getIconMeta(item.type)
              return (
                <div key={idx} className="glass-card contact-info-card">
                  <div className={`contact-info-card__icon ${meta.className}`}>
                    {meta.icon}
                  </div>
                  <div>
                    <div className="contact-info-card__title">{item.title}</div>
                    <div className="contact-info-card__value">{item.value}</div>
                    <div className="contact-info-card__sub">{item.sub}</div>
                  </div>
                </div>
              )
            })}
          </div>

          { }
          <div className="glass-card contact__wa-banner">
            <div className="contact__wa-glow" aria-hidden="true" />
            <div className="contact__wa-banner-icon">
              <FiMessageCircle size={32} />
            </div>
            <h3 className="contact__wa-banner-title">{data.whatsappBanner.title}</h3>
            <p className="contact__wa-banner-desc">{data.whatsappBanner.desc}</p>
            <a
              href={contactDirect.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp contact__wa-btn-pulse"
            >
              <FiMessageCircle size={20} />
              <span>{data.whatsappBanner.button}</span>
            </a>
          </div>
        </div>
      </div>

      { }
      <a
        href={contactDirect.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab"
        aria-label="Chat WhatsApp"
        title="Hubungi via WhatsApp"
      >
        <FiMessageCircle size={26} />
      </a>
    </section>
  )
}
