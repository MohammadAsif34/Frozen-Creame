import React from "react";
import { motion } from "framer-motion";

export const FranchiseEnquiryForm = () => {
  return (
    <>
      <div>
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
    </>
  );
};
