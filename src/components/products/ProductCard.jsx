import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        <img
          src="/banner/banner-101.png"
          alt="Choco Delight Cake"
          className="w-full h-48 max-sm:h-32 object-cover"
        />
        <div className="p-5 max-sm:p-3">
          <h3 className="text-lg max-sm:text-sm font-bold text-gray-800">
            Choco Delight
          </h3>
          <p className="text-sm max-sm:text-xs text-gray-500 mt-1">
            Rich chocolate layered cake topped with ganache.
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl max-sm:text-sm font-semibold text-rose-400">
              ₹599
            </span>
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
