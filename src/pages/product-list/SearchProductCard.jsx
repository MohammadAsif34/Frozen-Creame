import React from "react";
// import axios from "axios";
// import Cookies from "js-cookie";

const SearchProductCard = ({ product }) => {
  const addToCart = async (e) => {
    e.preventDefault();
    // try {
    //   const api = "http://localhost:8800/me/add-to-cart";
    //   const token = Cookies.get("token");
    //   console.log("token ::", token);
    //   const res = await axios.post(
    //     api,
    //     { productId: product?._id },
    //     {
    //       headers: { Authorization: `Bearer ${token}` },
    //     }
    //   );

    //   console.log(res.data);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <>
      <div className=" my-3 pt-2 pb-4 border-b-2 border-rose-200 flex gap-x-10">
        {/* <Link></Link> */}
        <div className="min-w-54 max-w-64 aspect-3/2  rounded-xl overflow-hidden ">
          <img
            src={product?.picture}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div>
          {/* product name  */}
          <h1 className="text-2xl text-gray-700">
            {product?.name || "Product Name"}
            <span className="cursor-pointer">
              <i className="bi bi-heart mx-2 text-rose-300 text-lg"></i>
            </span>
          </h1>

          {/* product description  */}
          <p className="my-3 w-2/3 text-gray-400">
            {product?.description || "description"}
          </p>
          {/* product deliver description  */}
          <div className="flex items-center">
            <span className="text-sm text-gray-500">
              Allergens
              <i className="bi bi-info-circle mx-2"></i>
            </span>
            <title>this allergens title</title>
            <div>
              <span className="px-2 text-rose-500">
                <i className="bi bi-truck mx-2"></i>
                Get it by {"2 jul"}
              </span>
              <span className="px-2 text-green-600 font-semibold">
                Order in {"2h 23min"}
              </span>
            </div>
          </div>
          <div className="my-4 flex gap-x-30">
            <p className="text-xl font-semibold text-rose-400">
              ₹599
              <span className="ml-3 text-xs  text-gray-400 font-normal capitalize">
                discount: {product?.discount_percent}%
              </span>
            </p>
            <button
              type="button"
              className="px-8  py-1 rounded-lg text-white bg-rose-400 hover:bg-rose-500 transition duration-500 cursor-pointer"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProductCard;
