const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  product_id: {
    type: Number,
    index: true,
  },
  rating: {
    type: Number,
  },
  date: {
    type: String,
  },
  summary: {
    type: String,
  },
  body: {
    type: String,
  },
  recommend: {
    type: Number,
  },
  reported: {
    type: Number,
  },
  reviewer_name: {
    type: String,
  },
  reviewer_email: {
    type: String,
  },
  response: {
    type: String,
  },
  helpfulness: {
    type: String,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
