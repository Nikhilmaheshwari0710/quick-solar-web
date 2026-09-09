import React, { useState } from 'react';
import {
  CheckCircle2,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare
} from 'lucide-react';

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
        package: 'Brighte / Plenti Finance Plan Quote',
        ...formData
      });
    }
  };

  return (
    <section className="finance-unique-section" id="finance-partners">
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-eyebrow" style={{ marginBottom: '0.65rem', color: '#10b981', fontWeight: 800, letterSpacing: '0.08em', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
            <Sparkles size={15} />
            <span>FLEXIBLE SOLAR FINANCE OPTIONS</span>
          </div>
          <h2 className="section-title">
            $0 Upfront <span className="text-emerald">Payment Plans</span>
          </h2>
          <p className="section-subtitle">
            Partnered with Australia’s top clean energy finance providers for fast pre-approval and tailored interest-free plans.
          </p>
        </div>

        {/* 2-Column Luxury Split: Left Partner Cards + Right Elevated Quote Card */}
        <div className="finance-unique-grid">
          
          {/* Left Column: Duo Partner Cards */}
          <div className="finance-partners-column">
            
            {/* 1. BRIGHTE CARD */}
            <div className="unique-partner-card card-brighte-glow">
              <div className="partner-card-header">
                <div className="partner-brand-pill pill-brighte">
                  <span className="sun-symbol">☀️</span>
                  <span className="brand-name">Brighte</span>
                </div>
                <div className="partner-badge-tag">
                  <Clock size={13} />
                  <span>1–3 Days Approval</span>
                </div>
              </div>

              <h3 className="partner-headline">
                Payment plans across our range of Solar products.
              </h3>

              <p className="partner-body-copy">
                You can get your solar system installed now and pay it off over time. A system that literally pays for itself in savings, it’s never been easier to start reducing your energy costs.
              </p>

              <ul className="unique-checklist">
                <li className="checklist-item">
                  <div className="check-emerald-dot">
                    <Check size={13} strokeWidth={3.5} />
                  </div>
                  <span>Australia's leader in solar finance</span>
                </li>
                <li className="checklist-item">
                  <div className="check-emerald-dot">
                    <Check size={13} strokeWidth={3.5} />
                  </div>
                  <span>Approval within 1-3 business days</span>
                </li>
              </ul>
            </div>

            {/* 2. PLENTI CARD */}
            <div className="unique-partner-card card-plenti-glow">
              <div className="partner-card-header">
                <div className="partner-brand-pill pill-plenti">
                  <span className="brand-name">Plenti</span>
                </div>
                <div className="partner-badge-tag tag-blue">
                  <Clock size={13} />
                  <span>60 Sec Response</span>
                </div>
              </div>

              <h3 className="partner-headline">
                Flexible, longer term Interest Free payment plans to suit your Solar needs.
              </h3>

              <ul className="unique-checklist">
                <li className="checklist-item">
                  <div className="check-blue-dot">
                    <Check size={13} strokeWidth={3.5} />
                  </div>
                  <span>Check your eligibility and apply in 10 minutes. And it only takes 60 seconds for a response.</span>
                </li>
                <li className="checklist-item">
                  <div className="check-blue-dot">
                    <Check size={13} strokeWidth={3.5} />
                  </div>
                  <span>Enjoy Funds as in as little as 24hrs from approval.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Elevated Glass Lead Form */}
          <div className="finance-form-column">
            <div className="elevated-quote-card">
              <div className="form-card-header">
                <div className="form-pill-tag">
                  <ShieldCheck size={14} />
                  <span>PRE-APPROVAL QUOTE</span>
                </div>
                <h3 className="form-card-title">Apply for $0 Deposit Solar</h3>
                <p className="form-card-subtitle">Receive customized payment plans within minutes.</p>
              </div>

              <form onSubmit={handleSubmit} className="unique-lead-form">
                {submitted ? (
                  <div className="form-success-banner">
                    <CheckCircle2 size={48} className="text-emerald" />
                    <h4>Application Received!</h4>
                    <p>Our finance specialists will contact you shortly with your Brighte &amp; Plenti options.</p>
                  </div>
                ) : (
                  <>
                    {/* Row 1: Full Name & Email */}
                    <div className="form-grid-2col">
                      <div className="input-field-group">
                        <label htmlFor="uq-fullName">Full Name</label>
                        <div className="input-icon-wrap">
                          <User size={15} className="field-icon" />
                          <input
                            id="uq-fullName"
                            type="text"
                            required
                            placeholder="Full name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="input-field-group">
                        <label htmlFor="uq-email">Email Address</label>
                        <div className="input-icon-wrap">
                          <Mail size={15} className="field-icon" />
                          <input
                            id="uq-email"
                            type="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Contact Number & Address */}
                    <div className="form-grid-2col">
                      <div className="input-field-group">
                        <label htmlFor="uq-phone">Contact Number</label>
                        <div className="input-icon-wrap">
                          <Phone size={15} className="field-icon" />
                          <input
                            id="uq-phone"
                            type="tel"
                            required
                            placeholder="Mobile number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="input-field-group">
                        <label htmlFor="uq-address">Address / Suburb</label>
                        <div className="input-icon-wrap">
                          <MapPin size={15} className="field-icon" />
                          <input
                            id="uq-address"
                            type="text"
                            required
                            placeholder="Address / Suburb"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Message */}
                    <div className="input-field-group">
                      <label htmlFor="uq-message">Message (Optional)</label>
                      <div className="input-icon-wrap textarea-wrap">
                        <MessageSquare size={15} className="field-icon-textarea" />
                        <textarea
                          id="uq-message"
                          rows={2}
                          placeholder="Your solar requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn-unique-quote-submit">
                      <span>REQUEST A QUOTE</span>
                      <ArrowRight size={17} />
                    </button>

                    <div className="form-security-footer">
                      <span>🔒 256-Bit SSL Encrypted &bull; No Obligation</span>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
