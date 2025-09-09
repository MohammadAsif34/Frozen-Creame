import { useDispatch } from "react-redux";
import { GetAllProductsAPI } from "../services/admin/product.service";

export const fetchAllProduct = async () => {
  const dispatch = useDispatch();
  try {
    const productRes = await GetAllProductsAPI();
    // console.log("product res api :: ", productRes);
    if (productRes.status === "success") {
      dispatch(LoadProducts(productRes.data));
    }
  } catch (error) {
    console.log("initial app load error :: ", error.message);
  }
  // console.log("Active p : ", products);
};
