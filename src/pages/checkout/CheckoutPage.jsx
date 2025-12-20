import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../../hooks/firebase";
import { toast } from "react-toastify";
import { getCartList } from "../../utils/getCartList";
import AddressForm from "../../components/component/AddressForm";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { encodeObject } from "../../utils/encodeDecode";

const CheckoutPage = () => {
  const [address, setAddress] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    flat: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location?.state;

  console.log("cartItems :: ", cartItems);
  const subtotal = cartItems?.reduce(
    (sum, item) => sum + item.pricing.basePrice * item.quantity,
    0
  );

  const platformFee = 9;
  const deliveryFee = subtotal > 599 ? 0 : 50;
  const totalAmount = subtotal + deliveryFee + discount + platformFee;

  // 🔹 Place Order
  const handlePlaceOrder = async () => {
    const user = auth.currentUser;
    if (!user) return toast.error("Login required");

    if (
      !address.fullName ||
      !address.phoneNumber ||
      !address.address ||
      !address.pincode
    ) {
      return toast.error("Fill all delivery details");
    }

    let payload = {
      userId: user.uid,
      cartItems: cartItems,
      address: address,
      subtotal,
      discount,
      deliveryFee,
      platformFee,
      totalAmount,
      status: "PENDING",
      createdAt: new Date().toISOString(),
    };

    const link = `/checkout/payment/${user.uid}`;
    navigate(link, { state: payload });
  };

  if (loading) return <p>Loading checkout...</p>;

  return (
    <div className="checkout py-10 px-[10%] flex flex-col md:flex-row gap-6">
      <section className=" flex-1 ">
        <h1 className="text-xl font-medium py-3">Checkout</h1>
        {/* Delivery Details */}
        <AddressForm address={address} setAddress={setAddress} />
      </section>

      {/* Order Summary */}
      <section className="mt-8 px-2 flex-1">
        <h1 className="text-xl font-medium ">Item Details</h1>
        <div className="my-2 bg-gray-100 rounded-xl">
          <h1 className="w-full px-4 py-2 bor der grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-b-gray-300">
            <strong>Name</strong>
            <strong className="text-center">Type</strong>
            <strong className="text-center">Qty</strong>
            <strong className="text-center">Price</strong>
          </h1>
          {cartItems?.map((item) => (
            <div
              key={item.productId}
              className="w-full px-4 py-2 bor der grid grid-cols-[2fr_1fr_1fr_1fr]"
            >
              <p className="truncate">{item.name}</p>
              <p className="text-center capitalize">{item.type}</p>
              <p className="text-center">{item.quantity}</p>
              <p className="text-center">
                ₹{item.pricing.basePrice * item.quantity}
              </p>
            </div>
          ))}
        </div>
        <h1 className="text-xl font-medium ">Order Summary</h1>
        <div className="my-2 px-4 bg-gray-100 rounded-xl">
          <p className="py-2 px-4">
            <strong>Subtotal:</strong>{" "}
            <span className="float-end"> ₹{subtotal}</span>
          </p>
          <p className="py-2 px-4">
            <strong>Discount:</strong>{" "}
            <span className="float-end"> ₹{discount}</span>
          </p>
          <p className="py-2 px-4">
            <strong>Delivery:</strong>{" "}
            <span className="float-end"> ₹{deliveryFee}</span>
          </p>
          <p className="py-2 px-4 text-xs">
            <strong>Platform & Handling fee:</strong>
            <span className="float-end"> ₹{platformFee}</span>
          </p>
          <p className="py-2 px-4">
            <strong>Total:</strong>{" "}
            <span className="float-end"> ₹{totalAmount}</span>
          </p>
        </div>
        <button
          onClick={handlePlaceOrder}
          className="w-full py-2 my-4 text-white  rounded-md bg-rose-500 cursor-pointer hover:bg-rose-600"
        >
          Place Order
        </button>
      </section>
    </div>
  );
};

export default CheckoutPage;
