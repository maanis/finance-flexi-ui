import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-financial.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Financial Services" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Get the Right Loan or Insurance —{' '}
              <span className="text-secondary">Fast, Easy & Flexible</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in">
              Home, Gold, Mortgage Loans or Health & Life Insurance. One platform for all your financial needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in">
              <Button variant="secondary" size="xl" className="group">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm">Secure & Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm">Fast Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span className="text-sm">Best Rates</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats/Features */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
              <div className="text-3xl font-bold text-secondary mb-2">₹10L+</div>
              <div className="text-primary-foreground/90">Loans Disbursed</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
              <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
              <div className="text-primary-foreground/90">Happy Customers</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-primary-foreground/90">Support Available</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
              <div className="text-3xl font-bold text-secondary mb-2">99%</div>
              <div className="text-primary-foreground/90">Approval Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;