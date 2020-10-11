import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Store from 'pages/Store';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/store" component={Store} />
  </Switch>
);

export default Routes;
