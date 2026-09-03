import React, { useState, useId } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    propertyType: 'Residential Home',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const nameInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();
  const postcodeInputId = useId();
  const propTypeId = useId();
  const notesInputId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (err) {
      // Ignore
    }
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="pill-badge pill-badge-emerald">
            <Mail size={15} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Speak with an Accredited Solar Expert</h2>
          <p className="section-subtitle">
            Need a tailored CAD solar layout, custom commercial proposal, or have questions about your electricity meter? We’re here to help.
          </p>
        </div>

        <div className="calc-wrapper">
          {/* Left: Contact Form */}
          <div className="calc-inputs" style={{ background: 'var(--white)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--primary-light)',
                  color: 'var(--primary-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  Thank You, {formData.name || 'Friend'}!
                </h3>
                <p style={{ color: 'var(--slate-600)', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                  Your inquiry has been routed to our SAA engineering team. A certified solar consultant will review your rooftop and get back to you within 2 business hours.
                </p>
                <div style={{
                  background: 'var(--slate-50)',
                  border: '1px solid var(--slate-200)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'inline-block'
                }}>
                  <strong>Inquiry Reference:</strong> <span style={{ color: 'var(--primary)', fontWeight: '700' }}>#QS-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Request a Fast Response</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor={nameInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input
                      id={nameInputId}
                      type="text"
                      required
                      placeholder="e.g. John Citizen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1.5px solid var(--slate-200)',
                        background: 'var(--slate-50)'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor={phoneInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Phone Number *
                    </label>
                    <input
                      id={phoneInputId}
                      type="tel"
                      required
                      placeholder="e.g. 0412 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1.5px solid var(--slate-200)',
                        background: 'var(--slate-50)'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor={emailInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Email Address *
                    </label>
                    <input
                      id={emailInputId}
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1.5px solid var(--slate-200)',
                        background: 'var(--slate-50)'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor={postcodeInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Postcode / Suburb *
                    </label>
                    <input
                      id={postcodeInputId}
                      type="text"
                      required
                      placeholder="e.g. 4064 Milton"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1.5px solid var(--slate-200)',
                        background: 'var(--slate-50)'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={propTypeId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                    Property Type & Interest
                  </label>
                  <select
                    id={propTypeId}
                    className="calc-select"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  >
                    <option value="Residential Home">Residential Home (6.6kW - 13.2kW)</option>
                    <option value="Solar + Battery Storage">Solar + Battery Storage (Tesla / Sungrow)</option>
                    <option value="Commercial Business">Commercial Business (20kW - 100kW+)</option>
                    <option value="EV Charger Integration">Solar EV Charger Integration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={notesInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id={notesInputId}
                    rows="3"
                    placeholder="Tell us about your roof type (Tile/Colorbond), current power bill, or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--slate-200)',
                      background: 'var(--slate-50)',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>Send Consultation Request</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--slate-500)' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--primary)' }} />
                  <span>Your privacy is 100% protected. No spam ever.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right: Direct Contact Info & HQ Details */}
          <div className="calc-results">
            <div>
              <div className="pill-badge pill-badge-dark" style={{ marginBottom: '1.25rem' }}>
                <span>Quick Solar Support Team</span>
              </div>
              <h3 style={{ fontSize: '1.85rem', fontWeight: '800', color: 'var(--white)', marginBottom: '1rem' }}>
                We're Here When You Need Us
              </h3>
              <p style={{ color: 'var(--slate-300)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Call our direct Australian hotline or visit our Brisbane office for in-person system consultations and inverter demonstration units.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.75rem', borderRadius: '12px', color: 'var(--sun-gold)' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--slate-400)', fontWeight: '700' }}>Toll Free Hotline</div>
                  <a href="tel:1300969557" style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--white)' }}>
                    1300 969 557
                  </a>
                  <div style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>Direct QLD Line: (07) 35 541 345</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.75rem', borderRadius: '12px', color: 'var(--primary-light)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--slate-400)', fontWeight: '700' }}>Brisbane Headquarters</div>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--white)' }}>
                    Level 1, 16 McDougall Street
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>Milton QLD 4064 Australia</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.75rem', borderRadius: '12px', color: 'var(--sun-gold)' }}>
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--slate-400)', fontWeight: '700' }}>Customer Hours</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--white)' }}>
                    Monday – Friday: 8:00 AM – 6:00 PM
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--slate-300)' }}>Saturday: 9:00 AM – 3:00 PM (AEST)</div>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              fontSize: '0.85rem',
              color: 'var(--slate-300)'
            }}>
              ⭐ <strong>Clean Energy Council Approved Seller</strong> committed to the Solar Consumer Code of Conduct.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
