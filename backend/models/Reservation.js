const mongoose = require("mongoose");

const reservationSchema =
new mongoose.Schema({

  bookingId: {
    type: String
  },

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  restaurant: {
    type: String,
    required: true
  },

  reservationDate: {
    type: String,
    required: true
  },

  reservationTime: {
    type: String,
    required: true
  },

  guests: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    default: "Confirmed"
  }

},
{
  timestamps: true
});

module.exports =
mongoose.model(
  "Reservation",
  reservationSchema
);