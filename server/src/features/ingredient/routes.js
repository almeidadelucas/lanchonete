const express = require('express');
const helper = require('./helper');
const Ingredient = require('./model');

const router = express.Router();

router.get('/', (req, res) => helper.findAll()
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err))
);

router.get('/:id', (req, res) => helper.findById(req.params.id)
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err))
);

router.post('/', (req, res) => helper.create(req.body)
  .then((data) => res.sendStatus(200).send(data))
  .catch((err) => res.sendStatus(500).send(err)));

router.put('/:id', (req, res) => helper.update(req.params.id, req.body)
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err))
);

router.delete('/', (req, res) => helper.destroyAll()
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err))
);

router.delete('/:id', (req, res) =>  helper.destroy(req.params.id)
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err))
);

module.exports = router;
