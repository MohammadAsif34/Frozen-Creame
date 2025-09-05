import axios from "axios";
import { toast } from "react-toastify";

export const LoginAPI = async (credential) => {
  const api = `${import.meta.env.VITE_BASE_URL}/auth/login`;
  console.warn(api);
  try {
    const res = await axios.post(api, credential, { withCredentials: true });
    console.log(res);
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err.message;
  }
};
