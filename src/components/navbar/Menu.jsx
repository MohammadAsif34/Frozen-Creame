import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../../appState/features/sidebar/sidebarSlice";
import Search from "./Search";
import { toast } from "react-toastify";

const Menu = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [inp, setInp] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    toast.info("added soon!");
    setSearch(false);
    setInp("");
  };
  return (
    <>
      <div className="flex items-center gap-x-5">
        {/* <Search /> */}
        <div
          className={`absolute right-20 top-4 h-10 border rounded-full overflow-hidden flex items-center transition-all duration-500 ease-in-out
      ${
        search ? "w-3xs/2 opacity-100" : "w-0 opacity-0 px-0 pointer-events-none"
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
          className="text-xl ml-2  text"
          onClick={() => setSearch((p) => !p)}
        >
          <i className="bi bi-search cursor-pointer"></i>
        </button>

        {/* sidebar toggle  */}
        <button onClick={() => dispatch(openMenu())}>
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </>
  );
};

export default Menu;
