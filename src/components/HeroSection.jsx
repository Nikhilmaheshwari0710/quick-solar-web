import React, { useState, useEffect } from 'react';
import {
  ChevronLeft, ChevronRight, Sun, Phone, ArrowRight,
  ShieldCheck, CheckCircle2, Star, Zap, BatteryCharging, Sparkles
} from 'lucide-react';

const SLIDES = [
  {
    id: 'go-solar-today',
    type: 'go-solar-today', // Screenshot 3: Exact match to 3rd design
    titleLine1: 'Go Solar Today & Start Saving',
    titleLine2: 'on Your Power Bills',
    rebateTextLine1: 'Claim Your Maximum Govt Rebate on',
    rebateTextLine2: 'Solar and Battery Storage Now!',
    bgImage: '/images/hero_go_solar_today_exact.jpg',
    packages: [
      {
        kw: '6.6 kW',
        label: 'SOLAR SYSTEM',
        price: '$4690',
        name: '6.6 kW Solar System Package ($4690)'
      },
      {
        kw: '10.56 kW',
        label: 'SOLAR SYSTEM',
        price: '$6690',
        name: '10.56 kW Solar System Package ($6690)'
      },
      {
        kw: '13.3 kW',
        label: 'SOLAR SYSTEM',
        price: '$7890',
        name: '13.3 kW Solar System Package ($7890)'
      }
    ]
  },
  {
    id: 'smarter-solar',
    type: 'smarter-solar', // Screenshot 2: Smarter Solar with 3 cards & trust row
    kicker: 'SOLAR & BATTERY PACKAGES',
    titleLine1: 'Cut Your Power Bills',
    titleLine2: 'With Smarter Solar',
    desc: 'Tailored solar and battery systems for Australian homes and businesses. Lower your energy bills, increase your energy independence and power a brighter, cleaner future.',
    bgImage: '/images/hero_smarter_solar_exact.jpg',
    packages: [
      {
        kw: '6.6 kW',
        label: 'SOLAR SYSTEM',
        price: '$4,690',
        featured: false,
        name: '6.6 kW Solar System Package'
      },
      {
        kw: '10.56 kW',
        label: 'SOLAR SYSTEM',
        price: '$6,690',
        featured: true,
        badge: 'MOST POPULAR',
        name: '10.56 kW Solar System Package (Most Popular)'
      },
      {
        kw: '13.3 kW',
        label: 'SOLAR SYSTEM',
        price: '$7,890',
        featured: false,
        name: '13.3 kW Solar System Package'
      }
    ]
  },
  {
    id: 'eofy-deals',
    type: 'eofy-deals', // Screenshot 1: EOFY Deals with Green Swoop Card
    titleLine1: 'SMART ENERGY STARTS',
    titleLine2: 'WITH SOLAR PANELS',
    descLine1: 'Keep your home Powered',
    descLine2: 'Day and night with',
    descLine3: 'Efficient solar and battery systems.',
    ribbonText: 'EOFY PREMIUM',
    dealsTitle: 'SOLAR DEALS',
    bgImage: '/images/hero_eofy_banner_exact.jpg',
    deals: [
      {
        kw: '6.6 kW',
        price: '$4690',
        sub: 'SOLAR SYSTEM',
        type: 'standard',
        packageName: '6.6 kW Solar System EOFY Deal'
      },
      {
        kw: '10.56 kW',
        price: '$6690',
        sub: 'SOLAR SYSTEM',
        type: 'reverse',
        packageName: '10.56 kW Solar System EOFY Deal'
      },
      {
        kw: '13.3 kW',
        price: '$7890',
        sub: 'SOLAR SYSTEM',
        type: 'standard',
        packageName: '13.3 kW Solar System EOFY Deal'
      }
    ]
  }
];

export default function HeroSection({ onOpenQuote, onScrollToCalculator }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = SLIDES[currentSlideIndex];

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentSlideIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentSlideIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  // Optional auto-rotation every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const handlePackageClick = (pkg) => {
    if (onOpenQuote) {
      onOpenQuote({
        package: pkg.name || `${pkg.kw} Solar Package`,
        price: pkg.price
      });
    }
  };

  const handleDealClick = (deal) => {
    if (onOpenQuote) {
      onOpenQuote({
        package: deal.packageName || `${deal.kw} Solar Package`,
        price: deal.price
      });
    }
  };

  return (
    <section className="hero-carousel-section" id="top">
      <div className="hero-carousel-wrapper">
        {/* =========================================================================
            SLIDE 3: GO SOLAR TODAY & START SAVING (SCREENSHOT 3 EXACT MATCH)
           ========================================================================= */}
        {currentSlide.type === 'go-solar-today' && (
          <div
            className="hero-gosolar-canvas hero-anim-fade-in"
            style={{ backgroundImage: `url("${currentSlide.bgImage}")` }}
          >
            {/* Left Navigation Arrow */}
            <button
              className="hero-nav-arrow hero-nav-left"
              onClick={handlePrev}
              aria-label="Previous Slide"
              title="Previous Slide"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>

            {/* Main Left Content Container */}
            <div className="hero-gosolar-content">
              {/* Top Header Row with Headline & Navy Rebate Banner */}
              <div className="hero-gosolar-header-row">
                <h1 className="hero-gosolar-title">
                  <span className="title-navy">{currentSlide.titleLine1}</span>
                  <span className="title-green">{currentSlide.titleLine2}</span>
                </h1>

                {/* Navy Angled Rebate Banner */}
                <div className="hero-gosolar-rebate-banner">
                  <span className="rebate-line-1">{currentSlide.rebateTextLine1}</span>
                  <span className="rebate-line-2">{currentSlide.rebateTextLine2}</span>
                </div>
              </div>

              {/* 3 Green Folded-Ribbon Price Cards */}
              <div className="hero-gosolar-cards-row">
                {currentSlide.packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="hero-gosolar-card"
                    onClick={() => handlePackageClick(pkg)}
                    title={`Select ${pkg.kw} for ${pkg.price}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handlePackageClick(pkg);
                      }
                    }}
                  >
                    {/* Folded Green Top Ribbon */}
                    <div className="hero-gosolar-card-ribbon">
                      <div className="ribbon-fold fold-left" />
                      <div className="ribbon-center">
                        <span>{pkg.kw}</span>
                      </div>
                      <div className="ribbon-fold fold-right" />
                    </div>

                    {/* Attached Subtitle Tag */}
                    <div className="hero-gosolar-sub-tag">
                      <span>{pkg.label}</span>
                    </div>

                    {/* Big Bold Price */}
                    <div className="hero-gosolar-price-wrap">
                      <span className="hero-gosolar-price">{pkg.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badges Strip (Bottom Left) */}
              <div className="hero-smarter-trust-strip hero-gosolar-trust-strip">
                {/* 1. 10 Year Inverter Warranty */}
                <div className="trust-seal-item" title="10 Year Inverter Warranty">
                  <svg width="44" height="44" viewBox="0 0 100 100" className="gold-seal-svg">
                    <defs>
                      <linearGradient id="gSeal3_1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef08a" />
                        <stop offset="40%" stopColor="#eab308" />
                        <stop offset="80%" stopColor="#ca8a04" />
                        <stop offset="100%" stopColor="#854d0e" />
                      </linearGradient>
                      <path id="arch3_1Top" d="M 22 41 A 32 32 0 0 1 78 41" fill="none" />
                      <path id="arch3_1Bot" d="M 18 67 A 34 34 0 0 0 82 67" fill="none" />
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="#090d16" stroke="url(#gSeal3_1)" strokeWidth="3" />
                    <circle cx="50" cy="50" r="43" fill="none" stroke="url(#gSeal3_1)" strokeWidth="1" strokeDasharray="2,2" />
                    <text fill="#fef08a" fontSize="7.5" fontWeight="800" letterSpacing="0.08em" textAnchor="middle">
                      <textPath href="#arch3_1Top" startOffset="50%">INVERTER</textPath>
                    </text>
                    <text x="50" y="59" fill="url(#gSeal3_1)" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">10</text>
                    <text fill="#fef08a" fontSize="6.5" fontWeight="800" letterSpacing="0.05em" textAnchor="middle">
                      <textPath href="#arch3_1Bot" startOffset="50%">YEARS WARRANTY</textPath>
                    </text>
                  </svg>
                  <div className="trust-seal-text">
                    <span className="seal-line-1">10 YEARS</span>
                    <span className="seal-line-2">INVERTER</span>
                    <span className="seal-line-3">WARRANTY</span>
                  </div>
                </div>

                {/* 2. 30 Year Panel Warranty */}
                <div className="trust-seal-item" title="30 Year Solar Panel Warranty">
                  <svg width="44" height="44" viewBox="0 0 100 100" className="gold-seal-svg">
                    <defs>
                      <linearGradient id="gSeal3_2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef08a" />
                        <stop offset="40%" stopColor="#eab308" />
                        <stop offset="80%" stopColor="#ca8a04" />
                        <stop offset="100%" stopColor="#854d0e" />
                      </linearGradient>
                      <path id="arch3_2Top" d="M 18 39 A 34 34 0 0 1 82 39" fill="none" />
                      <path id="arch3_2Bot" d="M 18 67 A 34 34 0 0 0 82 67" fill="none" />
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="#090d16" stroke="url(#gSeal3_2)" strokeWidth="3" />
                    <circle cx="50" cy="50" r="43" fill="none" stroke="url(#gSeal3_2)" strokeWidth="1" strokeDasharray="2,2" />
                    <text fill="#fef08a" fontSize="6.8" fontWeight="800" letterSpacing="0.06em" textAnchor="middle">
                      <textPath href="#arch3_2Top" startOffset="50%">SOLAR PANEL</textPath>
                    </text>
                    <text x="50" y="59" fill="url(#gSeal3_2)" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">30</text>
                    <text fill="#fef08a" fontSize="6.5" fontWeight="800" letterSpacing="0.05em" textAnchor="middle">
                      <textPath href="#arch3_2Bot" startOffset="50%">YEARS WARRANTY</textPath>
                    </text>
                  </svg>
                  <div className="trust-seal-text">
                    <span className="seal-line-1">30 YEARS</span>
                    <span className="seal-line-2">SOLAR PANEL</span>
                    <span className="seal-line-3">WARRANTY</span>
                  </div>
                </div>

                {/* 3. Clean Energy Council Member */}
                <div className="trust-cec-box" title="Clean Energy Council Member">
                  <svg viewBox="0 0 100 100" width="28" height="28" className="cec-sun-svg">
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

                {/* 4. NET Approved Seller */}
                <div className="trust-net-box" title="New Energy Tech Approved Seller">
                  <svg width="40" height="40" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="#0284c7" />
                    <circle cx="50" cy="50" r="40" fill="#ffffff" />
                    <circle cx="50" cy="34" fill="#0284c7" />
                    <text x="50" y="46" fill="#ffffff" fontSize="9.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">Approved</text>
                    <text x="50" y="60" fill="#bae6fd" fontSize="10.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Seller</text>
                  </svg>
                  <div className="trust-net-text">
                    <span className="net-top">Approved</span>
                    <span className="net-bot">Seller</span>
                  </div>
                </div>

                {/* 5. Google 4.9 Rating */}
                <div className="trust-google-box" title="Google 4.9 Rating (1,200+ Reviews)">
                  <span className="google-text-logo">
                    <span style={{ color: '#4285F4' }}>G</span>
                    <span style={{ color: '#EA4335' }}>o</span>
                    <span style={{ color: '#FBBC05' }}>o</span>
                    <span style={{ color: '#4285F4' }}>g</span>
                    <span style={{ color: '#34A853' }}>l</span>
                    <span style={{ color: '#EA4335' }}>e</span>
                  </span>
                  <div className="google-stars-row">
                    <span className="google-score">4.9</span>
                    <span className="google-stars-icons">★★★★★</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right Floating Contact Pill Bar */}
            <div className="hero-smarter-floating-pill">
              <a href="tel:1300969557" className="hero-pill-call-text">
                Call 1300 969 557
              </a>
              <button
                className="hero-pill-quote-btn"
                onClick={() => onOpenQuote && onOpenQuote()}
              >
                Get a Free Quote
              </button>
            </div>

            {/* Right Navigation Arrow */}
            <button
              className="hero-nav-arrow hero-nav-right"
              onClick={handleNext}
              aria-label="Next Slide"
              title="Next Slide"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>
        )}

        {/* =========================================================================
            SLIDE 2: SMARTER SOLAR WITH 3 HORIZONTAL CARDS & TRUST BADGES (SCREENSHOT 2)
           ========================================================================= */}
        {currentSlide.type === 'smarter-solar' && (
          <div
            className="hero-smarter-canvas hero-anim-fade-in"
            style={{ backgroundImage: `url("${currentSlide.bgImage}")` }}
          >
            <button
              className="hero-nav-arrow hero-nav-left"
              onClick={handlePrev}
              aria-label="Previous Slide"
              title="Previous Slide"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>

            <div className="hero-smarter-content">
              <div className="hero-smarter-kicker">
                <span>{currentSlide.kicker}</span>
                <span className="hero-kicker-line" />
              </div>

              <h1 className="hero-smarter-title">
                <span className="title-navy">{currentSlide.titleLine1}</span>
                <span className="title-green">{currentSlide.titleLine2}</span>
              </h1>

              <p className="hero-smarter-desc">
                {currentSlide.desc}
              </p>

              <div className="hero-smarter-cta-wrap">
                <button
                  className="btn-hero-smarter-quote"
                  onClick={() => onOpenQuote && onOpenQuote()}
                  id="hero-get-quote-btn"
                >
                  <Sun size={20} className="btn-sun-icon" />
                  <span>GET A FREE QUOTE</span>
                  <ChevronRight size={18} className="btn-chevron-icon" />
                </button>
              </div>

              <div className="hero-smarter-cards-row">
                {currentSlide.packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className={`hero-smarter-card ${pkg.featured ? 'is-featured' : ''}`}
                    onClick={() => handlePackageClick(pkg)}
                    title={`Select ${pkg.kw} for ${pkg.price}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handlePackageClick(pkg);
                      }
                    }}
                  >
                    {pkg.featured ? (
                      <div className="hero-card-featured-badge">
                        {pkg.badge}
                      </div>
                    ) : (
                      <div className="hero-card-badge-spacer" />
                    )}
                    <div className="hero-card-header">
                      <span>{pkg.kw}</span>
                    </div>
                    <div className="hero-card-body">
                      <span className="hero-card-sub">{pkg.label}</span>
                      <span className="hero-card-price">{pkg.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hero-smarter-trust-strip">
                <div className="trust-seal-item" title="10 Year Inverter Warranty">
                  <svg width="44" height="44" viewBox="0 0 100 100" className="gold-seal-svg">
                    <defs>
                      <linearGradient id="gSeal1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef08a" />
                        <stop offset="40%" stopColor="#eab308" />
                        <stop offset="80%" stopColor="#ca8a04" />
                        <stop offset="100%" stopColor="#854d0e" />
                      </linearGradient>
                      <path id="arch1Top" d="M 22 41 A 32 32 0 0 1 78 41" fill="none" />
                      <path id="arch1Bot" d="M 18 67 A 34 34 0 0 0 82 67" fill="none" />
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="#090d16" stroke="url(#gSeal1)" strokeWidth="3" />
                    <circle cx="50" cy="50" r="43" fill="none" stroke="url(#gSeal1)" strokeWidth="1" strokeDasharray="2,2" />
                    <text fill="#fef08a" fontSize="7.5" fontWeight="800" letterSpacing="0.08em" textAnchor="middle">
                      <textPath href="#arch1Top" startOffset="50%">INVERTER</textPath>
                    </text>
                    <text x="50" y="59" fill="url(#gSeal1)" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">10</text>
                    <text fill="#fef08a" fontSize="6.5" fontWeight="800" letterSpacing="0.05em" textAnchor="middle">
                      <textPath href="#arch1Bot" startOffset="50%">YEARS WARRANTY</textPath>
                    </text>
                  </svg>
                  <div className="trust-seal-text">
                    <span className="seal-line-1">10 YEAR</span>
                    <span className="seal-line-2">INVERTER</span>
                    <span className="seal-line-3">WARRANTY</span>
                  </div>
                </div>

                <div className="trust-seal-item" title="30 Year Solar Panel Warranty">
                  <svg width="44" height="44" viewBox="0 0 100 100" className="gold-seal-svg">
                    <defs>
                      <linearGradient id="gSeal2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef08a" />
                        <stop offset="40%" stopColor="#eab308" />
                        <stop offset="80%" stopColor="#ca8a04" />
                        <stop offset="100%" stopColor="#854d0e" />
                      </linearGradient>
                      <path id="arch2Top" d="M 18 39 A 34 34 0 0 1 82 39" fill="none" />
                      <path id="arch2Bot" d="M 18 67 A 34 34 0 0 0 82 67" fill="none" />
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="#090d16" stroke="url(#gSeal2)" strokeWidth="3" />
                    <circle cx="50" cy="50" r="43" fill="none" stroke="url(#gSeal2)" strokeWidth="1" strokeDasharray="2,2" />
                    <text fill="#fef08a" fontSize="6.8" fontWeight="800" letterSpacing="0.06em" textAnchor="middle">
                      <textPath href="#arch2Top" startOffset="50%">SOLAR PANEL</textPath>
                    </text>
                    <text x="50" y="59" fill="url(#gSeal2)" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">30</text>
                    <text fill="#fef08a" fontSize="6.5" fontWeight="800" letterSpacing="0.05em" textAnchor="middle">
                      <textPath href="#arch2Bot" startOffset="50%">YEARS WARRANTY</textPath>
                    </text>
                  </svg>
                  <div className="trust-seal-text">
                    <span className="seal-line-1">30 YEAR</span>
                    <span className="seal-line-2">PANEL</span>
                    <span className="seal-line-3">WARRANTY</span>
                  </div>
                </div>

                <div className="trust-cec-box" title="Clean Energy Council Member">
                  <svg viewBox="0 0 100 100" width="28" height="28" className="cec-sun-svg">
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

                <div className="trust-net-box" title="New Energy Tech Approved Seller">
                  <svg width="40" height="40" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="#0284c7" />
                    <circle cx="50" cy="50" r="40" fill="#ffffff" />
                    <circle cx="50" cy="34" fill="#0284c7" />
                    <text x="50" y="46" fill="#ffffff" fontSize="9.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">Approved</text>
                    <text x="50" y="60" fill="#bae6fd" fontSize="10.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Seller</text>
                  </svg>
                  <div className="trust-net-text">
                    <span className="net-top">Approved</span>
                    <span className="net-bot">Seller</span>
                  </div>
                </div>

                <div className="trust-google-box" title="Google 4.9 Rating (1,200+ Reviews)">
                  <span className="google-text-logo">
                    <span style={{ color: '#4285F4' }}>G</span>
                    <span style={{ color: '#EA4335' }}>o</span>
                    <span style={{ color: '#FBBC05' }}>o</span>
                    <span style={{ color: '#4285F4' }}>g</span>
                    <span style={{ color: '#34A853' }}>l</span>
                    <span style={{ color: '#EA4335' }}>e</span>
                  </span>
                  <div className="google-stars-row">
                    <span className="google-score">4.9</span>
                    <span className="google-stars-icons">★★★★★</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-smarter-battery-ready-badge" title="Battery Ready Solar Systems">
              <BatteryCharging size={16} />
              <span>BATTERY READY</span>
            </div>

            <div className="hero-smarter-floating-pill">
              <a href="tel:1300969557" className="hero-pill-call-text">
                Call 1300 969 557
              </a>
              <button
                className="hero-pill-quote-btn"
                onClick={() => onOpenQuote && onOpenQuote()}
              >
                Get a Free Quote
              </button>
            </div>

            <button
              className="hero-nav-arrow hero-nav-right"
              onClick={handleNext}
              aria-label="Next Slide"
              title="Next Slide"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>
        )}

        {/* =========================================================================
            SLIDE 1: EOFY PREMIUM SOLAR DEALS WITH GREEN SWOOP CARD (SCREENSHOT 1)
           ========================================================================= */}
        {currentSlide.type === 'eofy-deals' && (
          <div
            className="hero-eofy-banner-canvas hero-anim-fade-in"
            style={{ backgroundImage: `url("${currentSlide.bgImage}")` }}
          >
            <div className="hero-eofy-bg-overlay" />

            <button
              className="hero-nav-arrow hero-nav-left"
              onClick={handlePrev}
              aria-label="Previous Slide"
              title="Previous Slide"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>

            <div className="hero-eofy-left-card">
              <h1 className="hero-eofy-main-title">
                <span className="hero-eofy-title-white">{currentSlide.titleLine1}</span>
                <span className="hero-eofy-title-gold">{currentSlide.titleLine2}</span>
              </h1>

              <div className="hero-eofy-description">
                <p className="hero-eofy-desc-line-1">{currentSlide.descLine1}</p>
                <p className="hero-eofy-desc-line-2">{currentSlide.descLine2}</p>
                <p className="hero-eofy-desc-line-3">{currentSlide.descLine3}</p>
              </div>
            </div>

            <div className="hero-eofy-right-deals">
              <div className="hero-eofy-ribbon-container">
                <div className="hero-eofy-ribbon-tail hero-eofy-tail-left" />
                <div className="hero-eofy-ribbon-body">
                  <span>{currentSlide.ribbonText}</span>
                </div>
                <div className="hero-eofy-ribbon-tail hero-eofy-tail-right" />
              </div>

              <h2 className="hero-eofy-deals-heading">
                {currentSlide.dealsTitle}
              </h2>

              <div className="hero-eofy-deals-list">
                {currentSlide.deals.map((deal, idx) => (
                  <div
                    key={idx}
                    className={`hero-eofy-deal-item hero-deal-${deal.type}`}
                    onClick={() => handleDealClick(deal)}
                    title={`Select ${deal.kw} package for ${deal.price}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleDealClick(deal);
                      }
                    }}
                  >
                    {deal.type === 'reverse' ? (
                      <>
                        <div className="hero-eofy-price-col">
                          <span className="hero-eofy-price-text">{deal.price}</span>
                          <span className="hero-eofy-badge-sub">{deal.sub}</span>
                        </div>
                        <div className="hero-eofy-kw-pill">
                          <span>{deal.kw}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="hero-eofy-kw-pill">
                          <span>{deal.kw}</span>
                        </div>
                        <div className="hero-eofy-price-col">
                          <span className="hero-eofy-price-text">{deal.price}</span>
                          <span className="hero-eofy-badge-sub">{deal.sub}</span>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              className="hero-nav-arrow hero-nav-right"
              onClick={handleNext}
              aria-label="Next Slide"
              title="Next Slide"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>
        )}

        {/* =========================================================================
            UNIFIED BOTTOM SLIDE DOTS INDICATOR (CENTERED AT BOTTOM OF HERO SECTION)
           ========================================================================= */}
        <div className="hero-carousel-bottom-dots" aria-label="Carousel Pagination">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              className={`hero-bottom-dot ${idx === currentSlideIndex ? 'active' : ''}`}
              onClick={() => setCurrentSlideIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
