import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Routes from '../routes';
import Pagination from './Pagination';
import StockList from '../containers/StockList';

const App = () => {
  const stocks = useSelector(state => state.stockList);

  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage] = useState(10);

  // GET current stocks
  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = stocks.data.slice(indexOfFirstStock, indexOfLastStock);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <nav>
        <h1>
          <NavLink to="/"> Home </NavLink>
        </h1>
      </nav>
      <Routes />
      <StockList stocks={currentStocks} loading={stocks.loading} error={stocks.errorMsg} />
      <Pagination
        stocksPerPage={stocksPerPage}
        totalStocks={stocks.data.length}
        paginate={paginate}
      />
    </>
  );
};

export default App;
