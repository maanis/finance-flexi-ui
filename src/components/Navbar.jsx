import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, Coins, Building2, User, Briefcase, Heart, Clock, Car, Plane, Shield,
  CheckCircle2, ArrowRight, CreditCard, ChevronDown, Menu, X
} from 'lucide-react';

// --- Mock ShadCN UI Components for demonstration ---
const Card = ({ className, children, onMouseMove, onMouseLeave }) => <div className={className} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>{children}</div>;
const CardHeader = ({ className, children }) => <div className={className}>{children}</div>;
const CardContent = ({ className, children }) => <div className={className}>{children}</div>;
const CardTitle = ({ className, children }) => <h3 className={className}>{children}</h3>;
const Button = ({ className, children, ...props }) => <button className={className} {...props}>{children}</button>;

// --- Data for Services & Navigation ---
const loanServices = [
  { icon: Home, title: "Home Loans", description: "Realize your dream of owning a home with our competitive interest rates and seamless approval process.", features: ["Loan amount up to ₹5 Cr", "Attractive Interest Rates", "Quick & Easy Processing"], buttonText: "Explore Home Loans" },
  { icon: User, title: "Personal Loans", description: "Address your immediate financial needs with our flexible and collateral-free personal loan options.", features: ["Instant Disbursal", "No Collateral Required", "Flexible Repayment Tenure"], buttonText: "Get a Personal Loan" },
  { icon: Briefcase, title: "Business Loans", description: "Fuel your business ambitions with our tailored financing solutions for expansion, and working capital.", features: ["Working Capital Finance", "Term Loans for Expansion", "Customized Solutions"], buttonText: "Grow Your Business" },
  { icon: Coins, title: "Gold Loans", description: "Get instant cash against your gold jewelry with minimal documentation and secure storage.", features: ["Instant Cash in Minutes", "No Income Proof Needed", "Complete Security for Gold"], buttonText: "Unlock Gold Value" },
  { icon: Building2, title: "Mortgage Loans", description: "Leverage your property's value for significant personal or business needs with our loan against property.", features: ["High Loan-to-Value Ratio", "Extended Repayment Tenure", "Competitive Interest Rates"], buttonText: "Leverage Your Property" }
];
const insuranceServices = [
  { icon: Heart, title: "Health Insurance", description: "Protect yourself and your family with comprehensive health coverage for medical emergencies.", features: ["Cashless Hospitalization", "Covers Pre & Post Hospitalization", "Tax Benefits under 80D"], buttonText: "Secure Your Health" },
  { icon: Clock, title: "Term Life Insurance", description: "Ensure your family's financial security in your absence with a high-coverage, low-premium term plan.", features: ["Large Cover at Low Premium", "Critical Illness Rider", "Multiple Payout Options"], buttonText: "Protect Your Family" },
  { icon: Car, title: "Vehicle Insurance", description: "Get complete protection for your car or bike against accidents, theft, and other damages.", features: ["Zero Depreciation Cover", "24/7 Roadside Assistance", "Quick & Digital Claims"], buttonText: "Insure Your Vehicle" },
  { icon: Shield, title: "Life Insurance", description: "Build a financial corpus for your future goals while ensuring life protection with our savings plans.", features: ["Insurance + Investment", "Guaranteed Returns", "Wealth Creation for Goals"], buttonText: "Plan Your Life Goals" },
  { icon: Plane, title: "Travel Insurance", description: "Travel the world worry-free with our plans covering medical emergencies, trip cancellations, and more.", features: ["Global Coverage", "Cashless Medical Treatment", "Baggage & Flight Delay Cover"], buttonText: "Travel Fearlessly" }
];
const navLinks = [
  { title: "Home", href: "#" },
  { title: "About Us", href: "#about" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Contact", href: "#contact" },
];

// --- Animation Variants ---
const gridContainerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const gridItemVariants = { hidden: { opacity: 0, y: 20, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } } };
const mobileMenuVariant = { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.2 } } };
const mobileLinkVariant = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { ease: 'easeOut' } } };

// --- Modern Navbar Component ---
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-zinc-900 dark:text-white">Flexi Choice</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.title} href={link.href} className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{link.title}</a>)}
            <MegaMenu />
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a href="#login" className="hidden sm:block text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Login</a>
            <Button className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-white font-semibold rounded-full shadow-lg bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ring-offset-zinc-50 dark:ring-offset-zinc-950 group">
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-900 dark:text-white">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800"
          >
            <div className="flex flex-col space-y-2 p-4">
              {navLinks.map((link, i) => (
                <motion.a key={link.title} href={link.href} variants={mobileLinkVariant} initial="hidden" animate="visible" transition={{ delay: i * 0.05 }} className="px-4 py-2 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">{link.title}</motion.a>
              ))}
              {/* Mobile Services Accordion */}
              <motion.div variants={mobileLinkVariant} initial="hidden" animate="visible" transition={{ delay: navLinks.length * 0.05 }}>
                <button onClick={() => setServicesMenuOpen(!isServicesMenuOpen)} className="w-full flex justify-between items-center px-4 py-2 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isServicesMenuOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 border-l-2 border-indigo-500 ml-4 mt-2">
                      <a href="#services" className="flex items-center gap-2 py-2 text-zinc-600 dark:text-zinc-400"><CreditCard className="w-4 h-4 text-indigo-500" /> Loans</a>
                      <a href="#services" className="flex items-center gap-2 py-2 text-zinc-600 dark:text-zinc-400"><Shield className="w-4 h-4 text-teal-500" /> Insurance</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div variants={mobileLinkVariant} initial="hidden" animate="visible" transition={{ delay: (navLinks.length + 1) * 0.05 }} className="border-t border-zinc-200 dark:border-zinc-800 pt-4 mt-2">
                <Button className="w-full bg-indigo-600 text-white py-3 rounded-lg">Apply Now</Button>
                <a href="#login" className="block text-center mt-3 py-2 text-zinc-600 dark:text-zinc-300">Login</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Mega Menu Component ---
const MegaMenu = () => {
  return (
    <div className="group relative">
      <button className="flex items-center text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
        Services <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute -left-1/2 top-full pt-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
        <div className="w-[36rem] bg-white dark:bg-zinc-900 rounded-lg shadow-2xl border border-zinc-200 dark:border-zinc-800 p-6 grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2"><CreditCard /> Loans</h3>
            <div className="flex flex-col space-y-1">
              {loanServices.slice(0, 5).map(s => <a key={s.title} href="#" className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300">{s.title}</a>)}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-teal-600 dark:text-teal-400 mb-4 flex items-center gap-2"><Shield /> Insurance</h3>
            <div className="flex flex-col space-y-1">
              {insuranceServices.slice(0, 5).map(s => <a key={s.title} href="#" className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300">{s.title}</a>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Reusable Service Card Component ---
const ServiceCard = ({ service, theme }) => {
  const { icon: Icon, title, description, features, buttonText } = service;
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const handleMouseMove = (e) => { const rect = e.currentTarget.getBoundingClientRect(); setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top }); };
  const handleMouseLeave = () => setMousePosition({ x: -1000, y: -1000 });
  const themeClasses = {
    indigo: { aurora: 'from-indigo-500/50', text: 'text-indigo-600 dark:text-indigo-400', button: 'bg-indigo-600 hover:bg-indigo-700', check: 'text-indigo-500' },
    teal: { aurora: 'from-teal-500/50', text: 'text-teal-600 dark:text-teal-400', button: 'bg-teal-600 hover:bg-teal-700', check: 'text-teal-500' }
  };
  const currentTheme = themeClasses[theme];

  return (
    <motion.div variants={gridItemVariants} className="relative h-full">
      <Card onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="group relative z-10 flex flex-col h-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 overflow-hidden">
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, ${currentTheme.aurora} 0%, transparent 80%)` }} />
        <CardHeader className="text-center items-center pt-8">
          <div className="relative z-10 w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4"><Icon className={`w-8 h-8 ${currentTheme.text}`} /></div>
          <CardTitle className="text-xl font-bold text-zinc-900 dark:text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow text-center p-6">
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">{description}</p>
          <div className="space-y-3 mb-8 text-left">
            {features.map((feature, idx) => (<div key={idx} className="flex items-center text-zinc-700 dark:text-zinc-300"><CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 ${currentTheme.check}`} /><span>{feature}</span></div>))}
          </div>
          <Button className={`mt-auto w-full inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ${currentTheme.button} focus:outline-none focus:ring-2 focus:ring-offset-2 ring-white/50`}>{buttonText}<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// --- Animated Tabs Component ---
const AnimatedTabs = ({ tabs, activeTab, setActiveTab }) => {
  const tabsRef = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  useEffect(() => { const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab); const activeTabElement = tabsRef.current[activeTabIndex]; if (activeTabElement) { setIndicatorStyle({ left: activeTabElement.offsetLeft, width: activeTabElement.offsetWidth }); } }, [activeTab, tabs]);
  return (
    <div className="flex justify-center mb-12"><div className="relative flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-full p-1">
      {tabs.map((tab, index) => (<button key={tab.id} ref={el => tabsRef.current[index] = el} onClick={() => setActiveTab(tab.id)} className={`${activeTab === tab.id ? 'text-zinc-900 dark:text-white' : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'} relative rounded-full px-6 py-2.5 text-sm sm:text-base font-medium transition-colors duration-300 z-10 capitalize`}>{tab.label}</button>))}
      <motion.div className="absolute h-full bg-white dark:bg-zinc-700 rounded-full z-0" animate={indicatorStyle} transition={{ type: 'spring', stiffness: 400, damping: 35 }} />
    </div></div>
  );
};

// --- Main App Component ---
export default function NavbarTop() {
  const [activeTab, setActiveTab] = useState('loans');
  const TABS = [{ id: 'loans', label: 'Loans' }, { id: 'insurance', label: 'Insurance' }];

  return (
    <div className="font-sans bg-white dark:bg-zinc-950 min-h-screen">
      <Navbar />
      <main>
        <section id="services" className="py-20 sm:py-28 bg-white dark:bg-zinc-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-50 dark:opacity-100"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500">Your Financial Toolkit</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">At Flexi Choice, we offer a complete suite of financial services. Whether you're planning a big purchase or securing your future, we've got the right solution for you.</p>
            </div>
            <AnimatedTabs tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                {activeTab === 'loans' && (<motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={gridContainerVariants} initial="hidden" animate="show">{loanServices.map((service, index) => (<ServiceCard key={`loan-${index}`} service={service} theme="indigo" />))}</motion.div>)}
                {activeTab === 'insurance' && (<motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={gridContainerVariants} initial="hidden" animate="show">{insuranceServices.map((service, index) => (<ServiceCard key={`insurance-${index}`} service={service} theme="teal" />))}</motion.div>)}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}
