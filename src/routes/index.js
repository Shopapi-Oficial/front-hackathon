import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Store from 'pages/Store';

const Routes = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/store" component={Store} />
  </Switch>
);

export default Routes;
