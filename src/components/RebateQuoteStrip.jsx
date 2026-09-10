import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, ArrowRight, Check, Lock, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RebateQuoteStrip({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      if (onOpenQuote) onOpenQuote();
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', address: '' });
      }, 6000);
    }, 600);
  };

  return (
    <section className="rebate-quote-exact-section" id="rebate-quote">
      <div className="rebate-quote-exact-wrapper">
        <div
          className="rebate-quote-exact-canvas"
          style={{ backgroundImage: `url("/images/rebate_quote_banner_bg.jpg")` }}
        >
          {/* Left Column: Title, Description & 3 Value Badges */}
          <div className="rebate-exact-left-col">
            {/* Top Green Kicker with Cyan Accent Line */}
            <div className="rebate-exact-kicker">
              <span>FREE SOLAR &amp; BATTERY QUOTE</span>
              <span className="rebate-exact-kicker-line" />
            </div>

            {/* Main Headline */}
            <h2 className="rebate-exact-title">
              <span>See How Much</span>
              <span>You Could Save</span>
            </h2>

            {/* Description */}
            <p className="rebate-exact-desc">
              Tell us a few details and our solar specialists will prepare a tailored rebate-ready quote for your property.
            </p>

            {/* 3 Green Checkmark Badges Row */}
            <div className="rebate-exact-features-row">
              <div className="rebate-exact-feature-item">
                <div className="rebate-exact-check-circle">
                  <Check size={12} strokeWidth={3.5} />
                </div>
                <span>No-obligation quote</span>
              </div>

              <div className="rebate-exact-feature-item">
                <div className="rebate-exact-check-circle">
                  <Check size={12} strokeWidth={3.5} />
                </div>
                <span>Local solar specialists</span>
              </div>

              <div className="rebate-exact-feature-item">
                <div className="rebate-exact-check-circle">
                  <Check size={12} strokeWidth={3.5} />
                </div>
                <span>Fast response</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating White Quote Form Card */}
          <div className="rebate-exact-right-col">
            <div className="rebate-exact-form-card">
              <h3 className="rebate-exact-form-title">
                GET YOUR SOLAR &amp; BATTERY REBATE QUOTE TODAY
              </h3>

              {submitted ? (
                <div className="rebate-exact-success-box">
                  <CheckCircle2 size={36} className="text-emerald-600 mb-2" />
                  <h4 className="font-bold text-slate-800 text-lg">Quote Request Received!</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Thank you, {formData.name || 'valued customer'}. Our specialist is calculating your solar &amp; battery rebate savings and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form className="rebate-exact-form" onSubmit={handleSubmit}>
                  <div className="rebate-exact-input-grid">
                    {/* 1. Name */}
                    <div className="rebate-exact-input-wrap">
                      <User size={17} className="rebate-exact-input-icon" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="rebate-exact-input"
                      />
                    </div>

                    {/* 2. Phone */}
                    <div className="rebate-exact-input-wrap">
                      <Phone size={17} className="rebate-exact-input-icon" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                        className="rebate-exact-input"
                      />
                    </div>

                    {/* 3. Email */}
                    <div className="rebate-exact-input-wrap">
                      <Mail size={17} className="rebate-exact-input-icon" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="rebate-exact-input"
                      />
                    </div>

                    {/* 4. Address */}
                    <div className="rebate-exact-input-wrap">
                      <MapPin size={17} className="rebate-exact-input-icon" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className="rebate-exact-input"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-rebate-exact-submit"
                    disabled={loading}
                    id="rebate-exact-submit-btn"
                  >
                    {loading ? (
                      <span>Calculating Rebate...</span>
                    ) : (
                      <>
                        <span>GET MY FREE QUOTE</span>
                        <ArrowRight size={19} className="btn-arrow-icon" />
                      </>
                    )}
                  </button>

                  {/* Security Note */}
                  <div className="rebate-exact-security-note">
                    <Lock size={13} className="text-slate-500" />
                    <span>Your details are secure and never shared.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
