import React from 'react';
import { Sun, Award, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/siteData';

export default function SolarPanelsPage({ onOpenQuote }) {
  return (
    <div className="page-panels">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <Sun size={15} />
                <span>Tier 1 Solar Panels Australia</span>
              </div>
              <h1 className="hero-headline">
                High-Yield <span className="text-gradient-solar">Tier 1 Solar Panels</span> for Australian Heat
              </h1>
              <p className="hero-subhead">
                We only supply and install genuine Clean Energy Council approved Tier-1 Bloomberg rated monocrystalline panels with 25 to 30-year performance warranties.
              </p>
              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ package: 'Solar Panels' })}>
                  <span>Request Panel Quote</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/solar_hero_home.jpg"
                  alt="Tier 1 solar panels on Australian home"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panels Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge pill-badge-gold">
              <Award size={15} />
              <span>Premium Tier 1 Brands</span>
            </div>
            <h2 className="section-title">Industry-Leading Solar Panel Technology</h2>
          </div>

          <div className="packages-grid">
            {PRODUCTS_CATALOG.panels.map((p) => (
              <div key={p.id} className="package-card featured">
                <div>
                  <span className="pill-badge pill-badge-emerald" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    {p.badge}
                  </span>
                  <h3 className="pkg-title">{p.brand} {p.model}</h3>
                  <p className="pkg-desc">{p.description}</p>

                  <div className="pkg-price-wrap">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Efficiency:</span>
                      <strong>{p.efficiency}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Warranty:</span>
                      <strong style={{ color: 'var(--primary)' }}>{p.warranty}</strong>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: 'auto' }}
                  onClick={() => onOpenQuote({ package: `${p.brand} Panels` })}
                >
                  <span>Select {p.brand}</span>
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
