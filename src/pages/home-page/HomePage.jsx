import React from "react";
import HeroSection from "../../components/home-page/HeroSection";
import FeaturedCakes from "../../components/home-page/FeaturedCakes";
import CuratedCollections from "../../components/home-page/CuratedCollections";
import TrendingCakes from "../../components/home-page/TrendingCakes";
import WhyChooseUs from "../../components/home-page/WhyChooseUs";
import LimitedTimeOffers from "../../components/home-page/LimitedTimeOffers";
import Testimonials from "../../components/home-page/Testimonials";
import DeliveryPromise from "../../components/home-page/DeliveryPromise";
import InstagramFeed from "../../components/home-page/InstagramFeed";
import Newsletter from "../../components/home-page/Newsletter";
import OurStory from "../../components/home-page/OurStory";
import FAQs from "../../components/home-page/FAQs";
import SubNavbar from "../../components/component/SubNavbar";

const HomePage = () => {
  return (
    <div>
      <SubNavbar />
      <HeroSection />
      <FeaturedCakes />
      <CuratedCollections />
      <TrendingCakes />
      <WhyChooseUs />
      <LimitedTimeOffers />
      <Testimonials />
      <DeliveryPromise />
      <InstagramFeed />
      <Newsletter />
      <OurStory />
      <FAQs />
    </div>
  );
};

export default HomePage;
