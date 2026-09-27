import React, { useState, useEffect } from 'react'
import { FiGlobe, FiSun, FiMoon, FiMenu, FiX, FiMessageCircle } from 'react-icons/fi'
import { contactDirect } from '../data/content.js'
import logoImg from './img/logoo.jpeg'
import './Navbar.css'

export default function Navbar({ lang, setLang, theme, toggleTheme, navData }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLangToggle = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'))
    setIsScrolled(window.AnimationEffect > 50)
  }

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container">
        <div className="navbar__inner">
          { }
          <a href="#home" className="navbar__brand" onClick={() => setMobileOpen(false)}>
            <span className="navbar__logo-wrap">
              <img
                src={logoImg}
                alt="SHDQ Logo"
                className="navbar__logo-img"
              />
            </span>
            <div className="navbar__brand-text">
              <span className="navbar__brand-name">SHDQ</span>
              <span className="navbar__brand-sub">Software Solutions</span>
            </div>
          </a>

          { }
          <nav className="navbar__nav">
            {navData.map((item) => (
              <a key={item.href} href={item.href} className="navbar__link">
                {item.label}
              </a>
            ))}
          </nav>

          { }
          <div className="navbar__actions">
            { }
            <button
              className="navbar__lang-btn"
              onClick={handleLangToggle}
              title="Ganti Bahasa / Switch Language"
              aria-label="Toggle language"
            >
              <FiGlobe size={15} />
              <span>{lang.toUpperCase()}</span>
            </button>

            { }
            <button
              className="navbar__theme-btn"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
              aria-label="Toggle dark/light mode"
            >
              {theme === 'dark' ? <FiSun size={17} color="#f59e0b" /> : <FiMoon size={17} color="#6366f1" />}
            </button>

            { }
            <a
              href={contactDirect.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp navbar__consult-btn"
            >
              <FiMessageCircle size={16} />
              <span>{lang === 'id' ? 'Konsultasi' : 'Consult Now'}</span>
            </a>

            { }
            <button
              className="navbar__burger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        { }
        <div className={`navbar__mobile-drawer ${mobileOpen ? 'navbar__mobile-drawer--open' : ''}`}>
          {navData.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="navbar__mobile-actions">
            <a
              href={contactDirect.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
              style={{ width: '100%' }}
              onClick={() => setMobileOpen(false)}
            >
              <FiMessageCircle size={18} />
              <span>{lang === 'id' ? 'Konsultasi WhatsApp' : 'Consult via WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
