import axios from 'axios';

const GET_STOCK = stock => ({
  type: 'GET_STOCK',
  payload: stock,
});

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

export { GET_STOCK, GET_STOCK_LIST };
