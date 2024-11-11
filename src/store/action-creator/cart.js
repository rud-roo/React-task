export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  }
}

export const removeAnItemFromCart =  (productId) => {
  return{
    type: "REMOVE_ITEM_FROM_CART",
    payload: productId
  }
}

export const modifyQuantityOfAnItem = (obj) => {
  return {
    type: "MODIFY_QUANTITY_OF_AN_ITEM",
    payload: obj,
  }
}

export const clearCart = () => {
  return {
    type: "CLEAR_CART"
  }
}