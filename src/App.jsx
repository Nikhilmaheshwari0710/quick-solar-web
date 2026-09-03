import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import TopNotificationBar from './components/TopNotificationBar';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import StickyMobileCta from './components/StickyMobileCta';

// Main Pages
import HomePage from './pages/HomePage';
import ResidentialSolar from './pages/ResidentialSolar';
import CommercialSolar from './pages/CommercialSolar';
import SolarPanelsPage from './pages/SolarPanelsPage';
import SolarInstallationPage from './pages/SolarInstallationPage';
import SolarBatteries from './pages/SolarBatteries';
import BatteryInstallationPage from './pages/BatteryInstallationPage';
import BatteryUpgrade from './pages/BatteryUpgrade';
import SolarPlusBatteryPage from './pages/SolarPlusBatteryPage';
import InvertersPage from './pages/InvertersPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CalculatorsPage from './pages/CalculatorsPage';
import BillUploadPage from './pages/BillUploadPage';
import ProjectsPage from './pages/ProjectsPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import LocationsPage from './pages/LocationsPage';
import LocationDetailPage from './pages/LocationDetailPage';
import BlogPage from './pages/BlogPage';
import AboutUsPage from './pages/AboutUsPage';
import FinancePage from './pages/FinancePage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import BookConsultationPage from './pages/BookConsultationPage';
import GoogleAdsLandingSolarBrisbane from './pages/GoogleAdsLandingSolarBrisbane';
import LegalPage from './pages/LegalPage';
import { useLenisScroll } from './utils/useLenisScroll';

function AppContent({ quoteModalOpen, setQuoteModalOpen, modalInitialData, handleOpenQuote }) {
  useLenisScroll();

  return (
    <div className="app-root">
      {/* 1. Top Announcement Bar */}
      <TopNotificationBar onOpenQuote={() => handleOpenQuote()} />

      {/* 2. Main Navigation Bar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* 2.5 Dynamic Breadcrumbs under Navbar */}
      <Breadcrumbs />

        {/* 3. Page Routing (Strictly Matching Main Section & Sub-Pages) */}
        <main className="app-main-content">
          <Routes>
            {/* 1. Home */}
            <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />

            {/* 2. Solar */}
            <Route path="/solar/residential-solar" element={<ResidentialSolar onOpenQuote={handleOpenQuote} />} />
            <Route path="/residential-solar" element={<ResidentialSolar onOpenQuote={handleOpenQuote} />} />
            <Route path="/solar/commercial-solar" element={<CommercialSolar onOpenQuote={handleOpenQuote} />} />
            <Route path="/commercial-solar" element={<CommercialSolar onOpenQuote={handleOpenQuote} />} />
            <Route path="/solar/solar-panels" element={<SolarPanelsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/solar-panels" element={<SolarPanelsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/solar/solar-installation" element={<SolarInstallationPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/solar-installation" element={<SolarInstallationPage onOpenQuote={handleOpenQuote} />} />

            {/* 3. Battery */}
            <Route path="/battery/solar-batteries" element={<SolarBatteries onOpenQuote={handleOpenQuote} />} />
            <Route path="/solar-batteries" element={<SolarBatteries onOpenQuote={handleOpenQuote} />} />
            <Route path="/battery/battery-installation" element={<BatteryInstallationPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/battery-installation" element={<BatteryInstallationPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/battery/battery-upgrade" element={<BatteryUpgrade onOpenQuote={handleOpenQuote} />} />
            <Route path="/battery-upgrade" element={<BatteryUpgrade onOpenQuote={handleOpenQuote} />} />
            <Route path="/battery/solar-plus-battery" element={<SolarPlusBatteryPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/solar-plus-battery" element={<SolarPlusBatteryPage onOpenQuote={handleOpenQuote} />} />

            {/* 4. Products */}
            <Route path="/products/solar-panels" element={<SolarPanelsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/products/inverters" element={<InvertersPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/inverters" element={<InvertersPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/products/batteries" element={<SolarBatteries onOpenQuote={handleOpenQuote} />} />
            <Route path="/products/:category/:id" element={<ProductDetailPage onOpenQuote={handleOpenQuote} />} />

            {/* 5. Calculators */}
            <Route path="/calculators" element={<CalculatorsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/calculators/solar-savings" element={<CalculatorsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/calculators/stc-calculator" element={<CalculatorsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/calculators/battery-calculator" element={<CalculatorsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/calculators/roi-calculator" element={<CalculatorsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/bill-upload" element={<BillUploadPage onOpenQuote={handleOpenQuote} />} />

            {/* 6. Locations */}
            <Route path="/locations" element={<LocationsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/locations/brisbane" element={<LocationDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/locations/logan" element={<LocationDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/locations/ipswich" element={<LocationDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/locations/moreton-bay" element={<LocationDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/locations/redlands" element={<LocationDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/locations/gold-coast" element={<LocationDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/locations/sunshine-coast" element={<LocationDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/locations/perth" element={<LocationDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/locations/:id" element={<LocationDetailPage onOpenQuote={handleOpenQuote} />} />

            {/* 7. Projects */}
            <Route path="/projects" element={<ProjectsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/projects/residential" element={<ProjectsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/projects/commercial" element={<ProjectsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/projects/:id" element={<CaseStudyDetailPage onOpenQuote={handleOpenQuote} />} />

            {/* 8. Resources */}
            <Route path="/resources/blog" element={<BlogPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/blog" element={<BlogPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/resources/solar-guides" element={<BlogPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/resources/battery-guides" element={<BlogPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/resources/stc-guides" element={<BlogPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/resources/faqs" element={<FaqPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/faqs" element={<FaqPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/resources/blog/:id" element={<BlogPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/blog/:id" element={<BlogPage onOpenQuote={handleOpenQuote} />} />

            {/* 9. Company */}
            <Route path="/company/about-us" element={<AboutUsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/about-us" element={<AboutUsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/company/why-quick-solar" element={<AboutUsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/why-quick-solar" element={<AboutUsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/company/how-it-works" element={<AboutUsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/how-it-works" element={<AboutUsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/company/installation-process" element={<SolarInstallationPage onOpenQuote={handleOpenQuote} />} />

            {/* 10. Finance & Incentives */}
            <Route path="/finance/finance-options" element={<FinancePage onOpenQuote={handleOpenQuote} />} />
            <Route path="/finance" element={<FinancePage onOpenQuote={handleOpenQuote} />} />
            <Route path="/finance/rebates-stcs" element={<FinancePage onOpenQuote={handleOpenQuote} />} />

            {/* 11. Contact */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact/get-a-quote" element={<ContactPage />} />
            <Route path="/contact/book-consultation" element={<BookConsultationPage />} />

            {/* 12. Legal */}
            <Route path="/legal/privacy-policy" element={<LegalPage />} />
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/legal/terms-and-conditions" element={<LegalPage />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/legal/disclaimer" element={<LegalPage />} />
            <Route path="/disclaimer" element={<LegalPage />} />
            <Route path="/legal/cookie-policy" element={<LegalPage />} />
            <Route path="/legal/refund-policy" element={<LegalPage />} />
            <Route path="/refund-policy" element={<LegalPage />} />

            {/* Google Ads Landing Page */}
            <Route path="/landing/solar-panels-brisbane" element={<GoogleAdsLandingSolarBrisbane onOpenQuote={handleOpenQuote} />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage onOpenQuote={handleOpenQuote} />} />
          </Routes>
        </main>

        {/* 4. Master Footer */}
        <Footer onOpenQuote={() => handleOpenQuote()} />

        {/* 5. Mobile Sticky CTA */}
        <StickyMobileCta onOpenQuote={() => handleOpenQuote()} />

        {/* 6. Multi-Step Quote Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialData={modalInitialData}
        />
      </div>
  );
}

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});

  const handleOpenQuote = (data = {}) => {
    setModalInitialData(data);
    setQuoteModalOpen(true);
  };

  return (
    <Router>
      <AppContent
        quoteModalOpen={quoteModalOpen}
        setQuoteModalOpen={setQuoteModalOpen}
        modalInitialData={modalInitialData}
        handleOpenQuote={handleOpenQuote}
      />
    </Router>
  );
}

