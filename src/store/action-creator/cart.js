// export const addToCart = (product) => {
//   return {
//     type: "ADD_TO_CART",
//     payload: product,
//   }
// }

// export const removeAnItemFromCart =  (productId) => {
//   return{
//     type: "REMOVE_ITEM_FROM_CART",
//     payload: productId
//   }
// }

// export const modifyQuantityOfAnItem = (obj) => {
//   return {
//     type: "MODIFY_QUANTITY_OF_AN_ITEM",
//     payload: obj,
//   }
// }

// export const clearCart = () => {
//   return {
//     type: "CLEAR_CART"
//   }
// }



// import { createAction } from "@reduxjs/toolkit";

// export const addToCart = createAction("ADD_TO_CART");
// export const removeAnItemFromCart = createAction("REMOVE_ITEM_FROM_CART");
// export const modifyQuantityOfAnItem = createAction("MODIFY_QUANTITY_OF_AN_ITEM");
// export const clearCart = createAction("CLEAR_CART");

import {
  addToCart,
  removeAnItemFromCart,
  modifyQuantityOfAnItem,
  clearCart
} from '../reducer/cart'

export {addToCart, removeAnItemFromCart, modifyQuantityOfAnItem, clearCart}