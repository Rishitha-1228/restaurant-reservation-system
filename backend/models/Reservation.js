const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  restaurant: String,
  reservationDate: String,
  reservationTime: String,
  guests: Number
});

module.exports = mongoose.model(
  "Reservation",
  reservationSchema
);