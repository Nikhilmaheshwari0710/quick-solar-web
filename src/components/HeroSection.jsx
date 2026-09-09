import React from 'react';
import {
  Calculator, Calendar, ArrowRight, Star,
  Award, Sparkles, MapPin, Zap
} from 'lucide-react';

export default function HeroSection({ onOpenQuote, onScrollToCalculator }) {
  return (
    <section className="hero-reference-section" id="top">
      {/* Background Video */}
      <video
        className="hero-bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/hero/Modern_home_with_solar_panels_202609071724.mp4" type="video/mp4" />
      </video>

      {/* Video Dark Gradient Overlay for Maximum Text Contrast */}
      <div className="hero-video-overlay" />

      {/* Ambient Animated Solar Energy Glow Orbs */}
      <div className="hero-ambient-orb hero-orb-emerald" />
      <div className="hero-ambient-orb hero-orb-gold" />

      <div className="hero-video-content-wrapper">
        <div className="hero-left-focused-layout">
          {/* Left Column Content directly over Video */}
          <div className="hero-reference-content">
            {/* Top Text Kicker - Clean Normal Text (No Pill Badge) */}
            <div className="hero-top-kicker hero-anim-fade-in">
              <Zap size={14} className="hero-kicker-icon" />
              <span>SECURE FEDERAL GOVERNMENT SOLAR BATTERY REBATE NOW</span>
              <Sparkles size={14} className="hero-kicker-sparkle" />
            </div>

            {/* Main Headline */}
            <h1 className="hero-reference-title hero-anim-slide-up-1">
              Smart Energy Starts <br />
              with <span className="text-emerald-shimmer">Solar Panels</span> <br />
              <span className="text-gold-shimmer">& Battery Systems</span>.
            </h1>

            {/* Sub-headline */}
            <p className="hero-reference-subhead hero-anim-slide-up-2">
              Keep your home Powered Day and night with Efficient solar and battery systems.
            </p>

            {/* 4 Trust & Deal Highlights - Clean Normal Text (No Pill Container / No Circles) */}
            <div className="hero-deals-text-row hero-anim-slide-up-3">
              <div
                className="hero-deal-clean-item"
                onClick={() => onOpenQuote && onOpenQuote({ package: '6.6 kW Solar System EOFY Deal', price: '$4690' })}
                style={{ cursor: 'pointer' }}
                title="View 6.6 kW Solar System EOFY Deal"
              >
                <span className="deal-kw-title">6.6 kW System</span>
                <span className="deal-dash">•</span>
                <span className="deal-price-highlight">From $4,690</span>
              </div>

              <div
                className="hero-deal-clean-item"
                onClick={() => onOpenQuote && onOpenQuote({ package: '10.56 kW Solar System EOFY Deal', price: '$6690' })}
                style={{ cursor: 'pointer' }}
                title="View 10.56 kW Solar System EOFY Deal"
              >
                <span className="deal-kw-title">10.56 kW System</span>
                <span className="deal-dash">•</span>
                <span className="deal-price-highlight">From $6,690</span>
              </div>

              <div
                className="hero-deal-clean-item"
                onClick={() => onOpenQuote && onOpenQuote({ package: '13.3 kW Solar System EOFY Deal', price: '$7890' })}
                style={{ cursor: 'pointer' }}
                title="View 13.3 kW Solar System EOFY Deal"
              >
                <span className="deal-kw-title">13.3 kW System</span>
                <span className="deal-dash">•</span>
                <span className="deal-price-highlight">From $7,890</span>
              </div>

              <div
                className="hero-deal-clean-item"
                onClick={() => onOpenQuote && onOpenQuote()}
                style={{ cursor: 'pointer' }}
                title="View EOFY Premium Deals"
              >
                <span className="deal-kw-title">EOFY Premium</span>
                <span className="deal-dash">•</span>
                <span className="deal-price-highlight">Solar Deals</span>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="hero-cta-buttons-row hero-anim-slide-up-4">
              <button className="btn btn-hero-emerald btn-shimmer" onClick={onScrollToCalculator}>
                <Calculator size={18} />
                <span>Calculate My Savings</span>
                <ArrowRight size={18} className="btn-arrow-motion" />
              </button>

              <button className="btn btn-hero-outline" onClick={() => onOpenQuote && onOpenQuote()}>
                <Calendar size={18} />
                <span>Get Free Quote</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right-Side Bottom Simple Badges Bar (Matches Screenshot) */}
        <div className="hero-right-bottom-badges-bar">
          {/* 1. Inverter 10 Yrs Warranty */}
          <div className="hero-badge-item" title="10 Years Inverter Warranty">
            <svg width="66" height="66" viewBox="0 0 100 100" className="hero-badge-svg">
              <defs>
                <linearGradient id="goldSealInv" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="40%" stopColor="#eab308" />
                  <stop offset="80%" stopColor="#ca8a04" />
                  <stop offset="100%" stopColor="#854d0e" />
                </linearGradient>
                <path id="archTopI" d="M 22 41 A 32 32 0 0 1 78 41" fill="none" />
                <path id="archBotI" d="M 18 67 A 34 34 0 0 0 82 67" fill="none" />
              </defs>
              <circle cx="50" cy="50" r="48" fill="#090d16" stroke="url(#goldSealInv)" strokeWidth="3" />
              <circle cx="50" cy="50" r="43" fill="none" stroke="url(#goldSealInv)" strokeWidth="1" strokeDasharray="2,2" />
              <g fill="#eab308">
                <polygon points="50,11 51.5,15 56,15 52.5,18 54,22 50,19.5 46,22 47.5,18 44,15 48.5,15" transform="scale(0.7) translate(21.5, 4)" />
                <polygon points="50,11 51.5,15 56,15 52.5,18 54,22 50,19.5 46,22 47.5,18 44,15 48.5,15" transform="scale(0.55) translate(20, 10)" />
                <polygon points="50,11 51.5,15 56,15 52.5,18 54,22 50,19.5 46,22 47.5,18 44,15 48.5,15" transform="scale(0.55) translate(61, 10)" />
              </g>
              <text fill="#fef08a" fontSize="7.5" fontWeight="800" letterSpacing="0.08em" textAnchor="middle">
                <textPath href="#archTopI" startOffset="50%">INVERTER</textPath>
              </text>
              <text x="50" y="59" fill="url(#goldSealInv)" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">10</text>
              <text fill="#fef08a" fontSize="6.5" fontWeight="800" letterSpacing="0.05em" textAnchor="middle">
                <textPath href="#archBotI" startOffset="50%">YEARS WARRANTY</textPath>
              </text>
            </svg>
          </div>

          {/* 2. Solar Panel 30 Yrs Warranty */}
          <div className="hero-badge-item" title="30 Years Solar Panel Warranty">
            <svg width="66" height="66" viewBox="0 0 100 100" className="hero-badge-svg">
              <defs>
                <linearGradient id="goldSealPan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="40%" stopColor="#eab308" />
                  <stop offset="80%" stopColor="#ca8a04" />
                  <stop offset="100%" stopColor="#854d0e" />
                </linearGradient>
                <path id="archTopP" d="M 18 39 A 34 34 0 0 1 82 39" fill="none" />
                <path id="archBotP" d="M 18 67 A 34 34 0 0 0 82 67" fill="none" />
              </defs>
              <circle cx="50" cy="50" r="48" fill="#090d16" stroke="url(#goldSealPan)" strokeWidth="3" />
              <circle cx="50" cy="50" r="43" fill="none" stroke="url(#goldSealPan)" strokeWidth="1" strokeDasharray="2,2" />
              <g fill="#eab308">
                <polygon points="50,11 51.5,15 56,15 52.5,18 54,22 50,19.5 46,22 47.5,18 44,15 48.5,15" transform="scale(0.7) translate(21.5, 4)" />
                <polygon points="50,11 51.5,15 56,15 52.5,18 54,22 50,19.5 46,22 47.5,18 44,15 48.5,15" transform="scale(0.55) translate(20, 10)" />
                <polygon points="50,11 51.5,15 56,15 52.5,18 54,22 50,19.5 46,22 47.5,18 44,15 48.5,15" transform="scale(0.55) translate(61, 10)" />
              </g>
              <text fill="#fef08a" fontSize="6.8" fontWeight="800" letterSpacing="0.06em" textAnchor="middle">
                <textPath href="#archTopP" startOffset="50%">SOLAR PANEL</textPath>
              </text>
              <text x="50" y="59" fill="url(#goldSealPan)" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">30</text>
              <text fill="#fef08a" fontSize="6.5" fontWeight="800" letterSpacing="0.05em" textAnchor="middle">
                <textPath href="#archBotP" startOffset="50%">YEARS WARRANTY</textPath>
              </text>
            </svg>
          </div>

          {/* 3. Clean Energy Council Member */}
          <div className="hero-badge-cec-box" title="Clean Energy Council Member">
            <svg viewBox="0 0 100 100" width="30" height="30" className="cec-sun-svg">
              <circle cx="50" cy="50" r="16" fill="none" stroke="#ea580c" strokeWidth="6" />
              <g stroke="#ea580c" strokeWidth="4.5" strokeLinecap="round">
                <line x1="50" y1="12" x2="50" y2="24" />
                <line x1="50" y1="76" x2="50" y2="88" />
                <line x1="12" y1="50" x2="24" y2="50" />
                <line x1="76" y1="50" x2="88" y2="50" />
                <line x1="23" y1="23" x2="32" y2="32" />
                <line x1="68" y1="68" x2="77" y2="77" />
                <line x1="23" y1="77" x2="32" y2="68" />
                <line x1="68" y1="32" x2="77" y2="23" />
              </g>
            </svg>
            <div className="cec-text-col">
              <span className="cec-t-top">CLEAN ENERGY</span>
              <span className="cec-t-mid">COUNCIL</span>
              <span className="cec-t-tag">MEMBER</span>
            </div>
          </div>

          {/* 4. NET Approved Seller Badge */}
          <div className="hero-badge-item" title="New Energy Tech Approved Seller">
            <svg width="66" height="66" viewBox="0 0 100 100" className="hero-badge-svg">
              <defs>
                <path id="archNetR" d="M 18 42 A 34 34 0 0 1 82 42" fill="none" />
              </defs>
              <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#0284c7" strokeWidth="3" />
              <circle cx="50" cy="50" r="41" fill="#0369a1" />
              <text fill="#0284c7" fontSize="6.5" fontWeight="900" letterSpacing="0.04em" textAnchor="middle">
                <textPath href="#archNetR" startOffset="50%">NEW ENERGY TECH</textPath>
              </text>
              <circle cx="50" cy="50" r="34" fill="#0284c7" />
              <text x="50" y="46" fill="#ffffff" fontSize="9.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">Approved</text>
              <text x="50" y="60" fill="#bae6fd" fontSize="10.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Seller</text>
            </svg>
          </div>

          {/* 5. Google 4.9 Reviews Card */}
          <div className="hero-badge-google-box" title="Google 4.9 Star Verified Customer Rating">
            <span className="google-logo-text">
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </span>
            <div className="google-score-row">
              <span className="google-val">4.9</span>
              <span className="google-stars">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
