import React, { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
// import SecondLayout from "./layouts/SecondLayout";
// import AboutUs from "./pages/about-us/AboutUsPage";
// import ContactUs from "./pages/contact-us/ContactUsPage";
// import FranchiseEnquiry from "./pages/franchise-enquiry/FranchiseEnquiryPage";
// import Dashboard from "./pages/Dashboard";
// import ManageProduct from "./pages/manage/ManageProduct";
// import Home from "./pages/home/Home";
// import Authenticate from "./pages/authenticate/Authenticate";
// import SellerProfile from "./pages/profile/SellerProfile";
// import UserProfile from "./pages/profile/UserProfile";
// import CartComponent from "./pages/listed-item/CartComponent";
// import FavoriteComponent from "./pages/listed-item/FavoriteComponent";
// import OrderComponent from "./pages/listed-item/OrderComponent";
// import FAQs from "./pages/FAQs";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,32
//     children: [
//       { index: true, element: <Home /> },
//       { path: "product/:id", element: <Dashboard /> },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//         children: [
//           { path: "order", element: <OrderComponent /> },
//           { path: "cart", element: <CartComponent /> },
//           { path: "favorite", element: <FavoriteComponent /> },
//           { path: "profile", element: <UserProfile /> },
//           { path: "setting", element: <ManageProduct /> },
//           { path: "manage-product", element: <ManageProduct /> },
//           // { path: "", element: <AboutUs /> },
//           // { path: "about-us", element: <AboutUs /> },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <SecondLayout />,
//     children: [
//       { path: "about-us", element: <AboutUs /> },
//       { path: "contact-us", element: <ContactUs /> },
//       { path: "franchise-enquiry", element: <FranchiseEnquiry /> },
//       { path: "privacy-policy", element: <PrivacyPolicy /> },
//       { path: "faqs", element: <FAQs /> },
//     ],
//   },
//   {
//     path: "/auth",
//     element: <MainLayout />,
//     children: [{ index: true, element: <Authenticate /> }],
//   },
// ]);

import { PublicRoute, publicRoutes } from "./routes/PublicRoute";

const router = createBrowserRouter([
  { element: <PublicRoute />, children: publicRoutes },
  // { element: <PublicRoute />, children: publicRoutes },
  // { element: <PublicRoute />, children: publicRoutes },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
