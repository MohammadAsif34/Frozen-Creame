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
import EditProduct from "./components/dashboard/EditProduct";
import ProfilePage from "./pages/dashboard/dashboard-page/ProfilePage";
import SettingPage from "./pages/dashboard/dashboard-page/SettingPage";
import PageNotFound from "./pages/PageNotFound";
import { ForgetPassword } from "./components/authenticate/ForgetPassword";
import ProfileEdit from "./components/dashboard/profile-page/ProfileEdit";
import ContactUsPage from "./pages/dashboard/dashboard-page/ContactUsPage";
import ManageOrderPage from "./pages/dashboard/dashboard-page/ManageOrderPage";
import FranchisePage from "./pages/dashboard/dashboard-page/FranchisePage";

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

        element: (
          <InitialLoad>
            <Dashboard />
          </InitialLoad>
        ),
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "products", element: <ManageProduct /> },
          { path: "publish-product", element: <PublishProduct /> },
          { path: "products/add-product", element: <NewProduct /> },
          { path: "products/view/cake/:id", element: <ViewProduct /> },
          { path: "products/edit/cake/:id", element: <EditProduct /> },

          { path: "profile", element: <ProfilePage /> },
          { path: "profile/edit", element: <ProfileEdit /> },

          { path: "manage-order", element: <ManageOrderPage /> },
          { path: "franchise", element: <FranchisePage /> },
          { path: "contact-us", element: <ContactUsPage /> },

          { path: "profile", element: <ProfilePage /> },

          { path: "setting", element: <SettingPage /> },
        ],
      },
      {
        path: "/auth",
        element: <Authenticate />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
