import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Target,
  Eye,
  Leaf,
  HandHeart,
  Scale,
  Globe2,
  Building2,
} from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -80, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: imageRef.current, start: "top 80%" },
        }
      );

      // About content fade
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
        }
      );

      // Responsibility cards animation
      blocksRef.current.forEach((block, i) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: block, start: "top 85%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Unified brand gradient for all icons
  const brandGradient = "from-blue-600 to-orange-500";

  const pillars = [
    {
      icon: Building2,
      title: "Commitment to Community Development",
      text: [
        "We strive to uplift the communities we serve in Cape Town, Johannesburg, and across South Africa by creating local employment and training opportunities, supporting youth and skills development initiatives in the transport and logistics sector, partnering with local organisations and schools to promote road safety awareness, and contributing to community projects that improve education, health, and access to opportunities.",
        "Our goal is to grow with the community — not apart from it.",
      ],
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      text: [
        "We are committed to reducing our environmental footprint and promoting sustainable transport practices through maintaining a fuel-efficient and well-serviced vehicle fleet, exploring eco-friendly vehicle technologies where possible, reducing paper use through digital booking and invoicing systems, and promoting awareness among our drivers and customers about environmentally responsible travel.",
        "We believe small, consistent actions lead to a cleaner and more sustainable South Africa.",
      ],
    },
    {
      icon: HandHeart,
      title: "Employee Welfare and Fair Practices",
      text: [
        "Our people are at the heart of our success. We promote fair and ethical employment practices by providing safe working conditions and ongoing driver training, promoting diversity and inclusion within our team, ensuring compliance with labour laws, B-BBEE policies, and industry standards, and recognising and rewarding dedication, responsibility, and professionalism.",
        "We take pride in being a company where employees can grow, learn, and lead.",
      ],
    },
    {
      icon: Scale,
      title: "Ethical Business Conduct",
      text: [
        "We are guided by honesty, transparency, and accountability in all that we do. Mtseku Transport Service upholds integrity in our business dealings with clients, suppliers, and partners, compliance with the Companies Act, Consumer Protection Act (CPA), and Road Transport legislation, and a zero-tolerance approach to corruption, discrimination, and unethical conduct.",
        "We believe trust is earned through consistent ethical behaviour.",
      ],
    },
    {
      icon: Globe2,
      title: "Building a Better Future",
      text: [
        "As we continue to expand, we remain dedicated to empowering our communities through sustainable initiatives, operating responsibly and with respect for people and the planet, and being a transport company that drives both progress and purpose.",
        "At Mtseku Transport Service (Pty) Ltd, we don’t just move people — we move communities forward.",
      ],
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-blue-50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==== ABOUT INTRO (restored) ==== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl relative">
              <img
                src={aboutImage}
                alt="Mtseku Transport Office and Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-orange-500/20" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Trusted Service</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div ref={contentRef} className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900">
              About <span className="text-orange-500">Mtseku Transport</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At Mtseku Transport Services, your journey is our priority. We are
              founded on the values of safety, reliability, and excellence,
              ensuring that every ride is handled with the utmost care. Our
              commitment to passenger safety goes beyond compliance — from
              well-maintained vehicles and insured passenger liability to
              trained, professional drivers who put your well-being first.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in premium shuttle services, private hire, and
              luxury tours, offering seamless travel across Cape Town and
              Johannesburg. Whether you’re heading to the airport, exploring
              South Africa’s landmarks, or arranging corporate transfers, you
              can trust us to deliver a safe, comfortable, and professional
              experience every time. With Mtseku, you don’t just reach your
              destination — you arrive with confidence.
            </p>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900 text-xl">Vision</h3>
                </div>
                <p className="text-gray-600">
                  To be South Africa&apos;s most trusted and ethical transport
                  partner.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-orange-500" />
                  <h3 className="font-semibold text-gray-900 text-xl">
                    Mission
                  </h3>
                </div>
                <p className="text-gray-600">
                  Deliver personalized, safe, and seamless transport services
                  across South Africa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==== OUR SOCIAL RESPONSIBILITY (unified color) ==== */}
        <div className="space-y-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-display font-bold text-gray-900 mb-4">
               Our{" "}
              <span className="text-orange-500">Social Responsibility</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our responsibility extends beyond transport — we’re committed to
              driving progress for our communities, our people, and our planet.
            </p>
          </div>

          {pillars.map((pillar, i) => (
            <div
              key={i}
              ref={(el) => el && (blocksRef.current[i] = el)}
              className={`flex flex-col lg:flex-row ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-12`}
            >
              {/* Icon (consistent gradient brand color) */}
              <div
                className={`flex-shrink-0 w-28 h-28 rounded-3xl bg-gradient-to-br ${brandGradient} flex items-center justify-center shadow-lg`}
              >
                <pillar.icon className="h-14 w-14 text-white" />
              </div>

              {/* Text */}
              <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500">
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                  {pillar.title}
                </h4>
                {pillar.text.map((p, j) => (
                  <p
                    key={j}
                    className="text-gray-600 text-base leading-relaxed mb-2"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* ==== /OUR SOCIAL RESPONSIBILITY ==== */}
      </div>
    </section>
  );
};

export default About;
