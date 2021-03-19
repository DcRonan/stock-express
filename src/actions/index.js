const SHOW_STOCK = stock => ({
  type: 'SHOW_STOCK',
  payload: stock,
});

const SHOW_COMPANY = name => ({
  type: 'SHOW_COMPANY',
  payload: name,
});

export { SHOW_STOCK, SHOW_COMPANY };
