import React from 'react';
import { Zap } from 'lucide-react';

const MARQUEE_TEXT = 'Secure Federal Government Solar Battery Rebate Now';

// Repeat enough copies to fill any screen width seamlessly
const items = Array(12).fill(MARQUEE_TEXT);

export default function TopNotificationBar() {
  return (
    <div className="top-ticker-bar">
      <div className="top-ticker-track">
        {/* Double the items so the loop is seamless */}
        {[...items, ...items].map((text, i) => (
          <span key={i} className="top-ticker-item">
            <Zap size={11} className="top-ticker-icon" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
