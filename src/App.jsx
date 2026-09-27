import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Stats from './components/Stats.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import { content } from './data/content.js'

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('shdq-lang') || 'id')
  const [theme, setTheme] = useState(() => localStorage.getItem('shdq-theme') || 'dark')

  // Persist language preference
  useEffect(() => {
    localStorage.setItem('shdq-lang', lang)
  }, [lang])

  // Apply & persist theme
  useEffect(() => {
    localStorage.setItem('shdq-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const t = content[lang]

  return (
    <>
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        navData={t.nav}
      />
      <main>
        <Hero data={t.hero} />
        <About data={t.about} />
        <Services data={t.services} />
        <Stats data={t.stats} />
        <WhyChooseUs data={t.features} />
        <FAQ data={t.faq} />
        <CTA data={t.contact} />
      </main>
      <Footer data={t.footer} navData={t.nav} />
    </>
  )
}
