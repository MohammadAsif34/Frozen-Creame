import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Dashboard from "../dashboard/Dashboard";
import LandingPage from "./LandingPage";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen">
        {/* <Navbar /> */}
        {/* <Dashboard /> */}
        <LandingPage />
      </div>
    </>
  );
};

export default Home;
