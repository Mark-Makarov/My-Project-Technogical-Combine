import {configureStore, createSlice} from "@reduxjs/toolkit";
import {counterSlice} from "../Store/slices/counter";
import {counterSlice1} from "../Store/slices/counter1";


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        counter1: counterSlice1.reducer,

    },
})