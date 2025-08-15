import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCart } from "../../appState/features/cart/cartSlice";
import ItemCard3 from "../../components/products/ItemCard3";

const FavoriteComponent = () => {
  const cart = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const cartItems = [
    {
      name: "Rose Bouquet",
      description: "Fresh and fragrant",
      price: 499,
      quantity: 2,
      image: "https://via.placeholder.com/80",
    },
    {
      name: "Chocolate Box",
      description: "Dark & Milk Mix",
      price: 299,
      quantity: 1,
      image: "https://via.placeholder.com/80",
    },
  ];
  return (
    <>
      {/* <div className="w-full h-screen p-2 fixed top-0 left-0 z-40 bg-black/50"> */}
      <div className="w-full h-full shadow-lg flex flex-col rounded-xl">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 ">
          <h2 className="text-lg font-semibold">Your Favorite</h2>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <ItemCard3 key={index} item={item} />
            ))
          ) : (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty
            </p>
          )}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default FavoriteComponent;
