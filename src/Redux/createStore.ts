import {configureStore, createSlice} from "@reduxjs/toolkit";
import {counterSlice} from "../Store/slices/counter";
import {toDoAppSlice} from "../Store/slices/toDoAppSlice";



export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        toDoApp: toDoAppSlice.reducer,
    },
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch