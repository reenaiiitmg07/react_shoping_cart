import {SET_SIZE} from '../action/index'
export default function setProductSize(state = [], action) {
  switch (action.type) {
  case SET_SIZE:
    return state=[...action.payload]
  default:
    return state
  }
}
