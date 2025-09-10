import axios from "axios";
import { toast } from "react-toastify";

export const LoginAPI = async (credential) => {
  const api = `${import.meta.env.VITE_BASE_URL}/auth/login`;
  console.warn(api);
  try {
    const res = await axios.post(api, credential, { withCredentials: true });
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err.message;
  }
};

export const LogoutAPI = async (credential) => {
  const api = `${import.meta.env.VITE_BASE_URL}/auth/login`;
  console.warn(api);
  try {
    const res = await axios.post(api, credential, { withCredentials: true });
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err.message;
  }
};

export const ForgetPAsswordAPI = async (data) => {
  const api = `${import.meta.env.VITE_BASE_URL}/auth/forget-password`;
  console.warn(api);
  try {
    const res = await axios.post(api, data, { withCredentials: true });
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err.message;
  }
};

export const AdminUpdateAPI = async (data) => {
  const api = `${import.meta.env.VITE_BASE_URL}/admin/me/update`;
  console.warn(api);
  try {
    const res = await axios.post(api, data, { withCredentials: true });
    console.log(res.data);
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err.message;
  }
};
