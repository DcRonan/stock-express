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
          <div className="space-y-6 flex flex-col items-center justify-center overflow-x-hidden py-10">
            {stockData[0].image !== null ? (
              <img
                src={stockData[0].image}
                alt="company logo"
                className="h-32"
              />
            ) : (
              <img
                src="/assets/stock-market.svg"
                alt="standard stock graph"
                className="h-32"
              />
            )}
            <p>
              <b className="pr-3">Symbol:</b>
              {stockData[0].symbol === null
                ? 'Unable to retrieve information'
                : stockData[0].symbol}
            </p>
            <p>
              <b className="pr-3">Company:</b>
              {stockData[0].companyName === null
                ? 'Unable to retrieve information'
                : stockData[0].companyName}
            </p>
            <p>
              <b className="pr-3">Price:</b>
              <span className="text-green-500">
                {stockData[0].price === null
                  ? 'Unable to retrieve information'
                  : stockData[0].price}
              </span>
            </p>
            <p>
              <b className="pr-3">Changes:</b>
              <span
                className={`${
                  /-/.test(stockData[0].changes) === true
                    ? 'text-red-600'
                    : 'text-green-500'
                }`}
              >
                {stockData[0].changes === null
                  ? 'Unable to retrieve information'
                  : stockData[0].changes}
              </span>
            </p>
            <p>
              <b className="pr-3">Website:</b>
              {stockData[0].website === null ? (
                'Unable to retrieve information'
              ) : (
                <a
                  href={stockData[0].website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  {stockData[0].website}
                </a>
              )}
            </p>
            <p>
              <b className="pr-3">Market Capitalization:</b>
              {stockData[0].mktCap === null
                ? 'Unable to retrieve information'
                : stockData[0].mktCap}
            </p>
            <p>
              <b className="pr-3">Range:</b>
              {stockData[0].range === null
                ? 'Unable to retrieve information'
                : stockData[0].range}
            </p>
            <p>
              <b className="pr-3">Exchange:</b>
              {stockData[0].exchangeShortName === null
                ? 'Unable to retrieve information'
                : stockData[0].exchangeShortName}
            </p>
            <p>
              <b className="pr-3">Sector:</b>
              {stockData[0].sector === null
                ? 'Unable to retrieve information'
                : stockData[0].sector}
            </p>
            <p>
              <b className="pr-3">Country:</b>
              {stockData[0].country === null
                ? 'Unable to retrieve information'
                : stockData[0].country}
            </p>
            <p>
              <b className="pr-3">Currency:</b>
              {stockData[0].currency === null
                ? 'Unable to retrieve information'
                : stockData[0].currency}
            </p>
            <p>
              <b className="pr-3">Employees:</b>
              {stockData[0].fullTimeEmployees === null
                ? 'Unable to retrieve information'
                : stockData[0].fullTimeEmployees}
            </p>
          </div>
        </>
      );
    }
    if (stock.loading) return <p> Loading... </p>;
    return <p>Cannot retrieve stock information</p>;
  };

  return (
    <div className="mt-28 sm:mt-0 sm:ml-32 h-screen px-4 sm:px-0 sm:py-8 text-white font-light flex items-center justify-center">
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
