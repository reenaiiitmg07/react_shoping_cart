import { combineReducers } from 'redux';
import Products from './reducer_products';


const rootReducer = combineReducers({
  products:Products
});

export default rootReducer;
