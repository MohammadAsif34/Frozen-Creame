import React from "react";

const ProductCard = ({ item }) => {
  if (!item) {
    // console.log(item);
    return;
  }
  return (
    <>
      <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        <img
          src={`${item?.picture}?auto=compress&cs=tinysrgb&w=800&dpr=2`}
          // "/banner/banner-101.png"

          alt="Choco Delight Cake"
          className="w-full h-48 max-sm:h-32 object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="p-5 max-sm:p-3">
          {/* product name  */}
          <h3 className="text-lg max-sm:text-sm font-bold text-gray-800">
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
            <button className="px-4 max-sm:px-2 py-1 bg-rose-400 text-white text-sm max-sm:text-xs font-medium rounded-md hover:bg-rose-500 transition cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
