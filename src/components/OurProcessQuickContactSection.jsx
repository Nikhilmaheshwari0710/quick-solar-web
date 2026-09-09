import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Send
} from 'lucide-react';
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

  return (
    <section className="our-process-contact-section" id="process-contact">
      <div className="container-wide">
        
        <div className="process-contact-grid">
          
          {/* Left Column: Our Process */}
          <div className="our-process-column">
            <div className="process-header">
              <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.85rem' }}>
                <Sparkles size={14} />
                <span>STEP BY STEP GUIDE</span>
              </div>
              <h2 className="process-main-title">
                Our <span className="text-emerald">Process</span>
              </h2>
            </div>

            {/* Process Steps Timeline */}
            <div className="process-timeline">
              
              {/* Step 1 */}
              <div className="timeline-step-item">
                <div className="timeline-num-circle">1</div>
                <div className="timeline-step-content">
                  <p>
                    <a
                      href="#quick-contact-form"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('quick-contact-form');
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                      className="process-link-emerald"
                    >
                      Contact Quick Solar
                    </a>{' '}
                    by filling our quick contact form or giving us a call. Our solar expert will take some important details such as your roof type, electricity bill amount, direction and roof angle, the product you require and your budget.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="timeline-step-item">
                <div className="timeline-num-circle">2</div>
                <div className="timeline-step-content">
                  <p>
                    After getting all details, our solar expert and SAA Accredited Designers &amp; Installers will discuss and draw your roof plan by using cutting edge technology software. We will provide you with a full contract with a fully installed price within 24 hours.
                  </p>
                  <p style={{ marginTop: '0.65rem' }}>
                    Sign the contract and send it back to us. We will take a few more days to prepare your product.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="timeline-step-item">
                <div className="timeline-num-circle">3</div>
                <div className="timeline-step-content">
                  <p>
                    <Link to="/about-us" className="process-link-emerald">
                      Our installation team
                    </Link>{' '}
                    will get in touch with you to check your suitable time and day for the solar installation. Our installer usually takes 4-5 hours for an average{' '}
                    <Link to="/packages" className="process-link-emerald">
                      6kw solar system installation Brisbane
                    </Link>
                    .
                  </p>
                  <p style={{ marginTop: '0.65rem' }}>
                    After installation Quick Solar will submit required documents to your energy provider in terms of getting the grid connection process done.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Golden / Executive Quick Contact Form */}
          <div className="quick-contact-column" id="quick-contact-form">
            <div className="quick-contact-gold-card">
              <div className="quick-contact-header">
                <h3 className="quick-contact-title">Quick Contact</h3>
                <p className="quick-contact-subtitle">Get in touch with our Brisbane solar specialists</p>
              </div>

              {submitted ? (
                <div className="quick-contact-success">
                  <CheckCircle2 size={48} className="text-emerald" />
                  <h4>Message Received!</h4>
                  <p>Thank you, {formData.name || 'Friend'}. Our solar consultant will call you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="quick-contact-form-body">
                  <div className="qc-input-group">
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="qc-input-field"
                    />
                  </div>

                  <div className="qc-input-group">
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="qc-input-field"
                    />
                  </div>

                  <div className="qc-input-group">
                    <input
                      type="tel"
                      required
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="qc-input-field"
                    />
                  </div>

                  <div className="qc-input-group">
                    <input
                      type="text"
                      required
                      placeholder="Post code"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="qc-input-field"
                    />
                  </div>

                  <div className="qc-input-group">
                    <textarea
                      rows={4}
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="qc-textarea-field"
                    />
                  </div>

                  <button type="submit" className="btn-qc-submit">
                    <span>SEND</span>
                    <Send size={16} />
                  </button>

                  <div className="qc-security-note">
                    <ShieldCheck size={14} />
                    <span>Your details are safe. 100% Privacy Protected.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
