/**
 * Quick Solar Australia - Master Site Content & Configuration Data
 * Includes structured packages, products, projects, locations, FAQs, and guides.
 */

export const SOLAR_PACKAGES = [
  {
    id: 'essential-6.6',
    name: 'Essential Package',
    tier: 'Essential',
    systemSize: '6.6 kW',
    tagline: 'Best for Small to Medium Homes (2–3 Bedrooms)',
    dailyRate: '$3.00',
    weeklyRate: '$21',
    estGeneration: '26.4 kWh / day',
    estAnnualSavings: '$1,650 – $2,100 / year',
    panelsCount: 15,
    panelModel: '15 x 440W Tier-1 N-Type Monocrystalline Panels',
    inverterModel: '5 kW Smart WiFi Hybrid Inverter (Sungrow / GoodWe)',
    roofSpace: '~30 m² Required',
    warranty: '25-Yr Performance, 10-Yr Inverter, 10-Yr Workmanship',
    stcRebate: 'Up to $2,450 Instant STC Rebate Discount',
    featured: false,
    recommendedFor: 'Quarterly electricity bills between $350 and $600',
    specs: [
      '15 x 440W Tier-1 N-Type High Efficiency Panels',
      '5kW Smart WiFi Hybrid Inverter with Cloud Monitoring',
      'Instant STC Point-of-Sale Rebate Applied',
      'Brighte $0 Deposit Finance from $3/day',
      'Clean Energy Council & SAA Certified Installation',
      'Full Grid Connection & Energex Metering Handled'
    ]
  },
  {
    id: 'popular-10.5',
    name: 'Popular Package',
    tier: 'Popular',
    systemSize: '10.5 kW',
    tagline: 'Best for Family Homes, Ducted AC & Swimming Pools',
    dailyRate: '$4.80',
    weeklyRate: '$34',
    estGeneration: '42.0 kWh / day',
    estAnnualSavings: '$2,600 – $3,400 / year',
    panelsCount: 24,
    panelModel: '24 x 440W Tier-1 N-Type Monocrystalline Panels',
    inverterModel: '8.5 kW Dual MPPT Inverter (Sungrow / Fronius)',
    roofSpace: '~48 m² Required',
    warranty: '25-Yr Performance, 10-Yr Inverter, 10-Yr Workmanship',
    stcRebate: 'Up to $3,650 Instant STC Rebate Discount',
    featured: true,
    ribbon: 'Most Popular Choice',
    recommendedFor: 'Quarterly electricity bills between $600 and $1,100',
    specs: [
      '24 x 440W Tier-1 N-Type Monocrystalline Panels',
      '8.5kW Dual MPPT Inverter for multi-directional roofs',
      'EV Charger Ready & Battery Upgrade Ready',
      'Brighte $0 Deposit Finance from $4.80/day',
      '24/7 Smartphone Live Energy Flow Tracking',
      '30-Day Price Beat Guarantee'
    ]
  },
  {
    id: 'premium-13.2',
    name: 'Premium Package',
    tier: 'Premium',
    systemSize: '13.2 kW',
    tagline: 'Best for Large Homes, EV Drivers & Home Businesses',
    dailyRate: '$6.20',
    weeklyRate: '$44',
    estGeneration: '52.8 kWh / day',
    estAnnualSavings: '$3,400 – $4,500 / year',
    panelsCount: 30,
    panelModel: '30 x 440W Tier-1 Ultra-High Efficiency Panels',
    inverterModel: '10 kW Three-Phase Inverter with Dynamic Export',
    roofSpace: '~60 m² Required',
    warranty: '25-Yr Performance, 10-Yr Inverter, 10-Yr Workmanship',
    stcRebate: 'Up to $4,400 Maximum Instant STC Rebate',
    featured: false,
    recommendedFor: 'Quarterly electricity bills $1,100+',
    specs: [
      '30 x 440W Tier-1 Monocrystalline Solar Array',
      '10kW Three-Phase Inverter with Dynamic Export Control',
      'Maximum Household STC Government Rebate Claim',
      'Battery Ready + Full VPP Integration Support',
      'Dedicated Quick Solar Priority Senior Engineer',
      'Lifetime In-House System Performance Monitoring'
    ]
  }
];

export const COMMERCIAL_PACKAGES = [
  {
    id: 'com-20',
    name: '20 kW Commercial Package',
    systemSize: '20 kW',
    tagline: 'Offices, Retail Stores, Clinics & Light Commercial',
    panelsCount: 46,
    dailyProduction: '80–90 kWh / day',
    estimatedPayback: '2.5 – 3.2 Years',
    specs: [
      '46 x 440W Tier-1 Commercial Solar Panels',
      '20 kW Three-Phase Commercial Inverter',
      'Reduces daytime commercial tariffs by up to 70%',
      'Eligible for Instant Asset Tax Write-Off Scheme',
      'Comprehensive Structural CAD & Electrical Engineering Report'
    ]
  },
  {
    id: 'com-50',
    name: '50 kW Industrial Package',
    systemSize: '50 kW',
    tagline: 'Warehouses, Manufacturing, Schools & Shopping Centers',
    panelsCount: 114,
    dailyProduction: '200–225 kWh / day',
    estimatedPayback: '2.8 – 3.5 Years',
    specs: [
      '114 x 440W Tier-1 High Efficiency Commercial Panels',
      '50 kW Multi-MPPT Commercial Inverter with Surge Arrester',
      'Interval Data Peak Demand Shaving & Zero-Export Control',
      'Full Utility DNSP (Energex/Western Power) Network Approval',
      'Cloud SCADA Commercial Performance Reporting'
    ]
  },
  {
    id: 'com-100',
    name: '100 kW+ Megawatt Commercial',
    systemSize: '100 kW+',
    tagline: 'Large Logistics Hubs, Cold Storage & Industrial Parks',
    panelsCount: '230+ Panels',
    dailyProduction: '400+ kWh / day',
    estimatedPayback: '3.0 – 4.0 Years',
    specs: [
      'Custom Multi-Rooftop / Ground Mount Engineering',
      'Large-scale Generation Certificates (LGCs) or STCs',
      'Power Purchase Agreements (PPA) and Capex Finance',
      'Dedicated Project Director & Turnkey Safety Handover',
      '24/7 Industrial Automated Inverter Fault Alerting'
    ]
  }
];

export const PRODUCTS_CATALOG = {
  panels: [
    {
      id: 'jinko-tiger-neo',
      brand: 'Jinko Solar',
      model: 'Tiger Neo N-Type 440W',
      efficiency: '22.3%',
      warranty: '25-Year Product & 30-Year Performance',
      image: '/images/panel_jinko.jpg',
      badge: 'Global Tier 1 Leader',
      description: 'Ultra-high efficiency N-Type TOPCon technology delivering higher energy yield in hot Australian summers with low degradation.'
    },
    {
      id: 'trina-vertex-s-plus',
      brand: 'Trina Solar',
      model: 'Vertex S+ 440W Dual-Glass',
      efficiency: '22.0%',
      warranty: '25-Year Product & 30-Year Performance',
      image: '/images/panel_trina.jpg',
      badge: 'Dual Glass Durability',
      description: 'Robust dual-glass design offering superior resistance to salt mist, hail, and extreme Queensland UV exposure.'
    },
    {
      id: 'longi-himo-x6',
      brand: 'LONGi Solar',
      model: 'Hi-MO X6 Max 445W',
      efficiency: '22.5%',
      warranty: '25-Year Comprehensive Warranty',
      image: '/images/panel_jinko.jpg',
      badge: 'HPBC Cell Tech',
      description: 'Next-generation front-busbar-free design delivering a sleek all-black architectural appearance and enhanced shade tolerance.'
    }
  ],
  inverters: [
    {
      id: 'sungrow-hybrid',
      brand: 'Sungrow',
      model: 'SH5.0RS / SH10RS Smart Hybrid',
      phases: 'Single & Three Phase Available',
      warranty: '10-Year Australian Replacement Warranty',
      badge: 'Australia’s Most Installed',
      image: '/images/inverter_sungrow.jpg',
      description: 'Built-in DC isolator, seamless battery readiness, and industry-leading iSolarCloud real-time smartphone monitoring.'
    },
    {
      id: 'fronius-gen24',
      brand: 'Fronius',
      model: 'Primo GEN24 Plus',
      phases: 'Single & Three Phase',
      warranty: '10-Year Austrian Engineered Warranty',
      badge: 'European Premium',
      image: '/images/inverter_sungrow.jpg',
      description: 'Exceptional build quality with active cooling, PV Point emergency power supply, and advanced multi-flow battery management.'
    },
    {
      id: 'goodwe-eh',
      brand: 'GoodWe',
      model: 'EH / ET Series Smart Inverter',
      phases: 'Single & Three Phase',
      warranty: '10-Year Manufacturer Warranty',
      badge: 'Top Value & Reliability',
      image: '/images/inverter_sungrow.jpg',
      description: 'Quiet fanless operation, high conversion efficiency up to 98.2%, and seamless integration with GoodWe and BYD batteries.'
    }
  ],
  batteries: [
    {
      id: 'tesla-powerwall-3',
      brand: 'Tesla',
      model: 'Tesla Powerwall 3',
      capacity: '13.5 kWh Usable',
      powerOutput: '11.5 kW Continuous',
      warranty: '10-Year Unlimited Cycles Warranty',
      image: '/images/battery_tesla.jpg',
      badge: 'Certified Tesla Installer',
      description: 'Integrated solar inverter, whole-home blackout backup with Storm Watch, and sleek compact wall mounting.'
    },
    {
      id: 'sungrow-sbr',
      brand: 'Sungrow',
      model: 'SBR Modular Battery (9.6kWh – 19.2kWh)',
      capacity: '9.6 to 19.2 kWh Scalable',
      powerOutput: 'Up to 10 kW Peak',
      warranty: '10-Year Full Manufacturer Warranty',
      image: '/images/battery_sungrow.jpg',
      badge: 'Modular LFP Chemistry',
      description: 'Ultra-safe Cobalt-free Lithium Iron Phosphate chemistry with stackable modular units and 100% usable depth of discharge.'
    },
    {
      id: 'sigenergy-sigenstor',
      brand: 'Sigenergy',
      model: 'SigenStor 5-in-1 Energy System',
      capacity: '8 kWh – 48 kWh Stackable',
      powerOutput: 'Up to 25 kW 3-Phase',
      warranty: '10-Year Full Replacement',
      image: '/images/battery_tesla.jpg',
      badge: 'AI Smart Energy & EV',
      description: 'World’s first 5-in-1 energy system integrating Solar Inverter, Battery, EV DC Fast Charger, BMS, and EMS in one sleek tower.'
    }
  ]
};

export const REAL_PROJECTS = [
  {
    id: 'proj-1',
    title: '13.2 kW Solar + Tesla Powerwall 3',
    location: 'North Lakes, Brisbane QLD',
    propertyType: 'Residential 4-Bedroom Home',
    customerGoal: 'Eliminate $950/qtr electricity bill with ducted AC and Tesla Model Y',
    systemSize: '13.2 kW',
    panels: '30 x 440W Jinko N-Type Panels',
    inverter: 'Integrated Tesla Powerwall 3 Inverter',
    battery: '13.5 kWh Tesla Powerwall 3',
    image: '/images/project_north_lakes.jpg',
    quarterlyBefore: '$950',
    quarterlyAfter: '$38 (Credit)',
    annualSavings: '$3,800 / year'
  },
  {
    id: 'proj-2',
    title: '10.5 kW High-Efficiency Family System',
    location: 'Chermside West, Brisbane QLD',
    propertyType: 'Two-Storey Tile Roof',
    customerGoal: 'Maximise generation on east-west split roof for all-day self-consumption',
    systemSize: '10.5 kW',
    panels: '24 x 440W Trina Dual-Glass Panels',
    inverter: '8.5 kW Sungrow Dual MPPT Hybrid',
    battery: 'Battery-Ready for Future SBR',
    image: '/images/project_chermside.jpg',
    quarterlyBefore: '$720',
    quarterlyAfter: '$110',
    annualSavings: '$2,440 / year'
  },
  {
    id: 'proj-3',
    title: '50 kW Commercial Warehouse Solar Array',
    location: 'Yatala Enterprise Precinct, QLD',
    propertyType: 'Industrial Distribution Center',
    customerGoal: 'Offset daytime refrigeration and logistics energy costs with tax depreciation',
    systemSize: '50 kW',
    panels: '114 x 440W Tier-1 Commercial Panels',
    inverter: '50 kW Sungrow Commercial Inverter',
    battery: 'Grid Connect Peak Shaving',
    image: '/images/project_commercial.jpg',
    quarterlyBefore: '$4,800',
    quarterlyAfter: '$1,350',
    annualSavings: '$13,800 / year'
  },
  {
    id: 'proj-4',
    title: '6.6 kW Clean Energy Upgrade',
    location: 'Ipswich, QLD',
    propertyType: 'Single Storey Colorbond Roof',
    customerGoal: 'Replace an obsolete 2kW 10-year-old inverter with modern $0 Brighte finance',
    systemSize: '6.6 kW',
    panels: '15 x 440W Bloom N-Type Panels',
    inverter: '5 kW GoodWe Smart WiFi Inverter',
    battery: 'Standard Grid Connect',
    image: '/images/solar_hero_home.jpg',
    quarterlyBefore: '$580',
    quarterlyAfter: '$65',
    annualSavings: '$2,060 / year'
  },
  {
    id: 'proj-5',
    title: '10.5 kW + 9.6 kWh Sungrow Battery',
    location: 'Robina, Gold Coast QLD',
    propertyType: 'Modern Suburban Residence',
    customerGoal: 'Full blackout protection during storm season and zero evening peak tariffs',
    systemSize: '10.5 kW',
    panels: '24 x 440W LONGi Hi-MO X6 Panels',
    inverter: '10 kW Sungrow Hybrid Inverter',
    battery: '9.6 kWh Sungrow SBR LFP Battery',
    image: '/images/solar_battery_storage.jpg',
    quarterlyBefore: '$840',
    quarterlyAfter: '$22',
    annualSavings: '$3,270 / year'
  }
];

export const BLOG_POSTS = [
  {
    id: 'solar-cost-brisbane-2026',
    title: 'How Much Do Solar Panels Cost in Brisbane? (2026 Price & Rebate Guide)',
    category: 'Solar Guides',
    readTime: '5 min read',
    date: 'February 2026',
    excerpt: 'A comprehensive breakdown of Brisbane solar prices for 6.6kW, 10.5kW, and 13.2kW systems, STC federal incentives, and return on investment.',
    content: `Going solar in Brisbane remains one of the most profitable investments an Australian homeowner can make. With over 280 days of annual sunshine and rising electricity retail tariffs, a quality Clean Energy Council accredited solar system typically pays for itself within 2.8 to 3.5 years.

In this guide, we break down exact 2026 pricing benchmarks for 6.6kW ($3/day on Brighte finance), 10.5kW for ducted air conditioning, and 13.2kW maximum residential systems, explaining how the Federal Government Small-scale Technology Certificate (STC) discount is applied directly at point of sale.`
  },
  {
    id: 'solar-battery-sizing-guide',
    title: 'Solar Battery Sizing Guide: Is a Tesla Powerwall 3 Worth It in Queensland?',
    category: 'Battery Guides',
    readTime: '6 min read',
    date: 'January 2026',
    excerpt: 'Learn how to calculate your evening household kWh usage, compare Tesla Powerwall 3 vs Sungrow SBR, and understand blackout protection benefits.',
    content: `As solar feed-in tariffs fluctuate between 4c and 8c/kWh while grid import rates reach 32c-40c/kWh during the evening peak, storing your daytime solar generation in a home battery provides substantial financial savings and storm resilience.

We analyze usable capacities (13.5 kWh Tesla vs 9.6-19.2 kWh Sungrow), emergency blackout power supplies (EPS), and Virtual Power Plant (VPP) earning incentives for South East Queensland residents.`
  },
  {
    id: 'energex-export-limits-explained',
    title: 'Energex Dynamic Export Limits & 5kW Solar Approval in SEQ Explained',
    category: 'STC & Grid Guides',
    readTime: '4 min read',
    date: 'January 2026',
    excerpt: 'Understand how Energex grid connections, 5kW standard export limits, and smart inverters allow you to install up to 13.2kW of solar legally.',
    content: `Many Brisbane and SEQ homeowners wonder if they can install systems larger than 5kW. The answer is yes! Under Energex standards, you can install up to 13.2kW of solar panels with a 10kW inverter using dynamic export limiting or a 3-phase grid connection.

Quick Solar manages 100% of the network distributor application process with Energex, Ergon Energy, and Western Power on your behalf.`
  },
  {
    id: 'brighte-zero-deposit-solar-finance',
    title: 'How $0 Upfront Deposit Brighte Solar Finance Works from $3/Day',
    category: 'Finance Guides',
    readTime: '4 min read',
    date: 'December 2025',
    excerpt: 'How no-deposit green finance lets your quarterly electricity bill savings offset your solar payments from day one.',
    content: `Why wait years saving cash for solar when your power bill is draining your bank account every quarter? With Brighte 0% deposit solar finance, your system is installed with zero upfront capital. 

Your weekly payment of $21/week ($3/day) is offset by the $400-$800 reduction in your quarterly electricity invoice, putting you in a cash-flow positive position from month one.`
  }
];

export const SERVICE_LOCATIONS = [
  {
    id: 'brisbane',
    name: 'Brisbane (Headquarters)',
    tagline: 'Milton HQ & Greater Brisbane Metro',
    address: 'Level 1, 16 McDougall Street, Milton QLD 4064',
    phone: '(07) 35 541 345 / 1300 969 557',
    suburbs: ['Milton', 'CBD', 'North Lakes', 'Chermside', 'Carindale', 'Indooroopilly', 'Sunnybank', 'Paddington', 'Ascot', 'Ashgrove', 'Kenmore', 'Bulimba', 'The Gap', 'Mitchelton'],
    gridDistributor: 'Energex Network'
  },
  {
    id: 'logan',
    name: 'Logan City',
    tagline: 'Springwood, Browns Plains & Logan Central',
    address: 'Serving all Logan postcodes from Brisbane HQ',
    phone: '1300 969 557',
    suburbs: ['Springwood', 'Browns Plains', 'Underwood', 'Rochedale South', 'Beenleigh', 'Daisy Hill', 'Shailer Park', 'Marsden', 'Park Ridge'],
    gridDistributor: 'Energex Network'
  },
  {
    id: 'ipswich',
    name: 'Ipswich & West Moreton',
    tagline: 'Ipswich, Springfield & Ripley Valley',
    address: 'Serving Ipswich region daily with local CEC installers',
    phone: '1300 969 557',
    suburbs: ['Ipswich Central', 'Springfield Lakes', 'Ripley', 'Redbank Plains', 'Brassall', 'Booval', 'Karalee', 'Flinders View'],
    gridDistributor: 'Energex Network'
  },
  {
    id: 'moreton-bay',
    name: 'Moreton Bay Region',
    tagline: 'Caboolture, Strathpine & Redcliffe Peninsula',
    address: 'Northern Brisbane & Moreton Bay daily installation teams',
    phone: '1300 969 557',
    suburbs: ['Strathpine', 'Redcliffe', 'North Lakes', 'Caboolture', 'Morayfield', 'Burpengary', 'Bribie Island', 'Warner', 'Eatons Hill'],
    gridDistributor: 'Energex Network'
  },
  {
    id: 'redlands',
    name: 'Redland City & Bayside',
    tagline: 'Capalaba, Cleveland & Victoria Point',
    address: 'Bayside & Coastal Solar Specialists',
    phone: '1300 969 557',
    suburbs: ['Capalaba', 'Cleveland', 'Victoria Point', 'Thornlands', 'Birkdale', 'Wellington Point', 'Redland Bay', 'Alexandra Hills'],
    gridDistributor: 'Energex Network'
  },
  {
    id: 'gold-coast',
    name: 'Gold Coast & Hinterland',
    tagline: 'Surfers Paradise, Southport, Robina & Coomera',
    address: 'Gold Coast local accredited solar electricians',
    phone: '1300 969 557',
    suburbs: ['Southport', 'Robina', 'Coomera', 'Helensvale', 'Nerang', 'Burleigh Heads', 'Varsity Lakes', 'Pacific Pines'],
    gridDistributor: 'Energex Network'
  },
  {
    id: 'sunshine-coast',
    name: 'Sunshine Coast',
    tagline: 'Maroochydore, Caloundra, Noosa & Hinterland',
    address: 'Sunshine Coast local accredited solar electricians',
    phone: '1300 969 557',
    suburbs: ['Maroochydore', 'Caloundra', 'Buderim', 'Noosa', 'Coolum', 'Nambour', 'Kawana', 'Pelican Waters'],
    gridDistributor: 'Energex Network'
  },
  {
    id: 'perth',
    name: 'Perth & Western Australia',
    tagline: 'Perth Regional Office & Greater WA',
    address: '61 Pulchella Ramble, Banksia Grove WA 6031',
    phone: '1300 969 557',
    suburbs: ['Perth Metro', 'Joondalup', 'Banksia Grove', 'Mandurah', 'Rockingham', 'Fremantle', 'Swan Valley', 'Armadale', 'Midland'],
    gridDistributor: 'Western Power Network'
  }
];

export const ALL_FAQS = [
  {
    category: 'Solar Systems',
    q: 'How does the Quick Solar 30-Day Price Beat Guarantee work?',
    a: 'If you receive an official written, itemized quotation from another Clean Energy Council accredited solar retailer offering identical Tier-1 components, manufacturer warranties, and SAA installation scope within 30 days of our quote, simply email it to info@quicksolar.com.au. We will beat it.'
  },
  {
    category: 'Solar Systems',
    q: 'What solar system size is best for my Brisbane home: 6.6kW, 10.5kW, or 13.2kW?',
    a: 'For 2-3 bedroom homes with bills between $350 and $600/quarter, our 6.6kW Essential Package (15 panels) is the gold standard. For larger families with ducted air conditioning, electric vehicles, or swimming pools, a 10.5kW or 13.2kW system offers dual-MPPT orientation to eliminate heavy summer daytime power spikes.'
  },
  {
    category: 'Battery Storage',
    q: 'Can I add a battery to my existing solar system (Solar Upgrade)?',
    a: 'Yes! Quick Solar specializes in existing solar upgrades and AC-coupled battery retrofits. Whether you want to add a Tesla Powerwall 3, a Sungrow SBR modular battery, or upgrade your aging inverter, our engineers design seamless backward-compatible solutions without replacing working panels.'
  },
  {
    category: 'Battery Storage',
    q: 'How does blackout backup protection work with home solar batteries?',
    a: 'When grid power fails, an integrated emergency backup circuit (EPS or Tesla Gateway) automatically disconnects from the grid in milliseconds and supplies power directly to your designated essential circuits (refrigeration, lighting, WiFi router, power points, medical equipment).'
  },
  {
    category: 'STC & Rebates',
    q: 'How are the Federal Government STC Rebates calculated and deducted?',
    a: 'Small-scale Technology Certificates (STCs) are calculated based on your system’s deemed clean energy generation over 10 years. Quick Solar applies the full STC discount (typically $2,000 to $4,400) directly on your invoice at the point of sale, so you only pay the net balance.'
  },
  {
    category: 'Finance & Payments',
    q: 'How does the Brighte $0 Upfront Deposit Finance work?',
    a: 'You can apply for Brighte green finance in 60 seconds with no upfront capital deposit required. Payments start from as little as $3/day ($21/week for a 6.6kW system), structured so your electricity bill savings offset your payments right from month one.'
  },
  {
    category: 'Grid & Installation',
    q: 'What are Energex export limits and can I install 10kW+ in Brisbane?',
    a: 'Energex allows standard single-phase residential properties to export up to 5kW back to the grid. However, you can install up to a 10kW inverter with dynamic export limiting or three-phase connection. This lets your home use all generated power locally while complying 100% with network rules.'
  },
  {
    category: 'Warranties',
    q: 'What warranties come with my Quick Solar installation?',
    a: 'Every installation is covered by three rock-solid layers: 25-Year Panel Linear Performance Warranty, 10-Year Inverter Manufacturer Replacement Warranty, and a 10-Year Quick Solar Comprehensive Workmanship Guarantee backed by our local Brisbane and Perth customer service teams.'
  }
];
