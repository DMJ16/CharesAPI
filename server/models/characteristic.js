const mongoose = require("mongoose");

const characteristicSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  product_id: {
    type: Number,
    index: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Characteristic = mongoose.model("Characteristics", characteristicSchema);

module.exports = Characteristic;
