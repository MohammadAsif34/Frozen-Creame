import React from "react";
import SideBar from "../components/sidebar/SideBar";
import { ToastContainer } from "react-toastify";

const ConditionalComponent = () => {
  return (
    <div>
      <ToastContainer
        autoClose={1000}
        pauseOnHover={false}
        hideProgressBar={true}
        closeButton={false}
      />
      <SideBar />
    </div>
  );
};

export default ConditionalComponent;
