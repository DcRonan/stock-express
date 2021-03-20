/* eslint-disable */
import React from 'react';

const Stocks = ({ stocks, loading }) => {
  if (loading) return <h2> Loading... </h2>;

  return (
    <ul>
      {stocks.map(stock => (
        <li key={Math.random().toString(36).substr(2, 9)}>{stock.title}</li>
      ))}
    </ul>
  );
};

export default Stocks;
