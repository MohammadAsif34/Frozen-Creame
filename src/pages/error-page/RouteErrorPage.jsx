import React from "react";
import { useRouteError } from "react-router-dom";

// const RouteErrorPage = () => {
//   return <div> some thing went wrong</div>;
// };

// export default RouteErrorPage;
// // ErrorPage.jsx
// import { useRouteError } from "react-router-dom";

const RouteErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center  text-center">
      <div className="">
        <img src="/image.png" alt="" className="" />
      </div>
      <h1 className="text-4xl font-bold text-red-600">
        Oops!
        <span className="font-thin tracking-tighter">
          {" "}
          Something went wrong
        </span>
      </h1>
      <p className="mt-4 text-lg">Sorry, an unexpected error has occurred.</p>
      <p className="mt-2 text-gray-500 italic"></p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-rose-400 text-white rounded-lg hover:bg-rose-500"
      >
        Go Home
      </a>
    </div>
  );
};

export default RouteErrorPage;
