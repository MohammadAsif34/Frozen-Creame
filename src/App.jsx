import React from "react";
import Navbar from "./components/component/Navbar";
import Footer from "./components/component/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Dashboard from "./pages/dashboard/Dashboard";
import AuthPage from "./pages/auth-page/AuthPage";
import DashboardHome from "./components/dashboard/DashboardHome";
import OrderHistory from "./components/dashboard/OrderHistory";
import ProfileEdit from "./components/dashboard/ProfileEdit";
import HelpSupport from "./components/dashboard/HelpSupport";
import PrivacyPolicy from "./components/dashboard/PrivacyPolicy";
import Settings from "./components/dashboard/Settings";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact-us/ContactUs";
import Enquiry from "./pages/enquiry/Enquiry";
import CakeList from "./components/cake-list/CakeList";
import CakeDetails from "./pages/cake-details/CakeDetails";
import CartPage from "./pages/cart-page/CartPage";
import useCheckAuth from "./hooks/useCheckAuth";
import Loader from "./components/component/Loader";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import PaymentPage from "./pages/payment-page/PaymentPage";
import useScrollToTop from "./hooks/useScrollToTop";
import DefaultPage from "./pages/default-route/DefaultPage";

const Layout = () => {
  const { loading } = useCheckAuth();
  useScrollToTop();

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          // <PublicRoute>
          <HomePage />
          // </PublicRoute>
        ),
      },
      { path: "auth", element: <AuthPage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "enquiry", element: <Enquiry /> },
      { path: "cart", element: <CartPage /> },
      { path: "cakes", element: <CakeList /> },
      { path: "cake/:cakeId", element: <CakeDetails /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "checkout/payment/:order", element: <PaymentPage /> },
      { path: "*", element: <DefaultPage /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "orders", element: <OrderHistory /> },
          { path: "profile", element: <ProfileEdit /> },
          { path: "settings", element: <Settings /> },
          { path: "privacy", element: <PrivacyPolicy /> },
          { path: "help", element: <HelpSupport /> },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
