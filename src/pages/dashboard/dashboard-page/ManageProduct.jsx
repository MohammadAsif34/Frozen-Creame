import React from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../../../components/product-list/ProductList";
import { useSelector } from "react-redux";

const ManageProduct = () => {
  const navigate = useNavigate();
  const product = useSelector((s) => s.product);

  return (
    <>
      <div className="px-4">
        <div className=" py-2 flex justify-between items-center ">
          <h1 className="text-2xl text-rose-500 capitalize font-bold ">
            Your Products
          </h1>
          <div className="flex text-xs text-gray-500 gap-x-10">
            <p>
              <span>Total Item : {(product.all_products ?? [])?.length} </span>
              {}
            </p>
            <p>
              <span>
                Published Item : {(product.published_products ?? [])?.length}
              </span>
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
        {(product.all_products ?? []).length === 0 ? (
          <>
            <div className="mt-20">
              <img src="/no_product.png" alt="" className="w-2xs mx-auto" />
            </div>
          </>
        ) : (
          <>
            {/* product list */}
            <div className=" ">
              <ProductList />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ManageProduct;
