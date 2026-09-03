import React from 'react';
import { Cpu, Award, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/siteData';

export default function InvertersPage({ onOpenQuote }) {
  return (
    <div className="page-inverters">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <Cpu size={15} />
                <span>Smart Solar Inverters</span>
              </div>
              <h1 className="hero-headline">
                The Brain of Your Solar System: <span className="text-gradient-solar">Smart Inverters</span>
              </h1>
              <p className="hero-subhead">
                Explore top-rated string and hybrid inverters from Sungrow, Fronius, and GoodWe with 10-year Australian replacement warranties and cloud mobile app tracking.
              </p>
              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ package: 'Solar Inverters' })}>
                  <span>Request Inverter Quote</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/solar_battery_storage.jpg"
                  alt="Smart hybrid solar inverter installation"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inverters Catalog */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge pill-badge-gold">
              <Award size={15} />
              <span>Smart Hybrid Inverters</span>
            </div>
            <h2 className="section-title">Tested for Queensland Grid Reliability</h2>
          </div>

          <div className="packages-grid">
            {PRODUCTS_CATALOG.inverters.map((inv) => (
              <div key={inv.id} className="package-card featured">
                <div>
                  <span className="pill-badge pill-badge-emerald" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    {inv.badge}
                  </span>
                  <h3 className="pkg-title">{inv.brand} {inv.model}</h3>
                  <p className="pkg-desc">{inv.description}</p>

                  <div className="pkg-price-wrap">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Phase Support:</span>
                      <strong>{inv.phases}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Warranty:</span>
                      <strong style={{ color: 'var(--primary)' }}>{inv.warranty}</strong>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: 'auto' }}
                  onClick={() => onOpenQuote({ package: `${inv.brand} Inverter` })}
                >
                  <span>Select {inv.brand}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
