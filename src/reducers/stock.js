const defaultState = {
  loading: false,
  data: {},
  errorMsg: '',
};

const stockMultipleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'STOCK_MULTIPLE_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'STOCK_MULTIPLE_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to retrieve stock data',
      };
    case 'STOCK_MULTIPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: {
          ...state.data,
          [action.stockName]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default stockMultipleReducer;
