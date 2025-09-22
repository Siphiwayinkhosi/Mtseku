import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-primary text-white px-6 py-16">
      {/* Back to Home */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link
          to="/"
          className="text-accent hover:underline text-sm transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-accent mb-6 text-center"
      >
        Privacy Policy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-white/70 mb-12"
      >
        Effective Date: September 2025
      </motion.p>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-8"
      >
        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2 text-white/80">
            <li>Name, email, phone number (when you contact us or book)</li>
            <li>Pickup & drop-off details (to provide transport services)</li>
            <li>Payment details (securely handled by third-party providers)</li>
            <li>Website usage data (cookies, analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2 text-white/80">
            <li>To manage shuttle & tour services</li>
            <li>To respond to your inquiries or bookings</li>
            <li>To improve our services & website</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-white/80">
            You may request access to your data, ask us to correct or delete it,
            or opt-out of marketing communications.
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

export default PrivacyPolicy;
