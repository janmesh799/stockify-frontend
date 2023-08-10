import { configureStore } from "@reduxjs/toolkit";
import stockSlice from "./stock/stockSlice";
import authSlice from "./auth/authSlice"

const store = configureStore({
    reducer: {
        auth:authSlice,
        stock: stockSlice
    },
});

export default store;
