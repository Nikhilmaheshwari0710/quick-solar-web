import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sun, Menu, X, ArrowRight, ChevronDown,
  BatteryCharging, Building2, Wrench,
  Award, MapPin, DollarSign, BookOpen, Sparkles, Cpu
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

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
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
            {/* 1. Home */}
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleLogoClick}
            >
              <span>Home</span>
            </Link>

            {/* 2. About us (Dropdown) */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveDropdown('about-us')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/about-us"
                className={`nav-link ${isActive('/about-us') || activeDropdown === 'about-us' ? 'active' : ''}`}
              >
                <span>About us</span>
                <ChevronDown size={14} className="dropdown-arrow" />
              </Link>
              {activeDropdown === 'about-us' && (
                <div className="mega-dropdown mega-dropdown-left" style={{ width: '340px' }}>
                  <Link to="/about-us" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div className="mega-title">About Quick Solar</div>
                      <div className="mega-desc">Australian owned & CEC Approved Solar Retailer</div>
                    </div>
                  </Link>
                  <Link to="/company/why-quick-solar" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Award size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Why Quick Solar</div>
                      <div className="mega-desc">30-Day Price Beat Guarantee & 25-Year Warranty</div>
                    </div>
                  </Link>
                  <Link to="/finance" className="mega-item">
                    <div className="mega-icon-wrap">
                      <DollarSign size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Finance & Rebates</div>
                      <div className="mega-desc">STCs, Federal Battery Rebate & $0 deposit</div>
                    </div>
                  </Link>
                  <Link to="/resources/blog" className="mega-item">
                    <div className="mega-icon-wrap">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Solar News & Guides</div>
                      <div className="mega-desc">In-depth guides for Australian homeowners</div>
                    </div>
                  </Link>
                  <Link to="/locations" className="mega-item">
                    <div className="mega-icon-wrap">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Locations & Service Areas</div>
                      <div className="mega-desc">QLD, NSW, VIC, SA & WA installation hubs</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Solar Battery */}
            <Link
              to="/solar-battery"
              className={`nav-link ${isActive('/solar-battery') || isActive('/battery') ? 'active' : ''}`}
            >
              <span>Solar Battery</span>
            </Link>

            {/* 4. Products (Dropdown) */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/products/solar-panels"
                className={`nav-link ${isActive('/products') || activeDropdown === 'products' ? 'active' : ''}`}
              >
                <span>Products</span>
                <ChevronDown size={14} className="dropdown-arrow" />
              </Link>
              {activeDropdown === 'products' && (
                <div className="mega-dropdown mega-dropdown-left" style={{ width: '380px' }}>
                  <Link to="/products/solar-panels" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Sun size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Solar Panels</div>
                      <div className="mega-desc">Tier-1 N-Type panels from Jinko, Trina & LONGi</div>
                    </div>
                  </Link>
                  <Link to="/products/inverters" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Cpu size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Smart Solar Inverters</div>
                      <div className="mega-desc">High-efficiency hybrid & string inverters</div>
                    </div>
                  </Link>
                  <Link to="/solar-battery" className="mega-item">
                    <div className="mega-icon-wrap">
                      <BatteryCharging size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Solar Batteries & Storage</div>
                      <div className="mega-desc">Tesla Powerwall 3, Sungrow & BYD storage</div>
                    </div>
                  </Link>
                  <Link to="/battery/solar-plus-battery" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Solar + Battery Packages</div>
                      <div className="mega-desc">Complete turn-key all-in-one energy systems</div>
                    </div>
                  </Link>
                  <Link to="/battery/battery-upgrade" className="mega-item">
                    <div className="mega-icon-wrap">
                      <Wrench size={18} />
                    </div>
                    <div>
                      <div className="mega-title">Battery Upgrade / Retrofit</div>
                      <div className="mega-desc">Add battery storage to existing solar panels</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 5. Residential Solar System */}
            <Link
              to="/residential-solar-panel-system"
              className={`nav-link ${isActive('/residential-solar') ? 'active' : ''}`}
            >
              <span>Residential Solar System</span>
            </Link>

            {/* 6. Commercial Solar System */}
            <Link
              to="/commercial-solar-panel-system"
              className={`nav-link ${isActive('/commercial-solar') ? 'active' : ''}`}
            >
              <span>Commercial Solar System</span>
            </Link>

            {/* 7. Contact Us */}
            <Link
              to="/contact-us"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
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
          <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about-us" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            About us
          </Link>
          <Link to="/solar-battery" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Solar Battery
          </Link>
          <Link to="/products/solar-panels" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Products
          </Link>
          <Link to="/residential-solar-panel-system" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Residential Solar System
          </Link>
          <Link to="/commercial-solar-panel-system" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Commercial Solar System
          </Link>
          <Link to="/contact-us" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem' }}>
          <button
            className="btn btn-nav-gold"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
          >
            <span>Get Free Solar Quote</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
