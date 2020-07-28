const mongoose = require("mongoose");
const comprobanteSchema = mongoose.Schema({
  invoice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "invoice",
  },

  value: {
    type: String,
    required: true,
  },
  used: {
    type: Boolean,
    default: false,
  },
  dateUsed: {
    type: Date,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comprobante = mongoose.model("comprobante", comprobanteSchema);
