import React from 'react';
import { ArrowRight, Home, Award } from 'lucide-react';
import SolarPackages from '../components/SolarPackages';
import SolarSavingsCalculator from '../components/SolarSavingsCalculator';
import Testimonials from '../components/Testimonials';

export default function ResidentialSolar({ onOpenQuote }) {
  return (
    <div className="page-residential">
      {/* Page Hero */}
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <Home size={15} />
                <span>Brisbane Residential Solar Systems</span>
              </div>
              <h1 className="hero-headline">
                Power Your Home with <span className="text-gradient-solar">Clean Solar Energy</span> from $3/Day
              </h1>
              <p className="hero-subhead">
                Designed specifically for Brisbane and Queensland homes. Eliminate power bill shock with high-efficiency Tier 1 N-Type panels, smart WiFi inverters, and our 30-Day Price Beat Guarantee.
              </p>
              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ package: 'Residential Solar' })}>
                  <span>Get Free Home Solar Quote</span>
                  <ArrowRight size={18} />
                </button>
                <a href="#calculator" className="btn btn-outline btn-lg">
                  <span>Calculate Savings</span>
                </a>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/solar_hero_home.jpg"
                  alt="Quick Solar residential solar installation in Brisbane"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Showcase */}
      <SolarPackages onOpenQuote={onOpenQuote} />

      {/* Roof Compatibility & Benefits */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge pill-badge-gold">
              <Award size={15} />
              <span>Engineered for Australian Roofs</span>
            </div>
            <h2 className="section-title">Built to Withstand Extreme Australian Weather</h2>
            <p className="section-subtitle">
              From Colorbond tin to terracotta tile, our SAA accredited installers use heavy-duty marine-grade anodized aluminum mounting systems.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Colorbond Tin / Metal Roofs</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                Non-penetrative Klip-Lok or sealed screw clamp systems designed for maximum wind loading and 0% risk of water ingress.
              </p>
            </div>
            <div className="feature-box">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Concrete & Terracotta Tile Roofs</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                Heavy-duty stainless steel tile brackets fitted directly into rafters without grinding or cracking your tiles.
              </p>
            </div>
            <div className="feature-box">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Multi-Orientation & Shading</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                Dual MPPT inverters and micro-inverter options to maximize power generation across east, west, and north-facing roof planes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Savings Calculator */}
      <SolarSavingsCalculator onOpenQuote={onOpenQuote} />

      {/* Customer Reviews */}
      <Testimonials />
    </div>
  );
}
