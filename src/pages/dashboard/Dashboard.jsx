import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-[calc(100vh-80px)] border-t border-gray-300 flex bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
