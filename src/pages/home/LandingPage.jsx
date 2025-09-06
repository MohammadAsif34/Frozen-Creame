import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { user } from "../../data/owner.js";

const LandingPage = () => {
  return (
    <div className="bg-rose-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-rose-100">
        <img
          src="./banner-1.png"
          alt="Frozen Cream Cakes"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
          decoding="sync"
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-rose-800"
          >
            Frozen kreme Cakes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-rose-700 max-w-2xl mx-auto"
          >
            Crafting happiness with every slice – where taste meets tradition
            and quality never takes a backseat.
          </motion.p>
        </div>
      </section>

      {/* About Us */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-rose-800">About Us</h2>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold">Frozen Kreme Cakes</span>, we bring
          sweetness to every celebration. From birthdays to weddings, we deliver
          cakes that are not just desserts but memories. With years of passion
          and experience, our mission is to spread joy with delightful flavors
          and unmatched quality.
        </p>
      </section>

      {/* Features of Our Cakes */}
      <section className="bg-rose-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-rose-800">
          Features of Our Cakes
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Premium Ingredients",
              desc: "We use only the finest quality ingredients for rich flavors.",
            },
            {
              title: "Handcrafted Designs",
              desc: "Every cake is decorated with care, making it picture-perfect.",
            },
            {
              title: "Fresh & Hygienic",
              desc: "Baked fresh daily with strict hygiene standards.",
            },
            {
              title: "Custom Flavors",
              desc: "Choose from a variety of flavors tailored to your liking.",
            },
            {
              title: "Eco-friendly Packaging",
              desc: "We care for the planet while serving you sweetness.",
            },
            {
              title: "Affordable Luxury",
              desc: "Delicious cakes that don’t hurt your pocket.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <h3 className="text-xl font-semibold text-rose-700">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-rose-800">Why Choose Us?</h2>
        {/* <div>
          <p>{user?.why_choose_us}</p>
        </div> */}
        <div className="mt-10 grid md:grid-cols-4 gap-8">
          {user?.why_choose_us.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-rose-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-rose-700">
                {item.title}
              </h3>
              <p className="text-sm mt-2 text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Franchise Opportunity */}
      <section className="bg-rose-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-rose-800">
          Franchise Opportunity
        </h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          Join our journey of spreading happiness and sweetness. With a proven
          business model and strong brand identity, partnering with
          <span className="font-semibold"> Frozen Cream Cakes </span> is the
          perfect recipe for success. Start your franchise today and grow with
          us.
        </p>
        <div className="mt-6">
          <Link
            to="/franchise"
            className="px-6 py-3 bg-rose-600 text-white rounded-2xl font-semibold shadow hover:bg-rose-700 transition"
          >
            Apply for Franchise
          </Link>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 px-6 text-center bg-rose-50">
        <h2 className="text-3xl font-bold text-rose-800">Contact Us</h2>
        <p className="mt-4 text-gray-700">
          Have questions or want to order? We’d love to hear from you.
        </p>
        <div className="mt-6 space-y-2 text-gray-600">
          <p>📍{user?.address} </p>
          <p>
            📞 {user?.phone_1} | {user?.phone_2}{" "}
          </p>
          <p>✉️ {user?.email}</p>
          {/* social links  */}
          <div className="flex justify-center">
            <span>Follow on :</span>
            <ul className="flex items-center">
              {user?.social_links?.map((item, idx) => (
                <li key={idx} title={item.name} className="mx-2 cursor-pointer">
                  <Link to={item?.link}>
                    <img src={item?.icon} alt="" className="w-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <Link
            to="/contact"
            className="px-6 py-3 bg-rose-500 text-white rounded-2xl font-semibold shadow hover:bg-rose-600 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      {/* deliver Partner  */}
      <div className="bg-rose-200 py-10 flex flex-col items-center ">
        <h1 className="pb-8 text-center text-3xl text-rose-800 font-bold">
          Ours Delivery Partner
        </h1>
        <ul className="flex items-center">
          {user?.delivery_partner?.map((item, idx) => (
            <li key={idx} title={item.name} className=" mx-2 cursor-pointer">
              <Link to={item?.link}>
                <img
                  src={item?.icon}
                  alt=""
                  className="w-28 aspect-3/2 object-center object-cover rounded-xl"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
