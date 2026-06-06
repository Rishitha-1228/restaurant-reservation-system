const mongoose = require("mongoose");

const menuSchema =
new mongoose.Schema({

  restaurant: {
    type:
      mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  },

  name: String,

  description: String,

  category: String,

  price: Number,

  image: String
});

module.exports =
mongoose.model(
  "Menu",
  menuSchema
);