import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToggleCart } from "../../appState/features/cart/cartSlice";
import { ToggleFavorite } from "../../appState/features/favorite/favoriteSlice";
import { toast } from "react-toastify";

const NavItem = () => {
  const [search, setSearch] = useState(false);
  const [inp, setInp] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    toast.info("added soon!");
    setSearch(false);
    setInp("");
  };

  return (
    <>
      <div className="nav flex items-center gap-x-5 max-sm:gap-5">
        <nav>
          <ul className="flex gap-x-5 items-center font-light">
            <Link to={"/about-us"}>
              <li className="cursor-pointer relative group ">
                <span className=" absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
                About Us
              </li>
            </Link>
            <Link to={"/contact-us"}>
              <li className="cursor-pointer relative group ">
                <span className=" absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
                Contact Us
              </li>
            </Link>
            <Link to={"/franchise-enquiry"}>
              <li className="cursor-pointer relative group ">
                <span className=" absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                Franchise Enquiry
              </li>
            </Link>
            {/* cart button */}
            <div className="flex relative items-center">
              {/* Search Section */}
              <div
                className={`absolute right-10 top-0 h-10 border rounded-full overflow-hidden
      flex items-center
      transition-all duration-500 ease-in-out
      ${
        search ? "w-sm opacity-100" : "w-0 opacity-0 px-0 pointer-events-none"
      }`}
              >
                <form onSubmit={handleSearch} className="w-full">
                  <input
                    value={inp}
                    onChange={(e) => setInp(e.target.value)}
                    type="text"
                    className="w-full h-10 px-4 text-gray-500 bg-white outline-none font-normal"
                    placeholder="Search..."
                  />
                </form>
              </div>

              {/* Search Button */}
              <button
                className="text-2xl ml-2 max-sm:hidden"
                onClick={() => setSearch((p) => !p)}
              >
                <i className="bi bi-search cursor-pointer"></i>
              </button>
            </div>

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
