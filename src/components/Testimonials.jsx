import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Users, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const reviews = [
    {
      id: 'sam-s',
      name: 'Sam S.',
      initials: 'SS',
      suburb: 'North Lakes, QLD',
      text: 'As the name suggests, they were very Quick. Harry was very easy to deal with. They gave me some really good tips around what system I needed which saved me a lot of money. Quick solar was friendly and professional. Installers who came out to my place in North Lakes were on time. They explained the process and were friendly. I would surely recommend Quick Solar if you are looking for a reliable and professional service.',
      rating: 5,
      source: 'Verified Google Review'
    },
    {
      id: 'hendrix-wing-seeto',
      name: 'Hendrix Wing Seeto',
      initials: 'HW',
      suburb: 'Brisbane, QLD',
      text: 'I could not recommend anyone else over quick solar they have fantastic competitive pricing correlating with absolutely outstanding performance, very friendly and professional staff who not only installed my solar in just half a day but they also gave advise on how to properly use the system in order to save money. I will be recommending them to all of my friends.',
      rating: 5,
      source: 'Verified Google Review'
    },
    {
      id: 'melanie-armitage',
      name: 'Melanie Armitage',
      initials: 'MA',
      suburb: 'Gold Coast, QLD',
      text: 'Quick Solar were efficient and easy to work with. The solar panels were installed in a prompt and professional manner. I would totally recommend them.',
      rating: 5,
      source: 'Verified Google Review'
    }
  ];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 200);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 200);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="qs-reviews-exact-section" id="reviews">
      {/* Background Decorative Subtle Lines */}
      <div className="qs-reviews-bg-decor" aria-hidden="true">
        <svg className="qs-reviews-bg-grid" viewBox="0 0 1000 600" fill="none">
          <path d="M-100 150 L400 650 M100 50 L600 650 M300 -50 L800 650" stroke="#0aa8ef" strokeOpacity="0.05" strokeWidth="1.5" />
          <path d="M-100 350 L900 180 M-100 480 L900 310" stroke="#0aa8ef" strokeOpacity="0.05" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container-wide qs-reviews-container">
        
        {/* Main 2-Column Split: Image Left, Testimonial Right */}
        <div className="qs-reviews-split-grid">
          
          {/* Left Column: House Solar Installation Image with Floating Google Badge */}
          <div className="qs-reviews-image-wrapper">
            <img
              src="/images/customer_reviews_home_exact.png"
              alt="Queensland home with Quick Solar rooftop solar panel installation"
              className="qs-reviews-featured-image"
              loading="lazy"
            />
          </div>

          {/* Right Column: Customer Stories, Heading, and Review Card Carousel */}
          <div className="qs-reviews-content-wrapper">
            
            <div className="qs-reviews-header">
              <span className="qs-reviews-kicker">CUSTOMER STORIES</span>
              <h2 className="qs-reviews-title">What Our Customers Say</h2>
            </div>

            {/* Testimonial Quote Card (Fixed Height for zero layout shift) */}
            <div className="qs-reviews-card-container">
              <div className={`qs-reviews-card ${isAnimating ? 'is-animating' : ''}`}>
                
                {/* Top Quote Icon & Stars */}
                <div className="qs-reviews-card-top">
                  <div className="qs-reviews-quote-icon" aria-hidden="true">
                    <svg width="32" height="24" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 26V14.5C0 6.5 4.5 1.5 13.5 0L15.5 3.5C9.5 5 7.5 8 7 11.5H15V26H0ZM19 26V14.5C19 6.5 23.5 1.5 32.5 0L34.5 3.5C28.5 5 26.5 8 26 11.5H34V26H19Z" fill="#0AA8EF" fillOpacity="0.45"/>
                    </svg>
                  </div>
                  <div className="qs-reviews-stars-wrap">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                    <span className="qs-reviews-source-label">Google Review</span>
                  </div>
                </div>

                {/* Review Text */}
                <div className="qs-reviews-text-stage">
                  <p className="qs-reviews-text">
                    {currentReview.text}
                  </p>
                </div>

                {/* Reviewer Author Profile */}
                <div className="qs-reviews-author-row">
                  <div className="qs-reviews-avatar">
                    <span>{currentReview.initials}</span>
                  </div>
                  <div className="qs-reviews-author-meta">
                    <h4 className="qs-reviews-author-name">{currentReview.name}</h4>
                    <span className="qs-reviews-author-sub">{currentReview.suburb} — {currentReview.source}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Carousel Controls: Fixed Anchored Row (Never Shifts Position) */}
            <div className="qs-reviews-controls-row">
              <div className="qs-reviews-nav-group">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="qs-reviews-nav-btn"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="qs-reviews-dots">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`qs-reviews-dot ${currentIndex === idx ? 'is-active' : ''}`}
                      aria-label={`Go to review ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="qs-reviews-nav-btn"
                  aria-label="Next review"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <a
                href="https://www.google.com/search?q=Quick+Solar+Australia+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="qs-reviews-read-more"
              >
                <span>READ MORE REVIEWS</span>
                <ArrowRight size={16} />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Feature Bar: 3 Columns with Icons and Dividers */}
        <div className="qs-reviews-bottom-bar">
          <div className="qs-reviews-feature-item">
            <div className="qs-reviews-feat-icon-wrap icon-green">
              <Users size={19} />
            </div>
            <span className="qs-reviews-feat-text">Friendly Local Team</span>
          </div>

          <div className="qs-reviews-bar-divider" aria-hidden="true" />

          <div className="qs-reviews-feature-item">
            <div className="qs-reviews-feat-icon-wrap icon-blue">
              <Clock size={19} />
            </div>
            <span className="qs-reviews-feat-text">On-Time Installation</span>
          </div>

          <div className="qs-reviews-bar-divider" aria-hidden="true" />

          <div className="qs-reviews-feature-item">
            <div className="qs-reviews-feat-icon-wrap icon-green">
              <ShieldCheck size={19} />
            </div>
            <span className="qs-reviews-feat-text">Clear Expert Advice</span>
          </div>
        </div>

      </div>
    </section>
  );
}
