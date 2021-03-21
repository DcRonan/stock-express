import React from 'react';
import PropTypes from 'prop-types';

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
            <button type="button" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

Pagination.defaultProps = {
  stocksPerPage: 0,
  totalStocks: 0,
  paginate: () => {},
};

Pagination.propTypes = {
  stocksPerPage: PropTypes.number,
  totalStocks: PropTypes.number,
  paginate: PropTypes.func,
};
