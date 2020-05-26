const express = require('express');
const pino = require('pino-http')({
  prettyPrint: {
    colorize: true,
    levelFirst: true,
    ignore: 'res,req,responseTime',
  },
});
const service = require('./service');

const router = express.Router();
router.use(pino);

router.get('/', (req, res, next) => {
  req.log.info('GET /ingredients/');
  return service.findAll()
    .then(data => res.status(200).send({
      data,
      message: 'All ingredient getted with success!',
    }))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  req.log.info(`GET /ingredients/${req.params.id}`);
  return service.findById(req.params.id)
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
    .catch(next);
});

router.post('/', (req, res, next) => {
  req.log.info('POST /ingredients/');
  return service.create(req.body)
    .then(data => res.status(200).send({
      data,
      message: 'Ingredient(s) created with success!',
    }))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  req.log.info(`PUT /ingredients/${req.params.id}`);
  return service.update(req.params.id, req.body)
    .then(data => res.status(200).send({
      data,
      message: 'Ingredient updatted with success!',
    }))
    .catch(next);
});

router.delete('/', (req, res, next) => {
  req.log.info('DELETE /ingredients/');
  return service.destroyAll()
    .then(() => res.status(200).send({
      data: null,
      message: 'All ingredients was deleted with succes!',
    }))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  req.log.info(`DELETE /ingredients/${req.params.id}`);
  return service.destroy(req.params.id)
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
    .catch(next);
});

module.exports = router;
