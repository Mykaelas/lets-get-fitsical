import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      workoutCount
      savedWorkouts {
        workoutId
        name
        type
        muscle
        difficulty
      }
    }
    `;

export const GET_WORKOUT = gql`
  {
    workout {
      workoutId
      name
      type
      muscle
      difficulty
    }
  }
`;
