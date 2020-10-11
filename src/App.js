import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

import Routes from 'routes';

import Theme from 'styles/theme';
import GlobalStyles from 'styles/globalStyles';
import client from 'services/api';
import { firebaseConfig } from 'config/firebase';

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <ApolloProvider client={client}>
      <Theme>
        <GlobalStyles />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Theme>
    </ApolloProvider>
  );
}

export default App;
