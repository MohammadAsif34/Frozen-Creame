import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = { isOpen: false, favoriteItem: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    ToggleFavorite: (state) => {
      state.isOpen = !state.isOpen;
    },
    AddToFavorite: (state, actions) => {
      try {
        const exist = state.favoriteItem.find(
          (item) => item.id == actions.payload?.id
        );
        if (!exist) {
          state.favoriteItem.push(actions.payload);
          toast.success("Added to favorite");
        } else {
          toast.info("Already Added ");
        }
      } catch (error) {
        toast.error("failed! Adding to favorite");
      }
    },
    RemoveFromFavorite: (state, actions) => {
      try {
        state.favoriteItem = state.favoriteItem.filter(
          (item) => item.id !== actions.payload
        );
        toast.success("Removed from favorite");
      } catch (error) {
        toast.error("failed! Removing from favorite");
      }
    },
  },
});

export const { ToggleFavorite, AddToFavorite, RemoveFromFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
