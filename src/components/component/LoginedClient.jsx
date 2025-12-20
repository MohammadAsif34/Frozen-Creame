import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../hooks/firebase";
import { toast } from "react-toastify";
import { LayoutDashboard, LogOut, Truck } from "lucide-react";
import { clearProfile } from "../../redux/slices/userSlice";
import { clearUser } from "../../redux/slices/authSlice";

const LoginedClient = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((s) => s.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(clearProfile());
      dispatch(clearUser());
      navigate("/auth");
      toast.success("Logout successfull");
    } catch (err) {
      console.error(err?.message || "Something error");
    }
  };

  return (
    <div className="relative">
      {!user ? (
        /* Not Logged In */
        <Link
          to="/auth"
          className="px-4 py-2 border border-pink-600 text-pink-600 rounded hover:bg-pink-50"
        >
          Login
        </Link>
      ) : (
        /* Logged In */
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2"
          >
            <img
              src={user?.photo || "https://i.pravatar.cc/40"}
              alt="user"
              className="w-9 h-9 rounded-full bg-gray-400"
            />
            {/* <span className="text-sm font-medium">
              {user?.displayName || user?.email}
            </span> */}
          </button>

          {/* Dropdown */}
          {open && <Dropdown handleLogout={handleLogout} user={user} />}
        </div>
      )}
    </div>
  );
};

export default LoginedClient;

const Dropdown = ({ handleLogout, user }) => {
  return (
    <>
      <div className="absolute right-0 mt-3 max-w-md min-w-3xs bg-white rounded-xl shadow-lg border border-gray-300 text-sm overflow-hidden">
        <p className="py-2 text-center text-gray-500">{user?.email || "adn"}</p>
        <div className="w-full">
          <img
            src={user.photo || "https://i.pravatar.cc/40"}
            alt=""
            className="w-24 aspect-square rounded-full overflow-hidden mx-auto my-2"
          />
        </div>
        <p className="py-2 text-center text-gray-500">
          {user?.first_name || "adn"}
        </p>
        <div className="px-6 pb-3 flex flex-col gap-0.5">
          <Link
            to="/dashboard"
            className=" px-6 py-2 flex gap-2 bg-gray-200 rounded-t-2xl rounded-b-md  hover:bg-pink-50"
          >
            <LayoutDashboard size={16} />
            Dashboard
          </Link>
          <Link
            to="/dashboard/orders"
            className=" px-6 py-2 flex gap-2 bg-gray-200 rounded-md hover:bg-pink-50"
          >
            <Truck size={16} />
            Orders
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-6 py-2 flex items-center gap-2 bg-red-100 rounded-t-md rounded-b-2xl hover:bg-pink-50 text-red-500"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
