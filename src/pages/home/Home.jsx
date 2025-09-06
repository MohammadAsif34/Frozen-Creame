import React from "react";
import { HeroSection } from "../../components/home-page/HeroSection";
import { SpecialOfferSection } from "../../components/home-page/SpecialOfferSection";
import TrendingProduct from "../../components/home-page/TrendingProduct";
import SpecialWeek from "../../components/home-page/SpecialWeek";
import { Collection } from "../../components/home-page/Collection";
import FeaturedProduct from "../../components/home-page/FeaturedProduct";
import LocationMap from "../../components/component/LocationMap";
import TestimonialSection from "../../components/home-page/TestimonialSection";
import TabsAccordion from "../../components/home-page/TabsAccordion";
import Statistics from "../../components/home-page/Statistics";
import FAQs from "../../components/home-page/FAQs";
import SliderHero from "../../components/home-page/SliderHero";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50">
        {/* hero section  */}
        {/* <HeroSection /> */}
        <SliderHero />

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
        <TestimonialSection />
        {/* <TabsAccordion /> */}
        <Statistics />
        <FAQs />
        {/* <div className="w-full h-80 bg-gray-100 bg-[url('/banner/banner-51.png')] bg-center bg-cover opacity-50"> */}
        <LocationMap />
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
