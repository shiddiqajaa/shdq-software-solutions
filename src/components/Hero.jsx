import React, { useState, useEffect } from 'react'
import { FiMessageCircle, FiArrowRight, FiSettings } from 'react-icons/fi'
import InteractiveRobot from './InteractiveRobot.jsx'
import { contactDirect } from '../data/content.js'
import './Hero.css'

const TYPED_PHRASES = ['& Hardware Development', 'Web Development']

function useTypewriter(phrases) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let delay = deleting ? 35 : 75

    if (!deleting && charCount === current.length) {
      delay = 2000
    } else if (deleting && charCount === 0) {
      delay = 400
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charCount < current.length) {
          setCharCount(charCount + 1)
        } else {
          setDeleting(true)
        }
      } else {
        if (charCount > 0) {
          setCharCount(charCount - 1)
        } else {
          setDeleting(false)
          setPhraseIndex((phraseIndex + 1) % phrases.length)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charCount, deleting, phraseIndex, phrases])

  return phrases[phraseIndex].slice(0, charCount)
}

export default function Hero({ data }) {
  const typedText = useTypewriter(TYPED_PHRASES)

  return (
    <section id="home" className="hero">
      <div className="hero__mesh" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__badge-row">
              <div className="badge">
                <FiSettings size={13} className="badge-gear-icon" />
                <span>{data.badge}</span>
              </div>
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line1">{data.titlePrimary}</span>
              <span className="hero__title-line2 text-gradient">{typedText || '\u00a0'}</span>
            </h1>

            <p className="hero__subtitle">{data.subtitle}</p>

            <div className="hero__actions">
              <a
                href={contactDirect.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
              >
                <FiMessageCircle size={18} />
                <span>{data.ctaPrimary}</span>
              </a>
              <a href="#services" className="btn btn--outline">
                <span>{data.ctaSecondary}</span>
                <FiArrowRight size={17} />
              </a>
            </div>

            { }
            <div className="hero__stats">
              {data.stats.map((item, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <div className="hero__stat-divider" aria-hidden="true" />}
                  <div className="hero__stat-item">
                    <span className="hero__stat-value">{item.value}</span>
                    <span className="hero__stat-label">{item.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          { }
          <div className="hero__robot-col">
            <InteractiveRobot badges={data.floatingCards} />
          </div>

        </div>
      </div>

      { }
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-hint-line" />
        <span className="hero__scroll-hint-text">scroll</span>
      </div>
    </section>
  )
}
