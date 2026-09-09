import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-modern-wrap">
      {/* Subtle Top Glow Accent */}
      <div className="footer-glow-bar" />

      <div className="container-wide">
        
        {/* Main 4-Column Modern Grid */}
        <div className="footer-modern-grid">
          
          {/* Column 1: Brand Hub & Socials */}
          <div className="footer-modern-col footer-col-brand-hub">
            <Link
              to="/"
              className="footer-brand-logo-card"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Quick Solar Home"
            >
              <img
                src="/images/quick_solar_logo.png"
                alt="Quick Solar - Where Quality Matters"
                className="footer-logo-img"
              />
            </Link>

            <p className="footer-brand-tagline">
              Where Quality Matters. Delivering CEC-accredited tier-1 solar panel and smart battery storage systems across Australia.
            </p>

            <div className="footer-modern-socials">
              <span className="footer-socials-label">Get Social</span>
              <div className="footer-social-pill-group">
                <a
                  href="https://www.instagram.com/quicksolarau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/quicksolarau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {onOpenQuote && (
              <button
                type="button"
                onClick={onOpenQuote}
                className="footer-quick-cta-btn"
              >
                <Sparkles size={16} />
                <span>Get Instant Quote</span>
                <ArrowUpRight size={16} />
              </button>
            )}
          </div>

          {/* Column 2: Important Links */}
          <div className="footer-modern-col">
            <h4 className="footer-modern-title">
              <span>Important Links</span>
              <div className="title-accent-line" />
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/packages">
                  <span className="link-bullet">›</span>
                  <span>6.6kW Solar System Gold Coast</span>
                </Link>
              </li>
              <li>
                <Link to="/packages">
                  <span className="link-bullet">›</span>
                  <span>6.6kW Solar System Brisbane – Affordable 6kW Solar Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/packages">
                  <span className="link-bullet">›</span>
                  <span>10kW Solar System Brisbane – Expert Solar Panels &amp; Installation</span>
                </Link>
              </li>
              <li>
                <Link to="/packages">
                  <span className="link-bullet">›</span>
                  <span>13.2kW Solar System Brisbane – High-Performance Solar Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs">
                  <span className="link-bullet">›</span>
                  <span>FAQs</span>
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <span className="link-bullet">›</span>
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy">
                  <span className="link-bullet">›</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product */}
          <div className="footer-modern-col">
            <h4 className="footer-modern-title">
              <span>Product</span>
              <div className="title-accent-line" />
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/products/panels/trina-vertex-s">
                  <span className="link-bullet">›</span>
                  <span>Solar Panels Brisbane</span>
                </Link>
              </li>
              <li>
                <Link to="/locations">
                  <span className="link-bullet">›</span>
                  <span>Solar Panels Gold Coast</span>
                </Link>
              </li>
              <li>
                <Link to="/locations">
                  <span className="link-bullet">›</span>
                  <span>Solar Panels Sunshine Coast</span>
                </Link>
              </li>
              <li>
                <Link to="/locations">
                  <span className="link-bullet">›</span>
                  <span>Solar Panels Gladstone</span>
                </Link>
              </li>
              <li>
                <Link to="/locations">
                  <span className="link-bullet">›</span>
                  <span>Solar Panels Mackay</span>
                </Link>
              </li>
              <li>
                <Link to="/locations">
                  <span className="link-bullet">›</span>
                  <span>Solar Panels Toowoomba</span>
                </Link>
              </li>
              <li>
                <Link to="/locations">
                  <span className="link-bullet">›</span>
                  <span>Solar Panels Ipswich</span>
                </Link>
              </li>
              <li>
                <Link to="/locations">
                  <span className="link-bullet">›</span>
                  <span>Solar Panels Logan</span>
                </Link>
              </li>
              <li>
                <Link to="/products/batteries/tesla-powerwall-3">
                  <span className="link-bullet">›</span>
                  <span>Tesla Powerwall</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact, Office & Accreditation Badges */}
          <div className="footer-modern-col footer-col-contact-hub">
            <h4 className="footer-modern-title">
              <span>Contact</span>
              <div className="title-accent-line" />
            </h4>

            {/* Office Locations */}
            <div className="footer-locations-card">
              <div className="location-card-header">
                <MapPin size={16} className="text-emerald" />
                <h5 className="office-subhead">Our Office</h5>
              </div>

              <div className="office-location-entry">
                <span className="city-tag">Brisbane:</span>
                <p className="city-address">Level 1, 16 McDougall Street, Milton QLD 4064</p>
              </div>

              <div className="office-location-entry">
                <span className="city-tag">Perth:</span>
                <p className="city-address">61 Pulchella Ramble, Banksia Grove WA 6031</p>
              </div>

              <div className="office-email-row">
                <Mail size={15} className="text-emerald" />
                <span className="email-label">Email:</span>
                <a href="mailto:info@quicksolar.com.au" className="email-link">info@quicksolar.com.au</a>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="footer-phone-glow-card">
              <div className="phone-card-header">
                <Phone size={16} className="text-emerald animate-pulse" />
                <span className="phone-card-title">Phone Support</span>
              </div>
              <div className="phone-links-grid">
                <a href="tel:0735541345" className="direct-phone-pill">
                  <span className="phone-label">Direct</span>
                  <span className="phone-num">(07) 35 541 345</span>
                </a>
                <a href="tel:1300969557" className="direct-phone-pill is-tollfree">
                  <span className="phone-label">Toll Free</span>
                  <span className="phone-num">1300 969 557</span>
                </a>
              </div>
            </div>

            {/* Official Certification & Accreditation Badges */}
            <div className="footer-modern-badges-wrap">
              
              {/* Clean Energy Council Member Badge */}
              <div className="modern-badge-glass-card">
                <svg className="cec-sun-logo" viewBox="0 0 100 100" width="34" height="34">
                  <circle cx="50" cy="50" r="18" fill="none" stroke="#ea580c" strokeWidth="5.5" />
                  <g stroke="#ea580c" strokeWidth="3.5" strokeLinecap="round">
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
                <div className="modern-badge-info">
                  <span className="badge-line-1">CLEAN</span>
                  <span className="badge-line-2">ENERGY</span>
                  <span className="badge-line-3">COUNCIL</span>
                  <span className="badge-tag-amber">MEMBER</span>
                </div>
              </div>

              {/* CEC Approved Seller Badge */}
              <div className="modern-badge-glass-card">
                <div className="modern-seller-seal">
                  <span className="seal-prefix">SOLAR</span>
                  <span className="seal-main">Approved</span>
                  <span className="seal-main">Seller</span>
                </div>
                <div className="modern-badge-info">
                  <span className="badge-line-1">APPROVED</span>
                  <span className="badge-line-2">SOLAR</span>
                  <span className="badge-line-3">RETAILER</span>
                  <span className="badge-tag-emerald">CERTIFIED</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modern Polished Bottom Strip */}
        <div className="footer-modern-bottom">
          <div className="footer-bottom-flex">
            <p className="footer-copyright-text">
              © {currentYear} Quick Solar Australia Pty Ltd. All rights reserved. Clean Energy Council Approved Solar Retailer.
            </p>
            <div className="footer-trust-assurances">
              <span className="trust-pill">
                <ShieldCheck size={14} className="text-emerald" />
                <span>256-Bit SSL Encrypted</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={14} className="text-emerald" />
                <span>CEC &amp; SAA Accredited</span>
              </span>
              <span className="trust-pill">
                <Sparkles size={14} className="text-gold" />
                <span>25-Yr Warranty</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

