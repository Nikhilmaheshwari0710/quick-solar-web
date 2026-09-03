import React from 'react';
import { BatteryCharging, ShieldCheck, CheckCircle2, ArrowRight, Zap, Award } from 'lucide-react';
import BatteryStorageShowcase from '../components/BatteryStorageShowcase';
import TrustBadges from '../components/TrustBadges';

export default function BatteryInstallationPage({ onOpenQuote }) {
  return (
    <div className="page-battery-installation">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <BatteryCharging size={15} />
                <span>Certified Battery Installation</span>
              </div>
              <h1 className="hero-headline">
                Expert <span className="text-gradient-solar">Home Battery Installation</span> in Brisbane & WA
              </h1>
              <p className="hero-subhead">
                Certified Tesla Powerwall 3, Sungrow SBR, and Sigenergy installations with whole-home EPS blackout backup circuits, smart gateway commissioning, and dynamic export limit testing.
              </p>
              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ battery: true })}>
                  <span>Get Battery Installation Quote</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/solar_battery_storage.jpg"
                  alt="Battery installation"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      <BatteryStorageShowcase onOpenQuote={onOpenQuote} />
    </div>
  );
}
