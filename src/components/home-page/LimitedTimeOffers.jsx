import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LimitedTimeOffers = () => {
  // Set offer end time (example: 48 hours from now)
  const offerEndTime = new Date().getTime() + 48 * 60 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = offerEndTime - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-pink-600 via-rose-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">Limited-Time Offers</h2>
        <p className="mt-3 text-pink-100">
          Seasonal discounts & festival specials — don’t miss out!
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-6 mt-8 text-lg font-semibold">
          <div>
            <span className="block text-3xl">{timeLeft.hours || "00"}</span>
            Hours
          </div>
          <div>
            <span className="block text-3xl">{timeLeft.minutes || "00"}</span>
            Minutes
          </div>
          <div>
            <span className="block text-3xl">{timeLeft.seconds || "00"}</span>
            Seconds
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/cakes"
          className="inline-block mt-10 px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg shadow hover:bg-pink-50 transition"
        >
          Shop Offers Now
        </Link>
      </div>
    </section>
  );
};

export default LimitedTimeOffers;
