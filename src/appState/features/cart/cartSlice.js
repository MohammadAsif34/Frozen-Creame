import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  isOpen: false,
  cartItem: [],
  totalPrice: 0,
  finalPrice: 0,
  discount: 0,
  otherCharges: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ToggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    AddToCart: (state, actions) => {
      try {
        const exist = state.cartItem.find(
          (item) => item.id == actions.payload.id
        );
        if (!exist) {
          state.cartItem.push(actions.payload);
          state.totalPrice = state.totalPrice + actions.payload.price;
          toast.success("Added to cart");
        } else {
          toast.info("Already added");
        }
      } catch (error) {
        toast.error("failed! adding to cart");
      }
    },
    RemoveFromCart: (state, actions) => {
      try {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== actions.payload
        );
        toast.success("Removed from cart");
      } catch (error) {
        toast.error("failed! removing from cart");
      }
    },
    FinalPrice: (state) => {
      state.finalPrice = state.cartItem.reduce(
        (item, finalPrice) => finalPrice + item.price
      );
    },
  },
});

export const { ToggleCart, AddToCart, RemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;
