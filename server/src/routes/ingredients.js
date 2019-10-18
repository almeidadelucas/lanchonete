const express = require('express');
const Ingredient = require('../schema/ingredients.js');

const router = express.Router();

router.get('/', (req, res) => {
    Ingredient.find((err, ingredients) => {
        return err ? res.send('Error to find all ingredients!') : res.send(ingredients);
    });
});

router.get('/:id', (req, res) => {
    Ingredient.findOne({_id: req.params.id}, 'name value', (err, ingredient) => {
        return err ? res.send('Error to find ingredient!') : res.send(ingredient);
    });
});

router.post('/', (req, res) => {
    const newIngredient = new Ingredient(req.body);
    newIngredient.save(err => {
        return err ? res.send('Error to create ingredient!') : res.send(newIngredient)
    });
});

router.delete('/', (req, res) => {
    Ingredient.deleteMany(err => {
        return err ? res.send('Error to delete all ingredients!') : res.send('Ingredients deleted with succes!');
    });
});

router.delete('/:id', (req, res) => {
    Ingredient.deleteOne({_id: req.params.id}, err => {
        return err ? res.send('Error to delete this ingredient!') : res.send('Ingredient deleted with succes!');
    });
});

// router.post('/:id', (req, res) => {
//     Ingredient.updateOne(err => {
//         return err ? res.send('Error to update ingredient!') : res.send('Ingredient updated with succes!');
//     });
// });

module.exports = router;