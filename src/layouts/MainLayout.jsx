import React from "react";
import Navbar from "../components/component/Navbar";
import { Outlet } from "react-router-dom";
import { HeroSection } from "../components/home-page/HeroSection";
import { HeroCarousel } from "../components/home-page/HeroCarousel";
import { SpecialOfferSection } from "../components/home-page/SpecialOfferSection";
import { Footer } from "../components/component/Footer";
import { Collection } from "../components/home-page/Collection";

import TrendingProduct from "../components/home-page/TrendingProduct";
import SpecialWeek from "../components/home-page/SpecialWeek";
import FeaturedSection from "../components/home-page/FeaturedSection";
import FeaturedProduct from "../components/home-page/FeaturedProduct";
import ConditionalComponent from "../pages/ConditionalComponent";

const MainLayout = () => {
  return (
    <>
      <ConditionalComponent />
      <main className="w-full min-h-screen flex flex-col">
        {/* Sticky Navbar */}
        <div className="w-full h-20  bg-rose-400 sticky top-0 left-0 z-40 overflow-hidden">
          <Navbar />
        </div>

        {/* Homepage Content */}
        <div className="flex-1  bg-white overflow-y-auto overflow-x-hidden">
          <HeroSection />
          <SpecialOfferSection />

          {/* trending product section  */}
          <TrendingProduct />

          {/* special week product  */}
          <SpecialWeek />

          {/* collection cards  */}
          <Collection />

          {/* feature product section */}
          <FeaturedProduct />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
