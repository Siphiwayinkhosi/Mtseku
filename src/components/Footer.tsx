import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Drivers', href: '#drivers' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Shuttle Services',
    'Tours & Sightseeing',
    'Private Hire',
    'Contract Transport'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Mtseku Transport
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Professional transport services across Cape Town and Johannesburg. 
                  Safe, reliable, and premium solutions for all your travel needs.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/27788686706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="tel:+27788686706"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="mailto:Tony.Noyila@outlook.com"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-white/80">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div className="text-white/80 text-sm">
                    <p>7 Laddier Street, The Rides</p>
                    <p>Centurion, Gauteng, 0061</p>
                    <p>South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                  <a
                    href="tel:+27788686706"
                    className="text-white/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    +27 78 868 6706
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <a
                    href="mailto:Tony.Noyila@outlook.com"
                    className="text-white/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    Tony.Noyila@outlook.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Mtseku Transport Services (Pty) Ltd. All rights reserved.
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:space-x-6 text-sm space-y-2 md:space-y-0">
              <span className="text-white/60">
                Built with excellence for South African transport
              </span>
              {/* Legal Text */}
              <div className="flex space-x-4 text-white/60">
                <div className="flex space-x-4 text-white/60">
  <a href="/privacy-policy" className="hover:text-accent transition-colors duration-300">Privacy</a>
  <a href="/cookie-notice" className="hover:text-accent transition-colors duration-300">Cookie Notice</a>
  <a href="/terms-of-use" className="hover:text-accent transition-colors duration-300">Terms of Use</a>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
