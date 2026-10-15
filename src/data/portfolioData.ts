import type { PersonalInfo, Project, Certificate, DesignProject, SkillCategory } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Ramsey Clark Insoma',
  fullName: 'Ramsey Clark C. Insoma',
  title: 'Full-Stack Developer & UI/UX Designer',
  subtitle: 'BS Information Systems Specialist · Software Architect · AI Integration',
  bio: 'Passionate software developer and UI/UX designer specializing in building scalable web applications, cross-platform mobile apps, and intelligent data-driven systems. Proponent and core architect of WashQueue, hybrid systems, and machine learning research.',
  longBio: 'I am a Bachelor of Science in Information Systems (BSIS) student at Carlos Hilado Memorial State University (CHMSU) with a strong foundation in modern software engineering, UI/UX prototyping in Figma, and AI-assisted application architecture. My work spans full-stack web and mobile development (React, TypeScript, Flutter, Node.js, Supabase), geospatial discovery platforms, and applied machine learning. I combine systems thinking with relentless attention to user experience, code cleanliness, and rigorous testing methodologies (including 32/32 automated Cypress E2E suites).',
  location: 'Bacolod City & Negros Occidental, Philippines',
  email: 'rcinsoma.chmsu@gmail.com',
  phone: '+63 912 560 8546',
  githubUsername: 'Ramseyako1212',
  githubUrl: 'https://github.com/Ramseyako1212',
  linkedinUrl: 'https://www.linkedin.com/in/ramsey-clark-c-insoma-00a1372b5',
  education: [
    {
      degree: 'Bachelor of Science in Information Systems (BSIS)',
      institution: 'Carlos Hilado Memorial State University (CHMSU)',
      period: '2023 — Present (Expected 2026/2027)',
      status: 'Senior Student · Proponent of WashQueue Capstone',
      location: 'Talisay / Bacolod City, Negros Occidental'
    },
    {
      degree: 'Technical-Vocational-Livelihood (TVL) Track',
      institution: 'Eva J. Montilla Farm School',
      period: '2019 — 2023',
      status: 'Junior & Senior High School Graduate',
      location: 'Cauayan, Negros Occidental'
    }
  ],
  stats: [
    { label: 'Verified Systems', value: '7+', description: 'End-to-end applications built & deployed' },
    { label: 'Cypress E2E Pass Rate', value: '100%', description: '32 of 32 comprehensive tests passed' },
    { label: 'Industry Credentials', value: '8+', description: 'Cisco, DICT & LinkedIn certifications' },
    { label: 'Figma Design Systems', value: '3', description: 'Production-ready clickable prototypes' }
  ]
};

export const projects: Project[] = [
  {
    id: 'washqueue',
    title: 'WashQueue — Hybrid Queuing & Scheduling System',
    tagline: 'Enterprise multi-role queuing and geomapping platform with regional sentiment NLP',
    description: 'Flagship capstone project serving car wash businesses in Bacolod City and Western Visayas. Features live customer PWA, business owner operational dashboard, super-admin governance, consent-based GPS proximity monitoring, walk-in accommodation control, and a hybrid sentiment analysis engine supporting code-switching English, Tagalog, and Hiligaynon.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Flutter (PWA/APK)', 'Node.js', 'Express', 'Supabase (PostgreSQL)', 'Leaflet GIS', 'Cypress E2E', 'VADER NLP'],
    githubUrl: 'https://github.com/Ramseyako1212/CARWASH',
    liveUrl: 'https://washqueue.online',
    featured: true,
    role: 'Co-Architect, Backend Engineer & UI/UX Co-Designer',
    problemStatement: 'Local car wash enterprises in Negros Occidental suffer from unpredictable queue bottlenecks, missed appointments, and unanalyzed customer feedback often written in code-switched Hiligaynon/Tagalog that standard English NLP models misclassify.',
    keyFeatures: [
      'Digital Queuing & Real-time Waiting Time Forecast',
      'Geomapping & Service Discovery with Consent-based GPS Proximity Monitoring',
      'Arrival confirmation with 5-minute grace period enforcement & automated No-show tagging',
      'Hybrid Sentiment Analysis Engine combining VADER with regional Hiligaynon/Tagalog sentiment lexicons',
      'Multi-role access: Customer PWA, Shop Owner Operations, and Central Admin Governance',
      'Loyalty reward points accumulation across participating businesses',
      '32/32 Automated Cypress E2E test verification on production builds'
    ],
    architecture: [
      'Monorepo structure with microservice packages (Customer Web, Owner App, Admin Platform)',
      'Supabase PostgreSQL relational schema with Row-Level Security (RLS)',
      'Custom Tokenizer & False-Positive Scrubber for Western Visayas dialects before VADER classification',
      'Cross-platform distribution via Progressive Web App (PWA) and Android APK package'
    ],
    metrics: '32 of 32 Cypress E2E tests passed (1m 12s execution time). Live on washqueue.online & washqueue-admin.fly.dev',
    images: [
      '/assets/projects/washqueue/image1.png',
      '/assets/projects/washqueue/image7.png',
      '/assets/projects/washqueue/image8.png',
      '/assets/projects/washqueue/image10.png',
      '/assets/projects/washqueue/image11.png',
      '/assets/projects/washqueue/image12.png',
      '/assets/projects/washqueue/image17.png'
    ],
    highlights: ['Capstone Defense Project', 'Live Production Deployment', 'Cypress 16.0 Automated Testing', 'Custom Regional NLP']
  },
  {
    id: 'movie-popularity',
    title: 'Movie Popularity Prediction Engine',
    tagline: 'Quantitative machine learning benchmark research using metadata feature regression',
    description: 'Academic data science research project presented at the College of Computer Studies, CHMSU. Benchmarks multiple supervised regression algorithms (Ridge Regression with L2 regularization, Gradient Boosting, Random Forest) against the Kaggle Movie Dataset to quantify the predictive impact of user engagement, budget, genre, and perceived quality metrics.',
    category: 'ml',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Ridge Regression'],
    githubUrl: 'https://github.com/Ramseyako1212',
    featured: true,
    role: 'Lead ML Researcher & Data Analyst',
    problemStatement: 'With the global cinematic box office reaching $33.9 billion yet high failure rates for commercial releases, studios face severe risk without empirical models to forecast audience engagement prior to release.',
    keyFeatures: [
      'L2 Regularized Ridge Regression baseline resolving multicollinearity among vote counts and revenue',
      'Comprehensive exploratory data analysis (EDA) across 10,000+ film metadata records',
      'Metric benchmarking assessing RMSE, Mean Absolute Error (MAE), and R-squared coefficient of determination',
      'Feature importance ranking isolating the highest-impact drivers of box office engagement'
    ],
    architecture: [
      'Data preprocessing pipeline: missing value imputation, log-transformation of skewed revenue distributions',
      'K-fold cross-validation preventing data leakage and overfitting',
      'Automated figure report generator outputting publication-ready charts and performance tables'
    ],
    metrics: 'R² score of 0.84 with stable generalized variance across unseen test splits',
    images: [
      '/assets/designs/1.png',
      '/assets/designs/2.png',
      '/assets/designs/3.png'
    ],
    highlights: ['Academic Research', 'Quantitative ML', 'Feature Engineering']
  },
  {
    id: 'cinema-seat',
    title: 'CinemaSeat — Web-Based Movie Reservation System',
    tagline: 'Real-time cinema seat selection and ticketing platform for local theaters',
    description: 'E-Commerce information system designed for provincial movie theaters in Negros Occidental. Provides customers with dynamic visual seating charts, screening schedules, instant booking confirmations, and box-office administration.',
    category: 'web',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Bootstrap', 'AJAX'],
    githubUrl: 'https://github.com/Ramseyako1212',
    featured: true,
    role: 'Full-Stack Developer & Database Designer',
    problemStatement: 'Local regional cinemas rely on manual counter ticket purchasing leading to long lobby queues, double-booking errors, and lack of advance seat preference selection.',
    keyFeatures: [
      'Interactive visual seat matrix updating booked versus available seats in real-time',
      'Screening schedule management with theater hall assignment',
      'Automated digital ticket generation with printable reservation slip',
      'Admin dashboard for ticket sales tracking, movie title management, and pricing control'
    ],
    architecture: [
      'Relational schema enforcing strict transactional locks during seat reservation to avoid race conditions',
      'Modular MVC architecture separating reservation business logic from presentation layer'
    ],
    images: [
      '/assets/designs/4.png',
      '/assets/designs/5.png'
    ],
    highlights: ['E-Commerce Architecture', 'Real-time Seat Matrix', 'Relational Transaction Locks']
  },
  {
    id: 'lost-and-found',
    title: 'Campus Lost & Found Centralized Management',
    tagline: 'Multi-campus item recovery platform with claim verification workflows',
    description: 'Centralized institutional system developed to replace disorganized bulletin boards and informal social media posts for lost belongings across university campuses.',
    category: 'management',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Role-Based Access Control'],
    githubUrl: 'https://github.com/Ramseyako1212/lost-and-found',
    featured: true,
    role: 'Lead Developer & System Architect',
    problemStatement: 'Lost student items are scattered across offices with no accountability, high claim fraud risk, and low return-to-owner rates.',
    keyFeatures: [
      'Finder, Owner, and Security Admin role separation',
      'Categorized item repository with photo upload, timestamp, and location tagging',
      'Two-step claim verification requiring specific item proof before security release',
      'Audit log and return status timestamping for institutional compliance'
    ],
    architecture: [
      'Role-based permission middleware safeguarding user submissions',
      'Image asset compression and secure upload handling'
    ],
    images: [
      '/assets/designs/6.png',
      '/assets/designs/7.png'
    ],
    highlights: ['GitHub Repository', 'Role-Based Access Control', 'Multi-Campus Workflow']
  },
  {
    id: 'trade-ledger',
    title: 'TradeLedger — Trading Journal & Risk Analytics',
    tagline: 'Quantitative trading performance log and risk-to-reward optimization suite',
    description: 'Financial journaling software designed for currency and commodities traders (Gold/XAUUSD). Calculates win rate, risk-to-reward ratios, drawdown metrics, and strategy equity curves.',
    category: 'management',
    technologies: ['PHP', 'MySQL', 'Chart.js', 'Excel/CSV Engine', 'CSS Grid'],
    githubUrl: 'https://github.com/Ramseyako1212/Trading-Journal',
    featured: false,
    role: 'Full-Stack Developer & Quantitative Modeler',
    problemStatement: 'Retail financial traders struggle with emotional bias and inconsistent risk management without disciplined, statistical logging of entries, stops, and execution rationale.',
    keyFeatures: [
      'Automated R-multiple calculation and profit factor aggregation',
      'Interactive equity curve and drawdown charts',
      'Bi-directional synchronization with Microsoft Excel trade journals (Gold_Trade_Journal.xlsx)',
      'Session analysis comparing Asian, London, and New York execution performance'
    ],
    architecture: [
      'High-precision floating-point arithmetic for currency lot and pip calculation',
      'Clean analytical dashboard powered by dynamic Chart.js canvases'
    ],
    images: [
      '/assets/designs/8.png',
      '/assets/designs/9.png'
    ],
    highlights: ['Financial Analytics', 'Excel Interoperability', 'Risk-to-Reward Calculator']
  },
  {
    id: 'clinic-geomap',
    title: 'Clinic GeoMap — Healthcare Facility Discovery',
    tagline: 'Geospatial mapping and emergency clinic routing engine',
    description: 'Location-aware medical facility locator helping citizens find nearby clinics, operating hours, emergency services, and driving distances.',
    category: 'mobile',
    technologies: ['Python', 'FastAPI', 'Leaflet GIS', 'OpenStreetMap', 'Haversine Algorithm', 'JavaScript'],
    githubUrl: 'https://github.com/Ramseyako1212',
    featured: false,
    role: 'Geospatial Developer & Backend Engineer',
    problemStatement: 'Patients in regional towns often struggle during urgent medical situations to locate open clinics offering specific pediatric, dental, or general consultations.',
    keyFeatures: [
      'Haversine distance calculation and radius-based filtering',
      'Interactive OpenStreetMap tiles with custom SVG specialty pins',
      'Real-time operating status indicator (Open Now / Closed)',
      'Direct mobile phone dial and routing links'
    ],
    architecture: [
      'Python geospatial backend querying spatial coordinates with minimal latency',
      'Lightweight Leaflet client running smoothly even on low-bandwidth mobile connections'
    ],
    images: [
      '/assets/designs/10.png',
      '/assets/projects/washqueue/image17.png'
    ],
    highlights: ['Geospatial Coordinates', 'Haversine Algorithm', 'Lightweight Leaflet Engine']
  },
  {
    id: 'pos-inventory',
    title: 'Point of Sale & Real-Time Stock Management',
    tagline: 'Fast retail checkout, barcode scan simulation, and low-stock alerts',
    description: 'Desktop and web POS system engineered for small-to-medium retail shops, featuring instant transaction calculation, receipt generation, and inventory depreciation tracking.',
    category: 'management',
    technologies: ['PHP', 'Hack', 'MySQL', 'JavaScript', 'CSS3'],
    githubUrl: 'https://github.com/Ramseyako1212/pos',
    featured: false,
    role: 'Full-Stack Developer',
    problemStatement: 'Independent store owners lose profit from manual stock tallies and slow checkout queues during peak retail hours.',
    keyFeatures: [
      'Rapid item lookup and cart calculation with tax & discount breakdowns',
      'Automated low-stock threshold alerts to prevent stockouts',
      'Daily reconciliation sales reports and cashier session tracking'
    ],
    architecture: [
      'Normalized database schema maintaining referential integrity on every sale transaction',
      'Fast responsive cash register layout optimized for keyboard-only input'
    ],
    images: [
      '/assets/designs/3.png'
    ],
    highlights: ['GitHub Repository', 'Retail Operations', 'Stock Reconciliation']
  }
];

export const certificates: Certificate[] = [
  {
    id: 'cert-data-science',
    title: 'Introduction to Data Science',
    issuer: 'DICT-ITU DTC Initiative & Cisco Networking Academy',
    issueDate: '29 December 2025',
    credentialId: 'baf7e98a-fa09-48fb-8352-4825ea25f1fb',
    credentialUrl: 'https://www.netacad.com/',
    pdfUrl: '/assets/certificates/Data_Science_Certificate_DICT_Cisco.pdf',
    category: 'ai-data',
    skills: ['Data Science Foundations', 'Exploratory Data Analysis', 'Python Analytics', 'Model Evaluation'],
    verified: true
  },
  {
    id: 'cert-modern-ai',
    title: 'Introduction to Modern AI',
    issuer: 'DICT-ITU DTC Initiative & Cisco Networking Academy',
    issueDate: '13 November 2025',
    credentialId: 'f853121c-64eb-4278-b255-9ee45850d9df',
    credentialUrl: 'https://www.netacad.com/',
    pdfUrl: '/assets/certificates/Modern_AI_Certificate_DICT_Cisco.pdf',
    category: 'ai-data',
    skills: ['Artificial Intelligence', 'Machine Learning Principles', 'Neural Concepts', 'AI Ethics'],
    verified: true
  },
  {
    id: 'cert-cybersecurity-cisco',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    issueDate: '10 March 2025',
    credentialId: 'ca9f47a6-def1-4747-aa11-e59b771929e3',
    credentialUrl: 'https://www.netacad.com/',
    pdfUrl: '/assets/certificates/Cybersecurity_Certificate_Cisco.pdf',
    category: 'cybersecurity',
    skills: ['Network Security', 'Threat Mitigation', 'Information Privacy', 'Security Protocols'],
    verified: true
  },
  {
    id: 'cert-devices-cisco',
    title: 'Using Computer and Mobile Devices',
    issuer: 'DICT-ITU DTC Initiative & Cisco Networking Academy',
    issueDate: '28 December 2025',
    credentialId: 'e3ad5da3-8931-404d-9d6b-66ec9ccd01b0',
    credentialUrl: 'https://www.netacad.com/',
    pdfUrl: '/assets/certificates/Computer_Mobile_Devices_Certificate_DICT_Cisco.pdf',
    category: 'literacy',
    skills: ['Hardware Architecture', 'Operating Systems', 'Device Configuration', 'Troubleshooting'],
    verified: true
  },
  {
    id: 'cert-ai-ga4',
    title: 'AI and Google Analytics 4 Analysis',
    issuer: 'LinkedIn Learning',
    issueDate: 'Verified 2025/2026',
    credentialUrl: 'https://www.linkedin.com/in/ramsey-clark-c-insoma-00a1372b5',
    category: 'ai-data',
    skills: ['Google Analytics 4', 'Predictive Metrics', 'User Journey Tracking', 'Conversion Funnels'],
    verified: true
  },
  {
    id: 'cert-gemini',
    title: 'Empower Your Productivity with Google Gemini',
    issuer: 'LinkedIn Learning',
    issueDate: 'Verified 2025/2026',
    credentialUrl: 'https://www.linkedin.com/in/ramsey-clark-c-insoma-00a1372b5',
    category: 'ai-data',
    skills: ['Prompt Engineering', 'Generative AI Workflows', 'Developer Tooling', 'Productivity Optimization'],
    verified: true
  },
  {
    id: 'cert-agentspace',
    title: 'Learning Google Agentspace: Build, Configure, and Deploy Your Own Apps',
    issuer: 'LinkedIn Learning',
    issueDate: 'Verified 2025/2026',
    credentialUrl: 'https://www.linkedin.com/in/ramsey-clark-c-insoma-00a1372b5',
    category: 'cloud',
    skills: ['Autonomous Agent Configuration', 'Cloud Integration', 'App Deployment', 'System Workflows'],
    verified: true
  },
  {
    id: 'cert-practical-cybersecurity',
    title: 'Practical Cybersecurity for IT Professionals',
    issuer: 'LinkedIn Learning',
    issueDate: 'Verified 2025/2026',
    credentialUrl: 'https://www.linkedin.com/in/ramsey-clark-c-insoma-00a1372b5',
    category: 'cybersecurity',
    skills: ['IT Infrastructure Security', 'Access Controls', 'Vulnerability Assessment', 'Incident Defense'],
    verified: true
  },
  {
    id: 'cert-synology',
    title: 'Synology PAS: Power Critical Workloads with All-NVMe Storage',
    issuer: 'Synology Enterprise Systems',
    issueDate: '2025/2026',
    credentialUrl: 'https://www.synology.com',
    category: 'cloud',
    skills: ['NVMe Storage Architecture', 'Enterprise Data Redundancy', 'High-IOPS Workloads'],
    verified: true
  }
];

export const designs: DesignProject[] = [
  {
    id: 'design-complete-system',
    title: 'Complete Clickable Design — Web & Mobile Interface System',
    type: 'Interactive High-Fidelity Prototype',
    description: 'Comprehensive, interactive multi-screen Figma prototype engineered with reusable UI components, autolayout, responsive constraints, and polished state transitions across customer and administration flows.',
    figmaUrl: 'https://www.figma.com/design/PGupkKPWOBTb6YQHJmoxuY/Complete-Clickable-Design',
    tool: 'Figma',
    previewImage: '/assets/designs/1.png',
    problem: 'Complex user journeys often fail in transition between conceptual wireframes and developer implementation when responsive states, modals, and interaction physics are undefined.',
    solution: 'Engineered a unified design system in Figma featuring complete clickable states, atomic components, and responsive grid rules tailored for production developer handoff.',
    features: [
      'Complete clickable prototype linking landing, authentication, and core operations',
      'Consistent design tokens for colors, spacing (8pt grid), and typography hierarchy',
      'Mobile-first responsive frames and desktop widescreen breakpoints',
      'Polished button states (Default, Hover, Active, Disabled, Loading)'
    ],
    tokens: {
      palette: ['#080B10', '#0E131F', '#0066FF', '#00F0FF', '#10B981', '#FFFFFF'],
      typography: 'Inter / System UI font pairings with 1.25 golden scale',
      components: ['Dynamic Buttons', 'Input Fields with Validation', 'Status Chips', 'Modal Dialogs', 'Interactive Data Tables']
    }
  },
  {
    id: 'design-interactive-buttons',
    title: 'Interactive Design System & Component Library',
    type: 'Design System & Component Tokens',
    description: 'Component architecture system in Figma showcasing micro-interactions, variant properties, and accessibility-compliant contrast ratios across dark and light surfaces.',
    figmaUrl: 'https://www.figma.com/design/TWYsGxrfLBUmfQGM5WnX4r/Create-Interactive-Button-Set',
    tool: 'Figma',
    previewImage: '/assets/designs/2.png',
    problem: 'Inconsistent buttons, missing focus states, and mismatched touch target sizes across screens cause user friction and accessibility violations.',
    solution: 'Constructed an atomic button and interactive component matrix incorporating WCAG 2.1 AA compliant contrast, 44px minimum mobile tap targets, and interactive variant prototypes.',
    features: [
      'Multi-variant button system (Primary Glow, Secondary Outline, Ghost, Danger)',
      'Interactive component transitions configured in Figma prototyping engine',
      'Icon-integrated buttons with Lucide and SVG asset alignment',
      'Clear documentation for front-end implementation mapping'
    ],
    tokens: {
      palette: ['#0066FF', '#00F0FF', '#1E293B', '#38BDF8', '#F43F5E'],
      typography: 'Inter SemiBold 14px / 16px',
      components: ['Primary CTA', 'Glow State', 'Pill Buttons', 'Toggle Sets']
    }
  },
  {
    id: 'design-app-flow',
    title: 'Mobile App Workflow & User Journey Wireframes',
    type: 'Wireframes & Low-Fi to High-Fi Progression',
    description: 'User experience flow mapping customer discovery, booking confirmation, and feedback submission, comparing initial low-fidelity wireframes with finished high-fidelity mockups.',
    figmaUrl: 'https://www.figma.com/design/emEX54yg47gc5LmH9NWVW0/Untitled',
    tool: 'Figma',
    previewImage: '/assets/designs/3.png',
    problem: 'Users abandon multi-step appointment bookings when the flow contains cognitive friction, unclear steps, or confusing navigation.',
    solution: 'Mapped streamlined user flows with breadcrumbs, clear visual progress indicators, and intuitive visual cues before proceeding to high-fidelity visual styling.',
    features: [
      'Low-fidelity wireframe blueprints defining spatial hierarchy',
      'High-fidelity screen progressions showcasing dark-mode aesthetic',
      'User journey decision trees from guest entry to completed order',
      'Touch-optimized navigation bars and drawer menus'
    ],
    tokens: {
      palette: ['#0B0F17', '#1E293B', '#00F0FF', '#F8FAFC'],
      typography: 'Inter Regular & Medium',
      components: ['Bottom Navigation', 'Step Indicator', 'Summary Card']
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    description: 'Core languages used in production systems, capstones, and data modeling',
    iconName: 'Code',
    skills: [
      { name: 'TypeScript', level: 90, experience: 'Production in WashQueue & modern React applications', badge: 'Primary' },
      { name: 'Python', level: 88, experience: 'ML research, geospatial algorithms, NLP pipelines, data processing', badge: 'Primary' },
      { name: 'JavaScript (ES6+)', level: 92, experience: 'Full-stack web, DOM manipulation, asynchronous programming', badge: 'Primary' },
      { name: 'PHP', level: 80, experience: 'Backend API design, Trading-Journal, POS systems', badge: 'Verified' },
      { name: 'Java', level: 75, experience: 'Object-oriented programming, data structures & algorithms', badge: 'Academic' },
      { name: 'SQL', level: 85, experience: 'Relational database schema design, queries, Supabase & MySQL', badge: 'Verified' }
    ]
  },
  {
    name: 'Frontend & Mobile Development',
    description: 'Responsive user interfaces, mobile applications, and design implementation',
    iconName: 'Layout',
    skills: [
      { name: 'React & Next.js Patterns', level: 90, experience: 'Custom hooks, state management, SPA architecture', badge: 'Primary' },
      { name: 'Tailwind CSS', level: 95, experience: 'Custom themes, dark mode systems, responsive layouts', badge: 'Expert' },
      { name: 'Flutter & Dart', level: 82, experience: 'Cross-platform mobile apps (WashQueue APK & PWA)', badge: 'Verified' },
      { name: 'HTML5 & Modern CSS3', level: 95, experience: 'Semantic markup, accessibility, Flexbox/Grid master', badge: 'Expert' },
      { name: 'Progressive Web Apps (PWA)', level: 85, experience: 'Service workers, offline caching, installable web apps', badge: 'Verified' }
    ]
  },
  {
    name: 'Backend, Cloud & Databases',
    description: 'Server architectures, RESTful APIs, and relational database systems',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & Express', level: 88, experience: 'REST APIs, authentication middleware, microservices', badge: 'Primary' },
      { name: 'Supabase & PostgreSQL', level: 88, experience: 'Row-level security, realtime subscriptions, relational schema', badge: 'Primary' },
      { name: 'MySQL', level: 85, experience: 'Relational data modeling, indexing, transactions', badge: 'Verified' },
      { name: 'FastAPI / REST Services', level: 80, experience: 'Python API endpoints, geospatial query routing', badge: 'Verified' },
      { name: 'Leaflet GIS & Geo-Services', level: 85, experience: 'Geomapping, GPS tracking, Haversine routing algorithms', badge: 'Specialty' }
    ]
  },
  {
    name: 'UI/UX Design & Prototyping',
    description: 'Figma component systems, user research, wireframing, and interaction design',
    iconName: 'PenTool',
    skills: [
      { name: 'Figma', level: 92, experience: 'Design systems, auto-layout, interactive prototypes, tokens', badge: 'Expert' },
      { name: 'Wireframing (Low & High-Fi)', level: 90, experience: 'User flows, information architecture, rapid mockups', badge: 'Primary' },
      { name: 'Interactive Prototyping', level: 88, experience: 'Clickable customer journeys, micro-interactions', badge: 'Verified' },
      { name: 'Design Systems & Tokens', level: 85, experience: 'Scalable color systems, typography scales, atomic units', badge: 'Verified' }
    ]
  },
  {
    name: 'Quality Assurance & Testing',
    description: 'Automated test suites, unit testing, and continuous quality verification',
    iconName: 'CheckCircle',
    skills: [
      { name: 'Cypress E2E Testing', level: 90, experience: '32 of 32 comprehensive tests passed on live systems', badge: 'Flagship' },
      { name: 'White-Box Testing (Jest)', level: 85, experience: 'Unit testing NLP pipelines, tokenizers, mathematical formulas', badge: 'Verified' },
      { name: 'Qase TMS & Test Planning', level: 82, experience: 'Test case authoring, execution reporting, QA matrices', badge: 'Verified' }
    ]
  },
  {
    name: 'AI, Data Science & Modern Tools',
    description: 'Machine learning benchmarking, NLP analysis, and AI-accelerated workflows',
    iconName: 'Cpu',
    skills: [
      { name: 'Machine Learning (Scikit-Learn)', level: 84, experience: 'Ridge regression, evaluation metrics, feature engineering', badge: 'Academic' },
      { name: 'NLP & Sentiment Analysis (VADER)', level: 88, experience: 'Hybrid regional lexicon, code-switching classification', badge: 'Specialty' },
      { name: 'Git & GitHub Version Control', level: 90, experience: 'Branch workflows, PR reviews, release tagging', badge: 'Primary' },
      { name: 'AI-Assisted Development', level: 95, experience: 'Proficient with Cursor, Claude Code, Antigravity, LLM APIs', badge: 'Expert' }
    ]
  }
];
