import React from "react";
import { Link } from "react-router-dom";
import trendingCakes from "../../assets/data/cakes.json";
import CakeCard from "../component/CakeCard";
const TrendingCakes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700">
            What’s Trending
          </h2>
          <p className="mt-3 text-gray-600">
            Explore our most popular and trending cakes, fresh from the oven!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {trendingCakes.slice(4, 8).map((cake, idx) => (
            <CakeCard key={cake._id || idx} cake={cake} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/cakes"
            className="text-pink-600 font-semibold hover:underline"
          >
            View All Trending Cakes →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingCakes;
