import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/component/Footer";
import Navbar from "../components/navbar/Navbar";
import ConditionalComponent from "../pages/top-component/TopComponent";
import ScrollToTop from "../components/component/ScrollToTop";

const SecondLayout = () => {
  const path = useLocation();
  const name = path.pathname.replace("/", "").replace("-", " ");

  return (
    <>
      <ScrollToTop />
      <ConditionalComponent />
      <main className="w-full min-h-screen flex flex-col">
        {/* Sticky Navbar */}
        <div className="w-full h-20  bg-rose-400 sticky top-0 left-0 z-30 overflow-hidden">
          <Navbar />
        </div>
        <div className="w-full h-48  bg-[url('/banner/banner-51.png')] bg-center  bg-cover scale-x-[-1]">
          <div className="w-full h-full  px-[12%] py-12 scale-x-[-1] flex flex-col justify-center">
            <h1 className="text-5xl text-rose-500 font-bold capitalize  ">
              {name}
            </h1>
            <p className="py-2 capitalize">
              <Link to={"/"}>home</Link>{" "}
              <i className="bi bi-chevron-right "></i> {name}
            </p>
          </div>
        </div>

        {/* Homepage Content */}
        <div className="flex-1  bg-white ">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default SecondLayout;
