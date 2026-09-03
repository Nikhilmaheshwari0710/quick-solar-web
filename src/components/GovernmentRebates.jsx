import React from 'react';
import {
  DollarSign, Tag, Zap, Globe, ClipboardCheck, ArrowRight,
  ShieldCheck, Award, FileText, Leaf, CheckCircle2
} from 'lucide-react';

export default function GovernmentRebates({ onOpenQuote }) {
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

              {/* 3 Incentive Cards */}
              <div className="rebates-cards-layout">
                <div className="rebates-top-cards-row">
                  {/* Card 1: Point-of-Sale Discount */}
                  <div className="rebate-feature-card card-green">
                    <div className="rebate-card-icon-wrap icon-green">
                      <Tag size={18} />
                    </div>
                    <div className="rebate-card-content">
                      <h3 className="rebate-card-title text-emerald-dark">Point-of-Sale Discount</h3>
                      <p className="rebate-card-text">
                        You don’t have to wait for a tax refund. Quick Solar applies the full STC value as an instant discount on your invoice.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Feed-in Tariffs */}
                  <div className="rebate-feature-card card-amber">
                    <div className="rebate-card-icon-wrap icon-amber">
                      <Zap size={18} />
                    </div>
                    <div className="rebate-card-content">
                      <h3 className="rebate-card-title text-amber-dark">Feed-in Tariffs (FiTs)</h3>
                      <p className="rebate-card-text">
                        Earn credits on every kilowatt-hour of surplus clean electricity your panels send back into the energy grid.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3: QLD & WA State Rebates */}
                <div className="rebate-feature-card card-blue">
                  <div className="rebate-card-icon-wrap icon-blue">
                    <Globe size={18} />
                  </div>
                  <div className="rebate-card-content">
                    <h3 className="rebate-card-title text-blue-dark">QLD & WA State Rebates</h3>
                    <p className="rebate-card-text">
                      Stack additional regional battery booster schemes and zero-interest initiatives where available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Isometric Eco-House Illustration & Eligibility Card */}
            <div className="rebates-visual-col">
              {/* Isometric 3D Solar Home Illustration */}
              <div className="isometric-house-wrapper">
                <svg
                  viewBox="0 0 500 360"
                  className="isometric-house-svg"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Solar powered home with battery storage illustration"
                >
                  {/* Base Green Island / Lawn */}
                  <ellipse cx="250" cy="270" rx="190" ry="65" fill="#e8f5e9" />
                  <ellipse cx="250" cy="265" rx="175" ry="55" fill="#c8e6c9" />
                  <ellipse cx="250" cy="260" rx="160" ry="48" fill="#a5d6a7" />
                  <ellipse cx="250" cy="255" rx="145" ry="40" fill="#81c784" />

                  {/* Shrubbery & Trees */}
                  <circle cx="120" cy="235" r="22" fill="#43a047" />
                  <circle cx="110" cy="245" r="16" fill="#388e3c" />
                  <circle cx="390" cy="240" r="24" fill="#43a047" />
                  <circle cx="405" cy="250" r="18" fill="#2e7d32" />

                  {/* House Main Body */}
                  {/* Left Wall */}
                  <polygon points="175,185 240,225 240,270 175,230" fill="#f8fafc" />
                  {/* Right Wall */}
                  <polygon points="240,225 330,175 330,220 240,270" fill="#e2e8f0" />

                  {/* Front/Side Windows */}
                  <polygon points="188,205 208,218 208,235 188,222" fill="#38bdf8" opacity="0.9" />
                  <polygon points="216,222 232,232 232,248 216,238" fill="#38bdf8" opacity="0.9" />

                  {/* Door */}
                  <polygon points="265,225 290,210 290,250 265,263" fill="#059669" />
                  <polygon points="270,228 285,219 285,248 270,256" fill="#10b981" />

                  {/* Roof Base */}
                  <polygon points="160,185 240,135 345,175 265,225" fill="#1e293b" />

                  {/* Solar Panels on Roof */}
                  <polygon points="185,180 235,148 255,160 205,192" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                  <polygon points="210,195 260,163 280,175 230,207" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
                  <polygon points="235,210 285,178 305,190 255,222" fill="#075985" stroke="#38bdf8" strokeWidth="2" />

                  {/* Solar Panel Grid Lines */}
                  <line x1="195" y1="186" x2="245" y2="154" stroke="#e0f2fe" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="220" y1="201" x2="270" y2="169" stroke="#e0f2fe" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="245" y1="216" x2="295" y2="184" stroke="#e0f2fe" strokeWidth="1" strokeDasharray="3,3" />

                  {/* Green Battery Storage Tower Beside House */}
                  <polygon points="340,205 370,188 370,248 340,265" fill="#059669" />
                  <polygon points="370,188 395,202 395,260 370,248" fill="#047857" />
                  <polygon points="340,205 365,190 395,202 370,217" fill="#10b981" />
                  {/* Battery Status LED */}
                  <circle cx="355" cy="225" r="3" fill="#34d399" />
                  <circle cx="355" cy="235" r="3" fill="#34d399" />
                  <circle cx="355" cy="245" r="3" fill="#34d399" />

                  {/* Floating Dollar Coin Badge & Energy Orbit */}
                  <path
                    d="M 180,180 A 140,80 0 0,1 360,160"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                    fill="none"
                  />
                  <circle cx="270" cy="95" r="28" fill="#10b981" filter="drop-shadow(0 6px 12px rgba(16, 185, 129, 0.4))" />
                  <circle cx="270" cy="95" r="24" fill="#059669" />
                  <text
                    x="270"
                    y="104"
                    fill="#ffffff"
                    fontSize="24"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                  >
                    $
                  </text>
                </svg>
              </div>

              {/* Interactive Eligibility Box */}
              <div
                className="rebates-eligibility-card"
                onClick={onOpenQuote}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onOpenQuote(); }}
              >
                <div className="eligibility-icon-wrap">
                  <ClipboardCheck size={24} />
                </div>
                <div className="eligibility-text-wrap">
                  <h3 className="eligibility-title">Check Your Rebate Eligibility</h3>
                  <p className="eligibility-sub">See how much you can save with government incentives.</p>
                </div>
                <button
                  type="button"
                  className="eligibility-arrow-btn"
                  aria-label="Check Rebate Eligibility"
                >
                  <ArrowRight size={20} />
                </button>
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
                <span>Fully compliant & accredited</span>
              </div>
            </div>

            <div className="rebate-trust-col">
              <div className="rebate-trust-icon">
                <Tag size={20} />
              </div>
              <div className="rebate-trust-text">
                <strong>Instant Discount</strong>
                <span>No waiting for tax refunds</span>
              </div>
            </div>

            <div className="rebate-trust-col">
              <div className="rebate-trust-icon">
                <FileText size={20} />
              </div>
              <div className="rebate-trust-text">
                <strong>Maximise Your Savings</strong>
                <span>Up to $4,200 in STC rebates</span>
              </div>
            </div>

            <div className="rebate-trust-col">
              <div className="rebate-trust-icon">
                <Leaf size={20} />
              </div>
              <div className="rebate-trust-text">
                <strong>Clean Energy Future</strong>
                <span>Lower bills, greener tomorrow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
