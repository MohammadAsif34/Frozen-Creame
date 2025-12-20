import React, { useEffect, useState } from "react";
// import Cart from "../../components/cart/Cart";
import { getCartList } from "../../utils/getCartList";
import { setCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../hooks/firebase";
import Cart from "../../components/cart/Cart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [loading, setLoading] = useState(true);
  const cart = useSelector((s) => s.cart.items);
  const u = useSelector((s) => s.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(u);

  useEffect(() => {
    async function loadCart() {
      const user = auth.currentUser;
      if (!user) {
        toast.error("Authenticateion Required");
        navigate(-1);
        return;
      }
      try {
        const items = await getCartList();
        dispatch(setCart(items));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadCart();
  }, []);

  if (loading) return <p>Loading cart...</p>;

  if (!cart.length)
    return (
      <p className="min-h-[50vh] flex justify-center items-center flex-col gap-2">
        <img src="/images/default_cart.png" alt="" className="w-32 aspect-square" />
        <h1 className="font-bold text-2xl text-rose-400">Your cart is empty</h1>
      </p>
    );

  return (
    <>
      <Cart cartItems={cart} />
    </>
  );
};

export default CartPage;
