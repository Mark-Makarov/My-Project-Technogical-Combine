import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const toDoAppList = {
    tasks: [
        { title: 'Task 1', completed: false },
        { title: 'Task 2', completed: false },
        { title: 'Task 3', completed: false },
    ],
};

export const toDoAppSlice = createSlice({
    name: 'toDoList',
    initialState: toDoAppList,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ title: action.payload, completed: false });
        },
        completeTask: (state, action) => {
            const task = state.tasks[action.payload];
            task.completed = true;
        },
        removeTask: (state, action) => {
            state.tasks.splice(action.payload, 1);
        },
    },
});



export const { addTask, completeTask, removeTask } = toDoAppSlice.actions;

export default toDoAppSlice.reducer;
