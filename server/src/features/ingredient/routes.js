const express = require('express');
const helper = require('./helper');
const Ingredient = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  Ingredient.find((err, ingredients) => (err ? res.status(500).send('Error to find all ingredients!') : res.status(200).send(ingredients)));
});

router.get('/:id', (req, res) => {
  Ingredient.findOne({ _id: req.params.id }, 'name value', (err, ingredient) => (err ? res.status(500).send('Error to find ingredient!') : res.status(200).send(ingredient)));
});

router.post('/', (req, res) => helper.create(req.body)
  .then((data) => res.sendStatus(200).send(data))
  .catch((err) => res.sendStatus(500).send(err)));

router.put('/:id', (req, res) => {
  Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, ingredient) => (err ? res.status(500).send('Erro to update ingredient') : res.status(200).send(ingredient)));
});

router.delete('/', (req, res) => {
  Ingredient.deleteMany((err) => (err ? res.status(500).send('Error to delete all ingredients!') : res.status(200).send('Ingredients deleted with succes!')));
});

router.delete('/:id', (req, res) => {
  Ingredient.deleteOne({ _id: req.params.id }, (err) => (err ? res.status(500).send('Error to delete this ingredient!') : res.status(200).send('Ingredient deleted with succes!')));
});

module.exports = router;
