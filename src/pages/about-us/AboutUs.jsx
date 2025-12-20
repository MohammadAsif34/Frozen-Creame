import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-rose-100 via-pink-100 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700">
            About Frozen Kreme
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Crafting moments of joy with freshly baked cakes and premium
            desserts.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-pink-700 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Frozen Kreme began with a passion for baking and a dream to make
              every celebration special. What started as a small kitchen idea
              has grown into a trusted destination for premium cakes and
              desserts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe every cake tells a story — of birthdays, anniversaries,
              achievements, and love. Our mission is to make those stories
              sweeter with quality and care.
            </p>
          </div>

          <div className="bg-rose-50 rounded-xl shadow p-8">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              What We Believe In
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Freshly baked every day</li>
              <li>✔ Premium quality ingredients</li>
              <li>✔ Customer-first approach</li>
              <li>✔ Consistent taste and hygiene</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-10">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">Quality</h4>
              <p className="text-sm text-gray-600">
                We never compromise on ingredients or freshness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">Creativity</h4>
              <p className="text-sm text-gray-600">
                Every cake is crafted with creativity and detail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">Trust</h4>
              <p className="text-sm text-gray-600">
                Transparency and reliability in every order.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">Customer Delight</h4>
              <p className="text-sm text-gray-600">
                Your happiness is our biggest reward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
