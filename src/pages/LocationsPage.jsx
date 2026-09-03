import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICE_LOCATIONS } from '../data/siteData';

export default function LocationsPage({ onOpenQuote }) {
  const [selectedLoc, setSelectedLoc] = useState(SERVICE_LOCATIONS[0]);

  return (
    <div className="page-locations">
      <section className="hero" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.75rem' }}>
              <MapPin size={15} />
              <span>Service Area Hubs</span>
            </div>
            <h1 className="hero-headline">
              Quick Solar <span className="text-gradient-solar">Service Areas & Locations</span>
            </h1>
            <p className="hero-subhead" style={{ margin: '0.75rem auto 1.5rem auto' }}>
              Local Clean Energy Council accredited installation teams operating across Greater Brisbane, Logan, Ipswich, Moreton Bay, Redlands, and Perth WA.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {SERVICE_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="location-card"
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--slate-200)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--slate-900)' }}>
                      {loc.name}
                    </h3>
                    <div style={{ background: 'var(--primary-light)', padding: '0.5rem', borderRadius: '10px', color: 'var(--primary-hover)' }}>
                      <MapPin size={20} />
                    </div>
                  </div>

                  <div style={{ fontSize: '0.9rem', color: 'var(--slate-600)', marginBottom: '1.25rem' }}>
                    {loc.address}
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--slate-400)', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                      Key Suburbs Serviced:
                    </div>
                    <div className="location-chips">
                      {loc.suburbs.map((s, idx) => (
                        <span key={idx} className="loc-chip">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--slate-100)' }}>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => onOpenQuote({ location: loc.name })}
                  >
                    <span>Check Installers in {loc.name}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
