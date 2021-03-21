/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GET_STOCK_LIST } from '../actions/index';

const StockList = ({ stocks, loading, error }) => {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(GET_STOCK_LIST(stocks));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p> Loading... </p>;

  if (error) return <p> {error} </p>;

  const showData = () => {
    if (stocks !== undefined) {
      return (
        <div>
          {stocks.map(el => (
            <>
              <div>
                <p key={Math.random().toString(36).substr(2, 9)}>
                  <Link to={`/stock/${el.symbol}`}>{el.name}</Link>
                </p>
              </div>
            </>
          ))}
        </div>
      );
    }

    return <p> {error} </p>;
  };

  return <div>{showData()}</div>;
};

export default StockList;
