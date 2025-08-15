import React from "react";
import { enquries, manageItem, sideItem, userItem } from "../dataSets/listData";
import { Link, Outlet } from "react-router-dom";
import DashboardSidebar from "../components/sidebar/DashboardSidebar";

const Dashboard = () => {
  return (
    <>
      <div className="px-[12%] max-sm:px-2 py-4 flex max-sm:flex-col max-sm:items-center gap-x-5">
        {/* <div className="w-full border"></div> */}
        {/* dashboard navigation  */}
        <DashboardSidebar />
        <div className=" flex-1 bg-rose-50 rounded-xl">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
