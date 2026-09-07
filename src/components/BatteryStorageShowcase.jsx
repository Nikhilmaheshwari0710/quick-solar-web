import React, { useState } from 'react';
import {
  BatteryCharging, ShieldCheck, Sun, Moon, Zap, ArrowRight,
  CheckCircle2, Battery, Plug, Headphones, TrendingUp, Sparkles
} from 'lucide-react';

export default function BatteryStorageShowcase({ onOpenQuote }) {
  const [timeMode, setTimeMode] = useState('day');

  return (
    <section className="section battery-storage-showcase-section" id="batteries">
      <div className="container-wide">
        <div className="battery-reference-grid">
          {/* Left Column: Visual with Floating Energy Simulator */}
          <div className="battery-image-col">
            <div className="battery-photo-container">
              <img
                src="/images/battery_sungrow.jpg"
                alt="Quick Solar smart battery storage and hybrid inverter system"
                className="battery-hero-img"
              />

              {/* Top Live Monitoring Badge */}
              <div className="battery-live-badge">
                <span className="live-dot-pulse" />
                <span>24/7 LIVE BATTERY MONITORING</span>
              </div>

              {/* Floating 24/7 Simulator Card */}
              <div className="energy-simulator-card">
                <div className="simulator-header">
                  <div className="simulator-title-wrap">
                    <Sparkles size={14} className="text-emerald" />
                    <span className="simulator-title">24/7 Energy Flow Simulator</span>
                  </div>
                  <div className="simulator-toggle-btns">
                    <button
                      type="button"
                      className={`btn-sim-toggle ${timeMode === 'day' ? 'active' : ''}`}
                      onClick={() => setTimeMode('day')}
                    >
                      <Sun size={14} />
                      <span>Day Mode</span>
                    </button>
                    <button
                      type="button"
                      className={`btn-sim-toggle ${timeMode === 'night' ? 'active' : ''}`}
                      onClick={() => setTimeMode('night')}
                    >
                      <Moon size={14} />
                      <span>Night Mode</span>
                    </button>
                  </div>
                </div>

                {/* Live Animated Metric Chips */}
                <div className="sim-live-chips-row">
                  {timeMode === 'day' ? (
                    <>
                      <div className="sim-chip chip-emerald">☀️ Solar: 8.4 kW</div>
                      <div className="sim-chip chip-cyan">🔋 Battery: +6.3 kW</div>
                      <div className="sim-chip chip-slate">🏠 Home: 2.1 kW</div>
                    </>
                  ) : (
                    <>
                      <div className="sim-chip chip-amber">🌙 Solar: 0.0 kW</div>
                      <div className="sim-chip chip-cyan">🔋 Battery: -1.8 kW</div>
                      <div className="sim-chip chip-emerald">⚡ Grid: $0.00</div>
                    </>
                  )}
                </div>

                <div className="simulator-text">
                  {timeMode === 'day' ? (
                    <p>
                      <strong>☀️ Daytime:</strong> Solar powers your home appliances first. Excess clean energy automatically charges your battery system and exports to the grid for feed-in credits.
                    </p>
                  ) : (
                    <p>
                      <strong>🌙 Night-time:</strong> Your home seamlessly runs on clean battery storage without pulling expensive peak power from the grid.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title & 4 Perks Grid */}
          <div className="battery-content-col">
            <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.85rem' }}>
              <BatteryCharging size={14} />
              <span>ENERGY INDEPENDENCE</span>
            </div>

            <h2 className="battery-section-title">
              Total Power Protection <br />
              with <span className="text-emerald">Smart Battery Storage</span>
            </h2>

            <p className="battery-section-desc">
              Store your excess rooftop solar during peak daylight hours and power your home through the night. Enjoy uninterrupted peace of mind during storms, grid blackouts, and peak rate electricity spikes.
            </p>

            {/* 4 Feature Cards (2x2 Grid) */}
            <div className="battery-2x2-perks-grid">
              <div className="battery-perk-box">
                <div className="perk-icon-wrap icon-circle-emerald">
                  <ShieldCheck size={20} strokeWidth={2.4} />
                </div>
                <div className="perk-text-wrap">
                  <h3 className="perk-heading">Blackout Backup</h3>
                  <p className="perk-desc">
                    Instant power transfer keeps your fridge, WiFi, lights and critical circuits running during outages.
                  </p>
                </div>
              </div>

              <div className="battery-perk-box">
                <div className="perk-icon-wrap icon-circle-cyan">
                  <Zap size={20} strokeWidth={2.4} />
                </div>
                <div className="perk-text-wrap">
                  <h3 className="perk-heading">Zero Peak Rates</h3>
                  <p className="perk-desc">
                    Avoid expensive 4pm–9pm peak electricity tariffs by using your own stored sunshine.
                  </p>
                </div>
              </div>

              <div className="battery-perk-box">
                <div className="perk-icon-wrap icon-circle-gold">
                  <TrendingUp size={20} strokeWidth={2.4} />
                </div>
                <div className="perk-text-wrap">
                  <h3 className="perk-heading">VPP Grid Payouts</h3>
                  <p className="perk-desc">
                    Join a Virtual Power Plant to earn bonus credits by supporting the Australian energy grid.
                  </p>
                </div>
              </div>

              <div className="battery-perk-box">
                <div className="perk-icon-wrap icon-circle-blue">
                  <Plug size={20} strokeWidth={2.4} />
                </div>
                <div className="perk-text-wrap">
                  <h3 className="perk-heading">Tesla & Sungrow</h3>
                  <p className="perk-desc">
                    Certified installations for Tesla Powerwall 3, Sungrow SBR, Sigenergy, and GoodWe.
                  </p>
                </div>
              </div>
            </div>
            {/* Supported Brands Strip */}
            <div className="battery-brand-strip">
              <span className="brand-strip-label">Certified Tier-1 Storage Brands:</span>
              <div className="brand-pills-wrap">
                <span className="brand-pill">Tesla Powerwall 3</span>
                <span className="brand-pill">Sungrow SBR</span>
                <span className="brand-pill">Sigenergy</span>
                <span className="brand-pill">GoodWe</span>
                <span className="brand-pill">Enphase IQ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Bottom Dual Action Buttons */}
        <div className="battery-bottom-actions-row">
          <button
            type="button"
            className="btn btn-hero-emerald btn-lg btn-shimmer"
            onClick={() => onOpenQuote({ battery: true })}
          >
            <Battery size={18} />
            <span>Get Battery Storage Quote</span>
            <ArrowRight size={18} className="btn-arrow-motion" />
          </button>

          <a href="tel:1300969557" className="btn btn-battery-expert btn-lg">
            <Headphones size={18} />
            <span>Talk to a Battery Expert</span>
          </a>
        </div>

        {/* Bottom Trust Guarantee Note */}
        <div className="battery-trust-sub-note">
          <CheckCircle2 size={15} className="text-emerald" />
          <span>Clean Energy Council & SAA Accredited Installers • 10-Year Warranty • $0 Deposit Financing</span>
        </div>
      </div>
    </section>
  );
}

