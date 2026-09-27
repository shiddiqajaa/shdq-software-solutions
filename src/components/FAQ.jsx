import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import './FAQ.css'

export default function FAQ({ data }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-head">
          <div className="badge">
            <span className="badge-dot" />
            <span>{data.badge}</span>
          </div>
          <h2 className="section-title">
            <span>{data.titlePrefix}</span>
            <span className="text-gradient">{data.titleHighlight}</span>
          </h2>
        </div>

        <div className="faq__list">
          {data.items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`glass-card faq-item ${isOpen ? 'faq-item--open' : ''}`}
              >
                <button
                  className="faq-item__trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item__question">{item.q}</span>
                  <div className="faq-item__icon" aria-hidden="true">
                    <FiPlus size={17} />
                  </div>
                </button>

                <div className={`faq-item__body ${isOpen ? 'faq-item__body--open' : ''}`}>
                  <p className="faq-item__answer">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
