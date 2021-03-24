import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GET_STOCK_LIST, GET_FILTER } from '../actions/index';
import Pagination from '../components/Pagination';
import Filter from '../components/Filter';

const StockList = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(state => state.stockList);

  // Filter
  const filter = useSelector(state => state.filter);
  const [filterValue, setFilter] = useState('');
  const [clearSearch, setClearSearch] = useState(false);

  // Current page and amount of stocks on each
  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage] = useState(10);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // GET current stocks
  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = stocks.data.slice(indexOfFirstStock, indexOfLastStock);

  // Filtered stocks
  const filteredStocks = filter.data.slice(indexOfFirstStock, indexOfLastStock);

  // Search box
  const searchBox = useRef(null);

  const fetchFilterData = () => {
    dispatch(GET_FILTER(filterValue));
    setClearSearch(true);
    paginate(1);
  };

  const clearSearchData = () => {
    setClearSearch(false);
    paginate(1);
    searchBox.current.value = '';
  };

  // All data
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
            <header className="mb-4">
              <h1 className="text-3xl font-medium">Stocks</h1>
            </header>
            <section className="border-t pt-6 border-gray-700">
              <div className="flex w-full">
                <div className="w-2/6 md:w-2/12">
                  <h2 className="pb-2">Symbol</h2>
                  {currentStocks.map(el => (
                    <div
                      className="w-full border-t border-gray-500 py-4 text-blue-500 text-xs"
                      key={Math.random().toString(36).substr(2, 9)}
                    >
                      <Link to={`/stock/${el.symbol}`}>
                        {el.symbol === null ? 'N/A' : el.symbol}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="md:w-6/12 hidden md:block">
                  <h2 className="pb-2">Name</h2>
                  {currentStocks.map(el => (
                    <div
                      className="w-full border-t border-gray-500 py-4 text-blue-500 text-xs"
                      key={Math.random().toString(36).substr(2, 9)}
                    >
                      <Link to={`/stock/${el.symbol}`}>
                        {el.name === null ? 'N/A' : el.name.slice(0, 40)}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="w-2/6 md:w-2/12">
                  <h2 className="pb-2">Price</h2>
                  {currentStocks.map(el => (
                    <div
                      className="w-full border-t border-gray-500 py-4 text-xs"
                      key={Math.random().toString(36).substr(2, 9)}
                    >
                      <Link to={`/stock/${el.symbol}`}>
                        {el.price === null || 0 ? 'N/A' : el.price}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="w-2/6 md:w-2/12">
                  <h2 className="pb-2">% Change</h2>
                  {currentStocks.map(el => (
                    <div
                      className="w-full border-t border-gray-500 py-4 text-xs"
                      key={Math.random().toString(36).substr(2, 9)}
                    >
                      <Link to={`/stock/${el.symbol}`}>
                        {el.change === null ? 'N/A' : el.change}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <Pagination
              stocksPerPage={stocksPerPage}
              totalStocks={stocks.data.length}
            />
          </>
        );
      }
    }
    if (filteredStocks !== undefined) {
      if (clearSearch === true) {
        return <Filter filteredStocks={filteredStocks} />;
      }
    }

    return <p>{stocks.errorMsg}</p>;
  };

  return (
    <>
      <div className="mt-28 sm:mt-0 sm:ml-32 h-screen px-4 sm:px-0 sm:py-8 text-white font-light bg-darkgrey">
        {showData()}
        {/* PAGINATION */}
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
        {/* SEARCH */}
        <input
          className="border-2"
          ref={searchBox}
          type="search"
          onChange={e => setFilter(e.target.value)}
        />
        <button type="button" onClick={() => fetchFilterData()}>
          DISPATCH
        </button>
        <button type="button" onClick={() => clearSearchData()}>
          Clear search
        </button>
      </div>
    </>
  );
};

export default StockList;
