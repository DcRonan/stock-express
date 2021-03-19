import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
      return (
        <div>
          {stockList.data.map(el => (
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

    if (stockList.loading) return <p> Loading... </p>;

    if (stockList.errorMsg !== '') {
      return <p>{stockList.errorMsg}</p>;
    }

    return <p> ERROR! - unable to get data </p>;
  };

  return <div>{showData()}</div>;
};

export default StockList;
