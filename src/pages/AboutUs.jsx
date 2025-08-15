import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => (
  <div className="bg-rose-50 min-h-screen py-12 px-6">
    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
      {/* Left Side: Visuals */}
      <div className="relative flex flex-col gap-6">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="https://images.pexels.com/photos/4109993/pexels-photo-4109993.jpeg"
          alt="Artisan Cakes"
          className="rounded-lg shadow-xl w-full h-[360px] object-cover"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Ice_cream_cone_animation.png"
          alt="Animated Ice Cream"
          className="absolute top-4 right-4 w-20 h-20 drop-shadow-lg"
        />
      </div>

      {/* Right Side: Text & Story */}
      <div>
        <h2 className="text-4xl font-bold text-rose-600 mb-4">
          About <span className="text-gray-800">Frozen Cream</span>
        </h2>

        {/* Founder Story */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          Frozen Cream was born from a love of flavor and family. Our founder,
          Ayesha, swapped a dull corporate career for sugar, flour, and
          dreams—starting from her home kitchen and growing into the bakery you
          see today.
        </p>

        {/* Mission & Values */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-rose-500">Our Mission</h3>
          <p className="text-gray-600">
            To bake joy into every bite, using only the freshest, handpicked
            ingredients.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-rose-500">
            Why We Stand Out
          </h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Custom cakes made just for you</li>
            <li>Family-owned & handcrafted with care</li>
            <li>Eggless & allergy-sensitive options available</li>
            <li>Featured in local press & award-winning designs</li>
          </ul>
        </div>

        {/* Social Proof */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-rose-500 mb-3">
            Kind Words from Customers
          </h3>
          <blockquote className="italic text-gray-600 border-l-4 border-rose-400 pl-4">
            “The best cake we ever ordered—fresh, beautiful, and absolutely
            delicious!”
            <br />— Priya & Group of 8, Bangalore
          </blockquote>
        </div>

        {/* Call to Action */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/shop"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
        >
          Explore Our Cakes
        </motion.a>
      </div>
    </div>
  </div>
);

export default AboutUs;
