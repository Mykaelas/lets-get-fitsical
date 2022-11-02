import { useState } from "react";
import { searchWorkouts } from "../../utils/API";

const Workouts = () => {
  const [value, setValue] = useState("");

  const showWorkouts = async function () {
    try {
      console.log("sending value " + value);
      const response = searchWorkouts(value);
      console.log(response.json);

      searchWorkouts(value);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="workoutP">
      <p >
        Click on the tab and choose a muscle group to work out as well 
        as the difficulty and what equipment you are using. 
      </p>
      <form>
        <div className="workoutMuscles data hidden">
          <label htmlFor="workoutMuscles">Choose a muscle group: </label>
          <select
            className="formQuery"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="abdominals">Abdominals</option>
            <option value="abductors">Abductors</option>
            <option value="adductors">Adductors</option>
            <option value="biceps">Biceps</option>
            <option value="calves">Calves</option>
            <option value="chest">Chest</option>
            <option value="forearms">Forearms</option>
            <option value="glutes">Glutes</option>
            <option value="hamstrings">Hamstrings</option>
            <option value="lats">Lats</option>
            <option value="lower_back">Lower back</option>
            <option value="neck">Neck</option>
            <option value="quadriceps">Quadriceps</option>
            <option value="traps">Traps</option>
            <option value="triceps">Triceps</option>
          </select>
        </div>
        <div>
          <button className="form-btn formSubmitButton" onClick={() => showWorkouts(value)}>
            Search
          </button>
        </div>
        <p>{value}</p>
      </form>
    </div>
  );
};
export default Workouts;
