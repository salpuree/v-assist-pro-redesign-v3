import { SectorCard, FAQItem, Step, LocationData } from './types';
import realEstateHero from './real-estate-hero.png';

export const SECTORS: SectorCard[] = [
  {
    id: 1,
    title: "Luxury Transport & Private Fleet",
    subtitle: "Because the principal's time is the most expensive fuel in the fleet.",
    description: "Boutique Dispatch & Logistics Management",
    ref: "PARTNER-ALPHA",
    imagePlaceholder: "https://cdn.builder.io/api/v1/image/assets%2F7e66ffe0a16941c8a474718159e741d8%2Ff02e597e941e4dd889a0ea71d3c2333c?format=webp&width=800&height=1200",
    icon: 'car',
    liveStatus: "Consultation Status: Open",
    frictions: [
      {
        title: "The Coordination Trap",
        description: "Founders often spend 40% of their day managing chauffeurs and affiliate communication instead of growing the network."
      },
      {
        title: "Quality Fragmentation",
        description: "As the fleet scales, the personal touch that built the brand begins to slip into automated noise."
      },
      {
        title: "Route & Schedule Complexity",
        description: "Managing multi-city routes, backup drivers, vehicle maintenance, and fuel logistics across disparate systems creates bottlenecks."
      },
      {
        title: "Client Expectation Misalignment",
        description: "Last-minute requests, special demands, and discretionary service standards demand white-glove attention that outpaces your team's capacity."
      }
    ],
    protocol: {
      title: "The Silent Execution Layer",
      description: "We deploy a dedicated partner who lives inside your dispatch system, handling every quote, route, and client request as if they were you. They manage driver scheduling, client communications, route optimization, and exception handling with zero escalation."
    },
    solutions: [
      {
        title: "Dispatch & Client Management",
        description: "Our partner owns every client interaction, from inquiry to completion. They manage quote requests, booking confirmations, and real-time communication—eliminating your team's daily email avalanche."
      },
      {
        title: "Driver Coordination & Logistics",
        description: "Scheduling, shift management, route optimization, and vehicle assignment happen seamlessly. Your partner works with your drivers as an extension of your operations team."
      },
      {
        title: "Exception Handling & Escalations",
        description: "Last-minute changes, cancellations, and special requests are handled with discretion and judgment. Only truly strategic decisions reach you."
      }
    ],
    impact: {
      title: "The Human Result",
      stats: [
        { value: "0", label: "Dispatch Noise" },
        { value: "180hr", label: "Monthly Reclaimed Focus" }
      ],
      cta: "Secure Your Slot"
    },
    testimonial: {
      quote: "We cut our internal logistics overhead by 60% while improving client satisfaction scores. It's like having a COO who specializes only in keeping our operations silent.",
      author: "Principal, Luxury Transport Group",
      role: "Client testimonial (NDA-anonymized)"
    },
    caseStudy: {
      title: "From Chaos to Command: The Pinnacle Transformation",
      outcome: "A boutique fleet operator managing 12 vehicles across three cities reduced operational overhead by $85K annually while improving client NPS by 27 points.",
      metrics: ["3 cities", "12 vehicles", "80+ clients", "+27 NPS", "-60% overhead"]
    }
  },
  {
    id: 2,
    title: "High-Discretion Real Estate",
    subtitle: "Closing million-dollar deals shouldn't mean being buried in administrative friction.",
    description: "Transaction Architecture & Operations",
    ref: "PARTNER-GAMMA",
    imagePlaceholder: realEstateHero,
    icon: 'landmark',
    liveStatus: "Capacity: 2 Principal Slots",
    frictions: [
      {
        title: "The Paperwork Paradox",
        description: "Top-tier agents lose hours to compliance and coordination that could be spent on high-value networking."
      },
      {
        title: "Client Coordination Chaos",
        description: "Managing buyers, sellers, lenders, inspectors, and title companies across multiple transactions creates a coordination nightmare."
      },
      {
        title: "Compliance & Documentation Burden",
        description: "State-specific real estate laws, disclosure requirements, and contractual obligations demand meticulous attention that drains bandwidth."
      },
      {
        title: "Post-Close Follow-Up Overhead",
        description: "Warranty claims, title issues, and client relationship maintenance continue long after closing, adding perpetual background work."
      }
    ],
    protocol: {
      title: "Transaction Sovereignty",
      description: "A specialized operational architect handles the entire contract-to-close sequence, ensuring total accuracy and client privacy. They manage escrow coordination, compliance documentation, timeline tracking, and post-close relationship management."
    },
    solutions: [
      {
        title: "Transaction Lifecycle Management",
        description: "Every deal flows through a controlled system. From offer acceptance through closing, our architect coordinates every party, deadline, and document. No surprises. No missed items."
      },
      {
        title: "Compliance & Documentation Assembly",
        description: "State disclosures, title work, inspection coordination, and contract amendments are handled with expert precision. Our partner knows the regulatory landscape better than your title company."
      },
      {
        title: "Client Communication & Timeline Ownership",
        description: "Buyers and sellers get consistent updates. Timeline risks are flagged before they become problems. Your agent remains the trusted advisor; we handle the logistics."
      },
      {
        title: "Post-Close Operations",
        description: "Warranty period management, HOA coordination, contractor introductions, and long-term relationship nurture happen automatically—building client lifetime value."
      }
    ],
    impact: {
      title: "The Human Result",
      stats: [
        { value: "+35%", label: "Closing Velocity" },
        { value: "Zero", label: "Post-Close Friction" }
      ],
      cta: "Secure Your Slot"
    },
    testimonial: {
      quote: "My transaction backlog disappeared within weeks. Now I close 35% faster while spending more time with qualified buyers. It's changed how I scale.",
      author: "Top-Producing Real Estate Principal",
      role: "Client testimonial (NDA-anonymized)"
    },
    caseStudy: {
      title: "Breaking the Close Bottleneck",
      outcome: "A top-producing real estate team closed 18 additional transactions annually while reducing closing timeline from 65 to 42 days on average.",
      metrics: ["18 new closings/year", "-23 day average", "+42% agent capacity", "$2.8M additional revenue"]
    }
  },
  {
    id: 3,
    title: "Private & Family Offices",
    subtitle: "Protecting the legacy by managing the daily noise.",
    description: "Wealth & Lifestyle Operations",
    ref: "PARTNER-BETA",
    imagePlaceholder: "https://cdn.builder.io/api/v1/image/assets%2F7e66ffe0a16941c8a474718159e741d8%2Ffac7238429ef4bb3becd8a085209e4d3?format=webp&width=800&height=1200",
    icon: 'briefcase',
    liveStatus: "Capacity: 1 Private Partner Space",
    frictions: [
      {
        title: "Administrative Fatigue",
        description: "UHNW individuals often find their personal legacy buried under the weight of household staff, travel, and vendor management."
      },
      {
        title: "Household Operations Fragmentation",
        description: "Managing multiple properties, staff scheduling, maintenance vendors, and supplier relationships across properties becomes a full-time job."
      },
      {
        title: "Travel & Lifestyle Logistics",
        description: "Coordinating international travel, seasonal home openings, social calendar management, and special events requires constant attention."
      },
      {
        title: "Wealth Management Interface",
        description: "Communicating with advisors, accountants, attorneys, and bankers on investment decisions and reporting drains personal time."
      }
    ],
    protocol: {
      title: "Institutional Grace",
      description: "We provide the repeatable, human-led processes that ensure your family office functions perfectly, even when life gets complicated. Our specialists manage household staff coordination, property operations, travel logistics, and advisor communications with absolute discretion."
    },
    solutions: [
      {
        title: "Household Staff & Vendor Management",
        description: "Your partner coordinates household managers, maintenance teams, service providers, and contractors. Scheduling, budgeting, and performance management become invisible."
      },
      {
        title: "Multi-Property Operations",
        description: "Seasonal openings, property maintenance scheduling, and vendor relationships across multiple homes are managed with institutional precision and local knowledge."
      },
      {
        title: "Travel & Lifestyle Coordination",
        description: "International travel logistics, event planning, social calendar management, and personal assistant coordination happen with flawless execution and discretion."
      },
      {
        title: "Professional Advisory Interface",
        description: "Communication with wealth advisors, tax professionals, attorneys, and bankers is coordinated seamlessly. Reports are compiled, meetings are scheduled, and you remain strategically focused."
      }
    ],
    impact: {
      title: "The Human Result",
      stats: [
        { value: "Total", label: "Operational Peace" },
        { value: "24/7", label: "Principal Readiness" }
      ],
      cta: "Secure Your Slot"
    },
    testimonial: {
      quote: "For the first time in a decade, I can spend weekends with my family instead of managing property managers. The peace of mind is worth more than the investment.",
      author: "UHNW Principal, Multi-Property Estate",
      role: "Client testimonial (NDA-anonymized)"
    },
    caseStudy: {
      title: "Reclaiming Personal Time in Complexity",
      outcome: "A UHNW principal managing 5 properties, 12 staff members, and annual international travel reduced administrative overhead by 40 hours per month.",
      metrics: ["5 properties managed", "12+ staff coordinated", "40 hrs/month reclaimed", "360 hrs/year for strategy"]
    }
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "The Discovery Walkthrough",
    description: "We sit down to map out exactly where your time is leaking. This isn't a demo; it's a forensic look at your day."
  },
  {
    number: "02",
    title: "The Partner Blueprint",
    description: "We don't sell a 'plan'. We build a bespoke human infrastructure tailored to your specific rhythm."
  },
  {
    number: "03",
    title: "Silent Integration",
    description: "Our specialists step in quietly. We absorb the work so you can step away without the gears grinding to a halt."
  },
  {
    number: "04",
    title: "Your Focus, Uninterrupted.",
    description: "The noise stops. Your legacy resumes. You are now free to be the visionary again."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How is this different from hiring a virtual assistant?",
    answer: "An assistant is someone you manage. We are partners you rely on. We don't just take tasks; we own the outcomes. You don't manage our people — we manage the entire operational layer for you. Unlike a single hire, we operate as a team: if your primary partner is unavailable, another trained specialist steps in immediately. Your operations never stop."
  },
  {
    question: "Will I lose my 'personal touch' with clients?",
    answer: "Quite the opposite. By removing the administrative friction, you are free to engage with clients only on the high-value moments that matter, while we ensure the 'boring' details are executed with your exact voice."
  },
  {
    question: "How do you handle sensitive data and privacy?",
    answer: "Discretion is our primary product. We work with family offices and elite fleet owners where privacy is non-negotiable. We use encrypted communications and strict institutional NDAs for every partner we assign."
  },
  {
    question: "What is the Ghost Engine?",
    answer: "It's our term for the invisible human infrastructure we build for you. It's the combination of our elite personnel and the proprietary protocols that keep your business running silently in the background."
  },
  {
    question: "How quickly can we see results?",
    answer: "Integration usually takes 14 to 21 days. We start by absorbing the most painful bottlenecks first, providing immediate breathing room while we map the rest of your operations."
  },
  {
    question: "How do I outsource my customer communications safely?",
    answer: "Outsourcing with us is built on a White-Label Human model. Our specialists learn your voice, your brand standards, and your specific CRM (like Limo Anywhere or Salesforce). We don't use call centers; we assign a dedicated partner who acts as a senior member of your own team, ensuring absolute security and brand consistency."
  },
  {
    question: "Do we use our existing software or yours?",
    answer: "Both. We are tech-agnostic. We live inside your Limo Anywhere, GNet, or Salesforce instances. If you need a custom automation layer (like our Ai2mate or BooksIQ), we deploy that too."
  },
  {
    question: "What happens if our volume fluctuates?",
    answer: "Our model is built for the high-velocity world. We scale our presence up during peak seasons and down during lulls, ensuring you always have capacity without the overhead of full-time idle staff."
  }
];

export const LOCATIONS: LocationData[] = [
  {
    id: "florida",
    city: "Florida",
    region: "Statewide",
    description: "Institutional operational support tailored for the unique landscape of Florida wealth management and family offices. From Naples to Palm Beach.",
    stats: [
      { label: "Local Partners", value: "15+" },
      { label: "Naples/Miami Coverage", value: "100%" }
    ],
    features: [
      "State-specific compliance oversight",
      "Local vendor network management",
      "Seasonal property coordination",
      "Florida-based principal support"
    ]
  },
  {
    id: "miami",
    city: "Miami",
    region: "South Florida",
    description: "High-velocity operational intelligence for the Miami luxury market. Supporting elite transport, real estate development, and private family assets.",
    stats: [
      { label: "Market Presence", value: "8 yrs" },
      { label: "Rapid Response", value: "<15m" }
    ],
    features: [
      "Luxury fleet dispatch expertise",
      "High-discretion real estate ops",
      "Global-to-local travel logistics",
      "Concierge-level attention"
    ]
  },
  {
    id: "us",
    city: "United States",
    region: "National",
    description: "National executive operations management for decentralized family offices and multi-state business interests.",
    stats: [
      { label: "States Served", value: "24" },
      { label: "Core Timezones", value: "All" }
    ],
    features: [
      "Coast-to-coast operational sync",
      "Remote human infrastructure",
      "Multi-state tax/legal interface",
      "National travel management"
    ]
  }
];
