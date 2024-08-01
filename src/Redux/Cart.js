import { configureStore } from "@reduxjs/toolkit";
import cartData from './CartSlice'

const store = configureStore({
    reducer: {
        cart: cartData,
    }
})

export default store;