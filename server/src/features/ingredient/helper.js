const Ingredient = require('./model');

const create = (data) => {
  const savedIngredients = [];
  let ingredientsToAdd = data;

  if (!Array.isArray(data)) {
    ingredientsToAdd = [data];
  }

  try {
    ingredientsToAdd.forEach((ingredient) => {
      const newIngredient = new Ingredient(ingredient);
      newIngredient.save();
      savedIngredients.push(newIngredient);
    }); 
    return Promise.resolve(savedIngredients);
  } catch (err) {
    return Promise.reject(err);
  }
};

const destroy = (id) => Ingredient.deleteOne({ _id: id }, (err) => (err ? Promise.settled(err) : Promise.resolve("Ingredient deleted with success!")));

const destroyAll = () => Ingredient.deleteMany((err) => (err ? Promise.settled(err) : Promise.resolve('Ingredients deleted with succes!')));

const findById = (id) => Ingredient.findOne({ _id: id }, 'name price', (err, data) => (err ? Promise.settled(err) : Promise.resolve(data)));

const findAll = () => Ingredient.find((err, data) => (err ? Promise.settled(err) : Promise.resolve(data)));

const update = (id, data) => Ingredient.findByIdAndUpdate(id, data, { new: true }, (err, data) => (err ? Promise.settled(err) : Promise.resolve(data)));

module.exports = {
  create,
  destroy,
  destroyAll,
  findById,
  findAll,
  update,
};
