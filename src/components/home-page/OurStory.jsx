import React from "react";

const OurStory = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-100 via-pink-100 to-amber-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700">
            Our Story
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Frozen Kreme began with a simple idea — to create cakes that feel as
            special as the moments they celebrate. What started as a passion for
            baking soon became a commitment to delivering happiness, one cake at
            a time.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Every recipe is crafted with premium ingredients, attention to
            detail, and a deep love for the art of baking. From classic flavors
            to custom-designed cakes, we ensure every creation meets the highest
            standards of taste and quality.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            At Frozen Kreme, quality is not a promise — it’s a practice we
            follow every single day.
          </p>
        </div>

        {/* Visual / Highlight Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">
            What We Stand For
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Passion-driven baking</li>
            <li>✔ Premium quality ingredients</li>
            <li>✔ Freshness guaranteed</li>
            <li>✔ Customer-first approach</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
