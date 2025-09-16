import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Drivers", href: "#drivers" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl font-display font-bold transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Mtseku Transport Services 
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/27788686706"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isScrolled ? "btn-primary" : "btn-outline"
              } inline-block transition-all duration-300`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-accent"
              }`}
            >
              {isMobileMenuOpen ? (
                <motion.div
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg shadow-lg mt-2 overflow-hidden"
            >
              <motion.div
                className="px-2 pt-2 pb-3 space-y-1"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                  },
                }}
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    variants={{
                      closed: { opacity: 0, x: -20 },
                      open: { opacity: 1, x: 0 },
                    }}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-md w-full text-left transition-colors duration-300"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="px-3 py-2">
                  <a
                    href="https://wa.me/27788686706"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
