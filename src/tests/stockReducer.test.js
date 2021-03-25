import reducer from '../reducers/stockList';

describe('Stock List reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      data: [],
      errorMsg: '',
    });
  });

  it('should handle STOCK_LIST_LOADING', () => {
    expect(
      reducer([], {
        type: 'STOCK_LIST_LOADING',
      }),
    ).toEqual({
      loading: true,
      errorMsg: '',
    });
  });

  it('should handle STOCK_LIST_FAIL', () => {
    expect(
      reducer([], {
        type: 'STOCK_LIST_FAIL',
      }),
    ).toEqual({
      loading: false,
      errorMsg: 'Failed to load',
    });
  });

  it('should handle STOCK_LIST_SUCCESS', () => {
    expect(
      reducer([], {
        type: 'STOCK_LIST_SUCCESS',
      }),
    ).toEqual({
      loading: false,
      errorMsg: '',
      data: undefined,
    });
  });
});
