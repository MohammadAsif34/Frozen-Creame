import React, { useEffect } from "react";
import { enquries, sideItem } from "../../dataSets/listData.js";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../appState/features/sidebar/sidebarSlice.js";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      dispatch(closeMenu());
    }
  }, [location.pathname]);

  return (
    <>
      {isOpen && (
        <div className=" w-2/3 bg-white h-screen fixed top-0 right-0 z-[999] ">
          <button
            className="absolute top-2 left-2"
            onClick={() => dispatch(closeMenu())}
          >
            <i className="fa-solid fa-close"></i>
          </button>

          <div className="w-full h-20 border-b border-gray-300"></div>
          <div className="py-3 fle border-t border-gray-300">
            {/* <h1 className="px-4 font-bold text-xl">Enquries</h1> */}
            {sideItem?.map((item, idx) => (
              <div
                key={idx}
                className="w-full px-8 my-6  text-gray-400 capitalize text-lg"
              >
                <Link to={item?.link  }>
                  <i className={`mr-3 ${item?.icon}`}></i>
                  {item?.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="py-3 fle border-t border-gray-300">
            <h1 className="px-4 font-bold text-xl">Enquries</h1>
            {enquries?.map((item, idx) => (
              <div
                key={idx}
                className="w-full px-8 my-6  text-gray-400 capitalize text-lg"
              >
                <Link to={item?.link}>
                  <i className={`mr-3 ${item?.icon}`}></i>
                  {item?.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
