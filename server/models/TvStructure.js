const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tvStructureSchema = new Schema({
  caption: { type: String },
  type: { type: String },
  mandatory: { type: Boolean },
  defaultValue: { type: String },
  validationMessage: { type: String }
});

module.exports = TvStructure = mongoose.model("tvDefinitions", tvStructureSchema);
