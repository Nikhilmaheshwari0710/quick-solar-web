import React from 'react';
import { BatteryCharging, ShieldCheck, Zap, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import BatteryStorageShowcase from '../components/BatteryStorageShowcase';
import { PRODUCTS_CATALOG } from '../data/siteData';

export default function SolarBatteries({ onOpenQuote }) {
  return (
    <div className="page-batteries">
      {/* Hero */}
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <BatteryCharging size={15} />
                <span>Home Battery Storage Systems</span>
              </div>
              <h1 className="hero-headline">
                Store Daylight Sunshine for <span className="text-gradient-solar">24/7 Power Security</span>
              </h1>
              <p className="hero-subhead">
                Protect your household against sudden blackouts and rising 4pm–9pm evening electricity tariffs. Certified installations for Tesla Powerwall 3, Sungrow SBR, and Sigenergy in Brisbane & WA.
              </p>
              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ package: 'Solar Battery Storage' })}>
                  <span>Get Free Battery Quote</span>
                  <ArrowRight size={18} />
                </button>
                <a href="#battery-products" className="btn btn-outline btn-lg">
                  <span>Compare Battery Models</span>
                </a>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/solar_battery_storage.jpg"
                  alt="Quick Solar battery storage and inverter setup"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Showcase Simulator */}
      <BatteryStorageShowcase onOpenQuote={onOpenQuote} />

      {/* Battery Products Catalog */}
      <section className="section section-alt" id="battery-products">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge pill-badge-gold">
              <Award size={15} />
              <span>Certified Battery Partners</span>
            </div>
            <h2 className="section-title">Explore Leading Home Battery Storage Systems</h2>
            <p className="section-subtitle">
              Choose from market-leading Lithium Iron Phosphate (LFP) and high-density home battery storage technologies.
            </p>
          </div>

          <div className="packages-grid">
            {PRODUCTS_CATALOG.batteries.map((bat) => (
              <div key={bat.id} className="package-card featured">
                <div>
                  <span className="pill-badge pill-badge-emerald" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    {bat.badge}
                  </span>
                  <h3 className="pkg-title">{bat.model}</h3>
                  <p className="pkg-desc">{bat.description}</p>

                  <div className="pkg-price-wrap">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Usable Capacity:</span>
                      <strong>{bat.capacity}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Power Output:</span>
                      <strong>{bat.powerOutput}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Warranty:</span>
                      <strong style={{ color: 'var(--primary)' }}>{bat.warranty}</strong>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: 'auto' }}
                  onClick={() => onOpenQuote({ package: bat.model, battery: true })}
                >
                  <span>Request Battery Quote</span>
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
