import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Routes from '../routes';
import Stocks from './Stocks';
import Pagination from './Pagination';

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage] = useState(10);

  useEffect(() => {
    const fetchStocks = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setStocks(res.data);
      setLoading(false);
    };

    fetchStocks();
  }, []);

  // GET current stocks
  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = stocks.slice(indexOfFirstStock, indexOfLastStock);

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
      <Stocks stocks={currentStocks} loading={loading} />
      <Pagination
        stocksPerPage={stocksPerPage}
        totalStocks={stocks.length}
        paginate={paginate}
      />
    </>
  );
};

export default App;
