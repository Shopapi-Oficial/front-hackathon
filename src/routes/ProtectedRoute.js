import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrtectedRoute = memo(({ component: Component, ...rest }) => {
  const isLogged = localStorage.getItem('token');

  const renderComponent = props =>
    isLogged ? <Component {...props} /> : <Redirect to="login" />;

  return <Route render={renderComponent} {...rest} />;
});

export default PrtectedRoute;
