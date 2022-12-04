import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import cartSlice from "./cartSlice";

export default configureStore({
    reducer: {
        app: bookSlice,
        cart: cartSlice,
    },
})