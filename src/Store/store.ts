import counterReducer from './slices/counter';
import toDoAppReducer from './slices/toDoAppSlice'
import chatReducer from './slices/chatSlice'
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
    counter: counterReducer,
    toDoApp: toDoAppReducer,
    chat: chatReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch