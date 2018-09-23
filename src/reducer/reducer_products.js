import {SET_DATA} from '../action/index'
export default function setProductData(state = [], action) {
  switch (action.type) {
  case SET_DATA:
    return state=[...action.payload]
  default:
    return state
  }
}
