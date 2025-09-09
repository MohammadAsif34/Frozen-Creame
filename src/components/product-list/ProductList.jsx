import React, { useEffect, useState } from "react";
// import products from "../../assets/cakeItem.json";
import ProductCard from "./ProductCard";
// import { GetProductsAPI } from "../../services/product.services";
import { useSelector } from "react-redux";

const ProductList = () => {
  const [isAction, setIsAction] = useState("");
  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const res = await GetProductsAPI();
  //       console.log(res);
  //       if (res.status === "success") {
  //         setProducts(res.cake);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchProduct();
  // }, []);

  const products = useSelector((s) => s.product.all_products);
  if (products?.length <= 0) {
    return (
      <div className="mt-20">
        {/* {JSON.stringify(products)} */}
        <img src="/no_product.png" alt="" className="w-2xs mx-auto" />
      </div>
    );
  }

  return (
    <div className="">
      {/* {JSON.stringify(products)} */}
      <ul className="min-w-lg:border grid grid-cols-[repeat(auto-fill,minmax(450px,_1fr))] gap-4">
        {products?.map((product) => (
          <li className="w-full min-w-sm my-2" key={product._id}>
            <ProductCard
              key={product.sku}
              product={product}
              isAction={isAction}
              setIsAction={setIsAction}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
