import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CounterState {
    value: number,
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice1 = createSlice({
    name: 'counter1',
    initialState,
    reducers: {
        increment1: (state) => {
            state.value += 1;
        },
        decrement1: (state) => {
            state.value -= 1;
        },
        incrementByAmount1: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
});


// Action creators are generated for each case reducer function
export const { increment1, decrement1, incrementByAmount1 } = counterSlice1.actions;

export const selectCount = (state: RootState) => state.counter1.value

export default counterSlice1.reducer;
