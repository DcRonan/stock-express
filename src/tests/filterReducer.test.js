import reducer from '../reducers/filter';

describe('Filter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      data: [],
      errorMsg: '',
    });
  });

  it('should handle FILTER_LOADING', () => {
    expect(
      reducer([], {
        type: 'FILTER_LOADING',
      }),
    ).toEqual({
      loading: true,
      errorMsg: '',
    });
  });

  it('should handle FILTER_FAIL', () => {
    expect(
      reducer([], {
        type: 'FILTER_FAIL',
      }),
    ).toEqual({
      loading: false,
      errorMsg: 'Failed to load filtered search',
    });
  });

  it('should handle FILTER_SUCCESS', () => {
    expect(
      reducer([], {
        type: 'FILTER_SUCCESS',
      }),
    ).toEqual({
      loading: false,
      errorMsg: '',
      data: undefined,
    });
  });
});
