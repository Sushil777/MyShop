const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//models
const Tv = require("../../../models/Tv");

router.get("/", (req, res) => {
  Tv.find()
    .then(tvsData => res.json(tvsData))
    .catch(err => res.status(404).json({ notvsfound: "No tvs found" }));
});

router.post("/", (req, res) => {
  const newTv = new Tv({
    Name: req.body.Name,
    Description: req.body.Description,
    Height: req.body.Height,
    Width: req.body.Width,
    IsSmart: req.body.IsSmart
  });

  newTv.save().then(newTvData => res.json(newTvData));
});

router.get("/:id", (req, res) => {
  Tv.findById(req.params.id)
    .then(tvData => res.json(tvData))
    .catch(err =>
      res.status(404).json({ notvfound: "No tv found with that ID" })
    );
});

module.exports = router;
