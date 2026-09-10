import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Check, ShieldCheck } from 'lucide-react';

export default function TrustedInstallerSection({ onOpenQuote }) {
  const highlights = [
    {
      title: 'Tailored Solar Solutions',
      desc: 'Custom-designed systems for your specific energy use',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39af35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      title: 'Government Rebate Support',
      desc: 'Save more with federal solar & battery rebates',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39af35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Lower Electricity Bills',
      desc: 'Protect against rising electricity retail tariffs',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39af35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="12" width="4" height="8" rx="1" fill="#16a34a" stroke="none" />
          <rect x="10" y="8" width="4" height="12" rx="1" fill="#16a34a" stroke="none" />
          <rect x="17" y="4" width="4" height="16" rx="1" fill="#16a34a" stroke="none" />
        </svg>
      )
    },
    {
      title: 'Reliable Long-Term Performance',
      desc: 'Enjoy clean, dependable energy for decades to come',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39af35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="trusted-installer-section" id="about-installer">
      <div className="trusted-installer-container">
        <div className="trusted-installer-card-wrapper">
          {/* Left Column: Installer Rooftop Photo with Badges */}
          <div className="trusted-installer-image-col">
            <div className="installer-image-frame">
              <img
                src="/images/brisbane_solar_installers_roof.jpg"
                alt="Quick Solar Certified Installers on rooftop in Brisbane"
                className="installer-roof-img"
              />

              {/* Top-Left Green Badge: CEC ACCREDITED */}
              <div className="installer-badge-cec" title="Clean Energy Council Accredited Installer">
                <div className="badge-cec-circle">
                  <Check size={13} strokeWidth={3.5} />
                </div>
                <span>CEC ACCREDITED</span>
              </div>

              {/* Bottom-Left Floating Badge: LOCAL QLD TEAM */}
              <div className="installer-floating-qld-card" title="Local Queensland Solar Team">
                <div className="qld-map-icon-box">
                  <svg viewBox="0 0 100 100" width="34" height="34" className="qld-map-svg" fill="none">
                    <path
                      d="M 52 8 C 50 18 45 28 36 34 L 36 48 L 22 48 L 22 84 L 72 84 C 75 76 76 68 74 60 C 72 52 76 44 78 38 C 76 28 66 18 52 8 Z"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="3.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    <circle cx="70" cy="80" r="4.5" fill="#22c55e" stroke="#ffffff" strokeWidth="1.5" />
                    <circle cx="70" cy="80" r="2" fill="#ffffff" />
                  </svg>
                </div>
                <div className="qld-text-box">
                  <span className="qld-title">LOCAL QLD TEAM</span>
                  <span className="qld-subtitle">Brisbane-based solar specialists</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Preserved Original Content in Modern Screenshot Layout */}
          <div className="trusted-installer-content-col">
            {/* Subtle Sun Watermark in Top Right */}
            <div className="installer-sun-watermark" aria-hidden="true">
              <svg viewBox="0 0 100 100" width="170" height="170">
                <circle cx="95" cy="5" r="32" fill="none" stroke="#f1f5f9" strokeWidth="7" />
                <g stroke="#f1f5f9" strokeWidth="6" strokeLinecap="round">
                  <line x1="95" y1="48" x2="95" y2="64" />
                  <line x1="52" y1="5" x2="36" y2="5" />
                  <line x1="64" y1="36" x2="52" y2="48" />
                  <line x1="42" y1="22" x2="30" y2="30" />
                  <line x1="82" y1="54" x2="74" y2="68" />
                </g>
              </svg>
            </div>

            {/* Original Eyebrow */}
            <div className="installer-kicker">
              <span>BRISBANE &amp; QUEENSLAND SOLAR EXPERTS</span>
            </div>

            {/* Original Headline */}
            <h2 className="installer-headline">
              We are Brisbane’s Most Trusted <br />
              <span className="headline-dark">Solar &amp; Battery Panel Installer</span>
            </h2>

            {/* Original Lead & Body Paragraphs */}
            <p className="installer-lead-text">
              Thinking about going solar and adding a battery? With the Federal Government Solar &amp; Battery Rebate, now is the smartest time to make the switch.
            </p>

            <p className="installer-desc">
              We know it can be confusing with so many solar and battery options on the market. That’s why we make it simple. As one of Brisbane’s most trusted solar and battery installers, we help you choose the right system for your home so you can enjoy maximum efficiency, lower power bills, and access to government rebates.
            </p>

            <p className="installer-sub-desc">
              Our local team takes the time to review your current energy usage and design a tailored solar + battery solution that cuts your bills, reduces your reliance on the grid, and gives you long-term energy independence.
            </p>

            {/* 2x2 Feature Cards Grid */}
            <div className="installer-features-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="installer-feature-card">
                  <div className="feature-icon-wrap">
                    {item.icon}
                  </div>
                  <div className="feature-text-block">
                    <span className="feature-title">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Original Service Areas Text with Suburb Links */}
            <div className="installer-location-row">
              <MapPin size={22} className="location-pin-icon" />
              <span className="location-text">
                We proudly service{' '}
                <Link to="/locations/brisbane" className="area-link">Brisbane</Link>,{' '}
                <Link to="/locations/gold-coast" className="area-link">Gold Coast</Link>,{' '}
                <Link to="/locations/sunshine-coast" className="area-link">Sunshine Coast</Link>,{' '}
                Gladstone, Mackay, Toowoomba, Ipswich, Logan and surrounding areas.
              </span>
            </div>

            {/* Original Callout Box */}
            <div className="installer-callout-pill">
              <span>⚡ Switch to solar + battery today and make the most of the rebate while it lasts!</span>
            </div>

            {/* Action Row */}
            <div className="installer-action-row">
              <Link to="/about-us" className="btn-why-choose-us" id="btn-why-choose-us-link">
                <span>WHY CHOOSE US</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>

              <div className="installer-phone-contact">
                <Phone size={18} className="phone-icon" />
                <span className="phone-text">
                  Or call <a href="tel:1300969557">1300 969 557</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
