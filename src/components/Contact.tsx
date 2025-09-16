import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
        }
      );

      // Info cards
      gsap.fromTo(
        infoRef.current?.children || [],
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: infoRef.current, start: "top 80%" },
        }
      );

      // FAQ
      gsap.fromTo(
        faqRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: faqRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: [
        "11 Bottlebrush St, Ferndale",
        "Randburg, Gauteng, 2194",
        "South Africa",
      ],
      action: "Get Directions",
      href: "https://maps.google.com/?q=11+Bottlebrush+St,+Ferndale,+Randburg,+2194,+South+Africa",
    },
    {
      icon: Phone,
      title: "Call Us Directly",
      details: ["+27 78 868 6706", "Available 24/7"],
      action: "Call Now",
      href: "tel:+27788686706",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["Tony.Noyila@outlook.com", "Quotes & Bookings"],
      action: "Send Email",
      href: "mailto:Tony.Noyila@outlook.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      details: ["Instant Messaging", "Quick Quotes"],
      action: "Start Chat",
      href: "https://wa.me/27788686706",
    },
  ];

  const faqs = [
    {
      question: "How do I make a booking?",
      answer:
        "You can book directly through our booking form, via WhatsApp, or by calling us. We’ll confirm your booking within 30 minutes.",
    },
    {
      question: "Are your vehicles insured?",
      answer:
        "Yes, all our vehicles are fully insured, including passenger liability, for maximum safety.",
    },
    {
      question: "Do you offer airport transfers?",
      answer:
        "Absolutely! We provide reliable airport shuttle services in both Cape Town and Johannesburg.",
    },
    {
      question: "Can I request a custom transport solution?",
      answer:
        "Yes, we offer tailored transport solutions for individuals, groups, and corporate clients.",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to book your journey or need more information? We’re here to
            help 24/7.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div ref={infoRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-orange-500 font-semibold text-sm transition-colors duration-300"
                  >
                    {info.action} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promise Block */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white mb-20">
          <h4 className="text-xl font-semibold mb-6 flex items-center">
            <CheckCircle className="h-6 w-6 mr-3" /> Our Promise
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Response within 30 minutes",
              "Professional, courteous service",
              "Competitive, transparent pricing",
              "Safe, reliable transport solutions",
            ].map((point, index) => (
              <div key={index} className="flex items-center text-white/90">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div ref={faqRef} className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600 text-sm">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
