import React from "react";
import { Link } from "react-router-dom";
import CakeCard from "../component/CakeCard";
import featuredCakes from "../../assets/data/cakes.json";

const FeaturedCakes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700">
            Featured Cakes
          </h2>
          <p className="mt-3 text-gray-600">
            Our best-selling cakes loved by customers
          </p>
        </div>

        {/* Cake Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCakes.slice(0, 4).map((cake, idx) => (
            <CakeCard key={cake._id || idx} cake={cake} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            to="/cakes"
            className="text-pink-600 font-semibold hover:underline"
          >
            View All Cakes →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
