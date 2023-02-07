const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SnortSchema = new Schema({
  block_height: {
    type: String,
    required: true
  },
  dest_address: {
    type: String,
    required: true
  },
  snort_nonce: {
    type: String,
    required: true
  },
  pay_tx_id: {
    type: String,
    required: true
  },
  sats: {
    type: String,
    required: true
  },
  snort_text: {
    type: String,
    required: false,
    default: ""
  },
  est_block_difficulty: {
    type: String,
    required: true
  }
}, { minimize: false });

module.exports = Snort = mongoose.model("snort", SnortSchema);
