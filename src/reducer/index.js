import { combineReducers } from 'redux';
import Products from './reducer_products';
import SizeData from './size_reducer';
import CartData from './cart_reducer';

const rootReducer = combineReducers({
  products:Products,
  sizedata:SizeData,
  cartdata:CartData
});

export default rootReducer;
