import React from 'react'
import { FiEye, FiTarget, FiGlobe, FiWifi, FiCpu } from 'react-icons/fi'
import './About.css'

const getSubcardIcon = (iconName) => {
  switch (iconName) {
    case 'web':   return <FiGlobe size={22} />
    case 'iot':   return <FiWifi size={22} />
    case 'micro': return <FiCpu size={22} />
    default:      return <FiGlobe size={22} />
  }
}

export default function About({ data }) {
  return (
    <section id="about" className="section about">
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
        <div className="about__vm-grid">

          { }
          <div className="about__orbit-card about__orbit-card--blue">
            { }
            <div className="about__orbit-card-accent about__orbit-card-accent--blue" />
            <div className="about__pillar-icon about__pillar-icon--blue">
              <FiEye size={26} />
            </div>
            <h3 className="about__pillar-title">{data.vision.title}</h3>
            <p className="about__pillar-desc">{data.vision.content}</p>
          </div>

          { }
          <div className="about__orbit-card about__orbit-card--purple">
            <div className="about__orbit-card-accent about__orbit-card-accent--purple" />
            <div className="about__pillar-icon about__pillar-icon--purple">
              <FiTarget size={26} />
            </div>
            <h3 className="about__pillar-title">{data.mission.title}</h3>
            <p className="about__pillar-desc">{data.mission.content}</p>
          </div>

        </div>

        { }
        <div className="about__subcards-grid">
          {data.cards.map((card) => (
            <div key={card.id} className="about__subcard">
              <div className={`about__subcard-icon about__subcard-icon--${card.iconName}`}>
                {getSubcardIcon(card.iconName)}
              </div>
              <h4 className="about__subcard-title">{card.title}</h4>
              <p className="about__subcard-desc">{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
