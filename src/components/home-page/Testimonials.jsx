import React from "react";

const reviews = [
  {
    name: "Ananya Sharma",
    rating: 5,
    review:
      "The cake was incredibly fresh and delicious. Frozen Kreme made my birthday truly special!",
  },
  {
    name: "Rahul Verma",
    rating: 4,
    review:
      "Beautiful design and amazing taste. Same-day delivery was a lifesaver!",
  },
  {
    name: "Sneha Gupta",
    rating: 5,
    review:
      "Loved the custom cake design. Exactly what I wanted. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-gray-600">
            Trusted by hundreds of happy customers
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-rose-50 rounded-xl shadow hover:shadow-lg transition p-6"
            >
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm mb-4">“{item.review}”</p>

              {/* Name */}
              <h4 className="font-semibold text-gray-800">— {item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
