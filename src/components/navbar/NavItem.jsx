import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToggleCart } from "../../appState/features/cart/cartSlice";
import { ToggleFavorite } from "../../appState/features/favorite/favoriteSlice";

const NavItem = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="nav flex items-center gap-x-5 max-sm:gap-5">
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
          <ul className="flex gap-x-5 items-center font-light">
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
            {/* cart button */}
            <button
              className="text-2xl max-sm:hidden"
              onClick={() => dispatch(ToggleCart())}
            >
              <i className="bi bi-cart cursor-pointer"></i>
            </button>
            {/* favorite  button */}
            <button
              className="text-2xl max-sm:hidden"
              onClick={() => dispatch(ToggleFavorite())}
            >
              <i className="bi bi-bag-heart cursor-pointer"></i>
            </button>
            {false ? (
              <AvatarDropDown />
            ) : (
              <Link to={"/auth"}>
                <div className="px-8 py-2 border border-white rounded-lg overflow-hidden group relative z-0 cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">
                  <span className=" absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out -z-10"></span>
                  login
                </div>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavItem;
