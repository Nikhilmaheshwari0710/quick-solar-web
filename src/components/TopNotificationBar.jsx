import React from 'react';
import { ShieldCheck, Mail, Phone } from 'lucide-react';

export default function TopNotificationBar() {
  return (
    <div className="top-bar">
      <div className="container-wide top-bar-inner">
        {/* Left: 30-Day Price Beat Guarantee */}
        <div className="top-bar-item">
          <ShieldCheck size={16} className="icon-gold" />
          <span>30-Day Price Beat Guarantee</span>
        </div>

        {/* Right: Email & Phone */}
        <div className="top-bar-contacts">
          <a href="mailto:info@quicksolar.com.au" className="top-bar-link">
            <Mail size={14} />
            <span>info@quicksolar.com.au</span>
          </a>
          <a href="tel:1300969557" className="top-bar-phone-pill">
            <Phone size={13} className="icon-gold" />
            <span>1300 969 557</span>
          </a>
        </div>
      </div>
    </div>
  );
}
