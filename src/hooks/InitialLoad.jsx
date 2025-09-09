import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetAllProductsAPI } from "../services/admin/product.service.js";
import { FetchAllProduct } from "../redux/slice/productSlice.js";

const InitialLoad = ({ children }) => {
  console.log("initialLoad");
  const dispatch = useDispatch();

  // fetched all products
  const fetchAllProduct = async () => {
    try {
      const res = await GetAllProductsAPI();
      if (res.status === "success") {
        dispatch(FetchAllProduct(res.data));
      }
    } catch (error) {
      console.error("initial app load error :: ", error.message);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return <>{children}</>;
};

export default InitialLoad;
