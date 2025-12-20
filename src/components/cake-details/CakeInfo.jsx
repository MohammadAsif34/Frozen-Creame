import React, { useState } from "react";
import TrendingCakes from "../home-page/TrendingCakes";
import { toast } from "react-toastify";
import { AddToCart } from "../../utils/cartFuntion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const CakeInfo = ({ cake }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(null);

  const dispatch = useDispatch();

  const handleAddtoCart = async () => {
    setLoading(true);
    try {
      if (!selectedWeight) {
        toast.error("Please select cake weight");
        return;
      }
      const res = await AddToCart({ ...cake, weight: selectedWeight });
      if (res == "User not Authenticted") toast.error(res);
      else {
        dispatch(addToCart({ cake, weight: selectedWeight }));
        toast.success(res);
      }
    } catch (error) {
      console.error("Add to cart failed:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const handleBuynow = () => {
    if (!selectedWeight) {
      toast.error("Please select cake weight");
      return;
    }
    navigate("/checkout", {
      state: [{ ...cake, quantity: 1, weight: selectedWeight }],
    });
  };

  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Cake Image */}
          <div>
            <img
              src={"/images/default_cake.png"}
              alt={cake.name}
              className="w-full h-100 object-cover rounded-xl shadow"
            />
          </div>

          {/* Cake Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-rose-600">
              {cake.name}
            </h1>

            <p className="text-2xl font-semibold text-gray-800 mt-4">
              ₹{cake.pricing.basePrice}
            </p>

            <p className="text-gray-700 mt-6 leading-relaxed">
              {cake.description}
            </p>

            {/* Weight Selection */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">
                Select Weight <span className="text-red-500">*</span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {[0.5, 1, 1.5, 2, 3, 4].map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setSelectedWeight(w)}
                    className={`px-6 py-2 border rounded-lg transition whitespace-nowrap
          ${
            selectedWeight === w
              ? "border-pink-600 bg-rose-50 text-rose-500"
              : "hover:border-rose-500 hover:text-rose-500"
          }`}
                  >
                    <strong className="px-2">{w}</strong>
                    <i>pound</i>
                  </button>
                ))}
              </div>

              {!selectedWeight && (
                <p className="text-sm text-red-500 mt-2">
                  Please select a weight before adding to cart
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Cake Message (Optional)</h3>
              <input
                type="text"
                placeholder="Happy Birthday!"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              <button
                className="px-6 py-3 bg-rose-500 text-white rounded-lg font-semibold hover:bg-rose-600 transition cursor-pointer"
                onClick={() => handleAddtoCart()}
              >
                {loading ? "Adding..." : " Add to Cart"}
              </button>

              <button
                className="px-6 py-3 border  text-rose-500 rounded-lg font-semibold hover:bg-rose-300 transition cursor-pointer"
                onClick={() => handleBuynow()}
              >
                Buy Now
              </button>
            </div>

            {/* Extra Info */}
            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p>✔ Same-day delivery available</p>
              <p>✔ Freshly baked on order</p>
              <p>✔ Hygienic packaging</p>
            </div>
          </div>
        </div>
      </div>
      <TrendingCakes />
    </>
  );
};

export default CakeInfo;
