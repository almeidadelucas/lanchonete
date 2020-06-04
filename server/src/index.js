const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routers = require('./routes');
const logger = require('./utils/logger');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routers);
app.use((req, res, next) => {
  const err = new Error('Route not found');
  err.statusCode = 404;
  next(err);
});
app.use((err, req, res, next) => {
  const { message } = err;
  const statusCode = err.statusCode ? err.statusCode : 500;
  logger.error(err.message);
  res.status(statusCode).send(message);
});

const server = app.listen(PORT, () => {
  mongoose
    .connect('mongodb://localhost/lanchonete', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => logger.info('Server running on port 3000'))
    .catch(err => logger.error(`Error to start the server: ${err.message}`));
});

module.exports = {
  app,
  server,
};
