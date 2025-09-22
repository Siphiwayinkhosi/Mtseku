import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CookieNotice = () => {
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
        Cookie Notice
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
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
          <p className="text-white/80">
            Cookies are small files stored on your device when you visit our site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
          <ul className="list-disc ml-6 space-y-2 text-white/80">
            <li>Essential Cookies – core functionality (navigation, forms)</li>
            <li>Performance Cookies – site traffic analytics (Google Analytics)</li>
            <li>Functionality Cookies – remember preferences (language, region)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p className="text-white/80">
            You can accept, reject, or delete cookies via your browser settings.
            Note: Disabling cookies may affect site functionality.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default CookieNotice;
