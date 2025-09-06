import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/component/DashboardSidebar";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Dashboard = () => {
  // const user = useSelector((s) => s.user);
  const user = useSelector((s) => s.user);
  const product = useSelector((s) => s.product);

  const isAuth = useAuth();
  useEffect(() => {
    console.log("dashboard user ::", user);
  }, [user]);
  useEffect(() => {
    console.log("dashboard product ::", product);
  }, [product]);

  if (!isAuth) {
    // toast.warn("No user logined");
    return null;
  }
  return (
    <div className="w-full h-[calc(100vh-72px)]  flex overflow-x-hidden overflow-y-hidden">
      <div className="w-2xs  ">
        <DashboardSidebar />
      </div>
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
