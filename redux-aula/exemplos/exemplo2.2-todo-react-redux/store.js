
import { createStore, combineReducers } from 'redux';


function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
}

const rootReducer = combineReducers({ todos });
export const store = createStore(rootReducer);
