import React, { useEffect } from "react";
// import { GetProductsAPI } from "../services/product.services";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/slice/productSlice";
import { GetAllProductsAPI } from "../services/admin/product.service.js";

const InitialLoad = ({ children }) => {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.product);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRes = await GetAllProductsAPI();
        console.log("product res api :: ", productRes);
        if (productRes.status === "success") {
          dispatch(setProduct(productRes.data));
        }
      } catch (error) {
        console.log("initial app load error :: ", error);
      }
      console.log("Active p : ", products);
    };
    fetchProduct();
  }, []);

  return <>{children}</>;
};

export default InitialLoad;
