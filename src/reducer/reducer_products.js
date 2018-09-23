import {SET_DATA} from '../action/index'
export default function setProductData(state = [], action) {
	console.log(action)
  switch (action.type) {
  case SET_DATA:
    return state=[...action.payload]
  default:
    return state
  }
}
