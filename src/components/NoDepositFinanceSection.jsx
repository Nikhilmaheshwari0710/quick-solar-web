import React from 'react';
import { Check, Sun, Phone, Sparkles } from 'lucide-react';

export default function NoDepositFinanceSection({ onOpenQuote }) {
  const financePoints = [
    {
      text: 'Get 6.6kW Solar System from $3 per day. Get Great ROI.',
      highlight: true
    },
    {
      text: 'Our account keeping fee remains the same regardless of the amount and term of the fund purchase, which can range from $1,000 to $30,000.'
    },
    {
      text: 'You can choose to repay the amount over a period of 6 to 60 months, with various terms available through your selected vendor.'
    },
    {
      text: 'When you apply for a Brighte payment plan, you can get an outcome within minutes, either by seeking pre-approval or applying with a quote.'
    },
    {
      text: 'We process applications quickly to ensure a seamless experience.'
    },
    {
      text: 'If you have an active Brighte payment plan, you can reuse the amount you’ve repaid or increase your limit, subject to eligibility.'
    },
    {
      text: 'The BrightePay app helps you track your repayments, and you can make additional repayments without incurring extra costs.'
    },
    {
      text: 'We can understand that being tied down to a long-term repayment plan can be frustrating, which is why we allow you to pay off your plan faster if you choose to do so.'
    }
  ];

  return (
    <section className="no-deposit-finance-section" id="solar-finance">
      {/* Background Image Layer */}
      <div className="finance-bg-overlay" />

      <div className="container-wide finance-container">
        <div className="finance-content-wrapper">
          {/* Right Floating White Content Card */}
          <div className="finance-white-card">
            {/* Header Badge & Title */}
            <div className="finance-header">
              <div className="finance-mini-tag">
                <Sparkles size={13} />
                <span>$0 DEPOSIT BRIGHTE FINANCE</span>
              </div>
              <h2 className="finance-card-title">
                LET’S DISCUSS THE CONCEPT OF <span>NO DEPOSIT SOLAR FINANCE</span> TODAY
              </h2>
            </div>

            {/* Bullet Points */}
            <ul className="finance-points-list">
              {financePoints.map((point, index) => (
                <li key={index} className={`finance-point-item ${point.highlight ? 'is-highlight' : ''}`}>
                  <div className="finance-tick-circle">
                    <Check size={13} strokeWidth={3.5} />
                  </div>
                  <span className="finance-point-text">
                    {point.highlight ? (
                      <>
                        Get <strong className="finance-link-text">6.6kW Solar System</strong> from $3 per day. Get Great ROI.
                      </>
                    ) : (
                      point.text
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Buttons Row */}
            <div className="finance-actions-row">
              <button
                type="button"
                className="btn-finance-quote"
                onClick={() => onOpenQuote({ package: 'No Deposit Solar Finance' })}
              >
                <Sun size={17} className="btn-sun-icon" />
                <span>GET A FREE QUOTE</span>
              </button>

              <a href="tel:1300969557" className="btn-finance-phone">
                <Phone size={16} />
                <span>1300 969 557</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
