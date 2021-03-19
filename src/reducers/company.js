const company = {
  title: 'HSBC',
};

const companyReducer = (state = company, action) => {
  switch (action.type) {
    case 'SHOW_COMPANY':
      return [state, action.payload];
    default:
      return state;
  }
};

export default companyReducer;
