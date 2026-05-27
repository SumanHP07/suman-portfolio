export const personal = {
  name: 'Suman H P',
  tagline: 'CSE Student  |  Java Developer  |  Blockchain Enthusiast',
  email: 'sumanhp0317@gmail.com',
  phone: '9480290587',
  linkedin: 'https://linkedin.com/in/sumanhp07',
  github: 'https://github.com/SumanHP07',
  college: 'BMSITM, Bengaluru',
  resumeUrl: '/resume.pdf',
  bio: "I'm a final-year Information Science Engineering student at BMSITM, Bengaluru, passionate about building scalable software, exploring blockchain technology, and solving real-world problems with clean, efficient code.",
}

export const education = [
  {
    degree: 'B.E. in Information Science and Engineering',
    institution: 'BMSITM, Bengaluru',
    period: '2022 – 2026',
    score: 'CGPA: 8.40',
    icon: '🎓',
  },
  {
    degree: 'Intermediate (PUC)',
    institution: 'MES SSM PU College',
    period: '2019 – 2021',
    score: '83.16%',
    icon: '📚',
  },
  {
    degree: 'Matriculation (10th)',
    institution: 'Vidya Bharathi School',
    period: '2018 – 2019',
    score: '83.68%',
    icon: '🏫',
  },
]

export const projects = [
  {
    title: 'Airline Management System',
    type: 'Backend / Java',
    description:
      'Java-based console application for airline operations. Admin can perform full CRUD on flights — schedule, update, delete. Passengers can search flights, book seats, cancel reservations, and generate boarding passes.',
    tech: ['Java', 'MySQL', 'JDBC', 'OOP', 'Exception Handling'],
    image: '/project-airline.png',
    github: 'https://github.com/SumanHP07',
    demo: null,
    highlight: false,
  },
  {
    title: 'Text-to-Video Generator',
    type: 'Full Stack / AI',
    description:
      'Next.js 13 web app that converts natural language prompts into AI-generated videos. Integrates NLP for prompt interpretation, Replicate API for video generation, Supabase for storage, and Google OAuth via NextAuth.',
    tech: ['Next.js', 'Replicate API', 'Supabase', 'NextAuth', 'Vercel'],
    image: '/project-text-video.png',
    github: 'https://github.com/SumanHP07',
    demo: null,
    highlight: true,
  },
  {
    title: 'Decentralized Real Estate Transactions',
    type: 'Blockchain / DApp',
    description:
      'DApp on Polygon using Solidity smart contracts for property tokenization, payments, and ownership transfer. Supports MetaMask + WalletConnect, IPFS for document storage, and NFT-based fractional property ownership.',
    tech: ['Solidity', 'Next.js 14', 'Web3.js', 'IPFS', 'Polygon', 'TailwindCSS'],
    image: '/project-blockchain.png',
    github: 'https://github.com/SumanHP07',
    demo: null,
    highlight: true,
  },
]

export const internshipProjects = [
  {
    title: 'GoodKart',
    company: 'SellSathi',
    type: 'Full Stack',
    year: '2026',
    duration: '3 months (Feb 2026 - May 2026)',
    role: 'Full Stack Development Intern',
    teamSize: '4 members',
    status: 'Completed',
    image: '/project-goodkart.png',
    subtitle: 'Multi-vendor B2B & B2C E-commerce Platform',
    techBadges: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'Firebase Firestore', 'JWT', 'Razorpay', 'Cloudinary', 'Shiprocket', 'PDFKit', 'Google Gemini API'],
    overview: {
      what: 'Goodkart is a comprehensive multi-vendor e-commerce platform that supports both B2B (Business-to-Business) and B2C (Business-to-Consumer) transactions. The platform enables multiple vendors to sell their products while providing a seamless shopping experience for both individual customers and business clients.',
      why: 'Built to address the growing need for a unified platform that can handle both retail and wholesale operations, allowing businesses to expand their reach while maintaining separate workflows for different customer types.',
      who: 'Designed for multi-vendor marketplaces, retail businesses, wholesalers, and entrepreneurs looking to establish an online presence with support for both individual and bulk purchases.',
    },
    keyFeatures: [
      { icon: '🛒', title: 'Multi-vendor Support', desc: 'Complete vendor management system with individual dashboards, product listings, and order management.' },
      { icon: '🔐', title: 'Authentication & Authorization', desc: 'Secure JWT-based authentication with role-based access control for customers, vendors, and admins.' },
      { icon: '📦', title: 'Complete Purchase Flow', desc: 'End-to-end shopping experience from product browsing to checkout, payment, and order tracking.' },
      { icon: '💳', title: 'Payment Integration', desc: 'Integrated Razorpay payment gateway supporting multiple payment methods including UPI, cards, and wallets.' },
      { icon: '🚚', title: 'Shipping & Logistics', desc: 'Shiprocket integration for automated shipping label generation and real-time tracking.' },
      { icon: '🧾', title: 'Invoice Generation', desc: 'Automated PDF invoice generation using PDFKit for all completed orders.' },
      { icon: '🤖', title: 'AI-Powered Features', desc: 'Google Gemini API integration for product recommendations and customer support.' },
      { icon: '📊', title: 'Admin Dashboard', desc: 'Comprehensive admin panel for managing vendors, products, orders, and platform analytics.' },
    ],
    technicalDetails: [
      {
        title: 'Frontend Architecture',
        desc: 'Built with React and Vite for optimal performance and developer experience. Tailwind CSS provides a modern, responsive design system.',
        tags: ['React 18+', 'Vite', 'Tailwind CSS', 'React Router', 'Axios'],
      },
      {
        title: 'Backend Infrastructure',
        desc: 'Node.js with Express.js powers the REST API, handling authentication, business logic, and third-party integrations.',
        tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Middleware Architecture'],
      },
      {
        title: 'Database & Storage',
        desc: 'Firebase Firestore provides real-time NoSQL database capabilities with Cloudinary handling media assets.',
        tags: ['Firebase Firestore', 'Cloudinary (Image Storage)', 'Real-time Data Sync'],
      },
      {
        title: 'Third-Party Services',
        desc: 'Multiple service integrations for payments, shipping, AI features, and document generation.',
        tags: ['Razorpay (Payments)', 'Shiprocket (Logistics)', 'Google Gemini API (AI)', 'PDFKit (Invoices)'],
      },
    ],
    architecture: 'The application follows a modern three-tier architecture: React frontend communicates with Express.js backend via REST APIs, which interfaces with Firebase Firestore for data persistence. Authentication is handled through JWT tokens, while file uploads are managed by Cloudinary. Payment processing flows through Razorpay, and shipping logistics are automated via Shiprocket integration. The system supports role-based access with separate interfaces for customers, vendors, and administrators.',
    challenges: [
      {
        challenge: 'Complex Multi-vendor Logic',
        solution: 'Implemented a robust vendor management system with isolated product catalogs, order routing, and commission calculations. Each vendor has their own dashboard while maintaining platform-wide consistency.',
      },
      {
        challenge: 'Payment & Order Synchronization',
        solution: 'Developed a state machine for order processing that handles payment confirmations, inventory updates, and vendor notifications atomically to prevent data inconsistencies.',
      },
    ],
    keyLearnings: [
      'Gained deep understanding of e-commerce workflows including inventory management, payment processing, and order fulfillment',
      'Learned to integrate multiple third-party services and handle their webhooks reliably',
      'Improved skills in state management for complex applications with multiple user roles',
      'Understood the importance of transaction handling and data consistency in financial applications',
    ],
    github: null,
    demo: null,
    highlight: true,
  },
  {
    title: 'GoodGuide',
    company: 'SellSathi',
    type: 'Full Stack',
    year: '2026',
    duration: '3 months (Feb 2026 - May 2026)',
    role: 'Full Stack Development Intern',
    teamSize: '4 members',
    status: 'Completed',
    image: '/project-goodguide.png',
    subtitle: 'Expert Consultation Platform with Real-time Communication',
    techBadges: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Socket.IO', 'Agora SDK', 'Razorpay', 'Firebase Auth', 'JWT'],
    keyFeatures: [
      { icon: '👥', title: 'Expert Profiles', desc: 'Comprehensive expert profiles with specializations, ratings, availability, and pricing information.' },
      { icon: '📅', title: 'Appointment Scheduling', desc: 'Smart booking system with calendar integration, time slot management, and automated reminders.' },
      { icon: '🎥', title: 'Video Consultations', desc: 'High-quality video calls powered by Agora SDK with screen sharing and recording capabilities.' },
      { icon: '💬', title: 'Real-time Chat', desc: 'Socket.IO-powered instant messaging for quick queries and follow-up discussions.' },
      { icon: '💰', title: 'Secure Payments', desc: 'Razorpay integration for consultation fees with support for multiple payment methods.' },
      { icon: '🔒', title: 'Authentication System', desc: 'Firebase Authentication combined with JWT for secure, scalable user management.' },
      { icon: '⭐', title: 'Rating & Reviews', desc: 'User feedback system to maintain service quality and help users choose the right expert.' },
      { icon: '📊', title: 'Analytics Dashboard', desc: 'Insights for experts on consultation history, earnings, and user engagement metrics.' },
    ],
    technicalDetails: [
      {
        title: 'Frontend Architecture',
        desc: 'Built with React and TypeScript for type-safe, maintainable code. Tailwind CSS ensures responsive design across devices.',
        tags: ['React 18+', 'TypeScript', 'Tailwind CSS', 'React Router', 'Socket.IO Client', 'Agora React SDK'],
      },
      {
        title: 'Backend Infrastructure',
        desc: 'Node.js with Express.js handles API requests, WebSocket connections, and real-time communication orchestration.',
        tags: ['Node.js', 'Express.js', 'TypeScript', 'Socket.IO Server', 'REST APIs', 'WebSocket'],
      },
      {
        title: 'Database & ORM',
        desc: 'PostgreSQL provides robust relational data storage with Prisma ORM for type-safe database queries and migrations.',
        tags: ['PostgreSQL', 'Prisma ORM', 'Database Migrations', 'Relational Schema Design'],
      },
      {
        title: 'Real-time Communication',
        desc: 'Agora SDK powers video consultations while Socket.IO handles instant messaging and presence detection.',
        tags: ['Agora Video SDK', 'Socket.IO', 'WebRTC', 'Real-time Events'],
      },
      {
        title: 'Authentication & Security',
        desc: 'Multi-layered security with Firebase Authentication for user management and JWT for API authorization.',
        tags: ['Firebase Authentication', 'JWT Tokens', 'Role-based Access Control', 'Secure Sessions'],
      },
    ],
    architecture: 'The platform uses a modern full-stack architecture with React/TypeScript frontend and Node.js/Express backend. PostgreSQL with Prisma ORM manages relational data including user profiles, appointments, and transactions. Real-time features are split between Socket.IO for chat and Agora SDK for video calls. Firebase handles initial authentication, while JWT tokens secure API endpoints. Payment processing is handled through Razorpay webhooks integrated with the backend.',
    challenges: [],
    keyLearnings: [
      'Mastered real-time communication technologies including WebSocket, WebRTC, and video streaming protocols',
      'Gained experience with TypeScript for building large-scale, maintainable applications',
      'Learned PostgreSQL database design and optimization with Prisma ORM',
      'Understood the complexities of scheduling systems, timezone handling, and calendar integrations',
      'Improved skills in handling concurrent users and managing WebSocket connections at scale',
    ],
    myResponsibilities: 'Developed complete Consultant pages where consultant service is provided for the users — real-time messaging, appointment scheduling, and tracking client service.',
    github: null,
    demo: null,
    highlight: true,
  },
]

export const skills = {
  Languages: ['C', 'Java'],
  'Web Development': ['HTML', 'CSS', 'Next.js'],
  Database: ['MySQL', 'DBMS'],
  'Tools & IDEs': ['VS Code', 'Git', 'GitHub'],
  'CS Fundamentals': ['Data Structures & Algorithms', 'OOPs', 'Operating Systems', 'Computer Networks'],
  Blockchain: ['Solidity', 'Web3.js', 'IPFS', 'Polygon'],
}

export const certifications = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte / Forage',
    date: 'June 2025',
    color: 'from-green-500 to-emerald-600',
    icon: '📊',
    file: '/Deloitte.pdf',
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Forage',
    date: 'November 2025',
    color: 'from-blue-500 to-cyan-600',
    icon: '🤖',
    file: '/GenAI Powered Data Analytics Job Simulation.pdf',
  },
  {
    title: 'Accenture Innovation Challenge',
    issuer: 'Accenture',
    date: 'October 2024',
    color: 'from-purple-500 to-violet-600',
    icon: '🏆',
    file: null, // certificate will be added later
  },
  {
    title: 'India Inspires Challenge',
    issuer: 'India Inspires',
    date: '2024',
    color: 'from-orange-500 to-amber-500',
    icon: '🇮🇳',
    file: '/India_Inspires_Certificate.pdf',
  },
]
