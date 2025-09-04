import React from "react";
import {
  enquries,
  manageItem,
  // sideItem, 
  userItem,
} from "../../assets/listData";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <>
      <div className="w-2xs h-full px-4 py-2 bg-rose-100  text-gray-500 capitalize text-lg shadow-2xl">
        <ul className="border-b border-gray-300 text-sm">
          {manageItem?.map((item, idx) => (
            <li key={idx} className="w-full px-4 my-6 hover:text-gray-800 ">
              <Link to={item.link}>
                <span className="cursor-pointer">
                  <i className={`mr-3 ${item?.icon}`}></i>
                  {item?.title}
                </span>
              </Link>
            </li>
          ))}
          <hr className="text-gray-400/50" />

          {enquries?.map((item, idx) => (
            <li key={idx} className="w-full px-4 my-6 ">
              {/* <Link> */}
              <span className="cursor-pointer">
                <i className={`mr-3 ${item?.icon}`}></i>
                {item?.title}
              </span>
              {/* </Link> */}
            </li>
          ))}
          <hr className="text-gray-400/50" />

          {userItem?.map((item, idx) => (
            <li key={idx} className="w-full px-4 my-6 ">
              {/* <Link> */}
              <span className="cursor-pointer">
                <i className={`mr-3 ${item?.icon}`}></i>
                {item?.title}
              </span>
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DashboardSidebar;
