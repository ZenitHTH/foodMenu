const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let foodSchema = new Schema({
  idfood: Number,
  idtype: Number,
  idSubType: Number,
  name: String,
  price: Number,
});

module.exports = mongoose.module("food", foodSchema);

module.exports.saveProduct = (model, data) => {
  model.save(data);
};
