import { combineReducers } from 'redux';
import stockReducer from './stock';
import companyReducer from './company';

const allReducers = combineReducers({
  stock: stockReducer,
  company: companyReducer,
});

export default allReducers;
