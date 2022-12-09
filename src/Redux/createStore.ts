import {configureStore, createSlice} from "@reduxjs/toolkit";
import {counterSlice} from "../Store/slices/counter";
import {toDoAppSlice} from "../Store/slices/toDoAppSlice";



export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        toDoApp: toDoAppSlice.reducer,
    },
})