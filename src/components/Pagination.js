import PropTypes from 'prop-types';

const Pagination = ({ stocksPerPage, totalStocks }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStocks / stocksPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return '';
};

export default Pagination;

Pagination.defaultProps = {
  stocksPerPage: 0,
  totalStocks: 0,
};

Pagination.propTypes = {
  stocksPerPage: PropTypes.number,
  totalStocks: PropTypes.number,
};
