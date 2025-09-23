// actions.js
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// reducer.js
export function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

// store.js
import { createStore } from "redux";
import { counter } from "./reducer";
export const store = createStore(counter);

// index.js
store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
