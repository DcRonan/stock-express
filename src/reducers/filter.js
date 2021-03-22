const defaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'FILTER_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Failed to load filtered search',
      };
    case 'FILTER_SUCCESS':
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

export default filterReducer;
