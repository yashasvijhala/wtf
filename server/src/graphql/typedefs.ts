import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(id: String!, name: String!): User
  }

  type User {
    id: String
    name: String
  }
`

export default typeDefs
