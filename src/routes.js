import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import StockList from './containers/StockList';
import Stock from './containers/Stock';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={StockList} />
    <Route path="/stock/:stock" exact component={Stock} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
