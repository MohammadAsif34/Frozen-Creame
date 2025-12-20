import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../../hooks/firebase";
import { toast } from "react-toastify";
import { getOrderList } from "../../utils/getOrderList";

const OrderHistory = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadOrder() {
      const user = auth.currentUser;
      if (!user) {
        toast.error("Authenticateion Required");
        navigate(-1);
        return;
      }
      try {
        const items = await getOrderList();
        setOrders(items);
        // dispatch(setCart(items));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadOrder();
  }, []);

  if (loading) return <p>Loading cart...</p>;

  if (!orders.length)
    return (
      <p className="min-h-[50vh] flex justify-center items-center flex-col gap-2">
        <img
          src="/images/default_cart.png"
          alt=""
          className="w-32 aspect-square"
        />
        <h1 className="font-bold text-2xl text-rose-400">Your cart is empty</h1>
      </p>
    );
  return (
    <div>
      {/* {JSON.stringify(orders[0])} */}
      <h2 className="text-xl font-semibold mb-4">Order History</h2>

      {orders?.map((item, idx) => (
        <div
          key={item._id || idx}
          className="bg-whi te p-4 my-2 rounded shadow text-sm bg-rose-50"
        >
          <p>OrderId: {item?.orderId} </p>
          {/* <p>Date: 10 Feb 2025</p> */}
          <p>Status: {item.status}</p>
          <p>Order date: {item.createdAt}</p>
          <p>
            Payment Mode: {item.paymentType == "COD" ? "Cash on delivery" : ""}
          </p>
          <button
            className="hover:underline cursor-pointer"
            onClick={() => navigate("/order", { state: item })}
          >
            view invoice
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
