import React, { useState } from 'react';
import {
  FileText,
  Sliders,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function QuickSolarDifferenceSection({ onOpenQuote }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'step-1',
      number: '01',
      stepTag: 'ANALYSIS PHASE',
      icon: FileText,
      accent: 'emerald',
      title: 'We analyse your bills',
      description: 'Our consultants work out the systems that will deliver the best value and return.',
      highlight: 'Tailored ROI & Usage Audit'
    },
    {
      id: 'step-2',
      number: '02',
      stepTag: 'DESIGN PHASE',
      icon: Sliders,
      accent: 'blue',
      title: 'You choose the design',
      description: 'Receive a proposal and select the product and price point right for you.',
      highlight: 'Transparent Pricing & Options'
    },
    {
      id: 'step-3',
      number: '03',
      stepTag: 'FULL SERVICE',
      icon: HeartHandshake,
      accent: 'amber',
      title: 'With you all the way',
      description: (
        <>
          Quick Solar is your one stop shop from{' '}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (onOpenQuote) {
                onOpenQuote({ package: 'Full Service Support & Installation' });
              }
            }}
            className="diff-link-highlight"
          >
            support
          </a>{' '}
          to installation, even cleaning.
        </>
      ),
      highlight: 'Turnkey Lifetime Support'
    }
  ];

  return (
    <section className="qs-difference-modern-section" id="difference">
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.85rem' }}>
            <Sparkles size={14} />
            <span>HOW WE WORK WITH YOU</span>
          </div>
          <h2 className="section-title">
            The Quick Solar <span className="text-emerald">Difference</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            We provide simple and straightforward proposals backed by full-service support. So you can start saving, sooner.
          </p>
        </div>

        {/* 3-Step Connected Journey Pipeline */}
        <div className="difference-journey-wrapper">
          
          {/* Connecting Track Line (Desktop) */}
          <div className="journey-connector-track" aria-hidden="true">
            <div className="connector-pulse-line" />
          </div>

          <div className="journey-steps-grid">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.id}
                  className={`journey-step-card theme-${step.accent} ${isSelected ? 'is-active-step' : ''}`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  {/* Step Node Header */}
                  <div className="journey-node-row">
                    <div className="journey-step-circle">
                      <span className="step-circle-num">{step.number}</span>
                    </div>
                    <span className="journey-tag-badge">{step.stepTag}</span>
                  </div>

                  {/* Icon & Glow Box */}
                  <div className="journey-icon-aura">
                    <Icon size={26} strokeWidth={2.2} />
                  </div>

                  {/* Content */}
                  <div className="journey-card-body">
                    <h3 className="journey-card-heading">{step.title}</h3>
                    <p className="journey-card-desc">{step.description}</p>
                  </div>

                  {/* Micro-Pill Tag */}
                  <div className="journey-card-footer">
                    <div className="journey-highlight-pill">
                      <Check size={13} strokeWidth={3} />
                      <span>{step.highlight}</span>
                    </div>
                  </div>

                  {/* Accent Bottom Glow Bar */}
                  <div className="journey-bottom-glow-bar" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Reassurance Floating Banner */}
        <div className="difference-elevated-cta-dock">
          <div className="dock-left-content">
            <div className="dock-shield-icon">
              <ShieldCheck size={26} />
            </div>
            <div className="dock-copy">
              <span className="dock-badge">CEC ACCREDITED PROCESS</span>
              <h4>Start your journey to zero electricity bills today.</h4>
            </div>
          </div>

          <button
            type="button"
            className="dock-action-btn"
            onClick={() => onOpenQuote && onOpenQuote({ package: 'The Quick Solar Difference Proposal' })}
          >
            <span>Request Your Custom Proposal</span>
            <ArrowRight size={17} />
          </button>
        </div>

      </div>
    </section>
  );
}
