import React from "react";
import { useDispatch } from "react-redux";
import { AddToFavorite } from "../../appState/features/favorite/favoriteSlice";
import { AddToCart } from "../../appState/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!item) {
    return;
  }
  const encode = btoa(item.sku);
  console.log(encode);

  return (
    <>
      <div className="min-w-2xs border border-gray-300 flex-1 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-default">
        <div
          className="relative group"
          onClick={() => navigate(`/product/${encode}`)}
        >
          <img
            src={`${item?.picture}?auto=compress&cs=tinysrgb&w=800&dpr=2`}
            // "/banner/banner-101.png"

            alt="Choco Delight Cake"
            className=" w-full h-48 bg-gray-200 max-sm:h-32 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
            loading="lazy"
            decoding="async"
          />
          <span
            className="w-8 h-8 group-hover:block  absolute top-2 right-2  rounded-full text-lg text-rose-400 hover: bg-white cursor-pointer "
            onClick={() => dispatch(AddToFavorite(item))}
          >
            <i className="fa-regular fa-heart translate-1 "></i>
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
          <p className="text-sm max-sm:text-xs text-gray-500 pt-2">
            {`${item?.flavour} • ${item?.tags[0]}`}
          </p>

          <div className="mt-4 flex items-center justify-between">
            {/* product price  */}
            <div className="flex items-end">
              <span className="text-xl max-sm:text-sm font-semibold text-rose-400">
                <i className="bi bi-currency-rupee"></i>
                {item?.final_price}
              </span>
              <div className="px-2 text-xs text-gray-500">
                <span className="px-2 line-through italic">
                  {" "}
                  {item?.price}{" "}
                </span>
                <i className="fa-solid fa-tags mr-1 "></i>
                {item?.discount}%{/* <i className="fa-solid fa-percent"></i> */}
              </div>
            </div>

            <button
              className="px-2  max-sm:px-2 py-1 whitespace-nowrap bg-rose-400 text-white text-lg max-sm:text-xs font-medium rounded-md hover:bg-rose-500 transition cursor-pointer"
              onClick={() => dispatch(AddToCart(item))}
            >
              <i className="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
