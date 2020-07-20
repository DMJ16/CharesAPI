const mongoose = require('mongoose');

const characteristicSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  product_id: {
    type: Number,
    index: true,
  },
  name: {
    type: String,
  },
});

const Characteristic = mongoose.model('Characteristics', characteristicSchema);

module.exports = Characteristic;
