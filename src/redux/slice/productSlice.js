import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      try {
        if (Array.isArray(action.payload)) {
          return action.payload;
        } else {
          console.warn("action payload is not array ");
        }
      } catch (error) {
        console.error("setProduct error :", error);
      }
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
