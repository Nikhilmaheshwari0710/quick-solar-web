import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sun, BatteryCharging, Building2, UploadCloud, ArrowRight,
  Sparkles, ZapIcon
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
      bg: '#ecfdf5',
      btnClass: 'btn-journey-emerald',
      actionText: 'Calculate Savings',
      link: '/solar/residential-solar',
      isCalc: true
    },
    {
      id: 'existing-solar',
      title: 'Already Have Solar?',
      subtitle: 'Add a battery, upgrade inverter or expand array',
      badge: 'UPGRADE & BATTERY',
      icon: ZapIcon,
      color: '#d97706',
      bg: '#fffbeb',
      btnClass: 'btn-journey-amber',
      actionText: 'Explore Solar Upgrades',
      link: '/battery/battery-upgrade'
    },
    {
      id: 'commercial',
      title: 'Commercial Business',
      subtitle: 'Reduce daytime tariffs (20kW to 100kW+)',
      badge: 'TAX WRITE-OFF',
      icon: Building2,
      color: '#2563eb',
      bg: '#eff6ff',
      btnClass: 'btn-journey-blue',
      actionText: 'Commercial Solar',
      link: '/solar/commercial-solar'
    },
    {
      id: 'bill-upload',
      title: 'Upload Power Bill',
      subtitle: 'Get an exact satellite CAD proposal in 24h',
      badge: 'FASTEST QUOTE',
      icon: UploadCloud,
      color: '#7c3aed',
      bg: '#f5f3ff',
      btnClass: 'btn-journey-purple',
      actionText: 'Upload My Bill',
      isModal: true
    }
  ];

  return (
    <section className="section journey-section" id="journey-selector">
      <div className="container-wide">
        {/* Header matching exact reference */}
        <div className="journey-header">
          <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.85rem' }}>
            <Sparkles size={14} />
            <span>TAILORED SOLAR SOLUTIONS</span>
          </div>

          <h2 className="journey-title">
            Choose Your <span className="text-emerald">Solar Journey</span>
          </h2>

          {/* Sun icon divider */}
          <div className="journey-sun-divider">
            <span className="sun-divider-line" />
            <Sun size={18} className="sun-divider-icon" />
            <span className="sun-divider-line" />
          </div>

          <p className="journey-subtitle">
            Select your situation below to get the most accurate information and instant quotes.
          </p>
        </div>

        {/* 4 Journey Cards Grid */}
        <div className="journey-cards-grid">
          {journeys.map((j) => {
            const Icon = j.icon;
            return (
              <div key={j.id} className="journey-card">
                {/* Top Row: Icon + Badge */}
                <div className="journey-card-top">
                  <div
                    className="journey-icon-wrap"
                    style={{ background: j.bg, color: j.color }}
                  >
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  <span
                    className="journey-badge"
                    style={{ background: j.bg, color: j.color }}
                  >
                    {j.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="journey-card-body">
                  <h3 className="journey-card-title">{j.title}</h3>
                  <p className="journey-card-desc">{j.subtitle}</p>
                </div>

                {/* Bottom CTA Button */}
                {j.isModal ? (
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className={`btn-journey-outline ${j.btnClass}`}
                  >
                    <span>{j.actionText}</span>
                    <ArrowRight size={16} />
                  </button>
                ) : j.isCalc ? (
                  <button
                    type="button"
                    onClick={onScrollToCalculator || (() => {})}
                    className={`btn-journey-outline ${j.btnClass}`}
                  >
                    <span>{j.actionText}</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <Link
                    to={j.link}
                    className={`btn-journey-outline ${j.btnClass}`}
                  >
                    <span>{j.actionText}</span>
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
