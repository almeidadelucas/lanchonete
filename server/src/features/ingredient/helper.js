const Ingredient = require('./model');

const create = data => {
  const savedIngredients = [];
  if (!Array.isArray(data)) 
    ingredientsToAdd = [data];
  else
    ingredientsToAdd = data;

  try {
    ingredientsToAdd.forEach(ingredient => {
      const newIngredient = new Ingredient(ingredient);
      newIngredient.save();
      savedIngredients.push(newIngredient)
    })
    return Promise.resolve(savedIngredients);
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = {
  create,
}