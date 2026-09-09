import React from 'react';
import { Sparkles } from 'lucide-react';

export default function BrandsWeInstall() {
  const brands = [
    {
      name: 'Trina Solar',
      logo: '/logo/trina_solar.jpg'
    },
    {
      name: 'Sungrow',
      logo: '/logo/sungrow.jpg'
    },
    {
      name: 'Fronius',
      logo: '/logo/fronius.jpg'
    },
    {
      name: 'SMA Solar',
      logo: '/logo/sma.jpg'
    },
    {
      name: 'Growatt',
      logo: '/logo/growatt.jpg'
    },
    {
      name: 'Solis Inverters',
      logo: '/logo/solice.jpg'
    },
    {
      name: 'Qcells',
      logo: '/logo/qcells.jpg'
    },
    {
      name: 'REC Solar',
      logo: '/logo/rec.jpg'
    },
    {
      name: 'Suntech',
      logo: '/logo/suntech.jpg'
    }
  ];

  // Quadruple for smooth continuous infinite marquee
  const marqueeBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="brands-we-install-section" id="brands">
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.85rem' }}>
            <Sparkles size={14} />
            <span>CEC APPROVED HARDWARE</span>
          </div>
          <h2 className="section-title">
            Brands We <span className="text-emerald">Install</span>
          </h2>
        </div>

      </div>

      {/* Automatic Single-Row Logo Marquee Track */}
      <div className="brands-marquee-viewport">
        <div className="brands-marquee-track">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="brand-logo-card"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} Logo`}
                className="brand-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
