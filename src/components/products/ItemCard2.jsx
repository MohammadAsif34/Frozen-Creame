import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RemoveFromCart } from "../../appState/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ItemCard2 = ({ item }) => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const encode = btoa(item?.sku);

  return (
    <div className="flex items-center bg-white rounded-xl p-2 shadow-md hover:shadow-lg hover:scale-102 transition-all duration-300 cursor-default">
      {/* Image */}
      <div
        className="relative w-20 h-16 shrink-0"
        onClick={() => navigate(`/product/${encode}`)}
      >
        {!loaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded"></div>
        )}
        <img
          src={item.picture}
          alt={item.name}
          className={`w-full h-full rounded object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Info */}
      <div className="ml-4 flex-1 flex justify-between items-center gap-4">
        <div className="flex flex-col">
          <h3
            className="text-sm font-semibold text-gray-800"
            onClick={() => navigate(`/product/${encode}`)}
          >
            {item.name}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-1">
            {item.description}
          </p>
          <span className="text-xs text-gray-600 mt-1">
            Qty: {item?.quantity}
          </span>
        </div>
        {/* <div></div> */}

        <div className="text-rose-500 font-semibold text-sm">
          ₹{item.final_price}
          <span className="pl-2 font-normal text-xs text-gray-500 line-through">
            {item?.price}
          </span>
          <span className="px-2 font-normal text-xs text-gray-500">
            {item?.discount}%
          </span>
        </div>

        <button
          className="px-3 py-1 rounded-md border border-rose-400 text-rose-400 text-xs font-semibold hover:bg-rose-50 cursor-pointer"
          onClick={() => dispatch(RemoveFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ItemCard2;
