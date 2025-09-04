import { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const defaultForm = {
    fname: "",
    lname: "",
    dob: "",
    email: "",
    phone: "",
    password: "",
    t_c: false,
  };
  const [form, setForm] = useState(defaultForm);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic front-end validation
    if (!form.email || !form.password) {
      setError("Please fill in both email and password.");
      return;
    }

    // Demo submit handler — replace with your API call
    console.log("Register form :: ", form);
    // alert(`Logged in as ${email} (remember: ${remember ? "yes" : "no"})`);
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="min-w-lg max-w-xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-7 transition duration-500 ease-in-out">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Sign up</h1>
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
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <label
                  htmlFor="fname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="fname"
                  name="fname"
                  type="fname"
                  autoComplete="fname"
                  required
                  value={form.fname}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  // placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="lname"
                  name="lname"
                  type="lname"
                  autoComplete="lname"
                  required
                  value={form.lname}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  // placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  autoComplete="dob"
                  required
                  value={form.dob}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  // placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <input
                  id="gender"
                  name="gender"
                  type="fname"
                  autoComplete="gender"
                  required
                  value={form.gender}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  // placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                // placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
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
                  name="t_c"
                  type="checkbox"
                  checked={form.t_c}
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.checked })
                  }
                  //   className="h-4 w-4 rounded border-gray-300 text-rose-400 focus:ring-rose-500"
                />
                Accept all Terms & Conditions.
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-rose-400 px-4 py-2.5 text-white text-sm font-medium shadow-sm cursor-pointer hover:bg-rose-500 focus:outline-none active:ring-2 active:ring-rose-600 focus:ring-offset-2"
            >
              Sign up
            </button>
          </form>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
};
