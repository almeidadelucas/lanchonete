const express = require('express');
const mongoose = require('mongoose');
const Ingredient = require('../modules/ingredients.js');

const router = express.Router();

router.get('/', (req, res) => {
    Ingredient.findOne({name: 'salada'}, 'name value', function (err, ingredients) {
        err ? res.send('Error to find ingredients!') : res.send(ingredients);
    });
});

router.post('/post', (req, res) => {
    let newIngredient = new Ingredient({name: "Salada", value: 2.5});
    Ingredient.create(newIngredient)
        .then(function (createdIngredient) {
            res.json(createdIngredient);     
        })
        .catch(function(err) {
            res.json(err);
        })
});

module.exports = router;