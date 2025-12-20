import React from "react";

const DropDown = ({ handleLogout }) => {
  return (
    <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg border text-sm">
      <Link to="/dashboard" className="block px-4 py-2 hover:bg-pink-50">
        Dashboard
      </Link>
      <Link to="/dashboard/orders" className="block px-4 py-2 hover:bg-pink-50">
        Orders
      </Link>
      <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-2 hover:bg-pink-50 text-red-500"
      >
        Logout
      </button>
    </div>
  );
};

export default DropDown;
