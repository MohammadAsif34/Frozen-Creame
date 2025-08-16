import React from "react";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ManageProduct from "./components/manage/ManageProduct";
import Navbar from "./components/navbar/Navbar";
import NewProduct from "./pages/dashboard/product/NewProduct";

// Layout wrapper
const Layout = () => {
  return (
    <>
      <div className="w-full h-screen relative flex flex-col">
        <div className="w-full sticky top-0 left-0 z-30">
          <Navbar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { index: true, element: <ManageProduct /> },
          { path: "add-product", element: <NewProduct /> },
          // You don’t need another "dashboard" inside dashboard
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
