const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function ValidatePlayer(data){
  let errors = {};

  data.block_height = !isEmpty(data.block_height) ? data.block_height : "";
  data.dest_address = !isEmpty(data.dest_address) ? data.dest_address : "";
  data.sats = !isEmpty(data.sats) ? data.sats : "";
  data.snort_text = !isEmpty(data.snort_text) ? data.snort_text : "";
  data.est_block_difficulty = !isEmpty(data.est_block_difficulty) ? data.est_block_difficulty : "";

  if (Validator.isEmpty(data.block_height)) {
    errors.name = "Block Height is required";
  }
  if (Validator.isEmpty(data.dest_address)) {
    errors.name = "Destination Address is required";
  }
  if (Validator.isEmpty(data.sats)) {
    errors.name = "Sats is required";
  }
  if (Validator.isEmpty(data.est_block_difficulty)) {
    errors.est_block_difficulty = "Estimated Block Difficulty is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
