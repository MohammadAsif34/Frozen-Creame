import React from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../../../components/product-list/ProductList";
import HeaderBack from "../../../components/navbar/HeaderBack";
// import { useLocation } from "react-router-dom";
// import ProductList from "../../components/manage/ProductList";

const ManageProduct = () => {
  // const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <HeaderBack />
      <div className="px-4">
        <div className=" h-16 flex justify-between items-center ">
          <h1 className="text-2xl text-rose-500 capitalize font-bold ">
            Your Products
          </h1>
          <div className="flex text-xs text-gray-500 gap-x-10">
            <p>
              <span>Total Item : 00 </span>
              {}
            </p>
            <p>
              <span>Published Item : 00</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("add-product")}
            className=" px-4 py-1 text-white border bg-rose-400 rounded-lg cursor-pointer hover:bg-rose-400/80 active:bg-rose-400 hover:scale-105 transition-all duration-300"
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
