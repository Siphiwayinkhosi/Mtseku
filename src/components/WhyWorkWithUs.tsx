import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  MapPin, 
  Headphones,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyWorkWithUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const reasonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current?.children || [],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          }
        }
      );

      // Reasons animation
      gsap.fromTo(reasonsRef.current?.children || [],
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: reasonsRef.current,
            start: "top 80%",
          }
        }
      );

      // Stats animation
      gsap.fromTo(statsRef.current?.children || [],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      icon: Shield,
      title: "Safety First Approach",
      description: "Comprehensive safety protocols, regular vehicle maintenance, and experienced drivers ensure your journey is secure."
    },
    {
      icon: Clock,
      title: "Punctual & Reliable",
      description: "Our commitment to timeliness means you can depend on us for consistent, on-time service every single time."
    },
    {
      icon: Award,
      title: "Premium Quality Service",
      description: "From vehicle condition to customer service, we maintain the highest standards in every aspect of our operation."
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Our experienced drivers and support staff are trained to provide courteous, professional service."
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep knowledge of Cape Town and Johannesburg routes ensures efficient navigation and local insights."
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for bookings, inquiries, and emergency support whenever you need us."
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      number: "10,000+",
      label: "Satisfied Customers",
      description: "Happy clients who trust our services"
    },
    {
      icon: CheckCircle,
      number: "99.9%",
      label: "On-Time Performance",
      description: "Exceptional punctuality record"
    },
    {
      icon: Shield,
      number: "Zero",
      label: "Major Incidents",
      description: "Impeccable safety record"
    },
    {
      icon: Award,
      number: "100%",
      label: "Quality Commitment",
      description: "Dedicated to transport excellence"
    }
  ];

  return (
    <section id="why-us" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Why Choose <span className="text-accent">Mtseku Transport</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've built our reputation on delivering exceptional service that goes beyond just getting you from A to B, 
            focusing on safety, reliability, and customer satisfaction in every journey.
          </p>
        </div>

        {/* Reasons Grid */}
        <div ref={reasonsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-border/50 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Our Track Record Speaks
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-white/80 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;