import React from "react";
import MainLayout from "./layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SecondLayout from "./layouts/SecondLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FranchiseEnquiry from "./pages/FranchiseEnquiry";
import SideBar from "./components/sidebar/SideBar";
import { useSelector } from "react-redux";
import ConditionalComponent from "./pages/ConditionalComponent";
import Dashboard from "./pages/Dashboard";
import ManageProduct from "./pages/manage/ManageProduct";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "manage-product", element: <ManageProduct /> },
      // { path: "dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/",
    element: <SecondLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "franchise-enquiry", element: <FranchiseEnquiry /> },
    ],
  },
]);
const App = () => {
  const isMenu = useSelector((state) => state.sidebar.state);
  return (
    <>
      <RouterProvider router={router} />
      {/* <MainLayout /> */}
    </>
  );
};

export default App;
