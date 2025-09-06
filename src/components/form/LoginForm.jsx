import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../component/Loader";

export default function LoginForm() {
  const defaultForm = {
    email: "",
    password: "",
    remember: false,
  };

  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please fill in both email and password.");
      return;
    }

    console.log(form);
    setForm(defaultForm);
  };

  return (
    <>
      {/* <Loader /> */}
      <div className=" flex items-center justify-center">
        <div className=" max-w-lg min-w-lg">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-7 transition duration-500 ease-in-out">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">
              Sign in
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Use your email and password to continue.
            </p>

            {error && (
              <div
                role="alert"
                className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <form
              onSubmit={onSubmit}
              className="space-y-4 text-neutral-500"
              noValidate
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-700 select-none">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    checked={form.remember}
                    onChange={(e) =>
                      setForm({ ...form, [e.target.name]: e.target.checked })
                    }
                    //   className="h-4 w-4 rounded border-gray-300 text-rose-400 focus:ring-rose-500"
                  />
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-rose-400 px-4 py-2.5 text-white text-sm font-medium shadow-sm cursor-pointer hover:bg-rose-500 focus:outline-none active:ring-2 active:ring-rose-600 focus:ring-offset-2"
              >
                Sign in
              </button>
              <div className="px-2 mt-6 text-xs text-gray-500 flex justify-between">
                <Link className="text-blue-500">Forget password</Link>
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
}
