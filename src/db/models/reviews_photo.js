const mongoose = require("mongoose");

const reviews_photoSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  review_id: {
    type: Number,
    index: true,
  },
  url: {
    type: String,
  },
});

const Reviews_Photo = mongoose.model("Reviews_Photo", reviews_photoSchema);

module.exports = Reviews_Photo;
