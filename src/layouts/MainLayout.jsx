import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <ToastContainer
        autoClose={1500}
        hideProgressBar={true}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        closeButton={false}
      />
      <div className="w-full h-screen flex flex-col">
        {/* navbar  */}
        <div className="w-full sticky top-0 left-0 z-30">
          <Navbar />
        </div>
        <div className="flex-1 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
