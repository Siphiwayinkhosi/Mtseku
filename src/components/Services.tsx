import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bus, MapPin, Car, Briefcase, ArrowRight } from 'lucide-react';
import shuttleImage from '@/assets/service1.jpg';
import toursImage from '@/assets/service2.jpg';
import privateHireImage from '@/assets/service3.jpg';
import contractTransportImage from '@/assets/gallery2.jpg';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Cards animation
      gsap.fromTo(cardsRef.current?.children || [],
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Bus,
      title: "Shuttle Services",
      description: "Reliable daily shuttles for corporate clients, schools, and regular commutes. Comfortable, punctual, and professional.",
      image: shuttleImage,
      features: ["Corporate Shuttles", "School Transport", "Airport Transfers", "Regular Routes"]
    },
    {
      icon: MapPin,
      title: "Tours & Sightseeing",
      description: "Discover South Africa's beauty with our guided tours. From wine estates to cultural landmarks, we make every journey memorable.",
      image: toursImage,
      features: ["Wine Tours", "Garden Route", "Cultural Experiences", "Custom Itineraries"]
    },
    {
      icon: Car,
      title: "Private Hire",
      description: "Premium private vehicle hire for special occasions, business meetings, and personal travel. Luxury meets convenience.",
      image: privateHireImage,
      features: ["Executive Travel", "Event Transport", "VIP Service", "Flexible Booking"]
    },
    {
      icon: Briefcase,
      title: "Contract Transport",
      description: "Reliable, long-term transport solutions for businesses and individuals who need regular, dedicated vehicles. We provide well-maintained cars with professional drivers, tailored to your schedule and requirements.",
      image: contractTransportImage,
      features: ["Professional Service", "Dedicated Vehicles & Drivers", "Flexible Schedules", "Customized Solutions"]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From daily shuttles to luxury tours, we provide comprehensive transport solutions 
            tailored to meet your specific needs across South Africa.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group cursor-pointer"
            >
              {/* Service Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 group-hover:from-primary/40 group-hover:to-accent/40 transition-colors duration-500"></div>
                
                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="https://wa.me/27788686706"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-accent font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Book This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Need a Custom Transport Solution?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              We specialize in creating tailored transport packages that perfectly match your unique requirements. 
              Let's discuss your needs and create the perfect solution.
            </p>
            <a
              href="https://wa.me/27788686706"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;