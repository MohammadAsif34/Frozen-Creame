import React from "react";
import { motion } from "framer-motion";

const FranchiseEnquiry = () => {
  return (
    <div className="bg-rose-50 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Images */}
        <div className="relative flex flex-col gap-6">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="https://images.pexels.com/photos/3776945/pexels-photo-3776945.jpeg"
            alt="Frozen Cream Franchise"
            className="rounded-lg shadow-lg object-cover w-full h-[320px]"
          />

          {/* Animated Dessert PNG */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Cake_animation.gif"
            alt="Animated Cake"
            className="w-24 h-24 absolute top-4 right-4 drop-shadow-lg"
          />

          {/* Extra Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg"
              alt="Cupcake"
              className="rounded-lg shadow-lg object-cover h-[140px]"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
              alt="Dessert Plate"
              className="rounded-lg shadow-lg object-cover h-[140px]"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-4xl font-bold text-rose-500 mb-4">
            Partner with <span className="text-gray-800">Frozen Cream</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Frozen Cream invites passionate entrepreneurs to join our sweet
            journey. With a proven business model, exceptional products, and
            strong brand identity, we make franchising easy, profitable, and
            delightful.
          </p>

          {/* Why Us */}
          <h3 className="text-xl font-semibold text-rose-500 mb-3">
            Why Choose Us?
          </h3>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li>Proven business model & high ROI</li>
            <li>Comprehensive training & operational support</li>
            <li>Premium quality desserts loved by thousands</li>
            <li>Marketing & brand promotion assistance</li>
          </ul>

          {/* Requirements */}
          <h3 className="text-xl font-semibold text-rose-500 mb-3">
            Franchise Requirements
          </h3>
          <ul className="list-disc pl-5 text-gray-600 mb-6">
            <li>Investment: ₹10-20 Lakhs</li>
            <li>Space: Minimum 300-500 sq.ft</li>
            <li>Passion for food & customer service</li>
          </ul>

          {/* Enquiry Form */}
          <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Tell us about your interest"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="bg-rose-500 text-white px-6 py-2 rounded-lg shadow hover:bg-rose-600 transition"
            >
              Submit Enquiry
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FranchiseEnquiry;
