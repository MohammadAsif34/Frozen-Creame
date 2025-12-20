import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-rose-100 via-pink-100 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            We’re here to help you with orders, custom cakes, and any questions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-pink-700 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                📍 <strong>Address:</strong> Kolkata, India
              </p>
              <p>
                📞 <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                ✉️ <strong>Email:</strong> support@frozenkreme.com
              </p>
              <p>
                ⏰ <strong>Working Hours:</strong> 9:00 AM – 9:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-rose-50 p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-pink-600 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                required
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
