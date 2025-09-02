import {
  Home,
  User,
  Briefcase,
  Coins,
  Building2,
  Heart,
  Clock,
  Car,
  Shield,
  Plane
} from 'lucide-react';

export const loanServices = [
  {
    id: "home-loan",
    slug: "home-loan",
    title: "Home Loans",
    description: "Realize your dream of owning a home with our competitive interest rates and seamless approval process. Get instant pre-approval and flexible repayment options.",
    features: [
      "Loan amount up to ₹5 Cr",
      "Attractive Interest Rates starting from 8.5%",
      "Quick & Easy Processing within 7 days",
      "Flexible tenure up to 30 years",
      "Minimal documentation required",
      "Free property valuation"
    ],
    icon: Home,
    image: "/images/home-loan.jpg",
    category: "loans"
  },
  {
    id: "personal-loan",
    slug: "personal-loan", 
    title: "Personal Loans",
    description: "Address your immediate financial needs with our flexible and collateral-free personal loan options. No guarantor required.",
    features: [
      "Instant Disbursal within 24 hours",
      "No Collateral Required",
      "Flexible Repayment Tenure up to 5 years",
      "Loan amount up to ₹25 Lakh",
      "Competitive interest rates",
      "Online application process"
    ],
    icon: User,
    image: "/images/personal-loan.jpg",
    category: "loans"
  },
  {
    id: "business-loan",
    slug: "business-loan",
    title: "Business Loans", 
    description: "Fuel your business ambitions with our tailored financing solutions for expansion, working capital, and equipment purchase.",
    features: [
      "Working Capital Finance up to ₹10 Cr",
      "Term Loans for Expansion",
      "Customized Solutions for every business",
      "Quick approval process",
      "Competitive interest rates",
      "Dedicated relationship manager"
    ],
    icon: Briefcase,
    image: "/images/business-loan.jpg",
    category: "loans"
  },
  {
    id: "gold-loan",
    slug: "gold-loan",
    title: "Gold Loans",
    description: "Get instant cash against your gold jewelry with minimal documentation and secure storage facility.",
    features: [
      "Instant Cash in Minutes",
      "No Income Proof Needed", 
      "Complete Security for Gold",
      "Loan up to 75% of gold value",
      "Flexible repayment options",
      "Insurance coverage for pledged gold"
    ],
    icon: Coins,
    image: "/images/gold-loan.jpg",
    category: "loans"
  },
  {
    id: "mortgage-loan",
    slug: "mortgage-loan",
    title: "Mortgage Loans",
    description: "Leverage your property's value for significant personal or business needs with our loan against property solutions.",
    features: [
      "High Loan-to-Value Ratio up to 70%",
      "Extended Repayment Tenure up to 20 years",
      "Competitive Interest Rates",
      "Multi-purpose usage allowed",
      "Quick property valuation",
      "Transparent fee structure"
    ],
    icon: Building2,
    image: "/images/mortgage-loan.jpg",
    category: "loans"
  }
];

export const insuranceServices = [
  {
    id: "health-insurance",
    slug: "health-insurance",
    title: "Health Insurance",
    description: "Protect yourself and your family with comprehensive health coverage for medical emergencies and planned treatments.",
    features: [
      "Cashless Hospitalization at 10,000+ hospitals",
      "Covers Pre & Post Hospitalization expenses",
      "Tax Benefits under Section 80D",
      "Family floater options available",
      "No claim bonus rewards",
      "24/7 customer support"
    ],
    icon: Heart,
    image: "/images/health-insurance.jpg",
    category: "insurance"
  },
  {
    id: "term-life-insurance",
    slug: "term-life-insurance", 
    title: "Term Life Insurance",
    description: "Ensure your family's financial security in your absence with a high-coverage, low-premium term insurance plan.",
    features: [
      "Large Cover at Low Premium",
      "Critical Illness Rider available",
      "Multiple Payout Options",
      "Tax benefits under Section 80C",
      "Online premium payment",
      "Flexible premium payment terms"
    ],
    icon: Clock,
    image: "/images/term-life-insurance.jpg",
    category: "insurance"
  },
  {
    id: "vehicle-insurance",
    slug: "vehicle-insurance",
    title: "Vehicle Insurance", 
    description: "Get complete protection for your car or bike against accidents, theft, natural disasters and third-party liabilities.",
    features: [
      "Zero Depreciation Cover available",
      "24/7 Roadside Assistance",
      "Quick & Digital Claims process",
      "Cashless garage network",
      "Personal accident cover",
      "Engine protection add-on"
    ],
    icon: Car,
    image: "/images/vehicle-insurance.jpg",
    category: "insurance"
  },
  {
    id: "life-insurance",
    slug: "life-insurance",
    title: "Life Insurance",
    description: "Build a financial corpus for your future goals while ensuring life protection with our savings and investment plans.",
    features: [
      "Insurance + Investment in one plan",
      "Guaranteed Returns options",
      "Wealth Creation for future goals",
      "Tax benefits under Section 80C & 10(10D)",
      "Flexible premium payment options",
      "Maturity benefit guarantee"
    ],
    icon: Shield,
    image: "/images/life-insurance.jpg",
    category: "insurance"
  },
  {
    id: "travel-insurance",
    slug: "travel-insurance",
    title: "Travel Insurance",
    description: "Travel the world worry-free with our comprehensive plans covering medical emergencies, trip cancellations, and more.",
    features: [
      "Global Coverage for international travel",
      "Cashless Medical Treatment worldwide",
      "Baggage & Flight Delay Cover",
      "Emergency evacuation coverage",
      "Adventure sports coverage",
      "COVID-19 coverage available"
    ],
    icon: Plane,
    image: "/images/travel-insurance.jpg",
    category: "insurance"
  }
];

export const allServices = [...loanServices, ...insuranceServices];

export const getServiceBySlug = (slug) => {
  return allServices.find(service => service.slug === slug);
};

export const getServicesByCategory = (category) => {
  return allServices.filter(service => service.category === category);
};