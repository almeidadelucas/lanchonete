const express = require('express');
const Ingredient = require('../schema/ingredients.js');

const router = express.Router();

router.get('/', (req, res) => {
    Ingredient.findOne({name: 'Salada'}, 'name value', function (err, ingredients) {
        err ? res.send('Error to find ingredients!') : res.send(ingredients);
    });
});

router.post('/post', (req, res) => {
    let newIngredient = new Ingredient({name: "Salada", value: 2.5});
    newIngredient.save(function(err) {
        if(err) throw err;
        res.send('Ingridient created with succes');
    });
});

module.exports = router;