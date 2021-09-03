import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import { postCart } from "../features/cart/cartApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage),
  devTools: process.env.NODE_ENV !== "production",
});

// Local Storage middleware. It will check for specific actions to save the state to local storage
function localStorage(store) {
  return (next) => (action) => {
    switch (action.type) {
      case "cart/addItem":
      case "cart/removeItem":
        next(action);
        postCart(store.getState().cart);
        break;
      default:
        next(action);
        break;
    }
  };
}
