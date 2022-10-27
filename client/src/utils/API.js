// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

// save workout data for a logged in user
export const saveWorkout = (workoutData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workoutData),
  });
};

// remove saved workout data for a logged in user
export const deleteWorkout = (workoutId, token) => {
  return fetch(`/api/users/workouts/${workoutId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const searchWorkouts = (url, options) => {
  return fetch(``).then((res) => res.json());
};
// https://rapidapi.com/apininjas/api/exercises-by-api-ninjas

// Class Example
// export const searchGoogleBooks = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };

// export const searchWorkouts = (query) => {
//   const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${query}`;

//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//         "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
//       },
//     };
//     return fetch(url, options).then((res) => res.json());
//   };
