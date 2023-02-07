const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const generateHash = require("random-hash");

const validateSnort = require("../../validation/snort");
const Snort = require("../../models/Snort");
const {db} = require("../../models/Snort");

router.post("/order-snort", (req, res) => {

  const {errors, isValid} = validateSnort(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // first pay
  const tmpPayTxId = `tmpPayTxId${generateHash({ length: 8 })}`;

  // once payment is confirmed
  const tmpSnortNonce = `tmpSnortNonce${generateHash({ length: 8 })}`;

  const newSnort = new Snort({
    block_height: req.body.block_height,
    dest_address: req.body.dest_address,
    sats: req.body.sats,
    snort_text: req.body.snort_text,
    est_block_difficulty: req.body.est_block_difficulty,
    pay_tx_id: tmpPayTxId,
    snort_nonce: tmpSnortNonce,
  });

  const saveSuccess = (snort) => {
    res.status(200).json(snort);
  };

  const saveFail = (fail) => {
    res.status(500).json(fail);
  };

  const saveError = (error) => {
    res.status(500).json(error);
  };
  newSnort.save().then(saveSuccess, saveFail).catch(saveError);
});

module.exports = router;