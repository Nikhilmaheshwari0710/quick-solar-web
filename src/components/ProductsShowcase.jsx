import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Building2, BatteryCharging, ShieldCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/siteData';

export default function ProductsShowcase({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('panels');

  const tabs = [
    { id: 'panels', label: 'Solar Panels', icon: Sun, count: 'Tier 1 N-Type' },
    { id: 'inverters', label: 'Smart Inverters', icon: Building2, count: 'Hybrid & Dynamic' },
    { id: 'batteries', label: 'Battery Storage', icon: BatteryCharging, count: 'Tesla & Sungrow' }
  ];

  const currentProducts = PRODUCTS_CATALOG[activeTab] || [];

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-header">
          <div className="pill-badge pill-badge-emerald">
            <Award size={15} />
            <span>Clean Energy Council Approved Hardware</span>
          </div>
          <h2 className="section-title">
            Industry-Leading <span className="text-gradient-solar">Solar Hardware</span> & Components
          </h2>
          <p className="section-subtitle">
            We exclusively install CEC-approved Tier-1 solar panels, smart European & hybrid inverters, and high-capacity battery storage systems with up to 25-year performance warranties.
          </p>

          {/* Product Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`btn ${isActive ? 'btn-primary' : 'btn-outline'}`}
                  style={{ borderRadius: 'var(--radius-full)', padding: '0.65rem 1.4rem', fontSize: '0.925rem' }}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="packages-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {currentProducts.map(item => (
            <div key={item.id} className="package-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem' }}>
                <img
                  src={item.image}
                  alt={`${item.brand} ${item.model}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="pill-badge pill-badge-emerald" style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'rgba(255, 255, 255, 0.95)' }}>
                  {item.badge}
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: '800', letterSpacing: '0.05em' }}>
                {item.brand}
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--slate-900)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                {item.model}
              </h3>

              <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.25rem', flexGrow: 1 }}>
                {item.description}
              </p>

              <div style={{ background: 'var(--slate-50)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <div>
                  <span style={{ color: 'var(--slate-400)', display: 'block', fontSize: '0.75rem' }}>WARRANTY</span>
                  <strong style={{ color: 'var(--slate-800)' }}>{item.warranty}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--slate-400)', display: 'block', fontSize: '0.75rem' }}>RATING</span>
                  <strong style={{ color: 'var(--primary)' }}>{item.efficiency || item.phases || item.capacity}</strong>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem' }}>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => onOpenQuote({ package: `${item.brand} ${item.model}` })}
                >
                  <span>Request Quote</span>
                  <ArrowRight size={14} />
                </button>
                <Link
                  to={`/products/${activeTab}/${item.id}`}
                  className="btn btn-outline btn-sm"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  <span>Details</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/products/solar-panels" className="btn btn-outline btn-lg">
            <span>View Full Product Catalog & Datasheets</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
