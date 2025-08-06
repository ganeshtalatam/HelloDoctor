import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const EnhancedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'journey', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#journey', label: 'Journey' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl transition-colors ${
              scrolled ? 'bg-navy text-white' : 'bg-white/20 text-white backdrop-blur-sm'
            }`}>
              MP
            </div>
            <div className="hidden md:block">
              <h1 className={`text-xl font-bold transition-colors ${
                scrolled ? 'text-navy' : 'text-white'
              }`}>
                Dr. Muralidhar Panchagnula
              </h1>
              <p className={`text-sm transition-colors ${
                scrolled ? 'text-navy/70' : 'text-white/80'
              }`}>
                Healthcare Management Expert
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`nav-item text-sm font-medium transition-all hover:scale-105 ${
                  scrolled ? 'text-navy hover:text-healthcare-blue' : 'text-white hover:text-gold'
                } ${
                  activeSection === item.href.substring(1) ? 'active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className={`transition-all hover-scale ${
                scrolled 
                  ? 'border-navy text-navy hover:bg-navy hover:text-white' 
                  : 'border-white/30 text-white hover:bg-white hover:text-navy backdrop-blur-sm'
              }`}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button
              size="sm"
              className={`btn-healthcare transition-all ${
                scrolled 
                  ? 'bg-healthcare-blue hover:bg-healthcare-blue/90 text-white' 
                  : 'bg-gold hover:bg-gold/90 text-navy'
              }`}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-navy hover:bg-navy/10' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/20 animate-slide-in-up">
          <div className="container mx-auto px-6 py-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-navy hover:bg-navy/10 font-medium transition-all ${
                    activeSection === item.href.substring(1) ? 'bg-navy/5 text-healthcare-blue' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-navy/70 mb-4">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-navy/70 mb-6">
                  <Mail className="h-4 w-4" />
                  <span>contact@drmuralidhar.com</span>
                </div>
                <Button className="w-full bg-healthcare-blue hover:bg-healthcare-blue/90 text-white btn-healthcare">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default EnhancedNavigation;