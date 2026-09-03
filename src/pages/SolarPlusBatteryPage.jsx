import React from 'react';
import { Zap, Battery, Sun, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import BatteryStorageShowcase from '../components/BatteryStorageShowcase';
import SolarSavingsCalculator from '../components/SolarSavingsCalculator';
import Testimonials from '../components/Testimonials';

export default function SolarPlusBatteryPage({ onOpenQuote }) {
  return (
    <div className="page-solar-plus-battery">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <Zap size={15} />
                <span>Total Energy Independence Package</span>
              </div>
              <h1 className="hero-headline">
                Complete <span className="text-gradient-solar">Solar + Battery Packages</span>
              </h1>
              <p className="hero-subhead">
                Combine a high-efficiency 6.6kW–13.2kW rooftop solar array with Tesla Powerwall 3 or Sungrow battery storage for round-the-clock clean energy and near-zero power bills.
              </p>
              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ package: 'Solar + Battery Combo', battery: true })}>
                  <span>Get Solar + Battery Package Quote</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/solar_battery_storage.jpg"
                  alt="Solar plus battery package"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BatteryStorageShowcase onOpenQuote={onOpenQuote} />
      <SolarSavingsCalculator onOpenQuote={onOpenQuote} />
      <Testimonials />
    </div>
  );
}
