import React from "react";

const OrderHistory = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Order History</h2>

      <div className="bg-white p-4 rounded shadow text-sm">
        <p>Order #FK1023 – Chocolate Cake – ₹799</p>
        <p>Status: Delivered</p>
        <p>Date: 10 Feb 2025</p>
      </div>
    </div>
  );
};

export default OrderHistory;
