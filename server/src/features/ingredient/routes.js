const express = require('express');
const service = require('./service');

const router = express.Router();

router.get('/', (req, res, next) => service.findAll()
  .then(data => res.status(200).send({
    data,
    message: 'All ingredient getted with success!',
  }))
  .catch(err => next(err)));

router.get('/:id', (req, res, next) => service.findById(req.params.id)
  .then(data => {
    if (data) {
      return res.status(200).send({
        data,
        message: 'Ingredient getted with success!',
      });
    }
    return res.status(404).send({
      data: null,
      message: 'Ingredient not found!',
    });
  })
  .catch(err => next(err)));

router.post('/', (req, res, next) => service.create(req.body)
  .then(data => res.status(200).send({
    data,
    message: 'Ingredient(s) created with success!',
  }))
  .catch(err => next(err)));

router.put('/:id', (req, res, next) => service.update(req.params.id, req.body)
  .then(data => res.status(200).send({
    data,
    message: 'Ingredient updatted with success!',
  }))
  .catch(err => next(err)));

router.delete('/', (req, res, next) => service.destroyAll()
  .then(() => res.status(200).send({
    data: null,
    message: 'All ingredients was deleted with succes!',
  }))
  .catch(err => next(err)));

router.delete('/:id', (req, res, next) => service.destroy(req.params.id)
  .then(data => {
    let message;
    if (data.deletedCount < 1) {
      message = 'Nothing deleted!';
    } else if (data.deletedCount === 1) {
      message = '1 ingredient deleted with success!';
    } else {
      message = `${data.deletedCount} ingredients deleted with success!`;
    }
    res.status(200).send({
      data: null,
      message,
    });
  })
  .catch(err => next(err)));

module.exports = router;
