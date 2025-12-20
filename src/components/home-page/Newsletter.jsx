import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: connect with backend / email service
    alert("Thanks for subscribing to Frozen Kreme!");
    setEmail("");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-rose-100 via-pink-100 to-amber-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700">
          Stay Sweet with Frozen Kreme
        </h2>
        <p className="mt-3 text-gray-600">
          Get exclusive discounts, new arrivals, and special offers straight to
          your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full sm:w-96"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition"
          >
            Subscribe
          </button>
        </form>

        {/* Trust Note */}
        <p className="mt-4 text-sm text-gray-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
