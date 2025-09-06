import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/component/Footer";
import ConditionalComponent from "../pages/top-component/TopComponent";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <ConditionalComponent />
      <main className="w-full min-h-screen flex flex-col">
        {/* Sticky Navbar */}
        <div className="w-full h-16 bg-rose-400 sticky top-0 left-0 z-30 overflow-hidden">
          <Navbar />
        </div>

        {/* Homepage Content */}
        <div className="flex-1 bg-white ">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
