const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): order
    checkout(products: [ID]!): Checkout
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
  type Auth {
    token: ID!
    user: User
  }
  type Checkout {
    session: ID
  }
`;

// type RemoveUserPayload {
//   removed: Boolean
//   user: username
// }
// removeUser(id: ID!): RemoveUserPayload
// export the typeDefs
module.exports = typeDefs;
