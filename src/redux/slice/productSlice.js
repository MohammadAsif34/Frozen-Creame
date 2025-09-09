import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all_products: [],
  published_products: [],
  archive_prooducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    FetchAllProduct: (state, action) => {
      state.all_products = action.payload;
      state.published_products = action.payload.filter((item) => item.publish);
    },

    AddProduct: (state, action) => {
      console.log("action");
      state.all_products.push(action.payload);
    },

    AddPublishProduct: (state, action) => {
      const p = state.all_products.find((i) => i._id === action.payload);
      if (p) p.publish = true;
      state.published_products.push(p);
    },

    RemovePublishProduct: (state, action) => {
      const p = state.all_products.find((i) => i._id === action.payload);
      if (p) p.publish = false;
      state.published_products = state.published_products.filter(
        (i) => i._id != action.payload
      );
    },
  },
});

export const {
  FetchAllProduct,
  AddProduct,
  AddPublishProduct,
  RemovePublishProduct,
} = productSlice.actions;
export default productSlice.reducer;
