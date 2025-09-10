import React from "react";
import ProductCard from "../../../components/product-list/ProductCard";
import { useSelector } from "react-redux";

const PublishProduct = () => {
  const product = useSelector((s) => s.product.published_products);

  if (product?.length == 0)
    return (
      <>
        {/* <HeaderBack /> */}
        <div className="mt-20">
          <img src="/no_product.png" alt="" className="w-2xs mx-auto" />
        </div>
      </>
    );

  return (
    <>
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
