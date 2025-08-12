import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Healthcare Management",
    "Project Management",
    "Corporate Training",
    "Leadership Development",
    "Healthcare Consulting",
    "Medical Ethics",
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16 justify-between">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6 mx-auto">
            <div className="flex items-center space-x-2">
              <div>
                <h3 className="font-bold text-lg">Dr. Muralidhar</h3>
                <p className="text-xs text-muted-foreground">
                  Healthcare Consultant
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Senior Advisory Consultant with 30+ years of experience in
              healthcare management, dedicated to advancing healthcare through
              strategic leadership and innovation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+91-9177575707</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>panchagnimuralidhar@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-6">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Services */}
          <div className="space-y-6 mx-auto">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Affiliations */}
          <div className="space-y-6 mx-auto">
            <h4 className="font-semibold text-lg">Professional Affiliations</h4>
            <div className="space-y-4">
              <Card className="p-4 bg-secondary/50">
                <p className="text-sm font-medium">ISB Alumni</p>
                <p className="text-xs text-muted-foreground">
                  Indian School of Business
                </p>
              </Card>
              <Card className="p-4 bg-secondary/50">
                <p className="text-sm font-medium">AINU Ethics Committee</p>
                <p className="text-xs text-muted-foreground">
                  Social Scientist/Ethicist
                </p>
              </Card>
              <Card className="p-4 bg-secondary/50">
                <p className="text-sm font-medium">GUIDEPOINT</p>
                <p className="text-xs text-muted-foreground">
                  Global Advisors, NY
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} Dr. Muralidhar Panchagnula. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>for healthcare excellence.</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
