import { createSlice } from "@reduxjs/toolkit";

const initialState = { cake: [] };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.cake = action.payload;
    },
    publishedProduct: (state) => {
      return state.cake.filter((cake) => cake.is_publish);
    },
  },
});

export const { setProduct, publishedProduct } = productSlice.actions;
export default productSlice.reducer;
