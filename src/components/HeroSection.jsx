import React from 'react';
import {
  Calculator, Calendar, ArrowRight, Star, DollarSign, Check,
  ShieldCheck, Award, Users, MapPin, Sparkles, TrendingUp
} from 'lucide-react';

export default function HeroSection({ onOpenQuote, onScrollToCalculator }) {
  return (
    <section className="hero-reference-section" id="top">
      {/* Ambient Animated Solar Energy Glow Orbs */}
      <div className="hero-ambient-orb hero-orb-emerald" />
      <div className="hero-ambient-orb hero-orb-gold" />

      <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-reference-grid">
          {/* Left Column: Accreditation, Headline, Subhead, 4 Trust Badges, Dual CTAs */}
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

            {/* 4 Circular Trust Badges matching exact image */}
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
          </div>

          {/* Right Column: Floating Savings Card with Floating Float Animation */}
          <div className="hero-reference-visual">
            <div className="hero-floating-savings-card hero-card-animated-float">
              {/* Live Pulsing Dot */}
              <div className="hero-live-pill">
                <span className="live-pulsing-circle" />
                <span>Live Solar Yield</span>
              </div>

              <div className="hero-savings-inner-wrap">
                <div className="savings-badge-icon">
                  <DollarSign size={22} />
                </div>
                <div>
                  <div className="savings-badge-upto">Up to</div>
                  <div className="savings-badge-amount">$2,210</div>
                  <div className="savings-badge-title">Estimated Avg Annual Savings*</div>
                  <div className="savings-badge-caption">*Based on typical 6.6kW system in QLD</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Bottom Hero Banner Strip (Exact Match to Image) */}
        <div className="hero-dark-footer-strip hero-anim-fade-in-delayed">
          <div className="hero-strip-location">
            <div className="hero-strip-pin">
              <MapPin size={16} />
            </div>
            <span>Proudly serving Brisbane, Gold Coast, Sunshine Coast, Ipswich, Toowoomba & all of Queensland.</span>
          </div>

          <div className="hero-strip-rating">
            <div className="hero-strip-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span className="hero-strip-score">4.9/5</span>
            <div className="hero-strip-google">
              <span className="google-g-icon">G</span>
              <span>From 1,200+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
