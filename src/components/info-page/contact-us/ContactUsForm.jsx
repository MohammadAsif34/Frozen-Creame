import React, { useState } from "react";
import emailJs from "emailjs-com";
import { toast } from "react-toastify";

export const ContactUsForm = () => {
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
    console.log(
      "Contact-us form ::>",
      form,

      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      import.meta.env.VITE_PUBLIC_KEY
    );
    emailJs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        console.log("send contact-us form ::> ");
        toast.success("Message sent Successfully!");
      })
      .catch((err) => {
        console.log("error to send contact-us form ::> ", err.message);
        toast.error("Failed to send Message");
      });
  };

  return (
    <>
      {/* <div className="w-full p-8 rounded-xl bg-gradient-to-br from-fuchsia-100 via-red-50 to-rose-100"> */}
      <div className="w-full p-8 rounded-xl bg-white shadow-md">
        <form className="" onSubmit={handleSubmit}>
          <label className="text-gray-500">
            <span>Full Name</span>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              className="w-full h-10 mt-1 mb-2 px-4 border border-gray-300 rounded-md focus:outline-0 focus:border-rose-300 transition-all focus:ring-2 ring-rose-300 "
              placeholder="Full name..."
              required
            />
          </label>
          <div className="flex gap-x-4 ">
            <label className="w-full text-gray-500">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full h-10 mt-1 mb-2 px-4 border border-gray-300 rounded-md focus:outline-0 focus:border-rose-300 transition-all focus:ring-2 ring-rose-300 "
                placeholder="Email..."
                required
              />
            </label>
            <label className="w-full text-gray-500">
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full h-10 mt-1 mb-2 px-4 border border-gray-300 rounded-md focus:outline-0 focus:border-rose-300 transition-all focus:ring-2 ring-rose-300 "
                placeholder="Phone..."
                required
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
              className="w-full h-10 mt-1 mb-2 px-4 border border-gray-300 rounded-md focus:outline-0 focus:border-rose-300 transition-all focus:ring-2 ring-rose-300 "
              placeholder="Subject..."
              required
            />
          </label>
          <label className="text-gray-500">
            <span>Message</span>
            <textarea
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full h-24 mt-1 py-1 mb-2 px-4 border border-gray-300 rounded-md focus:outline-0 focus:border-rose-300 transition-all focus:ring-2  ring-rose-300  "
              placeholder="Message here..."
              required
            />
          </label>
          <div className=" pt-6 ">
            <button
              type="submit"
              className="w-32 h-8 mt-1 mb-2 px-4 rounded-md bg-rose-400 text-white hover:scale-102 hover:bg-rose-500 cursor-pointer transition-all  "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
