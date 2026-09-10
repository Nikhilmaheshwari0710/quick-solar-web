import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function BrisbaneSolarBenefitsSection({ onOpenQuote }) {
  const benefits = [
    {
      id: 'saa-accredited',
      title: 'SAA Accredited Designers & Installers',
      content: (
        <>
          Ask for our <strong>award-winning solar products</strong>. With SAA Accredited Designers &amp; Installers in our team, we bring in decades of industry experience to provide <strong>high-quality solar solutions in Queensland</strong>. Our skilled and professional installers can take good care of your <strong>residential</strong> and <strong>commercial energy needs</strong> in the shortest possible time.
        </>
      ),
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"/>
          <path d="m9 12-2 9 5-3 5 3-2-9"/>
          <path d="m9 8 2 2 4-4"/>
        </svg>
      )
    },
    {
      id: 'tailor-made',
      title: 'Tailor-made Solar Power Systems',
      content: (
        <>
          We design and install one of a kind solar power system to meet the exact needs of our clients. Choose from our vast catalogues of products to match the solar panel design of your choice. Our <strong>tailor-made solar power system solutions</strong> will fit your requirements optimally.
        </>
      ),
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5 12 3l9 7.5"/>
          <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9"/>
          <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6"/>
          <circle cx="19" cy="4" r="2"/>
          <path d="M19 1v1"/>
          <path d="M22 4h-1"/>
        </svg>
      )
    },
    {
      id: 'affordable-pricing',
      title: 'Affordable Pricing',
      content: (
        <>
          Quick Solar provides unparalleled services at the most affordable price. We value our customers and provide higher performance levels at reduced costs to keep them happy. With <strong>solar system Brisbane, QLD, Australia</strong>, you get round the clock services to support your installation. We help you buy the best solar panel and solar system equipment at low prices, well within your budget.
        </>
      ),
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="6" rx="8" ry="3"/>
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>
          <path d="M12 9v6"/>
          <path d="M10 11h4"/>
        </svg>
      )
    },
    {
      id: 'wide-range',
      title: 'Wide Range of Solar Products & Systems',
      content: (
        <>
          At Quick Solar, we believe in providing scores of options to enable better purchase decisions. Take a look at our full range of solar batteries, solar panels, photovoltaic cells, solar inverters and other products before making your buy. As the most experienced <strong>solar panel installer in Brisbane</strong>, we extend exceedingly cost-effective solar panels and products to power your home, office, factory and other commercial setups.
        </>
      ),
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="12" x="4" y="8" rx="1"/>
          <line x1="4" x2="20" y1="12" y2="12"/>
          <line x1="4" x2="20" y1="16" y2="16"/>
          <line x1="9" x2="9" y1="8" y2="20"/>
          <line x1="15" x2="15" y1="8" y2="20"/>
          <circle cx="12" cy="4" r="2"/>
          <line x1="12" x2="12" y1="1" y2="2"/>
          <line x1="8.5" x2="9.5" y1="2.5" y2="3.5"/>
          <line x1="15.5" x2="14.5" y1="2.5" y2="3.5"/>
        </svg>
      )
    },
    {
      id: 'transparent-communication',
      title: 'Open and Transparent Communication',
      content: (
        <>
          Tell us what you want, we are ready to listen. Our solar design and installation team will understand your specific power needs and give the best ideas only. With clear cut communication channels in place, we ensure no gaps in our services. Besides, you need not worry about multiple people contacting you every now and then. We respect your time and will not disturb you unnecessarily in the course of setting up your solar power system.
        </>
      ),
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <line x1="8" x2="16" y1="9" y2="9"/>
          <line x1="8" x2="13" y1="13" y2="13"/>
        </svg>
      )
    },
    {
      id: 'no-paperwork',
      title: 'No Paperwork for You',
      content: (
        <>
          With Quick Solar by your side, you can be relaxed about long documentation or heavy paperwork. We will take care of all solar panel compliances to enable smooth installation and use of our panels.
        </>
      ),
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <circle cx="12" cy="15" r="3"/>
          <line x1="10" x2="14" y1="13" y2="17"/>
        </svg>
      )
    },
    {
      id: 'grid-connection',
      title: 'Connection with the Grid',
      content: (
        <>
          We provide grid-connected solar energy systems. This will help you power your small business or home with renewable energy across the day, every day of the year. The extra power produced by the panels can be sent to the grid easily. If you consume more electricity than what you add to the grid in any given month, you just have to pay for the difference to your power provider.
        </>
      ),
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      )
    },
    {
      id: 'wifi-inverter',
      title: 'WiFi with Solar Inverter',
      content: (
        <>
          Quick Solar provides a more streamlined approach to monitor PV system data. We have the capabilities to keep you connected with WiFi solar inverters. Check out our new range of solar inverters with different WiFi monitoring products.
        </>
      ),
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
          <line x1="12" x2="12.01" y1="20" y2="20"/>
        </svg>
      )
    },
    {
      id: 'customer-service',
      title: 'Excellent Customer Service',
      content: (
        <>
          Our skilled team will guide you across all stages of solar panel design and installation with care. We strive to make the entire process quick and easy for you. To enable this, we aim to provide the best customer support procedures at all times.
        </>
      ),
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#39af35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="why-quick-solar-exact-section" id="brisbane-solar-installer">
      {/* Subtle Atmospheric Section Background Image (Brisbane Solar Rooftops & Skyline) */}
      <div className="why-quick-section-ambient-bg" aria-hidden="true" />

      <div className="container-wide why-quick-container-relative">
        
        {/* Section Header with Green Decorative Lines */}
        <div className="why-quick-header-block">
          <div className="why-quick-kicker-row">
            <div className="kicker-deco-line" />
            <span className="why-quick-kicker-text">WHY QUICK SOLAR</span>
            <div className="kicker-deco-line" />
          </div>
          <h2 className="why-quick-headline">
            Solar Panel Installer in <span className="highlight-saving-green">Brisbane</span>
          </h2>
          <p className="why-quick-subheadline">
            As premium solar panels designing and installation company, we provide numerous benefits to our customers.
          </p>
        </div>

        {/* 3-Column Modern Cards Grid */}
        <div className="why-quick-cards-3col-grid">
          {benefits.map((item) => (
            <div key={item.id} className="why-quick-card-item">
              <div className="why-quick-icon-circle">
                {item.icon}
              </div>
              <h3 className="why-quick-card-title">{item.title}</h3>
              <div className="why-quick-card-desc">{item.content}</div>
            </div>
          ))}
        </div>

        {/* Under-Grid High-Impact CTA Banner */}
        <div className="why-quick-cta-banner">
          {/* Left Content Column */}
          <div className="why-quick-banner-content">
            <div className="banner-green-line" />
            <h3 className="banner-cta-title">Ready to Make the Switch to Solar?</h3>
            <p className="banner-cta-subtitle">Speak with Brisbane’s local solar specialists today.</p>

            <div className="banner-cta-action-row">
              <button
                type="button"
                className="banner-cta-btn-green"
                onClick={onOpenQuote}
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight size={17} />
              </button>

              <div className="banner-cta-vdivider" />

              <a href="tel:1300969557" className="banner-cta-phone-link">
                <div className="banner-phone-icon-pill">
                  <Phone size={16} />
                </div>
                <span className="banner-phone-number">1300 969 557</span>
              </a>
            </div>
          </div>

          {/* Right Script Slogan */}
          <div className="why-quick-banner-slogan">
            <span className="slogan-handwritten-text">A Brighter Queensland Together</span>
            <svg width="150" height="14" viewBox="0 0 150 14" fill="none" className="slogan-swoop-svg">
              <path d="M2 10C50 3 100 2 148 8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
