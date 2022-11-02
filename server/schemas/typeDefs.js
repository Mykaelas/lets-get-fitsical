const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    workoutCount: Int
    savedWorkouts: [Workout]
  }
  type Workout {
    muscle: String
    difficulty: String
  }
  type Auth {
    token: ID!
    user: User
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

module.exports = typeDefs;
// type Workout {
//   workoutId: String
//   name: [String]
//   type: [String]
//   muscle: [String]
//   difficulty: [String]
// }
