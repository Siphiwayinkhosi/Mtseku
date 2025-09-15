import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  Star,
  Users,
  Heart,
  Clock,
  MapPin,
  Award,
  CheckCircle,
} from "lucide-react";
import driversImage from "@/assets/professional-drivers.jpg";

gsap.registerPlugin(ScrollTrigger);

const Drivers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const qualitiesRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
        }
      );

      // qualities cards
      gsap.fromTo(
        qualitiesRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: qualitiesRef.current, start: "top 85%" },
        }
      );

      // trust badges
      gsap.fromTo(
        badgesRef.current?.children || [],
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: badgesRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const driverQualities = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Drivers hold valid professional permits and full insurance.",
    },
    {
      icon: Clock,
      title: "Punctual Always",
      description: "Committed to reliable, on-time service — every trip.",
    },
    {
      icon: MapPin,
      title: "Local Knowledge",
      description: "Expert knowledge of Cape Town & Johannesburg routes.",
    },
    {
      icon: Users,
      title: "Customer-Centered",
      description: "Trained in hospitality for a smooth, enjoyable ride.",
    },
    {
      icon: Heart,
      title: "Passenger Care",
      description: "Focused on your comfort, safety, and satisfaction.",
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Consistently reviewed with 5-star ratings by clients.",
    },
  ];

  const trustBadges = [
    { icon: Award, label: "Certified Excellence" },
    { icon: CheckCircle, label: "Verified Drivers" },
    { icon: Shield, label: "Unmatched Safety" },
  ];

  return (
    <section
      id="drivers"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white via-blue-50 to-orange-50 py-24 overflow-hidden"
    >
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="w-full h-24 fill-blue-600/10"
          preserveAspectRatio="none"
          viewBox="0 0 500 150"
        >
          <path d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,0 L0.00,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Meet Our <span className="text-orange-500">Professional Drivers</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The face of Mtseku Transport — experts behind the wheel who combine safety,
            punctuality, and customer care in every journey.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl relative">
              <img
                src={driversImage}
                alt="Drivers"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-orange-500/30"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-5 shadow-xl flex items-center space-x-3">
              <Award className="h-6 w-6 text-orange-500" />
              <span className="font-semibold text-gray-800">Certified & Trusted</span>
            </div>
          </div>

          {/* Qualities */}
          <div ref={contentRef}>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Excellence in Every Mile
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              More than just drivers — they are safety ambassadors and travel partners,
              ensuring each ride reflects our values of professionalism and trust.
            </p>
            <div
              ref={qualitiesRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {driverQualities.map((quality, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 text-white">
                      <quality.icon className="h-5 w-5" />
                    </div>
                    <h4 className="ml-3 font-semibold text-gray-900">
                      {quality.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Showcase */}
        <div
          ref={badgesRef}
          className="flex flex-wrap justify-center gap-10 mt-12"
        >
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-orange-500 text-white shadow-lg mb-4 animate-pulse">
                <badge.icon className="h-8 w-8" />
              </div>
              <span className="font-medium text-gray-800">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="w-full h-24 fill-orange-500/20"
          preserveAspectRatio="none"
          viewBox="0 0 500 150"
        >
          <path d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Drivers;
