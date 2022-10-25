const { Schema } = require("mongoose");

const workoutSchema = new Schema({
  name: [
    {
      type: String,
    },
  ],
  workoutId: {
    type: String,
    required: true,
  },
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
