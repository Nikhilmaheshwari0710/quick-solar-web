import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { REAL_PROJECTS } from '../data/siteData';

export default function CaseStudyDetailPage({ onOpenQuote }) {
  const { id } = useParams();
  const project = REAL_PROJECTS.find(p => p.id === id) || REAL_PROJECTS[0];

  return (
    <div className="page-case-study">
      <section className="hero" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <MapPin size={15} />
                <span>{project.location} • Case Study</span>
              </div>
              <h1 className="hero-headline">
                {project.title}
              </h1>
              <p className="hero-subhead">
                {project.customerGoal}
              </p>

              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--slate-200)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                margin: '0.5rem 0 1rem 0'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--slate-400)', fontWeight: '700' }}>Bill Before</div>
                  <strong style={{ color: '#dc2626', fontSize: '1.1rem' }}>{project.quarterlyBefore}</strong>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--slate-400)', fontWeight: '700' }}>Bill After</div>
                  <strong style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>{project.quarterlyAfter}</strong>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--slate-400)', fontWeight: '700' }}>Annual Savings</div>
                  <strong style={{ color: 'var(--sun-gold-hover)', fontSize: '1.1rem' }}>{project.annualSavings}</strong>
                </div>
              </div>

              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ package: `Similar to ${project.title}` })}>
                  <span>Calculate Similar System</span>
                  <ArrowRight size={18} />
                </button>
                <Link to="/projects" className="btn btn-outline btn-lg">
                  <span>View All Case Studies</span>
                </Link>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Technical Breakdown */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <h2 className="section-title">Installed System Specifications</h2>
          </div>

          <div style={{
            background: 'var(--white)',
            border: '1px solid var(--slate-200)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: '0.75rem' }}>
              <span style={{ color: 'var(--slate-500)' }}>System Capacity:</span>
              <strong>{project.systemSize}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: '0.75rem' }}>
              <span style={{ color: 'var(--slate-500)' }}>Solar Panels:</span>
              <strong>{project.panels}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: '0.75rem' }}>
              <span style={{ color: 'var(--slate-500)' }}>Inverter:</span>
              <strong>{project.inverter}</strong>
            </div>
            {project.battery && (
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: '0.75rem' }}>
                <span style={{ color: 'var(--slate-500)' }}>Battery Storage:</span>
                <strong style={{ color: 'var(--primary)' }}>{project.battery}</strong>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)', paddingBottom: '0.75rem' }}>
              <span style={{ color: 'var(--slate-500)' }}>Installation Time:</span>
              <strong>Half-day (4.5 hours)</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--slate-500)' }}>Accreditation:</span>
              <strong>Clean Energy Council Certified</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
