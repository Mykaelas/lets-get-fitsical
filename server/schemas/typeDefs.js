const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Workout {
    muscle: [String]
    difficulty: [String]
  }
  type Query {
    me: User
    workout: String
    users: [User]
    user(username: String!): User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
// type Workout {
//   workoutId: String
//   name: [String]
//   type: [String]
//   muscle: [String]
//   difficulty: [String]
// }
