import React from "react";
import { NavItem } from "./NavItem";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-18 px-[12%] bg-rose-400">
        <div className="w-full h-full flex justify-between items-center">
          <div>
            {/* <img src="" alt="" /> */}
            <span className=" font-bold text-white font-serif">
              Frozen Creame
            </span>
          </div>
          <div className="text-white flex items-center gap-4">
            <NavItem />
            <button
              className="border  px-4 py-1 rounded-xl hover:scale-110 transition-all duration-500 cursor-pointer"
              onClick={() => console.log("login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
