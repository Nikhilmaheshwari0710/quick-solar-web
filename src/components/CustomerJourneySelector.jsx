import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sun, BatteryCharging, Building2, UploadCloud, ArrowRight,
  Sparkles, Zap, CheckCircle2, ShieldCheck, Clock
} from 'lucide-react';

export default function CustomerJourneySelector({ onOpenQuote, onScrollToCalculator }) {
  const journeys = [
    {
      id: 'new-solar',
      title: 'New Solar Customer',
      subtitle: 'Installing rooftop solar for the first time',
      badge: 'START HERE',
      icon: Sun,
      color: '#059669',
      gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      glow: 'rgba(16, 185, 129, 0.25)',
      bg: '#ecfdf5',
      btnClass: 'btn-journey-emerald',
      actionText: 'Calculate Savings',
      features: ['6.6kW, 10.5kW & 13.2kW Packages', '$0 Deposit Finance from $3/day', '25-Yr Performance Guarantee'],
      link: '/solar/residential-solar',
      isCalc: true
    },
    {
      id: 'existing-solar',
      title: 'Already Have Solar?',
      subtitle: 'Add a battery, upgrade inverter or expand array',
      badge: 'UPGRADE & BATTERY',
      icon: Zap,
      color: '#d97706',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      glow: 'rgba(245, 158, 11, 0.25)',
      bg: '#fffbeb',
      btnClass: 'btn-journey-amber',
      actionText: 'Explore Solar Upgrades',
      features: ['Tesla Powerwall 3 & Sungrow SBR', 'Inverter Replacement & Retrofit', 'Zero Export & EV Charger Ready'],
      link: '/battery/battery-upgrade'
    },
    {
      id: 'commercial',
      title: 'Commercial Business',
      subtitle: 'Reduce daytime tariffs (20kW to 100kW+)',
      badge: 'TAX WRITE-OFF',
      icon: Building2,
      color: '#2563eb',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      glow: 'rgba(59, 130, 246, 0.25)',
      bg: '#eff6ff',
      btnClass: 'btn-journey-blue',
      actionText: 'Commercial Solar',
      features: ['20kW to 100kW+ Industrial Arrays', 'Instant Asset Tax Depreciation', 'Custom CAD Energy Audit'],
      link: '/solar/commercial-solar'
    },
    {
      id: 'bill-upload',
      title: 'Upload Power Bill',
      subtitle: 'Get an exact satellite CAD proposal in 24h',
      badge: 'FASTEST QUOTE',
      icon: UploadCloud,
      color: '#7c3aed',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
      glow: 'rgba(139, 92, 246, 0.25)',
      bg: '#f5f3ff',
      btnClass: 'btn-journey-purple',
      actionText: 'Upload My Bill',
      features: ['24-Hour Fast Turnaround', 'Satellite Roof Potential Analysis', '100% Free & No Obligation'],
      isModal: true
    }
  ];

  return (
    <section className="section journey-section" id="journey-selector">
      <div className="container-wide">
        {/* Header matching enhanced modern aesthetics */}
        <div className="journey-header">
          <div className="journey-badge-pill">
            <Sparkles size={15} className="sparkle-icon-animated" />
            <span>TAILORED SOLAR SOLUTIONS</span>
          </div>

          <h2 className="journey-title">
            Choose Your <span className="text-gradient-emerald">Solar Journey</span>
          </h2>

          {/* Sun icon glowing divider */}
          <div className="journey-sun-divider">
            <span className="sun-divider-line line-left" />
            <div className="sun-icon-wrap">
              <Sun size={20} className="sun-divider-icon" />
            </div>
            <span className="sun-divider-line line-right" />
          </div>

          <p className="journey-subtitle">
            Select your current energy situation below to receive <strong>tailored system recommendations</strong> and <strong>instant estimate breakdowns</strong>.
          </p>
        </div>

        {/* 4 Journey Cards Grid */}
        <div className="journey-cards-grid">
          {journeys.map((j) => {
            const Icon = j.icon;
            return (
              <div key={j.id} className={`journey-card journey-card-${j.id}`}>
                {/* Top accent glow line */}
                <div className="journey-card-glow-line" style={{ background: j.gradient }} />

                {/* Card Header: Icon + Badge */}
                <div className="journey-card-top">
                  <div
                    className="journey-icon-wrap"
                    style={{ background: j.bg, color: j.color, boxShadow: `0 8px 20px ${j.glow}` }}
                  >
                    <Icon size={26} strokeWidth={2.3} />
                  </div>
                  <span
                    className="journey-badge"
                    style={{ background: j.bg, color: j.color, border: `1px solid ${j.color}30` }}
                  >
                    {j.badge}
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="journey-card-body">
                  <h3 className="journey-card-title">{j.title}</h3>
                  <p className="journey-card-desc">{j.subtitle}</p>

                  {/* Feature bullet list for high visual value */}
                  <ul className="journey-feature-list">
                    {j.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} style={{ color: j.color, flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Interactive CTA Button */}
                <div className="journey-card-footer">
                  {j.isModal ? (
                    <button
                      type="button"
                      onClick={onOpenQuote}
                      className={`btn-journey-outline ${j.btnClass}`}
                    >
                      <span>{j.actionText}</span>
                      <ArrowRight size={16} className="btn-arrow-icon" />
                    </button>
                  ) : j.isCalc ? (
                    <button
                      type="button"
                      onClick={onScrollToCalculator || (() => {})}
                      className={`btn-journey-outline ${j.btnClass}`}
                    >
                      <span>{j.actionText}</span>
                      <ArrowRight size={16} className="btn-arrow-icon" />
                    </button>
                  ) : (
                    <Link
                      to={j.link}
                      className={`btn-journey-outline ${j.btnClass}`}
                    >
                      <span>{j.actionText}</span>
                      <ArrowRight size={16} className="btn-arrow-icon" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

