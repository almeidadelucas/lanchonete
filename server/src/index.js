const express = require('express');
const mongoose = require('mongoose');
const routers = require('./routes');


const app = express();

mongoose.connect('mongodb://localhost/lanchonete', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routers);

app.listen(3000, () => {
  console.debug('server running on port 3000');
});

