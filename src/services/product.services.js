import axios from "axios";

// create new product
export const CreateProductAPI = async (data, file) => {
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  formData.append("picture", file);

  const api = `http://localhost:8800/api/v1/product/upload/new`;
  try {
    console.log("data create product :: ", data);
    console.log("formData create product :: ", formData);
    const res = await axios.post(api, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

// get all products
export const GetProductsAPI = async () => {
  const api = `http://localhost:8800/api/v1/product/cake`;
  try {
    console.log(" product data :: ");
    const res = await axios.get(api, { withCredentials: true });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

// get all publish products
export const GetPublishProductsAPI = async () => {
  const api = `http://localhost:8800/api/v1/product/cake/published`;
  try {
    console.log(" product data :: ");
    const res = await axios.get(api, { withCredentials: true });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

// get single product by id
export const GetSingleProductsAPI = async (id) => {
  const api = `http://localhost:8800/api/v1/product/cake/${id}`;
  try {
    console.log(" product data :: ");
    const res = await axios.get(api, { withCredentials: true });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

// publish and unpublish product by id with type?
export const PublishProductsAPI = async (id, type) => {
  const api = `http://localhost:8800/api/v1/product/update/${id}/publish?type=${type}`;
  console.log(api);
  try {
    const res = await axios.put(api, {}, { withCredentials: true });
    return res.data;
  } catch (err) {
    return err.message;
  }
};
