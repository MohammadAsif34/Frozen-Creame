import React from "react";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
// import ManageProduct from "./components/manage/ManageProduct";
import Navbar from "./components/navbar/Navbar";
// import NewProduct from "./components/dashboard/NewProduct";
import MainLayout from "./layouts/MainLayout";
// import DashboardHome from "./components/component/DashBoardHome";
// import ViewProduct from "./components/dashboard/ViewProduct";
// import PublishProduct from "./pages/dashboard/dashboard-page/PublishProduct";
import InitialLoad from "./hooks/InitialLoad";

import Authenticate from "./pages/authenticate/Authenticate";
import ManageProduct from "./pages/dashboard/dashboard-page/ManageProduct";
import PublishProduct from "./pages/dashboard/dashboard-page/PublishProduct";
import NewProduct from "./components/dashboard/NewProduct";
import ViewProduct from "./components/dashboard/ViewProduct";
import DashboardHome from "./pages/dashboard/dashboard-page/DashboardHome";

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
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: (
              <InitialLoad>
                <DashboardHome />
              </InitialLoad>
            ),
          },
          { path: "products", element: <ManageProduct /> },
          { path: "publish-product", element: <PublishProduct /> },
          { path: "products/add-product", element: <NewProduct /> },
          { path: "products/view/cake/:id", element: <ViewProduct /> },
          // You don’t need another "dashboard" inside dashboard
        ],
      },
      {
        path: "/auth",
        element: <Authenticate />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
