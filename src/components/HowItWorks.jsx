import React from 'react';
import { Search, PenTool, CheckCircle, Wrench, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onOpenQuote }) {
  const steps = [
    {
      num: '01',
      title: 'Free Satellite CAD Roof Assessment',
      desc: 'Our Clean Energy Council engineers use high-resolution satellite imagery and your recent power bills to calculate your exact roof shading, tilt, and optimal solar yield.'
    },
    {
      num: '02',
      title: 'Custom Engineering & Guaranteed Quote',
      desc: 'You receive a transparent proposal with Tier-1 component specifications, 25-year financial projections, and our 30-Day Price Beat Guarantee.'
    },
    {
      num: '03',
      title: '$0 Deposit Pre-Approval & Rebates',
      desc: 'We handle 100% of the paperwork: claiming your federal STC rebate discount upfront and securing your 60-second Brighte $0 deposit finance approval.'
    },
    {
      num: '04',
      title: 'Half-Day Certified Installation',
      desc: 'Our SAA accredited electricians install, test, and commission your solar & battery system, connect your smart monitoring app, and submit utility grid approvals.'
    }
  ];

  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <div className="section-header">
          <div className="pill-badge pill-badge-emerald">
            <Wrench size={15} />
            <span>Turnkey Execution</span>
          </div>
          <h2 className="section-title">How Going Solar Works with Quick Solar</h2>
          <p className="section-subtitle">
            From initial satellite assessment to post-installation grid connection, we handle every detail so you can start saving without lifting a finger.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, idx) => (
            <div key={idx} className="process-card">
              <div className="process-step-num">{s.num}</div>
              <h3 className="process-card-title">{s.title}</h3>
              <p className="process-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button className="btn btn-primary btn-lg" onClick={onOpenQuote}>
            <span>Start My Free Roof Assessment</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
