import { combineReducers } from 'redux';
import stockReducer from './stock';
import stockListReducer from './stockList';

const allReducers = combineReducers({
  stock: stockReducer,
  stockList: stockListReducer,
});

export default allReducers;
