import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Users, Settings } from 'lucide-react';

export default function SolarPackages({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('residential');

  const residentialPackages = [
    {
      id: 'res-6.6',
      kwNum: '6.6',
      kwUnit: 'kW',
      systemLabel: 'SOLAR SYSTEM',
      name: '6.6 kW Solar Package',
      image: '/images/package_6_6kw_hardware.jpg',
      featured: false,
      specsHeading: 'WHAT YOU GET',
      specs: [
        '15 × 440W Tier 1 Panels',
        '1 × 5 kW Single-Phase Smart WiFi Inverter',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'res-10.5',
      kwNum: '10.5',
      kwUnit: 'kW',
      systemLabel: 'SOLAR SYSTEM',
      name: '10.5 kW Solar Package',
      image: '/images/package_10_5kw_hardware.jpg',
      featured: true,
      badge: 'MOST POPULAR',
      specsHeading: 'WHAT YOU GET',
      specs: [
        '24 × 440W Tier 1 Panels',
        '1 × 8 kW 1 or 3-Phase Smart WiFi Inverter',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'res-13.2',
      kwNum: '13.2',
      kwUnit: 'kW',
      systemLabel: 'SOLAR SYSTEM',
      name: '13.2 kW Solar Package',
      image: '/images/package_13_2kw_hardware.jpg',
      featured: false,
      specsHeading: 'WHAT YOU GET',
      specs: [
        '30 × 440W Tier 1 Panels',
        '1 × 10 kW 3-Phase Smart WiFi Inverter',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    }
  ];

  const commercialPackages = [
    {
      id: 'com-20',
      kwNum: '20',
      kwUnit: 'kW',
      systemLabel: 'COMMERCIAL SOLAR',
      name: '20 kW Commercial Solar Package',
      image: '/images/package_6_6kw_hardware.jpg',
      featured: false,
      specsHeading: 'WHAT YOU GET',
      specs: [
        '46 × 440W Tier 1 Commercial Solar Panels',
        '1 × 20 kW Three-Phase Commercial Inverter',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'com-50',
      kwNum: '50',
      kwUnit: 'kW',
      systemLabel: 'COMMERCIAL SOLAR',
      name: '50 kW Enterprise Solar Package',
      image: '/images/package_10_5kw_hardware.jpg',
      featured: true,
      badge: 'TOP COMMERCIAL ROI',
      specsHeading: 'WHAT YOU GET',
      specs: [
        '114 × 440W Tier 1 Monocrystalline Panels',
        '1 × 50 kW Multi-MPPT Commercial Inverter',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'com-100',
      kwNum: '100+',
      kwUnit: 'kW',
      systemLabel: 'INDUSTRIAL SOLAR',
      name: '100 kW+ Industrial Solar Plant',
      image: '/images/package_13_2kw_hardware.jpg',
      featured: false,
      specsHeading: 'WHAT YOU GET',
      specs: [
        '220+ × 440W Tier 1 High-Yield Panels',
        'High-Voltage Utility Grade Multi-Inverter Array',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    }
  ];

  const batteryPackages = [
    {
      id: 'bat-tesla',
      kwNum: '13.5',
      kwUnit: 'kWh',
      systemLabel: 'WHOLE-HOME BACKUP',
      name: 'Tesla Powerwall 3 Battery Package',
      image: '/images/package_6_6kw_hardware.jpg',
      featured: false,
      specsHeading: 'WHAT YOU GET',
      specs: [
        '13.5 kWh Usable Lithium Energy Storage',
        'Integrated Solar Hybrid Inverter (up to 20kW)',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'bat-sungrow',
      kwNum: '9.6+',
      kwUnit: 'kWh',
      systemLabel: 'MODULAR STORAGE',
      name: 'Sungrow SBR High-Voltage Battery Package',
      image: '/images/package_10_5kw_hardware.jpg',
      featured: true,
      badge: 'MOST POPULAR BATTERY',
      specsHeading: 'WHAT YOU GET',
      specs: [
        '9.6 kWh to 19.2 kWh Modular High-Voltage Storage',
        'Ultra-Safe Cobalt-Free LFP Chemistry',
        'Installation by SAA Accredited Designers & Installers',
        'Grid Connection Assurance'
      ]
    },
    {
      id: 'bat-solar-plus',
      kwNum: 'Solar+',
      kwUnit: 'Battery',
      systemLabel: 'COMPLETE ZERO BILL',
      name: 'Solar + Battery Total Independence Package',
      image: '/images/package_13_2kw_hardware.jpg',
      featured: false,
      specsHeading: 'WHAT YOU GET',
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
    <section className="turnkey-packages-section" id="packages">
      <div className="container-wide">
        {/* Section Header Matching Screenshot */}
        <div className="packages-exact-header">
          <div className="packages-kicker-row">
            <span className="packages-kicker-line" />
            <span className="packages-kicker-text">SOLAR PACKAGES</span>
            <span className="packages-kicker-line" />
          </div>

          <h2 className="packages-exact-title">
            Most Popular Solar Packages
          </h2>

          <p className="packages-exact-subtitle">
            Quality panels, trusted inverters and professional installation—tailored to your energy needs.
          </p>

          {/* Interactive Category Tabs */}
          <div className="packages-tab-bar">
            <button
              type="button"
              className={`packages-tab-btn ${activeTab === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveTab('residential')}
            >
              <span>Residential Solar</span>
            </button>
            <button
              type="button"
              className={`packages-tab-btn ${activeTab === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveTab('commercial')}
            >
              <span>Commercial Solar</span>
            </button>
            <button
              type="button"
              className={`packages-tab-btn ${activeTab === 'battery' ? 'active' : ''}`}
              onClick={() => setActiveTab('battery')}
            >
              <span>Solar Batteries</span>
            </button>
          </div>
        </div>

        {/* 3 Side-by-Side Package Cards Grid */}
        <div className="packages-exact-grid">
          {getActivePackages().map((pkg) => (
            <div
              key={pkg.id}
              className={`package-exact-card ${pkg.featured ? 'is-featured' : ''}`}
            >
              {/* Featured Badge (Top Center) */}
              {pkg.featured && (
                <div className="package-exact-badge">
                  <span>{pkg.badge || 'MOST POPULAR'}</span>
                </div>
              )}

              {/* Card Top: Capacity Title + Hardware Image */}
              <div className="package-card-top-row">
                <div className="package-capacity-block">
                  <div className="package-kw-line">
                    <span className="kw-num">{pkg.kwNum}</span>
                    <span className="kw-unit">{pkg.kwUnit}</span>
                  </div>
                  <div className="package-system-label">
                    {pkg.systemLabel}
                  </div>
                </div>

                <div className="package-hardware-img-wrap">
                  <img
                    src={pkg.image}
                    alt={`${pkg.kwNum} ${pkg.kwUnit} Solar Hardware Equipment`}
                    className="package-hardware-img"
                  />
                </div>
              </div>

              {/* Card Middle: Specs List */}
              <div className="package-card-body">
                <div className="package-specs-heading">
                  {pkg.specsHeading}
                </div>

                <ul className="package-specs-list">
                  {pkg.specs.map((spec, idx) => (
                    <li key={idx} className="package-spec-item">
                      <div className="package-check-icon">
                        <Check size={12} strokeWidth={3.5} />
                      </div>
                      <span className="package-spec-text">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom: Full-Width Green CTA Button */}
              <div className="package-card-action">
                <button
                  type="button"
                  className="btn-package-quote"
                  onClick={() => onOpenQuote && onOpenQuote({ package: pkg.name })}
                >
                  <span>GET A FREE QUOTE</span>
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Row (Screenshot 2 Matching) */}
        <div className="packages-exact-trust-row">
          <div className="trust-item">
            <ShieldCheck size={19} className="trust-icon" />
            <span>SAA Accredited Installation</span>
          </div>

          <span className="trust-bullet">•</span>

          <div className="trust-item">
            <Settings size={19} className="trust-icon" />
            <span>Quality Equipment</span>
          </div>

          <span className="trust-bullet">•</span>

          <div className="trust-item">
            <Users size={19} className="trust-icon" />
            <span>Local Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
