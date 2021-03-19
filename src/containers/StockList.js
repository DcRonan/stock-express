import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_STOCK_LIST } from '../actions/index';

const StockList = () => {
  const dispatch = useDispatch();
  const stockList = useSelector(state => state.stockList);

  const fetchData = () => {
    dispatch(GET_STOCK_LIST(stockList.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showData = () => {
    if (stockList.data !== undefined) {
      return stockList.data.map(el => el.name);
    }

    if (stockList.loading) return <p> Loading... </p>;

    if (stockList.errorMsg !== '') {
      return <p>{stockList.errorMsg}</p>;
    }

    return <p> ERROR! - unable to get data </p>;
  };

  return <div>{showData()}</div>;
};

export default StockList;
