import { gql } from '@apollo/client';

export const GET_STORES = gql`
  query {
    merchants {
      id
      name
      category {
        id
        name
      }
    }
  }
`;
