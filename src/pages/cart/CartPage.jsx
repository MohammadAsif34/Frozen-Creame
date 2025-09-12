import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemCard2 from "../../components/products/ItemCard2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { cartItem } from "../dataSets/cartItem";
// import { useUser } from "../contexts/CreateContext";
// import ItemCard2 from "../../components/products/ItemCard2";

const CartPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const cart = useSelector((s) => s.cart.cartItem);

  useEffect(() => {
    const final_price = cart.reduce(
      (sum, item) => sum + item?.final_price * item?.quntity,
      0
    );
  }, [cart]);

  if (cart.length == 0)
    return (
      <div className=" flex  justify-center">
        <img src="/default/empty_item.png" alt="" />
      </div>
    );
  return (
    <div className="px-[10%]  gap-x-20 relative">
      <button
        className="text-neutral-400 py-1 mt-2 cursor-pointer"
        onClick={() => window.history.back()}
      >
        <i className="bi bi-arrow-left mr-2"></i>
        Back
      </button>
      {/* cart items  */}

      <div className="flex-2/3  text-gray-500 ">
        <h1 className=" mt-5 text-3xl font-semibold">
          Your Cart <span className="px-4 text-sm"> ({5} items)</span>
        </h1>
        <div className=" px-2 mt-5 rounded-md shadow-sm  bg-gray-50">
          <div className="py-2 text-md font-semibold capitalize grid grid-cols-[1fr_3fr_1fr_1fr] gap-5">
            <h1>product</h1>
            <h3>Item</h3>
            <p>Qty: 1</p>
            <p className="text-center">Price</p>
          </div>
          <div className="pb-2 px-4 flex flex-col gap-2">
            {cart?.map((item, idx) => (
              <ItemCard2 key={item?.id || idx} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* cart checkout  */}
      <CartCheckout />
    </div>
  );
};

export default CartPage;

const CartCheckout = ({ discount = 0 }) => {
  const [price, setPrice] = useState({
    price: 0,
    discount: discount,
    charge: 39,
    finalPrice: 0,
  });
  const navigate = useNavigate();
  const cart = useSelector((s) => s.cart.cartItem);

  useEffect(() => {
    const totalPrice = cart.reduce((sum, item) => sum + item?.final_price, 0);

    const finalPrice =
      totalPrice + (totalPrice * 5) / 100 - (totalPrice * discount) / 100;

    setPrice({
      price: totalPrice,
      discount: discount,
      charge: (totalPrice * 5) / 100,
      finalPrice: finalPrice,
    });
  }, [cart, discount, price.charge]);

  return (
    <>
      <div className=" flex gap-10 py-18 max-lg:flex-col ">
        <div className="flex-1">
          <form className="flex gap-2 p-1 border-2 border-gray-300 rounded-lg">
            <input
              type="text"
              className="w-full h-8 px-4 outline-none text-gray-400"
              placeholder="Enter Coupon Code"
            />
            <button className="px-6 bg-rose-400 text-white rounded-lg hover:bg-rose-500 cursor-pointer transition">
              Apply
            </button>
          </form>
        </div>
        <div className=" flex-1  px-4 py-6 bg-gray-100 rounded-xl text-gray-500">
          {/* <div className="px-4 pb-2 capitalize text-xl text-gray-500 border-b border-gray-300"> */}
          <h1 className="px-4  pb-2 ">
            <span className="text-xl capitalize">your cart : </span>
            {cart?.length} {cart.length && " item"}
          </h1>
          {/* </div> */}
          <div className="px-4 py-1.5 my-2 flex justify-between">
            <p>{`Price (${cart?.length} items):`}</p>
            <span>{price?.price}</span>
          </div>
          <div className="px-4 py-1.5 my-2 flex justify-between">
            <p>{`Discount:   5%`}</p>
            <span>{price?.discount}</span>
          </div>
          <div className="px-4 py-1.5 my-2 flex justify-between">
            <p>{`Other charges:   5%`}</p>
            <span>{price?.charge}</span>
          </div>
          <div className=" my-3 px-4 py-1.5  flex justify-between border-y border-gray-300 text-xl">
            <p>Total Amount</p>
            <span>{price?.finalPrice}</span>
          </div>
          <div className="px-10">
            <button
              className="w-full py-1.5 mt-5 border rounded-full text-white bg-rose-400 hover:bg-rose-500 transition duration-300 cursor-pointer"
              onClick={() => toast.warn("Under development")}
            >
              Proceed to Payment
            </button>
            <button
              className="w-full py-1.5 mt-5 border border-rose-400 rounded-full text-rose-400 hover:bg-rose-200 transition duration-300 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Continue Shopping
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
