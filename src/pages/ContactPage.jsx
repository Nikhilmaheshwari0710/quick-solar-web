import React, { useState, useId } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2,
  ShieldCheck, Award, Building2, ArrowRight, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitCrmLead, trackInteraction } from '../utils/crm';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    propertyType: 'Residential Home',
    serviceNeeded: 'Solar + Battery Package',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [activeMapTab, setActiveMapTab] = useState('brisbane');

  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const postcodeId = useId();
  const propTypeId = useId();
  const serviceId = useId();
  const messageId = useId();

  const handleWhatsApp = () => {
    trackInteraction('Contact Page WhatsApp Click');
    window.open(
      'https://wa.me/61480034187?text=Hi%20Quick%20Solar%20Team,%20I%20would%20like%20to%20get%20a%20free%20solar%20and%20battery%20quote.',
      '_blank'
    );
  };

  const handlePhoneClick = () => {
    trackInteraction('Contact Page Phone Call 1300969557');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await submitCrmLead({
        ...formData,
        leadSource: 'Contact Us Page Main Form'
      });

      setReferenceId(res.leadId || `QS-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch {
        // Ignore animation fallback
      }
    } catch (err) {
      console.error('Submission failed', err);
    } finally {
      setSubmitting(false);
    }
  };

  const serviceAreas = [
    { name: 'Greater Brisbane', suburbs: 'Milton HQ, CBD, Indooroopilly, Chermside, Carindale, Sunnybank' },
    { name: 'Logan & South Brisbane', suburbs: 'Springwood, Browns Plains, Underwood, Daisy Hill, Beenleigh' },
    { name: 'Ipswich & Western Corridor', suburbs: 'Ipswich CBD, Springfield Lakes, Ripley, Brassall, Redbank' },
    { name: 'Moreton Bay & North Lakes', suburbs: 'North Lakes, Redcliffe, Caboolture, Strathpine, Morayfield' },
    { name: 'Redlands Coast & Bayside', suburbs: 'Cleveland, Victoria Point, Capalaba, Redland Bay, Wynnum' },
    { name: 'Gold Coast & Hinterland', suburbs: 'Surfers Paradise, Southport, Robina, Helensvale, Coomera' },
    { name: 'Sunshine Coast', suburbs: 'Maroochydore, Caloundra, Buderim, Noosa, Kawana' },
    { name: 'Western Australia', suburbs: 'Perth Metro, Banksia Grove, Joondalup, Wanneroo, Mandurah' }
  ];

  return (
    <div className="page-contact">
      {/* 1. Header Banner */}
      <section className="contact-hero-banner">
        <div className="container">
          <div className="contact-hero-content">
            <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '1rem' }}>
              <Phone size={14} />
              <span>Direct Customer & Engineering Support</span>
            </div>
            <h1 className="contact-hero-title">
              Get in Touch with <span className="text-emerald">Quick Solar</span>
            </h1>
            <p className="contact-hero-subtitle">
              Have questions about solar sizing, battery storage, government rebates, or ready for an engineering design? Our Clean Energy Council accredited team is here to assist.
            </p>

            {/* Quick Contact Buttons */}
            <div className="contact-quick-buttons">
              <a href="tel:1300969557" className="btn btn-hero-emerald" onClick={handlePhoneClick}>
                <Phone size={18} />
                <span>Call 1300 969 557</span>
              </a>
              <button type="button" className="btn btn-whatsapp" onClick={handleWhatsApp}>
                <MessageSquare size={18} />
                <span>Chat via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid (Form + Contact Information) */}
      <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        <div className="container-wide">
          <div className="contact-main-grid">
            {/* Left: Interactive Contact Form with CRM Connectivity */}
            <div className="contact-form-card">
              <div className="contact-form-header">
                <h2 className="contact-form-title">Send Us an Inquiry</h2>
                <p className="contact-form-desc">
                  Fill in your property details for an accurate proposal and response within 2 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="contact-success-box">
                  <div className="contact-success-icon">
                    <CheckCircle2 size={42} />
                  </div>
                  <h3 className="contact-success-title">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p className="contact-success-desc">
                    Your inquiry has been successfully routed directly to our CEC engineering desk. One of our senior solar designers will review your roof orientation and contact you shortly.
                  </p>
                  <div className="contact-reference-pill">
                    <span>Enquiry Reference:</span>
                    <strong>{referenceId}</strong>
                  </div>
                  <div style={{ marginTop: '1.75rem' }}>
                    <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-body">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor={nameId} className="form-label">Full Name *</label>
                      <input
                        id={nameId}
                        type="text"
                        required
                        placeholder="e.g. Michael Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={phoneId} className="form-label">Phone Number *</label>
                      <input
                        id={phoneId}
                        type="tel"
                        required
                        placeholder="e.g. 0412 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor={emailId} className="form-label">Email Address *</label>
                      <input
                        id={emailId}
                        type="email"
                        required
                        placeholder="michael@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={postcodeId} className="form-label">Suburb or Postcode *</label>
                      <input
                        id={postcodeId}
                        type="text"
                        required
                        placeholder="e.g. Milton 4064"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor={propTypeId} className="form-label">Property Type</label>
                      <select
                        id={propTypeId}
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="form-input"
                      >
                        <option value="Residential Single Storey">Residential (Single Storey)</option>
                        <option value="Residential Double Storey">Residential (Double Storey)</option>
                        <option value="Commercial Business">Commercial Business / Warehouse</option>
                        <option value="Rural Acreage">Rural Property / Acreage</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor={serviceId} className="form-label">Service Needed</label>
                      <select
                        id={serviceId}
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="form-input"
                      >
                        <option value="Solar + Battery Package">Solar + Battery Combo Package</option>
                        <option value="New Solar System Only">New Solar System (6.6kW - 13.2kW)</option>
                        <option value="Home Battery Storage Retrofit">Battery Storage Retrofit (Tesla/Sungrow)</option>
                        <option value="Commercial Solar Proposal">Commercial Solar (20kW - 100kW+)</option>
                        <option value="System Maintenance & Health Check">System Inspection & Health Check</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor={messageId} className="form-label">Message / Roof Notes (Optional)</label>
                    <textarea
                      id={messageId}
                      rows={3}
                      placeholder="Tell us about your quarterly electricity bill, roof type, or specific brand preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-hero-emerald btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {submitting ? (
                      <span>Routing to Engineering Queue...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Free Inquiry to CRM</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <div className="contact-form-guarantee">
                    <ShieldCheck size={16} className="text-emerald" />
                    <span>No-obligation free quote • $0 Deposit Brighte Finance available • 30-Day Price Beat</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Business Details, Hours, Offices & Accreditations */}
            <div className="contact-details-column">
              {/* Card 1: Key Contact Information */}
              <div className="contact-info-card">
                <h3 className="contact-card-heading">Contact Details</h3>

                <div className="contact-info-list">
                  <a href="tel:1300969557" className="contact-info-item" onClick={handlePhoneClick}>
                    <div className="contact-icon-badge">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="contact-info-label">Direct Hotline</div>
                      <div className="contact-info-val">1300 969 557</div>
                      <div className="contact-info-sub">Toll-free across all Australian regions</div>
                    </div>
                  </a>

                  <a href="mailto:info@quicksolar.com.au" className="contact-info-item">
                    <div className="contact-icon-badge">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="contact-info-label">Email Address</div>
                      <div className="contact-info-val">info@quicksolar.com.au</div>
                      <div className="contact-info-sub">General inquiries & plan submissions</div>
                    </div>
                  </a>

                  <div className="contact-info-item" style={{ cursor: 'default' }}>
                    <div className="contact-icon-badge">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="contact-info-label">Operating Hours</div>
                      <div className="contact-info-val">Mon – Fri: 7:00 AM – 6:00 PM AEST</div>
                      <div className="contact-info-sub">Sat: 8:00 AM – 4:00 PM • Sun: Online On-Call</div>
                      <div className="live-status-pill">
                        <span className="live-dot" /> Open Today
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Office Locations & Business Info */}
              <div className="contact-info-card">
                <h3 className="contact-card-heading">Office Locations & Business Information</h3>

                <div className="office-location-item">
                  <div className="office-tag">QLD Headquarters</div>
                  <div className="office-name">Quick Solar Brisbane</div>
                  <div className="office-address">
                    <MapPin size={16} className="text-emerald" />
                    <span>Level 1, 42 Park Road, Milton QLD 4064</span>
                  </div>
                  <div className="office-sub">Service: Greater Brisbane, Logan, Ipswich, Moreton Bay, Gold Coast, Sunshine Coast</div>
                </div>

                <div className="office-location-item" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed var(--slate-200)' }}>
                  <div className="office-tag">WA Branch</div>
                  <div className="office-name">Quick Solar Western Australia</div>
                  <div className="office-address">
                    <MapPin size={16} className="text-emerald" />
                    <span>12 Jewel Way, Banksia Grove WA 6031</span>
                  </div>
                  <div className="office-sub">Service: Perth Metro, Joondalup, Wanneroo, Mandurah</div>
                </div>

                <div className="business-credentials">
                  <div className="credential-pill">
                    <strong>ABN:</strong> 82 642 987 123
                  </div>
                  <div className="credential-pill">
                    <ShieldCheck size={14} className="text-emerald" />
                    <span>CEC Approved Seller</span>
                  </div>
                  <div className="credential-pill">
                    <Award size={14} className="icon-gold" />
                    <span>SAA Accredited</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="contact-social-section">
                  <div className="social-label">Connect with Us Online:</div>
                  <div className="social-links-grid">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link-btn" aria-label="Facebook">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link-btn" aria-label="Instagram">Instagram</a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link-btn" aria-label="LinkedIn">LinkedIn</a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link-btn" aria-label="YouTube">YouTube</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Map & Office Directions Section */}
      <section className="section section-alt" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container-wide">
          <div className="section-header">
            <div className="pill-badge pill-badge-emerald">
              <MapPin size={14} />
              <span>Interactive Map & Directions</span>
            </div>
            <h2 className="section-title">Visit Our Engineering Design Centers</h2>
            <p className="section-subtitle">
              Book a face-to-face consultation with our solar engineers to review 3D shadow models of your roof.
            </p>
          </div>

          {/* Map Tab Switcher */}
          <div className="map-tabs-container">
            <button
              className={`map-tab-btn ${activeMapTab === 'brisbane' ? 'active' : ''}`}
              onClick={() => setActiveMapTab('brisbane')}
            >
              <Building2 size={16} />
              <span>Brisbane HQ (Milton QLD)</span>
            </button>
            <button
              className={`map-tab-btn ${activeMapTab === 'wa' ? 'active' : ''}`}
              onClick={() => setActiveMapTab('wa')}
            >
              <Building2 size={16} />
              <span>Perth Office (Banksia Grove WA)</span>
            </button>
          </div>

          <div className="map-embed-card">
            {activeMapTab === 'brisbane' ? (
              <iframe
                title="Quick Solar Brisbane Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14159.22485521074!2d153.003507!3d-27.469771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91509a25b2ec63%3A0x502a35af3de8d00!2sMilton%20QLD%204064!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <iframe
                title="Quick Solar WA Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27163.66311894451!2d115.792505!3d-31.697526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bcd4ce1f6f1c4e7%3A0x504f0b535df42b0!2sBanksia%20Grove%20WA%206031!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </div>
      </section>

      {/* 4. Confirmed Service Areas Grid */}
      <section className="section" style={{ paddingTop: '3.5rem', paddingBottom: '4.5rem' }}>
        <div className="container-wide">
          <div className="section-header">
            <div className="pill-badge pill-badge-emerald">
              <Check size={14} strokeWidth={3} />
              <span>Full Coverage Guarantee</span>
            </div>
            <h2 className="section-title">Our Confirmed Installation Service Areas</h2>
            <p className="section-subtitle">
              Quick Solar clean energy installation teams service all major suburbs with local master electricians.
            </p>
          </div>

          <div className="service-areas-grid-8">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="service-area-card">
                <div className="service-area-card-header">
                  <MapPin size={18} className="text-emerald" />
                  <h3 className="service-area-card-title">{area.name}</h3>
                </div>
                <p className="service-area-card-suburbs">{area.suburbs}</p>
                <div className="service-area-badge">✓ Free On-Site Assessment</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
