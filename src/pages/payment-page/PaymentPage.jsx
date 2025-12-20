import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { orderPlaceCOD } from "../../utils/orderFunction";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const orderSummary = location?.state; 

  const handlePayment = async () => {
    try {
      setLoading(true);
      if (paymentMethod === "COD") {
        const orderPlace = await orderPlaceCOD({
          ...orderSummary,
          orderId: "FK-ORDER-" + Date.now(),
        });
        if (orderPlace == "order Placed") {
          toast.success(orderPlace);
          navigate("/");
        } else toast.warn(orderPlace);
      } else {
        toast.warn("Payment Gateway Integration Under Development");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <div className="max-w-xl   mx-auto p-6 border border-gray-200 rounded-xl shadow">
        <h1 className="text-2xl font-semibold mb-4">Payment</h1>

        {/* Order Summary */}
        <div className="mb-4 border border-gray-200 p-4 rounded bg-gray-100">
          <h2 className="font-medium mb-2">Order Summary</h2>
          <p>
            Items:
            <span className="float-end"> {orderSummary?.cartItems.length}</span>
          </p>
          <p>
            Subtotal:
            <span className="float-end"> ₹{orderSummary?.subtotal}</span>
          </p>
          <p>
            Discount:
            <span className="float-end"> ₹{orderSummary?.discount}</span>
          </p>
          <p>
            Delivery:
            <span className="float-end"> ₹{orderSummary?.deliveryFee}</span>
          </p>
          <p>
            Platform & Handling fee:
            <span className="float-end"> ₹{orderSummary?.platformFee}</span>
          </p>
          <h3 className="font-semibold mt-2 py-2 border-t border-gray-300">
            Payable Amount:
            <span className="float-end">₹{orderSummary?.totalAmount}</span>
          </h3>
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <h2 className="font-medium mb-2">Payment Method</h2>

          <label className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              name="payment"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={() => setPaymentMethod("COD")}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2 ">
            <input
              type="radio"
              name="payment"
              value="ONLINE"
              checked={paymentMethod === "COD"}
              onChange={() => setPaymentMethod("ONLINE")}
            />
            Online Payment (Coming Soon)
          </label>
        </div>

        {/* Action */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
