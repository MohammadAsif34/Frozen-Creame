import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleFavorite } from "../../appState/features/favorite/favoriteSlice";
import ItemCard3 from "../products/ItemCard3";

const FavoriteContainer = () => {
  const favoriteItems = useSelector((s) => s.favorite.favoriteItem);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen p-2 fixed top-0 left-0 z-40 bg-black/50">
      <div className="w-full max-w-2xl h-full bg-gray-50 ml-auto shadow-lg flex flex-col rounded-xl">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 ">
          <h2 className="text-lg font-semibold">Your Favorite</h2>
          <button
            onClick={() => dispatch(ToggleFavorite())}
            className="text-gray-500 hover:text-red-500 text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {favoriteItems.length > 0 ? (
            favoriteItems?.map((item, index) => (
              <ItemCard3 key={index} item={item} />
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
      </div>
    </div>
  );
};

export default FavoriteContainer;
