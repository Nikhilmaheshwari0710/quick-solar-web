import React, { useState } from 'react';
import { Lock, ArrowRight, Check } from 'lucide-react';

export default function FinancePartnersQuoteSection({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onOpenQuote) {
      onOpenQuote({
        package: 'Flexible Solar Finance Quote',
        ...formData
      });
    }
  };

  return (
    <section className="finance-options-exact-section" id="finance-partners">
      {/* Ambient Section Background Curves */}
      <div className="section-ambient-curve ambient-left" aria-hidden="true">
        <svg viewBox="0 0 500 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100 0 C150 150 250 450 50 800 L-100 800 Z" fill="#e0f2fe" opacity="0.6" />
          <path d="M-100 100 C100 250 180 500 0 800 L-100 800 Z" fill="#bae6fd" opacity="0.35" />
        </svg>
      </div>
      <div className="section-ambient-curve ambient-right" aria-hidden="true">
        <svg viewBox="0 0 500 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M600 0 C350 200 280 500 450 800 L600 800 Z" fill="#e0f2fe" opacity="0.6" />
          <path d="M600 150 C400 300 350 550 500 800 L600 800 Z" fill="#bae6fd" opacity="0.35" />
        </svg>
      </div>

      <div className="finance-options-outer-container">
        
        {/* Section Header */}
        <div className="finance-options-header">
          <div className="finance-options-kicker-row">
            <div className="kicker-deco-line" />
            <span className="finance-options-kicker-text">SOLAR FINANCE OPTIONS</span>
            <div className="kicker-deco-line" />
          </div>
          <h2 className="finance-options-title">
            Flexible Ways to Start Saving With Solar
          </h2>
          <p className="finance-options-subtitle">
            Explore payment options from trusted finance providers and request a tailored solar quote.
          </p>
        </div>

        {/* 1 Big White Main Card Frame with Left & Right Breathing Room */}
        <div className="finance-options-main-box">
          <div className="finance-options-3col-grid">
            
            {/* 1. BRIGHTE CARD (Left - Pale Mint Green with Leaf Artwork) */}
            <div className="finance-provider-card card-brighte-style">
              {/* Brand Header */}
              <div className="provider-logo-header">
                <div className="brighte-logo-lockup">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="22" r="3.5" fill="#16a34a" />
                    <circle cx="15" cy="14" r="3.5" fill="#16a34a" />
                    <circle cx="23" cy="8" r="3.5" fill="#16a34a" />
                    <circle cx="13" cy="24" r="3" fill="#16a34a" />
                  </svg>
                  <span className="brighte-brand-name">Brighte</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="provider-card-title">
                Payment Plans Across Our Solar Range
              </h3>
              <p className="provider-card-desc">
                Install your solar system now and pay it off over time, subject to approval and eligibility.
              </p>

              {/* Feature Checklist */}
              <ul className="provider-checklist">
                <li className="provider-check-item">
                  <div className="provider-check-badge badge-green">
                    <Check size={12} strokeWidth={3.5} />
                  </div>
                  <span>Australian solar finance provider</span>
                </li>
                <li className="provider-check-item">
                  <div className="provider-check-badge badge-green">
                    <Check size={12} strokeWidth={3.5} />
                  </div>
                  <span>Fast application process</span>
                </li>
              </ul>

              {/* Bottom Decorative Wave & Leaves Background */}
              <div className="card-bottom-artwork brighte-artwork" aria-hidden="true">
                <svg viewBox="0 0 360 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="artwork-svg">
                  {/* Soft bottom landscape wave */}
                  <path d="M0 75 C90 55 190 95 360 50 V120 H0 Z" fill="#d1fae5" opacity="0.8" />
                  <path d="M0 90 C110 75 220 105 360 70 V120 H0 Z" fill="#a7f3d0" opacity="0.6" />
                  {/* Two distinct green leaves on the right */}
                  <g transform="translate(255, 20)">
                    {/* Left leaf */}
                    <path d="M38 72 C30 44 8 26 -8 34 C-5 56 16 70 38 72 Z" fill="#86efac" />
                    {/* Right leaf */}
                    <path d="M38 72 C46 46 68 30 84 37 C80 59 60 70 38 72 Z" fill="#4ade80" />
                  </g>
                </svg>
              </div>
            </div>

            {/* 2. PLENTI CARD (Middle - Pale Sky Blue with Ocean Wave Artwork) */}
            <div className="finance-provider-card card-plenti-style">
              {/* Brand Header */}
              <div className="provider-logo-header">
                <div className="plenti-logo-lockup">
                  <span className="plenti-brand-name">Plenti</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="provider-card-title">
                Flexible, Longer-Term Payment Plans
              </h3>
              <p className="provider-card-desc">
                Explore interest-free payment options designed to suit your solar needs, subject to eligibility and provider terms.
              </p>

              {/* Feature Checklist */}
              <ul className="provider-checklist">
                <li className="provider-check-item">
                  <div className="provider-check-badge badge-blue">
                    <Check size={12} strokeWidth={3.5} />
                  </div>
                  <span>Quick online eligibility check</span>
                </li>
                <li className="provider-check-item">
                  <div className="provider-check-badge badge-blue">
                    <Check size={12} strokeWidth={3.5} />
                  </div>
                  <span>Response available after application</span>
                </li>
              </ul>

              {/* Bottom Decorative Layered Ocean Waves */}
              <div className="card-bottom-artwork plenti-artwork" aria-hidden="true">
                <svg viewBox="0 0 360 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="artwork-svg">
                  {/* Back Soft Wave */}
                  <path d="M0 60 C80 35 170 80 260 45 C305 30 335 38 360 45 V120 H0 Z" fill="#bae6fd" opacity="0.7" />
                  {/* Middle Wave */}
                  <path d="M0 78 C100 55 200 92 290 62 C325 50 345 55 360 62 V120 H0 Z" fill="#7dd3fc" opacity="0.8" />
                  {/* Front Base Wave */}
                  <path d="M0 96 C110 80 230 108 360 85 V120 H0 Z" fill="#38bdf8" opacity="0.35" />
                </svg>
              </div>
            </div>

            {/* 3. REQUEST YOUR FREE QUOTE FORM (Right - Clean Form Card) */}
            <div className="finance-quote-form-container">
              <div className="quote-form-header">
                <h3 className="quote-form-title">REQUEST YOUR FREE QUOTE</h3>
                <p className="quote-form-subtitle">Tell us a few details and our team will get in touch.</p>
              </div>

              {submitted ? (
                <div className="quote-form-success">
                  <div className="provider-check-badge badge-green" style={{ width: '40px', height: '40px', margin: '0 auto 1rem' }}>
                    <Check size={22} strokeWidth={3} />
                  </div>
                  <h4 style={{ color: '#0b2545', margin: '0 0 0.5rem', fontWeight: 800 }}>Quote Request Submitted!</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                    Thank you, {formData.fullName || 'there'}! Our solar finance specialists will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="finance-quote-form-fields">
                  {/* Full Name */}
                  <div className="finance-field-group">
                    <label htmlFor="fin-name" className="finance-label">Full Name</label>
                    <input
                      id="fin-name"
                      type="text"
                      className="finance-input"
                      placeholder="Enter full name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  {/* Email Address */}
                  <div className="finance-field-group">
                    <label htmlFor="fin-email" className="finance-label">Email Address</label>
                    <input
                      id="fin-email"
                      type="email"
                      className="finance-input"
                      placeholder="Enter email address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="finance-field-group">
                    <label htmlFor="fin-phone" className="finance-label">Contact Number</label>
                    <input
                      id="fin-phone"
                      type="tel"
                      className="finance-input"
                      placeholder="Enter mobile number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Address */}
                  <div className="finance-field-group">
                    <label htmlFor="fin-address" className="finance-label">Address</label>
                    <input
                      id="fin-address"
                      type="text"
                      className="finance-input"
                      placeholder="Enter address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>

                  {/* Message */}
                  <div className="finance-field-group">
                    <label htmlFor="fin-message" className="finance-label">Message</label>
                    <textarea
                      id="fin-message"
                      className="finance-textarea"
                      placeholder="Message"
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="finance-submit-btn">
                    <span>REQUEST A QUOTE</span>
                    <ArrowRight size={16} />
                  </button>

                  {/* Security Footnote */}
                  <div className="finance-form-security-note">
                    <Lock size={12} className="security-lock-icon" />
                    <span>
                      Your details are secure. By submitting, you agree to our{' '}
                      <a href="/legal" className="security-link">Terms &amp; Conditions</a> and{' '}
                      <a href="/legal" className="security-link">Privacy Policy</a>.
                    </span>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* Centered Bottom Disclaimer */}
          <div className="finance-options-disclaimer-row">
            <p className="finance-options-disclaimer-text">
              Finance approval, fees, eligibility and terms apply. Product availability may vary.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
