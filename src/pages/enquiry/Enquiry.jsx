import React from "react";

const Enquiry = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-rose-100 via-pink-100 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700">
            Enquiry
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Have a question or need a custom cake? Send us your enquiry and
            we’ll get back to you.
          </p>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 bg-rose-50 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-pink-600 mb-6 text-center">
            Submit Your Enquiry
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <select
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              required
            >
              <option value="">Select Enquiry Type</option>
              <option>Custom Cake</option>
              <option>Bulk Order</option>
              <option>Delivery Query</option>
              <option>General Question</option>
            </select>

            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
