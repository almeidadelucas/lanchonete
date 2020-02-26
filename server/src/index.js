const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://localhost/lanchonete', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.listen(3000, () => {
  // console.debug('server running on port 3000');
});
