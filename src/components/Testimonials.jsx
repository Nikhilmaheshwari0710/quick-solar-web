import React from 'react';
import { Star, CheckCircle, Quote, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sam S.',
      suburb: 'North Lakes, Brisbane QLD',
      system: '6.6 kW System with Sungrow Inverter',
      text: 'From the initial quote to installation was less than a week. The team at Quick Solar in Milton handled all the Energex paperwork effortlessly. My quarterly bill dropped from $780 to just $42 credit!',
      rating: 5,
      date: 'Verified Google Review'
    },
    {
      name: 'Hendrix Wing Seeto',
      suburb: 'Milton, Brisbane QLD',
      system: '10.5 kW System with Tier 1 Panels',
      text: 'Outstanding customer service and true to their 30-Day Price Beat Guarantee. The installers were SAA certified, arrived right on 7am, cleaned up after themselves, and walked me through the app.',
      rating: 5,
      date: 'Verified Google Review'
    },
    {
      name: 'Melanie Armitage',
      suburb: 'Surfers Paradise, Gold Coast QLD',
      system: '13.2 kW Solar + Tesla Powerwall 3',
      text: 'Having ducted air con and a swimming pool was killing us on electricity. Quick Solar designed a dual MPPT array with battery backup. The Brighte $0 finance was approved in minutes. 10/10 recommend.',
      rating: 5,
      date: 'Verified Google Review'
    },
    {
      name: 'Mark Henderson',
      suburb: 'Banksia Grove, Perth WA',
      system: '6.6 kW System with Growatt Inverter',
      text: 'Great Perth team. Fast communication, no pushy sales reps. Very clear pricing breakdown with the STC government rebate already discounted upfront.',
      rating: 5,
      date: 'Verified ProductReview'
    },
    {
      name: 'Dave & Sarah P.',
      suburb: 'Caloundra, Sunshine Coast QLD',
      system: '10.5 kW High-Efficiency System',
      text: 'We compared 4 different solar quotes. Quick Solar gave us better Tier-1 Bloom panels and a superior warranty for several hundred dollars less. Installation took half a day!',
      rating: 5,
      date: 'Verified Google Review'
    },
    {
      name: 'Brett T.',
      suburb: 'Ipswich, QLD',
      system: 'Commercial 30 kW Solar Array',
      text: 'Quick Solar handled our workshop solar installation with zero business interruption. The instant asset tax write-off and power bill savings made it a no-brainer.',
      rating: 5,
      date: 'Verified Google Review'
    }
  ];

  // Duplicate for seamless infinite loop
  const infiniteReviews = [...reviews, ...reviews];

  return (
    <section className="section reviews-marquee-section" id="reviews">
      <div className="container-wide">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '2.25rem' }}>
          <div className="pill-badge pill-badge-gold" style={{ marginBottom: '0.85rem' }}>
            <Star size={14} />
            <span>VERIFIED CUSTOMER REVIEWS</span>
          </div>
          <h2 className="section-title">
            Loved by Homeowners & Businesses <span className="text-emerald">Across Australia</span>
          </h2>
          <p className="section-subtitle">
            See why Quick Solar maintains a 4.9★ rating on Google Reviews with over 1,200+ verified installations.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Single-Row Marquee Container */}
      <div className="reviews-marquee-outer">
        <div className="reviews-marquee-track">
          {infiniteReviews.map((r, idx) => (
            <div key={idx} className="review-marquee-card">
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
                  <div className="reviewer-author-location">{r.suburb}</div>
                  <div className="reviewer-system-tag">{r.system}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
