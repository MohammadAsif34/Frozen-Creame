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
    <div className="h-screen flex flex-col items-center justify-center -mt-12 text-center">
      <div className="max-w-3xl mx-auto  px-4 py-3 border-2 border-yellow-400 rounded-xl bg-yellow-50 text-yellow-700 shadow-md">
        <h2 className="text-lg font-semibold">🚧 Website Under Development</h2>
        <p className="mt-1 text-sm">
          Thank you for visiting! Our website is currently under active
          development to serve you better. Some features may not be fully
          functional yet.
        </p>
        <p className="mt-1 text-sm">
          Please check back soon for updates. If you have any questions, feel
          free to reach out at
          <a
            href="mailto:frozenkreme.official@gmail.com"
            className="text-blue-600 underline ml-1"
          >
            frozenkreme.official@gmail.com
          </a>
          .
        </p>
      </div>
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
