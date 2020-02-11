const express = require('express');
const service = require('./service');

const router = express.Router();

router.get('/', (req, res) => service.findAll()
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err)));

router.get('/:id', (req, res) => service.findById(req.params.id)
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err)));

router.post('/', (req, res) => service.create(req.body)
  .then((data) => res.sendStatus(200).send(data))
  .catch((err) => res.sendStatus(500).send(err)));

router.put('/:id', (req, res) => service.update(req.params.id, req.body)
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err)));

router.delete('/', (req, res) => service.destroyAll()
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err)));

router.delete('/:id', (req, res) => service.destroy(req.params.id)
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err)));

module.exports = router;
