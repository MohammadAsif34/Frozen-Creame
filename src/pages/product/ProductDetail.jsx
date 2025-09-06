import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { product_name, product_id } = useParams();
  return (
    <>
      <div className="w-full px-[12%]">
        ProductDetails : {product_name + " : " + product_id}
      </div>
      ;
    </>
  );
};

export default ProductDetail;
