import { createStore, combineReducers, applyMiddleware } from 'redux'
import { counterReducer } from './reducer/counter';
import { cartReducer } from './reducer/cart';
import { composeWithDevTools } from '@redux-devtools/extension';
// import { outMiddleWear } from './middlewares';
import { postReducer } from './reducer/post';
import { userReducer } from './reducer/user';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  post: postReducer,
  user: userReducer,
})

export const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

// import { configureStore } from "@reduxjs/toolkit";
// import { counterReducer } from './reducer/counter';
// import cartSlice from "./reducer/cart";

// const rootReducer = {
//   counter: counterReducer,
//   cart: cartSlice.reducer,
// }

// export const store = configureStore({
//   reducer: rootReducer
// });