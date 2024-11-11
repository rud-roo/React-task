// import { createStore, combineReducers } from 'redux'
// import { counterReducer } from './reducer/counter';
// import { cartReducer } from './reducer/cart';
// import { composeWithDevTools } from '@redux-devtools/extension';

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from './reducer/counter';
import cartSlice from "./reducer/cart";

const rootReducer = {
  counter: counterReducer,
  cart: cartSlice.reducer,
}

export const store = configureStore({
  reducer: rootReducer
});