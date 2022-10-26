import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_WORKOUT = gql`
  mutation saveWorkout($content: newWorkout!) {
    saveWorkout(content: $content) {
      _id
      username
      email
      workoutCount
      savedWorkouts {
        workoutId
        name
      }
    }
  }
`;
export const REMOVE_WORKOUT = gql`
  mutation RemoveWorkout($workoutId: String!) {
    removeWorkout(workoutId: $workoutId) {
      username
      wokoutCount
      savedWorkouts {
        workoutId
      }
    }
  }
`;
