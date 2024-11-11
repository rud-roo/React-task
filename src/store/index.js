import { createStore, combineReducers } from 'redux'
import { counterReducer } from './reducer/counter';
import { cartReducer } from './reducer/cart';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer
})

export const store = createStore(rootReducer, composeWithDevTools());