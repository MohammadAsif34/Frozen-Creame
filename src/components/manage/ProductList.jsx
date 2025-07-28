import React from "react";
import products from "../../dataSets/productItem.json";
import ProductListCard from "./ProductListCard";

const ProductList = () => {
  return (
    <>
      <div className="">
        <h1 className=" py-2 text-2xl capitalize text-neutral-600">
          product list
        </h1>

        <div>
          {products?.map((item, idx) => (
            <ProductListCard item={item} key={idx} />
          ))}
        </div>
        <div className="text-center py-4">
          <button className="inline-block px-8 py-2 bg-gradient-to-l from-rose-400 to-fuchsia-400 text-white font-medium rounded-md  cursor-pointer hover:bg-gradient-to-br  transition-all  ease-in-out">
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
