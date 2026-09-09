import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { SERVICE_LOCATIONS } from '../data/siteData';
import SolarPackageComparisonTable from '../components/SolarPackageComparisonTable';
import SolarSavingsCalculator from '../components/SolarSavingsCalculator';
import Testimonials from '../components/Testimonials';

export default function LocationDetailPage({ onOpenQuote }) {
  const { id } = useParams();
  const location = SERVICE_LOCATIONS.find(l => l.id === id) || SERVICE_LOCATIONS[0];

  return (
    <div className="page-location-detail">
      <section className="hero" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="pill-badge pill-badge-emerald">
                <MapPin size={15} />
                <span>Clean Energy Council Accredited Installers</span>
              </div>
              <h1 className="hero-headline">
                Solar Panel Installers in <span className="text-gradient-solar">{location.name}</span>
              </h1>
              <p className="hero-subhead">
                Looking for trusted, high-efficiency solar panel installations in {location.name}? Quick Solar provides SAA accredited installations, $0 upfront Brighte finance from $3/day, and our ironclad 30-Day Price Beat Guarantee.
              </p>

              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--slate-200)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                margin: '0.5rem 0 1rem 0'
              }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)', marginBottom: '0.5rem' }}>
                  <strong>Local Network Grid:</strong> {location.gridDistributor} (Full connection approval managed)
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>
                  <strong>Headquarters & Contact:</strong> {location.phone} • {location.address}
                </div>
              </div>

              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={() => onOpenQuote({ location: location.name })}>
                  <span>Get Free {location.name} Quote</span>
                  <ArrowRight size={18} />
                </button>
                <a href="tel:1300969557" className="btn btn-outline btn-lg">
                  <Phone size={16} />
                  <span>Call {location.phone.split('/')[0]}</span>
                </a>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-main-img-wrap">
                <img
                  src="/images/solar_hero_home.jpg"
                  alt={`Quick Solar installations in ${location.name}`}
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs Covered */}
      <section className="section section-alt" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Suburbs Serviced in {location.name}</h3>
          </div>
          <div className="location-chips" style={{ justifyContent: 'center' }}>
            {location.suburbs.map((sub, idx) => (
              <span key={idx} className="loc-chip" style={{ fontSize: '0.9rem', padding: '0.45rem 1rem' }}>
                {sub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <SolarPackageComparisonTable onOpenQuote={onOpenQuote} />

      {/* Local Savings Calculator */}
      <SolarSavingsCalculator onOpenQuote={onOpenQuote} />

      {/* Local Reviews */}
      <Testimonials />
    </div>
  );
}
