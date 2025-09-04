import React, { useEffect, useState } from "react";
// import products from "../../assets/cakeItem.json";
import ProductCard from "./ProductCard";
import { GetProductsAPI } from "../../services/product.services";

const ProductList = () => {
  const [isAction, setIsAction] = useState("");
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await GetProductsAPI();
        console.log(res);
        if (res.status === "success") {
          setProducts(res.cake);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  if (products?.length <= 0) {
    return <div>No Product found!</div>;
  }

  return (
    <div className="">
      <ul>
        {products?.map((product) => (
          <li className="my-2">
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
