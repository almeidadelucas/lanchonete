const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const IngredientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Missing name!"]
  },
  value: {
    type: Number,
    required: [true, "Missing value!"]
  }
});

const Ingredient = mongoose.model('Ingredient', IngredientSchema);
module.exports = Ingredient;