const defaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const StockListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'STOCK_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'STOCK_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Failed to load',
      };
    case 'STOCK_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: '',
      };
    default:
      return state;
  }
};

export default StockListReducer;
