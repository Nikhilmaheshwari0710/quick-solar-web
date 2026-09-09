import React from 'react';
import { Building2, TrendingUp, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { COMMERCIAL_PACKAGES } from '../data/siteData';

export default function CommercialSolar({ onOpenQuote }) {
  return (
    <div className="page-commercial">
      {/* Hero */}
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <Building2 size={15} />
                <span>Commercial & Industrial Solar Brisbane</span>
              </div>
              <h1 className="hero-headline">
                Slash Business Operating Costs with <span className="text-gradient-solar">Commercial Solar</span>
              </h1>
              <p className="hero-subhead">
                Designed for Brisbane warehouses, offices, medical centers, and factories. Lock in low daytime electricity costs, claim instant tax depreciation, and achieve payback in under 3.5 years.
              </p>
              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ package: 'Commercial Solar' })}>
                  <span>Request Commercial Feasibility Study</span>
                  <ArrowRight size={18} />
                </button>
                <a href="tel:1300969557" className="btn btn-outline btn-lg">
                  <span>Call Commercial Team: 1300 969 557</span>
                </a>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/commercial_solar.jpg"
                  alt="Quick Solar commercial rooftop solar installation"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Packages Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge pill-badge-emerald">
              <Zap size={15} />
              <span>Turnkey Commercial Solutions</span>
            </div>
            <h2 className="section-title">Commercial Solar Packages (20kW to 100kW+)</h2>
            <p className="section-subtitle">
              Every commercial project includes network distributor (DNSP) approvals, structural engineering certification, and cloud SCADA generation monitoring.
            </p>
          </div>

          <div className="packages-grid">
            {COMMERCIAL_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div>
                  <h3 className="pkg-title">{pkg.name}</h3>
                  <p className="pkg-desc">{pkg.tagline}</p>

                  <div className="pkg-price-wrap">
                    <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: '700', textTransform: 'uppercase' }}>
                      Estimated System Payback
                    </div>
                    <div className="pkg-daily-rate" style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>
                      {pkg.estimatedPayback}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)', marginTop: '2px' }}>
                      Daily yield: ~{pkg.dailyProduction}
                    </div>
                  </div>

                  <ul className="pkg-features-list">
                    {pkg.specs.map((s, idx) => (
                      <li key={idx} className="pkg-feature-item">
                        <CheckCircle2 size={16} />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: 'auto' }}
                  onClick={() => onOpenQuote({ package: pkg.name })}
                >
                  <span>Request Commercial Proposal</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Commercial Solar Makes Financial Sense */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge pill-badge-gold">
              <TrendingUp size={15} />
              <span>Financial Benefits</span>
            </div>
            <h2 className="section-title">High ROI for Queensland Businesses</h2>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Instant Asset Tax Write-Off</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                Eligible businesses can write off the full depreciation value of their solar system in the current financial year.
              </p>
            </div>
            <div className="feature-box">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Peak Demand Shaving</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                Cut electricity demand during expensive daytime commercial hours when your business is consuming the most power.
              </p>
            </div>
            <div className="feature-box">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Zero Capital Outlay (PPA & Capex)</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                Flexible commercial green financing and Power Purchase Agreements structured to deliver immediate positive monthly cash flow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
