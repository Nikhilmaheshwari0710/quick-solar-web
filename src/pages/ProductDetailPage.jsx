import React from 'react';
import { useParams } from 'react-router-dom';
import { ShieldCheck, Award, ArrowRight, Phone, Zap } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/siteData';

export default function ProductDetailPage({ onOpenQuote }) {
  const { id } = useParams();

  // Find product across panels, inverters, batteries
  const allProducts = [
    ...PRODUCTS_CATALOG.panels.map(p => ({ ...p, type: 'Solar Panels', catKey: 'panels' })),
    ...PRODUCTS_CATALOG.inverters.map(i => ({ ...i, type: 'Inverters', catKey: 'inverters' })),
    ...PRODUCTS_CATALOG.batteries.map(b => ({ ...b, type: 'Batteries', catKey: 'batteries' }))
  ];

  const product = allProducts.find(p => p.id === id) || allProducts[0];

  return (
    <div className="page-product-detail">
      <section className="hero" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <Award size={15} />
                <span>{product.brand} • {product.badge}</span>
              </div>
              <h1 className="hero-headline">
                {product.brand} <span className="text-gradient-solar">{product.model}</span>
              </h1>
              <p className="hero-subhead">
                {product.description}
              </p>

              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--slate-200)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                margin: '0.5rem 0 1rem 0'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--slate-400)', fontWeight: '700' }}>Warranty</div>
                  <strong style={{ color: 'var(--primary)', fontSize: '1rem' }}>{product.warranty}</strong>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--slate-400)', fontWeight: '700' }}>Key Spec</div>
                  <strong style={{ color: 'var(--slate-900)', fontSize: '1rem' }}>{product.efficiency || product.phases || product.capacity}</strong>
                </div>
              </div>

              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ package: `${product.brand} ${product.model}` })}>
                  <span>Request Quote for {product.model}</span>
                  <ArrowRight size={18} />
                </button>
                <a href="tel:1300969557" className="btn btn-outline btn-lg">
                  <Phone size={16} />
                  <span>Call 1300 969 557</span>
                </a>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src={product.image || '/images/solar_battery_storage.jpg'}
                  alt={`${product.brand} ${product.model}`}
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technical Specifications & Approvals</h2>
            <p className="section-subtitle">
              All {product.brand} equipment installed by Quick Solar is 100% Clean Energy Council certified for Australian grid standards.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <ShieldCheck size={28} style={{ color: 'var(--primary)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.35rem' }}>Clean Energy Council Approved</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem' }}>
                Meets all AS/NZS 4777.2 and AS/NZS 5033 standards for safe installation across Queensland and Western Australia.
              </p>
            </div>

            <div className="feature-box">
              <Zap size={28} style={{ color: 'var(--sun-gold-hover)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.35rem' }}>High Efficiency Performance</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem' }}>
                Optimized for high thermal tolerance in intense Australian summer heat, ensuring maximum kilowatt-hour yield.
              </p>
            </div>

            <div className="feature-box">
              <Award size={28} style={{ color: 'var(--primary)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.35rem' }}>Genuine Australian Support</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem' }}>
                Direct manufacturer warranty replacement backed by local Quick Solar certified service technicians.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
