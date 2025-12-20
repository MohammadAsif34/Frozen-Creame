import React from "react";
import { Link } from "react-router-dom";

const collections = [
  {
    id: 1,
    title: "Birthday Specials",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
  },
  {
    id: 2,
    title: "Anniversary Cakes",
    image: "https://images.unsplash.com/photo-1542826438-8b4a97c5c6b5",
  },
  {
    id: 3,
    title: "Chocolate Lovers",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    id: 4,
    title: "Premium Designer Cakes",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
  },
];

const CuratedCollections = () => {
  return (
    <section className="py-16 bg-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700">
            Shop Our Curated Collections Today
          </h2>
          <p className="mt-3 text-gray-600">
            Handpicked cakes crafted for every celebration
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item) => (
            <Link
              key={item.id}
              to="/cakes"
              className="group relative rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedCollections;
