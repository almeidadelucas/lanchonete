const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routers = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost/lanchonete', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routers);

const server = app.listen(3000, () => {
  console.debug('server running on port 3000');
});

module.exports = {
  app,
  server,
};
