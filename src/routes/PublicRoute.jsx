import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import { ProductDetails } from "../pages/product/ProductDetails";
import Cart from "../pages/cart/CartPage";
import AboutUsPage from "../pages/info-page/about-us/AboutUsPage";
import ContactUsPage from "../pages/info-page/contact-us/ContactUsPage";
import FranchiseEnquiryPage from "../pages/info-page/franchise-enquiry/FranchiseEnquiryPage";
import { SearchProduct } from "../pages/product-list/SearchProduct";
import RouteErrorPage from "../pages/error-page/RouteErrorPage";
// import ProductDetails from "../pages/product/ProductDetail";

export const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { path: "", element: <Home /> },
      // { path: "/about-us", element: <AboutUsPage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      // { path: "/franchise-enquiry", element: <FranchiseEnquiryPage /> },
      {
        path: "/product/:product_sku",
        element: <ProductDetails />,
      },
      // { path: "/search/product", element: <SearchProduct /> },
      { path: "/cart", element: <Cart /> },
      { path: "*", element: <RouteErrorPage /> },
    ],
  },
];

export const PublicRoute = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};
