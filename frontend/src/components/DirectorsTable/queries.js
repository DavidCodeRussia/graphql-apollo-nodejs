import { gql } from 'apollo-boost';

export const directorQuery = gql`
  query diretorsQuery($name: String) {
    directors(name: $name) {
      id
      name
      age
      movies {
        name
        id
      }
    }
  }
`;
