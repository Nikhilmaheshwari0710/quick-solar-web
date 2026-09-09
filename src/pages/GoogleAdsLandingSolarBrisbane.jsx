import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Star, Phone, Award } from 'lucide-react';
import SolarPackageComparisonTable from '../components/SolarPackageComparisonTable';
import Testimonials from '../components/Testimonials';
import TrustBadges from '../components/TrustBadges';
import { submitCrmLead, trackInteraction } from '../utils/crm';
import confetti from 'canvas-confetti';

export default function GoogleAdsLandingSolarBrisbane({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    bill: '$600 - $1,000 / qtr'
  });
  const [submitted, setSubmitted] = useState(false);
  const [leadRef, setLeadRef] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await submitCrmLead({
      leadSource: 'Google Ads Campaign - Solar Panels Brisbane',
      ...formData
    });
    setLeadRef(res.leadId);
    setSubmitted(true);
    try {
      confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  return (
    <div className="landing-page-ads">
      {/* High-Intent Hero with Embedded Quick Lead Form */}
      <section className="hero" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem', background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <Award size={15} />
                <span>Brisbane’s #1 Rated Solar Installers</span>
              </div>

              <h1 className="hero-headline">
                Get <span className="text-gradient-solar">6.6kW Tier 1 Solar</span> Installed from Just <span style={{ color: 'var(--primary)' }}>$3/Day</span>
              </h1>

              <p className="hero-subhead">
                Clean Energy Council & SAA Accredited. Up to <strong>$3,650 Federal STC Rebate</strong> applied at point-of-sale. 30-Day Price Beat Guarantee!
              </p>

              <div className="hero-trust-row" style={{ padding: '0.5rem 0' }}>
                <div className="hero-trust-pill"><CheckCircle2 size={16} /> <span>$0 Upfront Deposit</span></div>
                <div className="hero-trust-pill"><CheckCircle2 size={16} /> <span>25-Yr Panel Warranty</span></div>
                <div className="hero-trust-pill"><CheckCircle2 size={16} /> <span>Half-Day Installation</span></div>
              </div>

              {/* Direct Hotline */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
                <a href="tel:1300969557" className="btn btn-primary btn-lg" onClick={() => trackInteraction('Ads Hero Phone Call')}>
                  <Phone size={18} />
                  <span>Call 1300 969 557</span>
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', color: 'var(--sun-gold)' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#f59e0b" />)}
                  </div>
                  <strong style={{ fontSize: '0.9rem' }}>4.9★ Google</strong>
                </div>
              </div>
            </div>

            {/* Above-the-fold Quick Quote Card */}
            <div className="hero-visual-card">
              <div style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                boxShadow: 'var(--shadow-xl)',
                border: '2px solid var(--primary-light)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--slate-900)' }}>
                    Get Instant Brisbane Quote
                  </h3>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', background: 'var(--sun-gold-light)', color: 'var(--sun-gold-hover)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
                    Limited STC Allocation
                  </span>
                </div>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--slate-900)' }}>Proposal Request Received!</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', margin: '0.5rem 0 1rem 0' }}>
                      Our Milton engineering team will call you at <strong>{formData.phone}</strong> within 15 minutes.
                    </p>
                    <div style={{ background: 'var(--slate-50)', padding: '0.75rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}>
                      Ref: <strong style={{ color: 'var(--primary)' }}>{leadRef}</strong>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--slate-200)' }}
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--slate-200)' }}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address (For CAD Report) *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--slate-200)' }}
                    />
                    <input
                      type="text"
                      required
                      placeholder="Brisbane Suburb / Postcode *"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--slate-200)' }}
                    />

                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
                      <span>Lock In $3/Day Solar Price</span>
                      <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Package Comparison */}
      <SolarPackageComparisonTable onOpenQuote={onOpenQuote} />

      {/* Customer Reviews */}
      <Testimonials />
    </div>
  );
}
