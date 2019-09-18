const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
  console.log(req.query);
  return res.send('ola');
});
app.listen(3000, () => {
  console.debug('server running on port 3000');
});

