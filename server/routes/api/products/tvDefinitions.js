const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//models
const TvStructure = require("../../../models/TvStructure");

router.get("/", (req, res) => {
  TvStructure.find()
    .then(tvDefinitionsData => res.json(tvDefinitionsData))
    .catch(err => res.status(404).json({ tvDefinitionsData: "No data found" }));
});

router.post("/", (req, res) => {
  const newTvDefinition = new TvStructure({
    caption: req.body.caption,
    type: req.body.type,
    mandatory: req.body.mandatory,
    defaultValue: req.body.defaultValue,
    validationMessage: req.body.validationMessage
  });

  newTvDefinition.save().then(tvDefinitionsData => res.json(tvDefinitionsData));
});

module.exports = router;
