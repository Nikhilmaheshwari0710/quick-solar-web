import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, TrendingDown, DollarSign, Award, CheckCircle2, Zap } from 'lucide-react';
import { REAL_PROJECTS } from '../data/siteData';

export default function RealCustomerProjects({ onOpenQuote }) {
  // Show first 3 top case studies on homepage
  const featuredProjects = REAL_PROJECTS.slice(0, 3);

  return (
    <section className="section real-projects-compact-section" id="projects-preview">
      <div className="container-wide">
        {/* Compact Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.65rem' }}>
            <Award size={14} />
            <span>PROVEN REAL-WORLD RESULTS</span>
          </div>
          <h2 className="section-title">
            Real Customer <span className="text-emerald">Solar Transformations</span>
          </h2>
          <p className="section-subtitle">
            Actual before & after electricity bill reductions from verified Quick Solar installations across Queensland & WA.
          </p>
        </div>

        {/* Compact 3-Column Grid */}
        <div className="projects-compact-grid">
          {featuredProjects.map((proj) => (
            <div key={proj.id} className="project-compact-card">
              {/* Image with Overlaid Badges */}
              <div className="proj-compact-img-wrap">
                <img src={proj.image} alt={proj.title} className="proj-compact-img" />
                <div className="proj-img-overlay" />
                <span className="proj-loc-pill">
                  <MapPin size={12} />
                  <span>{proj.location}</span>
                </span>
                <span className="proj-kw-pill">
                  <Zap size={12} />
                  <span>{proj.systemSize}</span>
                </span>
              </div>

              {/* Compact Body */}
              <div className="proj-compact-body">
                <h3 className="proj-compact-title">{proj.title}</h3>

                {/* Compact Before / After Strip */}
                <div className="proj-compact-savings-bar">
                  <div className="savings-flow-wrap">
                    <div className="savings-drop-item">
                      <span className="savings-label">Before</span>
                      <span className="savings-val-before">{proj.quarterlyBefore}</span>
                    </div>
                    <span className="savings-arrow">→</span>
                    <div className="savings-drop-item">
                      <span className="savings-label">After Solar</span>
                      <span className="savings-val-after">{proj.quarterlyAfter}</span>
                    </div>
                  </div>
                  <div className="savings-annual-badge">
                    <span>{proj.annualSavings}</span>
                  </div>
                </div>

                {/* Specs / Hardware Text */}
                <div className="proj-compact-hardware">
                  <span>{proj.panels}</span> • <span>{proj.inverter}</span>
                </div>

                {/* Action CTA */}
                <div className="proj-compact-action-row">
                  <button
                    type="button"
                    className="btn btn-hero-emerald btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                    onClick={() => onOpenQuote({ package: `Similar to ${proj.title}` })}
                  >
                    <span>Get Similar Quote</span>
                    <ArrowRight size={14} />
                  </button>
                  <Link
                    to={`/projects/${proj.id}`}
                    className="btn-compact-link"
                    title="View case study details"
                  >
                    Details ↗
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Bar */}
        <div className="projects-view-all-bar">
          <Link to="/projects" className="btn btn-outline btn-sm">
            <span>Explore All 5,000+ Case Studies & Commercial Projects</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
