const mongoose = require('mongoose');

const characteristic_reviewsSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  characteristic_id: {
    type: Number,
    index: true,
  },
  review_id: {
    type: Number,
  },
  value: {
    type: Number,
  },
});

const Characteristic_Review = mongoose.model(
  'Characteristic_Reviews',
  characteristic_reviewsSchema
);

module.exports = Characteristic_Review;
