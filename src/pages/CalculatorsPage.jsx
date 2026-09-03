import React, { useState } from 'react';
import { Calculator, DollarSign, Battery, TrendingUp, Award, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import SolarSavingsCalculator from '../components/SolarSavingsCalculator';

export default function CalculatorsPage({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('savings');

  // STC Calculator State
  const [stcSystemKw, setStcSystemKw] = useState(6.6);
  const [stcZone, setStcZone] = useState('3'); // Brisbane / SEQ is Zone 3
  const stcCertificates = Math.round(stcSystemKw * (stcZone === '3' ? 1.382 : 1.536) * 7); // Deeming multiplier
  const stcDiscount = stcCertificates * 38; // ~$38/certificate

  // Battery Sizing Calculator State
  const [nightKwUsage, setNightKwUsage] = useState(8);
  const recBatterySize = nightKwUsage <= 7 ? '9.6 kWh (Sungrow SBR)' : nightKwUsage <= 14 ? '13.5 kWh (Tesla Powerwall 3)' : '19.2 kWh+ (Dual Stack)';
  const independencePercent = Math.min(95, Math.round(50 + (nightKwUsage * 4.5)));

  // ROI Calculator State
  const [systemCost, setSystemCost] = useState(5500);
  const [annualSavings, setAnnualSavings] = useState(1850);
  const paybackYears = (systemCost / annualSavings).toFixed(1);
  const tenYearNetProfit = Math.round((annualSavings * 10) - systemCost);

  return (
    <div className="page-calculators">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.75rem' }}>
              <Calculator size={15} />
              <span>Solar & Battery Calculators</span>
            </div>
            <h1 className="hero-headline">
              Interactive <span className="text-gradient-solar">Solar & Battery</span> Estimators
            </h1>
            <p className="hero-subhead" style={{ margin: '0.75rem auto 1.5rem auto' }}>
              Estimate your system size, Federal STC rebate value, battery requirements, and return on investment in seconds.
            </p>

            {/* Tab selector */}
            <div className="packages-tabs" style={{ maxWidth: '620px' }}>
              <button
                className={`pkg-tab-btn ${activeTab === 'savings' ? 'active' : ''}`}
                onClick={() => setActiveTab('savings')}
              >
                Solar Savings
              </button>
              <button
                className={`pkg-tab-btn ${activeTab === 'stc' ? 'active' : ''}`}
                onClick={() => setActiveTab('stc')}
              >
                STC Rebate
              </button>
              <button
                className={`pkg-tab-btn ${activeTab === 'battery' ? 'active' : ''}`}
                onClick={() => setActiveTab('battery')}
              >
                Battery Sizing
              </button>
              <button
                className={`pkg-tab-btn ${activeTab === 'roi' ? 'active' : ''}`}
                onClick={() => setActiveTab('roi')}
              >
                ROI & Payback
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: '1rem' }}>
        <div className="container">
          {/* TAB 1: Solar Savings */}
          {activeTab === 'savings' && (
            <SolarSavingsCalculator onOpenQuote={onOpenQuote} />
          )}

          {/* TAB 2: STC Calculator */}
          {activeTab === 'stc' && (
            <div className="calc-wrapper">
              <div className="calc-inputs">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Federal STC Government Rebate Estimator</h3>
                <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                  Under the SRES Scheme, every Clean Energy Council approved system receives Small-scale Technology Certificates (STCs) discounted upfront.
                </p>

                <div>
                  <div className="calc-group-label">
                    <span>Solar System Size:</span>
                    <span style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: '800' }}>{stcSystemKw} kW</span>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="15.0"
                    step="0.5"
                    value={stcSystemKw}
                    onChange={(e) => setStcSystemKw(Number(e.target.value))}
                    className="calc-slider"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem' }}>Geographic Solar Zone:</label>
                  <select className="calc-select" value={stcZone} onChange={(e) => setStcZone(e.target.value)}>
                    <option value="3">Zone 3 (Brisbane, Gold Coast, Sunshine Coast, SEQ)</option>
                    <option value="1">Zone 1 (Northern Queensland / High Radiation)</option>
                    <option value="3">Zone 3 (Perth & South Western Australia)</option>
                  </select>
                </div>

                <div style={{ background: 'var(--slate-50)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--slate-200)', fontSize: '0.85rem', color: 'var(--slate-600)' }}>
                  ⚠️ <em>Note: Results are indicative based on Clean Energy Regulator 2026 deeming rates and market certificate prices. Applied automatically at point-of-sale by Quick Solar.</em>
                </div>
              </div>

              <div className="calc-results">
                <div>
                  <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--slate-300)', fontWeight: '700' }}>
                    Point-of-Sale Government Discount
                  </div>
                  <div className="calc-big-saving">${stcDiscount.toLocaleString()}</div>
                  <p style={{ color: 'var(--slate-300)', fontSize: '0.9rem' }}>
                    Estimated <strong>{stcCertificates} STC Certificates</strong> generated and discounted instantly from your total invoice.
                  </p>
                </div>

                <button className="btn btn-gold btn-lg" onClick={() => onOpenQuote({ package: `${stcSystemKw} kW System`, stc: stcDiscount })}>
                  <span>Claim My STC Rebate Quote</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: Battery Calculator */}
          {activeTab === 'battery' && (
            <div className="calc-wrapper">
              <div className="calc-inputs">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Home Battery Sizing & Independence Calculator</h3>
                <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                  Determine how many kilowatt-hours of battery storage you need to cover your evening appliances (air con, cooking, lighting, refrigeration).
                </p>

                <div>
                  <div className="calc-group-label">
                    <span>Estimated Evening & Overnight Usage:</span>
                    <span style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: '800' }}>{nightKwUsage} kWh / night</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="25"
                    step="1"
                    value={nightKwUsage}
                    onChange={(e) => setNightKwUsage(Number(e.target.value))}
                    className="calc-slider"
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--slate-400)', marginTop: '0.5rem' }}>
                    <span>4 kWh (Light Evening)</span>
                    <span>10 kWh (Ducted AC / Family)</span>
                    <span>20+ kWh (Heavy Usage / EV)</span>
                  </div>
                </div>
              </div>

              <div className="calc-results">
                <div>
                  <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--slate-300)', fontWeight: '700' }}>
                    Recommended Battery Setup
                  </div>
                  <h4 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--sun-gold)', margin: '0.5rem 0' }}>
                    {recBatterySize}
                  </h4>
                  <div style={{ fontSize: '1.1rem', color: 'var(--white)', marginTop: '0.5rem' }}>
                    Estimated Energy Independence: <strong style={{ color: 'var(--primary-light)' }}>{independencePercent}%</strong>
                  </div>
                </div>

                <button className="btn btn-gold btn-lg" onClick={() => onOpenQuote({ package: recBatterySize, battery: true })}>
                  <span>Lock In Battery Recommendation</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: ROI / Payback Calculator */}
          {activeTab === 'roi' && (
            <div className="calc-wrapper">
              <div className="calc-inputs">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Solar Return on Investment & Payback</h3>
                <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
                  See how quickly your solar power system pays for itself and calculates your 10-year cumulative net return.
                </p>

                <div>
                  <div className="calc-group-label">
                    <span>Net System Cost (After STC Rebate):</span>
                    <span style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: '800' }}>${systemCost}</span>
                  </div>
                  <input
                    type="range"
                    min="3000"
                    max="15000"
                    step="250"
                    value={systemCost}
                    onChange={(e) => setSystemCost(Number(e.target.value))}
                    className="calc-slider"
                  />
                </div>

                <div>
                  <div className="calc-group-label">
                    <span>Estimated Annual Power Bill Savings:</span>
                    <span style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: '800' }}>${annualSavings} / yr</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="5000"
                    step="100"
                    value={annualSavings}
                    onChange={(e) => setAnnualSavings(Number(e.target.value))}
                    className="calc-slider"
                  />
                </div>
              </div>

              <div className="calc-results">
                <div>
                  <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--slate-300)', fontWeight: '700' }}>
                    Estimated Payback Period
                  </div>
                  <div className="calc-big-saving" style={{ fontSize: '3rem' }}>
                    {paybackYears} <span style={{ fontSize: '1.35rem', color: 'var(--slate-300)' }}>Years</span>
                  </div>
                  <div style={{ fontSize: '1rem', color: 'var(--white)', marginTop: '0.5rem' }}>
                    10-Year Net Cash Profit: <strong style={{ color: 'var(--sun-gold)' }}>+${tenYearNetProfit.toLocaleString()}</strong>
                  </div>
                </div>

                <button className="btn btn-gold btn-lg" onClick={() => onOpenQuote({ package: 'Solar ROI Quote' })}>
                  <span>Request Guaranteed Payback Proposal</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
