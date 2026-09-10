import React, { useState } from 'react';
import { ArrowRight, Phone, Check, Clock, HardHat, Zap, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OurProcessQuickContactSection({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onOpenQuote) {
      onOpenQuote({
        package: 'Quick Contact Inquiry',
        ...formData
      });
    }
  };

  const steps = [
    {
      id: 'step-1',
      number: '01',
      tag: '01 • CONSULTATION',
      title: 'Contact Quick Solar & Property Assessment',
      description: (
        <>
          <a
            href="#quick-contact-form"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('quick-contact-form');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="process-link-accent"
          >
            Contact Quick Solar
          </a>{' '}
          by filling our quick contact form or giving us a call. Our solar expert will take some important details such as your roof type, electricity bill amount, direction and roof angle, the product you require and your budget.
        </>
      ),
      renderIcon: () => (
        <svg viewBox="0 0 100 100" fill="none" className="process-step-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Phone Handset */}
          <path
            d="M24 38C24 38 27 34 32 37C37 40 37 44 34 47C32 49 33 54 38 60C44 65 48 66 50 64C53 61 57 61 60 66C63 71 59 74 59 74C59 74 52 82 38 72C24 62 20 46 24 38Z"
            fill="#082950"
          />
          {/* Green Sound Waves */}
          <path d="M28 26C31 23 35 22 40 22" stroke="#39AF35" strokeWidth="3" strokeLinecap="round" />
          <path d="M23 20C29 16 36 15 44 16" stroke="#39AF35" strokeWidth="3" strokeLinecap="round" />
          
          {/* Bill Document Card */}
          <rect x="52" y="32" width="30" height="42" rx="5" fill="#FFFFFF" stroke="#082950" strokeWidth="3" />
          <text x="56" y="46" fill="#082950" fontSize="9" fontWeight="900" fontFamily="sans-serif">BILL</text>
          <line x1="56" y1="51" x2="78" y2="51" stroke="#E2E8F0" strokeWidth="2" />
          <circle cx="67" cy="62" r="7.5" fill="#39AF35" />
          <text x="64.5" y="65.5" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif">$</text>
        </svg>
      )
    },
    {
      id: 'step-2',
      number: '02',
      tag: '02 • DESIGN & PROPOSAL',
      title: 'Roof Plan & Tailored Proposal',
      description: (
        <>
          After getting all details, our solar expert and SAA Accredited Designers &amp; Installers will discuss and draw your roof plan by using cutting edge technology software. We will provide you with a full contract with a fully installed price within 24 hours. Sign the contract and send it back to us. We will take a few more days to prepare your product.
        </>
      ),
      renderIcon: () => (
        <svg viewBox="0 0 100 100" fill="none" className="process-step-svg" xmlns="http://www.w3.org/2000/svg">
          {/* House Structure */}
          <polygon points="18,48 38,30 58,48" fill="#E5F6FD" stroke="#082950" strokeWidth="3" strokeLinejoin="round" />
          <rect x="22" y="48" width="32" height="26" fill="#FFFFFF" stroke="#082950" strokeWidth="3" />
          <rect x="26" y="54" width="8" height="8" rx="1.5" fill="#0AA8EF" />
          
          {/* Rooftop Solar Panels */}
          <polygon points="23,45 37,32 53,45" fill="#082950" />
          <line x1="30" y1="38" x2="45" y2="38" stroke="#0AA8EF" strokeWidth="1.5" />
          <line x1="38" y1="32" x2="38" y2="45" stroke="#0AA8EF" strokeWidth="1.5" />

          {/* Proposal Document Overlay */}
          <rect x="52" y="38" width="28" height="38" rx="4" fill="#FFFFFF" stroke="#0AA8EF" strokeWidth="3" />
          <path d="M70 38V48H80" stroke="#0AA8EF" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="58" y1="52" x2="74" y2="52" stroke="#082950" strokeWidth="2" strokeLinecap="round" />
          <line x1="58" y1="58" x2="74" y2="58" stroke="#082950" strokeWidth="2" strokeLinecap="round" />
          <line x1="58" y1="64" x2="68" y2="64" stroke="#082950" strokeWidth="2" strokeLinecap="round" />
          <circle cx="72" cy="68" r="3.5" fill="#39AF35" />
        </svg>
      )
    },
    {
      id: 'step-3',
      number: '03',
      tag: '03 • INSTALL & CONNECT',
      title: 'Installation & Grid Connection Support',
      description: (
        <>
          <Link to="/about-us" className="process-link-accent">
            Our installation team
          </Link>{' '}
          will get in touch with you to check your suitable time and day for the solar installation. Our installer usually takes 4-5 hours for an average{' '}
          <Link to="/packages" className="process-link-accent">
            6kw solar system installation Brisbane
          </Link>
          . After installation Quick Solar will submit required documents to your energy provider in terms of getting the grid connection process done.
        </>
      ),
      renderIcon: () => (
        <svg viewBox="0 0 100 100" fill="none" className="process-step-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Grid Transmission Tower */}
          <line x1="68" y1="34" x2="78" y2="76" stroke="#082950" strokeWidth="2.5" />
          <line x1="88" y1="34" x2="78" y2="76" stroke="#082950" strokeWidth="2.5" />
          <line x1="65" y1="46" x2="91" y2="46" stroke="#082950" strokeWidth="2" />
          <line x1="68" y1="58" x2="88" y2="58" stroke="#082950" strokeWidth="2" />
          <line x1="69" y1="46" x2="87" y2="58" stroke="#082950" strokeWidth="1.5" />
          <line x1="87" y1="46" x2="69" y2="58" stroke="#082950" strokeWidth="1.5" />
          
          {/* Solar Installer Character */}
          <circle cx="34" cy="40" r="10" fill="#FCD34D" />
          {/* White Hardhat */}
          <path d="M22 39C22 32 27 27 34 27C41 27 46 32 46 39H22Z" fill="#FFFFFF" stroke="#082950" strokeWidth="2.5" />
          <rect x="20" y="38" width="28" height="4" rx="2" fill="#FFFFFF" stroke="#082950" strokeWidth="2" />
          {/* Body Uniform */}
          <path d="M20 74V60C20 54 26 50 34 50C42 50 48 54 48 60V74H20Z" fill="#082950" />
          {/* Green Eco Leaf Badge on uniform */}
          <circle cx="30" cy="59" r="3.5" fill="#39AF35" />

          {/* Perspective Solar Panel at bottom right */}
          <polygon points="46,74 72,74 68,64 48,64" fill="#0AA8EF" stroke="#082950" strokeWidth="2" />
          <line x1="58" y1="64" x2="59" y2="74" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="qs-journey-process-section" id="process-contact">
      
      {/* Background Decorative Watermarks & Handwriting Art */}
      <div className="qs-journey-bg-decor" aria-hidden="true">
        {/* Left Handwritten Script */}
        <div className="qs-journey-script-left">
          <span className="script-line-1">Clean</span>
          <span className="script-line-2">Energy</span>
          <span className="script-line-3">Brighter</span>
          <span className="script-line-4">Lives</span>
          <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
            <path d="M2 8C18 3 40 4 58 10" stroke="#39AF35" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Right Sun Watermark & Handwritten Script */}
        <div className="qs-journey-script-right">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="sun-sketch">
            <circle cx="24" cy="24" r="10" stroke="#0AA8EF" strokeOpacity="0.4" strokeWidth="2.5" />
            <line x1="24" y1="4" x2="24" y2="9" stroke="#0AA8EF" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="24" y1="39" x2="24" y2="44" stroke="#0AA8EF" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="4" y1="24" x2="9" y2="24" stroke="#0AA8EF" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="39" y1="24" x2="44" y2="24" stroke="#0AA8EF" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="10" y1="10" x2="14" y2="14" stroke="#0AA8EF" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="34" y1="34" x2="38" y2="38" stroke="#0AA8EF" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="10" y1="38" x2="14" y2="34" stroke="#0AA8EF" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="34" y1="14" x2="38" y2="10" stroke="#0AA8EF" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="script-right-1">A</span>
          <span className="script-right-2">Brighter</span>
          <span className="script-right-3">Tomorrow</span>
          <span className="script-right-4">Together</span>
        </div>
      </div>

      <div className="container-wide qs-journey-container">
        
        {/* Section Header */}
        <div className="qs-journey-header">
          <div className="qs-journey-kicker">
            <span className="qs-journey-kicker-line" />
            <span className="qs-journey-kicker-text">STEP BY STEP GUIDE</span>
            <span className="qs-journey-kicker-line" />
          </div>

          <h2 className="qs-journey-title">
            Our <span className="text-emerald">Process</span> &amp; Solar Journey
          </h2>
          
          <p className="qs-journey-subtitle">
            From your first conversation to grid connection, our local Brisbane team manages every step.
          </p>
        </div>

        {/* 2-Column Main Layout: Left Process Steps, Right Quick Contact Card */}
        <div className="qs-journey-split-grid">
          
          {/* Left Column: OUR PROCESS Cards with Connected Timeline Bar */}
          <div className="qs-journey-process-column">
            <h3 className="qs-process-column-heading">OUR PROCESS</h3>

            <div className="qs-timeline-connected-wrap">
              
              {/* Vertical Stepper Spine */}
              <div className="qs-timeline-spine" aria-hidden="true">
                <div className="spine-badge badge-step-1">01</div>
                <div className="spine-bar bar-1-2">
                  <span className="spine-dot" />
                </div>
                <div className="spine-badge badge-step-2">02</div>
                <div className="spine-bar bar-2-3">
                  <span className="spine-dot" />
                </div>
                <div className="spine-badge badge-step-3">03</div>
              </div>

              {/* 3 Step Cards List */}
              <div className="qs-process-cards-list">
                {steps.map((step) => (
                  <div key={step.id} className="qs-process-step-card">
                    
                    {/* Left Circular Icon */}
                    <div className="qs-process-icon-box">
                      {step.renderIcon()}
                    </div>

                    {/* Right Step Text Details */}
                    <div className="qs-process-step-body">
                      <span className="qs-step-phase-tag">{step.tag}</span>
                      <h4 className="qs-step-phase-title">{step.title}</h4>
                      <p className="qs-step-phase-desc">{step.description}</p>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Quick Contact Form Card */}
          <div className="qs-journey-contact-column" id="quick-contact-form">
            <div className="qs-contact-white-card">
              
              <div className="qs-contact-card-header">
                <h3 className="qs-contact-card-title">QUICK CONTACT</h3>
                <p className="qs-contact-card-subtitle">Get in touch with our Brisbane solar specialists</p>
              </div>

              {submitted ? (
                <div className="qs-contact-success-state">
                  <CheckCircle2 size={44} className="text-emerald" />
                  <h4>Message Received!</h4>
                  <p>Thank you, {formData.name || 'Friend'}. Our solar consultant will call you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="qs-contact-card-form">
                  <div className="qs-form-field-group">
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="qs-contact-input"
                    />
                  </div>

                  <div className="qs-form-field-group">
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="qs-contact-input"
                    />
                  </div>

                  <div className="qs-form-field-group">
                    <input
                      type="tel"
                      required
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="qs-contact-input"
                    />
                  </div>

                  <div className="qs-form-field-group">
                    <input
                      type="text"
                      required
                      placeholder="Post code"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="qs-contact-input"
                    />
                  </div>

                  <div className="qs-form-field-group">
                    <textarea
                      rows={3}
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="qs-contact-textarea"
                    />
                  </div>

                  <button type="submit" className="qs-contact-submit-btn">
                    <span>SEND</span>
                    <ArrowRight size={18} />
                  </button>

                  <div className="qs-contact-secure-note">
                    <ShieldCheck size={14} className="text-emerald" />
                    <span>Your details are safe. 100% Privacy Protected.</span>
                  </div>
                </form>
              )}

              {/* Direct Phone Callout Row */}
              <div className="qs-contact-phone-callout">
                <div className="phone-icon-bubble">
                  <Phone size={16} />
                </div>
                <div className="phone-callout-text">
                  <span className="phone-callout-label">Prefer to speak with us?</span>
                  <a href="tel:1300969557" className="phone-callout-num">
                    1300 969 557
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Feature Trust Bar: 4 Items */}
        <div className="qs-journey-bottom-bar">
          <div className="qs-journey-feat-item">
            <span className="feat-badge-green">
              <Check size={14} strokeWidth={3.5} />
            </span>
            <span className="feat-label">SAA Accredited Design</span>
          </div>

          <div className="qs-journey-bar-div" aria-hidden="true" />

          <div className="qs-journey-feat-item">
            <span className="feat-badge-green">
              <Clock size={15} strokeWidth={2.5} />
            </span>
            <span className="feat-label">24-Hour Proposal</span>
          </div>

          <div className="qs-journey-bar-div" aria-hidden="true" />

          <div className="qs-journey-feat-item">
            <span className="feat-badge-green">
              <HardHat size={15} strokeWidth={2.5} />
            </span>
            <span className="feat-label">Professional Installation</span>
          </div>

          <div className="qs-journey-bar-div" aria-hidden="true" />

          <div className="qs-journey-feat-item">
            <span className="feat-badge-green">
              <Zap size={15} strokeWidth={2.5} />
            </span>
            <span className="feat-label">Grid Connection Support</span>
          </div>
        </div>

      </div>
    </section>
  );
}
