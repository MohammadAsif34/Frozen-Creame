import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCart } from "../../appState/features/cart/cartSlice";
import ItemCard2 from "../products/ItemCard2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const navigate = useNavigate();
  const cart = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(ToggleCart());
    navigate("/cart");
  };
  return (
    <div className="w-full h-screen p-2 fixed top-0 left-0 z-40 bg-black/50">
      <div className="w-full max-w-2xl h-full bg-gray-50 ml-auto shadow-lg flex flex-col rounded-xl">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 ">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={() => dispatch(ToggleCart())}
            className="text-gray-500 hover:text-red-500 text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.cartItem.length > 0 ? (
            cart.cartItem?.map((item, index) => (
              <ItemCard2 key={index} item={item} />
            ))
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="./default/empty_item.png"
                alt=""
                className="w-2/3 aspect-square rounded-full shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.cartItem.length > 0 && (
          <div className="p-4">
            <button
              className="w-full bg-rose-400 hover:bg-rose-500 text-white py-2 rounded-lg font-medium"
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
