import {configureStore, createSlice} from "@reduxjs/toolkit";
import {counterSlice} from "../Store/slices/counter";



export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,


    },
})