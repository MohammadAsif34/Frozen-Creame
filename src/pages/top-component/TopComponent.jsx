import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { ToastContainer } from "react-toastify";
import CartContainer from "../../components/sidebar/CartContainer";
import { useSelector } from "react-redux";
import FavoriteContainer from "../../components/sidebar/FavoriteContainer";

const TopComponent = () => {
  const isCart = useSelector((s) => s.cart.isOpen);
  const isFavorite = useSelector((s) => s.favorite.isOpen);
  return (
    <div>
      <ToastContainer
        autoClose={1000}
        pauseOnHover={false}
        hideProgressBar={true}
        closeButton={false}
      />
      <SideBar />
      {isCart && <CartContainer />}
      {isFavorite && <FavoriteContainer />}
    </div>
  );
};

export default TopComponent;
