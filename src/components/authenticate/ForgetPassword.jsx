import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { LoginAPI } from "../../services/user.services";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
// import { Loader } from "../component/Loader";

export const ForgetPassword = () => {
  const defaultForm = {
    current_password: "",
    new_password: "",
    repeat_password: "",
  };

  const user = useSelector((s) => s.user);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (
        !form.current_password ||
        !form.new_password ||
        !form.repeat_password
      ) {
        setError("Please fill all input field.  ");
        return;
      } else if (form.new_password !== form.repeat_password) {
        setError("Password not matched. ");
        return;
      }

      // const res = await LoginAPI(form);
      // console.log("Login res :: ", res);
      // if (res.status === "success") {
      //   dispatch(setUser(res.user));
      //   toast.success(res.message);
      // } else {
      //   toast.error(res.message);
      // }
      setError("");
    } catch (err) {
      console.error("Login api error : ", err.message);
    } finally {
      setLoading(false);
    }
    console.log({
      _id: user.data._id,
      current_password: form.current_password,
      new_password: form.new_password,
    });
    setForm(defaultForm);
  };
  return (
    <>
      {/* <Loader /> */}
      <div className="  mt-10 flex items-center justify-center">
        <div className=" max-w-lg min-w-lg">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-7 transition duration-500 ease-in-out">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">
              Forget Password
            </h1>

            {error && (
              <div
                role="alert"
                className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
              >
                {error}
              </div>
            )}
            {status && (
              <div
                role="alert"
                className="w-fit mx-auto text-center mb-4 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700"
              >
                {status}
              </div>
            )}

            <form
              onSubmit={onSubmit}
              className="mt-5 space-y-4 text-neutral-500"
              noValidate
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  name="current_password"
                  type="password"
                  autoComplete="email"
                  required
                  value={form.current_password}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  // placeholder="you@example.com"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  name="new_password"
                  type="password"
                  required
                  value={form.new_password}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Repeat new Password
                </label>
                <input
                  name="repeat_password"
                  type="password"
                  required
                  value={form.repeat_password}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full my-5 disabled:cursor-not-allowed rounded-2xl bg-rose-400 px-4 py-2.5 text-white text-sm font-medium shadow-sm cursor-pointer hover:bg-rose-500 focus:outline-none active:ring-2 active:ring-rose-600 focus:ring-offset-2"
                disabled={loading}
              >
                Forget Password
                {loading && (
                  <span className="inline-block w-5 h-5 border-2 border-t-transparent rounded-full animate-spin translate-1"></span>
                )}
              </button>
              <div className="px-2 mt-6 text-xs text-gray-500 flex justify-between">
                <Link to={"/auth"} className="text-blue-500">
                  <i className="bi bi-arrow-left mr-2"></i>Login Now
                </Link>
              </div>
            </form>
          </div>

          <p className="mt-4 text-center text-xs text-gray-500">
            By continuing, you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </div>
    </>
  );
};
