import { configureStore } from "@reduxjs/toolkit";
// import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import counterReducer from "./quantitySlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        counter: counterReducer
    }
})
export default store;