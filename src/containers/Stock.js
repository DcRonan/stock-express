import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { GET_STOCK } from '../actions/index';

const Stock = ({ match }) => {
  const stockSymbol = match.params.stock;
  const dispatch = useDispatch();
  const stock = useSelector(state => state.stock);

  useEffect(() => {
    dispatch(GET_STOCK(stockSymbol));
  }, []);

  const showData = () => {
    if (stock.data[stockSymbol] !== undefined) {
      const stockData = stock.data[stockSymbol];
      return (
        <>
          <h2>{stockData[0].symbol}</h2>
          <h3>{stockData[0].companyName}</h3>
          <img src={stockData[0].image} alt="company logo" />
          <p>
            <b>Changes:</b>
            {stockData[0].changes}
          </p>
        </>
      );
    }
    if (stock.data[stockSymbol] === undefined) {
      return <p>Cannot retrieve stock information</p>;
    }
    if (stock.loading) return <p> Loading... </p>;
    return <p> Getting stock information </p>;
  };

  return (
    <div className="mt-28 sm:mt-0 sm:ml-32 h-screen px-4 sm:px-0 sm:py-8 text-white font-light">
      {showData()}
    </div>
  );
};

export default Stock;

Stock.defaultProps = {
  match: [],
};

Stock.propTypes = {
  match: PropTypes.instanceOf(Object),
};
