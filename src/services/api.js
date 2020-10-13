import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://104.248.6.82:8080/v1/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
