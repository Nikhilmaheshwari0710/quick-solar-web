import React, { useState } from 'react';
import {
  HelpCircle, ChevronDown, Plus, Minus, PhoneCall,
  MessageSquare, ArrowRight, ShieldCheck, DollarSign, Zap, Wrench, Sparkles
} from 'lucide-react';

export default function FaqSection({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIdx, setOpenIdx] = useState(0);

  const categories = [
    { id: 'all', label: 'All Questions', icon: Sparkles },
    { id: 'finance', label: 'Pricing & Rebates', icon: DollarSign },
    { id: 'tech', label: 'Systems & Battery', icon: Zap },
    { id: 'install', label: 'Install & Warranties', icon: Wrench }
  ];

  const faqs = [
    {
      id: 1,
      category: 'finance',
      q: 'How does the Quick Solar 30-Day Price Beat Guarantee work?',
      a: 'If you receive an official, itemized written quote from another Clean Energy Council accredited installer offering identical Tier-1 brand components, warranties, and scope of work within 30 days of our quote, simply email it to info@quicksolar.com.au. We promise to beat it.'
    },
    {
      id: 2,
      category: 'finance',
      q: 'How does the Brighte $0 Upfront Deposit Finance work?',
      a: 'We partner with Brighte, Australia’s leading green energy finance provider. You can get approved in under 60 seconds with no upfront deposit. Payment plans start from as low as $3/day (~$21/week for a 6.6kW system), allowing your quarterly electricity bill savings to immediately help offset your payments.'
    },
    {
      id: 3,
      category: 'tech',
      q: 'What system size do I need: 6.6 kW, 10.5 kW, or 13.2 kW?',
      a: 'A 6.6 kW system (15 panels) is Australia’s standard sweet spot for 2-4 bedroom homes with quarterly bills between $350 and $600. If you have ducted air conditioning, a swimming pool, or an EV, a 10.5 kW or 13.2 kW system provides the high generation capacity and dual MPPT roof flexibility needed to eliminate higher bills.'
    },
    {
      id: 4,
      category: 'finance',
      q: 'How are the Federal Government STC Rebates applied?',
      a: 'Small-scale Technology Certificates (STCs) are calculated based on your geographic solar zone and system size. Quick Solar automatically claims and discounts these certificates directly on your invoice at the point of sale, saving you between $2,000 and $4,200 immediately without needing to file tax forms.'
    },
    {
      id: 5,
      category: 'install',
      q: 'How long does the installation take and what is the process?',
      a: 'Once your utility grid connection approval is received from your network distributor (e.g. Energex, Ergon, or Western Power), our SAA certified electrical team completes the physical rooftop installation and electrical commissioning in just 4 to 6 hours (half a day).'
    },
    {
      id: 6,
      category: 'tech',
      q: 'Do solar panels still generate electricity on cloudy and rainy days?',
      a: 'Yes. Modern N-Type monocrystalline solar panels capture both direct sunlight and diffuse ambient radiation. While peak generation occurs under clear sun, panels typically continue producing 20% to 40% of their rated output even during overcast conditions.'
    },
    {
      id: 7,
      category: 'install',
      q: 'What warranties come with a Quick Solar system?',
      a: 'Every system comes backed by three layers of protection: a 25-year linear panel performance warranty, a 10-year smart inverter manufacturer warranty, and a 10-year Quick Solar comprehensive installation & workmanship warranty backed by our Brisbane & Perth support teams.'
    },
    {
      id: 8,
      category: 'tech',
      q: 'Should I add battery storage now or wait?',
      a: 'All our solar inverters (Sungrow, GoodWe, Fronius) are hybrid-ready, meaning you can start with solar today and easily plug in a Tesla Powerwall 3 or Sungrow SBR battery whenever you wish. Adding a battery now provides total blackout protection and protects you from evening peak electricity tariffs.'
    }
  ];

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  return (
    <section className="section faq-modern-section" id="faqs">
      <div className="container-wide">
        <div className="faq-modern-grid">
          {/* Left Column: Title, Category Pills & Quick Contact Card */}
          <div className="faq-sidebar-col">
            <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.85rem' }}>
              <HelpCircle size={14} />
              <span>GOT QUESTIONS?</span>
            </div>

            <h2 className="faq-sidebar-title">
              Frequently Asked <br />
              <span className="text-emerald">Questions</span>
            </h2>

            <p className="faq-sidebar-desc">
              Everything you need to know about going solar in Australia, government incentives, Brighte $0 finance, and battery storage.
            </p>

            {/* Category Filter Pills */}
            <div className="faq-category-pills">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`faq-cat-pill ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIdx(0);
                    }}
                  >
                    <IconComponent size={15} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Direct Support Card */}
            <div className="faq-direct-support-card">
              <div className="faq-support-icon">
                <PhoneCall size={20} />
              </div>
              <h3 className="faq-support-title">Still have questions?</h3>
              <p className="faq-support-desc">
                Speak directly with an accredited solar consultant based at our Milton HQ in Brisbane.
              </p>
              <div className="faq-support-actions">
                <a href="tel:1300969557" className="btn btn-primary btn-sm">
                  <span>Call 1300 969 557</span>
                </a>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => onOpenQuote()}
                >
                  <span>Ask a Question</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Numbered Accordion List */}
          <div className="faq-accordion-col">
            <div className="faq-accordion-list">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                const paddedNum = String(idx + 1).padStart(2, '0');

                return (
                  <div
                    key={faq.id}
                    className={`faq-modern-card ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-modern-header-btn"
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-number-badge">{paddedNum}</span>
                      <span className="faq-question-text">{faq.q}</span>
                      <div className="faq-toggle-circle">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="faq-modern-body">
                        <p className="faq-answer-text">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
