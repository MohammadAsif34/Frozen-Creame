import React from "react";
import { enquries, manageItem, sideItem, userItem } from "../dataSets/listData";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="px-[12%] max-sm:px-2 py-4 flex max-sm:flex-col max-sm:items-center    gap-x-5">
        {/* dashboard navigation  */}
        <div className="w-sm  h-full min-h-96 px-4 bg-rose-100 rounded-xl text-gray-500 capitalize text-lg">
          <ul className="border-b border-gray-300">
            {userItem?.map((item, idx) => (
              <li key={idx} className="w-full px-4 my-6 ">
                <span className="cursor-pointer">
                  {" "}
                  <i className={`mr-3 ${item?.icon}`}></i>
                  {item?.title}
                </span>
              </li>
            ))}
          </ul>
          <ul className="border-b border-gray-300">
            {manageItem?.map((item, idx) => (
              <li key={idx} className="w-full px-4 my-6 ">
                <Link to={item?.link}>
                  <span className="">
                    {" "}
                    <i className={`mr-3 ${item?.icon}`}></i>
                    {item?.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-b border-gray-300">
            {sideItem?.map((item, idx) => (
              <div key={idx} className="w-full px-4 my-6 ">
                <button className="cursor-pointer">
                  {" "}
                  <i className={`mr-3 ${item?.icon}`}></i>
                  {item?.title}
                </button>
              </div>
            ))}
          </div>
          <div className="">
            {enquries?.map((item, idx) => (
              <div key={idx} className="w-full px-4 my-6  ">
                <button className="cursor-pointer">
                  {" "}
                  <i className={`mr-3 ${item?.icon}`}></i>
                  {item?.title}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Dashboard;
