import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes';

import Theme from 'styles/theme';
import GlobalStyles from 'styles/globalStyles';
import client from 'services/api';

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Theme>
          <GlobalStyles />
          <Routes />
        </Theme>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
