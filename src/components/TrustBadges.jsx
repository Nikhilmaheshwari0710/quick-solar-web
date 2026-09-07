import React from 'react';
import { ShieldCheck, Award, Shield, Tag, MapPin, Users, CheckCircle2 } from 'lucide-react';

export default function TrustBadges() {
  const trustCards = [
    {
      icon: ShieldCheck,
      iconColor: '#ffffff',
      gradientBg: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
      border: 'rgba(16, 185, 129, 0.3)',
      glow: 'rgba(16, 185, 129, 0.4)',
      pillBg: '#ecfdf5',
      pillColor: '#047857',
      pillBorder: '#a7f3d0',
      title: 'Clean Energy Council',
      status: 'Approved Solar Retailer',
      desc: 'Certified CEC Quality'
    },
    {
      icon: Award,
      iconColor: '#ffffff',
      gradientBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      border: 'rgba(245, 158, 11, 0.3)',
      glow: 'rgba(245, 158, 11, 0.4)',
      pillBg: '#fffbeb',
      pillColor: '#b45309',
      pillBorder: '#fde68a',
      title: 'SAA Accredited',
      status: 'Master Installers',
      desc: 'Safe & Certified Installs'
    },
    {
      icon: Shield,
      iconColor: '#ffffff',
      gradientBg: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
      border: 'rgba(16, 185, 129, 0.3)',
      glow: 'rgba(16, 185, 129, 0.4)',
      pillBg: '#ecfdf5',
      pillColor: '#047857',
      pillBorder: '#a7f3d0',
      title: '25-Year Warranty',
      status: 'Tier-1 Performance',
      desc: 'Long-Term Solar Protection'
    },
    {
      icon: Tag,
      iconColor: '#ffffff',
      gradientBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      border: 'rgba(245, 158, 11, 0.3)',
      glow: 'rgba(245, 158, 11, 0.4)',
      pillBg: '#fffbeb',
      pillColor: '#b45309',
      pillBorder: '#fde68a',
      title: '30-Day Price Beat',
      status: 'Lowest Price Beat',
      desc: 'We Beat Any Genuine Quote'
    },
    {
      icon: MapPin,
      iconColor: '#ffffff',
      gradientBg: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
      border: 'rgba(16, 185, 129, 0.3)',
      glow: 'rgba(16, 185, 129, 0.4)',
      pillBg: '#ecfdf5',
      pillColor: '#047857',
      pillBorder: '#a7f3d0',
      title: '100% Australian',
      status: 'Local QLD Support',
      desc: 'Proudly Aussie Owned'
    },
    {
      icon: Users,
      iconColor: '#ffffff',
      gradientBg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      border: 'rgba(59, 130, 246, 0.3)',
      glow: 'rgba(59, 130, 246, 0.4)',
      pillBg: '#eff6ff',
      pillColor: '#1d4ed8',
      pillBorder: '#bfdbfe',
      title: '5,000+ Customers',
      status: 'Thousands of Homes',
      desc: 'Trusted Across Queensland'
    }
  ];

  return (
    <div className="hero-trust-bar-wrapper">
      <div className="container-wide">
        <div className="hero-trust-bar-card">
          {/* Top subtle dynamic gradient shine line */}
          <div className="trust-bar-accent-line" />

          <div className="hero-trust-bar-grid">
            {trustCards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="hero-trust-col">
                  {/* Floating Official Badge Icon */}
                  <div
                    className="hero-trust-icon-wrap"
                    style={{
                      background: item.gradientBg,
                      color: item.iconColor,
                      borderColor: item.border,
                      boxShadow: `0 6px 16px -2px ${item.glow}`
                    }}
                  >
                    <IconComp size={20} strokeWidth={2.5} />
                  </div>

                  <div className="hero-trust-col-title">{item.title}</div>
                  
                  <div
                    className="hero-trust-col-status-pill"
                    style={{ color: item.pillColor, background: item.pillBg, borderColor: item.pillBorder }}
                  >
                    <CheckCircle2 size={12} strokeWidth={2.8} />
                    <span>{item.status}</span>
                  </div>

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




