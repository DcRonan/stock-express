/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GET_STOCK_LIST, GET_FILTER } from '../actions/index';
import Pagination from '../components/Pagination';

const StockList = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(state => state.stockList);

  // Filter ------ MOVE TO COMPONENT
  const filter = useSelector(state => state.filter);
  const [filterValue, setFilter] = useState('');
  const [clearSearch, setClearSearch] = useState(false);

  const fetchFilterData = () => {
    dispatch(GET_FILTER(filterValue));
    setClearSearch(true);
    paginate(1);
  };

  const clearSearchData = () => {
    setClearSearch(false);
    paginate(1);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage] = useState(10);

  // GET current stocks
  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = stocks.data.slice(indexOfFirstStock, indexOfLastStock);

  // MOVE TO COMPONENT
  const filteredStocks = filter.data.slice(indexOfFirstStock, indexOfLastStock);

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
      if (clearSearch === false) {
        return (
          <>
            <div>
              {currentStocks.map(el => (
                <p key={Math.random().toString(36).substr(2, 9)}>
                  <Link to={`/stock/${el.symbol}`}>{el.name}</Link>
                </p>
              ))}
            </div>
            <Pagination
              stocksPerPage={stocksPerPage}
              totalStocks={stocks.data.length}
            />
          </>
        );
      } else if (clearSearch === true) {
        return (
          <div>
            {/* MOVE TO COMPONENT */}
            {filteredStocks.map(el => (
              <p key={Math.random().toString(36).substr(2, 9)}>
                <Link to={`/stock/${el.symbol}`}>{el.name}</Link>
              </p>
            ))}
          </div>
        );
      }
    }

    return <p>{stocks.errorMsg}</p>;
  };

  return (
    <>
      <div>{showData()}</div>
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
      {currentPage > 1 ? (
        <button type="button" onClick={() => paginate(currentPage - 1)}>
          Previous
        </button>
      ) : (
        ''
      )}
      <button type="button" onClick={() => paginate(currentPage + 1)}>
        Next
      </button>
      <br />
      {/* MOVE TO COMPONENT */}
      <input type="search" onChange={e => setFilter(e.target.value)} />
      <button type="button" onClick={() => fetchFilterData()}>
        DISPATCH
      </button>
      <button type="button" onClick={() => clearSearchData()}>
        Clear search
      </button>
    </>
  );
};

export default StockList;
