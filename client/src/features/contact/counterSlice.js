import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 42,
  title: "YARC (yet another redux counter with redux toolkit)",
};


export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.data += action.payload;
    },
    decrement: (state, action) => {
      state.data -= action.payload;
    },
  },
});




export const { increment, decrement } = counterSlice.actions;
