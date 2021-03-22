import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GET_STOCK_LIST } from '../actions/index';
import Pagination from '../components/Pagination';

const StockList = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(state => state.stockList);

  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage] = useState(10);

  // GET current stocks
  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = stocks.data.slice(indexOfFirstStock, indexOfLastStock);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const fetchData = () => {
    dispatch(GET_STOCK_LIST(stocks));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (stocks.loading) return <p> Loading... </p>;

  if (stocks.errorMsg) return <p>{stocks.errorMsg}</p>;

  const showData = () => {
    if (currentStocks !== undefined) {
      return (
        <>
          <div>
            {currentStocks.map(el => (
              <>
                <p key={Math.random().toString(36).substr(2, 9)}>
                  <Link to={`/stock/${el.symbol}`}>{el.name}</Link>
                </p>
              </>
            ))}
          </div>
          <Pagination
            stocksPerPage={stocksPerPage}
            totalStocks={stocks.data.length}
            paginate={paginate}
          />
        </>
      );
    }

    return <p>{stocks.errorMsg}</p>;
  };

  return <div>{showData()}</div>;
};

export default StockList;
