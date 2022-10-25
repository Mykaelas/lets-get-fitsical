const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Order {
    _id: ID
    purchaseDate: String
    donations: [Donations]
  }
  type Donations {
    _id: ID
    price: Float
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    donation(_id: ID!): Donations
    order(_id: ID!): Order
    checkout(donation: [ID]!): Checkout
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(donations: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
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
