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

  // Clear search button
  const clearSearchBtn = useRef(null);

  // Submit button
  const submitBtn = useRef(null);

  const fetchFilterData = () => {
    dispatch(GET_FILTER(filterValue));
    setClearSearch(true);
    paginate(1);
    clearSearchBtn.current.classList = 'block focus:outline-none border-0 bg-red-600 py-1.5 px-2 rounded-md';
    submitBtn.current.classList = 'bg-blue-600 py-1.5 px-2 rounded-md focus:outline-none border-0 hidden';
  };

  const clearSearchData = () => {
    setClearSearch(false);
    paginate(1);
    searchBox.current.value = '';
    submitBtn.current.classList = 'bg-blue-600 py-1.5 px-2 rounded-md focus:outline-none border-0 block';
    clearSearchBtn.current.classList = 'hidden focus:outline-none';
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
            <header className="sm:mb-4">
              <h1 className="hidden sm:block sm:text-2xl md:text-3xl font-medium">
                Stock Express
              </h1>
            </header>
            <section className="pt-6 border-gray-700 sm:border-t">
              <div className="flex w-full">
                <div className="w-2/6 md:w-2/12">
                  <h2 className="pb-2 font-semibold">Symbol</h2>
                  {currentStocks.map(el => (
                    <div
                      className="w-full border-t border-gray-500 py-4 text-blue-500 text-xs lg:text-base"
                      key={Math.random().toString(36).substr(2, 9)}
                    >
                      <Link to={`/stock/${el.symbol}`}>
                        <div>{el.symbol === null ? 'N/A' : el.symbol}</div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="md:w-6/12 hidden md:block">
                  <h2 className="pb-2 font-semibold">Name</h2>
                  {currentStocks.map(el => (
                    <div
                      className="w-full border-t border-gray-500 py-4 text-blue-500 text-xs lg:text-base"
                      key={Math.random().toString(36).substr(2, 9)}
                    >
                      <Link to={`/stock/${el.symbol}`}>
                        {el.name === null ? 'N/A' : el.name.slice(0, 40)}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="w-2/6 md:w-2/12">
                  <h2 className="pb-2 font-semibold">Price</h2>
                  {currentStocks.map(el => (
                    <div
                      className="w-full border-t border-gray-500 py-4 text-xs lg:text-base"
                      key={Math.random().toString(36).substr(2, 9)}
                    >
                      {el.price === null || 0 ? 'N/A' : el.price}
                    </div>
                  ))}
                </div>
                <div className="w-2/6 md:w-2/12">
                  <h2 className="pb-2 font-semibold">% Change</h2>
                  {currentStocks.map(el => (
                    <div
                      className="w-full border-t border-gray-500 py-2 text-xs lg:text-base"
                      key={Math.random().toString(36).substr(2, 9)}
                    >
                      <div
                        className={`rounded-md ${
                          /-/.test(el.change) === true
                            ? 'bg-red-900 bg-opacity-5 text-red-600'
                            : 'bg-green-800 text-green-300'
                        } font-semibold bg-opacity-50 p-2 w-20 flex justify-center`}
                      >
                        {el.change === null ? 'N/A' : el.change}
                      </div>
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
        {/* SEARCH */}
        <div className="float-right pr-2 space-x-2 flex pb-6 sm:pb-0">
          <input
            className="border-2 text-black focus:outline-none px-2 py-1 font-light rounded-md"
            ref={searchBox}
            placeholder="Amazon..."
            type="search"
            onChange={e => setFilter(e.target.value)}
          />
          <button
            ref={submitBtn}
            type="button"
            onClick={() => fetchFilterData()}
            className="bg-blue-600 py-1.5 px-2 rounded-md focus:outline-none border-0"
          >
            Search
          </button>
          <button
            ref={clearSearchBtn}
            type="button"
            onClick={() => clearSearchData()}
            className="hidden focus:outline-none border-0 bg-red-600 py-1.5 px-2 rounded-md"
          >
            Clear
          </button>
        </div>
        {showData()}
        {/* PAGINATION */}
        <section className="w-full flex justify-center py-4">
          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center space-x-4">
              {currentPage > 1 ? (
                <button
                  type="button"
                  onClick={() => paginate(currentPage - 1)}
                  className="focus:outline-none border-0 bg-blue-600 rounded-md p-2"
                >
                  Previous
                </button>
              ) : (
                ''
              )}
              <div className="flex items-center space-x-4">
                {currentPage > 1 ? <p>{currentPage - 1}</p> : ''}
                <p className="text-3xl">
                  <b>{currentPage}</b>
                </p>
                <p>{currentPage + 1}</p>
              </div>
              <button
                type="button"
                onClick={() => paginate(currentPage + 1)}
                className="focus:outline-none border-0 bg-green-600 rounded-md p-2"
              >
                Next
              </button>
            </div>
          </div>
          <div className="ml-6">
            {currentPage > 2 ? (
              <button
                type="button"
                onClick={() => paginate(1)}
                className="focus:outline-none border-0 bg-red-700 bg-opacity-75 rounded-md p-2"
              >
                Page 1
              </button>
            ) : (
              ''
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default StockList;
