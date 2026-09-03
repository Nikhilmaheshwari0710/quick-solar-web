import React from 'react';
import { Phone, MessageSquare, Zap } from 'lucide-react';
import { trackInteraction } from '../utils/crm';

export default function StickyMobileCta({ onOpenQuote }) {
  const handleCall = () => {
    trackInteraction('Mobile Sticky Call Click', { phone: '1300969557' });
  };

  const handleWhatsApp = () => {
    trackInteraction('Mobile Sticky WhatsApp Click');
    window.open('https://wa.me/61400000000?text=Hi%20Quick%20Solar%20team,%20I%20would%20like%20a%20solar%20quote', '_blank');
  };

  return (
    <div className="sticky-mobile-cta">
      <a href="tel:1300969557" className="sticky-cta-btn sticky-cta-call" onClick={handleCall}>
        <Phone size={18} />
        <span>Call Now</span>
      </a>

      <button type="button" className="sticky-cta-btn sticky-cta-whatsapp" onClick={handleWhatsApp}>
        <MessageSquare size={18} />
        <span>WhatsApp</span>
      </button>

      <button type="button" className="sticky-cta-btn sticky-cta-quote" onClick={onOpenQuote}>
        <Zap size={18} />
        <span>Get Free Quote</span>
      </button>
    </div>
  );
}
