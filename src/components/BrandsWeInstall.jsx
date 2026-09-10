import React from 'react';

export default function BrandsWeInstall() {
  const brands = [
    {
      id: 'fronius',
      name: 'Fronius',
      logo: (
        <div className="brand-logo-item">
          <svg width="124" height="34" viewBox="0 0 124 34" fill="none">
            <rect width="124" height="34" rx="17" fill="#e30613" />
            <text x="62" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="900" fontStyle="italic" fill="#ffffff" textAnchor="middle" letterSpacing="-0.5px">Fronius</text>
          </svg>
        </div>
      )
    },
    {
      id: 'sungrow',
      name: 'Sungrow',
      logo: (
        <div className="brand-logo-item sungrow-brand-lockup">
          <span className="sg-part-orange">SUN</span>
          <span className="sg-part-green">GROW</span>
        </div>
      )
    },
    {
      id: 'suntech',
      name: 'Suntech',
      logo: (
        <div className="brand-logo-item suntech-brand-lockup">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M0 16L8 3H13L5 16H0Z" fill="#e11d48" />
            <path d="M7 16L15 3H20L12 16H7Z" fill="#e11d48" />
          </svg>
          <span className="suntech-brand-text">SUNTECH</span>
        </div>
      )
    },
    {
      id: 'seraphim',
      name: 'Seraphim',
      logo: (
        <div className="brand-logo-item seraphim-brand-lockup">
          <svg width="136" height="30" viewBox="0 0 136 30" fill="none">
            <rect x="3" y="10" width="3.2" height="11" rx="1.6" fill="#e11d48" transform="rotate(-30 3 10)" />
            <rect x="8.5" y="6" width="3.2" height="15" rx="1.6" fill="#e11d48" transform="rotate(-30 8.5 6)" />
            <rect x="14" y="8" width="3.2" height="15" rx="1.6" fill="#e11d48" transform="rotate(-30 14 8)" />
            <rect x="19.5" y="12" width="3.2" height="11" rx="1.6" fill="#e11d48" transform="rotate(-30 19.5 12)" />
            <text x="31" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14.5" fontWeight="900" fill="#e11d48" letterSpacing="1px">SERAPHIM</text>
            <rect x="120" y="3" width="3.2" height="6.5" rx="1.6" fill="#e11d48" />
          </svg>
        </div>
      )
    },
    {
      id: 'rec',
      name: 'REC',
      logo: (
        <div className="brand-logo-item rec-brand-lockup">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" fill="#f59e0b" />
            <path d="M8 18L12 10M12.5 18L16.5 10M17 18L21 10" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <span className="rec-brand-text">REC</span>
        </div>
      )
    }
  ];

  return (
    <section className="brands-installed-exact-section" id="brands">
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="brands-installed-header">
          <div className="brands-kicker-row">
            <div className="kicker-deco-line" />
            <span className="brands-kicker-text">TRUSTED SOLAR TECHNOLOGY</span>
            <div className="kicker-deco-line" />
          </div>
          <h2 className="brands-installed-title">
            Brands We Install
          </h2>
        </div>

        {/* 5-Card Clean Grid */}
        <div className="brands-installed-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-installed-card" title={brand.name}>
              {brand.logo}
            </div>
          ))}
        </div>

        {/* Subtitle Caption */}
        <div className="brands-installed-caption">
          <p>Quality panels, inverters and solar technology selected for reliable performance.</p>
        </div>

      </div>
    </section>
  );
}
