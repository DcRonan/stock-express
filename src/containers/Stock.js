/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_STOCK } from '../actions/index';

const Stock = props => {
  const stockSymbol = props.match.params.stock;
  const dispatch = useDispatch();
  const stock = useSelector(state => state.stock);

  useEffect(() => {
    dispatch(GET_STOCK(stockSymbol));
  }, []);

  const showData = () => {
    if (stock.data[stockSymbol] !== undefined) return <p> Have data </p>;
    if (stock.loading) return <p> Loading... </p>;
    if (stock.errorMsg !== '') return <p>{stock.errorMsg}</p>;
    return <p> Getting stock information </p>;
  };

  return (
    <div>
      <h1>Stock</h1>
      {showData()}
    </div>
  );
};

export default Stock;
