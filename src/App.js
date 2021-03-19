import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const stock = useSelector(state => state.stock);
  const company = useSelector(state => state.company);

  return (
    <>
      <div>
        <b>Stock:</b>
        <br />
        {stock.title}
        <br />
        <b>Category:</b>
        <br />
        {stock.category}
      </div>
      <b>Company:</b>
      <br />
      {company.title}
    </>
  );
};

export default App;
