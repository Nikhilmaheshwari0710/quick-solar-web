import React from 'react';
import { BatteryCharging, RefreshCw, Zap, ArrowRight } from 'lucide-react';

export default function BatteryUpgrade({ onOpenQuote }) {
  return (
    <div className="page-upgrade">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-gold">
                <RefreshCw size={15} />
                <span>Existing Solar System Upgrades</span>
              </div>
              <h1 className="hero-headline">
                Already Have Solar? <span className="text-gradient-solar">Upgrade with a Battery</span> or Inverter
              </h1>
              <p className="hero-subhead">
                Retrofit your existing solar panels with a modern AC-coupled battery storage system (Tesla Powerwall or Sungrow), replace an outdated inverter, or expand your rooftop panel capacity.
              </p>
              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ package: 'Existing Solar Upgrade' })}>
                  <span>Request Upgrade Assessment</span>
                  <ArrowRight size={18} />
                </button>
                <a href="tel:1300969557" className="btn btn-outline btn-lg">
                  <span>Call 1300 969 557</span>
                </a>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/solar_battery_storage.jpg"
                  alt="Existing solar system battery retrofit"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Options */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge pill-badge-emerald">
              <Zap size={15} />
              <span>Tailored Upgrade Paths</span>
            </div>
            <h2 className="section-title">Ways to Upgrade Your Existing Solar System</h2>
            <p className="section-subtitle">
              You don’t have to start from scratch. Our CEC engineers maximize the value of your existing rooftop investment.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon-wrap">
                <BatteryCharging size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Add AC-Coupled Battery</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                Keep your existing solar panels and inverter intact while adding a Tesla Powerwall 3 or Sigenergy battery via an AC-coupling gateway.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrap">
                <RefreshCw size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Replace Aging Inverter</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                Inverters over 5–8 years old lose efficiency and fail. Upgrade to a modern Sungrow or GoodWe hybrid inverter with full smartphone monitoring.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrap">
                <Zap size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Expand Panel Capacity</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                Upgraded from a 3kW or 5kW system to a full 10.5kW or 13.2kW array to meet increased energy needs from ducted air conditioning or EVs.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ package: 'Existing Solar Assessment' })}>
              <span>Get Free System Health Check & Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
