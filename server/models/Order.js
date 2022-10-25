const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  donations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Donations'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;