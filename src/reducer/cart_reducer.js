import {SET_CART} from '../action/index'
export default function setProductCart(state = [], action) {
  console.log(action);
  switch (action.type) {
  case SET_CART:
    return state=[...action.payload]
  default:
    return state
  }
}
