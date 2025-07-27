import React, { useState } from "react";

const ContactUsForm = () => {
  const defaultForm = {
    fullname: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  };

  const [form, setForm] = useState(defaultForm);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact-us form ::>");
  };

  return (
    <>
      <div className="w-full p-8 rounded-xl bg-gradient-to-br from-fuchsia-100 via-red-50 to-rose-100">
        <form className="" onSubmit={handleSubmit}>
          <label className="text-gray-500">
            <span>Full Name</span>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              className="w-full h-10 mt-1 mb-2 px-4 border-2 rounded-xl focus:outline-0 focus:border-rose-400 transition-all  "
              placeholder=""
            />
          </label>
          <div className="flex justify-between gap-x-4 ">
            <label className="text-gray-500">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full h-10 mt-1 mb-2 px-4 border-2 rounded-xl focus:outline-0 focus:border-rose-400 transition-all  "
                placeholder=""
              />
            </label>
            <label className="text-gray-500">
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full h-10 mt-1 mb-2 px-4 border-2 rounded-xl focus:outline-0 focus:border-rose-400 transition-all  "
                placeholder=""
              />
            </label>
          </div>
          <label className="text-gray-500">
            <span>Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full h-10 mt-1 mb-2 px-4 border-2 rounded-xl focus:outline-0 focus:border-rose-400 transition-all  "
              placeholder=""
            />
          </label>
          <label className="text-gray-500">
            <span>Message</span>
            <textarea
              type="text"
              name="messagte"
              value={form.message}
              onChange={handleChange}
              className="w-full h-24 mt-1 mb-2 px-4 border-2 rounded-xl focus:outline-0 focus:border-rose-400 transition-all  "
              placeholder=""
            />
          </label>
          <div className=" pt-6 flex justify-between">
            <div></div>
            <button className="w-32 h-8 mt-1 mb-2 px-4 border-2 rounded-xl focus:outline-0 focus:border-rose-400 transition-all  ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUsForm;
