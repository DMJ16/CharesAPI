const mongoose = require("mongoose");

const characteristic_reviewsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  characteristic_id: {
    type: Number,
    index: true,
    required: true,
  },
  review_id: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const Characteristic_Review = mongoose.model(
  "Characteristic_Reviews",
  characteristic_reviewsSchema
);

module.exports = Characteristic_Review;
