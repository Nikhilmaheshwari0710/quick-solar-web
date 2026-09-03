import React, { useState } from 'react';
import { Shield, FileText, AlertCircle, HelpCircle } from 'lucide-react';

export default function LegalPage() {
  const [tab, setTab] = useState('privacy');

  return (
    <div className="page-legal">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.75rem' }}>
              <Shield size={15} />
              <span>Compliance & Consumer Protection</span>
            </div>
            <h1 className="hero-headline">
              Legal, Privacy & <span className="text-gradient-solar">Policy Terms</span>
            </h1>

            <div className="packages-tabs" style={{ maxWidth: '680px', marginTop: '1.5rem' }}>
              <button className={`pkg-tab-btn ${tab === 'privacy' ? 'active' : ''}`} onClick={() => setTab('privacy')}>
                Privacy Policy
              </button>
              <button className={`pkg-tab-btn ${tab === 'terms' ? 'active' : ''}`} onClick={() => setTab('terms')}>
                Terms & Conditions
              </button>
              <button className={`pkg-tab-btn ${tab === 'disclaimer' ? 'active' : ''}`} onClick={() => setTab('disclaimer')}>
                Estimates Disclaimer
              </button>
              <button className={`pkg-tab-btn ${tab === 'refund' ? 'active' : ''}`} onClick={() => setTab('refund')}>
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: '1.5rem' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '3rem', border: '1px solid var(--slate-200)' }}>
            {tab === 'privacy' && (
              <div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', marginBottom: '1rem' }}>Privacy Policy</h2>
                <p style={{ color: 'var(--slate-600)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Quick Solar Australia Pty Ltd respects your privacy and is committed to protecting your personal information under the Australian Privacy Principles (APPs) and Privacy Act 1988 (Cth).
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '1.5rem 0 0.5rem 0' }}>1. Information We Collect</h3>
                <p style={{ color: 'var(--slate-600)', lineHeight: '1.8' }}>
                  When you request a solar quote, use our ROI calculators, upload an electricity bill, or contact us, we collect your name, email, phone number, installation address, and energy billing interval data.
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '1.5rem 0 0.5rem 0' }}>2. How We Use Customer Data</h3>
                <p style={{ color: 'var(--slate-600)', lineHeight: '1.8' }}>
                  Information is used exclusively to generate rooftop satellite CAD models, calculate Federal STC rebates, coordinate SAA certified installations, and process Brighte finance applications upon your authorization.
                </p>
              </div>
            )}

            {tab === 'terms' && (
              <div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', marginBottom: '1rem' }}>Terms & Conditions of Service</h2>
                <p style={{ color: 'var(--slate-600)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  All quotes and installation agreements are conducted under the Clean Energy Council Approved Solar Retailer Code of Conduct.
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '1.5rem 0 0.5rem 0' }}>1. 30-Day Price Beat Guarantee</h3>
                <p style={{ color: 'var(--slate-600)', lineHeight: '1.8' }}>
                  Our 30-Day Price Beat Promise applies to written quotations provided by CEC-accredited retailers specifying identical Tier 1 panel models, inverters, mounting systems, and warranties within 30 days of issuance.
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '1.5rem 0 0.5rem 0' }}>2. Grid Approvals & Network Distributors</h3>
                <p style={{ color: 'var(--slate-600)', lineHeight: '1.8' }}>
                  Quick Solar applies for DNSP utility approvals (Energex, Ergon, Western Power) on behalf of the customer. Final export limits are subject to network provider assessment.
                </p>
              </div>
            )}

            {tab === 'disclaimer' && (
              <div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', marginBottom: '1rem' }}>Estimates & Calculator Disclaimer</h2>
                <p style={{ color: 'var(--slate-600)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  All calculator outputs, generation yields (kWh), annual savings ($), and payback timeframes displayed on this website are indicative financial estimates.
                </p>
                <p style={{ color: 'var(--slate-600)', lineHeight: '1.8' }}>
                  Actual generation varies based on roof tilt, orientation, tree shading, local weather conditions, future electricity retail tariff adjustments, and household energy consumption habits. A formal site survey and CAD simulation will confirm exact specifications prior to installation.
                </p>
              </div>
            )}

            {tab === 'refund' && (
              <div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', marginBottom: '1rem' }}>Cancellation & 10-Day Cooling-Off Policy</h2>
                <p style={{ color: 'var(--slate-600)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Under Australian Consumer Law and Clean Energy Council guidelines, residential customers are entitled to a full, unpenalized 10-business-day cooling-off period upon signing any solar contract. If grid connection approval is refused by the network operator, your deposit is refunded in full.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
