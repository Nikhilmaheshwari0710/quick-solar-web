import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, Shield, Award, Heart } from 'lucide-react';
import { trackInteraction } from '../utils/crm';

export default function Footer({ onOpenQuote }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Bio */}
          <div>
            <Link
              to="/"
              className="brand-logo-img-link footer-logo-wrap"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ display: 'inline-block', marginBottom: '1.25rem', background: '#ffffff', padding: '0.5rem 0.85rem', borderRadius: '12px' }}
              aria-label="Quick Solar Home"
            >
              <img
                src="/images/quick_solar_logo.png"
                alt="Quick Solar - Where Quality Matters"
                className="brand-logo-img"
                style={{ height: '42px', width: 'auto', display: 'block' }}
              />
            </Link>

            <p style={{ fontSize: '0.925rem', color: 'var(--slate-400)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Quick Solar is an Australian owned and operated clean energy specialist. Clean Energy Council Approved Seller and SAA Accredited Designers & Installers across Brisbane, Greater Queensland, and Western Australia.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="pill-badge pill-badge-dark" style={{ fontSize: '0.75rem' }}>
                <Shield size={12} style={{ color: 'var(--primary)' }} /> SAA Accredited
              </span>
              <span className="pill-badge pill-badge-dark" style={{ fontSize: '0.75rem' }}>
                <Award size={12} style={{ color: 'var(--sun-gold)' }} /> 30-Day Price Beat
              </span>
            </div>
          </div>

          {/* Col 2: Solar & Storage */}
          <div>
            <h4 className="footer-col-title">Solar & Storage</h4>
            <ul className="footer-links">
              <li><Link to="/residential-solar">Residential Solar Systems</Link></li>
              <li><Link to="/commercial-solar">Commercial Solar (20kW–100kW+)</Link></li>
              <li><Link to="/solar-batteries">Tesla Powerwall 3 & Sungrow</Link></li>
              <li><Link to="/battery-upgrade">Already Have Solar? (Upgrades)</Link></li>
              <li><Link to="/solar-panels">Tier 1 Solar Panels</Link></li>
              <li><Link to="/inverters">Smart Solar Inverters</Link></li>
              <li><Link to="/calculators">Solar Savings & STC Calculator</Link></li>
              <li><Link to="/bill-upload">Upload Electricity Bill</Link></li>
            </ul>
          </div>

          {/* Col 3: Company & Resources */}
          <div>
            <h4 className="footer-col-title">Company & Guides</h4>
            <ul className="footer-links">
              <li><Link to="/about-us">About Quick Solar</Link></li>
              <li><Link to="/projects">Project Case Studies</Link></li>
              <li><Link to="/locations">Service Locations & Suburbs</Link></li>
              <li><Link to="/blog">Solar Guides & Articles</Link></li>
              <li><Link to="/finance">Brighte $0 Deposit Finance</Link></li>
              <li><Link to="/faqs">Frequently Asked Questions</Link></li>
              <li><Link to="/contact">Contact & Consultation</Link></li>
              <li><Link to="/landing/solar-panels-brisbane">Brisbane Solar Specials</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h4 className="footer-col-title">Brisbane HQ & WA Office</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--slate-400)' }}>
              <div>
                <strong style={{ color: 'var(--white)', display: 'block' }}>Queensland Headquarters:</strong>
                Level 1, 16 McDougall St, Milton QLD 4064
              </div>

              <div>
                <strong style={{ color: 'var(--white)', display: 'block' }}>Western Australia Office:</strong>
                61 Pulchella Ramble, Banksia Grove WA 6031
              </div>

              <div>
                <strong style={{ color: 'var(--white)', display: 'block' }}>Phone & Support:</strong>
                <a
                  href="tel:1300969557"
                  style={{ color: 'var(--sun-gold)', fontWeight: '700' }}
                  onClick={() => trackInteraction('Footer Hotline Click')}
                >
                  1300 969 557
                </a> / (07) 35 541 345
              </div>

              <div>
                <strong style={{ color: 'var(--white)', display: 'block' }}>Email:</strong>
                <a href="mailto:info@quicksolar.com.au" style={{ color: 'var(--slate-300)' }}>info@quicksolar.com.au</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {currentYear} Quick Solar Australia Pty Ltd. Clean Energy Council Approved Seller. ABN 72 638 124 982.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/disclaimer">Estimates Disclaimer</Link>
            <Link to="/refund-policy">Refund & Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
