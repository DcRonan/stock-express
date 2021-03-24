import reducer from '../reducers/stock';

describe('Stock reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      data: {},
      errorMsg: '',
    });
  });

  it('should handle STOCK_MULTIPLE_LOADING', () => {
    expect(
      reducer([], {
        type: 'STOCK_MULTIPLE_LOADING',
      }),
    ).toEqual({
      loading: true,
      errorMsg: '',
    });
  });
});
