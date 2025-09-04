import axios from "axios";
import { toast } from "react-toastify";

export const LoginAPI = async (credential) => {
  const api = `http://localhost:8800/api/v1/auth/login`;
  try {
    const res = await axios.post(api, credential, { withCredentials: true });
    console.log(res);
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return err.message;
  }
};
