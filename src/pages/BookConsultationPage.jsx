import React, { useState, useId } from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitCrmLead } from '../utils/crm';

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    preferredDate: '',
    preferredTime: 'Morning (9am - 12pm)',
    consultationType: 'Video / Phone Consultation',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const nameInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();
  const postcodeInputId = useId();
  const dateInputId = useId();
  const timeInputId = useId();
  const typeInputId = useId();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await submitCrmLead({
      leadSource: 'Book a Consultation',
      ...formData
    });
    setRefNumber(res.leadId);
    setSubmitted(true);
    try {
      confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  return (
    <div className="page-book-consultation">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.75rem' }}>
              <Calendar size={15} />
              <span>1-on-1 Solar Engineering Call</span>
            </div>
            <h1 className="hero-headline">
              Book a Free <span className="text-gradient-solar">Solar Consultation</span>
            </h1>
            <p className="hero-subhead" style={{ margin: '0.75rem auto 1.5rem auto' }}>
              Schedule a dedicated 20-minute session with our Clean Energy Council certified designers in Milton QLD to review your satellite roof CAD layout, tariff rates, and battery feasibility.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '740px' }}>
          <div className="calc-wrapper" style={{ gridTemplateColumns: '1fr' }}>
            <div className="calc-inputs" style={{ padding: '3rem 2.5rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <CheckCircle2 size={38} />
                  </div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--slate-900)' }}>Consultation Booked!</h3>
                  <p style={{ color: 'var(--slate-600)', margin: '0.75rem 0 1.5rem 0' }}>
                    Thank you, <strong>{formData.name}</strong>. A calendar invite has been dispatched to <strong>{formData.email}</strong>. Our senior designer will prepare your custom CAD modeling in advance.
                  </p>
                  <div style={{ background: 'var(--slate-50)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'inline-block' }}>
                    Booking Ref: <strong style={{ color: 'var(--primary)' }}>{refNumber}</strong>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor={nameInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>Full Name *</label>
                      <input id={nameInputId} type="text" required placeholder="John Citizen" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--slate-200)' }} />
                    </div>
                    <div>
                      <label htmlFor={phoneInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>Phone Number *</label>
                      <input id={phoneInputId} type="tel" required placeholder="0412 000 000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--slate-200)' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor={emailInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>Email Address *</label>
                      <input id={emailInputId} type="email" required placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--slate-200)' }} />
                    </div>
                    <div>
                      <label htmlFor={postcodeInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>Postcode *</label>
                      <input id={postcodeInputId} type="text" required placeholder="4064" value={formData.postcode} onChange={(e) => setFormData({ ...formData, postcode: e.target.value })} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--slate-200)' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor={dateInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>Preferred Date</label>
                      <input id={dateInputId} type="date" value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--slate-200)' }} />
                    </div>
                    <div>
                      <label htmlFor={timeInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>Preferred Time</label>
                      <select id={timeInputId} className="calc-select" value={formData.preferredTime} onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}>
                        <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                        <option value="Afternoon (12pm - 3pm)">Afternoon (12pm - 3pm)</option>
                        <option value="Late Afternoon (3pm - 6pm)">Late Afternoon (3pm - 6pm)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor={typeInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>Consultation Format</label>
                    <select id={typeInputId} className="calc-select" value={formData.consultationType} onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}>
                      <option value="Phone Consultation">Phone Consultation</option>
                      <option value="Online Video Meeting">Online Video Meeting (Zoom/Teams)</option>
                      <option value="In-Person at Milton HQ">In-Person at Brisbane Milton HQ</option>
                      <option value="On-Site Roof Inspection">On-Site Roof Inspection</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <Calendar size={18} />
                    <span>Confirm Consultation Booking</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
