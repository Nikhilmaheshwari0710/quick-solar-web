import React, { useState } from 'react';
import { Award, MapPin, ArrowRight } from 'lucide-react';
import { REAL_PROJECTS } from '../data/siteData';

export default function ProjectsPage({ onOpenQuote }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? REAL_PROJECTS
    : filter === 'residential'
    ? REAL_PROJECTS.filter((p) => p.systemSize.includes('6.6') || p.systemSize.includes('10.5') || p.systemSize.includes('13.2'))
    : REAL_PROJECTS.filter((p) => p.systemSize.includes('50') || p.systemSize.includes('Commercial'));

  return (
    <div className="page-projects">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.75rem' }}>
              <Award size={15} />
              <span>Real Installations & Proven Savings</span>
            </div>
            <h1 className="hero-headline">
              Quick Solar <span className="text-gradient-solar">Project Case Studies</span>
            </h1>
            <p className="hero-subhead" style={{ margin: '0.75rem auto 1.5rem auto' }}>
              Explore real-world solar and battery installations across Brisbane, Gold Coast, Ipswich, and Queensland with verified before/after bill reductions.
            </p>

            {/* Filter Buttons */}
            <div className="packages-tabs" style={{ maxWidth: '420px' }}>
              <button
                className={`pkg-tab-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Projects
              </button>
              <button
                className={`pkg-tab-btn ${filter === 'residential' ? 'active' : ''}`}
                onClick={() => setFilter('residential')}
              >
                Residential
              </button>
              <button
                className={`pkg-tab-btn ${filter === 'commercial' ? 'active' : ''}`}
                onClick={() => setFilter('commercial')}
              >
                Commercial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section section-alt" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--slate-200)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(11, 19, 43, 0.85)',
                    color: 'var(--white)',
                    backdropFilter: 'blur(8px)',
                    fontSize: '0.8rem',
                    fontWeight: '800',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    {proj.systemSize}
                  </span>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '700' }}>
                      <MapPin size={14} />
                      <span>{proj.location}</span>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--slate-900)', marginTop: '0.35rem' }}>
                      {proj.title}
                    </h3>
                    <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      {proj.customerGoal}
                    </p>
                  </div>

                  <div style={{
                    background: 'var(--slate-50)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1rem',
                    border: '1px solid var(--slate-200)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    fontSize: '0.875rem'
                  }}>
                    <div><strong>Panels:</strong> {proj.panels}</div>
                    <div><strong>Inverter:</strong> {proj.inverter}</div>
                    {proj.battery && <div><strong>Storage:</strong> {proj.battery}</div>}
                    <div style={{ borderTop: '1px solid var(--slate-200)', paddingTop: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span>Annual Savings:</span>
                      <strong style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>{proj.annualSavings}</strong>
                    </div>
                  </div>

                  <button
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%', marginTop: 'auto', justifyContent: 'center' }}
                    onClick={() => onOpenQuote({ package: `Similar to ${proj.title}` })}
                  >
                    <span>Calculate Similar System</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
