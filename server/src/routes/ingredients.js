const express = require('express');
const mongoose = require('mongoose');
const IngredientSchema = require('../modules/ingredients');

const router = express.Router();
const Ingredient = mongoose.model('Ingredient', IngredientSchema);

router.get('/', (req, res) => {
    Ingredient.find({name: 'salada'}, 'name value', function (err, ingredients) {
        err ? res.send('Error to find ingredients!') : res.send(ingredients);
    });
});

router.post('/post/:name', (req, res) => {
    let newIngredient = new Ingredient({name: req.params.name, value: 2.5});
    newIngredient.save(function(err) {
        err ? res.send('Error to create ingredint!') : res.send('Ingredient created with succes!');
    });
});

module.exports = router;