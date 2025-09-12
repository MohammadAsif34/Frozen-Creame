import React from "react";
import { statsData } from "../../data/basicData";

const StatisticsGrid = () => {
  
  return (
    <>
      <section className="w-full bg-gradient-to-tr from-fuchsia-200 via-rose-50 to-rose-200 py-10 px-[8%]">
        {/* <div className=" px-[12%] py-8 "> */}

        <div className="text-center py-4">
          <h1 className=" text-center text-4xl max-sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-rose-400 to-fuchsia-400">
            Our Sweet Achievements
          </h1>
          <p className="py-2 text-gray-400 max-sm:text-xs">
            Taste unique cakes available only this week, baked for true
            indulgence.
          </p>
        </div>
        <div className="flex gap-10  justify-center  flex-wrap text-center px-10 py-12">
          {statsData.map((item, idx) => (
            <StatCard
              key={idx}
              value={item.value}
              label={item.label}
              iconClass={item.iconClass}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default StatisticsGrid;

// StatCard Component
const StatCard = ({ value, label, iconClass }) => {
  return (
    <div className="min-w-[300px] max-w-[400px]  bg-white  rounded-xl shadow-lg p-4 flex flex-col items-center justify-center transform transition duration-500 hover:scale-105">
      {/* Icon */}
      <div className="bg-rose-100 text-rose-500 w-18 h-18 flex items-center justify-center rounded-full mb-4 text-4xl">
        <i className={iconClass}></i>
      </div>

      {/* Value */}
      <dt className="text-3xl font-extrabold text-rose-500 mb-2">{value}</dt>

      {/* Label */}
      <dd className="text-gray-500 dark:text-gray-400 text-center">{label}</dd>
    </div>
  );
};
