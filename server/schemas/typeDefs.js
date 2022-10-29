const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Workout {
    name: String
    type: String
    muscle: String
    equipment: String
    difficulty: String
    instructions: String
  }

  type Query {
    me: User
    users: [User]
    workout(
      name: String
      type: String
      muscle: String
      equipment: String
      difficulty: String
      instructions: String
    ): [Workout]
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

// type RemoveUserPayload {
//   removed: Boolean
//   user: username
// }
// removeUser(id: ID!): RemoveUserPayload
// export the typeDefs
module.exports = typeDefs;
