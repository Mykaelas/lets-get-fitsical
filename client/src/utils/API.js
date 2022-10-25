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

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchWorkouts = (query) => {
  const fetch = require("node-fetch");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2f1103bcf0msh9ba8e9d5b5d1dd9p10604ejsnc34304aaddc5",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));

  return fetch(
    `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${query}`
  );
};
// https://rapidapi.com/apininjas/api/exercises-by-api-ninjas

// Class Example
// export const searchGoogleBooks = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };
