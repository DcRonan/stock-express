import axios from 'axios';

const GET_STOCK_LIST = () => async dispatch => {
  try {
    dispatch({
      type: 'STOCK_LIST_LOADING',
    });
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${process.env.REACT_APP_STOCK_EXPRESS_API_KEY}`,
    );

    dispatch({
      type: 'STOCK_LIST_SUCCESS',
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: 'STOCK_LIST_FAIL',
    });
  }
};

const GET_STOCK = stock => async dispatch => {
  try {
    dispatch({
      type: 'STOCK_MULTIPLE_LOADING',
    });
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=${process.env.REACT_APP_STOCK_EXPRESS_API_KEY}`,
    );

    dispatch({
      type: 'STOCK_MULTIPLE_SUCCESS',
      payload: response.data,
      stockName: stock,
    });
  } catch (e) {
    dispatch({
      type: 'STOCK_MULTIPLE_FAIL',
    });
  }
};

const GET_FILTER = filter => async dispatch => {
  try {
    dispatch({
      type: 'FILTER_LOADING',
    });
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/search?query=${filter}&limit=50&apikey=${process.env.REACT_APP_STOCK_EXPRESS_API_KEY}`,
    );

    dispatch({
      type: 'FILTER_SUCCESS',
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: 'FILTER_FAIL',
    });
  }
};

export { GET_STOCK_LIST, GET_STOCK, GET_FILTER };
