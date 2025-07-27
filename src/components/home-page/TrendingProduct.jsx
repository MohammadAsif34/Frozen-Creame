import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../products/ProductCard";

const TrendingProduct = () => {
  return (
    <>
      <section className="w-full h-fit px-[10%] max-sm:px-6 pt-6 pb-12 ">
        <div className=" py-6 border-b border-gray-300">
          <div className="flex justify-between items-center">
            <div className="max-sm:w-[80%]">
              <h1 className="py-1 text-4xl max-sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-rose-400 to-fuchsia-400">
                What’s In Trend
              </h1>
              <p className="py-2 text-gray-400 max-sm:text-xs">
                Discover cakes making headlines with irresistible flavors and
                fresh appeal.
              </p>
            </div>
            <Link to={"/search"}>
              <button className="inline-block px-8 max-sm:px-2 py-2 bg-gradient-to-l from-rose-400 to-fuchsia-400 text-white font-medium rounded-md hover:bg-gradient-to-tr transition-all duration-1000 ease-in-out cursor-pointer">
                <span className="whitespace-nowrap max-sm:hidden">
                  See More
                </span>
                <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </button>
            </Link>
          </div>

          {/* products card  */}
          <div className="mx-auto py-6 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 max-sm:gap-3 justify-center">
            {[...Array(12)].slice(0, 4).map((item, idx) => (
              <div key={idx} className="mx-auto">
                <ProductCard item={item} />
              </div>
            ))}
          </div>
          <div className=" text-center"></div>
        </div>
      </section>
    </>
  );
};

export default TrendingProduct;
