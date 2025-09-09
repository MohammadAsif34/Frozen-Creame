import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      // if (action.payload == null) state.isAuth = false;
      state.isAuth = true;
      state.data = action.payload;
    },
    UnsetUser: (state) => {
      state.isAuth = false;
      state.data = null;
      
    },
  },
});

export const { setUser, UnsetUser } = userSlice.actions;
export default userSlice.reducer;
