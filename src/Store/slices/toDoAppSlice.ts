import { createSlice } from "@reduxjs/toolkit";
import {RootState} from "../store";

const toDoApp = {
    tasks: [
        { title: 'Task 1', completed: false },
        { title: 'Task 2', completed: false },
        { title: 'Task 3', completed: false },
    ],
};

export const toDoAppSlice = createSlice({
    name: 'toDoApp',
    initialState: toDoApp,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ title: action.payload.title, completed: false });
        },
        completeTask: (state, action) => {
            const tasks = [...state.tasks];
            const task = tasks[action.payload.index];
            tasks[action.payload.index] = { ...task, completed: true };
            return { ...state, tasks };
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task, index) => index !== action.payload.index);
        },
    },
});



export const { addTask, completeTask, removeTask } = toDoAppSlice.actions;

export const selectToDoApp = (state: RootState) => state.toDoApp;

export default toDoAppSlice.reducer;
