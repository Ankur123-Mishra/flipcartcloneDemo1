import React from 'react';
import {createSlice} from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name :"counter",
    initialState : 1,
    reducers: {
        increment(state,action){
            return state + action.payload;

        },
        decreament(state, action){
            return state - action.payload;
        }
    }
})
export const {increment, decreament} = counterSlice.actions;
export default counterSlice.reducer;