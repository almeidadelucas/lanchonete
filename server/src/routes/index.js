const express = require('express');

const router = express.Router();

router.use('/ingredients', require('../features/ingredient/routes'));

module.exports = router;
