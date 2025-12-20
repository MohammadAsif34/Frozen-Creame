import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-60px)] flex items-center justify-center bg-[url(/images/banner-1.png)]  bg-center bg-contain b g-gradient-to-r from-rose-100 via-pink-100 to-amber-50 z-10">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* <h1 className="text-4xl md:text-6xl font-extrabold text-rose-600 leading-tight">
          Freshly Baked <br /> Happiness in Every Slice
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Order premium cakes, desserts, and custom creations from Frozen Kreme.
          Delivered fresh for every celebration.
        </p> */}

        {/* Buttons */}
        {/* <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/cakes"
            className="px-6 py-3 bg-rose-400 text-white rounded-lg shadow hover:bg-rose-500 transition"
          >
            Order Now
          </Link>

          <Link
            to="/cakes/custom-cake"
            className="px-6 py-3 border  text-rose-500 rounded-lg hover:bg-rose-300 transition"
          >
            Custom Cake
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
