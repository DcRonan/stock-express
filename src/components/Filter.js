import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Filter = ({ filteredStocks }) => (
  <>
    <header className="mb-4">
      <h1 className="text-3xl font-medium">Stocks</h1>
    </header>
    <section className="border-t pt-6 border-gray-700">
      <div className="flex w-full">
        <div className="w-2/6 md:w-2/12">
          <h2 className="pb-2 font-semibold">Symbol</h2>
          {filteredStocks.map(el => (
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
          {filteredStocks.map(el => (
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
          <h2 className="pb-2 font-semibold">Currency</h2>
          {filteredStocks.map(el => (
            <div
              className="w-full border-t border-gray-500 py-4 text-xs lg:text-base"
              key={Math.random().toString(36).substr(2, 9)}
            >
              {el.currency === null || 0 ? 'N/A' : el.currency}
            </div>
          ))}
        </div>
        <div className="w-2/6 md:w-2/12">
          <div className="lg:hidden">
            <h2 className="pb-2 font-semibold">Exchange</h2>
          </div>
          <div className="hidden lg:block">
            <h2 className="pb-2 font-semibold">Stock Exchange</h2>
          </div>
          {filteredStocks.map(el => (
            <div
              className="w-full border-t border-gray-500 py-4 text-xs lg:text-base"
              key={Math.random().toString(36).substr(2, 9)}
            >
              {el.exchangeShortName === null ? 'N/A' : el.exchangeShortName}
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Filter;

Filter.defaultProps = {
  filteredStocks: [],
};

Filter.propTypes = {
  filteredStocks: PropTypes.instanceOf(Array),
};
