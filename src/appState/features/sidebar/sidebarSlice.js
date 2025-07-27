import { createSlice } from "@reduxjs/toolkit";
const initialState = { isOpen: false };
export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
