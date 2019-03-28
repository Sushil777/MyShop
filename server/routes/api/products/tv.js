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

router.post("/:id",(req, res) => {
    const tvFields = {};
    tvFields.id = req.params.id;
    if (req.body.Name) tvFields.Name = req.body.Name;
    if (req.body.Description) tvFields.Description = req.body.Description;
    if (req.body.Height) tvFields.Height = req.body.Height;
    if (req.body.Width) tvFields.Width = req.body.Width;
    if (req.body.IsSmart) tvFields.IsSmart = req.body.IsSmart;

    Tv.findById(req.params.id).then(tv => {
      if (tv) {
        Tv.findOneAndUpdate(
          { _id: req.params.id },
          { $set: tvFields },
          { new: true }
        ).then(tvData => res.json(tvData));
      }
    });
  }
);

router.delete("/:id", (req, res) => {
  Tv.findById(req.params.id)
    .then(Tv => {
      Tv.remove().then(() => res.json({ success: true }));
    })
    .catch(err => 
      res.status(404).json({ Tvnotfound: "No Tv found with that ID" })
    );
});

module.exports = router;
