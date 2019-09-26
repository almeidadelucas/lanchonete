const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const Ingridient = new Schema({
  name: String,
  value: Float32Array
});