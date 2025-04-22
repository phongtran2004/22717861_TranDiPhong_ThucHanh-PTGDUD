import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"
import todoReducer from "./features/todoSlice"
import shoppingReducer from "./features/shoppingSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        shopping: shoppingReducer
    }
})