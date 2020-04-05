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

const destroy = (id) => Ingredient.deleteOne({ _id: id });

const destroyAll = () => Ingredient.deleteMany();

const findById = (id) => Ingredient.findOne({ _id: id }, 'name price');

const findAll = () => Ingredient.find();

const update = (id, newData) => Ingredient.findByIdAndUpdate(id, newData, { new: true });

module.exports = {
  create,
  destroy,
  destroyAll,
  findById,
  findAll,
  update,
};
