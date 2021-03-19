const counterReducer = (stock = {}, action) => {
  switch (action.type) {
    case 'SHOW_STOCK':
      return action.payload;
    default:
      return stock;
  }
};

export default counterReducer;
