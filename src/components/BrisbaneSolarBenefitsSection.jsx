import React, { useState, useEffect, useRef } from 'react';
import {
  Award,
  Sliders,
  DollarSign,
  Layers,
  MessageSquare,
  FileCheck,
  Zap,
  Wifi,
  HeartHandshake,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function BrisbaneSolarBenefitsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const benefits = [
    {
      id: 'saa-accredited',
      icon: Award,
      title: 'SAA Accredited Designers & Installers',
      content: (
        <>
          Ask for our <strong>award-winning solar products</strong>. With SAA Accredited Designers &amp; Installers in our team, we bring in decades of industry experience to provide <strong>high-quality solar solutions in Queensland</strong>. Our skilled and professional installers can take good care of your <strong>residential</strong> and <strong>commercial energy needs</strong> in the shortest possible time.
        </>
      )
    },
    {
      id: 'tailor-made',
      icon: Sliders,
      title: 'Tailor-made Solar Power Systems',
      content: (
        <>
          We design and install one of a kind solar power system to meet the exact needs of our clients. Choose from our vast catalogues of products to match the solar panel design of your choice. Our <strong>tailor-made solar power system solutions</strong> will fit your requirements optimally.
        </>
      )
    },
    {
      id: 'affordable-pricing',
      icon: DollarSign,
      title: 'Affordable Pricing',
      content: (
        <>
          Quick Solar provides unparalleled services at the most affordable price. We value our customers and provide higher performance levels at reduced costs to keep them happy. With <strong>solar system Brisbane, QLD, Australia</strong>, you get round the clock services to support your installation. We help you buy the best solar panel and solar system equipment at low prices, well within your budget.
        </>
      )
    },
    {
      id: 'wide-range',
      icon: Layers,
      title: 'Wide Range of Solar Products & Systems',
      content: (
        <>
          At Quick Solar, we believe in providing scores of options to enable better purchase decisions. Take a look at our full range of solar batteries, solar panels, photovoltaic cells, solar inverters and other products before making your buy. As the most experienced <strong>solar panel installer in Brisbane</strong>, we extend exceedingly cost-effective solar panels and products to power your home, office, factory and other commercial setups.
        </>
      )
    },
    {
      id: 'transparent-communication',
      icon: MessageSquare,
      title: 'Open and Transparent Communication',
      content: (
        <>
          Tell us what you want, we are ready to listen. Our solar design and installation team will understand your specific power needs and give the best ideas only. With clear cut communication channels in place, we ensure no gaps in our services. Besides, you need not worry about multiple people contacting you every now and then. We respect your time and will not disturb you unnecessarily in the course of setting up your solar power system.
        </>
      )
    },
    {
      id: 'no-paperwork',
      icon: FileCheck,
      title: 'No Paperwork for You',
      content: (
        <>
          With Quick Solar by your side, you can be relaxed about long documentation or heavy paperwork. We will take care of all solar panel compliances to enable smooth installation and use of our panels.
        </>
      )
    },
    {
      id: 'grid-connection',
      icon: Zap,
      title: 'Connection with the Grid',
      content: (
        <>
          We provide grid-connected solar energy systems. This will help you power your small business or home with renewable energy across the day, every day of the year. The extra power produced by the panels can be sent to the grid easily. If you consume more electricity than what you add to the grid in any given month, you just have to pay for the difference to your power provider.
        </>
      )
    },
    {
      id: 'wifi-inverter',
      icon: Wifi,
      title: 'WiFi with Solar Inverter',
      content: (
        <>
          Quick Solar provides a more streamlined approach to monitor PV system data. We have the capabilities to keep you connected with WiFi solar inverters. Check out our new range of solar inverters with different WiFi monitoring products.
        </>
      )
    },
    {
      id: 'customer-service',
      icon: HeartHandshake,
      title: 'Excellent Customer Service',
      content: (
        <>
          Our skilled team will guide you across all stages of solar panel design and installation with care. We strive to make the entire process quick and easy for you. To enable this, we aim to provide the best customer support procedures at all times.
        </>
      )
    }
  ];

  // 5 slides total (pairs of 2 cards per view)
  const slides = [
    [benefits[0], benefits[1]],
    [benefits[2], benefits[3]],
    [benefits[4], benefits[5]],
    [benefits[6], benefits[7]],
    [benefits[7], benefits[8]]
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="brisbane-benefits-section simple-clean" id="brisbane-solar-installer">
      <div className="container-wide">
        {/* Simple & Clean Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="pill-badge pill-badge-emerald" style={{ marginBottom: '0.85rem' }}>
            <Sparkles size={14} />
            <span>Quick Solar</span>
          </div>
          <h2 className="section-title">
            Solar Panel Installer in <span className="text-emerald">Brisbane</span>
          </h2>
          <p className="section-subtitle">
            As premium solar panels designing and installation company, we provide numerous benefits to our customers.
          </p>
        </div>

        {/* Clean 2-Card Slider */}
        <div
          className="benefits-slider-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Arrow */}
          <button
            type="button"
            className="slider-nav-btn btn-prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Viewport Track */}
          <div className="slider-viewport">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((pair, slideIdx) => (
                <div key={slideIdx} className="slider-slide-pair">
                  {pair.map((item, itemIdx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={`${item.id}-${itemIdx}`} className="clean-benefit-card">
                        <div className="card-top-row">
                          <div className="card-icon-box">
                            <IconComponent size={20} strokeWidth={2.2} />
                          </div>
                          <h3 className="card-heading">{item.title}</h3>
                        </div>
                        <div className="card-body-text">
                          <p>{item.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            className="slider-nav-btn btn-next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Simple Pagination Dots */}
        <div className="slider-pagination-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`pagination-dot ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
