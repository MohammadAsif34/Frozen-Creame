import { createSlice } from "@reduxjs/toolkit";
const initialState = { isOpen: false, cartItem: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ToggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    AddToCart: (state, actions) => {
      state.cartItem.push = actions.payload;
    },
    RemoveFromCart: (state, actions) => {
      return state.cartItem.at(actions.payload);
    },
  },
});

export const { ToggleCart, AddToCart, RemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;
