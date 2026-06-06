const mongoose = require("mongoose");

const restaurantSchema =
new mongoose.Schema({
  name: String,
  description: String,
  address: String,
  phone: String,
  image: String
});

module.exports =
mongoose.model(
  "Restaurant",
  restaurantSchema
);