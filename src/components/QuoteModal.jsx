import React, { useState, useId } from 'react';
import { X, ArrowRight, ArrowLeft, Sun, Battery, Building2, Home, Phone, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, onClose, initialData = {} }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: 'House',
    roofType: 'Colorbond Tin',
    quarterlyBill: initialData.bill || 650,
    hasBattery: initialData.battery || false,
    systemPackage: initialData.package || initialData.system || '6.6 kW Popular System',
    location: initialData.location || 'Brisbane & SEQ',
    fullName: '',
    phone: '',
    email: '',
    postcode: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const nameInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();
  const postcodeInputId = useId();
  const addressInputId = useId();

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 3) {
      const generatedRef = `QS-${Math.floor(100000 + Math.random() * 900000)}`;
      setRefNumber(generatedRef);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    } else {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetAndClose = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Free 24h Rooftop Solar Assessment
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--slate-900)', marginTop: '0.2rem' }}>
              {submitted ? 'Quote Request Confirmed!' : `Step ${step} of 3: ${step === 1 ? 'Property & Roof' : step === 2 ? 'Power Bill & Sizing' : 'Contact & Postcode'}`}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={resetAndClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {!submitted && (
            <div className="modal-progress">
              <div
                className="modal-progress-bar"
                style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
              ></div>
            </div>
          )}

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'var(--primary-light)',
                color: 'var(--primary-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}>
                <CheckCircle2 size={42} />
              </div>

              <h4 style={{ fontSize: '1.65rem', fontWeight: '800', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                You're All Set, {formData.fullName || 'Valued Customer'}!
              </h4>

              <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
                Our Clean Energy Council certified design team is generating your tailored satellite CAD report with full STC rebate deductions.
              </p>

              <div style={{
                background: 'var(--slate-50)',
                border: '1.5px solid var(--slate-200)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                marginBottom: '1.75rem',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Booking Reference:</span>
                  <strong style={{ color: 'var(--primary)' }}>{refNumber}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Estimated Sizing:</span>
                  <strong>{formData.systemPackage}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>Guarantee:</span>
                  <span style={{ color: 'var(--sun-gold-hover)', fontWeight: '700' }}>30-Day Price Beat</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="tel:1300969557" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  <Phone size={18} />
                  <span>Call 1300 969 557 For Priority Sizing</span>
                </a>
                <button className="btn btn-outline" style={{ width: '100%' }} onClick={resetAndClose}>
                  Done & Back to Website
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1: Property Type & Roof Type */}
              {step === 1 && (
                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.95rem', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    What type of property are you installing solar on?
                  </label>
                  <div className="modal-choice-grid">
                    {['House', 'Townhouse / Duplex', 'Commercial Premise', 'Rural / Acreage'].map((pt) => (
                      <button
                        type="button"
                        key={pt}
                        className={`modal-choice-btn ${formData.propertyType === pt ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, propertyType: pt })}
                      >
                        {pt === 'Commercial Premise' ? <Building2 size={24} /> : <Home size={24} />}
                        <span>{pt}</span>
                      </button>
                    ))}
                  </div>

                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.95rem', color: 'var(--slate-900)', margin: '1.5rem 0 0.5rem 0' }}>
                    What is your roof material?
                  </label>
                  <div className="modal-choice-grid">
                    {['Colorbond Tin / Metal', 'Concrete Tile', 'Terracotta Tile', 'Klip-Lok / Flat'].map((rt) => (
                      <button
                        type="button"
                        key={rt}
                        className={`modal-choice-btn ${formData.roofType === rt ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, roofType: rt })}
                      >
                        <Sun size={20} />
                        <span>{rt}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Bill & Battery Selection */}
              {step === 2 && (
                <div>
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', marginBottom: '0.5rem' }}>
                      <span>Average Quarterly Electricity Bill:</span>
                      <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>${formData.quarterlyBill} / qtr</span>
                    </div>
                    <input
                      type="range"
                      min="300"
                      max="2000"
                      step="50"
                      value={formData.quarterlyBill}
                      onChange={(e) => setFormData({ ...formData, quarterlyBill: Number(e.target.value) })}
                      className="calc-slider"
                    />
                  </div>

                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.95rem', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    Are you interested in Solar Battery Storage (Tesla / Sungrow)?
                  </label>
                  <div className="modal-choice-grid">
                    <button
                      type="button"
                      className={`modal-choice-btn ${!formData.hasBattery ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, hasBattery: false })}
                    >
                      <Sun size={24} />
                      <span>Solar Only (Fastest Payback)</span>
                    </button>
                    <button
                      type="button"
                      className={`modal-choice-btn ${formData.hasBattery ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, hasBattery: true })}
                    >
                      <Battery size={24} />
                      <span>Solar + Battery (Blackout Backup)</span>
                    </button>
                  </div>

                  <div style={{
                    background: 'var(--slate-50)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--slate-200)',
                    marginTop: '1.25rem',
                    fontSize: '0.85rem',
                    color: 'var(--slate-600)'
                  }}>
                    💡 <strong>Did you know?</strong> Our systems include Brighte $0 Deposit finance options from $3/day.
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Suburb Details */}
              {step === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label htmlFor={nameInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      id={nameInputId}
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1.5px solid var(--slate-200)',
                        background: 'var(--slate-50)'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor={phoneInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                        Mobile Phone *
                      </label>
                      <input
                        id={phoneInputId}
                        type="tel"
                        required
                        placeholder="0412 000 000"
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
                    <label htmlFor={emailInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Email Address (For CAD Report) *
                    </label>
                    <input
                      id={emailInputId}
                      type="email"
                      required
                      placeholder="sarah@example.com.au"
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
                    <label htmlFor={addressInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Street Address (For Satellite Shading Analysis)
                    </label>
                    <input
                      id={addressInputId}
                      type="text"
                      placeholder="123 Example Street"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                {step > 1 ? (
                  <button type="button" className="btn btn-outline" onClick={handlePrev}>
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                ) : <div></div>}

                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleNext}
                  disabled={step === 3 && (!formData.fullName || !formData.phone || !formData.email)}
                  style={{
                    opacity: (step === 3 && (!formData.fullName || !formData.phone || !formData.email)) ? 0.6 : 1
                  }}
                >
                  <span>{step === 3 ? 'Claim My Guaranteed Quote' : 'Continue'}</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.775rem', color: 'var(--slate-400)' }}>
                🔒 100% Free & No Obligation • Protected by Clean Energy Council Consumer Code
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
