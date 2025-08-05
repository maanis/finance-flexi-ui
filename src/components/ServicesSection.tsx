import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Coins, 
  Building2, 
  User, 
  Briefcase,
  Heart,
  Clock,
  Car,
  Plane,
  Shield
} from 'lucide-react';

const ServicesSection = () => {
  const loanServices = [
    {
      icon: Home,
      title: "Home Loans",
      description: "Fulfill your dream of owning a home with our competitive home loan rates and easy approval process.",
      features: ["Up to ₹5 Crores", "Lowest Interest Rates", "Quick Approval"]
    },
    {
      icon: Coins,
      title: "Gold Loans",
      description: "Get instant cash against your gold jewelry with minimal documentation and quick processing.",
      features: ["Instant Processing", "No Income Proof", "Flexible Repayment"]
    },
    {
      icon: Building2,
      title: "Mortgage Loans",
      description: "Leverage your property value for business expansion or personal needs with our mortgage solutions.",
      features: ["High Loan Amount", "Long Tenure", "Competitive Rates"]
    },
    {
      icon: User,
      title: "Personal Loans",
      description: "Meet your personal financial needs with our hassle-free personal loan options.",
      features: ["No Collateral", "Quick Disbursal", "Flexible Terms"]
    },
    {
      icon: Briefcase,
      title: "Business Loans",
      description: "Fuel your business growth with our comprehensive business financing solutions.",
      features: ["Working Capital", "Equipment Finance", "Business Expansion"]
    }
  ];

  const insuranceServices = [
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family with extensive hospital network.",
      features: ["Cashless Treatment", "No Waiting Period", "Family Coverage"]
    },
    {
      icon: Clock,
      title: "Term Insurance",
      description: "Secure your family's financial future with our affordable term insurance plans.",
      features: ["High Coverage", "Low Premium", "Tax Benefits"]
    },
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Build wealth while ensuring life protection with our comprehensive life insurance policies.",
      features: ["Investment + Insurance", "Guaranteed Returns", "Flexible Premiums"]
    },
    {
      icon: Car,
      title: "Vehicle Insurance",
      description: "Complete protection for your vehicle with comprehensive motor insurance coverage.",
      features: ["Instant Policy", "24/7 Claim Support", "Zero Depreciation"]
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      description: "Travel worry-free with our comprehensive travel insurance covering medical and trip emergencies.",
      features: ["Global Coverage", "Medical Emergency", "Trip Cancellation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Financial Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to meet your diverse needs. From loans to insurance, we've got you covered.
          </p>
        </div>

        <Tabs defaultValue="loans" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 max-w-md mx-auto">
            <TabsTrigger value="loans" className="text-lg">Loans</TabsTrigger>
            <TabsTrigger value="insurance" className="text-lg">Insurance</TabsTrigger>
          </TabsList>

          <TabsContent value="loans" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border bg-gradient-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-financial-trust/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-financial-trust/20 transition-colors">
                      <service.icon className="w-8 h-8 text-financial-trust" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="text-sm bg-financial-trust/5 rounded-lg py-2 px-3">
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="financial" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insurance" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insuranceServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border bg-gradient-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-financial-security/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-financial-security/20 transition-colors">
                      <service.icon className="w-8 h-8 text-financial-security" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="text-sm bg-financial-security/5 rounded-lg py-2 px-3">
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="success" className="w-full">
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;