import React, { useEffect, useState } from "react";

const SliderHero = () => {
  // Replace with your cake shop images
  const slides = [
    "./banner/slider-1.png",
    "./banner/slider-2.png",
    "./banner/slider-3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[88vh] overflow-hidden">
      {/* Images */}
      <div
        className="w-full h-full flex transition-transform duration-1000 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className="w-full h-full object-center flex-shrink-0 bg-rose-100"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            hig
          />
        ))}
      </div>

      {/* Overlay Content */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Freshly Baked Happiness 🍰
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover cakes, pastries & delights made with love.
        </p>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg shadow-lg">
          Order Now
        </button>
      </div> */}

      {/* Navigation Arrows */}
      {/* <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-rose-500 text-white p-3 rounded-full shadow-lg"
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? slides.length - 1 : currentIndex - 1
          )
        }
      >
        <i className="bi bi-chevron-left text-xl"></i>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-rose-500 text-white p-3 rounded-full shadow-lg"
        onClick={() =>
          setCurrentIndex(
            currentIndex === slides.length - 1 ? 0 : currentIndex + 1
          )
        }
      >
        <i className="bi bi-chevron-right text-xl"></i>
      </button> */}

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-rose-500" : "bg-white"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default SliderHero;
