import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const App = () => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        Counter:
        {counter}
      </div>
      <button onClick={() => dispatch(increment(5))} type="button"> + </button>
      <button onClick={() => dispatch(decrement(10))} type="button"> - </button>
      <div>
        Am I logged in ?
        {isLogged ? <div> SHOULD NOT SEE</div> : '' }
      </div>
    </>
  );
};

export default App;
