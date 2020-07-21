const mongoose = require("mongoose");

const active = true;
const clienteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  status: {
    type: Boolean,
    default: active,
  },
});

module.exports = Client = mongoose.model("client", clienteSchema);
