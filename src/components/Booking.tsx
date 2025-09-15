import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Phone, 
  Mail, 
  MessageCircle,
  CheckCircle,
  Clock,
  Car
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Booking = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

      // Form animation
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          }
        }
      );

      // Features animation
      gsap.fromTo(featuresRef.current?.children || [],
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    "Shuttle Services",
    "Tours & Sightseeing", 
    "Private Hire",
    "Contract Transport",
    "Airport Transfer",
    "Custom Solution"
  ];

  const bookingFeatures = [
    {
      icon: CheckCircle,
      title: "Instant Confirmation",
      description: "Get booking confirmation within 30 minutes"
    },
    {
      icon: Clock,
      title: "24/7 Availability", 
      description: "Book anytime, we're always ready to serve"
    },
    {
      icon: Car,
      title: "Premium Fleet",
      description: "Modern, well-maintained vehicles for your comfort"
    },
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Experienced, courteous, and reliable drivers"
    }
  ];

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Book Your <span className="text-accent">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to travel with South Africa's premier transport service? Book your ride now 
            and experience the comfort, safety, and reliability that sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Booking Form */}
          <div ref={formRef} className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-large">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-foreground">Book Your Transport</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Secure Booking
              </div>
            </div>
            
            <form 
              action="https://formsubmit.co/Tony.Noyila@outlook.com"
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit hidden inputs */}
              <input type="hidden" name="_subject" value="New Booking Request - Mtseku Transport" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="+27 123 456 789"
                  />
                </div>
                
                <div>
                  <label htmlFor="passengers" className="block text-sm font-medium text-foreground mb-2">
                    Number of Passengers
                  </label>
                  <select
                    id="passengers"
                    name="passengers"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  >
                    {[...Array(20)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} Passenger{i + 1 !== 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Trip Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pickupLocation" className="block text-sm font-medium text-foreground mb-2">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Where should we pick you up?"
                  />
                </div>
                
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
                    Destination *
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Where are you going?"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                    Travel Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={today}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Select service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Additional Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Any special requirements, stops, or preferences..."
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 btn-primary flex items-center justify-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Booking Request
                </button>
                
                <a
                  href="https://wa.me/27788686706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-outline flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Quick WhatsApp Booking
                </a>
              </div>
            </form>
          </div>

          {/* Booking Features */}
          <div ref={featuresRef} className="space-y-6">
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-4">Why Book With Us?</h4>
              <p className="text-white/90 mb-6">
                Experience the difference with South Africa's premier transport service.
              </p>
              <div className="space-y-4">
                {bookingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <feature.icon className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-white">{feature.title}</h5>
                      <p className="text-white/80 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-border/50">
              <h4 className="text-lg font-semibold text-foreground mb-4">Need Immediate Assistance?</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call us directly</p>
                    <a href="tel:+27788686706" className="text-primary hover:text-accent transition-colors">
                      +27 78 868 6706
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email us</p>
                    <a href="mailto:Tony.Noyila@outlook.com" className="text-accent hover:text-primary transition-colors">
                      Tony.Noyila@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <a href="https://wa.me/27788686706" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      Start chat instantly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
