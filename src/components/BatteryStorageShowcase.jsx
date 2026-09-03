import React, { useState } from 'react';
import {
  BatteryCharging, ShieldCheck, Sun, Moon, Zap, ArrowRight,
  CheckCircle2, Battery, Plug, Headphones
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

              {/* Floating 24/7 Simulator Card */}
              <div className="energy-simulator-card">
                <div className="simulator-header">
                  <span className="simulator-title">24/7 Energy Flow Simulator</span>
                  <div className="simulator-toggle-btns">
                    <button
                      type="button"
                      className={`btn-sim-toggle ${timeMode === 'day' ? 'active' : ''}`}
                      onClick={() => setTimeMode('day')}
                    >
                      <Sun size={15} />
                      <span>Day Mode</span>
                    </button>
                    <button
                      type="button"
                      className={`btn-sim-toggle ${timeMode === 'night' ? 'active' : ''}`}
                      onClick={() => setTimeMode('night')}
                    >
                      <Moon size={15} />
                      <span>Night Mode</span>
                    </button>
                  </div>
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
                <div className="perk-icon-wrap icon-wrap-emerald">
                  <ShieldCheck size={22} />
                </div>
                <div className="perk-text-wrap">
                  <h3 className="perk-heading">Blackout Backup</h3>
                  <p className="perk-desc">
                    Instant power transfer keeps your fridge, WiFi, lights and critical circuits running during outages.
                  </p>
                </div>
              </div>

              <div className="battery-perk-box">
                <div className="perk-icon-wrap icon-wrap-emerald">
                  <Zap size={22} />
                </div>
                <div className="perk-text-wrap">
                  <h3 className="perk-heading">Zero Peak Rates</h3>
                  <p className="perk-desc">
                    Avoid expensive 4pm–9pm peak electricity tariffs by using your own stored sunshine.
                  </p>
                </div>
              </div>

              <div className="battery-perk-box">
                <div className="perk-icon-wrap icon-wrap-emerald">
                  <CheckCircle2 size={22} />
                </div>
                <div className="perk-text-wrap">
                  <h3 className="perk-heading">VPP Grid Payouts</h3>
                  <p className="perk-desc">
                    Join a Virtual Power Plant to earn bonus credits by supporting the Australian energy grid.
                  </p>
                </div>
              </div>

              <div className="battery-perk-box">
                <div className="perk-icon-wrap icon-wrap-amber">
                  <Plug size={22} />
                </div>
                <div className="perk-text-wrap">
                  <h3 className="perk-heading">Tesla & Sungrow</h3>
                  <p className="perk-desc">
                    Certified installations for Tesla Powerwall 3, Sungrow SBR, Sigenergy, and GoodWe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Bottom Dual Action Buttons */}
        <div className="battery-bottom-actions-row">
          <button
            type="button"
            className="btn btn-hero-emerald btn-lg"
            onClick={() => onOpenQuote({ battery: true })}
          >
            <Battery size={18} />
            <span>Get Battery Storage Quote</span>
            <ArrowRight size={18} />
          </button>

          <a href="tel:1300969557" className="btn btn-battery-expert btn-lg">
            <Headphones size={18} />
            <span>Talk to a Battery Expert</span>
          </a>
        </div>
      </div>
    </section>
  );
}
