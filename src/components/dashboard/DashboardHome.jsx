import React from "react";
import { useSelector } from "react-redux";

const DashboardHome = () => {
  const user = useSelector((s) => s.auth.user);
  return (
    <>
      <h1 className="text-2xl font-bold text-pink-700 mb-4">My Dashboard</h1>
      <div className="flex gap-8 ">
        <div className="flex-1">
          <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-2">
            <p>
              <strong>First Name:</strong> {user?.first_name || "John Doe"}
            </p>
            <p>
              <strong>Last Name:</strong> {user?.last_name || "John Doe"}
            </p>
            <p>
              <strong>Email:</strong> {user.email || "johndoe@gmail.com"}
            </p>
            <p>
              <strong>Member Since:</strong> Jan 2024
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={user?.photo}
            alt=""
            className="w-40 aspect-square rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
