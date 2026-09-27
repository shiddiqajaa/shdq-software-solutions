import React, { useState, useEffect, useRef } from 'react'
import { FiWifi, FiShield, FiGlobe } from 'react-icons/fi'
import './InteractiveRobot.css'

export default function InteractiveRobot({ badges }) {
  const stageRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!stageRef.current) return
      const rect = stageRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2)
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2)

      // Clamped 3D rotation
      const rotX = Math.max(-14, Math.min(14, -deltaY * 16))
      const rotY = Math.max(-18, Math.min(18, deltaX * 18))
      setMousePos({ x: rotY, y: rotX })

      // Eye pupil tracking
      const pupilX = Math.max(-10, Math.min(10, deltaX * 12))
      const pupilY = Math.max(-6, Math.min(6, deltaY * 8))
      setEyeOffset({ x: pupilX, y: pupilY })
    }

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 })
      setEyeOffset({ x: 0, y: 0 })
      setIsHovered(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={stageRef}
      className="robot-stage"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      { }
      <div className="robot-ambient-glow" />

      { }
      <div className="floating-badge floating-badge--top-left">
        <div className="badge-icon-box badge-icon-box--blue">
          <FiWifi size={18} />
        </div>
        <div>
          <div className="badge-text-title">{badges?.iot?.title || 'IoT Connected'}</div>
          <div className="badge-text-desc">{badges?.iot?.desc || '100+ Devices Online'}</div>
        </div>
      </div>

      <div className="floating-badge floating-badge--bottom-right">
        <div className="badge-icon-box badge-icon-box--purple">
          <FiShield size={18} />
        </div>
        <div>
          <div className="badge-text-title">{badges?.security?.title || 'Secure System'}</div>
          <div className="badge-text-desc">{badges?.security?.desc || 'Enterprise Grade'}</div>
        </div>
      </div>

      <div className="floating-badge floating-badge--bottom-left">
        <div className="badge-icon-box badge-icon-box--emerald">
          <FiGlobe size={18} />
        </div>
        <div>
          <div className="badge-text-title">{badges?.firmware?.title || 'Web Platform'}</div>
          <div className="badge-text-desc">{badges?.firmware?.desc || 'React / Node.js'}</div>
        </div>
      </div>

      { }
      <div
        className="robot-chassis-wrap"
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
        }}
      >
        <svg
          className="robot-svg"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            { }
            <linearGradient id="armorLight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#384966" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="armorHighlight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            <linearGradient id="accentBlue" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>

            <linearGradient id="visorGlass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0b132b" />
              <stop offset="60%" stopColor="#081026" />
              <stop offset="100%" stopColor="#172554" />
            </linearGradient>

            <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
            </radialGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          { }
          <circle
            cx="250"
            cy="250"
            r="220"
            stroke="rgba(59, 130, 246, 0.18)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <circle
            cx="250"
            cy="250"
            r="190"
            stroke="rgba(99, 102, 241, 0.22)"
            strokeWidth="1.5"
            strokeDasharray="16 12"
          />

          { }
          <path
            d="M 60 250 L 120 250 L 150 220 L 150 180"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            className="circuit-pulse"
          />
          <circle cx="60" cy="250" r="4" fill="#3b82f6" />
          <path
            d="M 440 250 L 380 250 L 350 220 L 350 180"
            stroke="#6366f1"
            strokeWidth="2"
            fill="none"
            className="circuit-pulse-delay"
          />
          <circle cx="440" cy="250" r="4" fill="#6366f1" />

          { }
          <line x1="250" y1="65" x2="250" y2="25" stroke="#475569" strokeWidth="4" />
          <circle cx="250" cy="22" r="5" fill="#3b82f6" />
          <circle cx="250" cy="22" r="3" fill="#60a5fa" className="antenna-beacon" />

          <line x1="200" y1="85" x2="175" y2="45" stroke="#334155" strokeWidth="3" />
          <circle cx="175" cy="45" r="3.5" fill="#6366f1" />

          <line x1="300" y1="85" x2="325" y2="45" stroke="#334155" strokeWidth="3" />
          <circle cx="325" cy="45" r="3.5" fill="#6366f1" />

          { }
          <polygon points="200,380 300,380 320,440 180,440" fill="#0f172a" stroke="#334155" strokeWidth="3" />
          <line x1="220" y1="395" x2="280" y2="395" stroke="#475569" strokeWidth="3" />
          <line x1="210" y1="415" x2="290" y2="415" stroke="#475569" strokeWidth="3" />

          { }
          <path
            d="M 140 200 C 140 110, 200 65, 250 65 C 300 65, 360 110, 360 200 C 360 250, 370 310, 340 370 C 310 400, 190 400, 160 370 C 130 310, 140 250, 140 200 Z"
            fill="url(#armorLight)"
            stroke="#475569"
            strokeWidth="3.5"
          />

          { }
          <path
            d="M 180 85 Q 250 55 320 85 L 340 140 Q 250 115 160 140 Z"
            fill="url(#armorHighlight)"
            stroke="#64748b"
            strokeWidth="2"
          />

          { }
          <rect x="115" y="190" width="28" height="70" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2.5" />
          <circle cx="129" cy="225" r="8" fill="#0f172a" stroke="#60a5fa" strokeWidth="1.5" />

          <rect x="357" y="190" width="28" height="70" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2.5" />
          <circle cx="371" cy="225" r="8" fill="#0f172a" stroke="#60a5fa" strokeWidth="1.5" />

          { }
          <path
            d="M 160 170 C 185 160, 315 160, 340 170 C 350 200, 345 270, 330 280 C 300 295, 200 295, 170 280 C 155 270, 150 200, 160 170 Z"
            fill="#020617"
            stroke="url(#accentBlue)"
            strokeWidth="3"
          />

          { }
          <path
            d="M 168 178 C 190 170, 310 170, 332 178 C 340 200, 336 260, 324 270 C 298 284, 202 284, 176 270 C 164 260, 160 200, 168 178 Z"
            fill="url(#visorGlass)"
          />

          { }
          { }
          <g transform={`translate(${eyeOffset.x}, ${eyeOffset.y})`}>
            <circle cx="210" cy="225" r="26" fill="url(#eyeGlow)" filter="url(#softGlow)" />
            <circle cx="210" cy="225" r="14" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
            <circle cx="210" cy="225" r="7" fill="#93c5fd" />
            <circle cx="207" cy="222" r="2.5" fill="#ffffff" />
            { }
            <path d="M 194 218 L 194 212 L 202 212" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
            <path d="M 226 218 L 226 212 L 218 212" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
            <path d="M 194 232 L 194 238 L 202 238" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
            <path d="M 226 232 L 226 238 L 218 238" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
          </g>

          { }
          <g transform={`translate(${eyeOffset.x}, ${eyeOffset.y})`}>
            <circle cx="290" cy="225" r="26" fill="url(#eyeGlow)" filter="url(#softGlow)" />
            <circle cx="290" cy="225" r="14" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
            <circle cx="290" cy="225" r="7" fill="#93c5fd" />
            <circle cx="287" cy="222" r="2.5" fill="#ffffff" />
            { }
            <path d="M 274 218 L 274 212 L 282 212" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
            <path d="M 306 218 L 306 212 L 298 212" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
            <path d="M 274 232 L 274 238 L 282 238" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
            <path d="M 306 232 L 306 238 L 298 238" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
          </g>

          { }
          <rect x="175" y="190" width="3" height="12" fill="#3b82f6" rx="1.5" className="eq-bar-1" />
          <rect x="182" y="186" width="3" height="18" fill="#3b82f6" rx="1.5" className="eq-bar-2" />
          <rect x="315" y="186" width="3" height="18" fill="#6366f1" rx="1.5" className="eq-bar-3" />
          <rect x="322" y="190" width="3" height="12" fill="#6366f1" rx="1.5" className="eq-bar-4" />

          { }
          <polygon
            points="210,310 290,310 275,365 225,365"
            fill="#1e293b"
            stroke="#475569"
            strokeWidth="2.5"
          />

          { }
          <line x1="230" y1="325" x2="270" y2="325" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="233" y1="337" x2="267" y2="337" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="236" y1="349" x2="264" y2="349" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />

          { }
          <path
            d="M 160 285 L 195 315 L 180 355 L 150 325 Z"
            fill="#334155"
            stroke="#475569"
            strokeWidth="1.5"
          />
          <path
            d="M 340 285 L 305 315 L 320 355 L 350 325 Z"
            fill="#334155"
            stroke="#475569"
            strokeWidth="1.5"
          />

          { }
          <rect x="235" y="115" width="30" height="16" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="243" cy="123" r="2" fill="#10b981" />
          <circle cx="250" cy="123" r="2" fill="#3b82f6" />
          <circle cx="257" cy="123" r="2" fill="#f59e0b" />
        </svg>
      </div>
    </div>
  )
}

