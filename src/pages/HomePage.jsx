import React from 'react';
import HeroSection from '../components/HeroSection';
import RebateQuoteStrip from '../components/RebateQuoteStrip';
import TrustedInstallerSection from '../components/TrustedInstallerSection';
import SolarSavingsCalculator from '../components/SolarSavingsCalculator';
import SolarPackages from '../components/SolarPackages';
import NoDepositFinanceSection from '../components/NoDepositFinanceSection';
import BrisbaneSolarBenefitsSection from '../components/BrisbaneSolarBenefitsSection';
import FinancePartnersQuoteSection from '../components/FinancePartnersQuoteSection';
import BrandsWeInstall from '../components/BrandsWeInstall';
import QuickSolarDifferenceSection from '../components/QuickSolarDifferenceSection';
import Testimonials from '../components/Testimonials';
import OurProcessQuickContactSection from '../components/OurProcessQuickContactSection';
import FloatingNavRail from '../components/FloatingNavRail';
import { useScrollAnimations } from '../utils/useScrollAnimations';

export default function HomePage({ onOpenQuote }) {
  useScrollAnimations();

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="page-home">
      {/* GPU-Accelerated Dynamic Scroll Reading Progress Indicator */}
      <div
        className="global-scroll-progress-bar"
        role="progressbar"
        aria-label="Reading Progress"
      />

      {/* 1. Hero: Clear Brisbane/Australia Solar Message + Primary & Secondary CTAs */}
      <HeroSection onOpenQuote={onOpenQuote} onScrollToCalculator={handleScrollToCalculator} />

      {/* 2. Fast Rebate Quote Strip Form (Name, Email, Phone, Address) */}
      <div className="reveal-fade-up is-revealed">
        <RebateQuoteStrip onOpenQuote={onOpenQuote} />
      </div>

      {/* 3. Brisbane's Most Trusted Solar & Battery Panel Installer Section */}
      <div className="reveal-fade-up">
        <TrustedInstallerSection onOpenQuote={onOpenQuote} />
      </div>

      {/* 4. Solar Savings Calculator Entry */}
      <div className="reveal-zoom-in">
        <SolarSavingsCalculator onOpenQuote={onOpenQuote} />
      </div>

      {/* 5. Residential and Commercial Solar Packages */}
      <div className="reveal-stagger-group">
        <SolarPackages onOpenQuote={onOpenQuote} />
      </div>

      {/* 6. No Deposit Solar Finance Today Section */}
      <div className="reveal-fade-up">
        <NoDepositFinanceSection onOpenQuote={onOpenQuote} />
      </div>

      {/* 7. Quick Solar Panel Installer in Brisbane Benefits Cards */}
      <div className="reveal-stagger-group">
        <BrisbaneSolarBenefitsSection onOpenQuote={onOpenQuote} />
      </div>

      {/* 8. Flexible Solar Finance Partners (Brighte & Plenti) + Pre-Approval Quote */}
      <div className="reveal-fade-up">
        <FinancePartnersQuoteSection onOpenQuote={onOpenQuote} />
      </div>

      {/* 9. Brands We Install (CEC Approved Hardware Showcase) */}
      <div className="reveal-fade-up">
        <BrandsWeInstall onOpenQuote={onOpenQuote} />
      </div>

      {/* 10. The Quick Solar Difference: 3-Step Tailored Process */}
      <div className="reveal-fade-up">
        <QuickSolarDifferenceSection onOpenQuote={onOpenQuote} />
      </div>

      {/* 11. Customer Reviews: Verified 4.9★ Google Feedback */}
      <div className="reveal-fade-up">
        <Testimonials />
      </div>

      {/* 12. Our Process & Quick Contact Section */}
      <div className="reveal-zoom-in">
        <OurProcessQuickContactSection onOpenQuote={onOpenQuote} />
      </div>

      {/* Floating Call/Quote Action Buttons */}
      <FloatingNavRail onOpenQuote={onOpenQuote} />
    </div>
  );
}
