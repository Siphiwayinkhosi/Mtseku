import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import WhyWorkWithUs from '@/components/WhyWorkWithUs';
import Booking from '@/components/Booking';
import Drivers from '@/components/Drivers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scrolling and other global animations
    gsap.config({
      nullTargetWarn: false,
    });

    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
           <Drivers />
            <WhyWorkWithUs />
        <Gallery />
       
        <Booking />
       
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
