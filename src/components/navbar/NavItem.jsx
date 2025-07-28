import React from "react";
import { Link } from "react-router-dom";

const NavItem = () => {
  return (
    <>
      <div className="nav flex items-center gap-x-10 max-sm:gap-5">
        {/* search section */}
        <div className="w-64 max-sm:w-48 h-10 border  rounded-md overflow-hidden">
          <input
            type="text"
            className="w-full h-full px-4 bg-white/30 outline-none group-[]:"
            placeholder="search.."
            disabled
          />
        </div>
        <nav>
          <ul className="flex gap-x-6 font-light">
            <Link to={"about-us"}>
              <li className="cursor-pointer relative group ">
                <span className=" absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
                About Us
              </li>
            </Link>
            <Link to={"contact-us"}>
              <li className="cursor-pointer relative group ">
                <span className=" absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
                Contact Us
              </li>
            </Link>
            <Link to={"franchise-enquiry"}>
              <li className="cursor-pointer relative group ">
                <span className=" absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                Franchise Enquiry
              </li>
            </Link>
          </ul>
        </nav>
        <div className="flex items-center gap-x-8 ">
          {/* cart  */}
          <div className="text-2xl max-sm:hidden">
            {/* <CartSection> */}
            <i className="bi bi-cart cursor-pointer"></i>
            {/* </CartSection> */}
          </div>
          {/* favorite  */}
          <div className="text-2xl max-sm:hidden">
            <i className="bi bi-bag-heart cursor-pointer"></i>
          </div>
          {false ? (
            <AvatarDropDown />
          ) : (
            //   <Link to={"/auth/login"}>
            <div className="px-8 py-2 border border-white rounded-lg overflow-hidden group relative z-0 cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">
              <span className=" absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out -z-10"></span>
              login
            </div>
            //   {/* </Link> */}
          )}
        </div>
      </div>
    </>
  );
};

export default NavItem;
