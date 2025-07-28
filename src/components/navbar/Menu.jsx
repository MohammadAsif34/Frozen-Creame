import React from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../../appState/features/sidebar/sidebarSlice";
import Search from "./Search";

const Menu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-x-5">
        <Search />
        {/* sidebar toggle  */}
        <button onClick={() => dispatch(openMenu())}>
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </>
  );
};

export default Menu;
