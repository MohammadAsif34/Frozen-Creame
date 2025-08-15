import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import cakeItem from "../../assets/cakeItem.json";

const FeaturedProduct = () => {
  const featuredCakeItem = [...cakeItem].sort(() => 0.5 - Math.random);
  return (
    <>
      <section className="w-full h-fit px-[10%] max-sm:px-8 pt-6 pb-12 ">
        <div className=" py-6 ">
          <div className="text-center">
            <h1 className=" text-center text-4xl max-sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-rose-400 to-fuchsia-400">
              Baker’s Choice: Featured Top Pick
            </h1>
            <p className="py-2 text-gray-400 max-sm:text-xs">
              Savor the cake that stands out with timeless flavor and quality
            </p>
            <p></p>
          </div>

          {/* products card  */}
          <div className="mx-auto py-6 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 max-sm:gap-3 justify-center">
            {/* <div className="mx-auto py-6 grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8 justify-center"> */}
            {/* {[...Array(12)].slice(0, 4).map((item, idx) => (
              <div key={idx} className=" mx-auto">
                <ProductCard item={item} />
              </div>
            ))} */}
            {featuredCakeItem?.slice(0, 4).map((item, idx) => (
              <div key={idx} className=" mx-auto">
                <ProductCard item={item} />
              </div>
            ))}
          </div>

          <div className=" text-center py-2">
            <Link to={"/search"}>
              <button className="px-8 py-2 bg-gradient-to-l from-rose-400 to-fuchsia-400 text-white font-medium rounded-md hover:bg-gradient-to-br transition-all duration-500 ease-in-out">
                See More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
