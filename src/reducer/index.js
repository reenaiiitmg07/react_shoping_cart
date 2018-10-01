import { combineReducers } from 'redux';
import Products from './reducer_products';
import SizeData from './size_reducer';


const rootReducer = combineReducers({
  products:Products,
  sizedata:SizeData
});

export default rootReducer;
