import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubNavbar from "./SubNavbar";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import LoginedClient from "./LoginedClient";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const cart = useSelector((s) => s.cart.items);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50  transition-all duration-300 shadow ${
          true
            ? "bg-gradient-to-r from-rose-100 via-pink-100 to-amber-50 sha dow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-rose-500 flex items-center gap-4">
            <img src="/logo.svg" alt="" className="w-10 grayscale-50" />
            𝓕𝓻𝓸𝔃𝓮𝓷 𝓚𝓻𝓮𝓶𝓮
          </Link>

          <div className="flex gap-12">
            {/* Menu */}
            <ul className="hidden md:flex items-center space-x-8 ">
              <li>
                <Link to="/about-us" className="hover:text-pink-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-pink-500 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/enquiry" className="hover:text-pink-500 transition">
                  Enquiry
                </Link>
              </li>
            </ul>
            {/* Actions */}
            <div className="flex items-center space-x-8">
              <div className="flex space-x-4">
                <Link to={"/cart"} className="relative">
                  <ShoppingCart />
                  <span className="absolute -top-2 -right-2 bg-rose-400 w-5 h-5 rounded-full text-xs flex items-center justify-center font-medium text-white">
                    {cart ? cart.length : 0}
                  </span>
                </Link>
              </div>
              <LoginedClient />
              {/* <Link
                to="/auth"
                className="px-4 py-1 rounded-md border border-rose-500 text-rose-500 hover:bg-pink-50 transition"
              >
                Login
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
      {/* {scrolled && <SubNavbar />} */}
    </>
  );
};

export default Navbar;
