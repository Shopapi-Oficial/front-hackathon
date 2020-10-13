import { gql } from '@apollo/client';

export const GET_STORES = gql`
  query {
    merchants {
      id
      name
      img
      merchant_category {
        id
        name
      }
    }
  }
`;
