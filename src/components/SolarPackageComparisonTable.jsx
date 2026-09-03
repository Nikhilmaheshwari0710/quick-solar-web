import React from 'react';
import { Zap, ArrowRight, ShieldCheck, Check, Sparkles, Sun, DollarSign, Award, Layers, Cpu } from 'lucide-react';
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

        {/* Matrix Comparison Container */}
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
                      {pkg.featured && (
                        <div className="matrix-featured-badge">
                          <Sparkles size={11} />
                          <span>Most Popular</span>
                        </div>
                      )}
                      <div className="matrix-pkg-tier">{pkg.tier}</div>
                      <div className="matrix-pkg-kw">{pkg.systemSize}</div>
                      <div className="matrix-pkg-price">
                        <span className="matrix-price-num">{pkg.dailyRate}</span>
                        <span className="matrix-price-period">/ day</span>
                      </div>
                      <div className="matrix-pkg-weekly">
                        ({pkg.weeklyRate}/wk Brighte finance)
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Solar Panels */}
                <tr>
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <Sun size={16} className="text-emerald" />
                      <span>Solar Panels</span>
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
                <tr>
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <Cpu size={16} className="text-emerald" />
                      <span>Smart Inverter</span>
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
                <tr>
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <Zap size={16} className="text-emerald" />
                      <span>Est. Daily Generation</span>
                    </div>
                  </td>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <td key={pkg.id} className={pkg.featured ? 'is-highlighted-cell' : ''}>
                      <span className="matrix-val-highlight-green">{pkg.estGeneration}</span>
                      <div className="matrix-val-sub">Clean energy daily output</div>
                    </td>
                  ))}
                </tr>

                {/* Row 4: Annual Savings */}
                <tr>
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <DollarSign size={16} className="icon-gold" />
                      <span>Est. Annual Bill Savings</span>
                    </div>
                  </td>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <td key={pkg.id} className={pkg.featured ? 'is-highlighted-cell' : ''}>
                      <span className="matrix-val-highlight-gold">{pkg.estAnnualSavings}</span>
                      <div className="matrix-val-sub">Off typical electricity bills</div>
                    </td>
                  ))}
                </tr>

                {/* Row 5: Federal STC Rebate */}
                <tr>
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <Award size={16} className="text-emerald" />
                      <span>Federal STC Rebate</span>
                    </div>
                  </td>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <td key={pkg.id} className={pkg.featured ? 'is-highlighted-cell' : ''}>
                      <span className="matrix-val-rebate">{pkg.stcRebate}</span>
                      <div className="matrix-val-sub">Point-of-sale deduction</div>
                    </td>
                  ))}
                </tr>

                {/* Row 6: Warranty Backing */}
                <tr>
                  <td className="td-feature-title">
                    <div className="feature-icon-label">
                      <ShieldCheck size={16} className="text-emerald" />
                      <span>Warranty Protection</span>
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
                    <div className="matrix-action-title">Get Quote for This System</div>
                  </td>
                  {SOLAR_PACKAGES.map((pkg) => (
                    <td
                      key={pkg.id}
                      className={pkg.featured ? 'is-highlighted-cell' : ''}
                      style={{ borderBottom: 'none' }}
                    >
                      <button
                        type="button"
                        className={`btn ${pkg.featured ? 'btn-hero-emerald' : 'btn-outline'} btn-sm`}
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => onOpenQuote({ package: pkg.name, system: pkg.systemSize })}
                      >
                        <span>Select {pkg.systemSize}</span>
                        <ArrowRight size={14} />
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
            <ShieldCheck size={28} className="text-emerald" />
            <div>
              <strong>30-Day Price Beat Promise:</strong>
              <span> If you find a comparable Clean Energy Council approved quote cheaper, we’ll beat it!</span>
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
