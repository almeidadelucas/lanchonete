const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('bla'); 
 });

module.exports = router;