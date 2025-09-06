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
        <div className=" py-2 flex justify-between items-center ">
          <h1 className="text-2xl text-rose-500 capitalize font-bold ">
            Published Products
          </h1>
        </div>

        {/* product list */}

        <ul className="min-w-lg:border grid grid-cols-[repeat(auto-fill,minmax(450px,_1fr))] gap-4">
          {product?.map((product) => (
            <li className="w-full min-w-sm my-2" key={product._id}>
              <ProductCard
                key={product.sku}
                product={product}
                // isAction={isAction}
                // setIsAction={setIsAction}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PublishProduct;
