import { configureStore, createSlice } from "@reduxjs/toolkit";

// actions and reducer combined
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;

// store
export const store = configureStore({
  reducer: counterSlice.reducer,
});

// index.js
store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
