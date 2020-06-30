const mongoose = require("mongoose");

const reviews_photoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  review_id: {
    type: Number,
    index: true,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Reviews_Photo = mongoose.model("Reviews_Photo", reviews_photoSchema);

module.exports = Reviews_Photo;
