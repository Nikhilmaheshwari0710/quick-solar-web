import React from 'react';
import { ShieldCheck, Award, Shield, Tag, MapPin, Users, Check } from 'lucide-react';

export default function TrustBadges() {
  const trustCards = [
    {
      icon: ShieldCheck,
      iconColor: '#059669',
      title: 'Clean Energy Council',
      status: 'Approved Solar Retailer',
      desc: 'Quality you can trust.'
    },
    {
      icon: Award,
      iconColor: '#d97706',
      title: 'SAA Accredited',
      status: 'Master Installers',
      desc: 'Safe & reliable installations.'
    },
    {
      icon: Shield,
      iconColor: '#059669',
      title: '25-Year Warranty',
      status: 'Tier 1 Performance Guarantee',
      desc: 'Long-term peace of mind.'
    },
    {
      icon: Tag,
      iconColor: '#d97706',
      title: '30-Day Price Beat',
      status: 'Lowest Price Guaranteed',
      desc: "We'll beat any genuine quote."
    },
    {
      icon: MapPin,
      iconColor: '#059669',
      title: '100% Australian',
      status: 'Local Service & Support',
      desc: 'Proudly Australian owned.'
    },
    {
      icon: Users,
      iconColor: '#059669',
      title: '5,000+ Customers',
      status: 'Thousands of homes',
      desc: 'powered by Quick Solar.'
    }
  ];

  return (
    <div className="hero-trust-bar-wrapper">
      <div className="container-wide">
        <div className="hero-trust-bar-card">
          <div className="hero-trust-bar-grid">
            {trustCards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="hero-trust-col">
                  <div className="hero-trust-icon-wrap" style={{ color: item.iconColor }}>
                    <IconComp size={28} />
                  </div>
                  <div className="hero-trust-col-title">{item.title}</div>
                  <div className="hero-trust-col-status">{item.status}</div>
                  <div className="hero-trust-col-desc">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
