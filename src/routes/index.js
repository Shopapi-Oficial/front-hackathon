import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Store from 'pages/Store';
import Product from 'pages/Product';
import Cart from 'pages/Cart';
import Sell from 'pages/Sell';
import SellCode from 'pages/SellCode';
import Payment from 'pages/Payment';

const Routes = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute path="/store" component={Store} />
    <ProtectedRoute path="/product" component={Product} />
    <ProtectedRoute path="/cart" component={Cart} />
    <ProtectedRoute path="/sell" component={Sell} />
    <ProtectedRoute path="/code" component={SellCode} />
    <ProtectedRoute path="/payment" component={Payment} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
