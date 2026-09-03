import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const BREADCRUMB_MAP = {
  // Solar
  '/solar/residential-solar': [
    { label: 'Solar', path: '/solar/residential-solar' },
    { label: 'Residential Solar', path: '/solar/residential-solar' }
  ],
  '/residential-solar': [
    { label: 'Solar', path: '/solar/residential-solar' },
    { label: 'Residential Solar', path: '/solar/residential-solar' }
  ],
  '/solar/commercial-solar': [
    { label: 'Solar', path: '/solar/commercial-solar' },
    { label: 'Commercial Solar', path: '/solar/commercial-solar' }
  ],
  '/commercial-solar': [
    { label: 'Solar', path: '/solar/commercial-solar' },
    { label: 'Commercial Solar', path: '/solar/commercial-solar' }
  ],
  '/solar/solar-panels': [
    { label: 'Solar', path: '/solar/solar-panels' },
    { label: 'Solar Panels', path: '/solar/solar-panels' }
  ],
  '/solar-panels': [
    { label: 'Solar', path: '/solar/solar-panels' },
    { label: 'Solar Panels', path: '/solar/solar-panels' }
  ],
  '/solar/solar-installation': [
    { label: 'Solar', path: '/solar/solar-installation' },
    { label: 'Solar Installation', path: '/solar/solar-installation' }
  ],
  '/solar-installation': [
    { label: 'Solar', path: '/solar/solar-installation' },
    { label: 'Solar Installation', path: '/solar/solar-installation' }
  ],

  // Battery
  '/battery/solar-batteries': [
    { label: 'Battery', path: '/battery/solar-batteries' },
    { label: 'Solar Batteries', path: '/battery/solar-batteries' }
  ],
  '/solar-batteries': [
    { label: 'Battery', path: '/battery/solar-batteries' },
    { label: 'Solar Batteries', path: '/battery/solar-batteries' }
  ],
  '/battery/battery-installation': [
    { label: 'Battery', path: '/battery/battery-installation' },
    { label: 'Battery Installation', path: '/battery/battery-installation' }
  ],
  '/battery-installation': [
    { label: 'Battery', path: '/battery/battery-installation' },
    { label: 'Battery Installation', path: '/battery/battery-installation' }
  ],
  '/battery/battery-upgrade': [
    { label: 'Battery', path: '/battery/battery-upgrade' },
    { label: 'Battery Upgrade', path: '/battery/battery-upgrade' }
  ],
  '/battery-upgrade': [
    { label: 'Battery', path: '/battery/battery-upgrade' },
    { label: 'Battery Upgrade', path: '/battery/battery-upgrade' }
  ],
  '/battery/solar-plus-battery': [
    { label: 'Battery', path: '/battery/solar-plus-battery' },
    { label: 'Solar + Battery', path: '/battery/solar-plus-battery' }
  ],
  '/solar-plus-battery': [
    { label: 'Battery', path: '/battery/solar-plus-battery' },
    { label: 'Solar + Battery', path: '/battery/solar-plus-battery' }
  ],

  // Products
  '/products/solar-panels': [
    { label: 'Products', path: '/products/solar-panels' },
    { label: 'Solar Panels', path: '/products/solar-panels' }
  ],
  '/products/inverters': [
    { label: 'Products', path: '/products/inverters' },
    { label: 'Inverters', path: '/products/inverters' }
  ],
  '/inverters': [
    { label: 'Products', path: '/products/inverters' },
    { label: 'Inverters', path: '/products/inverters' }
  ],
  '/products/batteries': [
    { label: 'Products', path: '/products/batteries' },
    { label: 'Batteries', path: '/products/batteries' }
  ],

  // Calculators
  '/calculators': [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Solar & Battery Calculators', path: '/calculators' }
  ],
  '/calculators/solar-savings': [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Solar Savings Calculator', path: '/calculators/solar-savings' }
  ],
  '/calculators/stc-calculator': [
    { label: 'Calculators', path: '/calculators' },
    { label: 'STC Calculator', path: '/calculators/stc-calculator' }
  ],
  '/calculators/battery-calculator': [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Battery Calculator', path: '/calculators/battery-calculator' }
  ],
  '/calculators/roi-calculator': [
    { label: 'Calculators', path: '/calculators' },
    { label: 'ROI Calculator', path: '/calculators/roi-calculator' }
  ],
  '/bill-upload': [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Upload Electricity Bill', path: '/bill-upload' }
  ],

  // Locations
  '/locations': [
    { label: 'Locations', path: '/locations' },
    { label: 'Service Areas', path: '/locations' }
  ],
  '/locations/brisbane': [
    { label: 'Locations', path: '/locations' },
    { label: 'Brisbane', path: '/locations/brisbane' }
  ],
  '/locations/logan': [
    { label: 'Locations', path: '/locations' },
    { label: 'Logan', path: '/locations/logan' }
  ],
  '/locations/ipswich': [
    { label: 'Locations', path: '/locations' },
    { label: 'Ipswich', path: '/locations/ipswich' }
  ],
  '/locations/moreton-bay': [
    { label: 'Locations', path: '/locations' },
    { label: 'Moreton Bay', path: '/locations/moreton-bay' }
  ],
  '/locations/redlands': [
    { label: 'Locations', path: '/locations' },
    { label: 'Redlands', path: '/locations/redlands' }
  ],
  '/locations/gold-coast': [
    { label: 'Locations', path: '/locations' },
    { label: 'Gold Coast', path: '/locations/gold-coast' }
  ],
  '/locations/sunshine-coast': [
    { label: 'Locations', path: '/locations' },
    { label: 'Sunshine Coast', path: '/locations/sunshine-coast' }
  ],
  '/locations/perth': [
    { label: 'Locations', path: '/locations' },
    { label: 'Perth & WA', path: '/locations/perth' }
  ],

  // Projects
  '/projects': [
    { label: 'Projects', path: '/projects' },
    { label: 'Projects & Case Studies', path: '/projects' }
  ],
  '/projects/residential': [
    { label: 'Projects', path: '/projects' },
    { label: 'Residential Projects', path: '/projects/residential' }
  ],
  '/projects/commercial': [
    { label: 'Projects', path: '/projects' },
    { label: 'Commercial Projects', path: '/projects/commercial' }
  ],

  // Resources
  '/resources/blog': [
    { label: 'Resources', path: '/resources/blog' },
    { label: 'Blog', path: '/resources/blog' }
  ],
  '/blog': [
    { label: 'Resources', path: '/resources/blog' },
    { label: 'Blog', path: '/resources/blog' }
  ],
  '/resources/solar-guides': [
    { label: 'Resources', path: '/resources/blog' },
    { label: 'Solar Guides', path: '/resources/solar-guides' }
  ],
  '/resources/battery-guides': [
    { label: 'Resources', path: '/resources/blog' },
    { label: 'Battery Guides', path: '/resources/battery-guides' }
  ],
  '/resources/stc-guides': [
    { label: 'Resources', path: '/resources/blog' },
    { label: 'STC Guides', path: '/resources/stc-guides' }
  ],
  '/resources/faqs': [
    { label: 'Resources', path: '/resources/faqs' },
    { label: 'FAQs', path: '/resources/faqs' }
  ],
  '/faqs': [
    { label: 'Resources', path: '/resources/faqs' },
    { label: 'FAQs', path: '/resources/faqs' }
  ],

  // Company
  '/company/about-us': [
    { label: 'Company', path: '/company/about-us' },
    { label: 'About Us', path: '/company/about-us' }
  ],
  '/about-us': [
    { label: 'Company', path: '/company/about-us' },
    { label: 'About Us', path: '/company/about-us' }
  ],
  '/company/why-quick-solar': [
    { label: 'Company', path: '/company/about-us' },
    { label: 'Why Quick Solar', path: '/company/why-quick-solar' }
  ],
  '/why-quick-solar': [
    { label: 'Company', path: '/company/about-us' },
    { label: 'Why Quick Solar', path: '/company/why-quick-solar' }
  ],
  '/company/how-it-works': [
    { label: 'Company', path: '/company/about-us' },
    { label: 'How It Works', path: '/company/how-it-works' }
  ],
  '/how-it-works': [
    { label: 'Company', path: '/company/about-us' },
    { label: 'How It Works', path: '/company/how-it-works' }
  ],
  '/company/installation-process': [
    { label: 'Company', path: '/company/about-us' },
    { label: 'Installation Process', path: '/company/installation-process' }
  ],

  // Finance & Incentives
  '/finance/finance-options': [
    { label: 'Finance & Incentives', path: '/finance/finance-options' },
    { label: 'Finance Options', path: '/finance/finance-options' }
  ],
  '/finance': [
    { label: 'Finance & Incentives', path: '/finance/finance-options' },
    { label: 'Finance Options', path: '/finance/finance-options' }
  ],
  '/finance/rebates-stcs': [
    { label: 'Finance & Incentives', path: '/finance/rebates-stcs' },
    { label: 'Rebates / STCs', path: '/finance/rebates-stcs' }
  ],

  // Contact
  '/contact': [
    { label: 'Contact', path: '/contact' },
    { label: 'Contact Us', path: '/contact' }
  ],
  '/contact/get-a-quote': [
    { label: 'Contact', path: '/contact' },
    { label: 'Get a Quote', path: '/contact/get-a-quote' }
  ],
  '/contact/book-consultation': [
    { label: 'Contact', path: '/contact' },
    { label: 'Book a Consultation', path: '/contact/book-consultation' }
  ],

  // Legal
  '/legal/privacy-policy': [
    { label: 'Legal', path: '/legal/privacy-policy' },
    { label: 'Privacy Policy', path: '/legal/privacy-policy' }
  ],
  '/privacy-policy': [
    { label: 'Legal', path: '/legal/privacy-policy' },
    { label: 'Privacy Policy', path: '/legal/privacy-policy' }
  ],
  '/legal/terms-and-conditions': [
    { label: 'Legal', path: '/legal/terms-and-conditions' },
    { label: 'Terms & Conditions', path: '/legal/terms-and-conditions' }
  ],
  '/terms': [
    { label: 'Legal', path: '/legal/terms-and-conditions' },
    { label: 'Terms & Conditions', path: '/legal/terms-and-conditions' }
  ],
  '/legal/disclaimer': [
    { label: 'Legal', path: '/legal/disclaimer' },
    { label: 'Disclaimer', path: '/legal/disclaimer' }
  ],
  '/disclaimer': [
    { label: 'Legal', path: '/legal/disclaimer' },
    { label: 'Disclaimer', path: '/legal/disclaimer' }
  ],
  '/legal/cookie-policy': [
    { label: 'Legal', path: '/legal/cookie-policy' },
    { label: 'Cookie Policy', path: '/legal/cookie-policy' }
  ],
  '/legal/refund-policy': [
    { label: 'Legal', path: '/legal/refund-policy' },
    { label: 'Refund / Cancellation Policy', path: '/legal/refund-policy' }
  ],
  '/refund-policy': [
    { label: 'Legal', path: '/legal/refund-policy' },
    { label: 'Refund / Cancellation Policy', path: '/legal/refund-policy' }
  ]
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  // Don't show breadcrumbs on homepage
  if (pathname === '/' || pathname === '') {
    return null;
  }

  // Check exact mapping or dynamic project / product / location detail
  let items = BREADCRUMB_MAP[pathname];

  if (!items) {
    if (pathname.startsWith('/products/')) {
      const parts = pathname.split('/');
      items = [
        { label: 'Products', path: '/solar-panels' },
        { label: parts[parts.length - 1].replace(/-/g, ' ').toUpperCase(), path: pathname }
      ];
    } else if (pathname.startsWith('/projects/')) {
      items = [
        { label: 'Projects', path: '/projects' },
        { label: 'Case Study Detail', path: pathname }
      ];
    } else if (pathname.startsWith('/locations/')) {
      const parts = pathname.split('/');
      const locName = parts[parts.length - 1].replace(/-/g, ' ');
      items = [
        { label: 'Locations', path: '/locations' },
        { label: locName.charAt(0).toUpperCase() + locName.slice(1), path: pathname }
      ];
    } else {
      items = [
        { label: pathname.replace('/', '').replace(/-/g, ' '), path: pathname }
      ];
    }
  }

  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <div className="container-wide">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-link breadcrumb-home">
              <Home size={14} />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <li className="breadcrumb-separator" aria-hidden="true">
                  <ChevronRight size={13} />
                </li>
                <li className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                  {isLast ? (
                    <span className="breadcrumb-current" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link to={item.path} className="breadcrumb-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
