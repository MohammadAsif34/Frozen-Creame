import React from "react";

const promises = [
  {
    title: "Same-Day Delivery",
    desc: "Order before the cutoff time and get your cake delivered fresh on the same day.",
    icon: "🚚",
  },
  {
    title: "Hygienic Packaging",
    desc: "Sealed, food-grade packaging to ensure safety and freshness.",
    icon: "🧼",
  },
  {
    title: "Temperature-Controlled Transport",
    desc: "Maintained temperature during transit to preserve taste and quality.",
    icon: "❄️",
  },
];

const DeliveryPromise = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700">
            Delivery & Freshness Promise
          </h2>
          <p className="mt-3 text-gray-600">
            From our oven to your doorstep — fresh and safe
          </p>
        </div>

        {/* Promise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((item, index) => (
            <div
              key={index}
              className="bg-rose-50 rounded-xl shadow hover:shadow-lg transition p-6 text-center"
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

export default DeliveryPromise;
