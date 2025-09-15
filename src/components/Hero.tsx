import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Shield, Clock, Star } from 'lucide-react';
import heroImage from '@/assets/hero.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(featuresRef.current?.children || [],
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
        "-=0.4"
      );

      // Floating animation for background elements
      gsap.to(".float-element", {
        y: -30,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-element absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        <div className="float-element absolute bottom-40 right-20 w-48 h-48 bg-primary/10 rounded-full blur-xl"></div>
        <div className="float-element absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1
            ref={titleRef}
            className="hero-text text-5xl sm:text-6xl lg:text-7xl mb-6"
          >
            Safe, Reliable &amp;<br />
            <span className="text-accent">Professional</span><br />
            Transport Services
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Premium shuttle services, tours, and private hire solutions across Cape Town &amp; Johannesburg. 
            Your trusted transport partner in South Africa.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/27788686706"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center justify-center group"
            >
              Book Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              Our Services
            </button>
          </div>

          {/* Key Features */}
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center sm:justify-start text-white/90">
              <Shield className="h-6 w-6 text-accent mr-3" />
              <span className="font-semibold">Safety First</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start text-white/90">
              <Clock className="h-6 w-6 text-accent mr-3" />
              <span className="font-semibold">Always On Time</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start text-white/90">
              <Star className="h-6 w-6 text-accent mr-3" />
              <span className="font-semibold">Premium Service</span>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Hero;