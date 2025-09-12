import React from "react";
import { basicInfo } from "../../data/basicData";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto py-16 px-[8%] text-center ">
        <div className="text-center">
          <h1 className=" text-center py-1 text-4xl max-sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-rose-400 to-fuchsia-400">
            Why Choose Us?
          </h1>
          <p className="py-2 text-gray-400 max-sm:text-xs">
            Savor the cake that stands out with timeless flavor and quality
          </p>
        </div>
        <h2 className="text-3xl font-bold text-rose-800"></h2>
        <div className="mt-10 flex flex-wrap gap-6">
          {basicInfo?.why_choose_us.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px]  flex-1 bg-rose-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-rose-700">
                {item.title}
              </h3>
              <p className="text-sm mt-2 text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
