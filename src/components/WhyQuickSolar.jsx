import React from 'react';
import {
  ShieldCheck, Award, DollarSign, Smartphone, HeartHandshake,
  Zap, ArrowRight, CheckCircle2, Clock, MapPin, Sparkles, TrendingUp
} from 'lucide-react';

export default function WhyQuickSolar({ onOpenQuote }) {
  return (
    <section className="section quick-solar-advantage-section" id="why-us">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.75rem' }}>
          <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.85rem' }}>
            <Sparkles size={14} />
            <span>THE QUICK SOLAR ADVANTAGE</span>
          </div>
          <h2 className="section-title">
            Why Thousands of Australians <br />
            Choose <span className="text-emerald">Quick Solar</span>
          </h2>
          <p className="section-subtitle">
            We combine high-performance Tier-1 engineering with unbeatable customer care, $0 finance options, and our signature Australian guarantees.
          </p>
        </div>

        {/* Asymmetric Modern Bento Grid */}
        <div className="advantage-bento-grid">
          {/* Bento Item 1: Featured 30-Day Price Beat Master Card (Dark Forest Emerald) */}
          <div className="bento-card bento-card-featured">
            <div className="bento-featured-badge">
              <ShieldCheck size={14} />
              <span>Unbeatable Price Promise</span>
            </div>

            <div className="bento-featured-content">
              <h3 className="bento-featured-title">
                30-Day Price Beat <br />Guarantee
              </h3>
              <p className="bento-featured-desc">
                Found a cheaper comparable written quote from any CEC-accredited solar installer? We will match and beat it by up to 30 days from your quote date.
              </p>

              <div className="bento-price-tag-row">
                <div className="bento-metric-box">
                  <span className="bento-metric-val">100%</span>
                  <span className="bento-metric-lbl">Price Match Promise</span>
                </div>
                <div className="bento-metric-box">
                  <span className="bento-metric-val">30 Days</span>
                  <span className="bento-metric-lbl">Quote Protection</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-hero-gold btn-sm"
              style={{ width: 'fit-content', marginTop: '1.5rem' }}
              onClick={onOpenQuote}
            >
              <span>Test Our Price Beat</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Bento Item 2: SAA & CEC Accredited Installers */}
          <div className="bento-card bento-card-white">
            <div className="bento-icon-wrapper icon-bg-emerald">
              <Award size={22} />
            </div>
            <h3 className="bento-card-title">SAA Master Electricians Only</h3>
            <p className="bento-card-text">
              We never cut corners with unverified third-party contractors. Every solar array is wired and certified by our in-house SAA licensed electricians.
            </p>
            <div className="bento-tag-list">
              <span className="bento-mini-pill">✓ Clean Energy Council Member</span>
              <span className="bento-mini-pill">✓ Zero Subcontractors</span>
            </div>
          </div>

          {/* Bento Item 3: $0 Upfront Brighte Finance */}
          <div className="bento-card bento-card-white">
            <div className="bento-icon-wrapper icon-bg-amber">
              <DollarSign size={22} />
            </div>
            <h3 className="bento-card-title">$0 Upfront Brighte Finance</h3>
            <p className="bento-card-text">
              Eliminate your power bills immediately with flexible $0 deposit repayment plans from just $3/day, easily offset by your solar savings.
            </p>
            <div className="bento-tag-list">
              <span className="bento-mini-pill">✓ Fast 2-Min Pre-Approval</span>
              <span className="bento-mini-pill">✓ No Early Payout Fees</span>
            </div>
          </div>

          {/* Bento Item 4: 24/7 Smart Live App Monitoring */}
          <div className="bento-card bento-card-white">
            <div className="bento-icon-wrapper icon-bg-emerald">
              <Smartphone size={22} />
            </div>
            <h3 className="bento-card-title">24/7 Smart Live Monitoring</h3>
            <p className="bento-card-text">
              Track your daily solar generation, household consumption, and grid feed-in exports in real-time straight from your iPhone or Android phone.
            </p>
            <div className="bento-tag-list">
              <span className="bento-mini-pill">✓ Real-Time Power Flow</span>
              <span className="bento-mini-pill">✓ Automated Fault Alerts</span>
            </div>
          </div>

          {/* Bento Item 5: Dedicated Local Support (Brisbane & Perth) */}
          <div className="bento-card bento-card-white">
            <div className="bento-icon-wrapper icon-bg-blue">
              <HeartHandshake size={22} />
            </div>
            <h3 className="bento-card-title">Local QLD & WA Support Hubs</h3>
            <p className="bento-card-text">
              Direct phone access to our Milton HQ Brisbane and Banksia Grove Perth support teams. Real humans ready to help before, during, and after install.
            </p>
            <div className="bento-tag-list">
              <span className="bento-mini-pill">✓ Milton Brisbane HQ</span>
              <span className="bento-mini-pill">✓ 24-Hr Support SLA</span>
            </div>
          </div>
        </div>

        {/* Bottom Key Stats Bar */}
        <div className="advantage-stats-strip">
          <div className="adv-stat-item">
            <div className="adv-stat-number">5,000+</div>
            <div className="adv-stat-label">Australian Homes & Businesses Powered</div>
          </div>

          <div className="adv-stat-divider" />

          <div className="adv-stat-item">
            <div className="adv-stat-number">4.9 ★</div>
            <div className="adv-stat-label">Google & ProductReview Rating (1,200+ Reviews)</div>
          </div>

          <div className="adv-stat-divider" />

          <div className="adv-stat-item">
            <div className="adv-stat-number">25 Yrs</div>
            <div className="adv-stat-label">Tier-1 Hardware & Performance Warranties</div>
          </div>

          <div className="adv-stat-divider" />

          <div className="adv-stat-item">
            <div className="adv-stat-number">$0</div>
            <div className="adv-stat-label">Deposit Brighte Finance Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
