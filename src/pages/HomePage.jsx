import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import CustomerJourneySelector from '../components/CustomerJourneySelector';
import SolarSavingsCalculator from '../components/SolarSavingsCalculator';
import SolarPackageComparisonTable from '../components/SolarPackageComparisonTable';
import SolarPackages from '../components/SolarPackages';
import BatteryStorageShowcase from '../components/BatteryStorageShowcase';
import ProductsShowcase from '../components/ProductsShowcase';
import WhyQuickSolar from '../components/WhyQuickSolar';
import RealCustomerProjects from '../components/RealCustomerProjects';
import HowItWorks from '../components/HowItWorks';
import GovernmentRebates from '../components/GovernmentRebates';
import Testimonials from '../components/Testimonials';
import LocationsSection from '../components/LocationsSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import { useScrollAnimations } from '../utils/useScrollAnimations';

export default function HomePage({ onOpenQuote }) {
  const { scrollProgress } = useScrollAnimations();

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="page-home">
      {/* Dynamic Scroll Reading Progress Indicator */}
      <div
        className="global-scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* 1. Hero: Clear Brisbane/Australia Solar Message + Primary & Secondary CTAs */}
      <div className="reveal-fade-up is-revealed">
        <HeroSection onOpenQuote={onOpenQuote} onScrollToCalculator={handleScrollToCalculator} />
      </div>

      {/* 2. Trust Section: Accreditations (CEC, SAA), 25-Yr Warranties, 5,000+ Installs */}
      <div className="reveal-fade-up">
        <TrustBadges />
      </div>

      {/* 3. Customer Journey Selector (New / Upgrade / Commercial / Bill Upload) */}
      <div className="reveal-stagger-group">
        <CustomerJourneySelector onOpenQuote={onOpenQuote} />
      </div>

      {/* 4. Solar Savings Calculator Entry */}
      <div className="reveal-zoom-in">
        <SolarSavingsCalculator onOpenQuote={onOpenQuote} />
      </div>

      {/* 5. Solar Package Comparison Matrix */}
      <div className="reveal-fade-up">
        <SolarPackageComparisonTable onOpenQuote={onOpenQuote} />
      </div>

      {/* 6. Residential and Commercial Solar Packages */}
      <div className="reveal-stagger-group">
        <SolarPackages onOpenQuote={onOpenQuote} />
      </div>

      {/* 7. Solar + Battery Packages & 24/7 Flow Simulator */}
      <div className="reveal-slide-left">
        <BatteryStorageShowcase onOpenQuote={onOpenQuote} />
      </div>

      {/* 8. Products: Tier-1 Panels, Smart Inverters, High-Capacity Batteries */}
      <div className="reveal-stagger-group">
        <ProductsShowcase onOpenQuote={onOpenQuote} />
      </div>

      {/* 9. Why Quick Solar: 5-Pillar Asymmetric Bento Grid */}
      <div className="reveal-zoom-in">
        <WhyQuickSolar onOpenQuote={onOpenQuote} />
      </div>

      {/* 10. Real Customer Projects & Case Studies */}
      <div className="reveal-slide-right">
        <RealCustomerProjects onOpenQuote={onOpenQuote} />
      </div>

      {/* 11. How It Works: 4-Step Seamless Installation Process */}
      <div className="reveal-stagger-group">
        <HowItWorks onOpenQuote={onOpenQuote} />
      </div>

      {/* 12. STC / Federal Government Rebate Information */}
      <div className="reveal-zoom-in">
        <GovernmentRebates onOpenQuote={onOpenQuote} />
      </div>

      {/* 13. Customer Reviews: Verified 4.9★ Google Feedback */}
      <div className="reveal-fade-up">
        <Testimonials />
      </div>

      {/* 14. Service Areas: Brisbane Milton HQ, Logan, Ipswich, Gold Coast, Perth */}
      <div className="reveal-fade-up">
        <LocationsSection onOpenQuote={onOpenQuote} />
      </div>

      {/* 15. FAQ Preview */}
      <div className="reveal-stagger-group">
        <FaqSection onOpenQuote={onOpenQuote} />
      </div>

      {/* 16. Final Consultation Booking Form */}
      <div className="reveal-zoom-in">
        <ContactSection onOpenQuote={onOpenQuote} />
      </div>
    </div>
  );
}
