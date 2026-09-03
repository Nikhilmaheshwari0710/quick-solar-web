import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sun, Menu, X, ArrowRight, ChevronDown, Calculator,
  BatteryCharging, Building2, Home, Wrench, Shield,
  Award, FileText, HelpCircle, MapPin, DollarSign, BookOpen, Sparkles, Scale, Lock
} from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-wide navbar-container">
          {/* Brand Logo - Scrolls to Top of Homepage */}
          <Link to="/" className="brand-logo-img-link" onClick={handleLogoClick} aria-label="Quick Solar Home">
            <img
              src="/images/quick_solar_logo.png"
              alt="Quick Solar - Where Quality Matters"
              className="brand-logo-img"
            />
          </Link>

          {/* Desktop Navigation - Exact Requested Items */}
          <div className="nav-links">
            {/* 1. Service & Product (Dropdown Left) */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveDropdown('services-products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/solar/residential-solar" className={`nav-link ${activeDropdown === 'services-products' ? 'active' : ''}`}>
                <span>Service & Product</span>
                <ChevronDown size={14} className="dropdown-arrow" />
              </Link>
              {activeDropdown === 'services-products' && (
                <div className="mega-dropdown mega-dropdown-left" style={{ width: '380px' }}>
                  <Link to="/solar/residential-solar" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Home size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Residential Solar</div>
                      <div className="mega-desc">6.6kW, 10.5kW & 13.2kW systems from $3/day</div>
                    </div>
                  </Link>
                  <Link to="/solar/commercial-solar" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Commercial Solar</div>
                      <div className="mega-desc">20kW to 100kW+ business & warehouse systems</div>
                    </div>
                  </Link>
                  <Link to="/battery/solar-plus-battery" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Solar + Battery Packages</div>
                      <div className="mega-desc">24/7 total energy independence packages</div>
                    </div>
                  </Link>
                  <Link to="/products/solar-panels" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Sun size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Solar Panels</div>
                      <div className="mega-desc">Jinko, Trina & LONGi Tier-1 N-Type</div>
                    </div>
                  </Link>
                  <Link to="/products/inverters" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Smart Inverters</div>
                      <div className="mega-desc">Sungrow, Fronius & GoodWe hybrid units</div>
                    </div>
                  </Link>
                  <Link to="/battery/solar-batteries" className="mega-item">
                    <div className="mega-icon-wrap">
                      <BatteryCharging size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Solar Batteries & Storage</div>
                      <div className="mega-desc">Tesla Powerwall 3 & Sungrow SBR</div>
                    </div>
                  </Link>
                  <Link to="/battery/battery-upgrade" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Sun size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Battery Upgrade / Retrofit</div>
                      <div className="mega-desc">Add storage to your existing solar panels</div>
                    </div>
                  </Link>
                  <Link to="/solar/solar-installation" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Wrench size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Installation Process</div>
                      <div className="mega-desc">SAA certified half-day installation workflow</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 2. Projects (Direct Link) */}
            <Link to="/projects" className="nav-link">
              <span>Projects</span>
            </Link>

            {/* 3. FAQ (Direct Link) */}
            <Link to="/resources/faqs" className="nav-link">
              <span>FAQ</span>
            </Link>

            {/* 4. Legal & Policy (Dropdown Right) */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveDropdown('legal-policy')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/legal/privacy-policy" className={`nav-link ${activeDropdown === 'legal-policy' ? 'active' : ''}`}>
                <span>Legal & Policy</span>
                <ChevronDown size={14} className="dropdown-arrow" />
              </Link>
              {activeDropdown === 'legal-policy' && (
                <div className="mega-dropdown mega-dropdown-right" style={{ width: '320px' }}>
                  <Link to="/legal/privacy-policy" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Lock size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Privacy Policy</div>
                      <div className="mega-desc">How we protect customer data</div>
                    </div>
                  </Link>
                  <Link to="/legal/terms-and-conditions" className="mega-item">
                    <div className="mega-icon-wrap">
                      <FileText size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Terms & Conditions</div>
                      <div className="mega-desc">System supply & installation terms</div>
                    </div>
                  </Link>
                  <Link to="/legal/disclaimer" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Scale size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Disclaimer</div>
                      <div className="mega-desc">Savings & generation disclaimers</div>
                    </div>
                  </Link>
                  <Link to="/legal/cookie-policy" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Shield size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Cookie Policy</div>
                      <div className="mega-desc">Website usage & analytics cookies</div>
                    </div>
                  </Link>
                  <Link to="/legal/refund-policy" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Award size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Refund & Cancellation Policy</div>
                      <div className="mega-desc">Consumer guarantees & cooling off</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 5. About Us (Dropdown Right) */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveDropdown('about-us')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/company/about-us" className={`nav-link ${activeDropdown === 'about-us' ? 'active' : ''}`}>
                <span>About Us</span>
                <ChevronDown size={14} className="dropdown-arrow" />
              </Link>
              {activeDropdown === 'about-us' && (
                <div className="mega-dropdown mega-dropdown-right" style={{ width: '340px' }}>
                  <Link to="/company/about-us" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div className="mega-title">About Quick Solar</div>
                      <div className="mega-desc">Australian owned & CEC Approved Seller</div>
                    </div>
                  </Link>
                  <Link to="/company/why-quick-solar" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Award size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Why Quick Solar</div>
                      <div className="mega-desc">30-Day Price Beat Guarantee & warranties</div>
                    </div>
                  </Link>
                  <Link to="/finance" className="mega-item">
                    <div className="mega-icon-wrap">
                      <DollarSign size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Finance & $0 Deposit</div>
                      <div className="mega-desc">Brighte payments from $3/day & STCs</div>
                    </div>
                  </Link>
                  <Link to="/resources/blog" className="mega-item">
                    <div className="mega-icon-wrap">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Solar Guides & News</div>
                      <div className="mega-desc">Pricing, battery tips & Energex rules</div>
                    </div>
                  </Link>
                  <Link to="/locations" className="mega-item">
                    <div className="mega-icon-wrap">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Locations & Service Areas</div>
                      <div className="mega-desc">Brisbane, Logan, Ipswich & WA</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 6. Contact Us (Direct Link) */}
            <Link to="/contact" className="nav-link">
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Action CTA Button - Gold 'Get Free Quote ->' */}
          <div className="nav-cta-wrap">
            <button className="btn btn-nav-gold" onClick={onOpenQuote}>
              <span>Get Free Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', overflowY: 'auto', maxHeight: 'calc(100vh - 180px)' }}>
          <Link to="/" className="mobile-nav-link">Home</Link>
          <Link to="/solar/residential-solar" className="mobile-nav-link">Service & Product: Residential Solar</Link>
          <Link to="/solar/commercial-solar" className="mobile-nav-link">Service & Product: Commercial Solar</Link>
          <Link to="/battery/solar-plus-battery" className="mobile-nav-link">Service & Product: Solar + Battery</Link>
          <Link to="/products/solar-panels" className="mobile-nav-link">Service & Product: Solar Panels</Link>
          <Link to="/products/inverters" className="mobile-nav-link">Service & Product: Smart Inverters</Link>
          <Link to="/battery/solar-batteries" className="mobile-nav-link">Service & Product: Solar Batteries</Link>
          <Link to="/projects" className="mobile-nav-link">Projects</Link>
          <Link to="/resources/faqs" className="mobile-nav-link">FAQ</Link>
          <Link to="/legal/privacy-policy" className="mobile-nav-link">Legal & Policy</Link>
          <Link to="/company/about-us" className="mobile-nav-link">About Us</Link>
          <Link to="/contact" className="mobile-nav-link">Contact Us</Link>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button className="btn btn-nav-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}>
            <span>Get Free Solar Quote</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
