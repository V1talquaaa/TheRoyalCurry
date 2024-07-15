import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [];



export const cardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addCard: (state, {payload}) => {
            state.push(payload)
        },
        removeCard: (state, {payload}) => {
            const index = state.findIndex(cart => cart.id === payload);
            if (index !== -1) {
                console.log(index)
                state.splice(index, 1);
            }
        }
    }
})

export const cardReducer = cardSlice.reducer;
export const {addCard, removeCard} = cardSlice.actions;