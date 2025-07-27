import React, { useEffect, useState } from "react";

const heroData = [
  {
    title: "Delicious Cakes Delivered With Love",
    desc: "Order your favorite cake with fast, secure checkout and smooth doorstep delivery.",
    btn: "Explore Flavors",
    img: "/shipping/cake_img.png",
  },
  {
    title: "Freshly Baked Happiness",
    desc: "Our cakes are baked fresh every day with love and the finest ingredients.",
    btn: "Shop Now",
    img: "/shipping/cake_img2.png",
  },
  {
    title: "Celebrate Every Moment",
    desc: "We have cakes for all occasions — birthdays, weddings, and more.",
    btn: "Order Today",
    img: "/shipping/cake_img3.png",
  },
  {
    title: "Sweetness at Your Doorstep",
    desc: "Fast delivery and unbeatable taste, right when you need it.",
    btn: "Get Started",
    img: "/shipping/cake_img4.png",
  },
];

export const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 2000); // 2 seconds auto-scroll

    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroData[index];

  return (
    <section className="w-full h-[85vh] px-[12%] py-20 bg-gradient-to-br from-fuchsia-200 via-red-200 to-rose-200 flex flex-col lg:flex-row items-center justify-between transition-all duration-700 ease-in-out">
      {/* Text Content */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-500 to-fuchsia-400 leading-tight">
          {currentSlide.title.split("<br />").map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </h1>
        <p className="mt-6 text-lg text-gray-600">{currentSlide.desc}</p>
        <div className="mt-8">
          <button className="px-8 py-3 text-white bg-rose-400 text-lg rounded-full hover:shadow-xl transition-all duration-300">
            {currentSlide.btn}
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-12 lg:mt-0 max-sm:scale-50 max-sm:opacity-80">
        <img
          src={currentSlide.img}
          alt="Hero"
          className="w-[400px] lg:w-[500px] object-contain drop-shadow-xl scale-80"
        />
      </div>
    </section>
  );
};
