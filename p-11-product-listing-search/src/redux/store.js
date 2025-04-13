import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../features/cart/cartSlice";
import cartReducer from "./feature/cart/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
