const mongoose = require("mongoose");
const { Schema } = mongoose;

const donationSchema = new Schema({
  
  price: {
    type: Number,
    required: true,
    min: 0.99
  }
  
});

const Donations = mongoose.model('Donations', donationSchema);

module.exports = Donations;
