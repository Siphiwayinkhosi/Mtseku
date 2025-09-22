import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-primary text-white px-6 py-16">
      <div className="max-w-4xl mx-auto mb-8">
        <Link
          to="/"
          className="text-accent hover:underline text-sm transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-accent mb-6 text-center"
      >
        Terms of Use
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-white/70 mb-12"
      >
        Effective Date: September 2025
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-8"
      >
        <section>
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <p className="text-white/80">
            We provide shuttle, tour, private hire, and contract transport
            solutions in South Africa.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
          <ul className="list-disc ml-6 space-y-2 text-white/80">
            <li>Provide accurate booking information</li>
            <li>Use services for lawful purposes only</li>
            <li>Respect the rights and safety of drivers and passengers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Limitations of Liability</h2>
          <p className="text-white/80">
            We are not responsible for delays caused by traffic, weather, or
            events beyond our control. All services are covered by passenger
            liability insurance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p className="text-white/80">
            All website content (logo, text, images) belongs to Mtseku Transport
            Services and may not be copied without permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-white/80">
            These terms are governed by the laws of South Africa.
          </p>
        </section>

        <div className="pt-6 border-t border-white/20">
          <p className="text-white/70">
            📧 Contact us:{" "}
            <a
              href="mailto:Tony.Noyila@outlook.com"
              className="text-accent hover:underline"
            >
              Tony.Noyila@outlook.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfUse;
