const express = require('express');
const service = require('./service');

const router = express.Router();

router.get('/', (req, res) => service.findAll()
  .then((data) => res.status(200).send({
    data,
    message: 'All ingredient getted with success!',
  }))
  .catch((err) => res.status(500).send(err)));

router.get('/:id', (req, res) => service.findById(req.params.id)
  .then((data) => {
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
  .catch((err) => res.status(500).send(err)));

router.post('/', (req, res) => service.create(req.body)
  .then((data) => res.status(200).send({
    data,
    message: 'Ingredient(s) created with success!',
  }))
  .catch((err) => res.status(500).send(err)));

router.put('/:id', (req, res) => service.update(req.params.id, req.body)
  .then((data) => res.status(200).send({
    data,
    message: 'Ingredient updatted with success!',
  }))
  .catch((err) => res.status(500).send(err)));

router.delete('/', (req, res) => service.destroyAll()
  .then(() => res.status(202).send({
    data: null,
    message: 'All ingredients was deleted with succes!',
  }))
  .catch((err) => res.status(500).send(err)));

router.delete('/:id', (req, res) => service.destroy(req.params.id)
  .then((data) => {
    let message;
    if (data.deletedCount < 1) {
      message = 'Nothing deleted!';
    } else if (data.deletedCount === 1) {
      message = '1 ingredient deleted with success!';
    } else {
      message = `${data.deletedCount} ingredients deleted with success!`;
    }
    res.status(202).send({
      data: null,
      message,
    });
  })
  .catch((err) => res.status(500).send(err)));

module.exports = router;
