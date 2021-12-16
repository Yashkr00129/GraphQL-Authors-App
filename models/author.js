const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

let authorModel = mongoose.model("Author", authorSchema);
module.exports = authorModel;
