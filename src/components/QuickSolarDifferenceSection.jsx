import React from 'react';
import { ArrowRight, Phone, Check } from 'lucide-react';

export default function QuickSolarDifferenceSection({ onOpenQuote }) {
  const steps = [
    {
      id: 'step-1',
      stepNum: '01',
      stepLabel: 'UNDERSTAND',
      title: 'We analyse your bills',
      description:
        'Our consultants work out the systems that will deliver the best value and return.',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" fill="none" className="qs-step-custom-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Document with folded corner */}
          <path
            d="M30 18 C30 15.7909 31.7909 14 34 14 H54 L68 28 V76 C68 78.2091 66.2091 80 64 80 H34 C31.7909 80 30 78.2091 30 76 V18 Z"
            fill="#FFFFFF"
            stroke="#0AA8EF"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path d="M54 14 V28 H68" fill="#E5F6FD" stroke="#0AA8EF" strokeWidth="3.5" strokeLinejoin="round" />
          
          {/* Bar chart bars inside document */}
          <rect x="38" y="58" width="5" height="13" rx="1.5" fill="#0AA8EF" />
          <rect x="46" y="50" width="5" height="21" rx="1.5" fill="#39AF35" />
          <rect x="54" y="42" width="5" height="29" rx="1.5" fill="#0AA8EF" />
          
          {/* Magnifying Glass overlaying bottom right */}
          <circle cx="60" cy="62" r="13" fill="#FFFFFF" stroke="#082950" strokeWidth="4" />
          <path d="M55.5 62 L58.5 65 L64.5 59" stroke="#39AF35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M70 72 L80 82" stroke="#082950" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'step-2',
      stepNum: '02',
      stepLabel: 'CHOOSE',
      title: 'You choose the design',
      description:
        'Receive a proposal and select the product and price point right for you.',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" fill="none" className="qs-step-custom-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Sun at top */}
          <circle cx="50" cy="24" r="6.5" stroke="#39AF35" strokeWidth="3" fill="none" />
          <line x1="50" y1="12" x2="50" y2="15.5" stroke="#39AF35" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="32.5" x2="50" y2="36" stroke="#39AF35" strokeWidth="3" strokeLinecap="round" />
          <line x1="38" y1="24" x2="41.5" y2="24" stroke="#39AF35" strokeWidth="3" strokeLinecap="round" />
          <line x1="58.5" y1="24" x2="62" y2="24" stroke="#39AF35" strokeWidth="3" strokeLinecap="round" />
          <line x1="41.5" y1="15.5" x2="44" y2="18" stroke="#39AF35" strokeWidth="3" strokeLinecap="round" />
          <line x1="56" y1="30" x2="58.5" y2="32.5" stroke="#39AF35" strokeWidth="3" strokeLinecap="round" />
          <line x1="41.5" y1="32.5" x2="44" y2="30" stroke="#39AF35" strokeWidth="3" strokeLinecap="round" />
          <line x1="56" y1="18" x2="58.5" y2="15.5" stroke="#39AF35" strokeWidth="3" strokeLinecap="round" />
          
          {/* Solar Panel Grid */}
          <polygon points="31,41 69,41 76,69 24,69" fill="#FFFFFF" stroke="#082950" strokeWidth="3.5" strokeLinejoin="round" />
          <line x1="50" y1="41" x2="50" y2="69" stroke="#0AA8EF" strokeWidth="3" />
          <line x1="40" y1="41" x2="36.5" y2="69" stroke="#0AA8EF" strokeWidth="2.5" />
          <line x1="60" y1="41" x2="63.5" y2="69" stroke="#0AA8EF" strokeWidth="2.5" />
          <line x1="27.5" y1="55" x2="72.5" y2="55" stroke="#0AA8EF" strokeWidth="2.5" />
          
          {/* Green Check Badge */}
          <circle cx="68" cy="65" r="12" fill="#39AF35" stroke="#FFFFFF" strokeWidth="3" />
          <path d="M63 65 L66.5 68.5 L73 61.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'step-3',
      stepNum: '03',
      stepLabel: 'SUPPORT',
      title: 'With you all the way',
      description: (
        <>
          Quick Solar is your one stop shop from{' '}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (onOpenQuote) {
                onOpenQuote({ package: 'Full Service Support & Installation' });
              }
            }}
            className="diff-link-highlight"
          >
            support
          </a>{' '}
          to installation, even cleaning.
        </>
      ),
      renderIcon: () => (
        <svg viewBox="0 0 100 100" fill="none" className="qs-step-custom-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Customer Support Headset */}
          <path d="M32 49 C32 39.0589 40.0589 31 50 31 C59.9411 31 68 39.0589 68 49 V58" stroke="#082950" strokeWidth="4" strokeLinecap="round" />
          <rect x="28" y="46" width="8" height="16" rx="4" fill="#082950" />
          <rect x="64" y="46" width="8" height="16" rx="4" fill="#082950" />
          <path d="M36 57 C36 67 45 71 54 71 H57" stroke="#082950" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="59" cy="71" r="3.5" fill="#082950" />
          
          {/* Left Green Sun Emblem */}
          <circle cx="28" cy="66" r="8.5" fill="#FFFFFF" stroke="#39AF35" strokeWidth="2.5" />
          <line x1="28" y1="59" x2="28" y2="61" stroke="#39AF35" strokeWidth="2" strokeLinecap="round" />
          <line x1="28" y1="71" x2="28" y2="73" stroke="#39AF35" strokeWidth="2" strokeLinecap="round" />
          <line x1="21" y1="66" x2="23" y2="66" stroke="#39AF35" strokeWidth="2" strokeLinecap="round" />
          <line x1="33" y1="66" x2="35" y2="66" stroke="#39AF35" strokeWidth="2" strokeLinecap="round" />
          <circle cx="28" cy="66" r="3.5" fill="#39AF35" />
          
          {/* Right Blue Shield Badge with check */}
          <path d="M72 61 V69 C72 74 66 78 66 78 C66 78 60 74 60 69 V61 L66 58 L72 61 Z" fill="#0AA8EF" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M63 68 L65 70 L69 66" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const handleOpenQuote = () => {
    if (onOpenQuote) {
      onOpenQuote({ package: 'The Quick Solar Difference Proposal' });
    }
  };

  return (
    <section className="qs-diff-section" id="difference">
      {/* Background Decorative Artwork (Sunburst and Solar Panel Perspective) */}
      <div className="qs-diff-bg-decor" aria-hidden="true">
        {/* Left Solar Panel Grid Lines */}
        <svg className="qs-diff-bg-grid-left" viewBox="0 0 600 600" fill="none">
          <path d="M-80 140 L300 560 M60 60 L440 560 M200 0 L580 560" stroke="#0aa8ef" strokeOpacity="0.12" strokeWidth="2" />
          <path d="M-80 320 L580 180 M-80 440 L580 300" stroke="#0aa8ef" strokeOpacity="0.12" strokeWidth="2" />
        </svg>

        {/* Right Radiant Sunburst Glow & Rays */}
        <svg className="qs-diff-bg-sun-right" viewBox="0 0 700 700" fill="none">
          <circle cx="560" cy="140" r="220" fill="url(#sunGlowGradExact)" />
          <circle cx="560" cy="140" r="160" stroke="#0aa8ef" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="6 8" />
          <circle cx="560" cy="140" r="100" stroke="#0aa8ef" strokeOpacity="0.18" strokeWidth="2" />
          <circle cx="560" cy="140" r="50" fill="#0aa8ef" fillOpacity="0.04" />
          
          {/* Sun Rays */}
          <line x1="560" y1="-80" x2="560" y2="360" stroke="#0aa8ef" strokeOpacity="0.15" strokeWidth="2" />
          <line x1="340" y1="140" x2="780" y2="140" stroke="#0aa8ef" strokeOpacity="0.15" strokeWidth="2" />
          <line x1="400" y1="-20" x2="720" y2="300" stroke="#0aa8ef" strokeOpacity="0.15" strokeWidth="2" />
          <line x1="400" y1="300" x2="720" y2="-20" stroke="#0aa8ef" strokeOpacity="0.15" strokeWidth="2" />
          
          <defs>
            <radialGradient id="sunGlowGradExact" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
              <stop offset="45%" stopColor="#bae6fd" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#eff7fc" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container-wide qs-diff-container">
        
        {/* Section Header */}
        <div className="qs-diff-header">
          <div className="qs-diff-kicker">
            <span className="qs-kicker-text">HOW WE WORK WITH YOU</span>
          </div>

          <h2 className="qs-diff-title">The Quick Solar Difference</h2>
          
          <p className="qs-diff-subtitle">
            We provide simple and straightforward proposals backed by full-service support. So you can start saving, sooner.
          </p>
        </div>

        {/* 3 Steps Pipeline Container */}
        <div className="qs-diff-pipeline-wrapper">
          
          {/* Desktop Connecting Dashed Arc & Intermediate Cyan Nodes */}
          <div className="qs-diff-track-layer" aria-hidden="true">
            <svg className="qs-diff-track-svg" viewBox="0 0 1000 120" preserveAspectRatio="none">
              {/* Dashed Connecting Curve */}
              <path
                d="M 166 68 Q 333 22, 500 68 T 833 68"
                stroke="#0aa8ef"
                strokeWidth="2.5"
                strokeDasharray="4 6"
                strokeLinecap="round"
                fill="none"
              />
              {/* Cyan Connection Node 1 */}
              <circle cx="333" cy="45" r="7.5" fill="#0aa8ef" stroke="#ffffff" strokeWidth="3" />
              {/* Cyan Connection Node 2 */}
              <circle cx="667" cy="45" r="7.5" fill="#0aa8ef" stroke="#ffffff" strokeWidth="3" />
            </svg>
          </div>

          {/* 3 Step Cards Grid */}
          <div className="qs-diff-cards-grid">
            {steps.map((step) => (
              <div key={step.id} className="qs-diff-card">
                {/* Step Top Header Tag */}
                <div className="qs-step-top-tag">
                  <span className="qs-step-tag-num">{step.stepNum}</span>
                  <span className="qs-step-tag-bullet">•</span>
                  <span className="qs-step-tag-label">{step.stepLabel}</span>
                </div>

                {/* Circular Icon Circle */}
                <div className="qs-step-icon-circle">
                  {step.renderIcon()}
                </div>

                {/* Card Title & Content */}
                <h3 className="qs-step-card-title">{step.title}</h3>
                <p className="qs-step-card-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Area: Green Button, Phone Link, and Features */}
        <div className="qs-diff-bottom-dock">
          {/* Main Proposal CTA Button */}
          <button
            type="button"
            className="qs-diff-proposal-btn"
            onClick={handleOpenQuote}
          >
            <span>GET YOUR SOLAR PROPOSAL</span>
            <ArrowRight size={18} className="qs-btn-arrow" />
          </button>

          {/* Direct Phone Contact Row */}
          <div className="qs-diff-phone-row">
            <a href="tel:1300969557" className="qs-diff-phone-link">
              <span className="qs-diff-phone-icon-wrap">
                <Phone size={14} />
              </span>
              <span className="qs-diff-phone-text">
                Talk to our team: <strong className="qs-diff-phone-num">1300 969 557</strong>
              </span>
            </a>
          </div>

          {/* 3 Feature Trust Badges */}
          <div className="qs-diff-features-row">
            <div className="qs-diff-feature-item">
              <span className="qs-diff-check-badge">
                <Check size={12} strokeWidth={3.5} />
              </span>
              <span>Clear Recommendations</span>
            </div>
            <div className="qs-diff-feature-item">
              <span className="qs-diff-check-badge">
                <Check size={12} strokeWidth={3.5} />
              </span>
              <span>Customer Choice</span>
            </div>
            <div className="qs-diff-feature-item">
              <span className="qs-diff-check-badge">
                <Check size={12} strokeWidth={3.5} />
              </span>
              <span>End-to-End Support</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
