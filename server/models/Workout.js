const { Schema } = require("mongoose");

const workoutSchema = new Schema({
  name: [
    {
      type: String,
    },
  ],
  type: [
    {
      type: String,
      required: true,
    },
  ],
  muscle: [
    {
      type: String,
      required: true,
    },
  ],
  difficulty: [
    {
      type: String,
    },
  ],
});

module.exports = workoutSchema;
