const mongoose = require("mongoose");

const active = true;
const ServiceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
  },
  unit: {
    type: String,
    require: true,
  },
  amount: { type: Number, default: 1 },

  status: {
    type: Boolean,
    default: active,
  },
});

module.exports = Service = mongoose.model("service", ServiceSchema);
