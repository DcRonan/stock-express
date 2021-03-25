import { combineReducers } from 'redux';
import stockMultipleReducer from './stock';
import stockListReducer from './stockList';
import filterReducer from './filter';

const allReducers = combineReducers({
  stock: stockMultipleReducer,
  stockList: stockListReducer,
  filter: filterReducer,
});

export default allReducers;
