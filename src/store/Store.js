import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice.js";
import productReducer from "./ProductSlice.js";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
