import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, Search } from 'lucide-react';
import { BLOG_POSTS } from '../data/siteData';

export default function BlogPage({ onOpenQuote }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredPosts = BLOG_POSTS.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-blog">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.75rem' }}>
              <BookOpen size={15} />
              <span>Solar Knowledge & Insights</span>
            </div>
            <h1 className="hero-headline">
              Quick Solar <span className="text-gradient-solar">Guides & Educational Articles</span>
            </h1>
            <p className="hero-subhead" style={{ margin: '0.75rem auto 1.5rem auto' }}>
              Expert guides on Brisbane solar costs, battery sizing, Energex export limits, and Federal STC government rebates.
            </p>

            {/* Search Bar */}
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
                placeholder="Search solar guides, STCs, batteries..."
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

      {/* Main Blog List / Active Article */}
      <section className="section section-alt" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          {activeArticle ? (
            <div style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem',
              border: '1px solid var(--slate-200)',
              maxWidth: '840px',
              margin: '0 auto'
            }}>
              <button className="btn btn-outline btn-sm" onClick={() => setActiveArticle(null)} style={{ marginBottom: '1.5rem' }}>
                ← Back to All Guides
              </button>

              <span className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.75rem' }}>
                {activeArticle.category}
              </span>

              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--slate-900)', lineHeight: '1.25', marginBottom: '1rem' }}>
                {activeArticle.title}
              </h2>

              <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--slate-400)', fontSize: '0.85rem', marginBottom: '2rem', borderBottom: '1px solid var(--slate-100)', paddingBottom: '1rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Calendar size={14} /> {activeArticle.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Clock size={14} /> {activeArticle.readTime}</span>
              </div>

              <div style={{ color: 'var(--slate-700)', fontSize: '1.05rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                {activeArticle.content}
              </div>

              <div style={{
                marginTop: '3rem',
                padding: '2rem',
                background: 'var(--slate-50)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--slate-200)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.5rem' }}>Ready to See Your Solar Savings?</h3>
                <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>Get a Clean Energy Council accredited CAD quote for your home.</p>
                <button className="btn btn-primary btn-lg" onClick={onOpenQuote}>
                  <span>Get My Free Quote</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  style={{
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--slate-200)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div>
                    <span className="pill-badge pill-badge-emerald" style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                      {post.category}
                    </span>

                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--slate-900)', lineHeight: '1.3', marginBottom: '0.75rem' }}>
                      {post.title}
                    </h3>

                    <p style={{ color: 'var(--slate-600)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--slate-400)', borderTop: '1px solid var(--slate-100)', paddingTop: '1rem', marginBottom: '1rem' }}>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <button
                      className="btn btn-outline btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={() => setActiveArticle(post)}
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
