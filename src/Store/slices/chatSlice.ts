import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ChatSlice {
    message: string;
}

const initialState: ChatSlice = {
    message: 'hi'
};

export const chatSlice = createSlice({
    name: 'Chat',
    initialState,
    reducers: {
        sendMessage: (state) => {
            console.log('Message has been send')
        },
        receiveMessage: (state) => {
            console.log('Message has been received')
        }
    },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;

export const selectChat = (state: RootState) => state.chat;

export default chatSlice.reducer;