const mongoose = require('mongoose');

const { Schema } = mongoose;

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Missing name!'],
  },
  price: {
    type: Number,
    required: [true, 'Missing price!'],
  },
});

const Ingredient = mongoose.model('Ingredient', IngredientSchema);
module.exports = Ingredient;
