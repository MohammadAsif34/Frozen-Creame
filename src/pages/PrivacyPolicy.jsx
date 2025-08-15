import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="bg-rose-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-rose-600 mb-6"
        >
          Privacy Policy
        </motion.h1>

        {/* Intro */}
        <p className="text-gray-700 mb-6">
          At <strong>Frozen Cream</strong>, we value your trust and respect your
          privacy. This policy explains how we collect, use, and protect your
          personal information when you visit or make a purchase from our
          website.
        </p>

        {/* Information We Collect */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-rose-500 mb-3">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>
              Personal details such as name, email, phone number, and address
            </li>
            <li>Payment information processed securely via trusted gateways</li>
            <li>Order history and preferences</li>
            <li>Website usage data (cookies, browser type, IP address)</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-rose-500 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-2">We may use your information to:</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Process and deliver your cake orders</li>
            <li>Communicate about your orders, offers, and updates</li>
            <li>Improve our website and product offerings</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        {/* Data Protection */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-rose-500 mb-3">
            3. Data Protection
          </h2>
          <p className="text-gray-600">
            We implement strict security measures to safeguard your personal
            information. Payment details are never stored on our servers and are
            encrypted through secure payment providers.
          </p>
        </section>

        {/* Sharing Information */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-rose-500 mb-3">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-600">
            We do not sell or trade your personal data. We may share necessary
            details with third parties only for order fulfillment, delivery, or
            legal compliance.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-rose-500 mb-3">
            5. Cookies
          </h2>
          <p className="text-gray-600">
            We use cookies to enhance your browsing experience, remember
            preferences, and analyze site performance. You can disable cookies
            in your browser settings, though this may affect website
            functionality.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-rose-500 mb-3">
            6. Your Rights
          </h2>
          <p className="text-gray-600">
            You have the right to access, update, or delete your personal
            information. Contact us if you wish to exercise any of these rights.
          </p>
        </section>

        {/* Updates */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-rose-500 mb-3">
            7. Updates to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal reasons. The latest version
            will always be available on our website.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-rose-500 mb-3">
            8. Contact Us
          </h2>
          <p className="text-gray-600">
            For any privacy-related queries, please reach out to us at:
            <br />
            <strong>Email:</strong> support@frozencream.com
            <br />
            <strong>Phone:</strong> +91-9876543210
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
