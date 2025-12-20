import React from "react";

const features = [
  {
    title: "Freshly Baked Daily",
    desc: "Every cake is baked fresh each day to ensure unmatched taste and quality.",
    icon: "🍰",
  },
  {
    title: "Premium Ingredients",
    desc: "We use only high-quality ingredients for rich flavor and perfect texture.",
    icon: "🌿",
  },
  {
    title: "Same-Day Delivery",
    desc: "Fast and reliable delivery so your celebrations never wait.",
    icon: "🚚",
  },
  {
    title: "Custom Cake Expertise",
    desc: "Personalized designs crafted exactly to match your special moments.",
    icon: "🎂",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700">
            Why Choose Frozen Kreme
          </h2>
          <p className="mt-3 text-gray-600">
            Crafted with care, delivered with love
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
