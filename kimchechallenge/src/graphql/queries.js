import { gql } from "apollo-boost";

const SEARCH_COUNTRY = gql`
  query ($currency: String!) {
    countries(filter: { currency: { eq: $currency } }) {
      name
      code
      currency
      capital
      phone
      native
      emoji
      emojiU
      states {
        name
        code
      }
      languages {
        code
        name
        native
        rtl
      }
      continent {
        name
      }
    }
  }
`;

const LANGUAGES = gql`
  query {
    languages {
      code
      name
      native
    }
  }
`

const CONTINENTS = gql`
  query {
    continents {
      code
      name
      countries {
        name
      }
    }
  }
`

export { SEARCH_COUNTRY, LANGUAGES, CONTINENTS };
