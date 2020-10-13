import { gql } from '@apollo/client';

export const GET_STORES = gql`
  query {
    merchants {
      id
      name
      merchant_category {
        id
        name
      }
    }
  }
`;
