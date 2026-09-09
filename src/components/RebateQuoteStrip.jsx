import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function RebateQuoteStrip({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', address: '' });
      }, 5000);
    }, 600);
  };

  return (
    <section className="rebate-quote-section" id="rebate-quote">
      <div className="container-wide">
        <div className="rebate-quote-card">
          <div className="rebate-quote-header">
            <h2 className="rebate-quote-title">
              Get Your Solar &amp; Battery Rebate Quote Today
            </h2>
            <p className="rebate-quote-subtitle">
              Fast, free &amp; no-obligation estimate with 2026 Federal &amp; State Government rebate discounts applied
            </p>
          </div>

          {submitted ? (
            <div className="rebate-quote-success">
              <CheckCircle2 size={32} className="success-icon" />
              <div>
                <h3 className="success-title">Thank you, {formData.name || 'valued customer'}!</h3>
                <p className="success-desc">
                  Your rebate quote request has been received. Our Australian solar advisor will contact you shortly with your customized proposal.
                </p>
              </div>
            </div>
          ) : (
            <form className="rebate-quote-form" onSubmit={handleSubmit}>
              <div className="rebate-form-grid">
                <div className="rebate-input-wrap">
                  <label htmlFor="rebate-name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="rebate-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="rebate-input"
                  />
                </div>

                <div className="rebate-input-wrap">
                  <label htmlFor="rebate-email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="rebate-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="rebate-input"
                  />
                </div>

                <div className="rebate-input-wrap">
                  <label htmlFor="rebate-phone" className="sr-only">Phone</label>
                  <input
                    type="tel"
                    id="rebate-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="rebate-input"
                  />
                </div>

                <div className="rebate-input-wrap">
                  <label htmlFor="rebate-address" className="sr-only">Address</label>
                  <input
                    type="text"
                    id="rebate-address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="rebate-input"
                  />
                </div>
              </div>

              <div className="rebate-submit-wrap">
                <button
                  type="submit"
                  className="btn-rebate-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="rebate-quote-footer-proof">
            <span className="proof-item">
              <ShieldCheck size={14} className="text-emerald" /> 100% Free &amp; Zero Obligation
            </span>
            <span className="proof-dot">•</span>
            <span className="proof-item">
              <Zap size={14} className="text-gold" /> Instant Federal Rebate Breakdown
            </span>
            <span className="proof-dot">•</span>
            <span className="proof-item">
              <Sparkles size={14} className="text-emerald" /> 24-Hour Fast Turnaround
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
