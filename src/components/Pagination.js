/* eslint-disable */
import React from 'react';

const Pagination = ({ stocksPerPage, totalStocks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStocks / stocksPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#hi">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
