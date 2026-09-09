import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Phone, ArrowRight } from 'lucide-react';
import { ALL_FAQS } from '../data/siteData';

export default function FaqPage({ onOpenQuote }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIdx, setOpenIdx] = useState(0);

  const categories = ['All', 'Solar Systems', 'Battery Storage', 'STC & Rebates', 'Finance & Payments', 'Grid & Installation', 'Warranties'];

  const filteredFaqs = ALL_FAQS.filter((f) => {
    const matchesCat = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch = f.q.toLowerCase().includes(searchTerm.toLowerCase()) || f.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="page-faqs">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.75rem' }}>
              <HelpCircle size={15} />
              <span>Solar Knowledge Base</span>
            </div>
            <h1 className="hero-headline">
              Quick Solar <span className="text-gradient-solar">Frequently Asked Questions</span>
            </h1>
            <p className="hero-subhead" style={{ margin: '0.75rem auto 1.5rem auto' }}>
              Find answers on warranties, government STC incentives, Energex export limits, battery retrofits, and our 30-Day Price Beat Guarantee.
            </p>

            {/* Search Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--white)',
              borderRadius: 'var(--radius-full)',
              padding: '0.4rem 1.25rem',
              maxWidth: '480px',
              margin: '0 auto',
              border: '1.5px solid var(--slate-200)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <Search size={18} style={{ color: 'var(--slate-400)', marginRight: '0.5rem' }} />
              <input
                type="text"
                placeholder="Search questions (e.g. warranties, battery, Energex)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  background: 'transparent',
                  padding: '0.5rem 0'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills & FAQ List */}
      <section className="section section-alt" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {categories.map((c) => (
              <button
                key={c}
                className={`pill-badge ${activeCategory === c ? 'pill-badge-emerald' : 'pill-badge-dark'}`}
                style={{ cursor: 'pointer', background: activeCategory === c ? 'var(--primary-light)' : 'var(--slate-100)', color: activeCategory === c ? 'var(--primary-hover)' : 'var(--slate-700)' }}
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="faq-list">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '2px' }}>
                        {faq.category}
                      </span>
                      <span>{faq.q}</span>
                    </div>
                    {isOpen ? <ChevronUp size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} /> : <ChevronDown size={20} style={{ color: 'var(--slate-400)', flexShrink: 0 }} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:1300969557" className="btn btn-outline btn-lg" style={{ display: 'inline-flex' }}>
                <Phone size={18} />
                <span>Call 1300 969 557</span>
              </a>
              {onOpenQuote && (
                <button className="btn btn-primary btn-lg" onClick={onOpenQuote} style={{ display: 'inline-flex' }}>
                  <span>Get Fast Quote</span>
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
