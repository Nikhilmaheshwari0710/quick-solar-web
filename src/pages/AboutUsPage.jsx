import React from 'react';
import { ShieldCheck, Award, Users, HeartHandshake, ArrowRight } from 'lucide-react';
import WhyQuickSolar from '../components/WhyQuickSolar';
import HowItWorks from '../components/HowItWorks';
import TrustBadges from '../components/TrustBadges';

export default function AboutUsPage({ onOpenQuote }) {
  return (
    <div className="page-about">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <Users size={15} />
                <span>Australian Owned & Operated</span>
              </div>
              <h1 className="hero-headline">
                Delivering Honest, High-Yield <span className="text-gradient-solar">Solar Energy Since Day One</span>
              </h1>
              <p className="hero-subhead">
                Headquartered in Milton, Brisbane with regional teams across Western Australia, Quick Solar is committed to transparent pricing, accredited engineering, and long-term customer relationships.
              </p>
              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={onOpenQuote}>
                  <span>Book Free Consultation</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/solar_hero_home.jpg"
                  alt="Quick Solar Australian headquarters and installation team"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Core Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge pill-badge-gold">
              <Award size={15} />
              <span>Our Commitments</span>
            </div>
            <h2 className="section-title">The Principles Behind Quick Solar</h2>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon-wrap">
                <Award size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>SAA & CEC Accreditations</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                We uphold the highest Clean Energy Council standards. Every installation is signed off by licensed master electricians with zero shortcuts.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrap">
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>30-Day Price Beat Guarantee</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                We believe premium quality shouldn’t cost an arm and a leg. If you find a comparable quote from an accredited retailer cheaper, we’ll beat it.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrap">
                <HeartHandshake size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>In-House Australian Care</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                No offshore call centers. When you call 1300 969 557, you speak directly with our Brisbane and Perth-based solar technicians and designers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Advantage Components */}
      <HowItWorks onOpenQuote={onOpenQuote} />
      <WhyQuickSolar onOpenQuote={onOpenQuote} />
    </div>
  );
}
