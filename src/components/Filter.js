import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Filter = ({ filteredStocks }) => (
  <div>
    {filteredStocks.map(el => (
      <p key={Math.random().toString(36).substr(2, 9)}>
        <Link to={`/stock/${el.symbol}`}>{el.name}</Link>
      </p>
    ))}
  </div>
);

export default Filter;

Filter.defaultProps = {
  filteredStocks: [],
};

Filter.propTypes = {
  filteredStocks: PropTypes.instanceOf(Array),
};
