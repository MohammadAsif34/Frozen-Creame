import React, { useEffect, useState } from "react";
// import SearchProductCard from "../components/SearchProductCard";
// import axios from "axios";
import cakeItem from "../../assets/cakeItem.json";
import SearchProductCard from "./SearchProductCard";

export const SearchProduct = () => {
  const [products, setProducts] = useState(cakeItem);

  // const getProducts = async () => {
  //   const api = "http://localhost:8800/tcs/products";
  //   try {
  //     const res = await axios.get(api, { withCredentials: true });
  //     if (res.data.status == "OK") {
  //       setProducts(res.data.data);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // window.scrollTo({ top: 0, behavior: "smooth" });
  // useEffect(() => {
  //   getProducts();
  // }, []);
  //   useEffect(() => {
  // }, []);

  return (
    <div className="px-[10%] ">
      <button
        className="text-neutral-400 py-1 mt-2 cursor-pointer"
        onClick={() => window.history.back()}
      >
        <i className="bi bi-arrow-left mr-2"></i>
        Back
      </button>
      <SearchPageHeader />
      <div className="my-5  ">
        {products?.map((product, idx) => (
          <SearchProductCard key={product?._id || idx} product={product} />
        ))}
      </div>
    </div>
  );
};

const SearchPageHeader = () => {
  return (
    <>
      <div className="w-full p-4 border-b border-rose-400"></div>
    </>
  );
};
