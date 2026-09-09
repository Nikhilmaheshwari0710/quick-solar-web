import React, { useState, useId } from 'react';
import { UploadCloud, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitCrmLead } from '../utils/crm';

export default function BillUploadPage() {
  const [file, setFile] = useState(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [leadRef, setLeadRef] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const fileInputId = useId();
  const nameInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();
  const postcodeInputId = useId();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const leadData = {
      leadSource: 'Electricity Bill Upload',
      fullName,
      phone,
      email,
      postcode,
      fileName: file ? file.name : 'No file attached',
      fileSize: file ? `${(file.size / 1024).toFixed(1)} KB` : 'N/A'
    };

    const res = await submitCrmLead(leadData);
    setSubmitting(false);
    setLeadRef(res.leadId);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="page-bill-upload">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.75rem' }}>
              <UploadCloud size={15} />
              <span>Fastest Accurate Proposal</span>
            </div>
            <h1 className="hero-headline">
              Upload Your Electricity Bill for an <span className="text-gradient-solar">Exact CAD Proposal</span>
            </h1>
            <p className="hero-subhead" style={{ margin: '0.75rem auto 1.5rem auto' }}>
              Our Clean Energy Council engineers will analyze your exact tariff structure, seasonal kWh usage, and satellite roof layout to deliver an accurate 25-year financial report within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="calc-wrapper" style={{ gridTemplateColumns: '1fr' }}>
            <div className="calc-inputs" style={{ padding: '3rem 2.5rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
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

                  <h3 style={{ fontSize: '1.85rem', fontWeight: '800', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    Bill Received Successfully!
                  </h3>
                  <p style={{ color: 'var(--slate-600)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
                    Thank you, <strong>{fullName}</strong>. Our senior engineering team in Milton has started your satellite shading CAD modeling. We will email your custom proposal and call you to review the numbers.
                  </p>

                  <div style={{
                    background: 'var(--slate-50)',
                    border: '1px solid var(--slate-200)',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'inline-block',
                    marginBottom: '2rem'
                  }}>
                    <div><strong>CRM Reference Number:</strong> <span style={{ color: 'var(--primary)', fontWeight: '800' }}>{leadRef}</span></div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--slate-500)', marginTop: '4px' }}>Document: {file?.name || 'Electricity_Bill.pdf'}</div>
                  </div>

                  <div>
                    <a href="tel:1300969557" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
                      <Phone size={18} />
                      <span>Speak with Our Team: 1300 969 557</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Drag and Drop Zone */}
                  <div style={{
                    border: '2px dashed var(--slate-300)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2.5rem 1.5rem',
                    textAlign: 'center',
                    background: file ? 'var(--primary-light)' : 'var(--slate-50)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}>
                    <input
                      id={fileInputId}
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                      required
                    />
                    <label htmlFor={fileInputId} style={{ cursor: 'pointer' }}>
                      <UploadCloud size={44} style={{ color: file ? 'var(--primary)' : 'var(--slate-400)', margin: '0 auto 0.75rem auto' }} />
                      {file ? (
                        <div>
                          <strong style={{ color: 'var(--slate-900)', fontSize: '1.1rem' }}>{file.name}</strong>
                          <div style={{ fontSize: '0.85rem', color: 'var(--primary-hover)', marginTop: '4px' }}>
                            File loaded ({(file.size / 1024).toFixed(1)} KB) - Click to change
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--slate-800)' }}>
                            Click or drag your electricity bill here
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--slate-500)', marginTop: '4px' }}>
                            Supports PDF, JPG, PNG (Max 15MB)
                          </div>
                        </div>
                      )}
                    </label>
                  </div>

                  {/* Customer Details */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor={nameInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                        Full Name *
                      </label>
                      <input
                        id={nameInputId}
                        type="text"
                        required
                        placeholder="John Citizen"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                        Mobile Phone Number *
                      </label>
                      <input
                        id={phoneInputId}
                        type="tel"
                        required
                        placeholder="0412 000 000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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

                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor={emailInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                        Email Address (For CAD Report) *
                      </label>
                      <input
                        id={emailInputId}
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        Postcode *
                      </label>
                      <input
                        id={postcodeInputId}
                        type="text"
                        required
                        placeholder="4064"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
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

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={submitting}
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    <UploadCloud size={18} />
                    <span>{submitting ? 'Encrypting & Sending to CRM...' : 'Submit Bill & Get My Proposal'}</span>
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--slate-500)' }}>
                    <ShieldCheck size={16} style={{ color: 'var(--primary)' }} />
                    <span>Encrypted & confidential. We never share your power bills with third parties.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
