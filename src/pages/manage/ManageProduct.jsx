import React from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../../components/manage/ProductList";

const ManageProduct = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className=" px-[12%] pb-8">
        <div className=" h-20 flex justify-between items-center border-b border-gray-300">
          <h1 className="text-4xl text-rose-500 capitalize font-bold ">
            {pathname.replace("/", "").replace("-", " ")}
          </h1>
          <button
            type="button"
            onClick={() => console.log("object")}
            className=" px-4 py-1 text-xl text-white border bg-rose-400 rounded-lg cursor-pointer hover:bg-rose-400/80 active:bg-rose-400 "
          >
            Add Item
          </button>
        </div>

        {/* product list */}
        <div className=" ">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default ManageProduct;
