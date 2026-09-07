import React from 'react';
import {
  Calculator, Calendar, ArrowRight, Star, DollarSign, Check,
  ShieldCheck, Award, Users, MapPin, Sparkles, TrendingUp
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
            {/* Top Green Accreditation Pill */}
            <div className="hero-accreditation-pill hero-anim-fade-in">
              <span className="hero-accreditation-icon">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>CLEAN ENERGY COUNCIL & SAA ACCREDITED INSTALLER</span>
              <Sparkles size={13} className="hero-sparkle-icon" />
            </div>

            {/* Main Headline with Shimmer Gradient Text */}
            <h1 className="hero-reference-title hero-anim-slide-up-1">
              Slash Your Electricity Bills <br />
              with <span className="text-emerald-shimmer">Premium Brisbane</span> <br />
              <span className="text-gold-shimmer">Solar</span> from $3/Day.
            </h1>

            {/* Sub-headline */}
            <p className="hero-reference-subhead hero-anim-slide-up-2">
              High-efficiency Tier 1 solar systems with $0 upfront finance, 25-year warranty and our 30-Day Price Beat Guarantee.
            </p>

            {/* 4 Circular Trust Badges */}
            <div className="hero-trust-badges-grid hero-anim-slide-up-3">
              <div className="hero-badge-pill">
                <div className="badge-circle-icon">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div className="badge-text-wrap">
                  <div className="badge-line-1">30-Day</div>
                  <div className="badge-line-2">Price Beat</div>
                </div>
              </div>

              <div className="hero-badge-pill">
                <div className="badge-circle-icon badge-circle-text">
                  $0
                </div>
                <div className="badge-text-wrap">
                  <div className="badge-line-1">$0 Deposit</div>
                  <div className="badge-line-2">Finance</div>
                </div>
              </div>

              <div className="hero-badge-pill">
                <div className="badge-circle-icon">
                  <Award size={14} />
                </div>
                <div className="badge-text-wrap">
                  <div className="badge-line-1">25-Yr Panel</div>
                  <div className="badge-line-2">Warranty</div>
                </div>
              </div>

              <div className="hero-badge-pill">
                <div className="badge-circle-icon">
                  <Users size={14} />
                </div>
                <div className="badge-text-wrap">
                  <div className="badge-line-1">5,000+</div>
                  <div className="badge-line-2">Installs</div>
                </div>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="hero-cta-buttons-row hero-anim-slide-up-4">
              <button className="btn btn-hero-emerald btn-shimmer" onClick={onScrollToCalculator}>
                <Calculator size={18} />
                <span>Calculate My Savings</span>
                <ArrowRight size={18} className="btn-arrow-motion" />
              </button>

              <button className="btn btn-hero-outline" onClick={onOpenQuote}>
                <Calendar size={18} />
                <span>Get Free Quote</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Left-Aligned Premium Glass Location & Google Review Box */}
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
