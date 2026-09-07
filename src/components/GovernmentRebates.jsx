import React, { useState } from 'react';
import {
  DollarSign, Tag, Zap, Globe, ClipboardCheck, ArrowRight,
  ShieldCheck, Award, FileText, Leaf, Sparkles, CheckCircle2, Calculator, Sun, MapPin
} from 'lucide-react';

export default function GovernmentRebates({ onOpenQuote }) {
  const [selectedKw, setSelectedKw] = useState('10.5');
  const [postcode, setPostcode] = useState('');

  const rebateData = {
    '6.6': { kw: '6.6 kW', rebate: '$2,450', netSaving: 'Saves ~$1,650/yr', panels: '15 x 440W Panels' },
    '10.5': { kw: '10.5 kW', rebate: '$3,650', netSaving: 'Saves ~$2,600/yr', panels: '24 x 440W Panels' },
    '13.2': { kw: '13.2 kW', rebate: '$4,200', netSaving: 'Saves ~$3,400/yr', panels: '30 x 440W Panels' },
    '20.0': { kw: '20.0 kW', rebate: '$6,500', netSaving: 'Saves ~$5,800/yr', panels: '46 x 440W Commercial' }
  };

  const currentRebate = rebateData[selectedKw];

  return (
    <section className="section government-rebates-section" id="rebates">
      <div className="container-wide">
        <div className="rebates-master-card">
          <div className="rebates-split-layout">
            {/* Left Column: Information & Incentive Cards */}
            <div className="rebates-info-col">
              <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.85rem' }}>
                <DollarSign size={14} />
                <span>AUSTRALIAN FEDERAL & STATE INCENTIVES</span>
              </div>

              <h2 className="rebates-main-title">
                Claim Up To <span className="text-emerald">$4,200</span> in <br />
                Government STC Rebates
              </h2>

              <div className="rebate-accent-bar" />

              <p className="rebates-main-desc">
                Under the Australian Federal Government’s <strong>Small-scale Renewable Energy Scheme (SRES)</strong>, every eligible household and commercial premise qualifies for upfront <strong>Small-scale Technology Certificates (STCs)</strong>.
              </p>

              {/* Interactive STC Rebate Calculator Widget */}
              <div className="rebate-interactive-calculator">
                <div className="calc-widget-header">
                  <div className="calc-widget-title">
                    <Calculator size={16} className="text-emerald" />
                    <span>Instant STC Rebate Estimator</span>
                  </div>
                  <span className="calc-widget-badge">Point-of-Sale Discount</span>
                </div>
                <div className="calc-system-selector-row">
                  <span className="selector-label">Select System Size:</span>
                  <div className="selector-btns-group">
                    {Object.keys(rebateData).map((key) => (
                      <button
                        key={key}
                        type="button"
                        className={`btn-kw-select ${selectedKw === key ? 'active' : ''}`}
                        onClick={() => setSelectedKw(key)}
                      >
                        {rebateData[key].kw}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="calc-result-display-strip">
                  <div className="rebate-result-box">
                    <span className="rebate-res-label">Upfront Government STC Rebate:</span>
                    <span className="rebate-res-val">{currentRebate.rebate} OFF</span>
                  </div>
                  <div className="rebate-result-sub-info">
                    <CheckCircle2 size={13} className="text-emerald" />
                    <span>Deducted at point-of-sale • {currentRebate.panels} • {currentRebate.netSaving}</span>
                  </div>
                </div>
              </div>

              {/* 3 Incentive Cards */}
              <div className="rebates-cards-layout">
                <div className="rebates-top-cards-row">
                  {/* Card 1: Point-of-Sale Discount */}
                  <div className="rebate-feature-card card-green">
                    <div className="rebate-card-icon-wrap icon-circle-emerald">
                      <Tag size={18} strokeWidth={2.4} />
                    </div>
                    <div className="rebate-card-content">
                      <h3 className="rebate-card-title text-emerald-dark">Point-of-Sale Discount</h3>
                      <p className="rebate-card-text">
                        No waiting for tax refunds. Quick Solar applies the full STC rebate as an instant discount on your invoice.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Feed-in Tariffs */}
                  <div className="rebate-feature-card card-amber">
                    <div className="rebate-card-icon-wrap icon-circle-gold">
                      <Zap size={18} strokeWidth={2.4} />
                    </div>
                    <div className="rebate-card-content">
                      <h3 className="rebate-card-title text-amber-dark">Feed-in Tariffs (FiTs)</h3>
                      <p className="rebate-card-text">
                        Earn automatic credits on every kilowatt-hour of surplus clean electricity sent back into the grid.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3: QLD & WA State Rebates */}
                <div className="rebate-feature-card card-blue">
                  <div className="rebate-card-icon-wrap icon-circle-cyan">
                    <Globe size={18} strokeWidth={2.4} />
                  </div>
                  <div className="rebate-card-content">
                    <h3 className="rebate-card-title text-blue-dark">QLD & WA State Rebates</h3>
                    <p className="rebate-card-text">
                      Stack regional battery booster schemes and zero-interest initiatives for maximum savings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech Postcode & Financial Rebate Breakdown Master Card */}
            <div className="rebates-visual-col">
              <div className="rebate-master-eligibility-card">
                <div className="card-top-header">
                  <div className="live-status-pill">
                    <span className="live-dot-pulse" />
                    <span>SRES REGULATOR DIRECTORY 2026</span>
                  </div>
                  <h3 className="master-card-title">Instant Postcode Rebate Lookup</h3>
                  <p className="master-card-desc">Check official SRES government incentive deductions & bill savings for your suburb.</p>
                </div>

                {/* Postcode Search Input Field */}
                <div className="postcode-search-box">
                  <MapPin size={18} className="text-emerald" />
                  <input
                    type="text"
                    placeholder="Enter Suburb or Postcode (e.g. 4000, 4217)..."
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="postcode-input"
                  />
                  <button
                    type="button"
                    className="btn btn-hero-emerald btn-sm"
                    onClick={() => onOpenQuote({ postcode, rebateCheck: true })}
                  >
                    <span>Check</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                {/* Quick Suburb Select Pills */}
                <div className="quick-postcode-pills">
                  <span className="quick-label">Quick Locations:</span>
                  <button type="button" className="quick-pill" onClick={() => setPostcode('4000 (Brisbane CBD)')}>Brisbane (4000)</button>
                  <button type="button" className="quick-pill" onClick={() => setPostcode('4217 (Gold Coast)')}>Gold Coast (4217)</button>
                  <button type="button" className="quick-pill" onClick={() => setPostcode('4305 (Ipswich)')}>Ipswich (4305)</button>
                  <button type="button" className="quick-pill" onClick={() => setPostcode('6000 (Perth WA)')}>Perth (6000)</button>
                </div>

                {/* Live Savings Financial Breakdown Box */}
                <div className="rebate-financial-breakdown-card">
                  <div className="breakdown-row">
                    <div className="breakdown-item">
                      <span className="bd-label">Upfront STC Discount</span>
                      <span className="bd-val text-emerald">-$3,650</span>
                    </div>
                    <div className="breakdown-divider" />
                    <div className="breakdown-item">
                      <span className="bd-label">State Battery Booster</span>
                      <span className="bd-val text-cyan">Up to $4,000</span>
                    </div>
                  </div>
                  <div className="breakdown-metrics-grid">
                    <div className="bd-metric">
                      <Zap size={14} className="text-emerald" />
                      <span>Avg. 85%–95% Bill Reduction</span>
                    </div>
                    <div className="bd-metric">
                      <ShieldCheck size={14} className="text-emerald" />
                      <span>2.6 Year Est. Payback</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action CTA */}
                <button
                  type="button"
                  className="btn btn-hero-emerald btn-lg btn-shimmer"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '1.25rem' }}
                  onClick={() => onOpenQuote({ postcode, rebateCheck: true })}
                >
                  <Award size={18} />
                  <span>Claim My Postcode Rebates</span>
                  <ArrowRight size={18} className="btn-arrow-motion" />
                </button>

                <div className="master-card-trust-note">
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>100% Free Consultation • Official STC Certificate Claim Handled</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4-Column Trust Bar */}
          <div className="rebates-bottom-trust-grid">
            <div className="rebate-trust-col">
              <div className="rebate-trust-icon">
                <ShieldCheck size={20} />
              </div>
              <div className="rebate-trust-text">
                <strong>Government Approved</strong>
                <span>Fully compliant CEC & SAA installers</span>
              </div>
            </div>

            <div className="rebate-trust-col">
              <div className="rebate-trust-icon">
                <Tag size={20} />
              </div>
              <div className="rebate-trust-text">
                <strong>Instant Point-of-Sale Discount</strong>
                <span>No waiting for annual tax refunds</span>
              </div>
            </div>

            <div className="rebate-trust-col">
              <div className="rebate-trust-icon">
                <FileText size={20} />
              </div>
              <div className="rebate-trust-text">
                <strong>Maximise STC Rebates</strong>
                <span>Up to $4,200 in SRES certificates</span>
              </div>
            </div>

            <div className="rebate-trust-col">
              <div className="rebate-trust-icon">
                <Leaf size={20} />
              </div>
              <div className="rebate-trust-text">
                <strong>Clean Energy Future</strong>
                <span>Lower bills, greener Australia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
