import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="flex-1 h-full flex flex-col justify-center items-center bg-white">
        <div className="min-w-72 max-w-md  overflow-hidden select-none">
          <img
            loading="eager"
            src="/page_not_found.png"
            alt=""
            className="w-full h-full object-center object-cover scale-120"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="text-sm">
          <button
            className="px-8 py-2 mx-4 text-rose-400 border rounded-full cursor-pointer hover:bg-rose-100 transition-all duration-300 hover:scale-105"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
          <Link to={"/"}>
            <button className=" px-8 py-2 mx-4 text-white rounded-full bg-rose-400 hover:bg-rose-500 cursor-pointer transition-all duration-300 hover:scale-105">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
