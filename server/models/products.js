const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Products = new Schema({
  name: { type: String, unique: true, required: true, dropDups: true },
  categoryId: String,
  description: String,
  image: String,
  price: String
});

module.exports = mongoose.model("Products", Products);
