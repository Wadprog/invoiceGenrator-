const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },

  total: {
    type: Number,
  },
  type: {
    type: String,
    default: "cotizacion",
  },

  items: [
    {
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
      amount: {
        type: Number,
      },

      total: {
        type: Number,
      },
    },
  ],

  comprobante: {
    type: String,
  },
  buyerComprobante: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Invoice = mongoose.model("invoice", invoiceSchema);
