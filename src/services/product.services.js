// import axios from "axios";
// import { toast } from "react-toastify";

// // create new product
// export const CreateProductAPI = async (data, file) => {
//   const formData = new FormData();
//   formData.append("data", JSON.stringify(data));
//   formData.append("picture", file);
//   const api = `${import.meta.env.VITE_BASE_URL}/product/upload/new`;
//   try {
//     console.log("data create product :: ", data);
//     console.log("formData create product :: ", formData);
//     const res = await axios.post(api, formData, {
//       withCredentials: true,
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return res.data;
//   } catch (err) {
//     toast.error(err.message);
//     return err;
//   }
// };

// // update product
// export const UpdateProductAPI = async (data, id) => {
//   const api = `${import.meta.env.VITE_BASE_URL}/product/update/${id}`;
//   try {
//     // console.log("data create product :: ", data);
//     // console.log("formData create product :: ", formData);
//     const res = await axios.post(api, data, {
//       withCredentials: true,
//     });
//     return res.data;
//   } catch (err) {
//     toast.error(err.message);
//     return err;
//   }
// };

// // get all products
// export const GetProductsAPI = async () => {
//   const api = `${import.meta.env.VITE_BASE_URL}/product/cake`;
//   try {
//     console.log(" product data :: ");
//     const res = await axios.get(api, { withCredentials: true });
//     return res.data;
//   } catch (err) {
//     return err.message;
//   }
// };

// // get all publish products
// export const GetPublishProductsAPI = async () => {
//   const api = `${import.meta.env.VITE_BASE_URL}/product/cake/published`;
//   try {
//     console.log(" product data :: ");
//     const res = await axios.get(api, { withCredentials: true });
//     return res.data;
//   } catch (err) {
//     return err.message;
//   }
// };

// // get single product by id
// export const GetSingleProductsAPI = async (id) => {
//   const api = `${import.meta.env.VITE_BASE_URL}/product/cake/${id}`;
//   try {
//     console.log(" product data :: ");
//     const res = await axios.get(api, { withCredentials: true });
//     return res.data;
//   } catch (err) {
//     return err.message;
//   }
// };

// // publish and unpublish product by id with type?
// export const PublishProductsAPI = async (id, type) => {
//   const api = `${
//     import.meta.env.VITE_BASE_URL
//   }/product/update/${id}/publish?type=${type}`;
//   console.log(api);
//   try {
//     const res = await axios.put(api, {}, { withCredentials: true });
//     return res.data;
//   } catch (err) {
//     return err.message;
//   }
// };
