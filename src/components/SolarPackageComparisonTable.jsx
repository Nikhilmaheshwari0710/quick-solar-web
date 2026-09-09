import React from 'react';
import { Zap, ArrowRight, ShieldCheck, Sparkles, Sun, DollarSign, Award, Cpu } from 'lucide-react';
import { SOLAR_PACKAGES } from '../data/siteData';

export default function SolarPackageComparisonTable({ onOpenQuote }) {
  return (
    <section className="section comparison-section" id="comparison-table">
      <div className="container-wide">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.85rem' }}>
            <Zap size={14} />
            <span>SIDE-BY-SIDE MATRIX COMPARISON</span>
          </div>
          <h2 className="section-title">
            Compare <span className="text-emerald">Quick Solar Systems</span>
          </h2>
          <p className="section-subtitle">
            Side-by-side technical specs, daily solar generation yields, and Brighte $0 deposit finance rates across our residential range.
          </p>
        </div>

        {/* Matrix Comparison Card */}
        <div className="comparison-table-card">
          <div className="table-responsive-wrapper">
            <table className="comparison-matrix-table">
              <thead>
                <tr>
                  <th className="th-feature-col">
                    <div className="matrix-col-header-title">Specifications & Features</div>
                    <div className="matrix-col-header-sub">Transparent Tier-1 component comparison</div>
                  </th>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <th
                      key={pkg.id}
                      className={`th-pkg-col ${pkg.featured ? 'is-highlighted-col' : ''}`}
                    >
                      {pkg.featured ? (
                        <div className="matrix-featured-badge">
                          <Sparkles size={12} />
                          <span>#1 MOST POPULAR FOR QLD HOMES</span>
                        </div>
                      ) : (
                        <div className="matrix-sub-badge">{pkg.tier} RANGE</div>
                      )}
                      
                      <div className="matrix-pkg-kw">{pkg.systemSize}</div>
                      
                      <div className="matrix-pkg-price-wrap">
                        <div className="matrix-price-row">
                          <span className="matrix-price-num">{pkg.dailyRate}</span>
                          <span className="matrix-price-period">/ day</span>
                        </div>
                        <div className="matrix-pkg-weekly-pill">
                          $0 Deposit • {pkg.weeklyRate}/wk Brighte Finance
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Solar Panels */}
                <tr className="matrix-hover-row">
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <div className="matrix-icon-circle icon-circle-emerald">
                        <Sun size={18} strokeWidth={2.4} />
                      </div>
                      <div>
                        <div className="matrix-row-title">Solar Panels</div>
                        <div className="matrix-row-sub">Tier-1 N-Type Technology</div>
                      </div>
                    </div>
                  </td>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <td key={pkg.id} className={pkg.featured ? 'is-highlighted-cell' : ''}>
                      <div className="matrix-val-primary">{pkg.panelsCount} x 440W Panels</div>
                      <div className="matrix-val-sub">Tier-1 N-Type Monocrystalline</div>
                    </td>
                  ))}
                </tr>

                {/* Row 2: Inverter Model */}
                <tr className="matrix-hover-row">
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <div className="matrix-icon-circle icon-circle-amber">
                        <Cpu size={18} strokeWidth={2.4} />
                      </div>
                      <div>
                        <div className="matrix-row-title">Smart Inverter</div>
                        <div className="matrix-row-sub">High Efficiency WiFi Unit</div>
                      </div>
                    </div>
                  </td>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <td key={pkg.id} className={pkg.featured ? 'is-highlighted-cell' : ''}>
                      <div className="matrix-val-primary">{pkg.inverterModel}</div>
                      <div className="matrix-val-sub">WiFi App 24/7 Live Monitoring</div>
                    </td>
                  ))}
                </tr>

                {/* Row 3: Daily Generation */}
                <tr className="matrix-hover-row">
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <div className="matrix-icon-circle icon-circle-cyan">
                        <Zap size={18} strokeWidth={2.4} />
                      </div>
                      <div>
                        <div className="matrix-row-title">Est. Daily Generation</div>
                        <div className="matrix-row-sub">Average Daily QLD Yield</div>
                      </div>
                    </div>
                  </td>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <td key={pkg.id} className={pkg.featured ? 'is-highlighted-cell' : ''}>
                      <div className="matrix-pill-tag tag-emerald">
                        <Zap size={13} />
                        <span>{pkg.estGeneration}</span>
                      </div>
                      <div className="matrix-val-sub">Clean energy daily output</div>
                    </td>
                  ))}
                </tr>

                {/* Row 4: Annual Savings */}
                <tr className="matrix-hover-row">
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <div className="matrix-icon-circle icon-circle-gold">
                        <DollarSign size={18} strokeWidth={2.4} />
                      </div>
                      <div>
                        <div className="matrix-row-title">Est. Annual Savings</div>
                        <div className="matrix-row-sub">Bill Reduction Range</div>
                      </div>
                    </div>
                  </td>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <td key={pkg.id} className={pkg.featured ? 'is-highlighted-cell' : ''}>
                      <div className="matrix-pill-tag tag-gold">
                        <DollarSign size={13} />
                        <span>{pkg.estAnnualSavings}</span>
                      </div>
                      <div className="matrix-val-sub">Off typical electricity bills</div>
                    </td>
                  ))}
                </tr>

                {/* Row 5: Federal STC Rebate */}
                <tr className="matrix-hover-row">
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <div className="matrix-icon-circle icon-circle-emerald">
                        <Award size={18} strokeWidth={2.4} />
                      </div>
                      <div>
                        <div className="matrix-row-title">Federal STC Rebate</div>
                        <div className="matrix-row-sub">Govt Point of Sale Savings</div>
                      </div>
                    </div>
                  </td>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <td key={pkg.id} className={pkg.featured ? 'is-highlighted-cell' : ''}>
                      <div className="matrix-val-rebate-text">{pkg.stcRebate}</div>
                      <div className="matrix-val-sub">Point-of-sale deduction included</div>
                    </td>
                  ))}
                </tr>

                {/* Row 6: Warranty Protection */}
                <tr className="matrix-hover-row">
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <div className="matrix-icon-circle icon-circle-blue">
                        <ShieldCheck size={18} strokeWidth={2.4} />
                      </div>
                      <div>
                        <div className="matrix-row-title">Warranty Protection</div>
                        <div className="matrix-row-sub">Full Coverage Backing</div>
                      </div>
                    </div>
                  </td>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <td key={pkg.id} className={pkg.featured ? 'is-highlighted-cell' : ''}>
                      <div className="matrix-val-primary">25-Year Performance</div>
                      <div className="matrix-val-sub">10-Year Master Workmanship</div>
                    </td>
                  ))}
                </tr>

                {/* Row 7: Action CTA */}
                <tr className="matrix-action-row">
                  <td className="td-feature-title" style={{ borderBottom: 'none' }}>
                    <div className="matrix-action-title">Choose System</div>
                    <div className="matrix-val-sub">Get tailored quote & CAD layout</div>
                  </td>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <td
                      key={pkg.id}
                      className={pkg.featured ? 'is-highlighted-cell' : ''}
                      style={{ borderBottom: 'none' }}
                    >
                      <button
                        type="button"
                        className={`btn ${pkg.featured ? 'btn-hero-emerald' : 'btn-matrix-outline'}`}
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => onOpenQuote({ package: pkg.name, system: pkg.systemSize })}
                      >
                        <span>Select {pkg.systemSize}</span>
                        <ArrowRight size={15} />
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Price Beat Guarantee Box */}
        <div className="matrix-guarantee-bar">
          <div className="matrix-guarantee-left">
            <div className="matrix-guarantee-icon">
              <ShieldCheck size={24} />
            </div>
            <div>
              <strong className="matrix-guarantee-title">30-Day Price Beat Promise:</strong>
              <span className="matrix-guarantee-desc"> If you find a comparable Clean Energy Council approved quote cheaper, we’ll beat it!</span>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-hero-emerald btn-sm"
            onClick={() => onOpenQuote()}
          >
            <span>Request Custom CAD Design</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

