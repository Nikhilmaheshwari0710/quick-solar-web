import React from 'react';
import { ShieldCheck, Mail, Phone, Sparkles } from 'lucide-react';

export default function TopNotificationBar({ onOpenQuote }) {
  return (
    <div className="top-bar">
      <div className="container-wide top-bar-inner">
        {/* Left: CEC Approved Seller & 30-Day Price Beat Guarantee */}
        <div className="top-bar-left">
          <div className="top-bar-live-status">
            <span className="live-pulse-dot" />
            <span>Brisbane & WA CEC Approved Retailer</span>
          </div>
          <div className="top-bar-divider-dot">•</div>
          <div className="top-bar-item">
            <ShieldCheck size={15} className="top-bar-icon-gold" />
            <span>30-Day Price Beat Guarantee</span>
          </div>
        </div>

        {/* Right: Email & Direct Phone Pill */}
        <div className="top-bar-contacts">
          <a href="mailto:info@quicksolar.com.au" className="top-bar-link">
            <Mail size={13} />
            <span>info@quicksolar.com.au</span>
          </a>
          <a href="tel:1300969557" className="top-bar-phone-pill">
            <Phone size={13} className="phone-icon-pulse" />
            <span>1300 969 557</span>
          </a>
        </div>
      </div>
    </div>
  );
}

