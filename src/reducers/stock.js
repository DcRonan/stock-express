import ADD_STOCK from '../actions/index';

const counterReducer = (stock = {}, action) => {
  switch (action.type) {
    case ADD_STOCK:
      return action.payload;
    default:
      return stock;
  }
};

export default counterReducer;
