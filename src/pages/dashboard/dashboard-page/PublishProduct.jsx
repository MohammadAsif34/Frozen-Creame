import React from "react";
import HeaderBack from "../../../components/navbar/HeaderBack";
import { useState } from "react";
import { useEffect } from "react";
import { GetPublishProductsAPI } from "../../../services/product.services";
import ProductCard from "../../../components/product-list/ProductCard";

const PublishProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await GetPublishProductsAPI();
      console.log("publish product res :: ", res);
      if (res.status === "success") {
        setProduct(res.cake);
      }
    };
    fetchProduct();
  }, []);

  if (product.length <= 0)
    return (
      <div className="mt-20">
        <img src="/no_product.png" alt="" className="w-2xs mx-auto" />
      </div>
    );
  return (
    <>
      <HeaderBack />
      <div className="px-4">
        <div className=" h-16  flex justify-between items-center ">
          <h1 className="text-2xl text-rose-500 capitalize font-bold ">
            Published Products
          </h1>
        </div>

        {/* product list */}
        <div className="flex flex-col gap-2 ">
          {product?.map((item) => (
            <ProductCard product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PublishProduct;
