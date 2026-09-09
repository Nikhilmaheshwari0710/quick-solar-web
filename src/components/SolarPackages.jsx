import React, { useState } from 'react';
import {
  Check, Zap, Sparkles, ArrowRight, Battery, Building2, Home,
  ShieldCheck, Award, Sun, DollarSign
} from 'lucide-react';

export default function SolarPackages({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('residential');

  const residentialPackages = [
    {
      id: 'res-6.6',
      kw: '6.6 kW',
      name: '6.6 kW Sweet Spot',
      tagline: 'Australia’s #1 Choice for 2–4 Bedroom Homes',
      dailyRate: '$3.00',
      weeklyRate: '$21',
      featured: false,
      generation: '26.4 kWh / day',
      savings: 'Save $1,650 / yr',
      specs: [
        '15 x 440w Tier 1 Panels',
        '1 x 5 kW Single Phase Smart WiFi Inverter',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'res-10.5',
      kw: '10.5 kW',
      name: '10.5 kW High-Usage',
      tagline: 'Engineered for Ducted AC, Pools & EV Owners',
      dailyRate: '$4.80',
      weeklyRate: '$34',
      featured: true,
      ribbon: '#1 MOST POPULAR',
      generation: '42.0 kWh / day',
      savings: 'Save $2,340 / yr',
      specs: [
        '24 x 440w Tier 1 Panels',
        '1 x 8 kW 1 or 3 Phase Smart WiFi Inverter',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'res-13.2',
      kw: '13.2 kW',
      name: '13.2 kW Max Output',
      tagline: 'Maximum Household Generation & Near-Zero Bills',
      dailyRate: '$6.20',
      weeklyRate: '$44',
      featured: false,
      generation: '52.8 kWh / day',
      savings: 'Save $3,100 / yr',
      specs: [
        '30 x 440w Tier 1 Panels',
        '1 x 10 kW 3-Phase Smart WiFi Inverter',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    }
  ];

  const commercialPackages = [
    {
      id: 'com-20',
      kw: '20 kW',
      name: '20 kW Commercial',
      tagline: 'For Small Offices, Workshops & Retailers',
      dailyRate: '$9.50',
      weeklyRate: '$66',
      featured: false,
      generation: 'Up to 80 kWh / day',
      savings: 'Cuts daytime power ~70%',
      specs: [
        '46 x 440w Tier 1 Commercial Solar Panels',
        '1 x 20 kW Three-Phase Commercial Inverter',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'com-50',
      kw: '50 kW',
      name: '50 kW Enterprise',
      tagline: 'High ROI for Warehouses, Logistics & Factories',
      dailyRate: '$21.00',
      weeklyRate: '$147',
      featured: true,
      ribbon: 'TOP COMMERCIAL ROI',
      generation: 'Up to 200 kWh / day',
      savings: '2.8 – 3.5 yr Payback',
      specs: [
        '114 x 440w Tier 1 Monocrystalline Panels',
        '1 x 50 kW Multi-MPPT Commercial Inverter',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'com-100',
      kw: '100 kW+',
      name: '100 kW+ Industrial',
      tagline: 'Custom Solar Plant for Large Manufacturing',
      dailyRate: 'Custom',
      weeklyRate: 'Tailored',
      featured: false,
      generation: 'Up to 400+ kWh / day',
      savings: 'PPA & $0 Capital Options',
      specs: [
        '220+ x 440w Tier 1 High-Yield Panels',
        'High-Voltage Utility Grade Multi-Inverter Array',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    }
  ];

  const batteryPackages = [
    {
      id: 'bat-tesla',
      kw: '13.5 kWh',
      name: 'Tesla Powerwall 3',
      tagline: 'Whole-Home Instant Blackout Backup',
      dailyRate: '$6.50',
      weeklyRate: '$45',
      featured: false,
      generation: '24/7 Stored Power',
      savings: 'Storm Watch Protection',
      specs: [
        '13.5 kWh Usable Lithium Energy Storage',
        'Integrated Solar Hybrid Inverter (up to 20kW)',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'bat-sungrow',
      kw: '9.6 - 19.2 kWh',
      name: 'Sungrow SBR Battery',
      tagline: 'Modular High-Voltage Safe LFP Storage',
      dailyRate: '$4.90',
      weeklyRate: '$34',
      featured: true,
      ribbon: '#1 MOST POPULAR BATTERY',
      generation: '100% Usable Capacity',
      savings: 'Time-of-Use Shift',
      specs: [
        '9.6 kWh to 19.2 kWh Modular High-Voltage Storage',
        'Ultra-Safe Cobalt-Free LFP Chemistry',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'bat-solar-plus',
      kw: 'Complete',
      name: 'Solar + Battery Package',
      tagline: '24/7 Zero Bill Total Independence Package',
      dailyRate: '$5.80',
      weeklyRate: '$40',
      featured: false,
      generation: 'Solar + Storage',
      savings: 'Maximum Independence',
      specs: [
        'Tier-1 Solar Panels + High-Capacity Battery',
        'Smart Hybrid Inverter with Backup Circuit',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
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
            <span>ALL-INCLUSIVE SOLAR &amp; BATTERY PACKAGES</span>
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

        {/* 3-Column Modern Package Cards Grid */}
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
                    <span>Custom PPA &amp; Capital Finance</span>
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

              {/* Bullet Features with Exact Image Content */}
              <ul className="pkg-specs-list">
                {pkg.specs.map((spec, idx) => (
                  <li key={idx} className="pkg-spec-row">
                    <div className="pkg-check-icon">
                      <Check size={13} strokeWidth={3.5} />
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
