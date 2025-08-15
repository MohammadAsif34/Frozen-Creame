import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import sidebarReducer from "../features/sidebar/sidebarSlice";
import cartReducer from "../features/cart/cartSlice";
import favoriteReducer from "../features/favorite/favoriteSlice";
const configPersist = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  cart: cartReducer,
  favorite: favoriteReducer,
});

const persistedReducer = persistReducer(configPersist, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
