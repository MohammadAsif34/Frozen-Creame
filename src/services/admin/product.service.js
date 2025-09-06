import axios from "axios";
import { toast } from "react-toastify";
const base_url = import.meta.env.VITE_BASE_URL;

export const CreateProductAPI = async (data, file) => {
  console.log(data);
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  formData.append("picture", file);
  console.log(formData);

  const api = `${base_url}/admin/product/upload`;
  try {
    const res = await axios.post(api, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(" product data :: ", res.data);
    return res.data;
  } catch (err) {
    toast.error("internal error");
    return err.message;
  }
};

// update product details :id {params} & data
export const UpdateProductAPI = async (id, data) => {
  const api = `${base_url}/admin/product/update/${id}`;
  try {
    const res = await axios.post(api, data, { withCredentials: true });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const UpdateProductImageAPI = async () => {
  const api = `${import.meta.env.VITE_BASE_URL}/product/cake`;
  try {
    console.log(" product data :: ");
    const res = await axios.get(api, { withCredentials: true });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

// pushlish product :id {params} & type
export const PublishProductAPI = async (id, type = "") => {
  const api = `${base_url}/admin/product/publish/${id}`;
  try {
    const res = await axios.post(
      api,
      { type: type },
      { withCredentials: true }
    );
    return res.data;
  } catch (err) {
    toast.error("Internal error");
    return err.message;
  }
};
// get single product :id {params}
export const GetSingleProductAPI = async (id) => {
  const api = `${base_url}/admin/product/${id}`;
  console.log(api);
  try {
    const res = await axios.get(api, { withCredentials: true });
    return res.data;
  } catch (err) {
    return err.message;
  }
};
// get all product
export const GetAllProductsAPI = async () => {
  const api = `${base_url}/admin/products`;
  try {
    console.log(" product data :: ");
    const res = await axios.get(api, { withCredentials: true });
    return res.data;
  } catch (err) {
    return err.message;
  }
};
