import React from "react";
import { enquries, manageItem, sideItem, userItem } from "../assets/listData";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <>
      <div className="w-xs  h-full min-h-96 px-4 bg-rose-100 rounded-xl text-gray-500 capitalize text-lg">
        <ul className="border-b border-gray-300">
          {manageItem?.map((item, idx) => (
            <li key={idx} className="w-full px-4 my-6 ">
              {/* <Link to={""}> */}
              <span className="cursor-pointer">
                <i className={`mr-3 ${item?.icon}`}></i>
                {item?.title}
              </span>
              {/* </Link> */}
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
