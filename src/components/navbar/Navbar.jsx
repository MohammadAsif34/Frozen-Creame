import React, { useState } from "react";
import { NavItem } from "./NavItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, UnsetUser } from "../../redux/slice/userSlice";

const Navbar = () => {
  const user = useSelector((s) => s.user);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-18 px-[8%] bg-rose-400">
        <div className="w-full h-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="w-10 p-1" />
            <span className=" font-bold text-white font-serif text-2xl">
              Frozen Kreme
            </span>
          </div>
          <div className="text-white flex items-center gap-4">
            <NavItem />
            {user.isAuth ? (
              <LoginedProfile user={user?.data} />
            ) : (
              <button
                className="border  px-4 py-1 rounded-md hover:scale-110 transition-all duration-500 cursor-pointer"
                onClick={() => navigate("/auth")}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const LoginedProfile = ({ user }) => {
  const [dropMenu, setDropMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="p-1 border rounded-full flex items-center gap-x-2 bg-white/10 relative cursor-default"
        onClick={() => setDropMenu((p) => !p)}
      >
        <div className="w-8 h-8 border  rounded-full overflow-hidden">
          <img
            src={user?.picture || "./banner-1.png"}
            alt="profile"
            className="w-full h-full rounded-full object-center object-cover"
          />
        </div>
        <div className=" max-w-[100px] truncate text-sm ">
          {user?.fullname || "Mohammad Asif"}
        </div>
        {dropMenu && (
          <div className="w-36 py-1 bg-gray-100 text-gray-500 rounded-md  absolute top-12 right-0 shadow">
            <button
              className="w-full px-4 py-1 text-start hover:bg-gray-200 cursor-pointer"
              onClick={() => dispatch(UnsetUser())}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
