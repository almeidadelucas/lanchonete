const express = require('express');
const Ingredient = require('../schema/ingredients.js');

const router = express.Router();


router.get('/', (req, res) => {
    Ingredient.find((err, ingredients) => {
        return err ? res.send('Error to find all ingredients!') : res.send(ingredients);
    });
});

router.get('/:name', (req, res) => {
    Ingredient.findOne({name: req.params.name}, 'name value', (err, ingredient) => {
        return err ? res.send('Error to find ingredients!') : res.send(ingredient);
    });
});

router.post('/', (req, res) => {
    const newIngredient = new Ingredient(req.body);
    newIngredient.save(err => {
        if(err) throw err;
        console.log(teste);
        return res.send('Ingridient created with succes');
    });
});

module.exports = router;