import React from 'react';
import { Wrench, ArrowRight } from 'lucide-react';
import HowItWorks from '../components/HowItWorks';
import TrustBadges from '../components/TrustBadges';

export default function SolarInstallationPage({ onOpenQuote }) {
  return (
    <div className="page-installation">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <Wrench size={15} />
                <span>Certified Solar Installation Process</span>
              </div>
              <h1 className="hero-headline">
                Accredited, Safe & <span className="text-gradient-solar">Fast Solar Installation</span>
              </h1>
              <p className="hero-subhead">
                Our in-house Clean Energy Council and SAA accredited master electricians complete your full rooftop installation in just half a day, with 100% network paperwork, safety switchgear, and cloud app setup included.
              </p>
              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={onOpenQuote}>
                  <span>Book Installation Survey</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/solar_hero_home.jpg"
                  alt="Quick Solar installation process"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      <HowItWorks onOpenQuote={onOpenQuote} />
    </div>
  );
}
