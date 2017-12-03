import { ADD_TO_CART, DELETE_CART } from '../constants';

export const addToCart = (param) => ({
  type: ADD_TO_CART,
  id: param
})

export const deleteCart = (param) => ({
  type: DELETE_CART,
  id: param
})
