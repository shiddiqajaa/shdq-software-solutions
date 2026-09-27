import React from 'react'
import {
  FiCheck,
  FiWifi,
  FiActivity,
  FiDatabase,
  FiDroplet,
} from 'react-icons/fi'
import computerImg from './img/computer.png'
import './WhyChooseUs.css'

function FeaturePanelCode() {
  return (
    <div className="feature-panel">
      <div className="feature-panel__bar">
        <div className="feature-panel__dots">
          <div className="feature-panel__dot feature-panel__dot--red" />
          <div className="feature-panel__dot feature-panel__dot--yellow" />
          <div className="feature-panel__dot feature-panel__dot--green" />
        </div>
        <span className="feature-panel__tag">src/main.ino</span>
      </div>
      <div className="feature-panel__body">
        <div className="panel-code">
          <div><span className="kw">#include</span> <span className="str">&lt;WiFi.h&gt;</span></div>
          <div><span className="kw">#include</span> <span className="str">&lt;MQTT.h&gt;</span></div>
          <div>&nbsp;</div>
          <div><span className="cmt">// Sensor telemetry broadcast</span></div>
          <div><span className="kw">void</span> <span className="fn">publishSensorData</span>() {'{'}</div>
          <div>&nbsp;&nbsp;<span className="fn">float</span> temp = <span className="fn">dht</span>.readTemperature();</div>
          <div>&nbsp;&nbsp;<span className="fn">float</span> hum = <span className="fn">dht</span>.readHumidity();</div>
          <div>&nbsp;&nbsp;<span className="fn">client</span>.publish(<span className="str">"/sensor/env"</span>, {'{'}temp, hum{'}'});</div>
          <div>{'}'}</div>
          <div>&nbsp;</div>
          <div><span className="cmt">// Status: Connected ✓</span></div>
        </div>
      </div>
    </div>
  )
}

function FeaturePanelAICode() {
  return (
    <div className="feature-panel feature-panel--image">
      <img
        src={computerImg}
        alt="AI Code Generator"
        className="feature-panel__img"
      />
    </div>
  )
}

function FeaturePanelIoT() {
  return (
    <div className="feature-panel">
      <div className="feature-panel__bar">
        <div className="feature-panel__dots">
          <div className="feature-panel__dot feature-panel__dot--red" />
          <div className="feature-panel__dot feature-panel__dot--yellow" />
          <div className="feature-panel__dot feature-panel__dot--green" />
        </div>
        <span className="feature-panel__tag">IoT Network Topology</span>
      </div>
      <div className="feature-panel__body">
        <div className="iot-mesh-grid">
          {[
            { label: 'Sensor 1', icon: <FiActivity size={18} /> },
            { label: 'Gateway', icon: <FiWifi size={18} /> },
            { label: 'Cloud DB', icon: <FiDatabase size={18} /> },
          ].map((node) => (
            <div key={node.label} className="iot-node">
              <div className="iot-node__circle">{node.icon}</div>
              <span className="iot-node__label">{node.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FeaturePanelSustain() {
  return (
    <div className="feature-panel">
      <div className="feature-panel__bar">
        <div className="feature-panel__dots">
          <div className="feature-panel__dot feature-panel__dot--red" />
          <div className="feature-panel__dot feature-panel__dot--yellow" />
          <div className="feature-panel__dot feature-panel__dot--green" />
        </div>
        <span className="feature-panel__tag">System Performance</span>
      </div>
      <div className="feature-panel__body">
        <div className="panel-code">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <FiDroplet size={16} color="#10b981" />
            <span className="str" style={{ color: '#10b981' }}>Eco-Optimized Build</span>
          </div>
          <div><span className="cmt">// Power consumption analysis</span></div>
          <div>Idle: <span className="num">18mA</span> @ <span className="num">3.3V</span></div>
          <div>Active: <span className="num">120mA</span> peak burst</div>
          <div>Sleep: <span className="num">0.01mA</span> deep sleep</div>
          <div>&nbsp;</div>
          <div><span className="str">Battery life: 90+ days</span></div>
          <div><span className="cmt">// Lifecycle: 5+ years MTBF</span></div>
        </div>
      </div>
    </div>
  )
}

const VisualPanels = [FeaturePanelAICode, FeaturePanelIoT, FeaturePanelCode, FeaturePanelSustain]

export default function WhyChooseUs({ data }) {
  return (
    <section id="features" className="section why-us">
      <div className="container">
        <div className="section-head">
          <div className="badge">
            <span className="badge-dot" />
            <span>{data.badge}</span>
          </div>
          <h2 className="section-title">
            <span className="text-gradient">{data.companyTitle}</span>
          </h2>
        </div>

        <div className="why-us__features-list">
          {data.items.map((item, index) => {
            const Panel = VisualPanels[index % VisualPanels.length]
            const isMediaLeft = index % 2 === 0
            return (
              <div
                key={item.id}
                className={`feature-block ${isMediaLeft ? 'feature-block--media-left' : ''}`}
              >
                { }
                <div className="feature-block__copy">
                  <span className="feature-block__eyebrow">{item.eyebrow}</span>
                  <h3 className="feature-block__title">{item.title}</h3>

                  {item.type === 'points' && item.points && (
                    <div className="feature-block__points">
                      {item.points.map((pt, pi) => (
                        <div key={pi} className="feature-point">
                          <div className="feature-point__icon">
                            <FiCheck size={13} />
                          </div>
                          <p className="feature-point__text">{pt}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.type === 'text' && item.description && (
                    <p className="feature-block__desc">{item.description}</p>
                  )}
                </div>

                { }
                <div className="feature-visual">
                  <span className="feature-visual__glow" aria-hidden="true" />
                  <Panel />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
