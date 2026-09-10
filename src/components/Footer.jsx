import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="footer-exact-wrap">
      {/* Background Perspective Solar Grid Watermark (Right side) */}
      <div className="footer-bg-solar-grid" aria-hidden="true">
        <svg viewBox="0 0 450 450" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.2">
          <line x1="0" y1="40" x2="450" y2="180" />
          <line x1="0" y1="110" x2="450" y2="250" />
          <line x1="0" y1="200" x2="450" y2="330" />
          <line x1="0" y1="310" x2="450" y2="420" />
          <line x1="80" y1="0" x2="200" y2="450" />
          <line x1="180" y1="0" x2="300" y2="450" />
          <line x1="290" y1="0" x2="400" y2="450" />
          <line x1="390" y1="0" x2="450" y2="250" />
        </svg>
      </div>

      {/* Background Sun Rays Watermark (Bottom Left corner) */}
      <div className="footer-bg-sunburst" aria-hidden="true">
        <svg viewBox="0 0 240 240" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2.5">
          <circle cx="20" cy="220" r="70" />
          <line x1="20" y1="120" x2="20" y2="70" />
          <line x1="90" y1="150" x2="130" y2="110" />
          <line x1="120" y1="220" x2="170" y2="220" />
          <line x1="70" y1="100" x2="100" y2="70" />
          <line x1="20" y1="50" x2="20" y2="20" />
        </svg>
      </div>

      <div className="container-wide footer-container-inner">
        
        {/* =========================================================================
            1. TOP CTA BANNER STRIP
            ========================================================================= */}
        <div className="footer-top-banner-card">
          {/* Left: Glowing Leaf Icon + Heading & Subtext */}
          <div className="footer-banner-left">
            <div className="footer-banner-leaf-box">
              <svg className="footer-banner-leaf-svg" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            </div>
            <div className="footer-banner-text">
              <h3 className="footer-banner-headline">
                Ready to Start <span className="highlight-saving-green">Saving With Solar?</span>
              </h3>
              <p className="footer-banner-subtext">
                Get a tailored solar and battery quote from our local team.
              </p>
            </div>
          </div>

          {/* Center: Solid Green Pill Action Button */}
          <div className="footer-banner-center">
            <button
              type="button"
              onClick={onOpenQuote}
              className="footer-banner-btn"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Right: Thin Divider + Call Us Today Info */}
          <div className="footer-banner-right">
            <div className="footer-banner-divider-line" />
            <a href="tel:1300969557" className="footer-banner-call-link">
              <div className="footer-banner-phone-circle">
                <Phone size={18} />
              </div>
              <div className="footer-banner-call-text">
                <span className="footer-call-us-title">Call Us Today</span>
                <span className="footer-call-us-num">1300 969 557</span>
              </div>
            </a>
          </div>
        </div>

        {/* =========================================================================
            2. MAIN 4-COLUMN FOOTER GRID
            ========================================================================= */}
        <div className="footer-four-columns-grid">
          
          {/* -------------------------------------------------------------
              COLUMN 1: BRAND & SOCIALS
              ------------------------------------------------------------- */}
          <div className="footer-grid-col col-brand-hub">
            <Link
              to="/"
              className="footer-brand-logo-link"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Quick Solar Home"
            >
              <div className="footer-logo-brand-lockup">
                <div className="footer-logo-title-row">
                  <span className="logo-word-quick">QUICK</span>
                  <span className="logo-word-solar">
                    S
                    <span className="logo-sun-orb">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="#f59e0b" stroke="#f59e0b" strokeWidth="0.8">
                        <circle cx="12" cy="12" r="5" fill="#f59e0b" />
                        <g stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round">
                          <line x1="12" y1="1.5" x2="12" y2="4.5" />
                          <line x1="12" y1="19.5" x2="12" y2="22.5" />
                          <line x1="4.5" y1="4.5" x2="6.6" y2="6.6" />
                          <line x1="17.4" y1="17.4" x2="19.5" y2="19.5" />
                          <line x1="1.5" y1="12" x2="4.5" y2="12" />
                          <line x1="19.5" y1="12" x2="22.5" y2="12" />
                          <line x1="4.5" y1="19.5" x2="6.6" y2="17.4" />
                          <line x1="17.4" y1="6.6" x2="19.5" y2="4.5" />
                        </g>
                      </svg>
                    </span>
                    LAR
                  </span>
                </div>
                <span className="footer-logo-slogan">Where Quality Matters...</span>
              </div>
            </Link>

            <p className="footer-brand-intro-text">
              Quality solar and battery solutions for Queensland homes and businesses.
            </p>

            <div className="footer-social-wrapper">
              <h5 className="footer-follow-heading">FOLLOW US</h5>
              <div className="footer-social-icons-row">
                <a
                  href="https://www.instagram.com/quicksolarau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-outline-btn"
                  aria-label="Instagram"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/quicksolarau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-outline-btn"
                  aria-label="Facebook"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------
              COLUMN 2: QUICK LINKS
              ------------------------------------------------------------- */}
          <div className="footer-grid-col">
            <h4 className="footer-column-header">QUICK LINKS</h4>
            <div className="footer-header-green-bar" />
            <ul className="footer-links-vertical-list">
              <li>
                <Link to="/packages">6.6 kW Solar System Gold Coast</Link>
              </li>
              <li>
                <Link to="/packages">6.6 kW Solar System Brisbane</Link>
              </li>
              <li>
                <Link to="/packages">10 kW Solar System Brisbane</Link>
              </li>
              <li>
                <Link to="/packages">13.2 kW Solar System Brisbane</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* -------------------------------------------------------------
              COLUMN 3: PRODUCTS & LOCATIONS
              ------------------------------------------------------------- */}
          <div className="footer-grid-col">
            <h4 className="footer-column-header">PRODUCTS &amp; LOCATIONS</h4>
            <div className="footer-header-green-bar" />
            <ul className="footer-links-vertical-list">
              <li>
                <Link to="/products/panels/trina-vertex-s">Solar Panels Brisbane</Link>
              </li>
              <li>
                <Link to="/locations">Solar Panels Gold Coast</Link>
              </li>
              <li>
                <Link to="/locations">Solar Panels Sunshine Coast</Link>
              </li>
              <li>
                <Link to="/locations">Solar Panels Gladstone</Link>
              </li>
              <li>
                <Link to="/locations">Solar Panels Mackay</Link>
              </li>
              <li>
                <Link to="/locations">Solar Panels Toowoomba</Link>
              </li>
              <li>
                <Link to="/locations">Solar Panels Ipswich</Link>
              </li>
              <li>
                <Link to="/locations">Solar Panels Logan</Link>
              </li>
              <li>
                <Link to="/products/batteries/tesla-powerwall-3">Tesla Powerwall</Link>
              </li>
            </ul>
          </div>

          {/* -------------------------------------------------------------
              COLUMN 4: CONTACT US & ACCREDITATIONS
              ------------------------------------------------------------- */}
          <div className="footer-grid-col col-contact-hub">
            <h4 className="footer-column-header">CONTACT US</h4>
            <div className="footer-header-green-bar" />

            <h5 className="footer-offices-label">OUR OFFICES</h5>

            <div className="footer-offices-info-list">
              {/* Brisbane Office */}
              <div className="footer-office-info-item">
                <div className="footer-round-icon-badge">
                  <MapPin size={15} />
                </div>
                <div className="footer-office-text-content">
                  <span className="footer-strong-label">Brisbane:</span>
                  <span className="footer-light-text"> Level 1, 16 McDougall Street, Milton QLD 4064</span>
                </div>
              </div>

              {/* Perth Office */}
              <div className="footer-office-info-item">
                <div className="footer-round-icon-badge">
                  <MapPin size={15} />
                </div>
                <div className="footer-office-text-content">
                  <span className="footer-strong-label">Perth:</span>
                  <span className="footer-light-text"> 61 Pulchella Ramble, Banksia Grove WA 6031</span>
                </div>
              </div>

              {/* Phone Direct */}
              <div className="footer-office-info-item">
                <div className="footer-round-icon-badge">
                  <Phone size={15} />
                </div>
                <div className="footer-office-text-content">
                  <span className="footer-strong-label">Phone:</span>
                  <a href="tel:0735541345" className="footer-contact-link"> (07) 35 541 345</a>
                </div>
              </div>

              {/* Phone Toll-Free */}
              <div className="footer-office-info-item">
                <div className="footer-round-icon-badge">
                  <Phone size={15} />
                </div>
                <div className="footer-office-text-content">
                  <span className="footer-strong-label">Phone:</span>
                  <a href="tel:1300969557" className="footer-contact-link"> 1300 969 557</a>
                </div>
              </div>

              {/* Email */}
              <div className="footer-office-info-item">
                <div className="footer-round-icon-badge">
                  <Mail size={15} />
                </div>
                <div className="footer-office-text-content">
                  <span className="footer-strong-label">Email:</span>
                  <a href="mailto:info@quicksolar.com.au" className="footer-contact-link"> info@quicksolar.com.au</a>
                </div>
              </div>
            </div>

            {/* Badges side by side */}
            <div className="footer-badges-pair-row">
              {/* Clean Energy Council Member Badge */}
              <div className="footer-white-badge-card">
                <div className="cec-badge-flex-layout">
                  <div className="cec-badge-sun-symbol">
                    <svg viewBox="0 0 100 100" width="30" height="30">
                      <circle cx="50" cy="50" r="14" fill="#ea580c" />
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
                  </div>
                  <div className="cec-badge-text-stack">
                    <span className="cec-text-dark">CLEAN</span>
                    <span className="cec-text-dark">ENERGY</span>
                    <span className="cec-text-dark">COUNCIL</span>
                    <span className="cec-text-member">MEMBER</span>
                  </div>
                </div>
              </div>

              {/* Approved Seller Badge */}
              <div className="footer-white-badge-card">
                <div className="approved-seller-seal-wrap">
                  <div className="approved-seller-seal-circle">
                    <div className="approved-seller-seal-content">
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      <span className="seller-approved-word">Approved</span>
                      <span className="seller-seller-word">Seller</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            3. BOTTOM LEGAL SUB-NAV BAR
            ========================================================================= */}
        <div className="footer-bottom-legal-strip">
          <div className="footer-legal-links-list">
            <Link to="/legal/terms-and-conditions">Terms and Conditions</Link>
            <span className="footer-legal-pipe">|</span>
            <Link to="/contact">Feedback</Link>
            <span className="footer-legal-pipe">|</span>
            <Link to="/contact">Refer a Friend</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
