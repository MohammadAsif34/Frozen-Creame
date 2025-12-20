import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-6 font-bold text-pink-600 text-xl">Frozen Kreme</div>

      <nav className="px-4 space-y-2 text-sm">
        <Link className="block p-2 rounded hover:bg-pink-50" to="/dashboard">
          Dashboard
        </Link>
        <Link
          className="block p-2 rounded hover:bg-pink-50"
          to="/dashboard/orders"
        >
          Order History
        </Link>
        <Link
          className="block p-2 rounded hover:bg-pink-50"
          to="/dashboard/profile"
        >
          Edit Profile
        </Link>
        <Link
          className="block p-2 rounded hover:bg-pink-50"
          to="/dashboard/settings"
        >
          Settings
        </Link>
        <Link
          className="block p-2 rounded hover:bg-pink-50"
          to="/dashboard/privacy"
        >
          Privacy Policy
        </Link>
        <Link
          className="block p-2 rounded hover:bg-pink-50"
          to="/dashboard/help"
        >
          Help & Support
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
