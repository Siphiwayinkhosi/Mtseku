import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Eye, Heart, Award, Users, Shield } from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );

      // Values timeline items animation
      itemsRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Honest, transparent service built on trust and reliability.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority in every journey.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering the highest standards in transport services.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Embracing modern solutions for seamless travel experiences.",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Unwavering commitment to passenger and driver safety.",
    },
    {
      icon: Heart,
      title: "Trust",
      description:
        "Building lasting relationships through dependable service.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-blue-50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src={aboutImage}
                alt="Mtseku Transport Office and Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-orange-500/20"></div>
            </div>
            {/* Floating Stat */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Trusted Service</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                About <span className="text-orange-500">Mtseku Transport</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded on the principles of safety, reliability, and excellence,
                Mtseku Transport Services is dedicated to serving South Africa
                with premium transport solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From shuttle services to luxury tours, we pride ourselves on
                delivering personalized, professional transport experiences that
                exceed expectations across Cape Town and Johannesburg.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
                </div>
                <p className="text-gray-600">
                  To be South Africa&apos;s most trusted and ethical transport
                  partner.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
                </div>
                <p className="text-gray-600">
                  Deliver personalized, safe, and seamless transport services
                  across South Africa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="relative mb-20">
          <div className="text-center mb-20">
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Values</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principles that guide every journey and shape the Mtseku
              experience.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-orange-500 transform -translate-x-1/2"></div>

            <div className="space-y-24">
              {values.map((value, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) itemsRef.current[index] = el;
                  }}
                  className={`relative flex flex-col lg:flex-row items-center lg:items-start gap-10 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Value Box */}
                  <div className="bg-white rounded-2xl shadow-xl p-8 w-full lg:w-5/12 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 text-white">
                        <value.icon className="h-6 w-6" />
                      </div>
                      <h4 className="ml-4 text-xl font-semibold text-gray-900">
                        {value.title}
                      </h4>
                    </div>
                    <p className="text-gray-600">{value.description}</p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:static flex items-center justify-center">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-orange-500 text-white shadow-lg z-10">
                      <value.icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Spacer for alternating sides */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
