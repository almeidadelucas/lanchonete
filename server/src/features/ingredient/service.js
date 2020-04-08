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

const destroy = (_id) => Ingredient.deleteOne({ _id });

const destroyAll = () => Ingredient.deleteMany();

const findById = (_id) => Ingredient.findOne({ _id }, 'name price');

const findAll = () => Ingredient.find();

const update = (_id, newData) => Ingredient.findByIdAndUpdate(_id, newData, { new: true });

module.exports = {
  create,
  destroy,
  destroyAll,
  findById,
  findAll,
  update,
};
