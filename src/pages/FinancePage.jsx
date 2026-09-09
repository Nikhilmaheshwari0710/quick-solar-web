import React from 'react';
import { DollarSign, ArrowRight, Clock } from 'lucide-react';
import GovernmentRebates from '../components/GovernmentRebates';

export default function FinancePage({ onOpenQuote }) {
  return (
    <div className="page-finance">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <DollarSign size={15} />
                <span>$0 Deposit Solar Finance</span>
              </div>
              <h1 className="hero-headline">
                Switch to Solar for <span className="text-gradient-solar">$0 Upfront Capital</span>
              </h1>
              <p className="hero-subhead">
                Partnered with Brighte, Australia’s premier green energy lender. Get approved in 60 seconds and start enjoying lower electricity bills immediately from as little as $3 per day.
              </p>
              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={onOpenQuote}>
                  <span>Apply for $0 Deposit Pre-Approval</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/solar_hero_home.jpg"
                  alt="Brighte 0 deposit solar finance"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Finance Works */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="pill-badge pill-badge-gold">
              <Clock size={15} />
              <span>Cash Flow Positive</span>
            </div>
            <h2 className="section-title">How Your Power Bill Pays for Your Solar</h2>
            <p className="section-subtitle">
              Instead of paying high quarterly electricity bills to energy retailers, you redirect those funds into paying off your own rooftop power station.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="feature-box">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>6.6 kW System</h3>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.25rem' }}>~$3.00 / day</div>
              <p style={{ color: 'var(--slate-500)', fontSize: '0.9rem', marginBottom: '1rem' }}>($21 / week on Brighte 0% deposit)</p>
              <div style={{ fontSize: '0.9rem', color: 'var(--slate-600)' }}>
                Avg Quarterly Bill Savings: <strong>~$450–$550/qtr</strong>.
              </div>
            </div>

            <div className="feature-box" style={{ border: '2px solid var(--primary)' }}>
              <span className="package-ribbon" style={{ position: 'static', display: 'inline-block', marginBottom: '0.5rem' }}>Most Popular</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>10.5 kW System</h3>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.25rem' }}>~$4.80 / day</div>
              <p style={{ color: 'var(--slate-500)', fontSize: '0.9rem', marginBottom: '1rem' }}>($34 / week on Brighte 0% deposit)</p>
              <div style={{ fontSize: '0.9rem', color: 'var(--slate-600)' }}>
                Avg Quarterly Bill Savings: <strong>~$700–$900/qtr</strong>.
              </div>
            </div>

            <div className="feature-box">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>13.2 kW System</h3>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.25rem' }}>~$6.20 / day</div>
              <p style={{ color: 'var(--slate-500)', fontSize: '0.9rem', marginBottom: '1rem' }}>($44 / week on Brighte 0% deposit)</p>
              <div style={{ fontSize: '0.9rem', color: 'var(--slate-600)' }}>
                Avg Quarterly Bill Savings: <strong>~$1,000–$1,300/qtr</strong>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rebates Component */}
      <GovernmentRebates onOpenQuote={onOpenQuote} />
    </div>
  );
}
