import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, favoriteItem: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    ToggleFavorite: (state) => {
      state.isOpen = !state.isOpen;
    },
    AddToFavorite: (state, actions) => {
      state.cartItem.push = actions.payload;
    },
    RemoveFromFavorite: (state, actions) => {
      return state.cartItem.at(actions.payload);
    },
  },
});

export const { ToggleFavorite, AddToFavorite, RemoveFromFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
