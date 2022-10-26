import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { removeWorkoutId } from "../utils/localStorage";
import { GET_ME } from "../utils/queries";
import { REMOVE_WORKOUT } from "../utils/mutations";

const SavedWorkouts = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};

  const [deleteWorkout] = useMutation(REMOVE_WORKOUT, {
    update(cache) {
      try {
        const { me } = cache.readQuery({ query: GET_ME });
        cache.modify({
          id: cache.identify(me),
          fields: {
            savedWorkouts({ DELETE }) {
              return DELETE;
            },
          },
        });
      } catch (e) {
        console.warn("Something went wrong with cache update");
      }
    },
  });

  // create function that accepts the workout's mongo _id value as param and deletes the workout from the database
  const handleDeleteWorkout = async (workoutId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await deleteWorkout({
        variables: { workoutId: workoutId },
      });
      // upon success, remove workout's id from localStorage
      removeWorkoutId(workoutId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <Button
      className="btn-block btn-danger"
      onClick={() => handleDeleteWorkout(workout.workoutId)}
    >
      Delete this workout!
    </Button>
  );
};

export default SavedWorkouts;
