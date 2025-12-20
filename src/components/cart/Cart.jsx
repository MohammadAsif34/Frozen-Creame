import { Cake, Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { updateCart } from "../../utils/cartFuntion";

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const subtotal = 456;
  const subtotal = cartItems?.reduce(
    (sum, item) => sum + item.pricing.basePrice * item.quantity,
    0
  );
  const deliveryFee = subtotal > 999 ? 0 : 50;
  const [discount, setDiscount] = useState(0);
  const total = subtotal + deliveryFee;

  const handleIncrease = (cakeId, qty) => {
    if (qty <= 3) {
      try {
        updateCart(cakeId, "increase");
        dispatch(updateQuantity({ id: cakeId, type: "increase" }));
        toast.success("Quantity updated");
      } catch (err) {
        toast.error(err.message || "Error found");
      }
    } else {
      toast.warn("Reached Max Quntity");
    }
    console.log(cartItems);
  };

  const handleDecrease = (cakeId, qty) => {
    if (qty > 1) {
      updateCart(cakeId, "decrease");
      dispatch(updateQuantity({ id: cakeId, type: "decrease" }));
      toast.success("Quantity updated");
    } else {
      updateCart(cakeId, "delete");
      dispatch(removeFromCart(cakeId));
      toast.success("Item removed");
    }
  };

  const handleDelete = (cakeId) => {
    updateCart(cakeId, "delete");
    dispatch(removeFromCart(cakeId));
    toast.success("Item removed");
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: cartItems });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-pink-700 mb-8">Your Cart</h1>

        {!cartItems?.length > 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 bg-rose-50 p-4 rounded-xl shadow"
                >
                  <img
                    src={"/images/default_cake.png"}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-lg"
                  />

                  <div className="flex-1 flex flex-col gap-1 ">
                    <div className="flex justify-between ">
                      <h3 className="font-semibold text-xl">{item.name}</h3>
                      <strong className=" text-lg text-rose-400">
                        ₹{item.pricing.basePrice * item.quantity}
                      </strong>
                    </div>
                    <p className="text-gray-500">{item.description}</p>

                    <div className="flex items-center justify-between gap-4 mt-3">
                      <strong className="text-gray-600">
                        ₹{item.pricing.basePrice}
                      </strong>
                      <div className="flex items-center">
                        <strong className="text-sm">Qty:</strong>
                        <p className="ml-4 border border-gray-400 rounded-full flex overflow-hidden">
                          <button
                            className="px-2 hover:bg-rose-200"
                            onClick={() =>
                              handleDecrease(item._id, item.quantity)
                            }
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 py-1  rounded">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2 hover:bg-rose-200"
                            onClick={() =>
                              handleIncrease(item._id, item.quantity)
                            }
                          >
                            <Plus size={16} />
                          </button>
                        </p>
                      </div>
                      <p className="text-xs">
                        {item.weight && (
                          <>
                            <strong>Weight:</strong>
                            <span className="px-2">{item?.weight}</span>
                            <i>pound</i>
                          </>
                        )}
                      </p>
                      <button
                        className="text-sm text-red-500 cursor-pointer"
                        onClick={() => handleDelete(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-rose-50 p-6 rounded-xl shadow h-fit sticky top-20">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
                </div>

                <hr className="border-gray-300" />

                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <button
                className="w-full block text-center mt-6 bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition cursor-pointer"
                onClick={() => handleCheckout()}
              >
                Proceed to Checkout
              </button>
              <Link
                to={"/cakes"}
                className="w-full block text-center mt-6 border text-rose-500 py-3 rounded-lg font-semibold hover:bg-rose-200 transition cursor-pointer"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
