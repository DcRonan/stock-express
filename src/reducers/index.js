import { combineReducers } from 'redux';
import stockMultipleReducer from './stock';
import stockListReducer from './stockList';

const allReducers = combineReducers({
  stock: stockMultipleReducer,
  stockList: stockListReducer,
});

export default allReducers;
