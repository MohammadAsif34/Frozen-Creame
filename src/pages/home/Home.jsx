import React from "react";
import { HeroSection } from "../../components/home-page/HeroSection";
import { SpecialOfferSection } from "../../components/home-page/SpecialOfferSection";
import TrendingProduct from "../../components/home-page/TrendingProduct";
import SpecialWeek from "../../components/home-page/SpecialWeek";
import { Collection } from "../../components/home-page/Collection";
import FeaturedProduct from "../../components/home-page/FeaturedProduct";

const Home = () => {
  return (
    <>
      <div>
        {/* hero section  */}
        <HeroSection />

        {/* special offer cards  */}
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
    </>
  );
};

export default Home;
