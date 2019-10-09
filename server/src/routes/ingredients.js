const express = require('express');
const mongoose = require('mongoose');
const IngredientSchema = require('../modules/ingredients');

const router = express.Router();
const Ingredient = mongoose.model('Ingredient', IngredientSchema);

router.get('/', (req, res) => {
    Ingredient.find({'name': 'salada'}, 'name value', function (err, ingredients) {
        err ? res.send('Error to find ingredients!') : res.send(ingredients);
    });
});

router.post('/post/:name', (req, res) => {
    res.send(req.params.name);
});

module.exports = router;