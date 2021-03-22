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
          {currentPage > 2 ? (
            <button type="button" onClick={() => paginate(1)}>
              Back to first page
            </button>
          ) : (
            ''
          )}
          {currentPage > 1 ? <p>{currentPage - 1}</p> : ''}
          <p>
            <b>{currentPage}</b>
          </p>
          <p>{currentPage + 1}</p>
          <button type="button" onClick={() => paginate(currentPage - 1)}>
            Previous
          </button>
          <button type="button" onClick={() => paginate(currentPage + 1)}>
            Next
          </button>
          <Pagination
            stocksPerPage={stocksPerPage}
            totalStocks={stocks.data.length}
          />
        </>
      );
    }

    return <p>{stocks.errorMsg}</p>;
  };

  return <div>{showData()}</div>;
};

export default StockList;
