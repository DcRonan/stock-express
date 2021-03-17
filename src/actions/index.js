const increment = num => {
  const obj = {
    type: 'INCREMENT',
    payload: num,
  };

  return obj;
};

const decrement = num => {
  const obj = {
    type: 'DECREMENT',
    payload: num,
  };

  return obj;
};

export { increment, decrement };
