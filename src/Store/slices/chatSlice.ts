import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ChatSlice {
    messages: {
        uid: string,
        createdAt: string,
        text: string,
        photoURL: string,
    }[],
}

const initialState: ChatSlice = {
    messages: [],
};

export const chatSlice = createSlice({
    name: 'Chat',
    initialState,
    reducers: {
        getMessages: (state, action) => {
            state.messages = action.payload
        },
    },
});

export const { getMessages } = chatSlice.actions;

export const selectChat = (state: RootState) => state.chat;

export default chatSlice.reducer;