const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const IngridientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Missing name!"]
  },
  value: {
    type: Float32Array,
    required: [true, "Missing value!"]
  }
});

const Ingridient = mongoose.model('Ingridient', IngridientSchema);