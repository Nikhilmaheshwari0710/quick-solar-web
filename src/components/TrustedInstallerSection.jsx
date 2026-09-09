import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export default function TrustedInstallerSection({ onOpenQuote }) {
  const highlights = [
    'Save more with government solar & battery rebates',
    'Lower your electricity bills and protect against rising costs',
    'Enjoy clean, reliable energy for years to come'
  ];

  return (
    <section className="trusted-installer-section" id="about-installer">
      <div className="container-wide">
        <div className="trusted-installer-grid">
          {/* Left Column: Overlapping Modern Installer Visuals */}
          <div className="trusted-installer-visuals">
            <div className="visual-card visual-card-main">
              <img
                src="/images/installer_hero.jpg"
                alt="Brisbane Certified Solar Installer"
                className="visual-img"
              />
              <div className="visual-badge-overlay">
                <ShieldCheck size={20} className="badge-icon" />
                <div>
                  <div className="badge-main-text">CEC &amp; SAA Certified</div>
                  <div className="badge-sub-text">100% In-House Clean Energy Team</div>
                </div>
              </div>
            </div>

            <div className="visual-card visual-card-floating">
              <img
                src="/images/installer_roof.jpg"
                alt="Rooftop Solar Installation in Progress"
                className="visual-img-roof"
              />
            </div>

            {/* Decorative background energy rays */}
            <div className="visual-ambient-glow" />
          </div>

          {/* Right Column: Exact Content */}
          <div className="trusted-installer-content">
            <div className="trusted-eyebrow-pill">
              <Sparkles size={14} className="text-emerald" />
              <span>BRISBANE &amp; QUEENSLAND SOLAR EXPERTS</span>
            </div>

            <h2 className="trusted-installer-title">
              We are Brisbane’s Most Trusted Solar &amp; Battery Panel Installer
            </h2>

            <p className="trusted-lead-text">
              Thinking about going solar and adding a battery? With the Federal Government Solar &amp; Battery Rebate, now is the smartest time to make the switch.
            </p>

            <p className="trusted-body-text">
              We know it can be confusing with so many solar and battery options on the market. That’s why we make it simple. As one of Brisbane’s most trusted solar and battery installers, we help you choose the right system for your home so you can enjoy maximum efficiency, lower power bills, and access to government rebates.
            </p>

            <p className="trusted-body-text">
              Our local team takes the time to review your current energy usage and design a tailored solar + battery solution that cuts your bills, reduces your reliance on the grid, and gives you long-term energy independence.
            </p>

            <div className="trusted-service-areas">
              <MapPin size={18} className="area-pin-icon" />
              <span>
                We proudly service{' '}
                <Link to="/locations/brisbane" className="area-link">Brisbane</Link>,{' '}
                <Link to="/locations/gold-coast" className="area-link">Gold Coast</Link>,{' '}
                <Link to="/locations/sunshine-coast" className="area-link">Sunshine Coast</Link>,{' '}
                Gladstone, Mackay, Toowoomba, Ipswich, Logan and surrounding areas.
              </span>
            </div>

            {/* Benefit Checkmarks */}
            <ul className="trusted-highlights-list">
              {highlights.map((item, index) => (
                <li key={index} className="trusted-highlight-item">
                  <CheckCircle2 size={18} className="highlight-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="trusted-callout-box">
              <p className="trusted-callout-text">
                Switch to solar + battery today and make the most of the rebate while it lasts!
              </p>
            </div>

            <div className="trusted-cta-row">
              <button className="btn btn-trusted-primary" onClick={onOpenQuote}>
                <span>Get a Free Quote</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/about-us" className="btn btn-trusted-secondary">
                <span>About Quick Solar</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
