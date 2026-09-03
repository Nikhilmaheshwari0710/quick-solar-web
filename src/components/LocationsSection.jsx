import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function LocationsSection({ onOpenQuote }) {
  const locations = [
    {
      state: 'Queensland (Headquarters)',
      office: 'Brisbane HQ',
      address: 'Level 1, 16 McDougall Street, Milton QLD 4064',
      phone: '(07) 35 541 345 / 1300 969 557',
      email: 'info@quicksolar.com.au',
      hours: 'Mon - Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 3:00 PM',
      areas: ['Brisbane Metro', 'Gold Coast', 'Sunshine Coast', 'Logan', 'Ipswich', 'Toowoomba', 'Mackay', 'Gladstone', 'Moreton Bay']
    },
    {
      state: 'Western Australia',
      office: 'Perth Regional Office',
      address: '61 Pulchella Ramble, Banksia Grove WA 6031',
      phone: '1300 969 557',
      email: 'wa@quicksolar.com.au',
      hours: 'Mon - Fri: 8:00 AM – 5:30 PM | Sat: By Appointment',
      areas: ['Perth Metro', 'Joondalup', 'Mandurah', 'Rockingham', 'Fremantle', 'Swan Valley', 'Armadale', 'Banksia Grove']
    }
  ];

  return (
    <section className="section section-alt" id="locations">
      <div className="container">
        <div className="section-header">
          <div className="pill-badge pill-badge-emerald">
            <MapPin size={15} />
            <span>Service Coverage</span>
          </div>
          <h2 className="section-title">Serving Queensland & Western Australia</h2>
          <p className="section-subtitle">
            Local SAA accredited installation teams on the ground in Brisbane, the Gold Coast, Sunshine Coast, and Greater Perth.
          </p>
        </div>

        <div className="locations-grid">
          {locations.map((loc, idx) => (
            <div key={idx} className="location-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span className="pill-badge pill-badge-gold" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    {loc.state}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{loc.office}</h3>
                </div>
                <div style={{ background: 'var(--primary-light)', padding: '0.65rem', borderRadius: '12px', color: 'var(--primary-hover)' }}>
                  <MapPin size={24} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem', color: 'var(--slate-600)', margin: '0.5rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>{loc.address}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} style={{ fontWeight: '600', color: 'var(--slate-800)' }}>
                    {loc.phone}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <a href={`mailto:${loc.email}`}>{loc.email}</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>{loc.hours}</span>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate-400)', letterSpacing: '0.04em' }}>
                  Key Service Suburbs & Hubs:
                </div>
                <div className="location-chips">
                  {loc.areas.map((area, i) => (
                    <span key={i} className="loc-chip">{area}</span>
                  ))}
                </div>
              </div>

              <button
                className="btn btn-outline btn-sm"
                style={{ marginTop: '1rem', width: '100%' }}
                onClick={onOpenQuote}
              >
                <span>Check Availability in My Postcode</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
