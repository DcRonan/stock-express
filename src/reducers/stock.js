const STOCKS = {
  title: 'BTC Stock',
  category: 'BTC',
};

const counterReducer = (stock = STOCKS, action) => {
  switch (action.type) {
    case 'SHOW_STOCK':
      return [stock, action.payload];
    default:
      return stock;
  }
};

export default counterReducer;
