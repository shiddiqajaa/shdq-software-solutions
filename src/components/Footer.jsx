import React from 'react'
import { FiInstagram, FiMessageCircle, FiGithub } from 'react-icons/fi'
import { contactDirect, socialLinks } from '../data/content.js'
import logoImg from './img/logoo.jpeg'
import './Footer.css'

const SocialIcon = ({ platform }) => {
  switch (platform) {
    case 'Instagram':
      return <FiInstagram size={18} />
    case 'WhatsApp':
      return <FiMessageCircle size={18} />
    case 'GitHub':
      return <FiGithub size={18} />
    default:
      return null
  }
}

export default function Footer({ data, navData }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo-row">
              <span className="footer__logo-wrap">
                <img
                  src={logoImg}
                  alt="SHDQ Logo"
                  className="footer__logo-img"
                />
              </span>
              <div className="footer__logo-text">
                <span className="footer__logo-name">SHDQ</span>
                <span className="footer__logo-sub">IT Solutions</span>
              </div>
            </div>
            <p className="footer__desc">{data.description}</p>
            <div className="footer__socials">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={link.platform}
                  title={link.platform}
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">{data.quickLinksTitle}</h4>
            <ul className="footer__nav-list">
              {navData.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="footer__nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">{data.servicesTitle}</h4>
            <ul className="footer__services-list">
              {data.footerServices.map((svc, idx) => (
                <li key={idx} className="footer__service-item">
                  <span className="footer__service-dot" />
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{data.copyright}</p>
          <a
            href={contactDirect.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp footer__wa-btn"
          >
            <FiMessageCircle size={16} />
            <span>{data.whatsappAction}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
