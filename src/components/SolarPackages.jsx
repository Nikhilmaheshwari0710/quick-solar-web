import React, { useState } from 'react';
import {
  Check, Zap, Sparkles, ArrowRight, Battery, Building2, Home,
  ShieldCheck, Award, Sun, DollarSign, TrendingUp, Cpu
} from 'lucide-react';

export default function SolarPackages({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('residential');

  const residentialPackages = [
    {
      id: 'res-6.6',
      name: '6.6 kW Sweet Spot',
      tagline: 'Australia’s #1 Choice for 2–4 Bedroom Homes',
      dailyRate: '$3.00',
      weeklyRate: '$21',
      featured: false,
      kw: '6.6 kW',
      panels: '15 x 440W N-Type Tier 1',
      inverter: '5kW Smart WiFi Inverter',
      generation: '26.4 kWh / day',
      savings: 'Save $1,650 / yr',
      rebate: '$2,450 Federal STC Off',
      warranty: '25-Yr Tier 1 Performance',
      specs: [
        '15 x 440W Tier-1 N-Type Monocrystalline Panels',
        '5 kW Smart Inverter with 24/7 Live App Tracking',
        'Up to 26.4 kWh daily clean energy production',
        '25-Year Performance & 10-Year Workmanship Warranty'
      ]
    },
    {
      id: 'res-10.5',
      name: '10.5 kW High-Usage',
      tagline: 'Engineered for Ducted AC, Pools & EV Owners',
      dailyRate: '$4.80',
      weeklyRate: '$34',
      featured: true,
      ribbon: '#1 MOST POPULAR',
      kw: '10.5 kW',
      panels: '24 x 440W N-Type Tier 1',
      inverter: '8.5kW Dual MPPT Inverter',
      generation: '42.0 kWh / day',
      savings: 'Save $2,340 / yr',
      rebate: '$3,480 Federal STC Off',
      warranty: '25-Yr Tier 1 Performance',
      specs: [
        '24 x 440W Tier-1 Ultra-High Efficiency Panels',
        '8.5 kW Dual MPPT Smart Inverter (Sungrow / Fronius)',
        'Up to 42.0 kWh daily clean energy output',
        'Battery Storage & EV Charger Ready'
      ]
    },
    {
      id: 'res-13.2',
      name: '13.2 kW Max Output',
      tagline: 'Maximum Household Generation & Near-Zero Bills',
      dailyRate: '$6.20',
      weeklyRate: '$44',
      featured: false,
      kw: '13.2 kW',
      panels: '30 x 440W N-Type Tier 1',
      inverter: '10kW 3-Phase Inverter',
      generation: '52.8 kWh / day',
      savings: 'Save $3,100 / yr',
      rebate: '$4,250 Federal STC Off',
      warranty: '25-Yr Tier 1 Performance',
      specs: [
        '30 x 440W Tier-1 High Yield Monocrystalline Array',
        '10 kW Three-Phase Inverter with Smart Grid Export',
        'Up to 52.8 kWh daily high-capacity generation',
        'Maximum Federal STC Rebate Deduction'
      ]
    }
  ];

  const commercialPackages = [
    {
      id: 'com-20',
      name: '20 kW Commercial',
      tagline: 'For Small Offices, Workshops & Retailers',
      dailyRate: '$9.50',
      weeklyRate: '$66',
      featured: false,
      kw: '20 kW',
      panels: '46 x 440W Panels',
      inverter: '20kW 3-Phase Commercial',
      generation: 'Up to 80 kWh / day',
      savings: 'Cuts daytime power ~70%',
      rebate: 'Instant Tax Write-Off',
      warranty: '25-Yr Commercial Warranty',
      specs: [
        '46 x 440W Tier-1 Commercial Solar Panels',
        '20 kW Three-Phase Commercial Inverter',
        'Cuts daytime peak electricity tariffs by ~70%',
        'Eligible for Instant Asset Tax Depreciation'
      ]
    },
    {
      id: 'com-50',
      name: '50 kW Enterprise',
      tagline: 'High ROI for Warehouses, Logistics & Factories',
      dailyRate: '$21.00',
      weeklyRate: '$147',
      featured: true,
      ribbon: 'Top Commercial ROI',
      kw: '50 kW',
      panels: '114 x 440W Panels',
      inverter: '50kW Multi-MPPT Inverter',
      generation: 'Up to 200 kWh / day',
      savings: '2.8 – 3.5 yr ROI Payback',
      rebate: 'Full STC & Tax Deduction',
      warranty: '25-Yr Commercial Warranty',
      specs: [
        '114 x 440W Tier-1 Monocrystalline Array',
        '50 kW Multi-MPPT Commercial Inverter with Surge Protection',
        'Fast estimated 2.8 – 3.5 year ROI payback period',
        'Full DNSP Network Grid Connection & Approvals'
      ]
    },
    {
      id: 'com-100',
      name: '100 kW+ Industrial',
      tagline: 'Custom Solar Plant for Large Manufacturing',
      dailyRate: 'Custom',
      weeklyRate: 'Tailored',
      featured: false,
      kw: '100 kW+',
      panels: '220+ High-Yield Panels',
      inverter: 'Utility SCADA Integrated',
      generation: 'Up to 400+ kWh / day',
      savings: 'PPA & $0 Capital Options',
      rebate: 'LGC Eligible Generation',
      warranty: '25-Yr Performance Guarantee',
      specs: [
        '220+ Panel Custom Engineered Commercial Array',
        'High-Voltage Utility Grade Monitoring & SCADA',
        'Power Purchase Agreement (PPA) & $0 Capital Options',
        'Dedicated Quick Solar Commercial Project Manager'
      ]
    }
  ];

  const batteryPackages = [
    {
      id: 'bat-tesla',
      name: 'Tesla Powerwall 3',
      tagline: 'Whole-Home Instant Blackout Backup',
      dailyRate: '$6.50',
      weeklyRate: '$45',
      featured: false,
      kw: '13.5 kWh',
      panels: 'Integrated Hybrid',
      inverter: 'Built-in 20kW Inverter',
      generation: '24/7 Stored Energy',
      savings: 'Storm Watch Mode',
      rebate: 'VPP Ready Payouts',
      warranty: '10-Yr Tesla Warranty',
      specs: [
        '13.5 kWh Usable Energy Storage Capacity',
        'Integrated Solar Hybrid Inverter (up to 20kW input)',
        'Seamless Instant Blackout Backup Power',
        'Tesla App Live Monitoring & Storm Watch Mode'
      ]
    },
    {
      id: 'bat-sungrow',
      name: 'Sungrow SBR Battery',
      tagline: 'Modular High-Voltage Safe LFP Storage',
      dailyRate: '$4.90',
      weeklyRate: '$34',
      featured: true,
      ribbon: '#1 MOST POPULAR',
      kw: '9.6–19.2 kWh',
      panels: 'Modular Stackable',
      inverter: 'Sungrow Hybrid Compatible',
      generation: '100% Usable Energy',
      savings: 'Time-of-Use Arbitrage',
      rebate: 'Peak Demand Shift',
      warranty: '10-Yr Sungrow Warranty',
      specs: [
        '9.6 kWh to 19.2 kWh Modular Scalable Capacity',
        'Ultra-Safe Cobalt-Free LFP Battery Chemistry',
        'Emergency Power Supply (EPS) Blackout Circuit',
        'iSolarCloud 24/7 Live Monitoring App'
      ]
    },
    {
      id: 'bat-sigenergy',
      name: 'Sigenergy 5-in-1',
      tagline: 'AI Solar, Storage & Bi-Directional EV Charger',
      dailyRate: '$5.80',
      weeklyRate: '$40',
      featured: false,
      kw: '8–48 kWh',
      panels: 'Stackable Blocks',
      inverter: '5-in-1 Integrated',
      generation: '0ms UPS Backup',
      savings: 'Fast EV Charging',
      rebate: 'AI Smart Tariffs',
      warranty: '10-Yr Full Warranty',
      specs: [
        '8 kWh to 48 kWh Stackable Modular Storage',
        '0-millisecond True UPS Instant Blackout Transfer',
        'Integrated Bi-directional DC Fast EV Charging',
        'IP66 Australian Weatherproof Certified'
      ]
    }
  ];

  const getActivePackages = () => {
    if (activeTab === 'commercial') return commercialPackages;
    if (activeTab === 'battery') return batteryPackages;
    return residentialPackages;
  };

  return (
    <section className="section turnkey-packages-section" id="packages">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.85rem' }}>
            <Sparkles size={14} />
            <span>ALL-INCLUSIVE SOLAR & BATTERY PACKAGES</span>
          </div>
          <h2 className="section-title">
            Transparent <span className="text-emerald">Turnkey Energy Packages</span>
          </h2>
          <p className="section-subtitle">
            All-inclusive pricing with SAA master installation, Tier-1 hardware, STC government rebates, and our 30-Day Price Beat Guarantee.
          </p>

          {/* Segmented Tab Controls */}
          <div className="packages-tab-bar">
            <button
              type="button"
              className={`packages-tab-btn ${activeTab === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveTab('residential')}
            >
              <Home size={16} />
              <span>Residential Solar</span>
            </button>
            <button
              type="button"
              className={`packages-tab-btn ${activeTab === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveTab('commercial')}
            >
              <Building2 size={16} />
              <span>Commercial Solar</span>
            </button>
            <button
              type="button"
              className={`packages-tab-btn ${activeTab === 'battery' ? 'active' : ''}`}
              onClick={() => setActiveTab('battery')}
            >
              <Battery size={16} />
              <span>Solar Batteries</span>
            </button>
          </div>
        </div>

        {/* 3-Column Redesigned Cards Grid */}
        <div className="packages-cards-grid">
          {getActivePackages().map((pkg) => (
            <div
              key={pkg.id}
              className={`package-card-modern ${pkg.featured ? 'is-featured' : ''}`}
            >
              {pkg.ribbon && (
                <div className="package-floating-ribbon">
                  <Sparkles size={12} />
                  <span>{pkg.ribbon}</span>
                </div>
              )}

              {/* Card Header & Tier */}
              <div className="pkg-header">
                <div className="pkg-capacity-pill">{pkg.kw} SYSTEM</div>
                <h3 className="pkg-title">{pkg.name}</h3>
                <p className="pkg-tagline">{pkg.tagline}</p>
              </div>

              {/* Pricing Display */}
              <div className="pkg-pricing-box">
                <div className="pkg-price-row">
                  <span className="pkg-price-val">{pkg.dailyRate}</span>
                  {pkg.dailyRate !== 'Custom' && <span className="pkg-price-unit">/ day</span>}
                </div>
                {pkg.weeklyRate !== 'Tailored' ? (
                  <div className="pkg-finance-badge">
                    <Zap size={12} />
                    <span>${pkg.weeklyRate.replace('$', '')}/wk on Brighte $0 Deposit</span>
                  </div>
                ) : (
                  <div className="pkg-finance-badge">
                    <Zap size={12} />
                    <span>Custom PPA & Capital Finance</span>
                  </div>
                )}
              </div>

              {/* Key Specs Summary Bar */}
              <div className="pkg-key-metrics-grid">
                <div className="pkg-metric-item metric-gen">
                  <Sun size={15} />
                  <span>{pkg.generation}</span>
                </div>
                <div className="pkg-metric-item metric-sav">
                  <DollarSign size={15} />
                  <span>{pkg.savings}</span>
                </div>
              </div>

              {/* Bullet Features */}
              <ul className="pkg-specs-list">
                {pkg.specs.map((spec, idx) => (
                  <li key={idx} className="pkg-spec-row">
                    <div className="pkg-check-icon">
                      <Check size={12} strokeWidth={3.2} />
                    </div>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="pkg-action-wrap">
                <button
                  type="button"
                  className={`btn ${pkg.featured ? 'btn-hero-emerald' : 'btn-pkg-dark'} btn-md`}
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => onOpenQuote({ package: pkg.name, rate: pkg.dailyRate })}
                >
                  <span>Select {pkg.kw} Package</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Assurance Row */}
        <div className="packages-trust-strip">
          <div className="packages-trust-item">
            <ShieldCheck size={18} className="text-emerald" />
            <span><strong>30-Day Price Beat:</strong> We'll beat any genuine CEC quote</span>
          </div>
          <div className="packages-trust-item">
            <DollarSign size={18} className="icon-gold" />
            <span><strong>$0 Upfront Finance:</strong> Flexible Brighte payment plans</span>
          </div>
          <div className="packages-trust-item">
            <Award size={18} className="text-emerald" />
            <span><strong>25-Yr Warranty:</strong> Complete Tier-1 hardware backing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
