import React from "react";
import { useDispatch } from "react-redux";
import { AddToFavorite } from "../../appState/features/favorite/favoriteSlice";
import { AddToCart } from "../../appState/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!item) {
    // console.log(item);
    return;
  }
  return (
    <>
      <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        <div
          className="relative group"
          onClick={() => navigate(`/product/${item.name}/${item.id}`)}
        >
          <img
            src={`${item?.picture}?auto=compress&cs=tinysrgb&w=800&dpr=2`}
            // "/banner/banner-101.png"

            alt="Choco Delight Cake"
            className=" w-full h-48 max-sm:h-32 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
            loading="lazy"
            decoding="async"
          />
          <span
            className="group-hover:block  absolute top-2 right-2 px-1.5 py-1 rounded-full text-lg text-rose-400 hover: bg-rose-100 group]: "
            onClick={() => dispatch(AddToFavorite(item))}
          >
            <i className="fa-regular fa-heart translate-y-0.5 "></i>
            {/* <i className="bi bi-heart"></i> */}
          </span>
        </div>
        <div className="p-5 max-sm:p-3">
          {/* product name  */}
          <h3
            className="text-lg max-sm:text-sm font-bold text-gray-800"
            onClick={() => navigate(`/product/${item.name}/${item.id}`)}
          >
            {item?.name}
          </h3>
          {/* product description  */}
          <p className="text-sm max-sm:text-xs text-gray-500 mt-1">
            {item?.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            {/* product price  */}
            <div className="flex items-end">
              <span className="text-xl max-sm:text-sm font-semibold text-rose-400">
                <i className="bi bi-currency-rupee"></i>
                {item?.price}
              </span>
              <div className="px-2 text-xs">
                <i className="fa-solid fa-tags mr-1 text-gray-500"></i>
                {item?.discount_percent}%
                {/* <i className="fa-solid fa-percent"></i> */}
              </div>
            </div>
            {/* <span>
              <i className="bi bi-heart text-rose-500"></i>
            </span> */}
            <button
              className="px-4 max-sm:px-2 py-1 whitespace-nowrap bg-rose-400 text-white text-sm max-sm:text-xs font-medium rounded-md hover:bg-rose-500 transition cursor-pointer"
              onClick={() => dispatch(AddToCart(item))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
