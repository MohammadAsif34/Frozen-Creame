import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    list: [],
  },
  reducers: {
    setOrders: (state, action) => {
      state.list = action.payload;
    },
    addOrder: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { setOrders, addOrder } = orderSlice.actions;
export default orderSlice.reducer;
