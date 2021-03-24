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

  it('should handle STOCK_MULTIPLE_FAIL', () => {
    expect(
      reducer([], {
        type: 'STOCK_MULTIPLE_FAIL',
      }),
    ).toEqual({
      loading: false,
      errorMsg: 'Unable to retrieve stock data',
    });
  });

  it('should handle STOCK_MULTIPLE_SUCCESS', () => {
    expect(
      reducer([], {
        type: 'STOCK_MULTIPLE_SUCCESS',
      }),
    ).toEqual({
      loading: false,
      errorMsg: '',
      data: { undefined },
    });
  });
});
