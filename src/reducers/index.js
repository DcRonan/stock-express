import { combineReducers } from 'redux';
import stockReducer from './stock';

const allReducers = combineReducers({
  stock: stockReducer,
});

export default allReducers;
