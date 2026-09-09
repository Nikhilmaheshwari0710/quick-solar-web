import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 'sam-s',
      name: 'Sam S.',
      suburb: 'North Lakes, QLD',
      text: 'As the name suggests, they were very Quick. Harry was very easy to deal with. They gave me some really good tips around what system I needed which saved me a lot of money. Quick solar was friendly and professional. Installers who came out to my place in North Lakes were on time. They explained the process and were friendly. I would surely recommend Quick Solar if you are looking for a reliable and professional service.',
      rating: 5,
      date: 'Google Review'
    },
    {
      id: 'hendrix-wing-seeto',
      name: 'Hendrix Wing Seeto',
      suburb: 'Brisbane, QLD',
      text: 'I could not recommend anyone else over quick solar they have fantastic competitive pricing correlating with absolutely outstanding performance, very friendly and professional staff who not only installed my solar in just half a day but they also gave advise on how to properly use the system in order to save money. I will be recommending them to all of my friends.',
      rating: 5,
      date: 'Google Review'
    },
    {
      id: 'melanie-armitage',
      name: 'Melanie Armitage',
      suburb: 'Gold Coast, QLD',
      text: 'Quick Solar were efficient and easy to work with. The solar panels were installed in a prompt and professional manner. I would totally recommend them.',
      rating: 5,
      date: 'Google Review'
    }
  ];

  // Seamless continuous track
  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="section reviews-marquee-section" id="reviews">
      <div className="container-wide">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="pill-badge pill-badge-gold" style={{ marginBottom: '0.85rem' }}>
            <Star size={14} />
            <span>VERIFIED CUSTOMER REVIEWS</span>
          </div>
          <h2 className="section-title">
            Loved by Homeowners &amp; Businesses <span className="text-emerald">Across Australia</span>
          </h2>
          <p className="section-subtitle">
            See why Quick Solar maintains a 4.9★ rating on Google Reviews with over 1,200+ verified installations.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Single-Row Marquee Container */}
      <div className="reviews-marquee-outer">
        <div className="reviews-marquee-track">
          {marqueeReviews.map((r, idx) => (
            <div key={`${r.id}-${idx}`} className="review-marquee-card">
              <div className="review-card-top">
                <div className="review-stars-row">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                  <span className="review-rating-num">5.0</span>
                </div>
                <div className="review-verified-pill">
                  <CheckCircle size={13} />
                  <span>Verified</span>
                </div>
              </div>

              <p className="review-card-quote">
                "{r.text}"
              </p>

              <div className="review-card-footer">
                <div>
                  <div className="reviewer-author-name">{r.name}</div>
                  <div className="reviewer-author-location">{r.suburb} — {r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


