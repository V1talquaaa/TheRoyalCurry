import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quantity: 1,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, {payload}) => {
            state.quantity += 1
        },
        decrement: (state, {payload}) => {
            if(state.quantity > 1) {
                state.quantity -= 1
            }
            return;
           
        }
    }

})

export const counterReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
