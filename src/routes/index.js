import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from 'routes/ProtectedRoute';
import Home from 'pages/Home';
<<<<<<< HEAD
import Store from 'pages/Store';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/store" component={Store} />
=======
import Login from 'pages/Login';
import Register from 'pages/Register';

const Routes = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
>>>>>>> f1b123cf39c1dd5a8b05e004b4a2d82939509ddd
  </Switch>
);

export default Routes;
