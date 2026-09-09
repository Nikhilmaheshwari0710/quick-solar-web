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

            {/* Left-Aligned Premium Location & Google Review Box */}
            <div className="hero-bottom-proof-box hero-anim-fade-in-delayed">
              {/* Row 1: Serving Locations */}
              <div className="proof-box-row proof-box-location">
                <div className="proof-icon-circle">
                  <MapPin size={14} />
                </div>
                <span>Proudly serving Brisbane, Gold Coast, Sunshine Coast, Ipswich & QLD</span>
              </div>

              {/* Row 2: Rating & Google Reviews */}
              <div className="proof-box-row proof-box-rating">
                <div className="proof-stars-wrap">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <span className="proof-score">4.9/5</span>
                <span className="proof-bullet">•</span>
                <div className="proof-google-wrap">
                  <span className="google-g-icon">G</span>
                  <span>From 1,200+ Google Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
