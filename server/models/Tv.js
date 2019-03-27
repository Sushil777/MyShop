const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tvSchema = new Schema({
  Name: { type: String },
  Description: { type: String },
  Height: { type: Number },
  Width: { type: Number },
  IsSmart: { type: Boolean }
});

module.exports = tv = mongoose.model("tvs", tvSchema);
