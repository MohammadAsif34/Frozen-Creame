import React from "react";
import MainLayout from "./layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SecondLayout from "./layouts/SecondLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FranchiseEnquiry from "./pages/FranchiseEnquiry";
import Dashboard from "./pages/Dashboard";
import ManageProduct from "./pages/manage/ManageProduct";
import Home from "./pages/home/Home";
import Authenticate from "./pages/authenticate/Authenticate";
import SellerProfile from "./pages/profile/SellerProfile";
import UserProfile from "./pages/profile/UserProfile";
import CartComponent from "./pages/listed-item/CartComponent";
import FavoriteComponent from "./pages/listed-item/FavoriteComponent";
import OrderComponent from "./pages/listed-item/OrderComponent";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "dashboard", element: <Dashboard /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "order", element: <OrderComponent /> },
          { path: "cart", element: <CartComponent /> },
          { path: "favorite", element: <FavoriteComponent /> },
          { path: "profile", element: <UserProfile /> },
          { path: "setting", element: <ManageProduct /> },
          { path: "manage-product", element: <ManageProduct /> },
          // { path: "", element: <AboutUs /> },
          // { path: "about-us", element: <AboutUs /> },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <SecondLayout />,
    children: [
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "franchise-enquiry", element: <FranchiseEnquiry /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "faqs", element: <FAQs /> },
    ],
  },
  {
    path: "/auth",
    element: <MainLayout />,
    children: [{ index: true, element: <Authenticate /> }],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
