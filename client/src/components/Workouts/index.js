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
    <div>
      <p>
        Hey you, you're awake // make a drop down list of type of type, muscle
        group, and difficulty. Workouts will be displayed on cards with each
        part listed name, type, muscle group, equipment, difficutly,
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
          <button className="form-btn" onClick={() => showWorkouts(value)}>
            Search
          </button>
        </div>
        <p>{value}</p>
      </form>
    </div>
  );
};
export default Workouts;
