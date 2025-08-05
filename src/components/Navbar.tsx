import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu, X, CreditCard, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Flexi Choice</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-medium">
                  <DropdownMenuItem className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4" />
                    <span>Loans</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Insurance</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#login" className="text-foreground hover:text-primary transition-colors">
                Login
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" size="lg">
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#login" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Login
              </a>
              <div className="px-3 py-2">
                <Button variant="cta" className="w-full">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;