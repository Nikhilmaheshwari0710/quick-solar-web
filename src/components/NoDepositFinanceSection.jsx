import React from 'react';
import { Info, ArrowRight, Phone } from 'lucide-react';

export default function NoDepositFinanceSection({ onOpenQuote }) {
  const financeCards = [
    {
      id: 'from-3-per-day',
      title: 'From $3/Day & High ROI',
      description: 'Get a 6.6kW Solar System from as little as $3 per day and enjoy great return on investment right from month one.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      )
    },
    {
      id: 'fixed-fee',
      title: 'Fixed Account Fee ($1k–$30k)',
      description: 'Our account keeping fee remains the same regardless of the amount and term of the fund purchase, which can range from $1,000 to $30,000.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="7" rx="9" ry="3"/>
          <path d="M3 7v6c0 1.66 4.03 3 9 3s9-1.34 9-3V7"/>
          <path d="M3 13v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>
        </svg>
      )
    },
    {
      id: 'flexible-terms',
      title: '6 to 60 Month Flexible Terms',
      description: 'You can choose to repay the amount over a period of 6 to 60 months, with various terms available through your selected vendor.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
          <line x1="16" x2="16" y1="2" y2="6"/>
          <line x1="8" x2="8" y1="2" y2="6"/>
          <line x1="3" x2="21" y1="10" y2="10"/>
          <path d="M8 14h.01"/>
          <path d="M12 14h.01"/>
          <path d="M16 14h.01"/>
          <path d="M8 18h.01"/>
          <path d="M12 18h.01"/>
          <path d="M16 18h.01"/>
        </svg>
      )
    },
    {
      id: 'fast-application',
      title: 'Outcome Within Minutes',
      description: 'When you apply for a Brighte payment plan, you can get an outcome within minutes, either by seeking pre-approval or applying with a quote.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <path d="m9 15 2 2 4-4"/>
        </svg>
      )
    },
    {
      id: 'reuse-limit',
      title: 'Reuse Repaid Plan Limit',
      description: 'If you have an active Brighte payment plan, you can reuse the amount you’ve repaid or increase your limit, subject to eligibility.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
          <path d="M21 3v5h-5"/>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
          <path d="M8 16H3v5"/>
        </svg>
      )
    },
    {
      id: 'manage-app-faster-payoff',
      title: 'BrightePay App & Pay Off Faster',
      description: 'The BrightePay app helps you track your repayments, make additional payments, and pay off your plan faster without extra costs.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
          <line x1="12" x2="12.01" y1="18" y2="18"/>
          <path d="M9 10v4"/>
          <path d="M12 8v6"/>
          <path d="M15 6v8"/>
        </svg>
      )
    }
  ];

  return (
    <section className="no-deposit-finance-section" id="solar-finance">
      <div className="container-wide">
        
        <div className="finance-two-column-layout">
          
          {/* Left Column: Photo Card with Overlay Badge */}
          <div className="finance-photo-card">
            <img
              src="/images/flexible_finance_installer.jpg"
              alt="Quick Solar Professional Installer on Roof"
              className="finance-photo-img"
            />
            {/* Top-Left Floating Badge */}
            <div className="finance-floating-badge">
              <div className="badge-coins-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="7" rx="9" ry="3"/>
                  <path d="M3 7v6c0 1.66 4.03 3 9 3s9-1.34 9-3V7"/>
                  <path d="M3 13v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>
                </svg>
              </div>
              <span className="badge-label-text">NO DEPOSIT OPTIONS</span>
            </div>
          </div>

          {/* Right Column: Original Content inside Screenshot Layout */}
          <div className="finance-info-column">
            
            {/* Eyebrow Kicker */}
            <span className="finance-eyebrow-kicker">$0 DEPOSIT BRIGHTE FINANCE</span>

            {/* Main Title */}
            <h2 className="finance-main-heading">
              LET’S DISCUSS THE CONCEPT OF <span className="highlight-saving-green">NO DEPOSIT SOLAR FINANCE</span> TODAY
            </h2>

            {/* Subtitle / Key ROI Offer */}
            <p className="finance-main-subtext">
              Get <strong>6.6kW Solar System</strong> from $3 per day. Get Great ROI with flexible payment plans designed to suit your home and budget.
            </p>

            {/* 6 Feature Cards Grid (2 cols x 3 rows) */}
            <div className="finance-cards-2x2-grid">
              {financeCards.map((card) => (
                <div key={card.id} className="finance-feature-box">
                  <div className="feature-icon-circle-bg">
                    {card.icon}
                  </div>
                  <div className="feature-text-block">
                    <h4 className="feature-box-title">{card.title}</h4>
                    <p className="feature-box-desc">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Blue Info Disclaimer Bar */}
            <div className="finance-blue-disclaimer-bar">
              <div className="disclaimer-info-icon">
                <Info size={18} />
              </div>
              <p className="disclaimer-text">
                We process applications quickly to ensure a seamless experience. Finance approval, eligibility, fees and terms apply. Speak with our team for full details.
              </p>
            </div>

            {/* Bottom CTA Area */}
            <div className="finance-action-buttons-wrap">
              <p className="finance-prompt-label">
                Ready to see whether solar finance suits your home?
              </p>
              <div className="finance-buttons-flex-row">
                <button
                  type="button"
                  className="btn-finance-solid-green"
                  onClick={() => onOpenQuote && onOpenQuote({ package: 'No Deposit Solar Finance' })}
                >
                  <span>GET A FREE QUOTE</span>
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
                <a href="tel:1300969557" className="btn-finance-phone-white">
                  <Phone size={16} />
                  <span>Call 1300 969 557</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
